# AIFDS Schema Directory

This directory houses the human-friendly schema hub that lives on the public site. For raw JSON Schema artifacts see `/schemas/`. Browse the rendered profile at [`index.html`](./index.html) or navigate directly to `/docs/schemas/ecommerce/` for ecommerce-specific guidance.

## Available Schemas

- `schemas/ecommerce/homepage.profile.json` – Ensures the root page publishes compliant Organization, WebSite, and WebPage nodes with trust, navigation, and search signals.
- `examples/ecommerce/homepage.min.json` – Minimal JSON-LD payload that passes the homepage profile.

## Usage

1. Pull the schema file into your validation workflow (local file path or fetch from the published URL once deployed).
2. Validate your JSON-LD payload using a Draft 2020-12 compatible validator.
3. Resolve failures before shipping updates. Treat WARN-level guidance in the PRD as follow-up tickets when you cannot satisfy optional fields immediately.

Future additions (`collection.json`, `product.json`, etc.) will be documented here as they graduate from draft to production.
