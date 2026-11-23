# Platform as a Service (PaaS)

## Summary

**Platform as a Service (PaaS)** is a cloud-computing model that provides a complete environment for developing, deploying, managing, and running applications created by the customer or acquired from a third party.

The provider manages the underlying infrastructure and platform. The customer primarily manages the **application code and its maintenance**. Resources are purchased on demand and billed according to usage.

## Division of responsibilities

| PaaS provider manages | Customer manages |
|---|---|
| Servers, networks, and storage | Application code |
| Operating systems | Application maintenance |
| Application runtimes | Application-specific behavior and configuration |
| APIs and middleware | |
| Databases and supporting tools | |
| Installation, configuration, and operation of the application infrastructure | |

## PaaS compared with IaaS

| Area | IaaS | PaaS |
|---|---|---|
| Provider delivers | Raw computing resources such as servers, storage, and networking | Infrastructure plus a complete application platform |
| Customer manages | Platform software and application software | Primarily application code and maintenance |
| Abstraction level | Lower | Higher |
| Primary focus | Infrastructure configuration and control | Application development and deployment |

PaaS abstracts users from lower-level environmental details, allowing developers to concentrate on applications instead of infrastructure.

## Essential characteristics

### High level of abstraction

PaaS removes much of the complexity associated with:

- Deploying applications
- Configuring infrastructure
- Provisioning supporting technologies
- Configuring load balancers and databases
- Integrating separate platform components

### Managed services and APIs

PaaS provides services and APIs that help developers build **elastically scalable** and **highly available** cloud applications.

Typical capabilities include:

- Distribution
- Caching
- Queuing and messaging
- File and data storage
- Workload management
- User identity
- Analytics

Providing these capabilities through one platform reduces the need to integrate disparate components manually.

### Managed runtime environment

The PaaS runtime executes end-user code according to policies established by:

- The application owner
- The cloud provider

Many PaaS offerings support rapid deployment through a **push-and-run mechanism**, allowing developers to submit code and run it without manually configuring the underlying infrastructure.

### Application infrastructure and middleware

PaaS offerings may include:

- Application servers
- Database management systems
- Business analytics servers
- Mobile backend services
- Integration services
- Business process management systems
- Rules engines
- Complex event processing systems

These capabilities reduce the amount of code developers must write while expanding an application’s functionality.

## Primary development lifecycle

The lecture presents the central PaaS use case as rapidly and cost-effectively completing the application lifecycle:

```text
Build → Test → Deploy → Enhance → Scale
```

## Additional use cases

### API development and management

Organizations use PaaS to develop, run, manage, and secure:

- APIs
- Microservices

**Microservices** are described as loosely coupled, independently deployable components and services.

### Internet of Things

PaaS supports the application environments, programming languages, and tools used in **Internet of Things (IoT)** deployments.

### Business analytics and intelligence

PaaS tools help organizations analyze data to discover insights that support:

- More informed decisions
- Business predictions

### Business Process Management

Organizations can access a **Business Process Management (BPM)** platform delivered as a service.

### Master Data Management

Organizations use PaaS for **Master Data Management (MDM)**, creating a single point of reference for critical business information such as:

- Customer transactions
- Analytical data used for decision-making

## Advantages

### Scalability

PaaS can rapidly allocate and deallocate resources according to demand. Its **pay-as-you-use** model allows customers to pay for the resources they consume.

### Faster time to market

Managed APIs, services, and middleware allow developers to focus on application development and testing. This can shorten the time required to deliver products and services.

### Less application code

Built-in middleware provides functionality that developers would otherwise need to implement themselves. This:

- Reduces the amount of code that must be written
- Expands application capabilities
- Reduces integration work

### Greater agility and innovation

PaaS allows teams to experiment with different:

- Operating systems
- Programming languages
- Development tools

Organizations can evaluate and prototype ideas without first investing heavily in the underlying resources. This lowers risk and supports faster adoption of new technologies.

## PaaS offerings named in the lecture

The lecture lists the following examples:

- AWS Elastic Beanstalk
- Cloud Foundry
- IBM Cloud Paks
- Windows Azure
- Red Hat OpenShift
- Magento Commerce Cloud
- force.com
- Apache Stratos

These are historical, time-sensitive examples from the lecture and have not been independently verified as the current PaaS market lineup.

## Risks and limitations

### Information-security threats

Like other cloud offerings, PaaS may expose organizations to information-security risks that must be evaluated and managed.

### Provider dependency

Applications depend on the provider’s infrastructure. Provider downtime can therefore affect the customer’s services.

### Limited customer control

Customers do not directly control changes a provider may make to its:

- Business strategy
- Service offerings
- Platform tools

Applications may need to adapt when the provider changes or removes capabilities.

## Source claim about future growth

The lecture states that PaaS continues to experience strong growth and predicts that it will become the prevailing platform-delivery model. This is a time-sensitive forecast, and the transcript provides no date or supporting market data.

## Key takeaway

PaaS sits between raw infrastructure and finished software. It gives developers a managed environment containing the infrastructure, runtimes, APIs, middleware, databases, and tools needed to build and operate applications.

Its primary value is allowing development teams to **build, test, deploy, enhance, and scale applications quickly** while writing less supporting code and managing fewer infrastructure components. The tradeoff is increased dependency on the provider’s availability, security, tools, and strategic decisions.
