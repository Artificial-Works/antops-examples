#!/usr/bin/env sh
set -eu

: "${ANTOPS_API_KEY:?Set ANTOPS_API_KEY}"
BASE_URL="${ANTOPS_DIRECT_BASE_URL:-https://api.antops.dev}"

curl --fail-with-body -sS "$BASE_URL/v1/companies/GB/00000006" \
  -H "X-API-Key: $ANTOPS_API_KEY"

curl --fail-with-body -sS -X POST "$BASE_URL/v1/companies" \
  -H 'Content-Type: application/json' -H "X-API-Key: $ANTOPS_API_KEY" \
  -d '{"jurisdiction":"GB","registration_number":"00000006","monitor_interval_seconds":86400}'
