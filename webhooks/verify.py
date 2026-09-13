"""Verify an AntOps webhook body before processing it."""

import hashlib
import hmac
import os


def verify(raw_body: bytes, supplied_signature: str) -> bool:
    secret = os.environ["ANTOPS_WEBHOOK_SECRET"].encode()
    expected = hmac.new(secret, raw_body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, supplied_signature)
