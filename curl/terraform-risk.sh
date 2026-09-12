#!/usr/bin/env bash
set -euo pipefail
: "${ANTOPS_API_KEY:?Set ANTOPS_API_KEY first}"
: "${ANTOPS_BASE_URL:=https://api.antops.dev}"

curl --fail-with-body -X POST "$ANTOPS_BASE_URL/v1/terraform-risk/analyze" \
  -H "X-API-Key: $ANTOPS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"analysis_type":"terraform","content":"resource \\"aws_security_group\\" \\"web\\" {\\n  ingress { cidr_blocks = [\\"0.0.0.0/0\\"] from_port = 22 to_port = 22 }\\n}"}'
