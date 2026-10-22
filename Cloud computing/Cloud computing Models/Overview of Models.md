# Cloud Service Models: IaaS, PaaS, and SaaS

## Summary

Cloud computing offers three main service models:

- **Infrastructure as a Service (IaaS):** Provides configurable computing infrastructure.
- **Platform as a Service (PaaS):** Provides a managed platform for developing applications.
- **Software as a Service (SaaS):** Provides complete, ready-to-use software.

Moving from IaaS toward SaaS reduces the infrastructure a customer must manage, making the service easier to use but less directly configurable.

## Service-model comparison

| Model | Primary user | Provider manages | User’s main responsibility | Car analogy |
|---|---|---|---|---|
| **IaaS** | System or IT administrator | Physical resources, data centers, cooling, power, networking, security, servers, and storage | Configure and manage virtualized resources | Leasing a car |
| **PaaS** | Developer | IaaS resources plus operating systems, development tools, databases, and business analytics | Develop and run applications without managing the underlying virtualized resources | Renting a car |
| **SaaS** | Any end user | Infrastructure, platform resources, applications, and data | Use the finished software | Taking a taxi or Uber |

## Infrastructure as a Service (IaaS)

IaaS is the foundation of the three models. A cloud vendor virtualizes computing, networking, and storage resources so customers can access and configure them according to their needs.

- Typical persona: **system administrator or IT administrator**
- Offers the greatest infrastructure control
- Requires the most technical knowledge and management
- The provider manages the physical infrastructure and computing resources

### Car analogy: leasing

IaaS is compared to leasing a car because the customer:

- Researches and selects the desired specifications
- Cares about performance and configuration
- Drives the car
- Pays for fuel, tolls, and maintenance

Likewise, an IaaS customer receives the underlying resources but remains closely involved in configuring and operating them.

## Platform as a Service (PaaS)

PaaS builds on IaaS but abstracts the virtualized infrastructure. Developers can concentrate on building applications without directly managing the underlying computing resources.

- Typical persona: **developer**
- IBM calls this developer persona **“Jane”**
- The provider manages the operating systems, development tools, databases, and business analytics in addition to the infrastructure
- Offers less infrastructure-management responsibility than IaaS

### Car analogy: renting

PaaS is compared to renting a car:

- The customer does not care as much about the exact specifications or color
- The customer still drives the car
- The customer still pays for fuel and tolls

Similarly, a developer controls what is created and run but does not manage the underlying infrastructure.

## Software as a Service (SaaS)

SaaS delivers a complete application to the user.

- The software does not need to be installed locally
- The user does not manually update it
- It can be used by almost anyone
- It is usually sold through a **subscription model** rather than a one-time license
- YouTube is given as an example of SaaS

The provider hosts and manages the infrastructure, platform, application, and data.

### Car analogy: taxi or Uber

SaaS is compared to taking a taxi or Uber:

- The passenger does not select or manage the vehicle
- The passenger does not drive
- Fuel and toll expenses are included in the price
- The passenger simply uses the completed service

## Management and ease-of-use progression

```text
More customer control and management
                ↓
              IaaS
                ↓
              PaaS
                ↓
              SaaS
                ↓
Less customer management and greater ease of use
```

The transcript contains an unclear statement suggesting that both complexity and ease of use increase when moving down the pyramid. However, its definitions and car analogy indicate the intended relationship: **IaaS requires more customer management, while SaaS provides the greatest ease of use.**

## Key takeaway

The three cloud service models differ primarily in how responsibility is divided between the provider and customer:

- Choose **IaaS** when extensive infrastructure control is needed.
- Choose **PaaS** when developers want to build applications without managing the underlying infrastructure.
- Choose **SaaS** when users want a complete application that is ready to use.
