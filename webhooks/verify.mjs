import { createHmac, timingSafeEqual } from "node:crypto";

export function verifyAntOpsWebhook(rawBody, suppliedSignature) {
  const expected = createHmac("sha256", process.env.ANTOPS_WEBHOOK_SECRET)
    .update(rawBody)
    .digest("hex");
  return timingSafeEqual(Buffer.from(expected), Buffer.from(suppliedSignature));
}
