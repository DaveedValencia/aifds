# AIFDS Product Requirements Dossier (PRD)

## 1. Purpose
- Give any contributor or agent immediate context on the AI Feed Discovery Standard (AIFDS) initiative.
- Track the living surface area (marketing site, spec, ancillary files) and the impact of changes.
- Provide a repeatable checklist for shipping updates so the site, documentation, and crawl signals stay in sync.

## 2. Mission & Narrative Anchors
- **Tagline:** The open standard for AI-ready structured data.
- **Promise:** Validate, fix, and standardize schema.org data so AI systems can trust it.
- **Impact:** When AI understands you, customers can find you.
- **Mission Statement:** Make the web machine-interpretable, trustworthy, and contextually complete so AI systems accurately understand and recommend businesses.
- Canonical “About” paragraph lives in `README.md` and `index.html` (stay aligned when editing).

## 3. Current Surface Inventory
| Surface | Path | Intent | Notes |
| --- | --- | --- | --- |
| Homepage | `index.html` | Public mission narrative, current focus, CTAs | Nav links: Mission, Spec, Schemas, Contact. Validator CTA disabled until launch. |
| Schema Hub | `docs/schemas/index.html` | Directory of profiles with inline JSON viewers | Fetches schema/example files; ensure CORS-safe URLs when deploying. |
| Ecommerce Profile Page | `docs/schemas/ecommerce/index.html` | Detailed homepage profile overview and copyable JSON | Auto-loads `homepage.profile.json` + `homepage.min.json`. |
| Spec Draft | `docs/spec/v1/index.html` | Governance model, scoring rubric, schema requirements | References schema hub; keep rule changes in sync with `spec/conformance.md`. |
| README | `README.md` | Repo summary, project status, contribution guide | Updated with project snapshot and active focus list. |
| Sitemap | `sitemap.xml` | Search inclusion for public pages and assets | Includes schema hub, ecommerce profile, raw schema + example, docs + spec. |
| Robots | `robots.txt` | Allow all crawlers, advertise sitemap | Keep sitemap URL in sync after deployments. |

## 4. Change Checklist (Run for Every Content/Page Update)
1. **Narrative Alignment**
   - Verify new copy still matches mission, tagline, promise, impact.
   - Ensure changes appear consistently across homepage + README + spec if applicable.
2. **Navigation & CTAs**
   - Confirm new pages are reflected (or intentionally excluded) in `index.html` nav and footer.
   - Update CTA text or disabled placeholders if a feature moves from “coming soon” to “live.”
3. **Spec Synchronization**
   - If governance rules, scoring, or requirements shift, update `docs/spec/v1/index.html` first.
   - Reflect major rule changes in README messaging and homepage summaries.
4. **Crawl Signals**
   - Append new public URLs to `sitemap.xml`.
   - Review `robots.txt` for correct sitemap path (single source of truth).
5. **Repository Communication**
   - Capture notable decisions or outstanding follow-ups in Section 5 below.
   - If schemas are introduced, create `/schemas/` with actual drafts and relink all placeholders.

## 5. Outstanding & Upcoming Work
- **Validator MVP (In Progress):** Build submission UI, wire JSON Schema validation, output Bad / Average / Good / Excellent report with rule references.
- **Ecommerce Collections/Product Profiles (Drafting):** Replicate homepage pattern (`schemas/ecommerce/*.profile.json` + examples + docs page).
- **Service Business Profile (Planned):** Capture requirements once ecommerce set is stable; create `/schemas/services/` tree.
- **Validation Samples:** Add passing/failing payloads and report templates to illustrate scoring bands.
- **Navigation JSON:** Implement canonical navigation artifact referenced in spec §5.5 when requirements finalize.
- **Newsletter CTA:** Replace placeholder copy with subscription link when ready.

## 6. Reference Links
- Production site: `https://aifds.org/`
- Spec draft: `https://aifds.org/docs/spec/v1/`
- Blog / Founder updates: `https://daveedvalencia.com`
- Social: `https://github.com/DaveedValencia`, `https://x.com/DaveedValencia`

## 7. Version Notes
- **2025-01-??:** Published schema hub, ecommerce homepage profile, inline JSON viewers; refreshed homepage narrative and README snapshot; added GA tracking.
- **2025-??-??:** Reset mission-first narrative (homepage, README, spec). Schemas marked as “coming soon.” Added sitemap & robots.
- Update this log with date + summary whenever major changes ship.
