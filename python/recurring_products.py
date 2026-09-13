"""Run with ANTOPS_API_KEY=YOUR_WORKSPACE_KEY python recurring_products.py."""

import json
import os
from urllib.request import Request, urlopen

BASE_URL = os.getenv("ANTOPS_DIRECT_BASE_URL", "https://api.antops.dev")
API_KEY = os.environ["ANTOPS_API_KEY"]


def call(method: str, path: str, payload: dict | None = None) -> dict:
    request = Request(
        f"{BASE_URL}{path}",
        data=json.dumps(payload).encode() if payload else None,
        headers={"Content-Type": "application/json", "X-API-Key": API_KEY},
        method=method,
    )
    with urlopen(request, timeout=30) as response:  # nosec B310: fixed HTTPS base URL
        return json.load(response)


print(json.dumps(call("GET", "/v1/companies/GB/00000006"), indent=2))
print(json.dumps(call("GET", "/v1/tenders"), indent=2))
print(
    json.dumps(
        call(
            "POST",
            "/v1/change-risk/analyses",
            {"files": [{"path": "Dockerfile", "content": "FROM python:3.12-slim"}]},
        ),
        indent=2,
    )
)
