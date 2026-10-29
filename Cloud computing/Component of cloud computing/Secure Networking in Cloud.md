# Building a Secure Cloud Network

## Summary

Cloud networking follows many of the same principles as networking in an on-premises Data Center. The main difference is that cloud networks use **logical, software-defined networking components** instead of physical rack-mounted devices.

A secure cloud network is built by defining an IP address range, creating a **Virtual Private Cloud (VPC)**, dividing it into **subnets**, deploying resources, applying layered access controls, and configuring Internet, hybrid-cloud, or dedicated connectivity.

## Physical versus cloud networking

| On-premises networking | Cloud equivalent |
|---|---|
| Physical Network Interface Controller (**NIC**) | Virtual NIC (**vNIC**) |
| Physical network boundary | Defined IP address range |
| Physically separated network segment | VPC or subnet |
| Rack-mounted networking device | Networking function delivered as a service |
| Physical firewall rules | ACLs and security groups |
| Physical connection to another site | VPN or dedicated cloud connection |

## Cloud network hierarchy

```text
Cloud network IP address range
└── Virtual Private Cloud (VPC)
    └── Subnet protected by an ACL
        ├── VM or Virtual Server Instance (VSI)
        ├── Storage
        ├── Network connectivity
        ├── Load balancer
        └── Instance protected by a security group
```

## Virtual Private Cloud

A **Virtual Private Cloud (VPC)** is a logically isolated portion of a provider’s cloud network. It creates a private network boundary while retaining the scalability of public-cloud infrastructure.

A VPC can be divided into smaller network segments called **subnets**.

## Subnets

Subnets organize cloud resources into smaller logical segments. Resources deployed into subnets may include:

- Virtual machines
- Virtual Server Instances (**VSIs**)
- Storage
- Network connectivity
- Load balancers

Subnets allow enterprise applications to use the same multi-tier structure commonly used in on-premises environments.

## Layered network security

### Access Control Lists

An **Access Control List (ACL)** protects a subnet and functions as a **subnet-level firewall**.

It controls traffic entering or leaving the subnet.

### Security groups

A **security group** protects individual resources, such as VSIs, at the **instance level**.

| Control | Protection scope |
|---|---|
| **ACL** | Entire subnet |
| **Security group** | Individual instance or group of instances |

Using both provides layered security: the ACL protects the broader subnet, while security groups apply more specific rules to individual workloads.

## Three-tier application example

A three-tier application may contain:

1. Web-access VSIs
2. Application-tier VSIs
3. Backend database VSIs

Each tier is assigned a separate security group:

| Application tier | Security group |
|---|---|
| Web-facing VSIs | Web security group |
| Application VSIs | Application security group |
| Database VSIs | Database security group |

This separation allows each tier to receive security rules appropriate to its function. The web tier requires Internet connectivity, while application and database access can remain more restricted.

## Connectivity options

### Public gateway

A **public gateway** provides Internet connectivity for the web-facing portion of the application.

Its exact behavior and configuration depend on the cloud provider.

### Virtual Private Network

A **Virtual Private Network (VPN)** securely connects an organization’s on-premises resources to its cloud network. This supports hybrid-cloud environments without exposing internal communication as ordinary public application traffic.

### Dedicated high-speed connection

Enterprises may use dedicated high-speed connections between their on-premises and cloud environments. The lecture describes these connections as more secure and efficient than public connectivity for some hybrid-cloud workloads.

**IBM Cloud Direct Link** is given as a provider-specific example. Product capabilities and availability may change over time.

### Load balancer

As the number of subnets and workloads grows, **load balancers** help applications remain available and responsive by managing traffic and bandwidth across resources.

## Cloud-network construction sequence

1. Define the network’s IP address range.
2. Create a VPC as the logical network boundary.
3. Divide the VPC into subnets.
4. Protect each subnet with an ACL.
5. Deploy VSIs, storage, networking, and load balancers.
6. Assign security groups to individual application tiers.
7. Add a public gateway where Internet access is required.
8. Connect on-premises resources through a VPN or dedicated connection.
9. Use load balancing to support application availability and responsiveness.

## Key takeaway

A secure cloud network recreates familiar Data Center networking functions through logical services. The VPC establishes the private network boundary, subnets organize resources, ACLs provide subnet-level protection, and security groups protect individual instances. Public gateways, VPNs, dedicated connections, and load balancers then provide the required external connectivity and application availability.
