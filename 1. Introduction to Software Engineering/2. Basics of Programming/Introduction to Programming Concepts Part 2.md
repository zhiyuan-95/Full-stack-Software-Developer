# Introduction to Programming Concepts — Part Two

## Summary

This lesson introduces **functions** and **objects**. Functions divide complex programs into reusable pieces that perform specific tasks. Objects combine related data and behavior, forming the foundation of **object-oriented programming (OOP)**.

## Functions

A **function** is a structured, reusable block of code that performs one specific action. Functions support **modular programming**, which divides a large program into smaller, focused components.

Depending on the programming language, functions may also be called:

- Subroutines
- Procedures
- Methods
- Modules

### Function workflow

```text
Input → Processing → Output
```

A function can receive data through **parameters**, process that data, and return a result.

### Types of functions

| Type | Description | Example |
|---|---|---|
| Standard library function | Built into the programming language | `print` |
| User-defined function | Created by the developer for a particular task | A custom calculation function |

### Using a function

1. **Define** the function by providing its name and body.
2. Supply any required **parameters**.
3. **Call** or **invoke** the function to execute its code.
4. Receive its returned result, if it produces one.

Languages represent function bodies differently. They may use:

- Braces
- `begin` and `end` statements
- Indentation

Some languages, including **C and C++**, may also require a separate function **declaration**.

## Objects and OOP

**Object-oriented programming (OOP)** organizes programs around objects. An object combines:

- **State** represented by properties or attributes
- **Behavior** represented by methods

Objects commonly store their properties in **fields** and expose their behaviors through **methods**.

### Real-world analogy

A car can be described through:

- **Properties:** color, speed, fuel level
- **Methods:** start, accelerate, brake

Software objects follow the same pattern. Examples can include a Windows service, user account, database table, or system folder.

## Procedural programming vs. OOP

| Procedural programming | Object-oriented programming |
|---|---|
| Focuses primarily on functions or procedures | Focuses primarily on objects |
| Procedures operate on separate data structures | Data and related methods are packaged together |
| Organizes behavior into procedural steps | Organizes state and behavior around objects |

## Takeaway

- Functions make programs modular, manageable, and reusable.
- Functions are defined and then called with any required parameters.
- OOP packages related data and behavior into objects.
- An object’s **properties** describe its state, while its **methods** define its behavior.
