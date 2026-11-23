# Branching and Looping Programming Logic

## Summary

Programming logic has two major forms:

- **Branching** decides which action or code path to execute.
- **Looping** decides how many times an action should repeat.

Both rely on **Boolean expressions** and **variables**.

## Core concepts

### Boolean expressions

A Boolean expression has only two possible results:

- `true`
- `false`

Programs use these results to make decisions and control execution.

### Variables

A variable stores a value that may change based on:

- User input
- Program conditions
- Output from another procedure

Variables can also be passed into functions or subroutines.

## Branching logic

Branching directs the program along different code paths depending on whether specified conditions are met.

| Construct | Purpose |
|---|---|
| `if` | Executes code when a condition is true. |
| `if-else` | Executes one block when true and another when false. |
| `switch` | Selects a code path based on a variable or expression’s value. |
| `GoTo` | Transfers execution directly to another location without automatically returning. |

Each possible path forms a **branch**. Programs can use multiple branches to implement complex decision-making.

## Looping logic

A loop repeats instructions until a stopping condition is reached. Each repetition is called an **iteration**.

| Loop | Condition check | Key behavior |
|---|---|---|
| `while` | Before the loop body | Runs only while the condition is true; it may run zero times. |
| `for` | Before each iteration | Initializes once, updates a counter, and stops when its condition becomes false. |
| `do-while` | After the loop body | Runs the body at least once before checking the condition. |

When a loop’s stopping condition is reached, execution continues with the next instruction after the loop.

## Branching vs. looping

- **Branching:** Which action should the program perform?
- **Looping:** How many times should the program perform an action?

## Takeaway

Boolean expressions provide the decisions, variables provide the changing data, branching selects a path, and looping repeats work until a condition changes.
