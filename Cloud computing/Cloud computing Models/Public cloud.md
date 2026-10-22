# Public Cloud Deployment Model

## Summary

A **cloud deployment model** describes:

- Where cloud infrastructure resides
- Who owns and manages it
- How resources and services are made available to users

The four deployment models introduced in the lecture are:

1. Public cloud
2. Private cloud
3. Community cloud
4. Hybrid cloud

A **public cloud** provides shared servers, storage, networking, security, platforms, and applications over the internet. The cloud provider owns and operates the infrastructure, while customers provision and consume resources through web consoles and APIs.

## Ownership and responsibilities

| Cloud provider | Customer |
|---|---|
| Owns the infrastructure | Selects and provisions required services |
| Manages and maintains the hardware and facilities | Configures resources available through the service |
| Provisions shared cloud resources | Runs applications and stores data on rented resources |
| Determines how platforms are maintained | Pays through a subscription or usage-based model |
| Bears infrastructure-related capital, operational, and maintenance expenses | Depends on the provider’s performance and security |

Customers do not own the servers running their applications or the storage holding their data. They also do not directly manage the physical servers or determine how the underlying platforms are maintained.

## Utility-service analogy

Public cloud is similar to consuming utilities such as:

- Water
- Electricity
- Gas

Customers do not own the infrastructure that produces and delivers these utilities. Instead, they enter an agreement with a provider, consume the service, and pay for what they use during a particular period.

## Core characteristics

### Shared multitenant architecture

Public cloud uses a **virtualized multitenant architecture**:

- Multiple customers, called tenants, share a provider’s computing resources.
- Resources reside outside the customers’ organizational firewalls.
- Infrastructure, platforms, and software are not dedicated to one tenant or organization.

### On-demand resource allocation

Resources are assigned according to customer needs and can be provisioned through:

- Web-based management consoles
- Application programming interfaces (APIs)

### Flexible pricing

Public cloud services are offered through models such as:

- Subscriptions
- Pay-as-you-go billing
- Usage-based fees

### Provider-controlled environment

Customers can configure the services offered to them, but they do not directly control the underlying computing environment. They depend on the provider’s infrastructure, operational practices, performance, and security.

## Public cloud providers named in the lecture

- Amazon Web Services
- Microsoft Azure
- IBM Cloud
- Google Cloud Platform
- Alibaba Cloud

The lecture describes these as current market providers. This is a time-sensitive list and has not been independently verified against the present market.

Although providers share core services—such as servers, storage, networking, security, and databases—they also offer specialized services and different payment options.

## Benefits

### Reduced infrastructure costs

The provider bears the capital, operational, and maintenance expenses associated with the physical infrastructure and its facilities.

The lecture describes this as producing significant **Total Cost of Ownership (TCO)** savings. The transcript itself says “Total Cost for Ownership,” but “Total Cost of Ownership” is the conventional expansion of TCO.

### Easy scalability

Increasing capacity can be as simple as requesting additional resources. Applications can therefore respond to fluctuations in demand without customers purchasing and installing physical equipment.

### Economies of scale

A large number of customers share centralized resources. This allows the provider to distribute infrastructure costs across many tenants and offer significant economies of scale.

### High availability

Public clouds contain large numbers of server and networking resources. If one physical component fails, workloads may continue operating on other available components.

The lecture presents this redundancy as a source of high availability; actual availability still depends on the provider, service architecture, and configuration.

### On-demand access

Customers can quickly obtain extensive computing resources without first building their own physical infrastructure.

## Concerns and risks

### Limited environmental control

Customers cannot directly control the underlying computing environment and remain dependent on the provider’s:

- Infrastructure
- Performance
- Security
- Maintenance decisions

### Security concerns

The lecture identifies several commonly perceived public-cloud risks:

- Data breaches
- Data loss
- Account hijacking
- Insufficient due diligence
- System vulnerabilities
- Application vulnerabilities

### Data-sovereignty compliance

**Data sovereignty** means that data may be subject to the laws and regulations of the country or jurisdiction where it is stored or processed.

Public-cloud data can be:

- Stored in different geographic locations
- Transferred between jurisdictions
- Accessed across national borders

Organizations must therefore comply with regulations governing data storage, transfer, access, and security.

### Changing regulatory interpretations

Businesses may also be concerned about whether providers can keep pace with both:

- Changes to regulations
- Changes in how those regulations are interpreted

## Common use cases

### Application development and testing

Organizations use public-cloud platforms so development teams can focus on building and testing applications, helping reduce time to market.

### Fluctuating demand

Businesses with changing capacity or resource requirements can increase or decrease cloud usage as demand changes.

### Disaster recovery and business continuity

Organizations use public-cloud resources to create secondary infrastructure supporting:

- Disaster recovery
- Data protection
- Business continuity

### Cloud storage and data management

Public-cloud storage and data-management services provide:

- Greater accessibility
- Easier data distribution
- Backup capabilities

### Outsourcing standardized systems

IT departments can outsource the management of less-critical, standardized applications and business platforms to public-cloud providers.

## Key takeaway

Public cloud gives organizations on-demand access to shared computing services without requiring them to own or maintain the physical infrastructure.

Its main advantages are scalability, flexible pricing, economies of scale, high availability, and reduced infrastructure responsibility. Its main tradeoffs are limited control, provider dependency, security concerns, and the need to manage data-sovereignty obligations.
