# Introducing Application Development Tools

## Summary

Cloud application development relies on three major tool categories:

- **Version control** tracks and manages source-code changes.
- **Libraries** provide reusable code for specific features or problems.
- **Frameworks** provide the structure and workflow for building an application.

## Core concepts

### Version control

Version control systems record:

- What changed
- When it changed
- Who made the change
- How conflicting changes should be resolved

They are useful for both teams and individual developers because they preserve project history and allow earlier versions of code to be restored.

**Git and GitHub** are popular tools for storing and managing source code. Git supports:

- Repositories for organizing files
- Branches for isolated development
- Merging changes back into the main codebase

### Libraries

A library is a collection of reusable code that solves a particular problem or supplies a feature.

The developer:

1. Calls a library method when needed.
2. Waits for that method to finish.
3. Regains control of the program flow.

Libraries can accelerate development because developers do not need to recreate common functionality from scratch. Multiple libraries can be incorporated into one project.

Examples:

- **jQuery:** simplifies JavaScript DOM manipulation
- **EmailValidator:** checks whether an email address is correctly constructed
- **Apache Commons Proper:** provides reusable Java components

### Frameworks

A framework supplies a standardized structure—or scaffold—for building and deploying an application. Developers add their own code within that predefined structure.

The lecture emphasizes selecting a framework early because it strongly influences:

- Application architecture
- Program flow
- File organization
- Development conventions
- Which methods and subroutines run, and when

Examples:

- **Angular:** JavaScript-based framework for dynamic web applications
- **Vue.js:** JavaScript framework focused on user interfaces
- **Django:** Python framework for web development

## Libraries vs. frameworks

| Aspect | Library | Framework |
|---|---|---|
| Primary purpose | Adds a feature or solves a specific problem | Defines the application’s overall structure |
| Control | Your code calls the library | The framework calls your code |
| Program flow | Controlled mainly by the developer | Controlled mainly by the framework |
| Flexibility | Generally more flexible | Requires developers to follow its conventions |
| Typical use | Added when a particular capability is needed | Selected early as the foundation of the application |

## Inversion of control

**Inversion of control** describes the way a framework controls execution and calls the developer’s code.

With a library:

> Your program decides when to call the library.

With a framework:

> The framework decides when to call your program’s components.

Frameworks that make many architectural and organizational decisions are called **opinionated frameworks**. They may prescribe how code is written, where files belong, and how files are named.

This reduces flexibility, but it also:

- Standardizes applications
- Removes repetitive configuration work
- Reduces the number of decisions developers must make
- Lets developers focus more on application-specific code

## Takeaway

Version control protects and documents the evolution of the codebase. Libraries provide reusable capabilities while leaving the developer in control. Frameworks provide an application-wide structure and control the workflow through inversion of control.
