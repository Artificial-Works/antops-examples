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

The collection is ready at `postman/AntOps.postman_collection.json`. Publishing a public Postman
workspace requires the owner to sign into Postman, import that file and
`postman/AntOps.postman_environment.json`, set `antops_api_key`, then use Share > Publish.

## Verification

Validate JSON with `jq empty postman/*.json`. Syntax-check JavaScript with
`node --check javascript/examples.mjs`; TypeScript has no runtime dependency and can be checked
with `npx --yes --package typescript@5 tsc --noEmit --target ES2022 typescript/examples.ts`.

## Next Action

Publish the prepared Postman collection once the owner chooses the public Postman workspace.
