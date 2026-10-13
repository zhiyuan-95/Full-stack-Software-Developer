# Approaches to Application Architecture

## Summary

Applications can be organized as reusable **components**, independently deployable **services**, or collections of services distributed across multiple machines. The architecture determines how these units communicate, scale, and tolerate failures.

## Core concepts

### Components

A **component** is an encapsulated unit of functionality that works with other components as part of an application.

| Characteristic | Meaning |
|---|---|
| Reusable | Can be used in different applications. |
| Replaceable | Can be exchanged for another component. |
| Independent | Has minimal dependency on other components. |
| Extensible | New behavior can be added without changing other components. |
| Encapsulated | Hides its internal data, state, and implementation. |
| Non-context-specific | Can operate in different environments; required state or configuration is passed into it. |

Examples include:

- A reusable API that connects applications to a database
- A **data access object (DAO)** that hides database-specific details
- A **controller** that determines which components respond to an event and coordinates data flow

### Component-based architecture

**Component-based architecture** decomposes an application into loosely coupled, independent logical components.

It provides a higher level of abstraction than object-oriented design:

```text
Objects → Components → Services
```

Objects form components, and components form services.

### Components versus services

| Component | Service |
|---|---|
| Performs part of an application’s functionality | Addresses a business need |
| Usually works with other components inside an application | Is deployed independently from the overall system |
| Designed for reuse in different applications | Can be reused by multiple systems |
| May form part of a service | Is a specialized type of component |

According to the lecture, a service has one unique, continuously running instance with which multiple clients communicate.

Service examples include:

- Checking a customer’s credit
- Calculating a monthly loan payment
- Processing a mortgage application

### Service-oriented architecture

In **service-oriented architecture (SOA)**:

- Services are loosely coupled.
- Services communicate across a network using a communication protocol.
- Each service can be deployed independently.
- Services deliver functionality to other applications.
- SOA can support the construction of distributed systems.

### Distributed systems

A **distributed system** contains services running on different machines. These services coordinate by exchanging messages through protocols such as **HTTP**.

Although the work is distributed across multiple machines, the system appears to the user as one coherent system.

Important characteristics include:

- **Resource sharing:** Hardware, software, and data can be shared.
- **Fault tolerance:** The system can continue operating when a node or service fails.
- **Concurrency:** Multiple activities execute at the same time, potentially reducing latency and increasing throughput.
- **Scalability:** The system can grow as the number of users increases.
- **Heterogeneity:** Machines may use different hardware, operating systems, and programming languages.

A **node** is a network-connected device that can recognize, process, and transmit data. Each node in a distributed system may run one or more services.

Common distributed-system architectures include:

- Client-server
- Three-tier
- Peer-to-peer
- Microservices

## Takeaway

Components divide an application into reusable, encapsulated units. Services extend this idea by packaging business capabilities for independent deployment and reuse across systems. SOA connects loosely coupled services over a network, while distributed systems run those services across multiple machines but present them as one unified system.

*Source note: The transcript contained five complete copies of the lesson and a final truncated copy. Repetitions and “Added to Selection” artifacts were removed; no missing ending was reconstructed.*
