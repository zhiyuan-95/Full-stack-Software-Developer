# History and Evolution of Cloud Computing

## Summary

Modern cloud computing developed through several stages: shared mainframe access, virtual machines, server virtualization, Internet-based resource delivery, and pay-as-you-go billing. Together, these advances allowed computing resources to be pooled, provisioned quickly, scaled with demand, and purchased as an operating expense rather than through large hardware investments.

## Evolution timeline

| Period | Development | Importance |
|---|---|---|
| **1950s** | Large-scale mainframes and time-sharing | Multiple users shared expensive processing and storage resources. |
| **1970s** | Virtual Machine (VM) operating system | Multiple isolated computing environments could run on one physical computer. |
| **Internet era** | Shared hosting and virtual servers | Organizations could divide physical servers into multiple virtual systems. |
| **Modern cloud era** | On-demand provisioning and utility billing | Users could obtain resources quickly, pay only for usage, and scale capacity as needed. |

## 1. Mainframes and time-sharing

Cloud computing’s foundations date to the **1950s**, when large mainframe computers offered high-volume processing power.

Because mainframes were expensive, organizations used **time-sharing**, also described as resource pooling, to use their capacity efficiently.

Users connected through **dumb terminals**. These terminals primarily provided access to the mainframe rather than performing substantial processing themselves. Multiple users could therefore share:

- CPU power
- Data storage
- Mainframe applications
- Other computing resources

This established the basic idea of sharing a centralized pool of computing power.

## 2. Virtual machines

In the **1970s**, the release of an operating system called **Virtual Machine (VM)** extended the shared-resource model.

Virtualization allowed several distinct computing environments to exist on one physical machine. Each virtual machine could run a guest operating system that behaved as though it had its own:

- Memory
- CPU
- Hard drives
- Operating environment

In reality, these resources were drawn from the same physical hardware.

This made virtualization a major driver of later developments in computing and communications.

## 3. Hypervisors and server virtualization

A **hypervisor** is a software layer that enables multiple operating systems to run alongside one another while sharing the same physical computing resources.

The hypervisor:

- Creates and manages virtual machines
- Allocates processing power, memory, and storage
- Logically separates the virtual machines
- Helps prevent one virtual machine from interfering with another

For example, if one virtual machine experiences an operating-system crash or security compromise, the other virtual machines may continue operating.

Virtualization also reduced hardware requirements. Instead of purchasing a separate physical system for every application, a company could divide one physical server into multiple virtual systems.

This supported environments such as:

- Shared hosting
- Virtual private servers
- Virtual dedicated servers

## 4. From virtualization to cloud computing

As Internet access became more widely available, providers could make virtualized computing resources available remotely.

Organizations and individual developers no longer needed to own large numbers of physical servers. Because the provider’s servers were already installed and online, users could quickly create—or **spin up**—new virtual instances from a larger pool of resources.

Cloud computing therefore combined several ideas:

1. Shared physical infrastructure
2. Virtualized computing environments
3. Network-based access
4. On-demand provisioning
5. Usage-based billing
6. Elastic scaling

## 5. Pay-as-you-go computing

The **pay-as-you-go** model allows customers to pay for computing resources when they use them. It is also called **utility computing** because the billing model resembles paying for units of electricity.

This approach became a major driver of cloud adoption because it made computing resources available without requiring large upfront hardware purchases.

## CapEx versus OpEx

| Model | Meaning | Financial effect |
|---|---|---|
| **CapEx** | Capital expenditure | The organization makes a substantial upfront investment in physical hardware. |
| **OpEx** | Operating expenditure | The organization pays for computing resources as they are consumed. |

Cloud computing enabled organizations to shift some technology spending from a **CapEx model** to a more cash-flow-friendly **OpEx model**.

This appealed to:

- Startups and developers with little or no hardware
- Growing businesses that needed flexible capacity
- Large organizations that already owned substantial infrastructure
- Companies wanting to avoid purchasing hardware for temporary demand

## Elastic workloads

Cloud resources can change with workload demand:

- During a usage peak, an organization can increase its computing resources.
- When demand falls, it can reduce those resources.
- The customer pays according to the resources used rather than permanently maintaining peak capacity.

This elasticity, combined with virtualization and utility billing, gave rise to modern cloud computing.

## Takeaway

Cloud computing evolved by combining **mainframe resource sharing**, **virtualization**, **hypervisor-based isolation**, **Internet connectivity**, **on-demand provisioning**, and **pay-as-you-go pricing**. It transformed computing infrastructure from something organizations primarily purchased and maintained into a flexible service they could consume and scale according to need.
