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
credential is committed. Postman does not have an active owner session in the available browser,
so public publishing could not be completed. Once signed in, import
`postman/AntOps.postman_collection.json` and `postman/AntOps.postman_environment.json`, set
`antops_api_key` only in the private environment, send a representative request, then use
Share > Publish. Record the resulting public URL in this file and in the website handoff.

## Verification

Validate JSON with `jq empty postman/*.json`. Syntax-check JavaScript with
`node --check javascript/examples.mjs`; TypeScript has no runtime dependency and can be checked
with `npx --yes --package typescript@5 tsc --noEmit --target ES2022 typescript/examples.ts`.

## Next Action

The only remaining distribution action is owner authentication to Postman and publication of the
prepared collection. After publication, point the website Postman resource at its public URL;
then collect real acquisition and usage data before starting new API development.
