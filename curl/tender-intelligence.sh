#!/usr/bin/env sh
set -eu

: "${ANTOPS_API_KEY:?Set ANTOPS_API_KEY}"
BASE_URL="${ANTOPS_DIRECT_BASE_URL:-https://api.antops.dev}"

curl --fail-with-body -sS -X PUT "$BASE_URL/v1/tender-capability-profile" \
  -H 'Content-Type: application/json' -H "X-API-Key: $ANTOPS_API_KEY" \
  -d '{"keywords":["cloud","platform"],"preferred_geographies":["GB"]}'

curl --fail-with-body -sS -X POST "$BASE_URL/v1/tender-saved-searches" \
  -H 'Content-Type: application/json' -H "X-API-Key: $ANTOPS_API_KEY" \
  -d '{"name":"UK cloud services","filters":{"jurisdiction":"GB","keywords":["cloud","platform"]}}'
