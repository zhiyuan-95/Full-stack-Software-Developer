# Bare Metal Servers in Cloud Computing

## Summary

A **bare metal server** is a dedicated, single-tenant physical server assigned to one customer. Unlike a typical shared virtual server, its underlying hardware is not shared with other customers.

Bare metal provides high performance, isolation, hardware control, and customization, but generally costs more, takes longer to provision, and creates greater management overhead than virtual servers.

## Responsibility boundary

| Cloud provider | Customer |
|---|---|
| Installs the physical server in a Data Center rack | Administers and manages the server above the provider’s hardware boundary |
| Maintains the hardware and rack connection | Manages the operating system and installed software |
| Repairs or replaces faulty hardware | Configures workloads, applications, and security |
| Reboots the server following hardware service | Operates and maintains the resulting environment |

## Configuration options

Bare metal servers may be:

- **Preconfigured** by the provider for particular workload packages
- **Custom-configured** according to customer specifications

Configurable components can include:

- Processors
- RAM
- Hard drives
- Specialized hardware
- Operating system
- Graphics Processing Units (**GPUs**)

Customers may install their own operating system or a hypervisor that the provider does not offer. This allows them to create and manage their own virtual machines and virtualization farms.

Bare metal does not require a provider-controlled hypervisor, but customers may install one when virtualization is part of their intended workload.

## GPU support

GPUs can accelerate workloads such as:

- Scientific computation
- Data analytics
- Professional-grade virtual graphics rendering
- Artificial intelligence
- Deep learning

## Provisioning time and cost

Because bare metal servers are physical machines, they generally take longer to provision than virtual servers.

| Configuration | Provisioning time stated in the lecture |
|---|---:|
| Preconfigured bare metal server | Approximately **20–40 minutes** |
| Custom bare metal server | Approximately **3–4 hours** |

These times are provider-dependent and may vary.

Bare metal servers also tend to cost more than similarly sized virtual machines because the physical hardware is dedicated to one customer. Not every cloud provider offers bare metal servers.

## Benefits

### High performance

Because customers do not share the underlying server hardware, bare metal can support:

- CPU-intensive workloads
- I/O-intensive workloads
- High-performance computing (**HPC**)
- Data-intensive applications
- Workloads requiring minimal virtualization-related latency

### Isolation and security

Single-tenant hardware can support environments requiring:

- Strong isolation
- High degrees of security control
- Strict compliance requirements
- Workloads traditionally operated on premises

### Control and customization

Customers receive extensive control over:

- Hardware configuration
- Operating system
- Workload placement
- Specialized components
- Hypervisors and virtualization
- Application environment

### Long-term demanding workloads

Bare metal is intended primarily for sustained, high-performance use rather than rapidly changing, short-lived capacity.

## Example workloads

The lecture identifies these examples:

- Enterprise Resource Planning (**ERP**)
- Customer Relationship Management (**CRM**)
- Artificial intelligence (**AI**)
- Deep learning
- Big-data analytics
- GPU-intensive processing
- High-performance computing
- Customer-managed virtualization
- Applications migrated from on-premises environments

## Bare metal versus virtual servers

| Characteristic | Bare metal server | Virtual server |
|---|---|---|
| Physical tenancy | Dedicated to one customer | Commonly shares hardware with other VMs |
| Provisioning | Slower | Rapid |
| Performance | Direct access to hardware; suited to CPU- and I/O-intensive work | May have throughput or performance limits from shared infrastructure |
| Scalability | Less elastic | Elastic and scalable |
| Cost | Usually higher | Generally lower |
| Isolation | Strong single-tenant isolation | Depends on the VM and host model |
| Customization | Extensive hardware and software control | Limited to provider-supported virtual configurations |
| Compliance | Useful for strict compliance requirements | Suitability depends on configuration and requirements |
| Management | Greater operational overhead | More infrastructure is abstracted or provider-managed |
| Best fit | Long-term, demanding, controlled workloads | Flexible, rapidly provisioned workloads |

The virtual-server comparison in the lecture primarily reflects shared, multi-tenant VMs; dedicated VM and host offerings may have different characteristics.

## Key takeaway

Choose bare metal when performance, isolation, hardware customization, compliance, or control is more important than rapid provisioning, elasticity, low cost, and reduced operational responsibility. Choose virtual servers when flexibility, speed, scalability, and cost efficiency are the primary concerns.

> **Source note:** The provisioning times, costs, and availability described above are provider-dependent lecture claims and were not independently verified as current.
