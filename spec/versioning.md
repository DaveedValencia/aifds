# AIFDS Schema Versioning

The AI Feed Discovery Standard follows semantic versioning for schema profiles and documentation. Use this guide to understand update cadence and deprecation expectations.

## Version Numbers

`MAJOR.MINOR.PATCH`

- **MAJOR** – Backwards-incompatible changes. Requires RFC review and migration guidance. Example: removing a required property or redefining rule severity.
- **MINOR** – Backwards-compatible feature updates. Adds optional properties, new advisory rules, or additional examples without breaking existing payloads.
- **PATCH** – Clarifications or fixes that do not change schema validation outcome (typo fixes, description tweaks, documentation improvements).

## Deprecation Policy

1. When a rule or property is scheduled for removal, mark it as deprecated in the schema description and conformance tables.
2. Provide at least one MINOR release cycle notice before dropping support in a MAJOR update.
3. Maintain changelog entries summarizing breaking changes, upgrade steps, and affected profiles.

## Profile Lifecycle

1. **Draft** – Experimental, subject to change (`homepage.profile.json` is currently draft). Suitable for pilots only.
2. **Candidate** – Validation complete, awaiting production validation. Breaking changes require stakeholder approval.
3. **Stable** – Ready for production use. Only MINOR/PATCH updates expected.

Repo tags mirror schema versions. Consumers should pin to a specific tag or schema URL version when integrating automated validation.
