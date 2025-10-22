# AIFDS — AI Feed Discovery Standard

**Version:** 0.1-draft  
**Status:** Experimental  
**Author:** Daveed Valencia  
**Website:** [https://aifds.org](https://aifds.org)

---

## Purpose

AIFDS defines **lightweight, factual JSON structures** that make websites **agent-readable** — meaning an AI model or browser can understand who you are, what you offer, and what actions are possible **without crawling or guessing**.

Where Schema.org was built for search indexing,  
**AIFDS is built for reasoning**.

Each JSON document describes the minimum facts an AI agent needs to:

- summarize a business or page accurately  
- answer user questions contextually (e.g., *“Do they ship to Alaska?”*)  
- infer capabilities (checkout, contact, search)  
- connect related pages cleanly

---

## Philosophy

1. **Facts, not prose** – everything in the JSON should be machine-deducible.  
2. **Self-contained truth** – each file holds enough context to stand alone.  
3. **Simple adoption** – anyone can add AIFDS JSON to a static site or CMS.  
4. **Agent-aware** – expose what can be done, not how to do it.  
5. **Open structure** – human-readable, validator-friendly, and versioned.

---

## Current Phase

**Phase 1:** Core page types  
- ✅ `homepage.json` — complete  
- 🟡 `collections.json` — placeholder  
- 🟡 `pdp.json` (product detail) — placeholder  
- 🟡 `blog.json` — placeholder  
- 🟡 `pages.json` — placeholder

Each file lives under `/schemas/` and describes how a given page type should structure its AI-readable data.

---

## Repository Structure

```
aifds.org/
│
├── index.html                # static landing page
├── README.md                 # this document
│
├── /schemas/                 # JSON Schema definitions (validators)
│   ├── homepage.schema.json
│   ├── collections.schema.json       # placeholder
│   ├── pdp.schema.json               # placeholder
│   ├── blog.schema.json              # placeholder
│   └── pages.schema.json             # placeholder
│
├── /examples/                # example data files for real sites
│   ├── homepage.example.json
│   ├── collections.example.json
│   ├── pdp.example.json
│   └── blog.example.json
│
└── /docs/                    # optional static docs (HTML)
    ├── index.html
    └── validator.html
```

---

## Schema Format

All schemas follow the [JSON Schema Draft 2020-12](https://json-schema.org/draft/2020-12/schema) specification.

Every schema begins with:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://aifds.org/schemas/<page-type>.schema.json",
  "title": "AIFDS <Page Type> Schema",
  "description": "Defines the structure for AI-readable <page-type> context files.",
  "type": "object",
  "properties": { ... }
}
```

### Core conventions

| Concept | Rule |
|----------|------|
| **snake_case** keys | All field names use lowercase snake_case. |
| **versioned docs** | Every JSON data file includes `"version"` and `"updated_at"`. |
| **URIs** | All URLs must be absolute and HTTPS. |
| **Booleans over prose** | Use `true`, `false`, or `null` instead of descriptive text. |
| **Data first** | Avoid any narrative fields or notes—facts only. |

---

## Example: Homepage

Reference schema: [`schemas/homepage.schema.json`](https://aifds.org/schemas/homepage.schema.json)  
Example data: [`examples/homepage.example.json`](https://aifds.org/examples/homepage.example.json)

Key sections:
```
site → about → credibility → contact → operations → navigation → highlights → actions
```

Each block is modular so it can be re-used across other page types.

---

## Roadmap

| Stage | Focus | Status |
|--------|--------|--------|
| 1 | Homepage spec + validator | ✅ Complete |
| 2 | Collections + PDP structures | 🚧 In progress |
| 3 | Blog + Pages schema | 🚧 In progress |
| 4 | CLI validator + score harness | 🔜 Planned |
| 5 | Public registry & scoring dashboard | 🔜 Planned |

---

## License

All AIFDS schemas and examples are released under the **CC BY 4.0** license.  
You’re free to copy, modify, and implement with attribution.

---

## Contributing

AIFDS is an open, evolving standard.  
Submit ideas, examples, or corrections via GitHub issues or email:  
**contact@aifds.org**

---

*“The goal isn’t to rank higher. The goal is to be understood.”*
