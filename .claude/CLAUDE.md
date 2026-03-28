# Global Development Preferences

## Philosophy

- The goal is working software that runs well, not adherence to any methodology or pattern
- Always optimize for total cost: readability, maintainability, and runtime performance together
- Code is a tool to solve problems — judge every decision by its real-world outcome, not its theoretical elegance

## Performance

- Care about what the hardware actually does; do not hide cost behind abstractions
- Prefer flat, dense data structures laid out for how they are actually accessed
- Avoid runtime indirection (virtual dispatch, excessive function pointers, deep call chains) unless there is a concrete reason for it
- Do not design one part of a system to tolerate another part being slow — that locks in the slowness permanently

## Simplicity and minimalism

- Prefer fewer dependencies; every dependency is a liability (build complexity, version conflicts, security surface)
- Do not add abstraction layers speculatively; only introduce them when the concrete need exists
- Prefer straightforward code over clever code — the next reader should not have to reconstruct your reasoning
- Avoid over-engineering: no premature generalization, no patterns applied for their own sake

## Consistency with the existing codebase

- Before writing new code, observe the patterns, naming conventions, and style already present
- Match the existing codebase — do not introduce a new convention when one already exists
- If two approaches are equally valid, always prefer the one already used in the project
- Consistency matters more than personal preference; a uniform codebase is easier to navigate and maintain

## Readability and maintenance

- Write code for the reader, not the writer
- Name things by what they are, not what design pattern they belong to
- Comments should explain _why_, not _what_ — the code shows what; the comment explains the intent or constraint
- Prefer explicit over implicit; hidden behavior is a maintenance trap

## Decision-making

- When there is a tradeoff, evaluate it against total cost: How readable is it? How fast does it run? How hard is it to change?
- Do not accept a 10x performance cost just to satisfy an organizational principle
- Do not sacrifice readability just to micro-optimize something that is not a bottleneck
- Measure before optimizing; intuition about bottlenecks is often wrong
