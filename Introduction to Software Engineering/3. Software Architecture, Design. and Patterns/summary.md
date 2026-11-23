# Software Architecture, Design, Patterns, and Deployment

## 1. The big picture

The seven lessons describe one continuous software-engineering process:

```text
Requirements
    ↓
Software architecture
    ↓
Detailed design and modeling
    ↓
Objects, components, and services
    ↓
Architectural pattern selection
    ↓
Development and testing environments
    ↓
Production infrastructure
```

Each stage answers a different question:

| Stage | Main question |
|---|---|
| Architecture | What major parts will the system contain, and how will they interact? |
| Design | How should those parts be organized internally? |
| Modeling | How can the structure and behavior be communicated visually? |
| Architectural patterns | What proven structure should the system follow? |
| Deployment environments | Where will the application run during each lifecycle stage? |
| Production deployment | What infrastructure is needed to serve real users reliably? |

---

## 2. Software architecture: the system’s blueprint

[Source lesson](https://github.com/zhiyuan-95/Full-stack-Software-Developer/blob/main/Introduction%20to%20Software%20Engineering/Software%20Architecture%2C%20Design.%20and%20Patterns/Introduction%20to%20Software%20Architecture.md)

Software architecture is the high-level blueprint of a software system. It defines:

- The system’s major components
- The responsibilities of those components
- How the components communicate
- The environment in which the system operates
- The principles and constraints that guide implementation

Architecture is normally developed during the **design phase of the Software Development Life Cycle (SDLC)**. These early decisions are important because they influence almost every later decision and may be expensive to change after development begins.

### 2.1 Why architecture matters

A good architecture provides a shared mental model for developers, testers, managers, clients, and other stakeholders. It helps the team:

- Balance competing stakeholder needs
- Coordinate implementation work
- Choose an appropriate technology stack
- Manage changing requirements
- Extend the system’s useful lifespan
- Reduce confusion between teams
- Address qualities that are not simply individual features

These system qualities are called **non-functional requirements**.

| Non-functional requirement | Meaning |
|---|---|
| Performance | How quickly the system responds |
| Scalability | Whether it can handle increasing demand |
| Maintainability | How easily it can be corrected or extended |
| Interoperability | How effectively it works with other systems |
| Security | How well data and services are protected |
| Manageability | How easily the system can be operated and monitored |
| Reliability | How consistently it performs correctly |

A functional requirement might say, “A patient can schedule an appointment.” A non-functional requirement might say, “The scheduling request must complete within two seconds and remain available during peak usage.”

### 2.2 Architecture and the technology stack

A **technology stack**, or tech stack, is the collection of technologies used to implement the system:

- Programming languages
- Frameworks
- Libraries
- Software platforms
- Database technologies
- Runtime and infrastructure technologies

The architect should evaluate the advantages and limitations of these technologies against the system’s requirements. A popular technology is not automatically the correct technology; it must support the required performance, security, maintainability, scalability, and team capabilities.

### 2.3 Architecture artifacts

Architecture is communicated through several artifacts:

| Artifact | Purpose |
|---|---|
| Software Design Document (SDD) | Records technical specifications and explains how the design should be implemented |
| Architectural diagram | Shows major components, system boundaries, interactions, constraints, and architectural patterns |
| UML diagram | Uses standardized notation to show system structure or behavior |

An SDD may document assumptions, dependencies, constraints, requirements, objectives, and implementation methods.

---

## 3. Software design and modeling

[Source lesson](https://github.com/zhiyuan-95/Full-stack-Software-Developer/blob/main/Introduction%20to%20Software%20Engineering/Software%20Architecture%2C%20Design.%20and%20Patterns/Software%20Design%20and%20Modeling.md)

Architecture presents the high-level system. **Software design** moves closer to implementation by describing how the system’s modules, classes, and interactions should work.

**Modeling** represents those design decisions visually so that people can understand the system before reading or writing all of its code.

### 3.1 Structured design

Structured design divides a large problem into smaller:

- Modules
- Submodules
- Responsibilities
- Data flows

For example:

```text
Billing
├── Verify insurance
├── Submit claim
└── Calculate and output total
```

Two important goals guide this decomposition.

#### High cohesion

A module has high cohesion when its elements work together toward one closely related purpose.

For example, an `InsuranceVerification` module should contain behaviors related to validating insurance coverage. It should not also contain unrelated user-interface or inventory-management logic.

#### Loose coupling

Modules are loosely coupled when they have limited dependencies on each other. A change to one module should have minimal impact on the others.

Together, these principles produce modules that are easier to:

- Understand
- Test
- Replace
- Reuse
- Maintain
- Develop independently

Loose coupling is especially important in service-oriented and microservices architectures.

### 3.2 Structural and behavioral perspectives

A system must be understood from two complementary perspectives:

| Perspective | Question answered |
|---|---|
| Structural | What parts exist, and how are they organized? |
| Behavioral | What does the system do when events occur? |

A structural model might show classes, modules, or components. A behavioral model might show what happens after a user clicks a button, submits a form, or requests a service.

Behavioral models describe visible behavior and interactions without necessarily explaining the internal implementation.

### 3.3 Unified Modeling Language

**Unified Modeling Language (UML)** is a standardized, programming-language-independent visual language for modeling software systems.

UML diagrams fall into two broad categories:

- **Structural diagrams** show organization and relationships.
- **Behavioral diagrams** show actions, events, state changes, and interactions over time.

UML helps teams:

- Plan features before implementation
- Explain complex relationships
- Communicate with technical and non-technical stakeholders
- Onboard new developers
- Navigate unfamiliar source code
- Use the same models across different programming languages

### 3.4 Behavioral diagram examples

#### State transition diagram

A state transition diagram contains:

- **States:** conditions in which an entity can exist
- **Events:** occurrences that cause change
- **Transitions:** permitted movements between states

Example:

```text
Waiting
   ↓ called for test
Testing
   ↓ test completed
With doctor
```

The diagram focuses on valid states and what triggers movement between them.

#### Interaction and sequence diagrams

An interaction diagram shows how objects communicate.

A **sequence diagram** is a particular interaction diagram that arranges messages chronologically. It might show the following appointment workflow:

```text
Patient → Portal: Request appointment
Portal → Scheduling service: Check availability
Scheduling service → Database: Query time slots
Database → Scheduling service: Available slots
Scheduling service → Portal: Return options
Portal → Patient: Display options
```

---

## 4. Object-oriented analysis and design

[Source lesson](https://github.com/zhiyuan-95/Full-stack-Software-Developer/blob/main/Introduction%20to%20Software%20Engineering/Software%20Architecture%2C%20Design.%20and%20Patterns/Object-Oriented%20Analysis%20and%20Design.md)

**Object-oriented analysis and design (OOAD)** models a system as a collection of interacting objects. It is particularly relevant when the system will be implemented with an object-oriented language such as Java, C++, or Python.

### 4.1 Core terminology

| Term | Meaning |
|---|---|
| Object | A software entity containing data and behavior |
| Class | A blueprint that defines a type of object |
| Instance | A specific object created from a class |
| Property | Data or state held by an object |
| Method | A behavior that the object can perform |
| Instantiation | Creating an object from a class |

For example:

```text
Class: Patient
Properties:
- firstName
- lastName
- dateOfBirth

Methods:
- scheduleAppointment()
- cancelAppointment()
```

`Patient` is the general blueprint. A particular patient, such as Naya Patel, is an instance. The instance receives specific values such as `lastName = "Patel"`.

### 4.2 Class diagrams

A UML class diagram communicates the static structure of an object-oriented system. A class box may show:

- Class name
- Properties or attributes
- Methods
- Relationships with other classes

Class diagrams are structural rather than behavioral. They show what building blocks exist, not the chronological sequence of actions at runtime.

### 4.3 Inheritance

Inheritance allows a subclass to receive properties and methods from a parent class.

```text
Medical Personnel
├── Nurse
├── Doctor
│   └── Specialist
└── Technician
```

In this hierarchy:

- `Nurse`, `Doctor`, and `Technician` inherit common behavior from `Medical Personnel`.
- `Specialist` inherits from `Doctor`.
- Because `Doctor` already inherits from `Medical Personnel`, `Specialist` indirectly receives behavior from both levels.
- Each subclass can add its own specialized properties and methods.

### 4.4 OOAD’s architectural role

OOAD helps the team:

- Discover the important entities in the problem domain
- Assign responsibilities to classes
- Define relationships among objects
- Separate work into manageable units
- Model the system’s static structure
- Support parallel development

OOAD therefore connects high-level architecture with detailed implementation. Architecture identifies major system responsibilities; OOAD describes the objects that carry out those responsibilities.

---

## 5. Components, services, and distributed systems

[Source lesson](https://github.com/zhiyuan-95/Full-stack-Software-Developer/blob/main/Introduction%20to%20Software%20Engineering/Software%20Architecture%2C%20Design.%20and%20Patterns/Approaches%20to%20Application%20Architecture.md)

Software can be organized at increasing levels of abstraction:

```text
Objects → Components → Services → Distributed system
```

### 5.1 Components

A **component** is an encapsulated unit of functionality that cooperates with other components.

A well-designed component is:

| Characteristic | Meaning |
|---|---|
| Reusable | It can be used in multiple applications |
| Replaceable | Another compatible component can take its place |
| Independent | It has minimal unnecessary dependencies |
| Extensible | New behavior can be added with limited impact elsewhere |
| Encapsulated | Internal state and implementation are hidden |
| Non-context-specific | Required state or configuration is supplied to it |

Examples include:

- A database API
- A data access object
- A controller that coordinates application events

### 5.2 Component-based architecture

Component-based architecture decomposes the application into loosely coupled logical units.

A component is generally larger than an individual object. Multiple related objects may cooperate inside one component, while multiple components may form a service.

### 5.3 Components versus services

| Component | Service |
|---|---|
| Implements part of an application | Delivers a business capability |
| Usually operates as part of a larger application | Can be deployed independently |
| May contain multiple objects | May contain multiple components |
| Can be reused internally | Can serve several applications or clients |
| Is not necessarily accessed over a network | Commonly communicates over a network |

Examples of services include:

- Checking a customer’s credit
- Calculating a loan payment
- Processing a mortgage application

The central difference is that a service packages a complete capability behind a defined interface and can be deployed independently.

### 5.4 Service-oriented architecture

In **service-oriented architecture (SOA)**:

- Business capabilities are implemented as services.
- Services are loosely coupled.
- Services communicate across a network.
- Communication follows defined protocols.
- Services can be deployed and reused independently.
- Different applications may consume the same service.

SOA can be used to construct a distributed system.

### 5.5 Distributed systems

A distributed system runs its services across multiple network-connected machines while presenting itself to users as one coherent system.

A **node** is a network-connected device that can recognize, process, and transmit data. One node may host one or more services.

Important distributed-system characteristics include:

- **Resource sharing:** Nodes share data, hardware, and software capabilities.
- **Fault tolerance:** The system can continue operating when a node or service fails.
- **Concurrency:** Multiple tasks can execute simultaneously.
- **Scalability:** Capacity can increase as demand grows.
- **Heterogeneity:** Nodes can use different hardware, operating systems, or languages.

Services may exchange messages through protocols such as HTTP.

---

## 6. Major architectural patterns

[Source lesson](https://github.com/zhiyuan-95/Full-stack-Software-Developer/blob/main/Introduction%20to%20Software%20Engineering/Software%20Architecture%2C%20Design.%20and%20Patterns/Architectural%20Patterns%20in%20Software.md)

An **architectural pattern** is a reusable organizational solution to a recurring software-design problem. It describes the system’s overall shape rather than prescribing exact source code.

### 6.1 Pattern comparison

| Pattern | Central idea | Typical example |
|---|---|---|
| 2-tier | Clients request resources directly from a central server | Database client and server |
| 3-tier | Presentation, business logic, and data are separated | Web application |
| Peer-to-peer | Every node can consume and provide resources | Bitcoin or Ethereum |
| Event-driven | Producers emit events that consumers process | Ride-request system |
| Microservices | Business functionality is divided into modular services | Large social platform |

### 6.2 Two-tier architecture

Two-tier architecture separates the application into:

1. **Client:** Presents the user interface and sends requests.
2. **Server:** Hosts data, resources, or services.

```text
Client ↔ Server
```

Multiple clients can communicate with the same server through a network. Client and server roles are clearly separated.

### 6.3 Three-tier architecture

Three-tier architecture introduces a business-logic layer between the interface and the data.

```text
Presentation tier
        ↓
Application tier
        ↓
Data tier
```

- The **presentation tier** displays the interface.
- The **application tier** executes business rules.
- The **data tier** stores and manages data.

Each tier normally communicates with the tier immediately above or below it. This separation helps isolate responsibilities and changes.

An architecture with additional layers is called an **n-tier architecture**.

### 6.4 Peer-to-peer architecture

In a peer-to-peer system:

- There is no required central coordinating server.
- Each peer can request resources.
- Each peer can also provide resources.
- Peers may share processing, storage, data, or bandwidth.

Common uses include:

- File sharing
- Instant messaging
- Collaboration systems
- High-performance computing
- Decentralized blockchain networks

The defining feature is that client and server roles are combined within the nodes.

### 6.5 Event-driven architecture

An event is an occurrence that changes the system’s state, such as a click, payment, sensor reading, or ride request.

The basic flow is:

```text
Producer → Event router → Consumer
```

- The **producer** publishes an event.
- The **router** determines where the event should go.
- The **consumer** receives and processes it.

The producer does not need detailed knowledge of the consumer. This loose coupling makes event-driven architecture suitable for distributed systems.

### 6.6 Microservices architecture

Microservices architecture divides an application into small, modular services that work together.

Important supporting concepts include:

- **API:** Defines how services exchange or modify data.
- **API gateway:** Receives client requests and routes them to the correct service.
- **Orchestration:** Coordinates activities involving multiple services.

Each service generally represents a specific capability. Independent deployment can allow individual parts of the system to change or scale without redeploying the entire application.

### 6.7 Combining patterns

Patterns are not necessarily mutually exclusive:

- A three-tier system may implement its application tier with microservices.
- A peer-to-peer system may also be event-driven.
- A microservices application may use event-driven communication between services.

A purely two-tier architecture and a peer-to-peer architecture conflict conceptually because two-tier separates client and server responsibilities, whereas every peer can perform both roles.

Other patterns named in the material include:

- Model-view-controller
- Message-broker
- Blackboard
- Pipe-filter
- Controller-responder

The source mentions these patterns but does not explain them in detail.

---

## 7. Application deployment environments

[Source lesson](https://github.com/zhiyuan-95/Full-stack-Software-Developer/blob/main/Introduction%20to%20Software%20Engineering/Software%20Architecture%2C%20Design.%20and%20Patterns/Application%20Deployment%20Environments.md)

An **application environment** is the complete hardware and software context required to run an application. It may include:

- Source code or executable files
- Libraries and modules
- Middleware
- Third-party applications
- Operating system
- Networking
- Processing resources
- Memory
- Storage

### 7.1 Environment progression

```text
Development → QA/testing → Staging → Production
```

| Environment | Main purpose | Primary users |
|---|---|---|
| Development | Write and modify the application | Developers |
| QA/testing | Find defects and verify functionality | Testers and QA teams |
| Staging | Perform final validation in a production-like environment | Internal teams |
| Production | Provide the live system to users | End users |

Development, QA, and staging are collectively known as **pre-production environments**.

Staging is especially important because it should resemble production closely enough to expose deployment, configuration, integration, and performance problems before users encounter them.

### 7.2 Production requirements

Production must support real users and potentially large traffic volumes. It must therefore account for:

- Load
- Security
- Reliability
- Availability
- Scalability
- Performance

These requirements usually make production more complex than development or testing environments.

### 7.3 Deployment models

#### On-premises

The organization operates the application on infrastructure at its own physical location.

Advantages:

- Greater control over infrastructure and data
- Direct control over configuration and security

Responsibilities and limitations:

- The organization maintains the hardware and software.
- It manages updates, networking, capacity, and failures.
- It is generally more expensive than shared public-cloud infrastructure.

#### Public cloud

A provider owns the infrastructure and makes it available over the internet to multiple customers.

Examples named in the material include:

- Amazon Web Services
- Microsoft Azure
- Google Cloud Platform
- IBM Cloud

Public clouds are commonly selected for their scalability and cost advantages.

#### Private cloud

Private-cloud infrastructure is reserved for one organization. It may run on the organization’s premises or be managed by a provider.

It can provide:

- Greater customization
- Increased control
- Stronger isolation
- More flexibility for organization-specific requirements

It usually requires more dedicated resources than public cloud.

#### Hybrid cloud

Hybrid cloud connects private and public cloud environments.

It can balance:

- Cost
- Security
- Control
- Flexibility
- Scalability

For example, sensitive data might remain in a private environment while public-cloud infrastructure handles less sensitive workloads or temporary demand increases.

---

## 8. Production deployment components

[Source lesson](https://github.com/zhiyuan-95/Full-stack-Software-Developer/blob/main/Introduction%20to%20Software%20Engineering/Software%20Architecture%2C%20Design.%20and%20Patterns/Production%20Deployment%20Components.md)

A production system often implements an n-tier architecture using specialized infrastructure components.

```text
Client applications
        ↓
Firewall
        ↓
Web load balancer
        ↓
Web servers
        ↓
Application load balancer or proxy
        ↓
Application servers
        ↓
Database server
        ↓
High-availability replica
```

Not every application requires all these components or a separate machine for every tier. The deployment should reflect the application’s scale and requirements.

### 8.1 Firewall

A firewall creates a security boundary between networks. It:

- Examines incoming and outgoing traffic
- Applies security rules
- Permits authorized communication
- Blocks unauthorized or suspicious traffic
- Helps protect the internal network

The firewall decides whether traffic is allowed to pass.

### 8.2 Load balancer

A load balancer distributes requests among multiple servers, collectively called a **server farm**.

It helps:

- Prevent individual servers from becoming overloaded
- Manage concurrent requests
- Improve response time
- Increase availability
- Increase reliability
- Support horizontal scaling

A system may have one load balancer for web servers and another for application servers.

The load balancer decides which available server should process an allowed request.

### 8.3 Web server

A web server primarily responds to HTTP requests and returns resources such as:

- HTML pages
- Files
- Images
- Videos
- Other web content

Its main responsibility is serving web content rather than executing the system’s central business rules.

### 8.4 Application server

An application server executes business logic. This logic determines:

- How transactions are processed
- How application data is created or changed
- What information is retrieved
- What information is written to the database
- Which result should be returned to the client

It connects user activity to the system’s server-side behavior.

### 8.5 Proxy server

A proxy acts as an intermediary between systems or tiers. Depending on its configuration, it may provide:

- Request routing
- Load balancing
- Caching
- Encryption
- Malware scanning
- Network optimization
- Source-address hiding
- Firewall-related protection

### 8.6 Database server and DBMS

A database is an organized collection of related data.

A **database management system (DBMS)** is the software that controls access to the database. It allows applications and users to:

- Retrieve data
- Insert data
- Modify data
- Delete data
- Control access

A production deployment may maintain a high-availability replica. If the primary database fails, the replica can help the system continue operating or recover more quickly.

### 8.7 Important component distinctions

| Comparison | Difference |
|---|---|
| Firewall vs. load balancer | A firewall decides whether traffic is permitted; a load balancer decides which server handles permitted traffic |
| Web server vs. application server | A web server delivers web content; an application server executes business logic |
| Database vs. DBMS | The database is the stored data; the DBMS is the software that manages access to it |
| Proxy vs. application server | A proxy intermediates and routes requests; an application server performs application behavior |
| Load balancer vs. server | The load balancer distributes work; servers perform the assigned work |

---

## 9. How all the concepts connect: appointment-system example

Suppose a team is building an online medical appointment system.

### Step 1: Identify requirements

Functional requirements:

- Patients can view available appointments.
- Patients can book or cancel appointments.
- Doctors can view their schedules.

Non-functional requirements:

- The application must be secure.
- It must remain available during busy periods.
- Appointment searches should return quickly.
- Patient data must be protected.

### Step 2: Define the architecture

The architect selects a three-tier structure:

```text
Web/mobile interface
        ↓
Appointment business logic
        ↓
Patient and appointment database
```

### Step 3: Design the internal modules

The application tier is decomposed into cohesive, loosely coupled modules:

- Patient management
- Appointment scheduling
- Doctor availability
- Notifications
- Authentication

### Step 4: Model the system

The team creates:

- Class diagrams for `Patient`, `Doctor`, and `Appointment`
- Sequence diagrams for booking an appointment
- State diagrams for appointment states such as `Available`, `Reserved`, `Confirmed`, and `Cancelled`
- An architectural diagram showing tiers and services

### Step 5: Select architectural patterns

The team could combine:

- Three-tier architecture for overall separation
- Microservices for scheduling and notifications
- Event-driven communication for appointment-confirmation events

For example:

```text
Scheduling service
    ↓ publishes AppointmentBooked event
Event router
    ↓
Notification service
    ↓
Email or text confirmation
```

### Step 6: Use lifecycle environments

The application progresses through:

```text
Development → QA → Staging → Production
```

The staging environment reproduces the important characteristics of production so the team can validate configuration, service communication, and deployment.

### Step 7: Deploy production infrastructure

A production request might travel through the following components:

```text
Patient
  ↓ HTTPS request
Firewall
  ↓ permitted traffic
Load balancer
  ↓ selected server
Web server
  ↓ application request
Application server
  ↓ database query
Database server
  ↓ result
Application server
  ↓
Patient
```

Every concept in the seven lessons contributes to this final working system.

---

## 10. Final review points

- Architecture is the system’s high-level blueprint; design provides greater implementation detail.
- Functional requirements describe capabilities; non-functional requirements describe system qualities.
- High cohesion keeps related responsibilities together.
- Loose coupling reduces dependencies between modules.
- UML communicates both system structure and behavior.
- Class diagrams show static object-oriented structure.
- State and sequence diagrams show dynamic behavior.
- Objects form components; components may form independently deployable services.
- SOA organizes systems around loosely coupled network services.
- Distributed systems run coordinated services across multiple nodes.
- Architectural patterns provide reusable system structures and may be combined.
- Three-tier architecture separates presentation, business logic, and data.
- Event-driven architecture separates producers from consumers through events.
- Microservices divide business capabilities into independently deployable services.
- Applications move through development, QA, staging, and production.
- On-premises, public-cloud, private-cloud, and hybrid-cloud deployments offer different balances of control, cost, security, and scalability.
- Firewalls filter traffic; load balancers distribute it.
- Web servers deliver content; application servers execute business logic.
- Database servers and replicas support persistent data and availability.

[View the complete source folder](https://github.com/zhiyuan-95/Full-stack-Software-Developer/tree/main/Introduction%20to%20Software%20Engineering/Software%20Architecture,%20Design.%20and%20Patterns)
