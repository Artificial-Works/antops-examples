# AntOps Examples Handoff

Last updated: 2026-09-12

## Repository Naming Standardization

Canonical GitHub repositories are `Artificial-Works/antops-platform`,
`Artificial-Works/antops-site`, `Artificial-Works/antops-metrics`, and
`Artificial-Works/antops-examples`. Historical names `artificial-works-api` and `antops` refer to
the renamed platform and site repositories respectively. Local and B450 directory names remain
unchanged intentionally because they are deployment identifiers, not canonical repository names.
No direct private platform repository link is added to these public developer examples.

## Purpose

This is the public, credential-free developer distribution repository for AntOps. It is
deliberately separate from the private production API repository.

## Included

- Curl examples for all five current modules.
- Python, JavaScript, and TypeScript examples using `ANTOPS_RAPIDAPI_KEY`.
- GitHub Actions workflows for Terraform and Docker static-analysis checks.
- An importable Postman Collection v2.1 and environment template.

## Contract source

The public OpenAPI document at `https://api.antops.dev/openapi.json` is the runtime source of
truth. Do not add endpoints or claims not present there. Never commit real RapidAPI keys.

## Postman publishing

The collection and environment were revalidated on 2026-09-12. They use the RapidAPI gateway,
`X-RapidAPI-Key`, and `X-RapidAPI-Host`; represent all five current modules; and contain only
`YOUR_RAPIDAPI_KEY` placeholders. No real credential is committed. They have been imported into
the public workspace at
`https://www.postman.com/ogulcanaydogans-team/antops-api-suite`; the public collection URL is
`https://www.postman.com/ogulcanaydogans-team/antops-api-suite/collection/zrd1z80/antops-api-suite`.
A private Postman consumer request to `POST /v1/domain/check` returned `200 OK` on 2026-09-12;
the test key was cleared afterward.

## Verification

Validate JSON with `jq empty postman/*.json`. Syntax-check JavaScript with
`node --check javascript/examples.mjs`; TypeScript has no runtime dependency and can be checked
with `npx --yes --package typescript@5 tsc --noEmit --target ES2022 typescript/examples.ts`.

## Next Action

Collect real acquisition and usage data before starting new API development.
