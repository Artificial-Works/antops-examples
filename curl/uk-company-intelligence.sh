#!/usr/bin/env bash
set -euo pipefail
: "${ANTOPS_API_KEY:?Set ANTOPS_API_KEY first}"
: "${ANTOPS_BASE_URL:=https://api.antops.dev}"

curl --fail-with-body -X POST "$ANTOPS_BASE_URL/v1/uk-company-intelligence/analyze" \
  -H "X-API-Key: $ANTOPS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"company_number":"12345678","company_name":"Example Ltd","company_status":"active","sic_codes":["62012"]}'
