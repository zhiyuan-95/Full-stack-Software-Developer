# Introduction to Software Architecture

## Summary

Software architecture is the high-level organization or “blueprint” of a software system. It defines the system’s fundamental structures, how components interact, the operating environment, and the principles guiding its design. Because architecture captures early decisions that are difficult and expensive to change, it strongly influences implementation, technology choices, and deployment.

## Core concepts

### What software architecture defines

- The system’s fundamental structure and behavior
- The components that make up the system
- How those components interact
- The environment in which the system operates
- The design principles developers should follow

Software architecture and its documentation are developed during the **design phase of the Software Development Life Cycle (SDLC)**.

### Why good architecture matters

A well-designed architecture:

- Balances the needs of different stakeholders.
- Gives team members a shared basis for communication.
- Guides later coding and implementation decisions.
- Supports changing requirements and development agility.
- Extends the system’s useful lifespan even when implementation details change.
- Addresses important **non-functional requirements**, including:
  - Performance
  - Scalability
  - Maintainability
  - Interoperability
  - Security
  - Manageability

## Architecture’s influence on technical decisions

### Technology stack

A **tech stack** is the collection of technologies used to build a system, including:

- Software platforms
- Programming languages
- Libraries
- Frameworks

Architects must understand each technology’s advantages and disadvantages. The selected stack should support the system’s functional needs and non-functional requirements.

### Production environment

Architecture also guides decisions about the environment in which the completed application will run.

A **production environment** contains the infrastructure that runs and delivers the application to users, such as:

- Servers
- Load balancers
- Databases

## Architecture artifacts

| Artifact | Purpose |
|---|---|
| **Software Design Document (SDD)** | Provides technical specifications and a functional description of how the design should be implemented. It may document assumptions, dependencies, constraints, requirements, objectives, and methodologies. |
| **Architectural diagram** | Shows system components, their interactions, boundaries or confines, constraints, and the architectural patterns used. |
| **Unified Modeling Language (UML) diagrams** | Communicate a system’s structure and behavior using standardized, programming-language-independent notation. |

### Architectural patterns

An **architectural pattern** is a general, reusable solution to a commonly occurring software-design problem.

## Takeaway

Software architecture is the foundational blueprint of an application. It captures early, high-impact decisions and helps teams communicate, manage non-functional requirements, select an appropriate technology stack, and design the production environment. Its principal artifacts include the **SDD, architectural diagrams, and UML diagrams**.

*Source note: The attachment contained six complete copies of the lesson, followed by a seventh truncated copy and repeated “Added to Selection” interface text. The duplicate and interface content was removed.*
