# AIFDS (AI Feed Discovery Standard)

> The open standard for AI-ready structured data.

AIFDS is the open framework that defines how to make business and product data interpretable, verifiable, and trustworthy for AI systems. It is not a SaaS platform, a crawler, or a one-off schema.org checker—it is the governance layer for structured data integrity across the open web.

---

## Mission

Make the web machine-interpretable, trustworthy, and contextually complete so AI systems can understand and recommend businesses accurately. AIFDS delivers openly defined rules, transparent scoring, and measurable improvements that align technical accuracy with business truth.

---

## Why AIFDS Matters

- **The problem:** LLMs and AI search experiences rely on structured signals, yet most websites ship inconsistent, fragmented, or contradictory schema.org data. AI systems are left to guess, which produces outdated facts, hallucinated context, and missed visibility.
- **The gap:** Existing validators check syntax, not semantic integrity. They rarely assess whether structured data reflects reality.
- **The impact:** AIFDS creates a cleaner, higher-trust data layer. Businesses gain accurate representation, developers get deterministic feedback, and AI systems interpret the right context the first time.

---

## What AIFDS Does

- **Establishes standards:** Extends schema.org with a consistent rule set covering identity, product/service details, policies, navigation, and freshness. Each rule is designed for clarity, consistency, and trust.
- **Measures data quality:** Produces graded scores (Bad → Excellent) across Identity & Trust, Structured Data Completeness, Navigation/Breadcrumbs, and Freshness/Evidence. Each dimension includes rubrics so teams know exactly how to improve.
- **Fixes messy sites:** Detects duplicate or conflicting JSON-LD, flags missing schema elements, suggests canonical corrections, and points to evidence requirements. Reports ship in both human-readable and machine-readable formats.
- **Enables AI visibility:** Ensures AI tooling retrieves the right brand context, reducing hallucinations and unlocking accurate recommendations in AI-driven discovery.

---

## Quality Scorecard

| Dimension | Focus | Outcome |
| --- | --- | --- |
| Identity & Trust | Canonical organization, contact, and ownership signals | Verified brand authority |
| Structured Data Completeness | Required schema fields and consistency | Machine-ready business facts |
| Navigation & Breadcrumbs | Canonical hierarchy, discoverable paths | Interpretable site structure |
| Freshness & Evidence | Timestamps, update trails, corroborating links | Current, verifiable data |

Scores range from **Bad** to **Excellent**, guiding remediation efforts rather than issuing pass/fail verdicts.

---

## Schema Drafts

- **Schema Hub ([docs/schemas/](docs/schemas/))** — Human-readable index for every profile plus inline JSON viewers.
- **Ecommerce Homepage Schema ([schemas/ecommerce/homepage.profile.json](schemas/ecommerce/homepage.profile.json))** — Draft 2020-12 schema for Organization/LocalBusiness, WebSite, and WebPage nodes on the root URL.
- **Ecommerce Homepage Example ([examples/ecommerce/homepage.min.json](examples/ecommerce/homepage.min.json))** — Minimal JSON-LD payload that passes the homepage profile.

---

## Canonical About

AIFDS (AI Feed Discovery Standard) is an open standard for structured data governance. It defines how to validate and repair schema.org so that websites are accurately interpreted by search engines and large language models. AIFDS bridges the gap between SEO structure and AI reasoning—providing a shared language for technical accuracy, business context, and machine trust.

---

## Message Hierarchy

- **Tagline:** The open standard for AI-ready structured data.
- **Promise:** Validate, fix, and standardize schema.org data so AI systems can trust it.
- **Impact:** When AI understands you, customers can find you.

---

## Getting Involved

- **Explore the spec:** Review the published guidance in `docs/` and the schema hub in `docs/schemas/`.
- **Pilot the standard:** Run AIFDS validation against live or staging sites to surface integrity gaps.
- **Help refine the rules:** Share feedback, raise issues, or propose extensions that improve clarity and coverage.

AIFDS is open by design—the standard evolves with contributions from businesses, developers, and the AI ecosystem.

---

## License

MIT License © 2025 Minnesota.ai
