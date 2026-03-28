---
globs:
  ["**/*.md", "**/docs/**", "**/README*", "**/CHANGELOG*", "**/CONTRIBUTING*"]
---

# Documentation Standards (Write the Docs)

## Core principle

Documentation exists for the reader, not the writer. Every decision should reduce the reader's effort.

## Structure and navigation

- Write like a newspaper, not a novel — put the most important information first
- Use descriptive, concise headings so readers can scan and skip
- Do not nest content more than three levels deep; deep hierarchies disorient readers
- Separate tutorials/examples from reference material — they serve different reading modes

## Voice and language

- Use plain language; prefer short sentences and common words
- Be consistent with terminology throughout — pick a word for a concept and stick to it
- Use active voice and direct address ("run the command", not "the command should be run")
- Avoid idioms that may confuse non-native English speakers

## Content

- State what the project does and why in the opening — do not bury the purpose
- Include examples for the most common use cases; not for everything — too many examples hurt scannability
- Incorrect documentation is worse than missing documentation; do not document things you are not sure about
- Prefer version-agnostic language where possible to reduce future maintenance burden
- Some repetition is acceptable (ARID, not DRY) — a reader consulting one section should not have to read another section to understand it

## Maintenance

- Update documentation alongside code changes, not after
- Avoid FAQs as a catch-all; they become outdated quickly and are hard to navigate
- Treat documentation with the same discipline as code: review it, keep it accurate, delete what is stale
