# AntOps examples

Copyable examples for AntOps operational intelligence and evidence APIs. RapidAPI provides access
to the five legacy checker modules. Direct customer workspaces use `https://api.antops.dev` for
the four recurring operational products:

- Company & Supplier Watch
- MSP Infrastructure Monitoring
- Tender Intelligence
- DevOps Change Risk

One RapidAPI subscription provides access to the five legacy modules:

- Email & Domain Health
- Docker Security Scanner
- Terraform Risk Analyzer
- Website Security Snapshot
- UK Company Intelligence

The production gateway URL is `https://artificial-works-risk-apis.p.rapidapi.com`. Obtain a RapidAPI subscription from the
[AntOps listing](https://rapidapi.com/ogulcanaydogan/api/artificial-works-risk-apis), then set a
local environment variable. Do not commit a key.

```bash
cp .env.example .env
export ANTOPS_BASE_URL="https://artificial-works-risk-apis.p.rapidapi.com"
export ANTOPS_RAPIDAPI_HOST="artificial-works-risk-apis.p.rapidapi.com"
export ANTOPS_RAPIDAPI_KEY="YOUR_RAPIDAPI_KEY"
```

## Quick start

```bash
curl -X POST "$ANTOPS_BASE_URL/v1/domain/check" \
  -H "X-RapidAPI-Key: $ANTOPS_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: $ANTOPS_RAPIDAPI_HOST" \
  -H "Content-Type: application/json" \
  -d '{"domain":"example.com"}'
```

All production examples use the RapidAPI gateway, so subscription quotas and consumer
authentication are applied consistently.

## Direct workspace products

For Company Watch, Infrastructure Monitoring, Tender Intelligence and DevOps Change Risk, obtain
an AntOps workspace key from your owner key or customer onboarding. Do not put it in source control.

```bash
export ANTOPS_DIRECT_BASE_URL="https://api.antops.dev"
export ANTOPS_API_KEY="YOUR_ANTOPS_WORKSPACE_KEY"
```

See [`curl/`](curl) for Company Watch, infrastructure, tender and change-risk requests, and
[`github-actions/change-risk.yml`](github-actions/change-risk.yml) for a reusable CI policy gate.
Webhook verification examples are in [`webhooks/`](webhooks).

## Examples

- [`curl/`](curl): one shell request per module.
- [`python/examples.py`](python/examples.py): standard-library Python requests.
- [`javascript/examples.mjs`](javascript/examples.mjs): Node 18+ `fetch` examples.
- [`typescript/examples.ts`](typescript/examples.ts): typed Node 18+ `fetch` examples.
- [`github-actions/`](github-actions): Terraform and Docker CI patterns.
- [`webhooks/`](webhooks): HMAC-SHA256 verification without a framework dependency.
- [`postman/`](postman): importable collection and environment files.

## CI guidance

The supplied workflows are templates. A repository consuming them must add `ANTOPS_RAPIDAPI_KEY` as a
GitHub Actions secret. They never execute Docker or Terraform; they submit static Docker text or
Terraform plan/source content to AntOps and fail only on the policy coded in the workflow.

## Scope

AntOps returns automated technical signals. It does not execute submitted Docker or Terraform,
perform a penetration test, provide legal/compliance certification, independently enrich UK
Companies House data, or make credit decisions. Read the [API docs](https://api.antops.dev/docs)
for the current public schema and limits.
