# AntOps Developer Tools

The official distribution repository is
[`Artificial-Works/antops-developer`](https://github.com/Artificial-Works/antops-developer). It
contains the maintained CLI, typed Python and TypeScript SDKs, reusable Change Risk Action, and a
safe stdio MCP server. These packages call `https://api.antops.dev`; they do not replace or reimplement
AntOps product logic.

## CLI

```bash
python -m pip install 'git+https://github.com/Artificial-Works/antops-developer.git#subdirectory=packages/python'
export ANTOPS_API_KEY="YOUR_ANTOPS_WORKSPACE_KEY"
antops auth status
antops company lookup GB 00000006 --json
antops tender search --keyword cloud --json
```

The CLI reads keys from `ANTOPS_API_KEY` or a permission-restricted file created by
`antops auth login --stdin`. Do not pass keys as command-line arguments. Change Risk returns exit
code `0` for an allowed result and `4` for a blocked result.

## SDKs

```python
from antops import AntOpsClient
client = AntOpsClient.from_environment()
print(client.domains.check("example.com"))
```

```ts
import { AntOpsClient } from "@antops/sdk";
const client = new AntOpsClient({ apiKey: process.env.ANTOPS_API_KEY! });
console.log(await client.company.lookup("GB", "00000006"));
```

## GitHub Action

```yaml
permissions:
  contents: read
steps:
  - uses: actions/checkout@v4
  - uses: Artificial-Works/antops-developer/actions/change-risk@v0.1.0
    with:
      api-key: ${{ secrets.ANTOPS_API_KEY }}
      files: |
        Dockerfile
        compose.yaml
        main.tf
```

The Action sends bounded static text only; it does not execute Docker, Terraform or submitted files.

## MCP

```json
{
  "mcpServers": {
    "antops": {
      "command": "node",
      "args": ["/absolute/path/to/antops-developer/packages/mcp/dist/index.js"],
      "env": { "ANTOPS_API_KEY": "configure in your secret manager" }
    }
  }
}
```

Clone `antops-developer` and run `npm install && npm run build` before using this source-distribution
configuration. PyPI and npm publishing remain intentionally disabled until organization-owned trusted
publisher settings are configured.

The MCP server supports bounded company lookup, domain check/status, tender search/matches, Change
Risk analysis and document scan tools. It deliberately has no destructive, billing, key-management
or workspace-administration tool.
