# Cloud Infrastructure Architecture

## Summary

After selecting a cloud service model and cloud type, customers must design the infrastructure architecture. Cloud infrastructure is organized geographically into **Regions**, **Availability Zones**, and **Data Centers**, which contain the compute, storage, and networking resources used to run workloads.

## Infrastructure hierarchy

```text
Cloud provider
└── Region
    └── Availability Zone (AZ)
        └── Data Center
            └── Pods and racks
                ├── Compute
                ├── Storage
                └── Networking
```

| Level | Description | Purpose |
|---|---|---|
| **Region** | A geographic area where a provider’s infrastructure is clustered | Separates resources geographically so other regions can continue operating if one is disrupted |
| **Availability Zone (AZ)** | An isolated location within a region, typically with distinct data-center resources | Improves fault tolerance and avoids a single shared point of failure |
| **Data Center** | A physical facility containing cloud infrastructure | Houses servers, storage, and networking equipment |
| **Pods and racks** | Standardized containers of physical resources | Organize infrastructure within a data center |

The lecture gives **NA South** and **US East** as region examples, and **DAL-09** and **us-east-1** as zone examples. Provider naming conventions may differ.

Regions, Availability Zones, private data centers, and the Internet are connected through high-bandwidth networks.

## Compute resources

Cloud providers offer three principal compute options:

| Option | Description |
|---|---|
| **Virtual server or virtual machine (VM)** | A software-based computer created through virtualization. A **hypervisor** creates and runs VMs on a physical server. |
| **Bare metal server** | A physical server that is not virtualized |
| **Serverless computing** | An abstraction layer built on top of virtual machines |

Customers can provision VMs and bare metal servers as needed and run workloads on them. Serverless resources provide another way to execute workloads using a higher level of abstraction.

## Storage resources

Cloud storage can hold:

- Files and documents
- Application code
- Images and videos
- Backups and snapshots
- Databases and other information

The lecture states that virtual and bare metal servers are provisioned with default storage on local drives. Cloud providers also offer additional storage options, although those options are not explained in this lecture.

## Networking resources

Cloud data centers contain traditional networking hardware, including **routers** and **switches**. They also provide **Software-Defined Networking (SDN)**, which virtualizes networking resources and makes them programmatically available through APIs.

SDN simplifies network provisioning, configuration, and management.

### Network interfaces

When a server is provisioned, its network interfaces must be configured:

- A **public network interface** connects the server to the public Internet.
- A **private network interface** connects it to other cloud resources and helps keep internal communication isolated.
- Interfaces require **IP addresses** and **subnets**, which may be assigned automatically or configured manually.

### Access control and isolation

| Technology | Role |
|---|---|
| **Security Group** | Controls which network traffic can access cloud resources |
| **Access Control List (ACL)** | Defines rules governing permitted and denied access |
| **Virtual Local Area Network (VLAN)** | Logically separates network resources |
| **Virtual Private Cloud (VPC)** | Creates an isolated virtual network within a provider’s cloud |
| **Virtual Private Network (VPN)** | Establishes a private connection across another network |

Traditional appliances—including **firewalls**, **load balancers**, **gateways**, and **traffic analyzers**—can also be virtualized and offered as cloud services.

### Content Delivery Networks

A **Content Delivery Network (CDN)** distributes content across multiple geographic points. Users can then obtain the content from a nearby location, reducing the distance it must travel and improving delivery speed.

## Infrastructure-planning sequence

1. Select appropriate geographic Regions.
2. Distribute resources across Availability Zones for fault tolerance.
3. Choose between VMs, bare metal servers, and serverless resources.
4. Select storage appropriate for the workload’s data.
5. Configure public and private network interfaces.
6. Assign IP addresses and subnets.
7. Protect resources with Security Groups, ACLs, and isolated networks.
8. Use virtual network services and CDNs where required.

## Key takeaway

Cloud infrastructure combines geographically distributed physical facilities with virtualized compute and networking capabilities. Regions and Availability Zones provide isolation and resilience, while compute, storage, SDN, access controls, private networks, and CDNs provide the resources needed to run and secure cloud workloads.

> **Source note:** The supplied transcript contained two complete copies of the lecture and a truncated third copy ending in note-taking interface text. The repetitions and interface artifacts were removed; no missing material was reconstructed.
