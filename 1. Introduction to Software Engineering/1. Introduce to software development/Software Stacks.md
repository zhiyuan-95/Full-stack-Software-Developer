# Introduction to Software Stacks

## 1. What Is a Software Stack?

A **software stack** is a combination of technologies that work together to build and run an application.

It may include:

- Programming languages
- Frameworks
- Databases
- Web servers
- Application servers
- Operating systems
- Messaging systems
- User-interface technologies

The technologies are arranged in layers and work together to support the application.

### General Layer Structure

A simple software stack often contains:

```text
Presentation Layer
      ↓
Business Logic Layer
      ↓
Data Layer
```

Higher layers provide services directly to the user, while lower layers interact more closely with the operating system, infrastructure, or hardware.

---

## 2. Software Stack vs. Technology Stack

These terms are related but not identical.

### Software Stack

Focuses primarily on the **software technologies** used to create and run an application.

Examples:

- Programming languages
- Frameworks
- Databases
- Servers

### Technology Stack

A **broader concept** that can include the software stack plus infrastructure such as:

- Virtual machines
- Containers
- Storage
- Load balancers

Therefore:

```text
Technology Stack
      │
      ├── Software Stack
      │
      └── Infrastructure / Hardware
```

---

## 3. Complex Software Stacks

More complex applications may require additional layers or technologies, including:

- Virtualization
- Scheduling
- Orchestration
- Runtime environments
- Database connectivity
- Networking
- Security

A stack does not have a strict required structure.

The technologies simply need to support the application's:

- Development
- Functionality
- Deployment

Developers also do **not need to use every available layer** in a stack—only those relevant to the application.

---

## 4. Common Software Stacks

### 4.1 Python Django Stack

Uses:

- **Python**
- **Django web framework**

Characteristics:

- Open source
- Commonly used for large-scale web applications
- Suitable for applications that change frequently

---

### 4.2 Ruby on Rails Stack

Uses:

- **Ruby**
- **Ruby on Rails**

It can work with:

- JSON
- XML
- HTML
- CSS
- JavaScript

Ruby on Rails is primarily a server-side web application framework.

---

### 4.3 ASP.NET Stack

Uses Microsoft technologies such as:

- ASP.NET MVC
- IIS web server
- SQL Server
- Microsoft Azure

---

## 5. LAMP Stack

**LAMP** is one of the oldest and most established web-development stacks.

LAMP stands for:

| Letter | Technology |
|---|---|
| L | Linux |
| A | Apache |
| M | MySQL |
| P | PHP |

It is commonly used for:

- Websites
- Web applications
- Cloud applications

### Advantages

- Open source
- Mature ecosystem
- Large amount of documentation
- Many reusable solutions
- Components are loosely coupled

Because components are loosely coupled, technologies can sometimes be swapped.

For example:

```text
MySQL → PostgreSQL
```

This could turn:

```text
LAMP → LAPP
```

Similarly, PHP may sometimes be replaced with Python.

### Disadvantages

#### Platform Dependency

Linux is an important part of LAMP, so it is less platform-independent than some JavaScript-based stacks.

#### Relational Database

MySQL is relational, so according to the course material, LAMP is less suited to working with unstructured data.

#### Multiple Languages

The back end may use:

- PHP
- Perl
- Python

while the front end commonly uses:

- JavaScript
- HTML

Therefore, developers may need to work with multiple languages.

---

## 6. MEAN Stack

**MEAN** is a JavaScript-based web-development stack.

| Letter | Technology | Role |
|---|---|---|
| M | MongoDB | Database |
| E | Express.js | Web application framework |
| A | Angular | Front-end framework |
| N | Node.js | Server-side runtime/platform |

### Advantages

#### One Main Programming Language

The major advantage is that the stack uses **JavaScript throughout**.

This means developers can use the same language across much of the application.

#### Open Source

MEAN technologies are:

- Free
- Open source
- Platform-agnostic

#### Large Ecosystem

Node.js provides many reusable modules, allowing developers to build applications quickly.

### Disadvantages

The course notes several potential drawbacks:

- May not be ideal for some large-scale applications
- Express.js business logic may reside heavily on the server
- Some services may be difficult to reuse
- MongoDB does not provide all of the functionality offered by relational databases

---

## 7. MERN Stack

The **MERN stack** is closely related to MEAN.

The main difference is:

```text
Angular → React
```

Therefore:

| Stack | Front-End Framework |
|---|---|
| MEAN | Angular |
| MERN | React |

MERN consists of:

- MongoDB
- Express.js
- React
- Node.js

React provides a flexible and high-performing approach for developing front-end interfaces.

---

## 8. MEVN Stack

The **MEVN stack** also derives from MEAN.

The main difference is:

```text
Angular → Vue.js
```

MEVN consists of:

- MongoDB
- Express.js
- Vue.js
- Node.js

### Advantages

MEVN shares many advantages with MEAN:

- JavaScript-based
- Open source
- Platform-independent

Vue.js is also a relatively lightweight front-end framework.

### Disadvantage

According to the course, Vue.js is newer than Angular and therefore has fewer reusable libraries available.

---

## 9. Comparing MEAN, MEVN, and LAMP

| Feature | MEAN | MEVN | LAMP |
|---|---|---|---|
| Front end | Angular | Vue.js | HTML / JavaScript |
| Backend | Node.js / Express.js | Node.js / Express.js | PHP / Perl / Python |
| Database | MongoDB | MongoDB | MySQL |
| Main language | JavaScript | JavaScript | Multiple languages |
| Open source | Yes | Yes | Yes |
| Platform-agnostic | Yes | Yes | No, Linux-based |
| Database type | NoSQL | NoSQL | Relational |
| Ecosystem maturity | Large | Newer | Very mature |

---

## 10. Important Relationships

The three JavaScript-based stacks are closely related:

```text
              MongoDB
                 +
             Express.js
                 +
              Node.js
                 |
        ┌────────┼────────┐
        ↓        ↓        ↓
     Angular   React    Vue.js
        ↓        ↓        ↓
      MEAN      MERN      MEVN
```

The main difference between **MEAN, MERN, and MEVN** is therefore the **front-end framework**.

---

## 11. Key Advantages of Different Stacks

### MEAN

Main advantage:

> JavaScript is used throughout the stack.

This reduces the number of programming languages developers need to learn and switch between.

### MEVN

Similar to MEAN but uses Vue.js, which is lighter-weight.

### LAMP

Main advantages:

- Mature ecosystem
- Large amount of reusable code
- Strong support
- Works well with relational data

---

## 12. Key Takeaways

- A **software stack** is a group of technologies used together to build and run applications.
- A **technology stack** is broader and may also include infrastructure such as containers, virtual machines, storage, and load balancers.
- Software stacks can be simple three-layer systems or complex multi-layer architectures.
- Developers only need to use the components relevant to their application.
- **LAMP** uses Linux, Apache, MySQL, and PHP.
- **MEAN** uses MongoDB, Express.js, Angular, and Node.js.
- **MERN** replaces Angular with React.
- **MEVN** replaces Angular with Vue.js.
- MEAN/MERN/MEVN are attractive because much of the stack can use **JavaScript**.
- LAMP is older and more mature and is particularly suited to applications using relational data.
