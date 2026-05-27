export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Responsive UI",
      "SaaS UI Design",
"Performance Optimization",
    ],
  },
  {
  category: "Backend",
  skills: [
    "Node.js",
    "Express.js",
    "Next.js API Routes",
    "REST APIs",
    "Server-side Logic",
    "API Testing",
    "Python",
    "Django",
    "Firebase Firestore",
  ],
},
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Firebase"],
  },
  {
    category: "Authentication & Security",
    skills: [
      "JWT",
      "Bcrypt",
      "Protected Routes",
      "Role-Based Access Control",
      "Authorization",
    ],
  },
  {
    category: "Payments & Integrations",
    skills: [
      "Stripe",
      "Stripe Webhooks",
      "Cloudinary",
      "Nodemailer",
      "Google Gemini API",
    ],
  },
  {
    category: "Mobile Development",
    skills: ["React Native", "Mobile UI", "Reusable Screens"],
  },
  {
    category: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "VS Code",
      "Environment Variables",
    ],
  },
  {
    category: "Production Skills",
    skills: [
      "Build Debugging",
      "Deployment Debugging",
      "Webhook Debugging",
      "Clean Project Structure",
      "Reusable Components",
      "Docker Basics",
      "GitHub Actions Basics",
      "Linux Basics",
      "Lighthouse Optimization",
"AI Integration",
"SaaS Architecture",
    ],
  },
];