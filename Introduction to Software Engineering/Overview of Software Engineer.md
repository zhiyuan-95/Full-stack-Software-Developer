# SDLC, Software Quality, and Requirements

## Summary

Software development commonly moves through six phases: planning, design, development, testing, deployment, and maintenance. High-quality software depends on clear requirements, thoughtful design, consistent coding practices, thorough testing, controlled releases, and useful documentation. Requirements provide the foundation by defining the problem, stakeholder expectations, system behavior, constraints, and quality standards.

## Core concepts

### Six phases of the SDLC

| Phase | Purpose | Main activities and outputs |
|---|---|---|
| Planning | Determine what should be built and why | Identify stakeholders; gather, analyze, prioritize, and document requirements; estimate costs and schedules; allocate resources; identify risks and compliance needs; create the SRS |
| Design | Decide how the solution will work | Define architecture, components, interfaces, databases, security, performance, and UI; produce the design document |
| Development | Build the software | Assign coding tasks; write code with appropriate languages, tools, and software stacks; follow organizational standards |
| Testing | Verify quality and requirements | Perform manual or automated testing; report, track, fix, and retest defects |
| Deployment | Release the application | Deploy first to a UAT environment when applicable; obtain customer approval; release to production |
| Maintenance | Support and improve the deployed product | Fix production bugs, address UI issues, gather feedback, and identify enhancements for future cycles |

The original SDLC followed a linear waterfall model. Modern approaches may introduce iteration so teams can respond to changing or clarified requirements.

### Prototypes

A prototype is a small-scale model or preliminary mock-up used to:

- Test basic design ideas.
- Gather stakeholder feedback.
- Clarify uncertain requirements.
- Demonstrate all or part of the proposed system.

Prototyping commonly occurs during planning or design, but it can happen during any phase when requirements need reconsideration.

## Building quality software

Six common software-engineering processes support quality:

1. **Requirements gathering:** Collect and document what the software must accomplish.
2. **Design:** Translate requirements into an implementable architecture.
3. **Coding for quality:** Produce maintainable, readable, testable, secure, consistent, and efficient code.
4. **Testing:** Verify that the software meets its requirements and identify defects or gaps.
5. **Releasing:** Distribute increasingly stable versions to appropriate audiences.
6. **Documenting:** Explain the system to both technical and nontechnical users.

Quality coding practices include following established standards and patterns, using linters to detect errors, and adding helpful code comments.

## Requirements-gathering process

Requirements gathering is a six-step process:

1. **Identify stakeholders:** Include representatives from every affected group, such as decision-makers, end users, administrators, engineering, marketing, sales, and customer support.
2. **Establish goals and objectives:**
   - Goals are broad, long-term outcomes.
   - Objectives are specific, actionable, and measurable steps toward those goals.
3. **Elicit requirements:** Gather information through interviews, surveys, and questionnaires.
4. **Document requirements:** Record them in language understood by stakeholders and the project team.
5. **Analyze and confirm requirements:** Check for consistency, clarity, completeness, and alignment with goals; then obtain stakeholder approval.
6. **Prioritize requirements:** Classify them using labels such as must-have, highly desired, and nice-to-have, preferably ranking items within each category.

Elicitation, documentation, and confirmation are usually iterative rather than one-time activities.

## Requirements documents

| Document | Scope | Typical contents |
|---|---|---|
| **URS — User Requirements Specification** | Business needs and end-user expectations | User stories or use cases identifying who the user is, what function is needed, and why it is valuable |
| **SRS — Software Requirements Specification** | Expectations and required behavior of the software | Purpose, audience, scope, constraints, assumptions, dependencies, functional requirements, external-interface requirements, system features, and nonfunctional requirements |
| **SysRS — System Requirements Specification** | Requirements for the entire system, including hardware and software | System capabilities, interfaces, user characteristics, policies, regulations, personnel, performance, security, hardware, and acceptance criteria |

The SRS is the most common document. User requirements are often incorporated into it. A SysRS is broader than an SRS, although the terms are sometimes used interchangeably.

### Four SRS requirement categories

- **Functional requirements:** What the software must do.
- **External-interface requirements:** How it interacts with users, hardware, or other software.
- **System features:** Required features that enable the system to function; these are a subset of functional requirements.
- **Nonfunctional requirements:** Performance, safety, security, quality, and similar operating standards.

Constraints limit design options, while assumptions describe expected conditions, such as the required operating system or hardware. Dependencies identify other software products upon which the system relies.

## Testing levels and types

### Testing levels

- **Unit testing:** Tests the smallest isolated code components, usually by developers.
- **Integration testing:** Tests components after they have been combined.
- **System testing:** Tests the completed product as a whole.
- **User acceptance testing:** Allows intended users to determine whether the product satisfies their requirements; it may also be called beta testing.

Testing types are broadly divided into functional, nonfunctional, and regression testing.

## Release stages

- **Alpha:** The first functioning version, released to selected stakeholders. It may be incomplete, contain errors, and undergo design changes.
- **Beta or limited release:** Released outside the development organization for testing under real conditions. It should satisfy all functional requirements, although outstanding defects may remain.
- **General availability:** The stable version released to all users after agreed-upon beta changes have been implemented and tested.

## Documentation

- **System documentation** serves engineers, developers, architects, and other technical users. Examples include README files, inline comments, architecture and design documents, verification information, and maintenance guides.
- **User documentation** helps nontechnical users operate the product. Examples include user guides, manuals, instructional videos, online help, and inline help.

## Key takeaway

Requirements connect every stage of development: they guide architecture and coding, provide the benchmark for testing and acceptance, and help teams decide what should be corrected or improved during maintenance.

These notes were structured using the [Notify skill](C:/Users/johnk/.codex/skills/notify/SKILL.md), which emphasizes concise lecture summaries, preserved terminology, and scannable topic groupings.
