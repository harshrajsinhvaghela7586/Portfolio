export type Project = {
  no: string;
  title: string;
  kicker: string;
  date: string;
  status: "Live" | "Private repo";
  blurb: string;
  points: string[];
  stack: string[];
  github?: string;
  live?: string;
  shot: {
    base: string; // file name stem inside /public/projects
    widths: number[];
    w: number;
    h: number;
    alt: string;
    kind: "browser" | "phone";
    url?: string;
  };
};

export const projects: Project[] = [
  {
    no: "01",
    title: "SpendPilot",
    kicker: "AI spend optimisation platform",
    date: "May 2026",
    status: "Live",
    blurb:
      "Teams pay for a pile of AI tools and rarely check what overlaps. SpendPilot audits the stack, compares plans and tells you what to cut.",
    points: [
      "Gemini-written insights from the tools and seats you enter.",
      "Monthly and annual savings maths, with a pricing comparison engine.",
      "Shareable audit reports stored in Firebase.",
      "Dark dashboard UI tuned for Lighthouse.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Gemini API", "shadcn/ui", "Vercel"],
    github: "https://github.com/harshrajsinhvaghela7586/spendpilot-ai-audit",
    live: "https://spendpilot-ai-audit-wheat.vercel.app/",
    shot: {
      base: "spendpilot",
      widths: [900, 1600],
      w: 1600,
      h: 866,
      alt: "SpendPilot landing page: Stop overpaying for AI tools",
      kind: "browser",
      url: "spendpilot-ai-audit.vercel.app",
    },
  },
  {
    no: "02",
    title: "TechStore",
    kicker: "Full-stack e-commerce",
    date: "May 2026",
    status: "Live",
    blurb:
      "A complete store from sign-up to invoice: database-backed cart, Stripe Checkout, webhook-created orders and an admin panel.",
    points: [
      "JWT auth, bcrypt hashing, protected routes and role checks.",
      "Stripe webhooks create the order, then Nodemailer sends the confirmation.",
      "Invoice PDF download and order history.",
      "Admin: product CRUD with Cloudinary uploads, orders, block or delete users.",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Stripe", "Cloudinary", "JWT", "Nodemailer"],
    github: "https://github.com/harshrajsinhvaghela7586/TechStore-MERN",
    live: "https://tech-store-mern.vercel.app",
    shot: {
      base: "techstore",
      widths: [900, 1600],
      w: 1600,
      h: 856,
      alt: "TechStore home page with a featured mechanical keyboard",
      kind: "browser",
      url: "tech-store-mern.vercel.app",
    },
  },
  {
    no: "03",
    title: "Smart Campus Assistant",
    kicker: "MERN · web",
    date: "Apr – May 2026",
    status: "Live",
    blurb:
      "One system for students, faculty and admins: timetables, attendance, results, rankings and notifications, split by role.",
    points: [
      "Role-based auth with separate student, faculty and admin flows.",
      "Timetable and lecture-change workflow, results and ranking.",
      "Frontend on Vercel, API on Render, data on MongoDB Atlas.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS", "Render"],
    github: "https://github.com/harshrajsinhvaghela7586/Smart-Campus-Assistant-MERN",
    live: "https://smart-campus-assistant-eight.vercel.app",
    shot: {
      base: "smart-campus-mern",
      widths: [900, 1600],
      w: 1600,
      h: 872,
      alt: "Smart Campus Assistant web landing page",
      kind: "browser",
      url: "smart-campus-assistant.vercel.app",
    },
  },
  {
    no: "04",
    title: "Smart Campus Assistant",
    kicker: "React Native · mobile",
    date: "Mar – Apr 2026",
    status: "Private repo",
    blurb:
      "The same campus system rebuilt as a phone-first app, so the timetable and notices are one thumb away.",
    points: [
      "Student dashboard, campus information and notifications.",
      "Clean, reusable screens on the shared Node and MongoDB backend.",
    ],
    stack: ["React Native", "JavaScript", "Node.js", "MongoDB"],
    shot: {
      base: "smart-campus-react-native",
      widths: [640],
      w: 640,
      h: 1293,
      alt: "Smart Campus Assistant mobile app home screen",
      kind: "phone",
    },
  },
  {
    no: "05",
    title: "Digital Wardrobe",
    kicker: "AI wardrobe assistant",
    date: "Jan – Feb 2026",
    status: "Private repo",
    blurb:
      "Organise what you own, plan outfits and get suggestions, with a membership tier and an admin dashboard behind it.",
    points: [
      "Django app with a CLIP and Gemini powered suggestion flow.",
      "Stripe-backed membership and an admin dashboard.",
      "Containerised with Docker so it runs the same everywhere.",
    ],
    stack: ["Python", "Django", "CLIP", "Gemini API", "Stripe", "Docker"],
    shot: {
      base: "digital-wardrobe",
      widths: [900, 1600],
      w: 1600,
      h: 860,
      alt: "Digital Wardrobe landing page over a photo of a clothes rack",
      kind: "browser",
      url: "digital-wardrobe",
    },
  },
];
