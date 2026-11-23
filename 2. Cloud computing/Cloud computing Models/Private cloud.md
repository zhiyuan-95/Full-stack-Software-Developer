# Private Cloud Deployment Model

## Summary

The **National Institute of Standards and Technology (NIST)** defines a private cloud as cloud infrastructure provisioned exclusively for one organization, although multiple internal consumers—such as different business units—may use it.

A private cloud may:

- Be owned, managed, and operated by the organization
- Be operated by a third party
- Use a combination of organizational and third-party management
- Exist on or off the organization’s premises

Its central purpose is to provide cloud capabilities while giving one organization greater control over access, security, compliance, and infrastructure configuration.

## Private-cloud implementations

| Implementation | Location | Ownership and management |
|---|---|---|
| **Internal private cloud** | Organization’s on-premises infrastructure | Usually owned, managed, and operated by the organization |
| **Externally hosted private cloud** | Service provider’s infrastructure | Owned, managed, or operated by the provider |
| **Virtual Private Cloud (VPC)** | Logically isolated section of a shared public cloud | Physical infrastructure is operated by a public-cloud provider; the customer receives an isolated environment |

## Virtual Private Cloud

A **Virtual Private Cloud (VPC)** is a public-cloud offering that allows an organization to establish a private, secure, cloud-like environment within a logically isolated portion of a shared public cloud.

A VPC combines aspects of public and private cloud:

- Dynamic scalability
- High availability
- Lower infrastructure ownership costs
- Logically isolated resources
- Security controls tailored to organizational requirements

The lecture names IBM and Amazon as providers offering VPCs. This is presented as a course example rather than a current, complete market survey.

## Core characteristics

### Exclusive organizational use

Unlike public-cloud resources shared openly among unrelated tenants, private-cloud infrastructure is provisioned for one organization and its authorized internal consumers.

### Virtualized infrastructure

Private clouds use virtualization to pool computing resources and provide flexible, cloud-like services.

### Self-service access

Developers and business units can provision resources as needed without relying on a separate manual process for every request.

### Organizational control

A private cloud gives an organization greater control over:

- User access
- Security policies
- Compliance requirements
- Infrastructure configuration
- Workload placement

### Public-cloud-style capabilities

The lecture presents private cloud as a way to obtain several public-cloud benefits while avoiding the perceived disadvantages of an openly shared environment. These benefits include:

- Economies of scale
- Granular scaling
- Operational efficiency
- User self-service
- Faster resource provisioning

## Benefits

### Greater infrastructure control

Organizations can use cloud-computing capabilities on systems directly managed—or perceived to be under the control of—their internal IT teams.

### Better use of existing investments

Private cloud can improve the utilization of existing:

- Hardware
- Software
- Data-center resources
- Internal technical expertise

This can help reduce the cost associated with underused infrastructure.

### Scalability through virtualization

Virtualization allows computing resources to be pooled, allocated, and expanded according to workload needs.

### Cloud bursting

A private-cloud workload can temporarily use public-cloud resources when demand exceeds internal capacity. When the demand surge has been handled, the workload returns to private-cloud capacity.

```text
Normal demand → Private cloud
Demand surge → Private cloud + public cloud
Demand subsides → Return to private-cloud capacity
```

### Customized security

Access controls and security measures can be tailored to the organization’s specific operational, regulatory, and business requirements.

### Greater agility

Organizations can provision and expand resources relatively quickly compared with traditional hardware-based environments.

## Why organizations choose private cloud

An organization may select a private cloud when:

- Its applications provide a unique competitive advantage
- It requires extensive control over its computing environment
- Security concerns make a shared public environment unsuitable
- Its industry is subject to strict regulations
- Its data is highly sensitive
- It needs customized access and compliance controls

## Common use cases

### Modernizing legacy applications

Private cloud gives organizations an opportunity to modernize and unify internal and legacy applications.

Moving applications away from dedicated hardware allows them to use:

- Shared computing resources
- Virtualized infrastructure
- Cloud services
- More flexible deployment methods

### Integrating with public-cloud services

Organizations can combine private-cloud data and application services with public-cloud capabilities.

This allows them to:

- Retain private-cloud computing and data
- Use specialized public-cloud services
- Connect internal data centers to external cloud capabilities
- Support larger or more complex workloads across environments

This arrangement also forms part of a broader **hybrid-cloud** strategy.

### Application portability

Private-cloud platforms can allow organizations to build applications in one environment and move them to another while maintaining security and compliance controls.

Actual portability depends on compatible technologies, architectures, policies, and provider services.

### Regulated and sensitive workloads

Organizations prevented from moving fully to a public cloud because of security, regulatory, or data-sensitivity concerns can still obtain on-demand enterprise resources within a dedicated environment.

## Private cloud compared with public cloud

| Area | Private cloud | Public cloud |
|---|---|---|
| Primary users | One organization and its internal consumers | Multiple unrelated customers |
| Resource access | Dedicated to the organization | Shared through a multitenant environment |
| Control | Greater organizational control | Greater provider control |
| Security configuration | Highly customizable | Based largely on provider capabilities |
| Compliance | Can be tailored to organizational requirements | Must fit within the provider’s services and controls |
| Infrastructure responsibility | Organization, third party, or both | Primarily the cloud provider |
| Scaling | Limited by dedicated capacity unless connected to public resources | Draws from a large shared provider resource pool |
| Cost model | May use existing investments but requires dedicated resources | Shared infrastructure supports economies of scale |

## Key takeaway

Private cloud provides cloud-style virtualization, self-service, scalability, and operational efficiency within an environment dedicated to one organization.

Its principal advantage is control: organizations can tailor access, security, compliance, and infrastructure to their particular needs. Its main tradeoff is that dedicated environments may require more management and capacity planning than shared public-cloud services. Cloud bursting and public-cloud integration can extend private-cloud capacity and create a hybrid-cloud architecture.
