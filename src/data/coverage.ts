/**
 * Coverage Data
 * Areas of work mapped against where each was actually done. Every filled
 * cell must be a verifiable fact; an area with no evidence at a place stays
 * empty rather than being padded.
 */

export interface CoverageSource {
  id: string;
  label: string;
  period: string;
  current?: boolean;
}

export interface CoverageArea {
  id: string;
  label: string;
  cells: Partial<Record<string, string>>;
}

export const coverageSources: CoverageSource[] = [
  { id: "booking", label: "Booking.com", period: "2026–now", current: true },
  { id: "phoenixnap", label: "PhoenixNAP", period: "2021–2026" },
  { id: "ccbill", label: "CCBill", period: "2018–2021" },
  { id: "thesis", label: "MSc thesis", period: "2025" },
  { id: "cain", label: "CAIN ’26 paper", period: "2026" },
];

export const coverageAreas: CoverageArea[] = [
  {
    id: "agents",
    label: "Agents and MCP integrations",
    cells: {
      booking: "The internal agent platform and the MCP integration platform.",
    },
  },
  {
    id: "backend",
    label: "Backend and platform",
    cells: {
      booking: "Developer tooling used by engineers across the company.",
      phoenixnap: "Spring Boot provisioning tooling for a bare-metal cloud.",
      ccbill: "An internal employee-management tool, built and run end to end.",
    },
  },
  {
    id: "cloud",
    label: "Cloud infrastructure",
    cells: {
      phoenixnap: "Automated RAID configuration and custom OS images.",
    },
  },
  {
    id: "ml",
    label: "ML pipelines in production",
    cells: {
      thesis: "MLflow and Kubeflow pipelines for CNC anomaly detection, with IDEKO.",
      cain: "A systematic review of MLOps tools across the lifecycle.",
    },
  },
];
