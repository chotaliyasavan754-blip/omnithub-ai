export type TeamRole = "Admin" | "Manager" | "Member" | "Viewer";

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: TeamRole;
  avatar: string;
  status: "Active" | "Invited" | "Suspended";
  lastActive: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm-1",
    name: "John Doe",
    email: "john@omnihub.ai",
    role: "Admin",
    avatar: "JD",
    status: "Active",
    lastActive: "Just now",
  },
  {
    id: "tm-2",
    name: "Sarah Chen",
    email: "sarah@omnihub.ai",
    role: "Manager",
    avatar: "SC",
    status: "Active",
    lastActive: "2 hrs ago",
  },
  {
    id: "tm-3",
    name: "Michael Johnson",
    email: "michael@omnihub.ai",
    role: "Member",
    avatar: "MJ",
    status: "Active",
    lastActive: "1 day ago",
  },
  {
    id: "tm-4",
    name: "Emily Rodriguez",
    email: "emily@omnihub.ai",
    role: "Member",
    avatar: "ER",
    status: "Active",
    lastActive: "3 days ago",
  },
  {
    id: "tm-5",
    name: "David Kim",
    email: "david@omnihub.ai",
    role: "Viewer",
    avatar: "DK",
    status: "Invited",
    lastActive: "Never",
  },
];
