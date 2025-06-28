---
title: Kubernetes and ROS are surprisingly similar
date: '2025-06-29'
tags: ['kubernetes', 'ROS', 'distributed systems']
draft: false
summary: Why learning ROS made Kubernetes click for me.
images: []
---

So I was deep into Kubernetes this weekend, trying to wrap my head around pods and services, when it hit me - this is just ROS with different names. If you don't know ROS, [look here, if ](https://abhishekshree.github.io/blog/ros-a-primer), if you dont know Kubernetes, [look here](https://abhishekshree.github.io/blog/kubernetes-a-primer).

I found it strikingly similar how both systems approach the same core problem: orchestrating a bunch of independent processes without everything falling apart. The more I thought about it, the more fascinating this parallel became.

# Twins fr

**ROS Master = Kubernetes API Server**
The ROS Master acts like DNS for your robot nodes - it tracks who's publishing what and who needs to subscribe to what. The Kubernetes API server does exactly the same thing for containers, maintaining the cluster state and handling service discovery.

**Nodes = Pods** 
A ROS node is an independent process that does one thing well. A Kubernetes pod is... an independent process (or group of tightly coupled processes) that does one thing well. Both are the fundamental unit of computation in their respective systems.

**Topics = Services**
ROS topics provide publish-subscribe messaging between nodes. Kubernetes services provide networking abstraction between pods. Different implementation, same concept - decoupled communication.

**Parameter Server = ConfigMaps/Secrets**
Both systems need a way to share configuration. ROS uses the Parameter Server as a shared dictionary. Kubernetes uses ConfigMaps and Secrets. Same pattern, different names.

**Launch Files = Manifests**
Want to start multiple ROS nodes with specific configurations? Write a launch file. Want to deploy multiple Kubernetes resources? Write YAML manifests. Both are declarative ways to describe your desired system state.

# The Orchestration Magic

Here's where it gets interesting. Both systems are **declarative** - you tell them what you want, not how to get there.

In ROS, you don't manually start nodes and wire up topics. You declare your system in launch files and let ROS figure out the startup order and communication paths.
With Kubernetes, you don't manually start containers and configure networking. You declare your desired state in manifests and let Kubernetes figure out scheduling, networking, and health management.

Both systems also handle **failure gracefully**. If a ROS node crashes, other nodes can detect the failure and potentially restart or replace it. If a pod crashes, Kubernetes automatically restarts it or spins up replacements.

# Where They Diverge

ROS assumes everything runs on the same network (though [ROS 2 is changing this](https://www.yahboom.net/public/upload/upload-html/1747127709/16.ROS2%20distributed%20communication.html), wish I had the chance to work on it someday). Kubernetes assumes everything might be distributed across multiple machines.

ROS is real-time focused - your robot control loop can't afford 100ms latencies (launghs in the barrel roll attempt [we did in 2024](https://www.youtube.com/watch?v=jmPLSV7gSB0)). Kubernetes prioritizes resilience and scalability over absolute performance.

ROS has specialized tools for robotics (tf for coordinate transforms, URDF for robot descriptions), jokes on k8s.

If you understand ROS, Kubernetes concepts should feel familiar. Both are solving the **distributed systems coordination problem** - they just happen to be optimized for different domains.

The mental model transfers beautifully. Instead of thinking about Kubernetes as some mysterious cloud thing, think of it as ROS for web applications. Instead of roscore, you have the API server. Instead of rostopic, you have kubectl. All of this might be useful, or just a 3AM thought. 
