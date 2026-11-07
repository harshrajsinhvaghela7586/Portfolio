export type Tier = {
  key: string;
  title: string;
  note: string;
  items: string[];
};

// Grouped by how deep the experience goes, so nothing is oversold.
export const tiers: Tier[] = [
  {
    key: "daily",
    title: "Daily drivers",
    note: "What I reach for first and use every week.",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT & cookies",
      "Tailwind CSS",
      "HTML & CSS",
      "React Native",
      "Expo",
      "Git & GitHub",
    ],
  },
  {
    key: "projects",
    title: "Used in projects",
    note: "Integrated and shipped, not just read about.",
    items: [
      "Stripe & webhooks",
      "Gemini API",
      "Google OAuth",
      "Cloudinary",
      "Nodemailer",
      "PostgreSQL",
      "Firebase",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Render",
      "Postman",
    ],
  },
  {
    key: "foundations",
    title: "Foundations",
    note: "Comfortable with the basics, still learning.",
    items: ["Linux (Ubuntu)", "Python (basic)", "AWS fundamentals", "MongoDB Atlas"],
  },
];

export const bigMarquee = [
  "Full-stack",
  "Next.js",
  "Node.js",
  "React Native",
  "MongoDB",
  "TypeScript",
  "AI features",
] as const;

export const pipeline = [
  { step: "01", title: "Push", sub: "Feature branch, pull request and review before anything reaches main" },
  { step: "02", title: "Build & test", sub: "GitHub Actions runs the checks on every push" },
  { step: "03", title: "Deploy", sub: "Vercel for the frontend, Render for the API" },
] as const;

export const certs = [
  {
    title: "IBM DevOps and Software Engineering",
    issuer: "Professional Certificate · IBM via Coursera",
    url: "https://www.credly.com/badges/074c104d-bbeb-4a92-bfd4-b27a2e2bfea1/public_url",
  },
  {
    title: "AWS Academy Graduate, Cloud Architecting",
    issuer: "AWS Academy via Credly",
    url: "https://www.credly.com/badges/254273f1-8471-4773-a3f4-a2e33916725b/public_url",
  },
] as const;