---
title: Kubernetes, EKS and some Karpenter(y)
date: '2025-06-29'
tags: ['kubernetes', 'aws', 'eks', 'karpenter', 'devops']
draft: false
summary: From container chaos to cluster harmony - understanding K8s, EKS flavors, and why Karpenter even exists.
images: []
---

Picture this: It's 2021, and I'm watching a friend at a B2B SaaS startup manually deploying updates to their customer data platform. SSH into server 1, pull the latest code, restart the service. SSH into server 2, repeat. Pray nothing breaks. Fast forward to some time later, that same company is processing millions of events daily across hundreds of microservices, all orchestrated by Kubernetes.

# First encounter with Kubernetes

Modern B2B SaaS companies like whatever, Slack, Paradime ;), etc are distributed computing platforms represented as simple web apps. Behind Slack's chat interface are hundreds of microservices handling message routing, file uploads, search indexing, and notifications. Saw a similar thing with Paradime. Each service needs independent deployment, scaling, and updates across multiple regions, customers, etc. It's pretty cool to see how you keep many tenants under a centrally managable cluster and cater them with updates, patches, and new features without downtime, together.

# Understanding Kubernetes Orchestration

Let's clear up the infrastructure confusion first. A **cluster** spans multiple physical machines (nodes). Each **pod** runs on a single node - you can't split pods across machines, but you can run multiple pods of the same app on different nodes.

## How K8s Orchestration Actually Works

Kubernetes orchestration is essentially a distributed state machine. The **API server** acts as the central state store, etcd holds the persistent state, and various controllers continuously work to make reality match your desired configuration.

A simple orchestration flow when you deploy an application could be,

```
// Kubernetes Orchestration Flow
kubectl apply → API Server → etcd (stores desired state)
                    ↓
            Controller Manager watches changes
                    ↓
    ReplicaSet Controller creates Pod objects
                    ↓
        Scheduler assigns Pods to Nodes
                    ↓
    Kubelet on Node pulls images and starts containers
                    ↓
        kube-proxy configures networking rules
```

It is so much more than just container orchestration, managing networking, persistent storage, and resource allocation. Pretty cool stuff.

The **Controller Manager** runs multiple control loops, each responsible for a specific resource type. The ReplicaSet controller ensures you have the right number of pod replicas. The Deployment controller manages ReplicaSets during rolling updates. The Service controller creates endpoints for load balancing. There are probably a thousands of other blogs you could read about each of the units, so let's just leave it there. 

The scheduler's algorithm, I find pretty cool, is more sophisticated than just resource availability:

```
// Kubernetes Scheduler (simplified)
function schedulePod(pod) {
    eligibleNodes = filterNodes(pod.requirements)
    
    for each node in eligibleNodes {
        score = 0
        score += leastRequestedPriority(node)  // (capacity - requests) / capacity
        score += nodeAffinityPriority(node, pod)
        score += balancedResourceAllocation(node)
        score += imageLocalityPriority(node, pod) // prefer nodes with images cached
        score += interPodAffinityPriority(node, pod) // pod placement preferences
        node.totalScore = score
    }
    
    return node with highest totalScore
}
```

The networking orchestration is particularly clever. Every pod gets its own IP address within a cluster-wide subnet. The **Container Network Interface (CNI)** plugin handles the actual networking implementation. When a pod starts, the kubelet calls the CNI plugin to:
- Create a network namespace for the pod
- Assign an IP address
- Configure routing rules
- Set up network policies

## How Pod IPs Actually Get Handed Out

Picture Kubernetes as a very organized librarian managing IP addresses. When you create a cluster, you're essentially saying "here's my IP address book" - typically something like `10.244.0.0/16`. That's your cluster CIDR, and it's finite. 65,536 IPs to be exact.

The distribution looks like this:

```
Your Cluster's IP Real Estate:
10.244.0.0/16 (65,536 total addresses)
    ↓
Node 1 gets: 10.244.0.0/24    (256 addresses)
Node 2 gets: 10.244.1.0/24    (256 addresses)  
Node 3 gets: 10.244.2.0/24    (256 addresses)
...you get the pattern
```

Each node becomes a mini IP manager. When a pod starts up:

1. Kubelet taps the CNI plugin on the shoulder: "Hey, need an IP for this new pod"
2. CNI plugin checks its local notebook: "Let's see... 10.244.1.47 is free, there you go"
3. Creates a network namespace, assigns the IP, updates the books
4. Pod gets its own little network identity

Pretty elegant, right? Until reality crashes the party.

## The Math That Ruins Your Day

Here's where that "infinite pods" dream hits some very finite walls:

### IP Address Space - It's Not Actually Infinite

That `/16` CIDR? You're looking at ~65K IPs total. Sounds like a lot until you realize you're carving it up into `/24` chunks (256 IPs per node). You can theoretically have ~256 nodes, but you're losing addresses to:
- Network and broadcast addresses (because networking protocols are picky)
- Service IPs (different CIDR but still affects your planning)
- System pods that you forgot about
- That one guy who hardcoded some random IP somewhere (you know who you are)

Read a bit about EKS as well, AWS has some opinions about your pod density dreams. They have a hard limit on how many pods can run per instance type based on the networking capabilities of the underlying hardware, like:

```
m5.large:   29 pods max   (networking hardware says no)
m5.xlarge:  58 pods max   (double the CPU, not double the pods)
m5.2xlarge: 58 pods max   (same networking limits, just prettier)
c5.24xlarge: 737 pods max (now we're talking, lfggg)
```

Since we are talking networks, it'll be inhuman of me to not take a dig on [this crisis](https://dryairship.github.io/post/when-i-messed-up-the-gymkhana-server/) which could've been avoided and everyone at IITK would still have wifi access if we had such network isolation. 

Services provide stable endpoints for pod groups using kube-proxy, which implements load balancing through iptables rules or IPVS. When you create a service, kube-proxy updates iptables on every node to redirect traffic to healthy pod IPs.

## Resource Orchestration Deep Dive

Resource sharing uses Linux **cgroups** for enforcement and the **Completely Fair Scheduler (CFS)** for CPU time allocation. When you request 250m CPU, that's 250 millicores (0.25 cores). Here's how it works:

```
// Resource allocation logic
function allocateResources(pod, node) {
    // CPU is compressible - can be throttled
    cpuShares = pod.cpuRequest * 1024 / 1000  // Convert millicores to CPU shares
    setCgroupLimit("/sys/fs/cgroup/cpu/pod123/cpu.shares", cpuShares)
    
    // Memory is incompressible - OOM kill if exceeded
    memoryLimit = pod.memoryLimit
    setCgroupLimit("/sys/fs/cgroup/memory/pod123/memory.limit_in_bytes", memoryLimit)
}
```

A 4-core node (4000m total) can run 16 containers each requesting 250m, but only if they don't all peak simultaneously. The CFS ensures fair time slicing among containers sharing the same core. Very very cool stuff.

The orchestration extends to storage through **Container Storage Interface (CSI)**. When a pod needs persistent storage, the scheduler considers volume topology, the CSI driver provisions storage, and the kubelet mounts it into the container.

# What Are Fargates?

Fargate is AWS's serverless compute engine that runs containers without managing infrastructure. Think Lambda for containers with more flexibility.

Traditional containers require provisioning EC2 instances, managing OS, security patches, and monitoring. Fargate abstracts this away. You define container specs (CPU, memory), AWS handles everything else.

The magic happens with Firecracker microVMs. Each Fargate task runs in its own lightweight VM, providing hardware-level isolation. This is why Fargate has longer cold starts than regular containers but better security boundaries. 

# EKS - AWS's Kubernetes Distribution

AWS looked at Kubernetes control plane complexity and said "what if we made this not terrible?" Setting up production K8s involves configuring etcd, API server, scheduler, controller manager, certificates, and high availability. It's a nightmare.

EKS handles this complexity. You get a managed control plane across multiple AZs with automatic backups, patching, and monitoring. Just an HTTPS endpoint to interact with your cluster.

## EKS with EC2 Nodes

The classic approach. You get actual EC2 instances as worker nodes running the kubelet, kube-proxy, and container runtime.

**Resource Sharing**: Traditional Kubernetes resource model. Multiple pods share the same EC2 instance's CPU, memory, and network. A single m5.large (2 vCPUs, 8GB RAM) might run 10-20 small pods efficiently. The kubelet enforces resource limits using cgroups, and pods compete for resources using the CFS scheduler.

**Pros**: Full control, SSH access, persistent storage, privileged containers, GPU support
**Cons**: You manage OS, patches, node lifecycle, capacity planning

## EKS with Fargate

Serverless containers where each pod runs in its own Firecracker microVM.

**Resource Sharing**: No sharing! Each pod gets dedicated CPU and memory allocation. You specify exact resource requirements (0.25 vCPU, 0.5GB RAM up to 4 vCPU, 30GB RAM), and AWS provisions that exact capacity. Think of it as "right-sized VMs" for each workload.

```
// Fargate resource allocation
Pod A: 0.5 vCPU, 1GB RAM → Gets dedicated Fargate task with those exact resources
Pod B: 1 vCPU, 2GB RAM   → Gets separate dedicated Fargate task
```

## Mixed Mode Resource Management

This is where it gets interesting. EKS can intelligently distribute workloads across both compute types based on your specifications:

```
// Mixed mode scheduling
function scheduleWorkload(pod) {
    if (pod.hasLabel("compute-type", "fargate")) {
        scheduleOnFargate(pod)  // Dedicated resources
    } else if (pod.requiresGPU() || pod.isPrivileged()) {
        scheduleOnEC2(pod)      // Shared EC2 resources
    } else {
        optimizeForCost(pod)    // Scheduler picks best option
    }
}
```

**Resource Optimization Strategies**:
- **Steady-state services**: Run on EC2 for cost efficiency through resource sharing
- **Batch jobs**: Use Fargate for predictable resource allocation and no capacity planning
- **Spiky workloads**: Fargate for auto-scaling without pre-provisioned capacity
- **Long-running stateful services**: EC2 with persistent storage

The EKS scheduler considers both resource availability and cost optimization. A CPU-intensive batch job might run on Fargate for dedicated performance, while a low-resource API service runs on shared EC2 instances for cost efficiency.

# Karpenter 

Traditional Cluster Autoscaler is dumb. It monitors unschedulable pods and scales predefined node groups. Need high-memory workloads but only have m5.large node groups? Tough luck convinving AWS team that.

Karpenter implements just-in-time provisioning with intelligent instance selection:

```
// Karpenter's provisioning algorithm (simplified)
function provisionNodes(unschedulablePods) {
    requirements = aggregateRequirements(unschedulablePods)
    
    candidates = []
    for each instanceType in EC2_INSTANCE_TYPES {
        if meetsRequirements(instanceType, requirements) {
            score = calculateScore(instanceType, requirements)
            candidates.add({type: instanceType, score: score})
        }
    }
    
    // Multi-objective optimization
    optimal = candidates.sortBy(cost, performance, availability).first()
    return launchInstance(optimal.type)
}
```

The scoring considers cost, performance, availability, and capacity efficiency. Karpenter also implements consolidation algorithms, continuously monitoring utilization and moving pods to pack them efficiently. 

For spot instances, Karpenter implements diversification strategies, spreading workloads across instance families and AZs. When spot interruption arrives, it gracefully drains nodes and provisions replacement capacity. You can check it [here](https://github.com/aws/karpenter-provider-aws/blob/main/designs/consolidation.md) if you want to read more about the consolidation strategies. I was intrigued, also this blog became massive. 


---

- [EKS Workshop](https://www.eksworkshop.com/)
- [Kubernetes Scheduling Deep Dive](https://kubernetes.io/docs/concepts/scheduling-eviction/)
- [AWS re:Invent Karpenter Talks](https://www.youtube.com/watch?v=lkg_9ETHeks)