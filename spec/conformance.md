# AIFDS Conformance Reference

This document captures the rule severity tables for each published schema profile. Use it alongside the JSON Schemas and the validator output to interpret pass/fail impact.

## Ecommerce Profile ▸ Homepage (`homepage.profile.json`)

### Critical (fail = non-compliant)

| Rule | Description |
| --- | --- |
| JSON-LD block present | The payload MUST be JSON-LD with `@context: "https://schema.org"` and parse cleanly. |
| Required graph composition | `@graph` MUST contain exactly one each of `Organization`/`LocalBusiness`, `WebSite`, and `WebPage`. |
| Canonical origin alignment | `Organization.url`, `WebSite.url`, and `WebPage.url` MUST share the same HTTPS origin as their `@id` values. |

### Strong (warn)

| Rule | Description |
| --- | --- |
| Language signals | `inLanguage` SHOULD be set on `WebSite` and `WebPage` using BCP-47 tags. |
| Logo metadata | `Organization.logo` SHOULD provide an absolute URL with width and height. |
| Site search | `WebSite.potentialAction` SHOULD expose a `SearchAction` with a `{search_term_string}` template and the required query-input. |
| Contact channel | `Organization.contactPoint` SHOULD include at least one entry with `contactType` and either `email` or `telephone`. |
| Verified profiles | `Organization.sameAs` SHOULD include at least two authoritative profiles. |
| Primary image | `WebPage.primaryImageOfPage` SHOULD reference an `ImageObject` with dimensions. |
| Homepage entity binding | `WebPage.mainEntityOfPage` SHOULD reference the canonical organization entity. |
| Legal identity | `Organization.legalName` and `foundingDate` SHOULD be included when accurate. |

### Informational (track)

| Rule | Description |
| --- | --- |
| Address rationale | Supply `PostalAddress` when available, or document why it is omitted. |
| Expertise context | `knowsAbout` SHOULD describe genuine domains of expertise without keyword stuffing. |
| Navigation trail | `breadcrumb` SHOULD include at least the homepage list item. |
| Copyright signals | Capture `copyrightHolder` and `copyrightYear` when the site exposes them. |
| Local presence | When `@type` is `LocalBusiness`, include `address`, `areaServed`, and `hoursAvailable` consistent with the physical operation. |

Future profiles (Collections, Product Detail) will follow the same severity layout once drafts are published. Submit pull requests to propose new rules or reclassifications.
