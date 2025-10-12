# AI Schema Discovery Standard (AIFDS)

**Website:** [aifds.org](https://aifds.org)  
**Spec Draft:** [https://aifds.org/docs/spec/v1/](https://aifds.org/docs/spec/v1/)  
**Schemas:** [https://aifds.org/schemas/v1/](https://aifds.org/schemas/v1/)  

---

## Overview
The **AI Schema Discovery Standard (AIFDS)** publishes schema.org-aligned JSON playbooks so commerce and service operators can ship canonical, AI-ready data through validation-first workflows.

Today, LLMs ingest messy, HTML-heavy content from crawlers and private data deals. This leads to:
- Hallucinations and misinformation  
- Inaccurate brand representation  
- Wasted compute on parsing noise  

AIFDS provides a clean, structured alternative — inspired by schema.org, but purpose-built for the **LLM era**.

---

## Core Schemas
- `product.json` — Canonical SKU facts and offers (`schema:Product`)  
- `homepage.json` — Structured storefront landing page (`schema:WebPage`)  
- `collections.json` — Merchandising groupings with product references (`schema:CollectionPage`)  
- `blog.json` — Editorial layer with `schema:Blog` and `schema:BlogPosting` entries  
- `service-homepage.json` — Service business landing page (`schema:WebPage`)  
- `services.json` — Catalog of offerings mapped to `schema:Service`  
- `contact.json` — Intake and SLA details (`schema:ContactPoint`)  
- `pricing.json` — Offer catalog for packages (`schema:OfferCatalog`)  
- `business.json` — Organizational profile metadata (`schema:Organization`)  
- `faqs.json` — Canonical Q&A catalog (`schema:FAQPage`)  

---

## Validation
AIFDS prioritizes validation to keep AI experiences accurate:
- Validate JSON payloads against the published schemas before distribution  
- Share validation reports with partners, crawlers, and AI tooling vendors  
- Distribute trusted data through your preferred channel (APIs, storage buckets, etc.)  

---

## Repository Layout
```
aifds-site/
├── index.html                 # Homepage
├── docs/
│   └── spec/
│       └── v1/
│           └── index.html     # v1 draft spec (placeholder)
└── schemas/
    └── v1/
        ├── blog.schema.json
        ├── business.schema.json
        ├── collections.schema.json
        ├── contact.schema.json
        ├── homepage.schema.json
        ├── pricing.schema.json
        ├── product.schema.json
        ├── products.schema.json   # legacy array draft
        ├── service-homepage.schema.json
        ├── services.schema.json
        └── index.html              # schema listing
```

---

## Deployment
This repo is a **static site**. It can be hosted on:
- DigitalOcean App Platform (recommended)  
- Netlify, Vercel, GitHub Pages, or Cloudflare Pages  

---

## Status
- **v1 Draft** — spec and schemas are in early draft stage.  
- Validator tools and example payloads are in development.  

---

## Contributing
We welcome feedback, RFCs, and early adopters.  

Ways to contribute:
- Open [issues](https://github.com/DaveedValencia/aifds-site/issues)  
- Submit pull requests for docs, schemas, or examples  
- Join discussions on adoption  

Follow updates:  
- GitHub: [@DaveedValencia](https://github.com/DaveedValencia)  
- Twitter/X: [@DaveedValencia](https://x.com/DaveedValencia)  

---

## License
MIT License © 2025 Minnesota.ai
