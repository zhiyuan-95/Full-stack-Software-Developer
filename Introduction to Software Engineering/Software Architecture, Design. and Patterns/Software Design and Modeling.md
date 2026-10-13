# Software Design and Modeling

## Summary

Software design documents a system’s structure and behavior before development begins. Modeling represents the system visually through tools such as flowcharts and **Unified Modeling Language (UML)** diagrams. Structured design focuses on how software is organized, while behavioral models show what the system does.

## Core concepts

### Structured design

Structured design divides a software problem into organized **modules** and **sub-modules**.

A strong structured design aims for:

- **High cohesion:** Functionally related elements are grouped within the same module.
- **Loose coupling:** Modules have weak dependencies, so changing one module has minimal impact on others.

Loose coupling is commonly used in **service-oriented architectures** and **microservices-based architectural patterns**.

### Behavioral models

Behavioral models describe:

- What a system does
- How the system responds to events
- How objects interact

They do **not** explain the internal implementation of that behavior.

### Structured design versus behavioral models

| Aspect | Structured design | Behavioral models |
|---|---|---|
| Focus | System organization | System behavior |
| Represents | Modules, sub-modules, and data flow | States, events, and object interactions |
| Main question | How is the system divided? | What does the system do? |
| Goal | Create cohesive, loosely coupled components | Explain dynamic behavior without implementation details |

## Unified Modeling Language

**UML** is a standardized, programming-language-agnostic modeling language used to visually represent a software system’s architecture, design, and implementation.

UML diagrams fall into two broad categories:

- **Structural diagrams:** Show the organization and relationships of system components.
- **Behavioral diagrams:** Show system behavior and interactions over time.

### Advantages of UML

UML diagrams help teams:

- Plan features before coding, saving time and money.
- Understand relationships and hierarchies in complex systems.
- Onboard new developers or team members more quickly.
- Communicate with both technical and non-technical audiences.
- Navigate source code by showing relationships among modules.
- Apply the same models regardless of the programming language used.

## Diagram types

### State transition diagram

A **state transition diagram** is a behavioral UML diagram containing:

- **States:** The different conditions a system can be in.
- **Events:** Occurrences that cause the system to change state.
- **Transitions:** The possible movements between states.

Example: A clinic patient may move among the states **waiting**, **testing**, and **with the doctor**. Labeled arrows show the events that trigger each transition.

### Interaction diagram

An **interaction diagram** models the dynamic behavior of a system by showing objects and their relationships.

A **sequence diagram** is a type of interaction diagram that displays communication between objects in chronological order.

Example: A sequence diagram can show how a patient, an online portal, and other system objects communicate while scheduling an appointment.

## Example of structured design

A simplified billing system can be divided into:

- **Billing:** Main module
- **Insurance verification:** Sub-module
- **Submit claim:** Sub-module
- **Output total:** Sub-module

The hierarchy shows the organization of the modules, while arrows represent the flow of data between them.

## Takeaway

Structured design explains how software is divided into cohesive, loosely coupled modules. Behavioral models explain what the system does. UML provides a standardized visual language for communicating both perspectives, while state transition and interaction diagrams describe changes in state and communication among objects.

*Repeated transcript copies and note-taking interface text were removed.*
