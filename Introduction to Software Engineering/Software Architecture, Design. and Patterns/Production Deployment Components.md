# Production Deployment Components

## Summary

A production application commonly uses an **n-tier architecture**, which separates the front end, web processing, application logic, and data storage into distinct tiers. Firewalls protect the internal network, while load balancers distribute requests to improve performance, responsiveness, and availability.

Not every deployment requires every tier or component.

## Typical n-tier architecture

```text
Presentation tier
Front-end client applications
        ↓
Firewall
        ↓
Web tier
Web load balancer → Web servers
        ↓
Application server tier
App load balancer or proxy → Application servers
        ↓
Data tier
Database server → High-availability replica
```

## Core components

| Component | Primary purpose |
|---|---|
| **Firewall** | Monitors network traffic and permits or blocks data according to security rules. |
| **Load balancer** | Distributes incoming requests across multiple servers. |
| **Web server** | Delivers web pages, files, images, and videos, primarily in response to HTTP requests. |
| **Application server** | Runs the application’s business logic and connects user activity with server-side code. |
| **Proxy server** | Acts as an intermediary that handles requests between tiers. |
| **Database server** | Controls the storage and flow of application data through a DBMS. |

## Firewall

A firewall creates a security barrier between networks.

It:

- Monitors incoming and outgoing traffic.
- Applies security rules to permit or block requests.
- Helps prevent viruses, malware, hackers, and unauthorized traffic from reaching the internal network.

## Load balancer

A load balancer sits between clients and a group of servers, called a **server farm**.

It:

- Distributes network traffic across available servers.
- Prevents one server from becoming overloaded.
- Determines which server can best handle each request.
- Manages concurrent client requests.
- Improves availability, responsiveness, speed, and reliability.

A production architecture may use separate load balancers for the web tier and the application tier.

## Server types

### Web server

A web server primarily responds to **Hypertext Transfer Protocol (HTTP)** requests from browsers. It delivers content such as:

- Web pages
- Files
- Images
- Videos

### Application server

An application server executes the application’s **business logic**. This logic determines:

- How data is created, stored, and changed.
- The results of transactions.
- What information is written to or retrieved from a database.

Instead of running the entire application on the client’s device, the application server processes the server-side behavior and provides the results to the client.

### Proxy server

A proxy server is an intermediary between two tiers. Its possible responsibilities include:

- Routing requests
- Load balancing
- Caching
- System optimization
- Acting as a firewall
- Hiding the source of a request
- Encryption
- Malware scanning

These capabilities can improve network efficiency, privacy, and security.

### Database server and DBMS

A **database** is an organized collection of related data.

A **database management system (DBMS)** is the software that controls access to that database. It connects the database server with users and applications so data can be retrieved or modified.

A **high-availability replica** may be maintained so the system can remain reliable if the primary database experiences a failure.

## Key distinctions

- A **web server** delivers web content.
- An **application server** executes business logic.
- A **proxy server** intermediates and routes traffic between systems.
- A **database server** stores and manages application data.
- A **firewall** controls whether traffic may enter or leave a network.
- A **load balancer** decides which server should handle permitted traffic.

## Takeaway

Production infrastructure divides responsibilities across specialized components. This separation improves security, scalability, performance, and reliability, but the exact architecture should match the application’s needs—some systems do not require every component or a separate server tier.
