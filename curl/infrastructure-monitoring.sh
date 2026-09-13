#!/usr/bin/env sh
set -eu

: "${ANTOPS_API_KEY:?Set ANTOPS_API_KEY}"
BASE_URL="${ANTOPS_DIRECT_BASE_URL:-https://api.antops.dev}"

curl --fail-with-body -sS -X POST "$BASE_URL/v1/domain-assets" \
  -H 'Content-Type: application/json' -H "X-API-Key: $ANTOPS_API_KEY" \
  -d '{"domain":"example.com","customer_label":"Example customer","policy":{"interval_seconds":86400}}'
