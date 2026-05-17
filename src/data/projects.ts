export type ProjectStatus = "Live" | "Coming Soon";

export type Project = {
  name: string;
  date: string;
  description: string;
  image: string;
  features: string[];
  techStack: string[];
  github: string;
  liveDemo: string;
  status: ProjectStatus;
  isFeatured?: boolean;
};

export const projects: Project[] = [
  {
    name: "TechStore MERN - Full Stack E-Commerce Platform",
    date: "May 2026",
    description:
      "A production-style e-commerce platform with user authentication, database cart, Stripe checkout, webhook-based order creation, invoice download, email confirmation, admin dashboard, image uploads, and Vercel deployment.",
    image: "/projects/techstore.png",
    features: [
      "User registration and login",
      "JWT authentication and protected routes",
      "Secure password hashing using Bcrypt",
      "Product browsing and search",
      "Product details page",
      "Database-based cart system",
      "Stripe Checkout payment flow",
      "Stripe webhook order creation",
      "Order history",
      "Invoice PDF download",
      "Email confirmation using Nodemailer",
      "Admin dashboard",
      "Product CRUD",
      "Cloudinary image upload",
      "Order management",
      "User management",
      "Block/delete users",
      "Production deployment on Vercel",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Cloudinary",
      "Tailwind CSS",
      "Shadcn UI",
      "JWT",
      "Bcrypt",
      "Nodemailer",
      "Vercel",
    ],
    github: "https://github.com/harshrajsinhvaghela7586/TechStore-MERN",
    liveDemo: "https://tech-store-mern.vercel.app",
    status: "Live",
    isFeatured: true,
  },
  {
    name: "Smart Campus Assistant - MERN",
    date: "Apr 2026 - May 2026",
    description:
      "A MERN-based smart campus management system for students, faculty, timetable, notifications, results, ranking, and admin workflows.",
    image: "/projects/smart-campus-mern.png",
    features: [
      "Role-based authentication",
      "Student, faculty, and admin workflows",
      "Timetable management",
      "Lecture change workflow planning",
      "Notification system",
      "Result management",
      "Ranking system",
      "Admin dashboard",
      "MongoDB database integration",
      "REST API structure",
    ],
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "REST APIs",
      "Tailwind CSS",
      "Postman",
    ],
    github: "https://github.com/harshrajsinhvaghela7586/Smart-Campus-Assistant-MERN",
    liveDemo: "https://smart-campus-assistant-eight.vercel.app",
    status: "Coming Soon",
  },
  {
  name: "Digital Wardrobe Assistant",
  date: "Jan 2026 - Feb 2026",
  description:
    "A Django-based full-stack wardrobe management application that helps users organize clothing items, manage categories, plan outfits, and get outfit suggestions.",
  image: "/projects/digital-wardrobe.png",
  features: [
    "Add and manage wardrobe items",
    "Categorize clothing items",
    "Outfit planning",
    "Smart outfit suggestions",
    "User-friendly dashboard",
    "Django-based backend structure",
    "Template-based frontend pages",
    "Database-driven wardrobe records",
  ],
  techStack: [
    "Python",
    "Django",
    "SQLite",
    "HTML",
    "CSS",
    "JavaScript",
    "Google Gemini API",
  ],
  github: "",
  liveDemo: "",
  status: "Coming Soon",
},
  {
    name: "Smart Campus Assistant - React Native",
    date: "Mar 2026 - Apr 2026",
    description:
      "A mobile-first campus assistant application built with React Native for students to access campus-related features on mobile.",
    image: "/projects/smart-campus-react-native.png",
    features: [
      "Mobile-first campus assistant",
      "Student dashboard",
      "Campus information access",
      "Notifications UI",
      "Clean React Native screens",
      "Responsive mobile experience",
      "Backend-driven workflow planning",
    ],
    techStack: ["React Native", "JavaScript", "Node.js", "MongoDB"],
    github: "",
    liveDemo: "",
    status: "Coming Soon",
  },
];

export const timelineProjects = [
 {
  period: "Jan 2026 - Feb 2026",
  title: "Digital Wardrobe Assistant",
  description:
    "Built a Django-based wardrobe management application with item organization, outfit planning, and smart suggestion flow.",
},
  {
    period: "Mar 2026 - Apr 2026",
    title: "Smart Campus Assistant - React Native",
    description:
      "Created a mobile-first campus assistant application using React Native.",
  },
  {
    period: "Apr 2026 - May 2026",
    title: "Smart Campus Assistant - MERN",
    description:
      "Developed a MERN-based campus management system with role-based workflows, timetable, notifications, and results.",
  },
  {
    period: "May 2026",
    title: "TechStore MERN",
    description:
      "Built a production-style e-commerce platform with Stripe, admin dashboard, database cart, invoices, emails, and deployment.",
  },
];