"""Run with ANTOPS_API_KEY=YOUR_RAPIDAPI_KEY python examples.py."""

import json
import os
from urllib.request import Request, urlopen

BASE_URL = os.getenv("ANTOPS_BASE_URL", "https://api.antops.dev")
API_KEY = os.environ["ANTOPS_API_KEY"]


def call(path: str, payload: dict) -> dict:
    request = Request(
        f"{BASE_URL}{path}",
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json", "X-API-Key": API_KEY},
        method="POST",
    )
    with urlopen(request, timeout=30) as response:  # nosec B310: fixed HTTPS API base URL
        return json.load(response)


examples = {
    "domain_health": ("/v1/domain/check", {"domain": "example.com"}),
    "docker_security": ("/v1/docker-scanner/scan", {"scan_type": "dockerfile", "content": "FROM python:3.12-slim\\nUSER root"}),
    "terraform_risk": ("/v1/terraform-risk/analyze", {"analysis_type": "terraform", "content": 'resource "aws_security_group" "web" {}'}),
    "website_snapshot": ("/v1/website-snapshot/check", {"url": "https://example.com"}),
    "uk_company_intelligence": ("/v1/uk-company-intelligence/analyze", {"company_number": "12345678", "company_name": "Example Ltd", "company_status": "active", "sic_codes": ["62012"]}),
}

for name, (path, payload) in examples.items():
    print(f"\\n{name}:")
    print(json.dumps(call(path, payload), indent=2))
