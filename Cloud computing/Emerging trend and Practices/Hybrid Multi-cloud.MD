# Hybrid Cloud and Multi-Cloud: Use Cases

## Summary

**Hybrid cloud** connects private and public cloud environments, while **multi-cloud** uses services from multiple providers. A **hybrid multi-cloud** approach combines these strategies to support scaling, distribute application components, modernize existing systems, and access specialized services.

## Key concepts

| Concept | Meaning | Example |
|---|---|---|
| **Hybrid cloud** | Connects an organization’s private cloud, such as an on-premises environment, with a third-party public cloud. | An on-premises reservation system connects to a public-cloud mobile backend. |
| **Multi-cloud** | Uses services from multiple providers across infrastructure, platform, or software services. | Email from one provider, CRM from another, and infrastructure from a third. |
| **Hybrid multi-cloud** | Combines connected private/public environments with services from multiple providers. | An organization distributes workloads across its own infrastructure and several cloud providers. |

The distinction: **hybrid describes the environments being connected; multi-cloud describes the use of multiple providers.**

## 1. Cloud scaling: Handle temporary demand

A **flower delivery service** has enough on-premises infrastructure for its normal customer load, but demand rises around holidays.

Expanding its own infrastructure to accommodate every peak would require upfront investment and ongoing upkeep. Instead, it can:

- Add cloud resources when demand increases.
- Automatically deprovision those resources when demand falls.
- Keep its existing infrastructure for normal demand.

**Key point:** Elastic scaling is a general cloud capability; it is not exclusive to hybrid or multi-cloud environments.

## 2. Composite cloud: Distribute application components

A **composite cloud application** spreads its components across multiple cloud environments.

The lecture’s flower delivery service operates in Europe and has three components:

| Component | Placement in the example |
|---|---|
| Web UI | Moves to a North American cloud data center |
| Billing APIs | Move to a North American cloud data center |
| Rewards framework | Remains on premises in Europe |

North American demand increases around **Veterans Day and Thanksgiving**. Moving selected components allows the business to scale those capabilities for American customers while scaling its European components independently.

**Key point:** An organization can distribute selected parts of an application without moving the entire system.

## 3. Modernization: Add experiences to existing systems

An airline keeps its existing **reservation system on premises** while introducing a mobile application backed by a public-cloud service.

The interaction is:

**Mobile app → public-cloud mobile backend → on-premises reservation system**

This creates new customer experiences while retaining the existing reservation capabilities.

The airline can then add a **flight recommendation and rebooking feature**. When a flight is delayed, customers can receive alternatives and book another flight through their phones.

**Expected benefits:** Easier rebooking, improved customer satisfaction, and better business outcomes.

## 4. Data and AI: Use historical information

An airline may hold decades of historical records about **unplanned maintenance**.

Connecting that legacy data to cloud-based **machine learning, AI, and predictive analytics** can help identify patterns and anticipate maintenance needs.

**Expected benefits:** Earlier insight into potential problems, fewer disruptions, and more efficient operations. Predictions do not guarantee that every failure will be detected.

## Additional motivation: Reduce vendor lock-in

Using multiple providers can give an organization more flexibility to choose services and move workloads as needs change.

However, using multiple clouds does not automatically make workloads portable; migration still depends on how applications and their dependencies are designed.

## Qualification on lecture statistics

The lecture cites approximately:

- **80% of enterprise applications** as still running on premises.
- **30% of airline delay time** as associated with unplanned maintenance.

The transcript provides no source or date for these figures. Treat them as lecture claims rather than verified current industry benchmarks.

## Takeaway

Hybrid multi-cloud lets organizations retain existing systems while adding cloud capabilities where useful. Its value comes from placing application components, capacity, and data services where they best support business needs.
