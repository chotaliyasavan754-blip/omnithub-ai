export interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar: string;
  timezone: string;
  language: string;
  title: string;
  bio: string;
  phone: string;
  location: string;
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

export const USER_PROFILE: UserProfile = {
  name: "John Doe",
  email: "john@omnihub.ai",
  role: "Admin",
  avatar: "JD",
  timezone: "America/New_York",
  language: "English (US)",
  title: "Lead Frontend Architect",
  bio: "I love building scalable and beautiful SaaS applications.",
  phone: "+1 (555) 123-4567",
  location: "New York, USA",
  socials: {
    twitter: "@johndoe",
    github: "johndoe",
    linkedin: "in/johndoe",
  }
};
