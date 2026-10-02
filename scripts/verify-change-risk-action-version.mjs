import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [workflow, quickstart] = await Promise.all([
  readFile(new URL("../github-actions/change-risk.yml", import.meta.url), "utf8"),
  readFile(new URL("../developer-tools/README.md", import.meta.url), "utf8"),
]);

const action = "Artificial-Works/antops-developer/actions/change-risk";
const version = workflow.match(new RegExp(`${action}@v(\\d+\\.\\d+\\.\\d+)`))?.[1];

assert.ok(version, "the canonical Change Risk workflow must pin a release tag");
assert.match(quickstart, new RegExp(`${action}@v${version}`));
