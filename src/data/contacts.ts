import type { Contact, ContactTag, ContactStatus } from "@/types";
import { AVATAR_GRADIENT_COLORS } from "@/constants/theme";

// ─── Raw Data Pools ───────────────────────────────────────────────────────────

const FIRST_NAMES = [
  "Olivia", "Liam", "Emma", "Noah", "Ava", "Ethan", "Sophia", "Mason",
  "Isabella", "Lucas", "Mia", "James", "Charlotte", "Benjamin", "Amelia",
  "Henry", "Harper", "Daniel", "Evelyn", "Jack",
];

const LAST_NAMES = [
  "Bennett", "Carter", "Diaz", "Ellison", "Foster", "Grant", "Hayes",
  "Irwin", "Jensen", "Kruger", "Lambert", "Monroe", "Nakamura", "Ortiz",
  "Parker", "Quinn", "Reyes", "Sutton", "Turner", "Vance",
];

const COMPANIES = [
  "Northwind Labs", "Vertex Studio", "Brightline Co.", "Pixel & Co",
  "Lumen Systems", "Forge Analytics", "Cobalt Works", "Skyline Ventures",
  "Nimbus Cloud", "Orbital Group", "Cedarwood Inc.", "Mosaic Partners",
  "Driftwood Media", "Pinnacle Tech", "Harbor & Stone", "Quantum Grid",
  "Lighthouse Labs", "Granite Path", "Solstice Co", "Meridian Group",
];

const TAG_POOL: ContactTag[] = ["VIP", "Lead", "Customer", "Trial"];
const STATUS_POOL: ContactStatus[] = ["Active", "Pending", "Blocked"];

const LAST_MESSAGES = [
  "Thanks for the quick turnaround!",
  "Can we schedule a call this week?",
  "Following up on the proposal.",
  "Looks great, approved on our end.",
  "Still reviewing the contract.",
  "Let's revisit this next quarter.",
  "Invoice received, processing payment.",
  "Excited to get started!",
  "Need a few changes before we sign.",
  "No response yet, will follow up.",
];

// ─── Seeded RNG ───────────────────────────────────────────────────────────────

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

// ─── Generator ────────────────────────────────────────────────────────────────

export function generateContacts(count: number): Contact[] {
  const rand = seededRandom(42);
  const contacts: Contact[] = [];

  for (let i = 0; i < count; i++) {
    const firstName = FIRST_NAMES[i % FIRST_NAMES.length];
    const lastName = LAST_NAMES[i % LAST_NAMES.length];
    const company = COMPANIES[i % COMPANIES.length];

    const tagCount = 1 + Math.floor(rand() * 2);
    const tags = Array.from(
      new Set(
        Array.from({ length: tagCount }, () => TAG_POOL[Math.floor(rand() * TAG_POOL.length)])
      )
    );

    const status = STATUS_POOL[Math.floor(rand() * 10) % STATUS_POOL.length];
    const phoneSuffix = `${100 + Math.floor(rand() * 900)}-${1000 + Math.floor(rand() * 9000)}`;

    contacts.push({
      id: `contact-${i + 1}`,
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company
        .toLowerCase()
        .replace(/[^a-z]/g, "")
        .slice(0, 10)}.com`,
      phone: `+1 (415) ${phoneSuffix}`,
      company,
      tags,
      status,
      lastMessage: LAST_MESSAGES[i % LAST_MESSAGES.length],
      avatar: `${firstName[0]}${lastName[0]}`,
      avatarColor: AVATAR_GRADIENT_COLORS[i % AVATAR_GRADIENT_COLORS.length],
    });
  }

  return contacts;
}

export const ALL_CONTACTS: Contact[] = generateContacts(20);
