#!/usr/bin/env bash
set -euo pipefail
: "${ANTOPS_RAPIDAPI_KEY:?Set ANTOPS_RAPIDAPI_KEY first}"
: "${ANTOPS_BASE_URL:=https://artificial-works-risk-apis.p.rapidapi.com}"
: "${ANTOPS_RAPIDAPI_HOST:=artificial-works-risk-apis.p.rapidapi.com}"

curl --fail-with-body -X POST "$ANTOPS_BASE_URL/v1/docker-scanner/scan" \
  -H "X-RapidAPI-Key: $ANTOPS_RAPIDAPI_KEY" -H "X-RapidAPI-Host: $ANTOPS_RAPIDAPI_HOST" \
  -H "Content-Type: application/json" \
  -d '{"scan_type":"dockerfile","content":"FROM python:3.12-slim\\nUSER root"}'
