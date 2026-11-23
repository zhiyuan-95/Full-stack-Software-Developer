# Interpreted and Compiled Programming Languages

## Summary

Programming languages let developers give human-readable instructions to computers, which ultimately execute **machine code** made of binary digits—ones and zeros. Two broad categories are **interpreted languages** and **compiled languages**. The best choice depends on the project.

## Core concepts

### Interpreted languages

An **interpreter** translates source code into instructions the computer can execute while the program runs.

**Process:**

`Source code → Interpreter → Machine instructions → Task runs`

- Also called **scripting languages**.
- Require an interpreter in the operating system, an installed program, or a web browser.
- Can work across platforms when the correct interpreter is available.
- Often used for scripts and frequently repeated tasks.

**Examples:**

- **JavaScript:** commonly interpreted by a web browser.
- **Python:** popular because it is comparatively easy to learn and use.
- **Lua:** a lightweight, general-purpose language often used for game scripting.

### Compiled languages

A **compiler** converts source code into machine code before the program runs. The result is packaged as a program file or executable.

**Process:**

`Source code → Compiler → Executable file → Program runs`

- Commonly used for larger or more complex programs.
- The compiled program can run repeatedly without recompiling each time.
- Examples include applications, installation programs, and operating systems.

**Examples:**

- **C**
- **C++**
- **C#**
- **Java**

## Comparison

| Feature | Interpreted | Compiled |
|---|---|---|
| Translator | Interpreter | Compiler |
| Translation | Occurs as the code runs | Occurs before the program runs |
| Result | Code runs through an interpreter | Code becomes an executable program file |
| Portability | Can run across platforms with the correct interpreter | Must be compiled into a form supported by the target system |
| Typical use | Scripts and frequently repeated tasks | Larger applications and complex programs |
| Examples | JavaScript, Python, Lua | C, C++, C#, Java |

## Important distinction

**Java and JavaScript are different languages.**

- **Java** is presented in the lecture as a compiled language.
- **JavaScript** is presented as an interpreted scripting language commonly run by web browsers.

## Examples from the lecture

Operating systems such as **Linux, Microsoft Windows, macOS, and Android** contain software written using compiled languages. An operating-system update may download compiled installation files containing machine-level instructions for the device.

## Takeaway

Both categories translate human-readable source code into instructions a computer can execute:

- An **interpreter** translates code as it runs.
- A **compiler** translates code beforehand and produces a program file.
- The project’s purpose, complexity, platform requirements, and available tools help determine which language is most appropriate.
