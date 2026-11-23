# Object-Oriented Analysis and Design

## Summary

**Object-oriented analysis and design (OOAD)** plans a software system as a collection of interacting objects. It is commonly used when the system will be developed with an object-oriented language such as **Java, C++, or Python**. UML class diagrams communicate the system’s static structure by showing its classes, attributes, methods, and relationships.

## Core concepts

### Objects and classes

| Term | Meaning |
|---|---|
| **Object** | A software entity containing data and behaviors |
| **Class** | A blueprint or template that defines the generic properties and methods of an object |
| **Instance** | A specific object created from a class |
| **Property** | Data or state belonging to an object |
| **Method** | An action or behavior the object can perform |
| **Instantiation** | The process of creating an object from a class |

A class defines placeholders and available behaviors. The placeholders receive specific values when an object is instantiated.

### Patient example

- `Patient` is the class.
- `LastName` is a property defined by the class.
- Naya Patel is a specific **instance** of the `Patient` class.
- When Naya’s object is instantiated, `LastName` receives the value `Patel`.
- A method can then make the object perform an action, such as canceling an appointment.

## Class diagrams

A **class diagram** is a structural UML diagram used to communicate the structure of an object-oriented system.

Each class box can show:

- The class name
- Its properties or data
- Its methods or available actions
- Its relationships with other classes

Unlike behavioral UML diagrams, which show dynamic system behavior, class diagrams primarily show the system’s **static structure**.

## Inheritance

**Inheritance** allows a subclass to receive the properties and methods of its parent class. A subclass may also define additional properties and methods.

Example hierarchy:

```text
Medical Personnel
├── Nurse
├── Doctor
│   └── Specialist
└── Technician
```

- `Nurse`, `Doctor`, and `Technician` inherit from `Medical Personnel`.
- A `Doctor` can perform the behaviors available to `Medical Personnel`.
- `Specialist` inherits from `Doctor`, so it can perform the behaviors available to both `Doctor` and `Medical Personnel`.
- Each subclass may add specialized properties or methods.

## OOAD and software architecture

OOAD helps architects and developers:

- Break a system into interacting objects.
- Define the responsibilities of each class.
- Understand relationships among different parts of the system.
- Divide development work so multiple developers can work on different components concurrently.
- Model both the system’s static structure and dynamic behavior through UML diagrams.

A class diagram therefore acts as an architectural view of an object-oriented system, showing its primary building blocks and how they relate.

## Takeaway

Objects combine data with behavior, while classes provide the blueprints used to create those objects. OOAD organizes a system around interacting objects, and class diagrams visually document the classes, their attributes and methods, inheritance relationships, and overall structural design.
