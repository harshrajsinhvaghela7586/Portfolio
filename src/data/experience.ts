export const job = {
  company: "Visezy Solutions Pvt. Ltd.",
  role: "Software Developer Intern",
  period: "Jun 2026 – Nov 2026",
  place: "Remote",
  summary:
    "Full-stack work on production websites and mobile apps: the screen, the API behind it and the deploy that puts it live.",
  highlights: [
    "Build and maintain the frontend and backend of the company's two primary websites with Next.js, React, TypeScript, Node.js, Express and MongoDB.",
    "Turn Figma designs into responsive, reusable component systems, then ship new features and fix production issues.",
    "Design REST APIs and admin modules (blogs, SEO, leads, settings) and wire them into the UI.",
    "Cut page load from 4–5 seconds to under 2 and lifted Lighthouse performance from 69 to 99 with image work, leaner data fetching and caching.",
    "Added pagination and Load More to the heavier APIs, which cut database load and sped up responses.",
    "Own deployments and environment config on Vercel and Render, and work with senior developers through Git feature branches, pull requests and code review.",
    "Contribute to React Native and Expo apps that share the same backend.",
  ],
} as const;

export type Shipped = {
  title: string;
  kind: string;
  year: string;
  status?: string;
  /** What I personally did. Descriptive only: no links, repos or screenshots for private work. */
  role: string;
  blurb: string;
  points: string[];
  stack: string[];
};

export const shipped: Shipped[] = [
  {
    title: "Puff House",
    kind: "E-commerce platform",
    year: "2026",
    role: "Built it end to end by myself: Figma to UI, the REST API, the database, payments and the deployment.",
    blurb:
      "A complete online store for a food brand. Shoppers browse, search, pay and track orders; the team runs the catalogue and content from an admin panel.",
    points: [
      "Responsive storefront turned from Figma: catalogue and categories, debounced search, cart, wishlist, checkout and order history.",
      "Stripe Checkout with webhook-verified orders, so an order is only marked paid after Stripe confirms it.",
      "PDF invoices and branded email templates sent with Nodemailer on every order.",
      "Admin side for products, FAQs, homepage sliders and review approval.",
      "Image optimisation and lean queries that brought Lighthouse performance to around 99 and SEO to 100.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe", "Nodemailer", "JWT"],
  },
  {
    title: "Visezy Insurance",
    kind: "WordPress to Next.js migration",
    year: "2026",
    role: "Rebuilt the frontend, designed the REST API and the admin dashboard, and set up auth and deployment.",
    blurb:
      "Moved a live insurance website off WordPress onto Next.js with its own admin dashboard, for speed, better SEO and content the team can edit without a developer.",
    points: [
      "Dynamic pages, blog, policy and contact flows, all driven from the database instead of hard-coded.",
      "Admin modules for homepage, header and footer, blogs, leads, SEO settings and users.",
      "JWT access and refresh tokens in HTTP-only, SameSite cookies, with protected routes on both the API and the UI.",
      "Lead and contact notifications by email through Nodemailer.",
      "Server-rendered pages with proper metadata, which fixed the slow loads of the old site.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Nodemailer"],
  },
  {
    title: "Visezy Solutions",
    kind: "Company website",
    year: "2026",
    role: "Built the frontend and the API behind its content, and handle deployments.",
    blurb:
      "The company's own website on the Next.js App Router, where the content comes from an API so the team can change it without a deploy.",
    points: [
      "API-driven hero slider and sections that the admin updates from a dashboard.",
      "Services, about and contact pages with SEO metadata and structured data.",
      "Contact form that validates input and emails the team through Nodemailer.",
      "Smooth, responsive animations with Framer Motion, tuned to keep the Lighthouse score high.",
    ],
    stack: ["Next.js", "TypeScript", "Framer Motion", "Node.js", "Express", "MongoDB", "Nodemailer"],
  },
  {
    title: "Vinsure",
    kind: "Insurance mobile app",
    year: "2026",
    role: "Built the whole mobile app and its backend APIs, and ran the Android and iOS builds.",
    blurb:
      "A React Native app that takes a user from entering a phone number to a submitted insurance application, step by step.",
    points: [
      "OTP login with persistent sessions; navigation is driven by how far the user has got in the application.",
      "Vehicle, personal, KYC and nominee steps, with document and photo upload to Cloudinary.",
      "Referral and rewards screens.",
      "EAS builds with Android shipped first and iOS build preparation.",
      "A splash flow that never blocks on a slow API, so the app always opens quickly.",
    ],
    stack: ["React Native", "Expo", "React Navigation", "AsyncStorage", "Node.js", "Cloudinary", "Nodemailer"],
  },
  {
    title: "PetCard Website",
    kind: "Marketing site",
    year: "2026",
    role: "Designed the page structure and built the whole site, including the animated sections.",
    blurb:
      "The public website for an AI-enabled pet ID product: ten pages, a tight brand system and a few moving parts.",
    points: [
      "Features orbit: eight cards circling a static core, responsive all the way up to 4K screens.",
      "Testimonials, how-it-works, blog, FAQ and contact pages.",
      "Contact and enquiry form that emails the team through Nodemailer.",
      "Reusable, typed components on Next.js so new pages are quick to add.",
    ],
    stack: ["Next.js", "React", "TypeScript", "CSS Modules", "Nodemailer"],
  },
  {
    title: "PetCard App",
    kind: "Mobile app · MERN backend",
    year: "2026",
    role: "Built both the app and the MERN backend on my own, and now testing it on real devices through Expo Go.",
    blurb:
      "A pet-care app for profiles, health records, documents and daily care, with a game layer on top to keep owners coming back. The core features are built and it is in the testing phase.",
    points: [
      "Expo Router app with pet profiles, documents, reminders and an emergency card.",
      "Google sign-in alongside email, backed by JWT sessions.",
      "Photo and document uploads to Cloudinary.",
      "Rewards where the server owns points, XP and levels, so they can't be faked from the app.",
      "A Gemini-powered assistant that only answers pet questions.",
      "Email notifications through Nodemailer.",
      "Tested on real phones with Expo Go while bugs and rough edges get fixed.",
    ],
    stack: ["React Native", "Expo", "Expo Go", "Expo Router", "Node.js", "Express", "MongoDB", "Google OAuth", "Cloudinary", "Gemini API", "Nodemailer"],
  },
];