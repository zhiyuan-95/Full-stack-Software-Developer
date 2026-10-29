# Virtualization and Virtual Machines

## Summary

**Virtualization** creates software-based versions of computing resources, including compute, storage, networking, servers, and applications. A **hypervisor** makes this possible by taking resources from a physical server and allocating them to independent virtual environments called **virtual machines (VMs)**.

Virtualization remains central to cloud computing because it supports infrastructure consolidation, rapid provisioning, portability, and recovery from hardware failures.

## Core architecture

```text
Physical server resources
          ↓
      Hypervisor
          ↓
Multiple independent virtual machines
```

The physical server is the **host**. The hypervisor manages its processor, memory, storage, and other resources and distributes them among the VMs.

## Types of hypervisors

### Type 1: Bare-metal hypervisor

A **Type 1 hypervisor** is installed directly on the physical server.

```text
Virtual machines
       ↓
Type 1 hypervisor
       ↓
Physical server
```

The lecture describes Type 1 hypervisors as:

- More frequently used
- More secure
- Lower in latency
- Common in cloud and enterprise environments

Examples:

- **VMware ESXi**
- **Microsoft Hyper-V**
- Open-source **KVM**

### Type 2: Hosted hypervisor

A **Type 2 hypervisor** runs on top of a host operating system.

```text
Virtual machines
       ↓
Type 2 hypervisor
       ↓
Host operating system
       ↓
Physical server
```

The additional operating-system layer generally gives Type 2 hypervisors higher latency than Type 1 hypervisors. They are less common in cloud infrastructure and are mainly associated with end-user virtualization.

Examples:

- **Oracle VirtualBox**
- **VMware Workstation**

## Hypervisor comparison

| Characteristic | Type 1 | Type 2 |
|---|---|---|
| Other name | Bare-metal | Hosted |
| Installation | Directly on the physical server | On top of a host operating system |
| Architecture | Hardware → hypervisor → VMs | Hardware → host OS → hypervisor → VMs |
| Latency | Lower | Higher |
| Typical use | Cloud and enterprise infrastructure | End-user and desktop virtualization |
| Lecture examples | VMware ESXi, Microsoft Hyper-V, KVM | Oracle VirtualBox, VMware Workstation |

## Virtual machines

A **virtual machine** is a software-based computer that behaves like a physical computer. Each VM can have its own:

- Operating system
- Applications
- Allocated computing resources

Multiple VMs can run on the same hypervisor while remaining independent of one another. For example, one physical host could simultaneously run separate VMs using:

- Windows
- Linux
- UNIX

The hypervisor determines how the physical server’s resources are allocated among these environments.

## Portability

Because VMs are software-based and independent, they can be moved between compatible hosts or hypervisors. This portability provides flexibility and can support recovery when a physical server fails.

The lecture presents VM migration as a rapid process, but it does not explain its technical requirements or limitations.

## Benefits of virtualization

### 1. Cost savings

Virtualization allows multiple environments to share one physical server. This consolidation can reduce:

- The number of physical servers required
- Data-center space
- Electricity consumption
- Hardware maintenance
- Overall infrastructure costs

### 2. Agility and speed

Creating a VM is generally faster and easier than provisioning an entirely new physical environment. Teams can quickly create environments for development, testing, or other workloads.

### 3. Reduced downtime

If a physical host fails, its VMs may be moved or recovered on another functioning host. This provides a recovery option and can reduce service interruption.

## Key takeaway

Virtualization separates computing environments from the underlying physical hardware. Hypervisors allocate host resources among independent VMs, allowing multiple operating systems and applications to share the same infrastructure. This makes virtualization—and especially Type 1 hypervisors and VMs—a foundational technology for cloud computing.
