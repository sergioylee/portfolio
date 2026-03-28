---
globs: ["**/*.cs", "**/*.csproj", "**/*.sln", "**/appsettings*.json"]
---

# .NET / C# Development Rules

## Preamble

.NET is an opinionated ecosystem with strong idioms around dependency injection, abstraction, and framework conventions. Some of these idioms trade a degree of performance or simplicity for productivity and testability — that tradeoff is acceptable in .NET projects. However, the global development preferences still apply: do not add abstractions speculatively, do not introduce patterns for their own sake, and prefer the simplest thing that actually works. When there is a genuine choice, the global rules take precedence.

## Language

- Use C# 12 features where they improve clarity — do not use them just because they are available
- Favor explicit typing; only use `var` when the type is immediately obvious from the right-hand side
- Use `is null` and `is not null` instead of `== null` and `!= null`
- Prefer `record` types for immutable data structures
- Use primary constructors for dependency injection in services, use cases, and handlers
- Make types `internal` and `sealed` by default; only widen access when there is a concrete reason

## Design

- Apply SOLID principles where they reduce real complexity — not as a checklist; avoid interface-per-class unless multiple implementations exist or testability requires it
- Use dependency injection for services that have external dependencies (I/O, infrastructure); do not inject types that have no reason to be swapped
- Use `IOptions<T>` for strongly-typed configuration
- Prefer `Guid` for identifiers unless the project already uses another convention
- Use middleware for cross-cutting concerns (logging, error handling, auth)
- Use background services for long-running or scheduled tasks

## APIs

- Prefer controller-based endpoints as the default
- Use minimal APIs for simple endpoints when explicitly requested or when a full controller would be disproportionate
- Implement API versioning from the start
- Document APIs with Swagger/OpenAPI
- Implement proper model validation; do not let invalid input reach business logic
- Enforce CORS policies explicitly; do not leave them open by default
- Use HTTPS; do not allow unencrypted communication in production configuration

## Async

- Use `async`/`await` for all I/O-bound operations
- Do not use `async void` except in event handlers
- Do not block async code with `.Result` or `.Wait()`

## Data access

- Use Entity Framework Core for database operations; acknowledge it hides SQL cost — write explicit queries when performance matters
- Do not load more data than needed; be deliberate about includes and projections

## Error handling and observability

- Implement structured logging throughout; include enough context to diagnose issues without sensitive data
- Handle exceptions at the appropriate layer; do not swallow exceptions silently
- Implement health checks for the application and its dependencies
- Use environment-specific configuration files (`appsettings.Development.json`, etc.)

## Security

- Implement authentication and authorization properly; do not leave endpoints unprotected by default
- Validate and sanitize all input
- Do not hardcode secrets; use environment variables or a secrets manager

## Testing

- Write unit tests for business logic
- Write integration tests for API endpoints
- Tests should be readable and test behavior, not implementation details
