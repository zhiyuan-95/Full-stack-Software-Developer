# Introduction to Programming Concepts, Part 1

## Summary

Identifiers give meaningful names to program components. Constants and variables identify individual data values, while containers such as arrays and vectors organize multiple elements efficiently.

## Core concepts

### Identifiers

An **identifier** is a custom name used to reference a program component, such as:

- A stored value
- A method
- An interface
- A class

Meaningful identifiers improve code readability and make program components easier to reference.

### Constants and variables

| Feature | Constant | Variable |
|---|---|---|
| Value | Does not change during execution | Can change during execution |
| Assignment | Assigned when defined | May be assigned when defined or later |
| Examples | Pi, cost price, tax rate | User age, username, game score |
| Main purpose | Reuse a fixed value | Represent changing or initially unknown data |

Constants help by:

- Replacing repeated literal values with meaningful names
- Improving readability
- Allowing a fixed value to be updated in one place

Variables may contain text, numbers, or other data types. They prevent values such as usernames, services, and filenames from being hard-coded into the program.

## Containers

A **container** stores multiple elements under one identifier. This is more manageable than declaring a separate variable for every value—for example, storing 1,000 integers.

The lecture introduces two container types:

| Feature | Array | Vector |
|---|---|---|
| Size | Fixed | Dynamic |
| Element storage | Sequential | Multiple elements with automatic resizing |
| Element type | Elements share the declared data type | Not fully explained in the supplied transcript |
| Indexing | Begins at index `0` | Not explained in the supplied transcript |

### Declaring an array

An array declaration specifies:

1. The element’s data type, such as an integer, Boolean, or string
2. The array’s name
3. Its maximum size in square brackets

Conceptual form:

```text
dataType arrayName[maximumSize]
```

## Takeaway

- **Identifiers** give program components meaningful names.
- **Constants** represent values that should remain unchanged.
- **Variables** represent values that can change.
- **Containers** efficiently organize collections of elements.
- **Arrays** have a fixed size, while **vectors** have a dynamic size.

> Note: The supplied transcript ends mid-sentence during the explanation of how vectors resize, so that portion of the lesson is incomplete.
