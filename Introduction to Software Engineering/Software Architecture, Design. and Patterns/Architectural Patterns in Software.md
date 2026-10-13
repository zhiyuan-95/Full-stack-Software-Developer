# Architectural Patterns in Software

## Summary

An **architectural pattern** is a reusable way to organize a software system. The lecture compares five patterns: **2-tier, 3-tier, peer-to-peer, event-driven, and microservices**. A system may combine compatible patterns.

## Core concepts

| Pattern | Structure | Example |
|---|---|---|
| **2-tier (client-server)** | Clients request data or services from a central server | Text messaging; database client and server |
| **3-tier** | Presentation, application, and data tiers | Web applications |
| **Peer-to-peer (P2P)** | Decentralized nodes act as both clients and servers | Bitcoin and Ethereum |
| **Event-driven** | Producers publish events; routers deliver them to consumers | Uber and Lyft |
| **Microservices** | Application functionality is divided into modular services | Social media platforms |

## Pattern details

### 2-tier architecture

- Separates the system into a **client** and a **server**.
- The client contains the user interface and sends requests.
- The server hosts and manages resources or services.
- Multiple clients can connect to the same server over a network.

### 3-tier architecture

Applications are divided into three logical and physical tiers:

1. **Presentation tier:** User interface.
2. **Application tier:** Processes business logic.
3. **Data tier:** Stores and manages data.

Each tier generally communicates only with the tiers directly above or below it. Related components remain together, helping isolate changes. Architectures with more than three tiers are called **n-tier architectures**.

### Peer-to-peer architecture

- Uses a decentralized network of **peers** or **nodes**.
- Every node can supply and consume resources.
- Resources may include processing power, storage, or network bandwidth.
- Does not require a central coordinating server.
- Common uses include file sharing, instant messaging, collaboration, and high-performance computing.

### Event-driven architecture

An **event** is an action or occurrence that changes the system’s state, such as a mouse click or a ride request.

Typical flow:

**Producer → Event router → Consumer**

- A producer publishes an event.
- The router determines which consumer should receive it.
- The consumer processes the event notification.
- Components are **loosely coupled**, making this pattern useful in distributed systems.

### Microservices

- Divides application functionality into small, modular **services**.
- Services work together as one system.
- **APIs** define how applications or services exchange and modify data.
- An **API gateway** routes client requests to the appropriate service.
- **Orchestration** coordinates communication among services.

## Combining patterns

Architectural patterns are not always mutually exclusive:

- A **3-tier** application can also use **microservices**.
- A **peer-to-peer** system can also be **event-driven**.
- A system generally cannot be both purely **2-tier** and **peer-to-peer** because 2-tier architecture separates client and server roles, while each P2P node performs both roles.

The system architect selects patterns according to the software’s requirements.

## Other patterns mentioned

The lecture names but does not explain:

- Model-view-controller
- Message-broker
- Blackboard
- Pipe-filter
- Controller-responder

## Takeaway

Choose an architectural pattern based on how responsibilities, communication, and resources should be distributed. Patterns provide reusable structures, and compatible patterns can be combined within one system.
