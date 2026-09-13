# AntOps Examples Handoff

Last updated: 2026-09-13

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

- Curl examples for the five legacy RapidAPI modules and the four direct workspace products.
- Python, JavaScript, and TypeScript examples for legacy RapidAPI and direct workspace access.
- GitHub Actions workflows for Terraform/Docker static checks and DevOps Change Risk policy gates.
- An importable Postman Collection v2.1 and environment template.

## Contract source

The public OpenAPI document at `https://api.antops.dev/openapi.json` is the runtime source of
truth. The five legacy checker APIs use the RapidAPI gateway. Company Watch, Infrastructure
Monitoring, Tender Intelligence and DevOps Change Risk use a directly issued workspace key at
`https://api.antops.dev`; do not claim that their workspace capabilities are included in a
RapidAPI plan. Never commit either kind of real credential.

## Wave 4.5 additions

The direct workspace examples add Company Watch, Infrastructure Monitoring, Tender Intelligence
and DevOps Change Risk curl paths; credential-free Python, JavaScript and TypeScript samples;
an Action that fails only when AntOps returns a `blocked` Change Risk decision; and constant-time
HMAC webhook verification examples. They use `ANTOPS_API_KEY` and
`ANTOPS_DIRECT_BASE_URL=https://api.antops.dev` and contain no real secret.

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
