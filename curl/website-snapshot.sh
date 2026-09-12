#!/usr/bin/env bash
set -euo pipefail
: "${ANTOPS_API_KEY:?Set ANTOPS_API_KEY first}"
: "${ANTOPS_BASE_URL:=https://api.antops.dev}"

curl --fail-with-body -X POST "$ANTOPS_BASE_URL/v1/website-snapshot/check" \
  -H "X-API-Key: $ANTOPS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
