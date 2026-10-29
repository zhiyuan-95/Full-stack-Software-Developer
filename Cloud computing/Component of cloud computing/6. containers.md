# Containerization and Cloud-Native Applications

## Summary

A **container** is an executable unit of software that packages application code with the libraries, binaries, runtimes, and dependencies it needs.

Unlike a virtual machine, each container does not include a complete guest operating system. Containers share the host operating system’s capabilities through a **container runtime**, making them smaller, faster to deploy, and more resource-efficient than VMs for many workloads.

## Historical context

The lecture identifies the Linux kernel’s introduction of **control groups (cgroups)** in **2008** as an important foundation for modern container technology.

Technologies named in the lecture include:

- Docker
- Kubernetes
- Cloud Foundry
- Rocket
- Application Container Image (**ACI**)

Kubernetes is mentioned as a technology commonly associated with containers, but container orchestration is not explained in this lecture.

## Container architecture

```text
Physical hardware
└── Host operating system
    └── Container runtime
        ├── Container A
        ├── Container B
        └── Container C
```

A container runtime—such as the **Docker Engine**—creates and runs containers. Different container technologies may use different runtime engines.

Because containers share the host operating system, individual containers primarily need to package:

- Application code
- Required runtime
- Libraries
- Binaries
- Application dependencies

## Virtual-machine architecture

```text
Physical hardware
└── Host operating system and hypervisor
    ├── VM 1
    │   ├── Guest operating system
    │   ├── Libraries and binaries
    │   └── Application
    ├── VM 2
    │   ├── Guest operating system
    │   ├── Libraries and binaries
    │   └── Application
    └── VM 3
        ├── Guest operating system
        ├── Libraries and binaries
        └── Application
```

Each VM includes its own guest operating system. Scaling an application across several VMs therefore duplicates the guest OS, libraries, and supporting files for every instance.

## Containers versus virtual machines

| Characteristic | Container | Virtual machine |
|---|---|---|
| Execution layer | Container runtime | Hypervisor |
| Operating system | Shares features and resources of the host OS | Includes a guest OS |
| Packaged content | Application, runtime, libraries, binaries, and dependencies | Application stack plus a complete guest OS |
| Resource use | Generally lighter | Generally heavier |
| Deployment | Small and fast | More infrastructure to provision |
| Scaling | Individual components can be replicated independently | Each additional VM duplicates its guest OS |
| Portability | Application environment is packaged consistently | Environment may require more configuration between systems |
| Best fit in this lecture | Modular, cloud-native applications | Workloads requiring complete virtual machines |

## Illustrative Node.js example

The lecture compares deploying a lightweight **Node.js** application through VMs and containers.

### Using VMs

Each application instance requires:

1. A VM
2. A guest operating system
3. Supporting binaries and libraries
4. The Node.js runtime and application

Creating three instances duplicates that complete environment three times and consumes more host resources.

The speaker gives an illustrative observation of a Node.js VM exceeding **400 MB**, compared with a Node.js runtime and application under **15 MB**. This is an anecdotal example rather than a universal size benchmark.

### Using containers

Each container packages the application and its required dependencies without duplicating a complete guest OS. Three containerized instances therefore consume fewer resources than three equivalent VM-based environments in the lecture’s example.

Unused CPU or memory can remain available to other containers running on the same host.

## Container creation and deployment

The lecture presents three central stages:

```text
Manifest → Image → Running container
```

### 1. Define the manifest

The manifest describes how the container should be built.

Examples include:

- A **Dockerfile** in Docker
- A manifest in Cloud Foundry

### 2. Build the image

The manifest is used to create an immutable application image.

Examples include:

- Docker image
- Application Container Image (**ACI**) in Rocket

### 3. Run the container

The image is commonly pushed to a **registry** and then used by a container runtime to create running containers.

```text
Dockerfile
    ↓
Docker image
    ↓
Image registry
    ↓
Running container
```

## Portability and environment consistency

The lecture describes an application developed on a MacBook that encounters compatibility problems after deployment to a Linux VM.

Packaging the application and its dependencies into a container helps reduce differences between development and production environments. This supports the familiar goal of making the same packaged application behave consistently wherever a compatible container runtime is available.

## Modular scaling example

The application example contains:

- A Node.js application
- A Python application that communicates with a third-party cognitive API for image recognition

If both applications are placed in the same VM, they cannot easily be scaled independently. The entire VM-based unit must be replicated even when only the Node.js component needs more capacity.

With containers, the components remain modular:

```text
Node.js containers ──→ Python container ──→ Third-party API
```

The Node.js application can have several container instances while the Python application retains only one. Each component can therefore scale according to its own demand.

## Benefits of containerization

### Lightweight deployment

Containers avoid duplicating a complete guest OS for every application instance.

### Efficient resource use

Multiple containers share host resources. CPU and memory not being used by one container can remain available to others.

### Independent scaling

Different application components can be replicated independently instead of scaling an entire VM.

### Portability

Applications and their dependencies are packaged together, supporting movement between compatible desktop, traditional IT, and cloud environments.

### DevOps and CI/CD support

A repeatable manifest-to-image-to-container process makes application builds and deployments more consistent. This supports:

- Agile DevOps
- Continuous integration
- Continuous delivery
- Cloud-native application development

## Key takeaway

Containers package applications and their dependencies without including a separate guest operating system in every instance. Their smaller resource footprint, consistent packaging, and ability to scale components independently make them well suited to cloud-native development and automated delivery workflows.

> **Source note:** The supplied transcript contained two complete copies followed by a third copy that ended mid-sentence with note-taking interface text. One complete version was retained, and the truncated duplicate was not reconstructed.
