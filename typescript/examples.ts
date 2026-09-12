declare const process: { env: Record<string, string | undefined> };

type Json = Record<string, unknown>;

const baseUrl = process.env.ANTOPS_BASE_URL ?? "https://artificial-works-risk-apis.p.rapidapi.com";
const rapidApiHost = process.env.ANTOPS_RAPIDAPI_HOST ?? "artificial-works-risk-apis.p.rapidapi.com";
const rapidApiKey = process.env.ANTOPS_RAPIDAPI_KEY;

if (!rapidApiKey) throw new Error("Set ANTOPS_RAPIDAPI_KEY before running this example.");

async function call(path: string, body: Json): Promise<Json> {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-rapidapi-host": rapidApiHost, "x-rapidapi-key": rapidApiKey },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`${response.status}: ${await response.text()}`);
  return response.json() as Promise<Json>;
}

const examples: Record<string, [string, Json]> = {
  domainHealth: ["/v1/domain/check", { domain: "example.com" }],
  dockerSecurity: ["/v1/docker-scanner/scan", { scan_type: "dockerfile", content: "FROM python:3.12-slim\\nUSER root" }],
  terraformRisk: ["/v1/terraform-risk/analyze", { analysis_type: "terraform", content: 'resource "aws_security_group" "web" {}' }],
  websiteSnapshot: ["/v1/website-snapshot/check", { url: "https://example.com" }],
  ukCompanyIntelligence: ["/v1/uk-company-intelligence/analyze", { company_number: "12345678", company_name: "Example Ltd", company_status: "active", sic_codes: ["62012"] }],
};

async function main() {
  for (const [name, [path, body]] of Object.entries(examples)) {
    console.log(name, await call(path, body));
  }
}

void main();
