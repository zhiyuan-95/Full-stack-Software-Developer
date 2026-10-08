#**software development ecosystem**

### Big picture

```text
                    SOFTWARE APPLICATION
                           │
              ┌────────────┴────────────┐
              │                         │
          FRONT END                 BACK END
        (runs in browser)          (runs on server)
              │                         │
     Front-end tools              Back-end tools
     HTML / CSS / JS              Python / Java / Node.js
     React / Angular              Django / Spring / Express
              │                         │
              └────────────┬────────────┘
                           │
                    SOFTWARE STACK
               = collection of technologies
                    used by the app

Example MERN stack:
MongoDB + Express + React + Node.js
```

Then, around those application technologies, you have tools that help developers **build, organize, and deploy** the software:

```text
Source Code
    │
    ├── Frameworks
    │     React, Django, Spring, Express
    │
    ├── Packages
    │     reusable libraries/modules
    │
    ├── Package Manager
    │     npm, pip, Maven
    │     ↓
    │   installs/manages packages
    │
    ├── Build Tool
    │     Vite, Webpack, Gradle
    │     ↓
    │   transforms source code into
    │   something ready to run/deploy
    │
    └── CI/CD
          GitHub Actions, Jenkins, GitLab CI
          ↓
        automatically:
        build → test → deploy
```

## 1. Front-end development tools

**Front end = what the user interacts with.**

It usually runs inside the browser.

Examples:

| Type | Examples |
|---|---|
| Core languages | HTML, CSS, JavaScript |
| Frameworks/libraries | React, Angular, Vue |
| Build tools | Vite, Webpack |
| Package manager | npm, yarn, pnpm |
| Testing | Jest, Cypress |

For example:

```text
React application
      ↓
npm installs dependencies
      ↓
Vite builds the application
      ↓
Browser runs the resulting HTML/CSS/JS
```

So **front-end development tools** is a broad category. Frameworks, package managers, and build tools can all be front-end development tools.

---

## 2. Back-end development tools

**Back end = server-side logic.**

It handles things like:

```text
API requests
authentication
business logic
database access
data processing
```

Examples:

| Type | Examples |
|---|---|
| Languages/runtime | Python, Java, Node.js, C# |
| Frameworks | Django, Flask, FastAPI, Spring |
| Databases | PostgreSQL, MySQL, MongoDB |
| Package managers | pip, npm, Maven |
| Build tools | Maven, Gradle |

For example:

```text
Browser
   ↓ HTTP request
FastAPI backend
   ↓
Python business logic
   ↓
PostgreSQL database
```

Again, **back-end development tools** is an umbrella category.

---

## 3. Software stack

A **software stack** is not one tool.

It is the **collection of technologies used together to build an application**.

For example, the famous **MERN stack** is:

```text
M = MongoDB        database
E = Express        backend framework
R = React          frontend library
N = Node.js        backend runtime
```

So:

```text
Software Stack
      │
      ├── Front-end technologies
      ├── Back-end technologies
      ├── Database
      └── sometimes infrastructure/tools
```

Your SEC Insight project, for example, could eventually have something like:

```text
React
   ↓
FastAPI
   ↓
Python
   ↓
SQLite/PostgreSQL
```

That combination could be described as your application's **technology stack**.

---

## 4. Framework

A **framework provides a structured way to build software**.

Instead of starting everything from scratch, the framework gives you architecture, conventions, reusable functionality, and APIs.

Examples:

```text
Frontend:
React
Angular
Vue

Backend:
Django
FastAPI
Spring
Express
```

For example, FastAPI provides functionality for:

```python
@app.get("/companies/{ticker}")
def get_company(ticker: str):
    ...
```

You don't need to manually implement an HTTP server, URL routing, request parsing, etc.

The framework handles much of that infrastructure.

So:

```text
Programming Language
        ↓
     Framework
        ↓
   Your Application
```

Example:

```text
Python → FastAPI → SEC Insight API
```

---

## 5. Package

A **package is reusable code created by someone else (or yourself)** that you can add to your project.

For Python:

```text
numpy
pandas
requests
sqlalchemy
scikit-learn
```

For JavaScript:

```text
axios
lodash
express
react
```

For example:

```python
import pandas
```

`pandas` is a Python package.

Packages save you from reinventing functionality.

Instead of writing an HTTP client yourself:

```python
import requests

requests.get(url)
```

you install and use the `requests` package.

---

## 6. Package manager

A **package manager installs and manages packages**.

Think:

```text
Package
       ↑
       │ installs
Package Manager
```

Examples:

| Ecosystem | Package manager |
|---|---|
| Python | pip |
| JavaScript | npm / yarn / pnpm |
| Java | Maven / Gradle |
| Rust | Cargo |

For example:

```bash
pip install pandas
```

Here:

```text
pip       = package manager
pandas    = package
```

Or:

```bash
npm install react
```

```text
npm       = package manager
React     = package/library
```

The package manager also tracks **dependencies**.

For example:

```text
Your application
     │
     ├── React
     ├── Axios
     └── Lodash
```

and stores this information in files such as:

```text
package.json          JavaScript
requirements.txt      Python
pyproject.toml        Python
pom.xml               Java
```

---

## 7. Build tool

A **build tool converts your source code into a form that can be executed or deployed**.

Conceptually:

```text
Source Code
    ↓
Build Tool
    ↓
Build Artifact
```

The build process may involve:

```text
compile
bundle
transpile
minify
resolve dependencies
run tests
package files
```

For example, in frontend development:

```text
React / TypeScript source

        ↓

       Vite

        ↓

HTML + optimized JavaScript + CSS

        ↓

production website
```

Common build tools:

```text
Frontend:
Vite
Webpack
esbuild

Java:
Maven
Gradle

C/C++:
Make
CMake
```

One important detail: **some tools perform multiple roles**.

For example, Maven is both heavily associated with:

```text
dependency management
+
build automation
```

So software-tool categories are not always completely separate.

---

## 8. CI/CD

CI/CD sits at a **higher automation level**.

It automates your software development pipeline.

```text
Developer writes code
        ↓
      Git push
        ↓
       CI
        ↓
   Build project
        ↓
     Run tests
        ↓
       CD
        ↓
 Deploy application
```

### CI — Continuous Integration

CI usually automatically performs things such as:

```text
checkout code
      ↓
install packages
      ↓
build
      ↓
run tests
      ↓
check code quality
```

For example:

```text
GitHub push
   ↓
GitHub Actions
   ↓
npm install
   ↓
npm test
   ↓
npm run build
```

### CD — Continuous Delivery / Deployment

Then CD takes the successfully built application and prepares or performs deployment:

```text
CI succeeds
    ↓
deploy to staging
    ↓
possibly deploy to production
```

Common CI/CD systems include:

```text
GitHub Actions
Jenkins
GitLab CI/CD
CircleCI
Azure DevOps
```

---

# How everything connects

Consider a full-stack application built using React + FastAPI.

```text
                      SOFTWARE STACK
                            │
          ┌─────────────────┴──────────────────┐
          │                                    │
      FRONT END                            BACK END
          │                                    │
     JavaScript                              Python
          │                                    │
        React                              FastAPI
     (framework/                           (framework)
       library)
          │                                    │
         npm                                  pip
   package manager                     package manager
          │                                    │
       packages                            packages
   Axios, React, etc.               SQLAlchemy, Pandas, etc.
          │                                    │
         Vite                               build/
      build tool                          packaging tools
          │                                    │
          └──────────────────┬─────────────────┘
                             │
                           CI/CD
                             │
                       GitHub Actions
                             │
                    ┌────────┴────────┐
                    │                 │
                   Test             Build
                    │                 │
                    └────────┬────────┘
                             │
                           Deploy
                             │
                         Production
```

The most important distinction to remember is:

| Term | Meaning |
|---|---|
| **Front-end tools** | Tools used to build the user-facing part |
| **Back-end tools** | Tools used to build server-side functionality |
| **Software stack** | The overall combination of technologies |
| **Framework** | Structure and reusable foundation for building an application |
| **Package** | Reusable code/dependency |
| **Package manager** | Installs and manages packages |
| **Build tool** | Builds/transforms source code into runnable/deployable artifacts |
| **CI/CD** | Automates integration, testing, building, and deployment |

A useful mental model is:

> **Stack = what technologies your application uses. Framework = how you structure the application. Packages = reusable pieces you depend on. Package manager = gets those pieces. Build tool = assembles the application. CI/CD = automatically runs that whole process and deploys it.**
