#!/usr/bin/env sh
set -eu

: "${ANTOPS_API_KEY:?Set ANTOPS_API_KEY}"
BASE_URL="${ANTOPS_DIRECT_BASE_URL:-https://api.antops.dev}"

curl --fail-with-body -sS -X POST "$BASE_URL/v1/change-risk/analyses" \
  -H 'Content-Type: application/json' -H "X-API-Key: $ANTOPS_API_KEY" \
  -d '{"files":[{"path":"compose.yaml","content":"services:\n  app:\n    image: nginx:1.27"}]}'
