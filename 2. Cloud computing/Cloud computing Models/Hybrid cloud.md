# Hybrid Cloud and Hybrid Cloud Architecture

## Summary

A **hybrid cloud** connects an organization’s on-premises or private-cloud environment with third-party public-cloud services, creating a unified infrastructure for applications and workloads.

This model allows organizations to place each workload in the environment best suited to its security, compliance, performance, capacity, and cost requirements. With sufficient integration and orchestration, public- and private-cloud resources can also support the same workload.

The transcript also introduces a three-part hybrid-cloud architecture series organized around:

1. Connectivity
2. Modernization
3. Security

## Workload placement

| Private cloud | Public cloud |
|---|---|
| Sensitive data and applications | Less-sensitive workloads |
| Highly regulated workloads | Dynamic or variable workloads |
| Mission-critical applications | Workloads requiring rapid scaling |
| Predictable performance requirements | Temporary capacity requirements |
| Relatively constant capacity needs | Pay-as-you-go environments and services |

Workloads may move between environments as requirements change.

## Cloud bursting

**Cloud bursting** occurs when a workload normally running in a private cloud temporarily uses public-cloud capacity during a demand spike.

```text
Normal demand → Private cloud
Demand spike → Private cloud + public-cloud capacity
Demand returns to normal → Workload returns to private-cloud capacity
```

The transcript’s wording about when the workload returns to the private cloud is unclear, but the surrounding explanation indicates that public capacity is temporary and is released when the additional demand has been handled.

## Core hybrid-cloud principles

### Interoperability

Public- and private-cloud services must be able to understand and work with one another’s:

- APIs
- Configuration
- Data formats
- Authentication
- Authorization

Interoperability enables services and applications across different environments to exchange data and coordinate operations.

### Scalability

When demand increases, a workload running in a private cloud can use additional public-cloud capacity.

This allows organizations to scale quickly without expanding their permanent on-premises infrastructure.

### Portability

Portability enables organizations to move applications and data:

- Between on-premises and cloud systems
- Between private and public clouds
- Between cloud-service providers

The lecture presents portability as a way to reduce dependency on a single vendor. In practice, the achievable portability depends on the technologies, standards, and provider-specific services used.

## Types of hybrid cloud

| Type | Description | Main flexibility |
|---|---|---|
| **Hybrid mono-cloud** | A hybrid environment built around one cloud provider | Movement between private infrastructure and one provider’s cloud |
| **Hybrid multi-cloud** | An open standards-based stack that can be deployed across different public-cloud infrastructures | Movement of workloads and environments between vendors |
| **Composite multi-cloud** | A hybrid multi-cloud variant that distributes one application across multiple providers | Movement of individual application components between services and vendors |

A composite multi-cloud architecture provides more granular flexibility because different parts of the same application can use services from different providers.

## Benefits

### Security and compliance

Organizations can keep sensitive, regulated, or mission-critical workloads in a private cloud while placing less-sensitive workloads in a public cloud.

### Elastic scalability

Public-cloud infrastructure can provide additional capacity quickly, inexpensively, and potentially automatically without disrupting workloads remaining in the private cloud.

### Resilience

Workloads and supporting services can be distributed across multiple environments, reducing reliance on a single physical location or infrastructure pool.

### Resource optimization

Organizations can place workloads where they operate most efficiently rather than selecting one deployment model for every application.

### Cost savings

A hybrid approach can help organizations:

- Use existing infrastructure where it remains effective
- Provision public-cloud environments through pay-as-you-go pricing
- Avoid unnecessary permanent capacity
- Adopt new tools without large upfront infrastructure investments

## Complexity and challenges

Hybrid clouds can be difficult to deploy and maintain because they require coordination across environments.

Important challenges include:

- Synchronization
- Traffic redirection
- Network latency
- Security
- Portability
- Interoperability
- Policy compatibility
- Application compatibility
- Data compatibility

Successful hybrid cloud therefore requires more than simply operating public and private resources. Those environments must be securely connected, consistently managed, and appropriately orchestrated.

## Common use cases

### SaaS integration

Organizations connect **Software as a Service (SaaS)** applications in the public cloud with existing:

- Public-cloud services
- Private-cloud applications
- Traditional IT systems

This hybrid integration allows separate systems to contribute to new business solutions.

### Data and AI integration

Organizations combine public-cloud data sources, such as:

- Weather data
- Social data
- Internet of Things data
- Customer Relationship Management data
- Enterprise Resource Planning data

These sources can be integrated with existing data, analytics, machine learning, and artificial-intelligence capabilities to create richer and more personalized experiences.

### Enhancing legacy applications

Organizations use public-cloud services to improve the user experience of on-premises applications and deliver them globally to new devices.

This supports incremental modernization without requiring the entire core system to be replaced at once.

### VMware migration

Organizations **lift and shift** on-premises virtualized workloads to a public cloud without converting or modifying them.

Goals include:

- Reducing the on-premises data-center footprint
- Supporting future scaling
- Avoiding additional capital expense

### Using public-cloud services with private applications

Organizations integrate data and application services from existing private-cloud applications with services available in the public cloud.

This allows private data centers and computing resources to work with specialized cloud services.

## Three-part hybrid-cloud architecture series

The second part of the transcript features **Sai Vennam**, an IBM developer advocate, introducing a three-part series.

| Part | Focus | Main objective |
|---|---|---|
| **Part 1: Connect** | Connectivity and interoperability | Securely connect services across on-premises, private-cloud, and public-cloud environments |
| **Part 2: Modernize** | Legacy application modernization | Break apart or update existing applications so they can benefit from cloud capabilities |
| **Part 3: Secure** | Security and privacy | Protect hybrid applications while satisfying increasingly strict privacy requirements |

## Part 1: Connectivity

Applications and services may operate across:

- On-premises systems
- Private clouds
- Public clouds

These services need secure connections to communicate and operate as one architecture.

Technologies named in the transcript include:

- Linux-based containers
- Kubernetes
- Istio
- Multicluster management tools
- Message queues
- Message brokers

These technologies can support service connectivity, workload coordination, and interoperability when properly implemented.

## Part 2: Modernization

Modernization involves adapting legacy applications to operate more effectively in cloud environments.

One example is breaking apart a **monolithic application** and moving suitable components to a public cloud. This can allow the application to benefit from the public cloud’s scaling capabilities.

Modernization does not necessarily require replacing an entire system at once. Applications can be improved incrementally.

## Part 3: Security

Hybrid-cloud security must account for:

- Data breaches
- Increasingly strict privacy regulations
- Protection of existing on-premises assets
- Secure movement of applications and data
- Consistent controls across public and private environments

The objective is to retain the security and familiarity of existing infrastructure while safely using public- or private-cloud resources.

## Time-sensitive research claim

The transcript states that research found **75% of non-cloud applications would move to the cloud within the next three years**.

No research source, publication date, or starting year is provided. This should therefore be treated as an unverified, time-sensitive claim from the lecture rather than a current forecast.

## Key takeaway

Hybrid cloud combines private infrastructure with public-cloud services so organizations can choose the most appropriate environment for each workload.

Its value comes from interoperability, scalability, portability, flexible workload placement, and access to public-cloud capabilities without immediately abandoning existing systems. Its main tradeoff is architectural and operational complexity: multiple environments must be securely connected, synchronized, governed, and maintained.
