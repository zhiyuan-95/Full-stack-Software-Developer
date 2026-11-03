# Serverless Computing

## Summary

**Serverless computing** shifts infrastructure management—including provisioning, scaling, scheduling, and patching—to a cloud provider. Developers can focus on application code and business logic.

**Serverless does not mean there are no servers.** The provider manages the underlying physical or virtual servers.

The lecture mainly describes **Function as a Service (FaaS)**, where individual functions execute in response to requests or events.

## Key characteristics

| Characteristic | Meaning |
|---|---|
| **Managed infrastructure** | Developers do not directly provision or operate the underlying servers and application runtime. |
| **On-demand execution** | Requests or events trigger functions when work needs to be performed. |
| **Automatic scaling** | The platform adjusts execution capacity as demand changes. |
| **Usage-based pricing** | Charges generally follow execution and resource consumption, reducing idle compute costs. Exact billing depends on the service and plan. |
| **Stateless functions** | Functions should not depend on information remaining in their execution environment between requests. Persistent state belongs in external storage. |

**Execution qualification:** Each request can trigger a new function invocation, but this does **not** necessarily create a new container. Platforms may reuse existing execution environments.

## Example: Translating uploaded files

A serverless application sits between a website’s front end and cloud storage:

1. A user uploads a text file through the website.
2. The upload or request triggers serverless functions.
3. The functions produce translations in different languages.
4. The translated files are saved in cloud storage.
5. The application returns links to those files.

The provider allocates execution resources as needed, allowing the developer to concentrate on the translation workflow.

## Workloads that fit serverless

Serverless is particularly suitable for:

- **Short-running, stateless functions**, lasting seconds or minutes.
- **Variable or seasonal demand**, with substantial differences between peak and off-peak activity.
- **Workloads with significant idle time**, where continuously running infrastructure may be wasteful.
- **Event-driven or asynchronous processing**.
- **Microservices** whose responsibilities can be implemented as independent functions.

| Use case | Examples from the lecture |
|---|---|
| **Data processing** | Enrichment, transformation, validation, and cleansing |
| **File and media processing** | PDF processing, audio normalization, thumbnail generation, and video transcoding |
| **Parallel processing** | Data search, data processing, and genome processing |
| **Stream ingestion** | Business events, IoT sensor readings, logs, and financial market data |
| **Application backends** | Microservices and mobile backends |

These are candidate workloads; suitability still depends on execution time, resource needs, latency requirements, and cost.

## Challenges and tradeoffs

### Long-running processes

Traditional server environments may be simpler and more cost-effective for prolonged processing. Serverless suitability should be evaluated against the application’s actual workload.

### Vendor lock-in

Applications can become dependent on provider-specific capabilities, including:

- Authentication
- Scaling
- Monitoring
- Configuration management

These dependencies can make migration to another platform harder.

### Cold starts

When execution capacity has scaled down to zero, the platform may need to initialize an environment before handling a request. This startup delay is called a **cold start**.

The delay may be acceptable for background processing but problematic for applications with strict latency requirements, such as some financial applications.

## Services named in the lecture

- **IBM Cloud Functions**, based on **Apache OpenWhisk**
- **AWS Lambda**
- **Microsoft Azure Functions**

These are the lecture’s examples, rather than a verified current service catalog.

## Takeaway

Serverless combines managed infrastructure, on-demand execution, and automatic scaling. It works especially well for short, stateless, event-driven tasks, while long-running workloads, provider dependencies, and cold-start latency require closer evaluation.
