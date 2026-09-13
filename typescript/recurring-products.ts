declare const process: { env: Record<string, string | undefined> };

const baseUrl = process.env.ANTOPS_DIRECT_BASE_URL ?? "https://api.antops.dev";
const apiKey = process.env.ANTOPS_API_KEY;

if (!apiKey) throw new Error("Set ANTOPS_API_KEY before running this example.");

async function call(path: string, options: RequestInit = {}): Promise<unknown> {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: { "content-type": "application/json", "x-api-key": apiKey, ...options.headers },
  });
  if (!response.ok) throw new Error(`${response.status}: ${await response.text()}`);
  return response.json();
}

void (async () => {
  console.log(await call("/v1/companies/GB/00000006"));
  console.log(await call("/v1/tenders"));
  console.log(await call("/v1/change-risk/analyses", {
    method: "POST",
    body: JSON.stringify({ files: [{ path: "Dockerfile", content: "FROM python:3.12-slim" }] }),
  }));
})();
