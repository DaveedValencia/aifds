# AIFDS (AI Feed Discovery Standard)

> The open standard for AI-ready structured data.

AIFDS defines openly governed schemas, examples, and validation rules so AI systems can accurately understand organizations. The project extends schema.org for the AI era, publishes everything in public, and avoids shipping proprietary services.

---

## Project Snapshot (Q1 2025)

- ✅ Ecommerce homepage profile published (`schemas/ecommerce/homepage.profile.json`)
- ✅ Schema hub with inline viewers live at `/docs/schemas/`
- ✅ Homepage refreshed to reflect open-standard positioning and upcoming validator
- 🚧 Validator app in development (Bad / Average / Good / Excellent grading)
- 🔜 Collections and product profiles (ecommerce), service-business profiles next

---

## Current Scope

| Surface | Path | Purpose | Status |
| --- | --- | --- | --- |
| Homepage | `index.html` | Public narrative, mission, roadmap, CTAs | Updated Jan 2025 |
| Schema hub | `docs/schemas/` | Profile directory + inline JSON schema/example viewers | Live |
| Ecommerce homepage schema | `schemas/ecommerce/homepage.profile.json` | Draft 2020-12 JSON Schema extending Organization / WebSite / WebPage | Draft (community feedback welcome) |
| Example payload | `examples/ecommerce/homepage.min.json` | Minimal passing payload for the homepage profile | Draft |
| Specification | `docs/spec/v1/index.html` | Governance model, scoring rubric, schema requirements | Draft |
| Conformance rules | `spec/conformance.md` | Critical/Strong/Info tables per profile | Draft |
| Versioning policy | `spec/versioning.md` | SemVer guidance + deprecation policy | Draft |

---

## Active Focus

1. **Validate the ecommerce homepage profile**  
   - Gather feedback from implementers.  
   - Finalise rule severity in `spec/conformance.md`.

2. **Ship validator MVP**  
   - UI accepts a URL, runs schema validation, displays Bad / Average / Good / Excellent results with rule explanations.
   - Output should link back to relevant sections in spec + schema hub.

3. **Draft collections & product profiles**  
   - Mirror the `/schemas/ecommerce` structure.  
   - Publish minimal passing examples under `/examples/ecommerce`.

4. **Plan service-business profile**  
   - Capture requirements and evidence needs once ecommerce set is stable.

---

## How to Contribute Today

- Review the homepage profile schema and open issues with feedback.
- Add example payloads or validator test cases via PRs to `/examples`.
- Keep documentation aligned: updates must touch `index.html`, `README.md`, and `docs/spec/v1/index.html` together.
- Record significant decisions in `prd.md` Section 5 (Outstanding & Upcoming Work).

---

## Resources

- Production site: [https://aifds.org/](https://aifds.org/)
- Spec draft: [docs/spec/v1/](docs/spec/v1/)
- Schema hub: [docs/schemas/](docs/schemas/)
- Roadmap: [docs/roadmap.md](docs/roadmap.md)
- Conformance: [spec/conformance.md](spec/conformance.md)
- Versioning: [spec/versioning.md](spec/versioning.md)

---

## License

MIT License © 2025 Minnesota.ai
