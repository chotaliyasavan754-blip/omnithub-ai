export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed: string;
  expiresAt: string | null;
  status: "Active" | "Revoked" | "Expired";
}

export const API_KEYS: ApiKey[] = [
  {
    id: "ak-1",
    name: "Production Website",
    key: "omni_live_8f92j3n4k5m6p7q8r9s0t1u2v3w4x5y6",
    createdAt: "2023-10-15",
    lastUsed: "Just now",
    expiresAt: null,
    status: "Active",
  },
  {
    id: "ak-2",
    name: "Staging Environment",
    key: "omni_test_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    createdAt: "2023-11-20",
    lastUsed: "2 hours ago",
    expiresAt: "2024-11-20",
    status: "Active",
  },
  {
    id: "ak-3",
    name: "Developer Laptop (John)",
    key: "omni_dev_z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4",
    createdAt: "2023-08-01",
    lastUsed: "1 month ago",
    expiresAt: "2023-12-01",
    status: "Expired",
  },
];
