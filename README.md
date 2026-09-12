# AntOps examples

Copyable examples for the AntOps developer risk API suite. One RapidAPI subscription provides
access to all five modules:

- Email & Domain Health
- Docker Security Scanner
- Terraform Risk Analyzer
- Website Security Snapshot
- UK Company Intelligence

The production base URL is `https://api.antops.dev`. Obtain a RapidAPI subscription from the
[AntOps listing](https://rapidapi.com/ogulcanaydogan/api/artificial-works-risk-apis), then set a
local environment variable. Do not commit a key.

```bash
cp .env.example .env
export ANTOPS_API_KEY="YOUR_RAPIDAPI_KEY"
export ANTOPS_BASE_URL="https://api.antops.dev"
```

## Quick start

```bash
curl -X POST "$ANTOPS_BASE_URL/v1/domain/check" \
  -H "X-API-Key: $ANTOPS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"domain":"example.com"}'
```

If you call AntOps through the RapidAPI gateway rather than the public base URL, use the host and
headers shown in the marketplace-generated code snippet for your application.

## Examples

- [`curl/`](curl): one shell request per module.
- [`python/examples.py`](python/examples.py): standard-library Python requests.
- [`javascript/examples.mjs`](javascript/examples.mjs): Node 18+ `fetch` examples.
- [`typescript/examples.ts`](typescript/examples.ts): typed Node 18+ `fetch` examples.
- [`github-actions/`](github-actions): Terraform and Docker CI patterns.
- [`postman/`](postman): importable collection and environment files.

## CI guidance

The supplied workflows are templates. A repository consuming them must add `ANTOPS_API_KEY` as a
GitHub Actions secret. They never execute Docker or Terraform; they submit static Docker text or
Terraform plan/source content to AntOps and fail only on the policy coded in the workflow.

## Scope

AntOps returns automated technical signals. It does not execute submitted Docker or Terraform,
perform a penetration test, provide legal/compliance certification, independently enrich UK
Companies House data, or make credit decisions. Read the [API docs](https://api.antops.dev/docs)
for the current public schema and limits.
