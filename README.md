# AI Feed Discovery Standard (AIFDS)

**Website:** [aifds.org](https://aifds.org)  
**Spec Draft:** [https://aifds.org/docs/spec/v1/](https://aifds.org/docs/spec/v1/)  
**Schemas:** [https://aifds.org/schemas/v1/](https://aifds.org/schemas/v1/)  

---

## Overview
The **AI Feed Discovery Standard (AIFDS)** is an open JSON-based feed format that makes business and product data **AI-ready for Large Language Models (LLMs)**.

Today, LLMs ingest messy, HTML-heavy content from crawlers and private data deals. This leads to:
- Hallucinations and misinformation  
- Inaccurate brand representation  
- Wasted compute on parsing noise  

AIFDS provides a clean, structured alternative — inspired by schema.org, but purpose-built for the **LLM era**.

---

## Core Feeds
- `business.json` — Organizational profile  
- `products.json` — Product catalog  
- `services.json` — Structured service data  
- `faq.json` — Canonical Q&A  
- `updates.jsonl` — Append-only freshness feed  

---

## Discovery
Feeds can be discovered via:
- Subdomain: `feed.example.com`  
- `<link rel="alternate" type="application/json">` in `<head>`  
- Footer links for crawler hints  

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
        ├── business.schema.json
        ├── products.schema.json
        └── index.html         # schema listing
```

---

## Deployment
This repo is a **static site**. It can be hosted on:
- DigitalOcean App Platform (recommended)  
- Netlify, Vercel, GitHub Pages, or Cloudflare Pages  

**Local testing:**
```bash
cd aifds-site
python3 -m http.server 8000
# Visit http://localhost:8000
```

---

## Status
- **v1 Draft** — spec and schemas are in early draft stage.  
- Validator tools and example feeds are in development.  

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
