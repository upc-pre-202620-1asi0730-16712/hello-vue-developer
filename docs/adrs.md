# Architecture Decision Records (ADR)

This document records the significant architectural decisions made during the development of the Hello Vue Developer application.

## Status Signals
*   **Proposed**: Under consideration.
*   **Accepted**: Agreed upon and implemented.
*   **Superseded**: Replaced by a newer decision.
*   **Deprecated**: No longer recommended but still in the codebase.

---

## ADR 001: Bounded Context Architecture (DDD-lite)

*   **Status**: Accepted
*   **Date**: 2026-09-02

### Context
The application needs to be maintainable and scalable. A standard flat structure leads to tight coupling as the project grows.

### Decision
Adopt a Domain-Driven Design (DDD) inspired structure with clear Bounded Contexts.
*   `src/greetings`: Primary context for greeting logic.
*   `src/shared`: Infrastructure and common domain logic (e.g., Value Objects).

### Consequences
*   **Pros**: Improved separation of concerns, easier to test domain logic in isolation.
*   **Cons**: Slightly more boilerplate due to directory nesting.

---

## ADR 002: Vue 3.5 and Vite 8 Adoption

*   **Status**: Accepted
*   **Date**: 2026-09-02

### Context
To ensure security, performance, and access to the latest framework features.

### Decision
Update all core dependencies to their latest stable versions (Vue 3.5+, Vite 8+).

### Consequences
*   **Pros**: Access to reactive props destructuring, improved build speeds, and security patches.
*   **Cons**: Potential for breaking changes in minor/patch updates if not carefully managed.

---

## ADR 003: Use Semi-private Fields (`_`) over Native Private Fields (`#`)

*   **Status**: Accepted
*   **Date**: 2026-09-03

### Context
Native JavaScript private fields (`#`) are incompatible with Vue 3's Proxy-based reactivity. Accessing `#field` through a Proxy throws a `TypeError` because the Proxy is not the original instance.

### Decision
Use the `_` prefix convention for internal fields in domain entities and value objects instead of native `#` fields.

### Consequences
*   **Pros**: Full compatibility with Vue reactivity and templates.
*   **Cons**: Fields are technically accessible at runtime (though marked as internal by convention).

---

## ADR 004: Identity as a Value Object (`DeveloperId`)

*   **Status**: Accepted
*   **Date**: 2026-09-04

### Context
Using raw strings for IDs leads to "Primitive Obsession" and makes it harder to validate identity formats consistently.

### Decision
Encapsulate developer identity in a `DeveloperId` Value Object using UUID v7.

### Consequences
*   **Pros**: Centralized validation, improved type safety, and semantic clarity.
*   **Cons**: Small overhead of object instantiation.

---

## ADR 005: Mandatory Full Name Registration

*   **Status**: Accepted
*   **Date**: 2026-09-04

### Context
The business requirements specify that a developer must provide both first and last names to be considered "registered" for tracking and greeting purposes.

### Decision
Enforce the presence of both first and last names in the `PersonName` Value Object and the `Developer` entity registration logic.

### Consequences
*   **Pros**: Ensures high-quality data and consistent UI greetings.
*   **Cons**: Slightly higher barrier for user registration.

