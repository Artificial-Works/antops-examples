# AntOps Examples Handoff

Last updated: 2026-09-12

## Purpose

This is the public, credential-free developer distribution repository for AntOps. It is
deliberately separate from the private production API repository.

## Included

- Curl examples for all five current modules.
- Python, JavaScript, and TypeScript examples using `ANTOPS_API_KEY`.
- GitHub Actions workflows for Terraform and Docker static-analysis checks.
- An importable Postman Collection v2.1 and environment template.

## Contract source

The public OpenAPI document at `https://api.antops.dev/openapi.json` is the runtime source of
truth. Do not add endpoints or claims not present there. Never commit real RapidAPI keys.

## Postman publishing

The collection and environment were revalidated on 2026-09-12. They use the production base URL,
represent all five current modules, and contain only `YOUR_RAPIDAPI_KEY` placeholders; no real
credential is committed. They have been imported into the public workspace at
`https://www.postman.com/ogulcanaydogans-team/antops-api-suite`; the public collection URL is
`https://www.postman.com/ogulcanaydogans-team/antops-api-suite/collection/zrd1z80/antops-api-suite`.
Set `antops_api_key` only in a private environment before sending a representative request.

## Verification

Validate JSON with `jq empty postman/*.json`. Syntax-check JavaScript with
`node --check javascript/examples.mjs`; TypeScript has no runtime dependency and can be checked
with `npx --yes --package typescript@5 tsc --noEmit --target ES2022 typescript/examples.ts`.

## Next Action

Set a real RapidAPI consumer key only in a private Postman environment and verify one
representative 200 request. Then collect real acquisition and usage data before starting new API
development.
