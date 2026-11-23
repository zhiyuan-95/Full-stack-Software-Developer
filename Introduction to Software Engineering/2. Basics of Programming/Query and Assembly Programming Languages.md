# Query and Assembly Programming Languages

## Summary

Programming languages can be categorized by their level of abstraction:

- **High-level languages** are easier for humans to read, write, debug, and maintain.
- **Low-level languages** closely represent the instructions executed by computer hardware.

Query languages such as **SQL** are high-level languages used to retrieve and manipulate database data. Assembly languages are low-level, processor-specific languages translated into machine code by an **assembler**.

## Core concepts

### High-level vs. low-level languages

| Category | Characteristics | Examples |
|---|---|---|
| High-level | Human-readable syntax; faster to write and debug; abstracts hardware details | SQL, Pascal, Python |
| Low-level | Closely represents machine instructions; tied to processor architecture | ARM, MIPS, x86 assembly |

## Query languages

A **query** is a request for information from a database. The database interprets the request, searches the relevant tables, and returns the results.

A **query language**, also called a **database query language**, provides predefined instructions that applications and users can use to communicate with a database management system.

- **SQL — Structured Query Language** is the most widely used query and database-management language.
- Other query languages include **AQL, CQL, Datalog, and DMX**.

### SQL and NoSQL databases

| SQL databases | NoSQL databases |
|---|---|
| Relational | Non-relational |
| Organize data using related tables | May use documents, key-value pairs, graphs, or other structures |
| Generally use predefined schemas | Often support more flexible or dynamic schemas |
| Commonly handle structured data | Commonly used for semi-structured or unstructured data |

**NoSQL** means **Not Only SQL**.

### CRUD operations

Query languages can perform four fundamental database operations, collectively called **CRUD**:

- **Create** — add new data
- **Read** — retrieve existing data
- **Update** — modify existing data
- **Delete** — remove data

### Query statements

Database commands are commonly called **statements**.

| Statement type | Purpose |
|---|---|
| Select statement | Retrieves data from relevant rows and columns |
| Action statement | Creates, inserts, updates, or deletes data |
| Administrative statement | Performs tasks such as creating users or modifying permissions |

A database may organize the retrieved information before returning it as query results.

## Assembly languages

Assembly language uses readable symbols and abbreviations to represent machine-code instructions.

Key characteristics include:

- It is a **low-level programming language**.
- It is closely tied to a specific processor architecture.
- Different CPU architectures generally have different assembly languages.
- Instructions are normally written one per line.
- An **assembler** translates assembly code into machine code.
- One assembly instruction generally corresponds to one machine-code instruction.

### Assembly statement structure

An assembly statement contains two main components:

1. **Instruction or mnemonic** — identifies the operation to perform.
2. **Parameters or operands** — identify the data or its location.

A statement may also include an optional comment.

Common mnemonics include:

| Mnemonic examples | General purpose |
|---|---|
| `INPUT`, `INP` | Receive input |
| `OUTPUT`, `OUT` | Produce output |
| `LOAD`, `LDA` | Load data |
| `STORE`, `STA` | Store data |
| `ADD` | Add values |

The **opcode** tells the processor what operation to perform, while the **operand** tells it where to find or place the data.

## Translation comparison

| High-level languages | Assembly languages |
|---|---|
| Translated using a compiler or interpreter | Translated using an assembler |
| One statement may produce multiple machine-code instructions | One instruction generally produces one machine-code instruction |
| Usually portable across processor architectures | Closely tied to a particular processor architecture |

## Takeaway

Query languages operate at a high level, allowing users and applications to retrieve or manipulate database data through understandable statements. Assembly languages operate much closer to the hardware, using processor-specific mnemonics and operands that map directly to machine-code instructions.
