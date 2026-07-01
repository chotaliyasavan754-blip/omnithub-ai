export type IntegrationStatus = "Connected" | "Disconnected" | "Error";

export interface Integration {
  id: string;
  name: string;
  description: string;
  category: "Messaging" | "CRM" | "AI" | "Payment" | "Other";
  status: IntegrationStatus;
  icon: string;
}

export const INTEGRATIONS_DATA: Integration[] = [
  {
    id: "int-1",
    name: "Slack",
    description: "Receive notifications and reply directly from Slack.",
    category: "Messaging",
    status: "Connected",
    icon: "slack",
  },
  {
    id: "int-2",
    name: "Discord",
    description: "Sync Discord channels and manage community messages.",
    category: "Messaging",
    status: "Disconnected",
    icon: "discord",
  },
  {
    id: "int-3",
    name: "WhatsApp",
    description: "Connect WhatsApp Business API for customer support.",
    category: "Messaging",
    status: "Connected",
    icon: "whatsapp",
  },
  {
    id: "int-4",
    name: "Telegram",
    description: "Manage Telegram bots and groups.",
    category: "Messaging",
    status: "Disconnected",
    icon: "telegram",
  },
  {
    id: "int-5",
    name: "Stripe",
    description: "View customer payment history alongside conversations.",
    category: "Payment",
    status: "Connected",
    icon: "stripe",
  },
  {
    id: "int-6",
    name: "Twilio",
    description: "Send and receive SMS messages via Twilio.",
    category: "Messaging",
    status: "Disconnected",
    icon: "twilio",
  },
  {
    id: "int-7",
    name: "OpenAI",
    description: "Power AI Copilot with GPT-4 models.",
    category: "AI",
    status: "Connected",
    icon: "openai",
  },
  {
    id: "int-8",
    name: "Anthropic",
    description: "Alternative AI model for Copilot using Claude.",
    category: "AI",
    status: "Disconnected",
    icon: "anthropic",
  },
  {
    id: "int-9",
    name: "Webhook",
    description: "Send events to your own custom endpoints.",
    category: "Other",
    status: "Connected",
    icon: "webhook",
  },
];
