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
| Homepage | `index.html` | Public mission narrative, scoring overview, call-to-actions | Nav = Mission / Spec / Contact. Contact anchors to “Stay Connected.” |
| Spec Draft | `docs/spec/v1/index.html` | Governance model, scoring rubric, schema requirements (schemas TBD) | No functional schema links until drafts exist. |
| README | `README.md` | Public repo overview & storytelling anchor | Mirrors homepage language; references spec and “schemas coming soon.” |
| Sitemap | `sitemap.xml` | Search inclusion for current public pages | Must update when new pages publish. |
| Robots | `robots.txt` | Allow all crawlers, advertise sitemap | Keep in sync with sitemap filename/location. |

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
- **Schema Drafts:** `/schemas/ecommerce/homepage.profile.json` live with corresponding `/docs/schemas/` hub. Collections/Product profiles next.
- **Validation Samples:** Plan sample payloads and report templates to demonstrate Bad/Average/Good/Excellent scoring.
- **Newsletter CTA:** Future enhancement to add direct signup link in “Stay Connected.”
- **Navigation JSON:** Placeholder mentioned in spec (5.5). Create actual artifact when requirements stabilize.

## 6. Reference Links
- Production site: `https://aifds.org/`
- Spec draft: `https://aifds.org/docs/spec/v1/`
- Blog / Founder updates: `https://daveedvalencia.com`
- Social: `https://github.com/DaveedValencia`, `https://x.com/DaveedValencia`

## 7. Version Notes
- **2025-??-??:** Reset mission-first narrative (homepage, README, spec). Schemas marked as “coming soon.” Added sitemap & robots.
- Update this log with date + summary whenever major changes ship.
