# Infrastructure as a Service (IaaS)

## Summary

**Infrastructure as a Service (IaaS)**—pronounced “eye-es”—is a cloud-computing model that delivers fundamental **compute, network, and storage resources**:

- On demand
- Over the internet
- On a pay-as-you-go basis

The cloud provider manages the physical data-center infrastructure and virtualization layer. Customers provision virtual machines and use them to deploy middleware, applications, storage, backups, and other workloads.

## Division of responsibilities

| Cloud provider | Customer |
|---|---|
| Hosts the physical data centers and hardware | Selects an available **Region and Zone** |
| Manages infrastructure components traditionally found in an on-premises data center | Creates or provisions virtual machines |
| Manages the virtualization or **hypervisor** layer | Selects an operating system |
| Provides compute, networking, and storage resources | Deploys middleware and applications |
| Offers performance and usage monitoring capabilities | Runs and manages workloads |
| Provides supporting disaster-recovery capabilities | Creates storage for workloads and backups |

## How IaaS works

1. The provider operates physical infrastructure in large data centers.
2. A virtualization or hypervisor layer converts that infrastructure into configurable cloud resources.
3. Customers provision **virtual machines (VMs)** in their chosen Region and Zone.
4. VMs typically come with the customer’s selected operating system pre-installed.
5. Customers install middleware and applications and then run their workloads.
6. Resources can be monitored, scaled, backed up, and incorporated into disaster-recovery plans.

## Key infrastructure components

### 1. Physical data centers

IaaS providers manage large data centers containing the physical machines that support the different abstraction layers.

End users generally do not interact directly with this hardware. Instead, they consume its capabilities as a service.

### 2. Compute

The provider manages the hypervisors, while customers programmatically provision virtual instances with their desired amounts of:

- Computing power
- Memory
- Storage

Cloud compute commonly includes supporting services such as:

- **Auto scaling:** Automatically adjusts resources as demand changes.
- **Load balancing:** Distributes workloads to support scalability and high performance.

### 3. Network

Customers access cloud-networking resources through virtualization or programmatically through **application programming interfaces (APIs)**.

These resources connect virtual machines, applications, storage, and other cloud services.

### 4. Storage

IaaS provides three principal forms of cloud data storage:

| Storage type | General role |
|---|---|
| **Object storage** | Stores data as objects in a highly distributed and resilient system |
| **File storage** | Organizes data through files and directories |
| **Block storage** | Divides data into blocks that can be attached to computing resources |

The lecture identifies **object storage** as the most common cloud-storage model because it is highly distributed and resilient.

## Common IaaS use cases

### Test and development environments

Organizations can establish test and development environments more quickly, helping teams create applications faster.

By abstracting low-level infrastructure components, IaaS allows developers to focus more on **business logic** than infrastructure management.

### Business continuity and disaster recovery

Traditional business-continuity and disaster-recovery systems can require substantial investments in technology and staff.

IaaS can:

- Reduce these costs
- Provide resources for backups and recovery
- Help keep applications and data accessible during a disaster or outage

### Web application hosting

Organizations use IaaS to deploy web applications faster and scale their infrastructure up or down as demand changes.

### High-performance computing

IaaS supplies the computing power needed to solve problems involving millions of variables and calculations, including:

- Climate prediction
- Weather prediction
- Financial modeling

### Big-data processing

Mining massive datasets for valuable patterns, trends, and associations requires significant processing power.

Cloud infrastructure provides high-performance computing resources while making this processing more economically viable.

## Benefits

- Resources are available on demand.
- Customers pay according to usage.
- Infrastructure can scale as demand changes.
- Test and development environments can be established faster.
- Organizations can avoid some physical infrastructure and staffing costs.
- Developers can focus more heavily on application logic.
- High-performance computing becomes more accessible.
- Disaster-recovery and continuity capabilities can be implemented more economically.

## Concerns and limitations

The lecture identifies two important concerns:

- **Limited transparency:** Customers may not have complete visibility into how the provider configures and manages its infrastructure.
- **Third-party dependency:** Workload availability and performance depend partly on the cloud provider.

The lecture also describes IaaS as the fastest-growing cloud model “today.” This is a time-sensitive statement, and the transcript does not provide a date or supporting market data.

## Key takeaway

IaaS gives customers configurable computing infrastructure without requiring them to own or maintain the underlying physical data center. The provider manages the hardware and virtualization layer, while the customer provisions virtual resources and manages the software and workloads running on them.

It is especially useful when an organization needs flexible infrastructure, rapid provisioning, scalable application hosting, disaster recovery, high-performance computing, or large-scale data processing.
