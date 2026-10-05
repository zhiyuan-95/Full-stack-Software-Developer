#### Testing Levels

There are four major testing levels. Each level happens at a different point in the SDLC and helps reduce duplicated testing effort.

| Testing Level | Main Purpose | Typical Timing / Ownership |
|---|---|---|
| **Unit Testing** | Verifies a small, specific section of code, usually a function or module. | Done by developers during development. |
| **Integration Testing** | Checks whether two or more modules work correctly when combined. | Done after individual units have passed unit testing. |
| **System Testing** | Validates the complete, integrated system against specified requirements. | Done after integration testing, usually in a staging environment similar to production. |
| **Acceptance Testing** | Confirms the system satisfies user needs, business processes, and stakeholder requirements. | Usually done by customers or stakeholders. |

---

#### Unit Testing

Unit testing checks small, independent parts of code before they are combined with the rest of the system.

Its goals are to:

- Find construction errors early.
- Improve software quality.
- Make the development process more efficient.
- Reduce problems before integration begins.

---

#### Integration Testing

Integration testing looks for problems that appear when separate modules interact.

It can reveal issues such as:

- Communication problems between modules.
- Problems connecting to databases or external hardware.
- Different programming logic between modules.
- Requirement changes that were not fully tested at the unit level.
- Poor exception handling when modules are combined.

---

#### System Testing

System testing evaluates the full integrated system as a completed software product.

It includes both:

- **Functional testing**, to confirm the system does what it should do.
- **Non-functional testing**, to confirm the system performs well under expected conditions.

System testing is commonly performed in a **staging environment** that closely resembles the production environment.

---

#### Acceptance Testing

Acceptance testing is formal testing based on user needs, business requirements, and stakeholder expectations.

It determines whether the software is ready from the perspective of the people who will use, buy, approve, or depend on it.

---

#### Key Takeaways

- Software testing checks whether software meets requirements and helps identify errors.
- Test cases define the steps, inputs, data, and expected outputs for a test.
- Functional testing checks whether the software's features work correctly.
- Non-functional testing checks quality attributes such as performance, security, scalability, and availability.
- Regression testing checks that recent changes did not break existing functionality.
- Unit testing verifies small pieces of code.
- Integration testing checks whether combined modules work together correctly.
- System testing validates the complete integrated product.
- Acceptance testing confirms that the software meets user, customer, and stakeholder needs.
