// ─── AI Copilot Data ──────────────────────────────────────────────────────────

export interface CopilotMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface CopilotSuggestion {
  id: string;
  label: string;
  prompt: string;
}

// ─── Default Conversation ─────────────────────────────────────────────────────

export const INITIAL_MESSAGES: CopilotMessage[] = [
  {
    id: "msg-1",
    role: "assistant",
    content:
      "Hello! I'm your AI Copilot 👋. I can help you draft responses, summarize conversations, translate messages, and more. What would you like to do today?",
    timestamp: "Just now",
  },
];

// ─── Quick Prompt Suggestions ─────────────────────────────────────────────────

export const COPILOT_SUGGESTIONS: CopilotSuggestion[] = [
  {
    id: "sug-1",
    label: "Draft a reply",
    prompt: "Draft a professional reply to a customer asking about pricing.",
  },
  {
    id: "sug-2",
    label: "Summarize thread",
    prompt: "Summarize the last 10 messages in this conversation thread.",
  },
  {
    id: "sug-3",
    label: "Translate message",
    prompt: "Translate this message to Spanish: 'Thank you for your patience.'",
  },
  {
    id: "sug-4",
    label: "Generate template",
    prompt: "Create a WhatsApp template for a payment reminder.",
  },
  {
    id: "sug-5",
    label: "Improve tone",
    prompt: "Make this response more empathetic and friendly: 'Your issue is being looked into.'",
  },
  {
    id: "sug-6",
    label: "Write follow-up",
    prompt: "Write a follow-up email for a customer who hasn't responded in 3 days.",
  },
];

// ─── Copilot Performance Stats ────────────────────────────────────────────────

export const COPILOT_STATS = [
  { label: "Responses Today",    value: "342",   accent: "text-violet-400" },
  { label: "Avg. Response Time", value: "1.2s",  accent: "text-blue-400" },
  { label: "Accuracy Score",     value: "96.8%", accent: "text-emerald-400" },
  { label: "Time Saved",         value: "4.2 hrs", accent: "text-amber-400" },
];

// ─── Simulated AI responses for demo ─────────────────────────────────────────

export const DEMO_RESPONSES: Record<string, string> = {
  default:
    "I've analyzed your request and here's my suggested response:\n\n\"Thank you for reaching out to OmniHub AI support! I understand you're looking for assistance with your account. I'd be happy to help you resolve this quickly. Could you please provide your account email so I can pull up your details?\"\n\nWould you like me to refine this further or adjust the tone?",
  pricing:
    "Here's a professional pricing response:\n\n\"Hi! Thanks for your interest in OmniHub AI. Our plans start at $29/month for the Starter plan, which includes 5 team seats and 2,500 AI credits. Our most popular Pro plan is $79/month and includes unlimited channels, 10,000 AI credits, and priority support.\n\nWould you like to schedule a quick demo to see which plan fits your needs best?\"\n\nShall I add anything else?",
  translate:
    "Here's the translated message:\n\n**Spanish:** \"Gracias por su paciencia. Estamos trabajando en su solicitud y le daremos una actualización muy pronto.\"\n\n**Portuguese:** \"Obrigado pela sua paciência. Estamos trabalhando na sua solicitação e daremos uma atualização em breve.\"\n\nWould you like me to translate to any other language?",
};
