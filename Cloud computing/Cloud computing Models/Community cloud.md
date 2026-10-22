# Community Cloud Deployment Model

## Summary

A **community cloud** is cloud infrastructure reserved for a specific group of organizations that share requirements involving areas such as:

- Mission
- Security
- Organizational policy
- Regulatory compliance

Under **NIST Special Publication 800-145**, a community cloud may be owned, managed, and operated by one or more community members, a third party, or a combination of both. It may also exist on or off premises.

Unlike a private cloud serving one organization, a community cloud serves multiple organizations with shared concerns.

## Community cloud compared with private cloud

| Area | Private cloud | Community cloud |
|---|---|---|
| Authorized users | One organization with multiple internal consumers | A specific group of organizations |
| Shared concern | One organization’s requirements | Common mission, security, policy, or compliance requirements |
| Ownership and management | Organization, third party, or both | One or more community members, third party, or both |
| Location | On or off premises | On or off premises |
| Resource access | Exclusive to one organization | Exclusive to the defined community |

## Why organizations use community clouds

### Common security controls

Community members can operate under the same security requirements and controls.

### Attribute-based access restrictions

Access may be limited according to attributes such as:

- Authorization
- Citizenship
- Work location
- Personnel status

### Data localization

A community cloud can support requirements that data remain in specified geographic locations.

### Data sovereignty

The placement and handling of data can be aligned with the laws and regulatory requirements of the applicable jurisdiction.

### Defined security perimeter

The environment establishes a boundary around the community’s resources, users, and security policies.

## Traditional community-cloud architecture

Legacy community clouds commonly establish their security perimeter through physical separation from other cloud environments.

Typical characteristics include:

- Separate data centers
- Dedicated infrastructure
- Dedicated storage devices
- A single community-wide security enclave
- Personnel located at dedicated facilities
- Common controls applied across the shared infrastructure

The source argues that strict physical separation can make it difficult to satisfy increasingly advanced requirements for:

- Security
- Manageability
- Compliance
- Rapid access to new cloud services

## Software-defined community cloud

A **software-defined community cloud** uses logical isolation, policy controls, access-management systems, and audited configuration changes instead of depending exclusively on dedicated physical infrastructure.

The source uses Google Cloud’s **Assured Workloads** approach as its principal example.

This approach can:

- Define communities around shared projects and requirements
- Apply common security and compliance policies
- Separate community projects from unrelated projects
- Restrict support access according to required personnel attributes
- Enforce data-location requirements through software
- Change community boundaries through controlled and audited configuration

## Traditional versus software-defined implementation

| Characteristic | Traditional community cloud | Software-defined community cloud |
|---|---|---|
| **Infrastructure exclusivity** | Separate data centers and infrastructure | Logically isolated infrastructure primitives assigned to individual projects |
| **Common security controls** | Controls applied across dedicated community infrastructure | Assured Workloads controls scoped to the community |
| **Support-personnel requirements** | Personnel physically located at dedicated facilities | Access-management controls restrict support according to personhood, citizenship, work location, and other attributes |
| **Data localization** | Community-dedicated storage devices | Location requirements enforced through software |
| **Security perimeter** | The entire community forms one enclave | Each project forms a separate enclave |
| **Policy changes** | Often tied to dedicated infrastructure and manual processes | Boundaries and capabilities modified through policy-controlled, audited configuration |

## Google Cloud project model

The source defines a **Google Cloud Platform (GCP) project** as a unique logical grouping of infrastructure primitives.

An **infrastructure primitive** is an individual unit of cloud capacity, such as:

- A virtual machine (VM)
- A persistent disk (PD)
- A storage bucket
- Another atomic cloud resource

Projects are described as global resources that can contain infrastructure primitives assigned from different regions or zones.

## Project isolation

Each GCP project is logically separated from other customer projects.

The source states that lower-level resources—including hypervisors and blocks within the distributed block-storage system underlying Google Cloud Storage—are isolated through resource abstractions that enforce separation:

- Logically
- Cryptographically

When infrastructure primitives are assigned to a project, they are scoped exclusively to that project. The source describes this arrangement as creating a private-cloud-like **enclave** for each project.

## From project enclaves to community cloud

According to the source, a software-defined community cloud is created by adding common **Assured Workloads** constraints to individual project enclaves.

```text
Isolated project enclaves
          +
Shared data-residency requirements
          +
Support-personnel restrictions
          +
Common security and compliance controls
          =
Software-defined community cloud
```

The individual projects remain isolated, while shared policies define and govern the broader community.

## Benefits presented in the source

### Security and compliance

Policy-based controls help organizations apply common security, personnel, data-residency, and compliance requirements across the community.

### Faster access to technology

A software-defined model can give community members faster access to:

- New hardware
- New cloud services
- Improvements to existing services

### Faster onboarding

New cloud technologies can be introduced without waiting for separate dedicated physical infrastructure to be installed.

### Greater efficiency

Community members can benefit from a larger shared infrastructure pool while retaining logical isolation and policy controls.

### Availability and performance

The scale of the underlying infrastructure may improve service availability and performance.

### Faster security improvements

Security enhancements can be deployed through software and extended across the community more quickly.

## Source qualification

The comparison and benefit claims are presented from a Google Cloud–specific perspective. The transcript does not establish that every software-defined community cloud uses GCP projects or Assured Workloads, and the current status of the named services has not been independently verified.

## Key takeaway

A community cloud serves multiple organizations that share mission, security, policy, or compliance requirements.

Traditional implementations rely heavily on dedicated facilities and physical separation. Software-defined implementations instead use logical isolation, cryptographic controls, access restrictions, audited policies, and software-enforced data residency.

In the Google Cloud example, isolated project enclaves become a community cloud when they are governed by shared Assured Workloads constraints for security, compliance, personnel access, and data location.
