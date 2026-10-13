# Application Deployment Environments

## Summary

An application environment is the complete set of hardware and software needed to run an application. Environments support different stages of the application lifecycle—from development and testing to public production use. They can be deployed on-premises or through public, private, or hybrid cloud models.

## Core concepts

An application environment may include:

- Application source code or executable files
- Modules, libraries, middleware, and third-party applications
- Operating system
- Networking components
- Physical or virtual processing resources
- Memory and storage

## Environment types

| Environment | Purpose | Typical users |
|---|---|---|
| **Development** | Actively writing and modifying the application | Developers |
| **QA / Testing** | Testing application components and identifying defects | Quality assurance team |
| **Staging** | Closely replicating production for final validation | Internal teams |
| **Production** | Running the live application for general use | End users |

Development, QA, and staging are **pre-production environments**.

## Production environment

Production contains the complete hardware, software, networking, and infrastructure stack required to operate the live application.

Because it may serve thousands or millions of users simultaneously, it must account for:

- **Load:** the amount of traffic and work handled
- **Security:** protection against unauthorized access
- **Reliability:** consistent and dependable operation
- **Scalability:** the ability to accommodate increasing demand

These non-functional requirements make production more complex than pre-production environments.

## Deployment options

### On-premises

The application and infrastructure reside within the organization’s physical location, often behind a firewall.

- Offers greater control over applications and data
- The organization manages the hardware, infrastructure, system, and maintenance
- Usually costs more than cloud deployment
- A firewall helps prevent unauthorized network access

### Public cloud

Infrastructure is owned by a cloud provider, accessed over the internet, and shared among multiple organizations.

- Common because of its scalability and cost advantages
- Providers mentioned: AWS, Microsoft Azure, Google Cloud Platform, and IBM Cloud

### Private cloud

Cloud infrastructure is reserved exclusively for one organization.

- Can operate on-premises or through a service provider
- Provides increased security
- Offers greater customization and flexibility
- Usually requires more resources than a public cloud

### Hybrid cloud

Public and private cloud environments work together.

- Combines characteristics of both models
- Can balance cost, security, scalability, and flexibility

## Key takeaway

Applications normally progress through **development → QA/testing → staging → production**. The appropriate deployment model depends on the organization’s requirements for cost, control, security, scalability, and flexibility.
