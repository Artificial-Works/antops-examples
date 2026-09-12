import { writeFileSync } from "node:fs";

const baseUrl = "{{base_url}}";
const headers = [
  { key: "X-API-Key", value: "{{antops_api_key}}" },
  { key: "Content-Type", value: "application/json" },
];

function request(name, path, body, description = "") {
  return {
    name,
    request: {
      method: "POST",
      header: headers,
      body: { mode: "raw", raw: JSON.stringify(body, null, 2), options: { raw: { language: "json" } } },
      url: `${baseUrl}${path}`,
      description,
    },
    response: [],
  };
}

const collection = {
  info: {
    _postman_id: "0cf69b15-46be-47c0-a010-96804d51f53f",
    name: "AntOps API Suite",
    description: "Set the AntOps Production environment, replace {{antops_api_key}} with a RapidAPI key, then send any request. One subscription includes all five current modules. Responses are automated technical signals, not legal, compliance, credit, or security certification.",
    schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
  },
  variable: [
    { key: "base_url", value: "https://api.antops.dev" },
    { key: "antops_api_key", value: "YOUR_RAPIDAPI_KEY", type: "string" },
  ],
  item: [
    { name: "01 Domain Health", description: "Public DNS, MX, SPF, DMARC and TLS signals.", item: [request("Check Domain Health", "/v1/domain/check", { domain: "example.com" }, "Checks one public domain. This is a technical signal, not a deliverability guarantee.")] },
    { name: "02 Docker Security", description: "Static Dockerfile and Docker Compose analysis. Submitted content is never executed.", item: [request("Scan Dockerfile", "/v1/docker-scanner/scan", { scan_type: "dockerfile", content: "FROM python:3.12-slim\nUSER root" })] },
    { name: "03 Terraform Risk", description: "Static Terraform source or terraform show -json analysis. Terraform is never executed.", item: [request("Analyze Terraform Source", "/v1/terraform-risk/analyze", { analysis_type: "terraform", content: 'resource "aws_security_group" "web" {}' })] },
    { name: "04 Website Security Snapshot", description: "Automated public website technical signals, not legal advice or certification.", item: [request("Check Website Snapshot", "/v1/website-snapshot/check", { url: "https://example.com" })] },
    { name: "05 UK Company Intelligence", description: "Analyzes supplied Companies House-style public/company data. It does not independently enrich data or make credit decisions.", item: [request("Analyze UK Company", "/v1/uk-company-intelligence/analyze", { company_number: "12345678", company_name: "Example Ltd", company_status: "active", sic_codes: ["62012"] })] },
  ],
};

writeFileSync("postman/AntOps.postman_collection.json", `${JSON.stringify(collection, null, 2)}\n`);
