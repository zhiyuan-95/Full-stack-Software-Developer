# More Application Development Tools

## 1. Overview

Common tools used to **build, test, package, and deploy applications** include:

- **CI/CD**
- **Build Tools**
- **Packages**
- **Package Managers**

These tools help automate the software development and deployment process.

---

## 2. CI/CD

### What is CI/CD?

**CI/CD** stands for:

- **CI — Continuous Integration**
- **CD — Continuous Delivery** or **Continuous Deployment**

CI/CD is a DevOps best practice that allows development teams to deliver software changes **frequently and reliably**.

---

### 2.1 Continuous Integration (CI)

Continuous Integration means developers frequently integrate new code into the shared codebase.

A CI system automatically:

1. Integrates new code
2. Builds the application
3. Runs tests
4. Verifies that different components work together correctly

Code may be integrated:

- Daily
- Several times per day
- Even hourly in rapidly changing projects

#### Main Goal

> Detect integration problems early and ensure that new code works with the existing system.

CI is typically implemented using a **build-automation server**.

---

### 2.2 Continuous Delivery (CD)

Continuous Delivery begins after the CI process.

Typical workflow:

```text
Code Change
    ↓
Continuous Integration
    ↓
Build
    ↓
Automated Tests
    ↓
Continuous Delivery
    ↓
Testing / Staging Environment
```

The CI process builds and tests the code, while CD automatically deploys successful builds to a **testing or staging environment**.

---

## 3. Build Tools

### What is a Build Tool?

A **build tool** transforms source code into the files or binaries required to run or install an application.

Build tools can:

- Organize source code
- Configure compile flags
- Manage dependencies
- Compile source code
- Package applications
- Run tests
- Assist with deployment

Build automation becomes especially important when:

- Many developers work on the same project
- Multiple projects depend on each other
- There are many dependencies
- Changes happen frequently

Without automation, keeping track of build order, dependencies, and code changes can become difficult.

---

### 3.1 Tasks Build Automation Can Perform

Build automation can handle tasks such as:

```text
Download dependencies
        ↓
Compile source code
        ↓
Create binary code
        ↓
Package application
        ↓
Run tests
        ↓
Deploy application
```

Builds can usually be started from:

- The **command line**
- An **IDE**

---

### 3.2 Categories of Build Tools

#### Build-Automation Utilities

These tools generate build artifacts such as executables by:

- Compiling source code
- Linking source code
- Packaging output

#### Build-Automation Servers

These systems execute build-automation utilities automatically.

Builds may be triggered:

- On a schedule
- When new code is committed
- When another event occurs

---

### 3.3 Examples of Build Tools

| Tool | Purpose |
|---|---|
| **Webpack** | JavaScript module bundler |
| **Babel** | JavaScript compiler |
| **WebAssembly** | Binary instruction format designed to run in browsers |

---

## 4. Packages

Once an application has been developed and tested, it needs to be distributed to users.

A common approach is to bundle all required files into a **package**.

### What is a Package?

A package is usually an **archive containing the files and information needed to install an application**.

A package may contain:

- Application files
- Installation instructions
- Metadata
- Dependency information

#### Package Metadata

Metadata can include:

- Package name
- Package description
- Package version
- Required dependencies

For example:

```text
Application Package
├── Application files
├── Installation instructions
├── Version information
├── Metadata
└── Dependencies
```

---

## 5. Package Managers

A **package manager** is a tool used to manage software packages.

Package managers can:

- Find packages
- Download packages
- Install packages
- Update packages
- Maintain packages
- Uninstall packages
- Manage dependencies

---

### 5.1 What Package Management Systems Do

Package management systems commonly perform four major functions.

#### 1. Extract Packages

They work with archive tools to extract files from package archives.

#### 2. Verify Packages

They may verify:

- Checksums
- Digital certificates

This helps confirm the package's:

- **Integrity** — the package has not been corrupted or modified.
- **Authenticity** — the package came from a trusted source.

#### 3. Retrieve Software

They can:

```text
Locate → Download → Install → Update
```

software from a **software repository**.

#### 4. Manage Dependencies

Package managers automatically install software required by another package.

For example:

```text
Application A
   ↓ requires
Library B
   ↓ requires
Library C
```

The package manager can install all required dependencies automatically.

---

## 6. Operating-System Package Managers

| Platform | Package Manager |
|---|---|
| **Linux (Debian)** | DPKG |
| **Linux (Red Hat)** | RPM |
| **Windows** | Chocolatey |
| **Android** | Package Manager |
| **macOS** | Homebrew, MacPorts |

---

## 7. Language-Specific Package Managers

Programming languages also have package managers for libraries and reusable code.

| Language / Platform | Package Manager |
|---|---|
| **JavaScript / Node.js** | npm |
| **Java** | Gradle, Maven |
| **Ruby** | RubyGems |
| **Python** | pip, Conda |

Example in Python:

```bash
pip install pandas
```

`pip`:

1. Finds the `pandas` package
2. Downloads it
3. Installs it
4. Installs required dependencies

---

## 8. Relationship Between the Tools

A simplified application-development pipeline looks like this:

```text
Developer writes code
        ↓
Continuous Integration
        ↓
Build Tool
        ↓
Compile / Bundle
        ↓
Automated Testing
        ↓
Package Application
        ↓
Package Manager / Repository
        ↓
Continuous Delivery / Deployment
        ↓
Testing / Staging / Production
```

---

## 9. Key Distinctions

| Concept | Main Purpose |
|---|---|
| **CI** | Frequently integrate, build, and test code |
| **CD** | Deliver/deploy successful builds |
| **Build Tool** | Convert source code into usable build artifacts |
| **Package** | Bundle software and its installation information |
| **Package Manager** | Install, update, remove, and manage packages/dependencies |

---

## 10. Key Takeaways

- **CI/CD** automates software integration and delivery.
- **Continuous Integration** builds and tests code frequently.
- **Continuous Delivery** moves successful builds into testing or staging environments.
- **Build tools** automate compilation, testing, packaging, dependency management, and deployment tasks.
- A **package** bundles application files, metadata, installation instructions, and dependency information.
- A **package manager** handles package installation, updating, removal, verification, and dependency resolution.
- Different operating systems and programming languages use different package-management ecosystems.
