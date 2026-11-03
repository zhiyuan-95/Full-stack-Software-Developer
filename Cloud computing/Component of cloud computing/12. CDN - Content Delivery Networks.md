# Content Delivery Networks (CDNs)

## Summary

A **content delivery network (CDN)** is a distributed network of servers that delivers cached copies of website content from locations near users. By shortening the distance content travels, a CDN can make websites faster and reduce demand on the website’s main server.

**Presenter:** Ryan Sumner, Chief Network Architect with IBM Cloud.

## Why a CDN is useful

When a website runs from one location, distant users generally experience greater **latency**—the delay involved in communication.

The lecture uses a website hosted in **Dallas** with **30 users** around the world:

| User location | Users | Illustrative round-trip time to Dallas |
|---|---:|---:|
| Sydney | 5 | 170 milliseconds |
| London | 5 | 100 milliseconds |
| New York City | 10 | 40 milliseconds |
| Los Angeles | 10 | 30 milliseconds |

For Sydney users, the example describes a journey of approximately **8,600 miles each way**.

These figures illustrate the effect of distance; they are not guaranteed timings or complete page-load times.

## How a CDN works

The website’s main server is the **origin server**. A CDN places distributed endpoints, commonly called **edge servers**, closer to users.

1. Website content is retrieved from the origin and cached at CDN locations.
2. Users request content through the CDN.
3. When a nearby endpoint has a usable cached copy, it serves that content without requiring another trip to the origin.

In the Dallas example, London users can receive cached content from a nearby CDN endpoint instead of retrieving it from Dallas each time.

**Caching qualification:** The lecture simplifies distribution. A single origin request does not necessarily populate every CDN location; content may be fetched and cached as needed.

## Main benefits

- **Faster delivery:** Nearby cached content reduces communication delay.
- **Lower origin load:** Cached responses reduce the requests and traffic reaching Dallas.
- **Reduced capacity needs:** The origin may need less capacity to serve the same audience.
- **Potentially better availability:** Reduced demand on the origin can help it remain responsive.

## Limits and security considerations

The benefits depend on whether the requested content can be cached and whether a usable copy is available. Requests that still require the origin retain some dependence on its performance and availability.

The presenter describes reduced direct interaction with the origin as **“security through obscurity.”** Reduced exposure may help, but hiding the origin is not a security guarantee or a replacement for security controls.

## Takeaway

A CDN brings cached website content closer to users. This improves delivery speed while reducing traffic and processing demand at the origin server.
