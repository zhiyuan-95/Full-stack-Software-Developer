# Microservices Architecture

## Summary

**Microservices architecture** builds a single application from smaller, **loosely coupled, independently deployable services**. Each service handles a specific function, allowing teams to develop, update, and scale parts of an application independently.

Examples include **Search, Recommendations, Customer Ratings, and Product Catalogs**.

## How microservices work

- **Separate responsibilities:** Each service focuses on a particular application function.
- **Independent development:** Small teams can work on different services in parallel.
- **Technology flexibility:** Services can use different technology stacks and runtime environments.
- **Independent scaling:** A heavily used service can receive additional resources without scaling the entire application.
- **Communication:** Services interact through **APIs, event streaming, and message brokers**.

Services commonly run in separate **containers**, which package their code and runtime dependencies for deployment.

## Monolithic applications versus microservices

| Aspect | Monolithic application | Microservices application |
|---|---|---|
| Structure | Functions belong to one larger application and deployment unit. | Functions are divided into separate services. |
| Updates | Changes generally require deploying the application together. | Individual services can be deployed independently. |
| Scaling | Typically scales the application as a whole. | Can scale selected services. |
| Technology | Commonly uses a shared stack. | Different services can use different stacks. |

The lecture also emphasizes **reusing existing code and cloud-platform services** to accelerate development. Code reuse is useful in either architecture.

## Example: Dream Game streaming service

**Ron**, a soccer fan, missed his team’s crucial semifinal match. He wants to find the recording quickly, but Dream Game initially shows content popular across all users.

The application uses three microservices:

| Microservice | Responsibility |
|---|---|
| **Content Catalog** | Organizes millions of games using descriptive **metadata**. |
| **Search Function** | Matches Ron’s search against the catalog. |
| **Recommendations** | Selects content to display on his homepage. |

### Finding and communicating with services

**Service discovery** helps services locate one another. Once located, they communicate through APIs.

For example, when Ron searches for his favorite team, the **Search** service requests relevant content from the **Content Catalog**.

### Updating recommendations independently

The Recommendations team adds an analytics algorithm that considers:

- Ron’s viewing history and preferences.
- Popular content among other users, including soccer fans.
- Viewing patterns associated with his geographical region and demographic.

The team reuses existing code and deploys the feature **within days in the example**, while the other services continue operating.

Ron then sees a **personalized playlist** that improves as the system learns more about his interests, helping him find his team’s latest game immediately.

## Benefits and qualifications

Microservices can support faster parallel development, targeted updates, and more efficient scaling.

However, the lecture’s description of containers as **“plug-and-play”** is simplified. Replacing a service without disruption depends on compatible interfaces and properly managed dependencies. Containers support deployment; they do not automatically guarantee service independence or uninterrupted operation.

Likewise, deployment within days is an outcome of the example, not a guaranteed timeline.

## Takeaway

Microservices divide an application into focused services that work together. Their main advantage is the ability to develop, deploy, and scale individual capabilities while coordinating communication between them.
