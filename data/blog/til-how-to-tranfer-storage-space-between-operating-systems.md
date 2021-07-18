---
title: TIL - How to tranfer storage space between Operating Systems
date: '2021-07-15'
tags: ['Linux']
draft: false
summary: How to move X space to some Y place on disk, and vice versa.
images: []
---

Recently I ran into a trouble when I installed Manjaro on my Laptop. I actually underestimated how much space it will need to get my daily tasks done. But then the OS was already installed, so were Ubuntu 21.10, and Ubuntu 20.04 (because of ROS, but this one has i3 now), and Windows ofcourse.

One way I thought to increase the root and home partition was by unallocating some space from Ubuntu using Manjaro, and then give it to Manjaro using Ubuntu's session. But oh wait, ubuntu 21.10 was on the leftmost end of the partition table and Manjaro was on the rightmost end, so even after unallocating the storage, I had to way to _shift_ it to reach the Manjaro end. 

Turns out we indeed can shift the partitions but I had to live boot into a Manjaro enviornment and then use gParted to perform the **Unallocation, Shifting and Reallocation** which took good 5 hours, _phew_.

---

**Key Takeaway:** It is always recommended to live boot from another environment if you're changing partition sizes of multiple Operating systems at a time. Also, changing the root partition can cause trouble if done from another OS present on the same disk and not a live boot.

![disks](/static/images/disks.png)