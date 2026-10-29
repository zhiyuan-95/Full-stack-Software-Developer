# Cloud Virtual Machine Types and Deployment Options

## Summary

**Virtual machines (VMs)** may also be called **virtual servers**, **virtual instances**, or simply **instances**, depending on the cloud provider.

Cloud providers offer different VM configurations, tenancy models, billing arrangements, and capacity options. Selecting the right combination depends on workload performance, cost, reliability, isolation, and compliance requirements.

## VM provisioning decisions

When creating a VM, users typically select:

- **Region**
- **Zone or Data Center**
- **Operating System**
- **Shared or dedicated tenancy**
- **Hourly or monthly billing**
- **Storage options**
- **Networking options**
- **Compute configuration**, such as virtual cores and RAM

## Configuration options

Providers commonly offer predefined configurations for different workloads:

| Configuration | Optimized for |
|---|---|
| **Compute intensive** | Workloads requiring more processing capacity |
| **Memory intensive** | Workloads requiring larger amounts of RAM |
| **High-performance I/O** | Workloads requiring faster input and output |

Predefined configurations may range from one virtual core with a small amount of RAM to multiple virtual cores with substantially more RAM.

Some providers also offer **custom configurations**, allowing users to select:

- Number of virtual cores
- Amount of RAM
- Local storage characteristics

## VM tenancy models

### Shared or public cloud VMs

Shared VMs are provider-managed, **multi-tenant** deployments. Multiple customers’ VMs share the same underlying physical server.

Characteristics include:

- On-demand provisioning
- Shared physical infrastructure
- Predefined or custom sizes
- Hourly, per-second, or monthly billing
- Support for general-purpose and workload-specific configurations

### Dedicated hosts

A dedicated host provides **single-tenant isolation**: only one customer’s VMs run on the underlying physical host.

When provisioning one, the customer specifies the **Data Center** and **POD**, then assigns VMs to that host.

Dedicated hosts provide:

- Exclusive use of the host’s capacity and resources
- Greater control over workload placement
- Isolation for compliance or regulatory requirements
- Support for specific software-licensing terms

A dedicated host still runs virtual machines; it is distinct from a bare metal server.

## Capacity and purchasing options

### Hourly or per-second VMs

These instances are appropriate when usage is short-term, variable, or uncertain.

The lecture states that some configurations may cost only pennies per hour. Actual billing increments and prices are provider-specific and may change.

### Monthly VMs

Monthly instances may reduce costs when the VM will run for at least a month. Under the model described in the lecture, decommissioning the VM partway through the month does not avoid the full monthly charge.

### Transient or Spot VMs

**Transient or Spot VMs** use spare capacity in a cloud data center. Providers offer that capacity at a substantial discount compared with regular VMs.

The tradeoff is interruption risk: the provider may de-provision the VM at any time to reclaim its capacity.

Appropriate workloads include:

- Development and testing
- Stateless applications
- Scalability testing
- Big-data processing
- High-performance computing (**HPC**)
- Other interruption-tolerant, non-production workloads

Spot VMs are unsuitable for workloads that cannot tolerate sudden termination unless the application is specifically designed to recover.

### Reserved virtual server instances

Reserved instances allow customers to reserve capacity for future deployments.

The process described in the lecture is:

1. Reserve a desired amount of capacity.
2. Select a term, such as **one year** or **three years**.
3. Provision instances from that capacity when required.
4. Receive guaranteed capacity in the selected Data Center for the contract term.

Longer commitments may cost less than hourly or monthly instances. If demand exceeds the reservation, additional capacity can be obtained through hourly or monthly VMs.

Not every predefined VM family or configuration is necessarily available as a reserved instance.

## Understanding the different choices

These options describe different dimensions of a VM deployment rather than a single mutually exclusive list:

| Decision dimension | Options |
|---|---|
| **Tenancy** | Shared/multi-tenant or dedicated/single-tenant |
| **Capacity availability** | Regular, Spot/Transient, or reserved |
| **Billing** | Per second, hourly, monthly, or long-term commitment |
| **Configuration** | Predefined or custom |
| **Workload profile** | General-purpose, compute intensive, memory intensive, or high-performance I/O |

## Comparison

| Option | Main advantage | Main limitation | Suitable use |
|---|---|---|---|
| **Shared/public VM** | Flexible, on-demand provisioning | Physical host is shared | General cloud workloads |
| **Spot/Transient VM** | Substantially lower cost | Provider may reclaim it at any time | Stateless, development, testing, big data, and HPC |
| **Reserved capacity** | Guaranteed future capacity and potential savings | Long-term commitment; availability may vary by VM family | Predictable, sustained demand |
| **Dedicated host** | Single-tenant isolation and placement control | Greater commitment to specific infrastructure | Compliance, regulation, or licensing requirements |

## Key takeaway

Choosing a cloud VM involves balancing performance, cost, interruption risk, capacity guarantees, and isolation. Shared VMs provide general-purpose flexibility, Spot VMs reduce costs for interruptible work, reserved capacity supports predictable long-term demand, and dedicated hosts provide stronger isolation and workload-placement control.

> **Source note:** The supplied transcript contained three copies of the lecture followed by note-taking interface text. The repeated material and interface artifacts were removed. Pricing and discount statements are provider-dependent lecture claims rather than independently verified current prices.
