# Harshrajsinh Vaghela - Developer Portfolio

Professional developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Live Demo

Live portfolio link will be added after deployment.

## About

This portfolio presents my work as a MERN Stack Developer focused on building production-style full-stack applications with authentication, admin dashboards, payments, file uploads, email notifications, APIs, and deployment-ready implementation.

## Featured Project

### TechStore MERN - Full Stack E-Commerce Platform

A production-style e-commerce platform with:

- User registration and login
- JWT authentication
- Protected routes
- Database-based cart system
- Product browsing and search
- Stripe Checkout integration
- Stripe webhook-based order creation
- Order history
- Invoice PDF download
- Email confirmation using Nodemailer
- Admin dashboard
- Product CRUD
- Cloudinary image upload
- Order management
- User management
- Vercel deployment

## Portfolio Sections

- Hero
- About
- Skills
- Projects
- Project Timeline
- Education
- Contact
- Footer

## Tech Stack

- Next.js
- TypeScript
- React.js
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel

## Project Structure

```txt
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectTimeline.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── SectionHeading.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   └── lib/
│       └── utils.ts
├── public/
│   ├── resume.pdf
│   └── projects/
│       ├── techstore.png
│       ├── smart-campus-mern.png
│       ├── digital-wardrobe.png
│       └── smart-campus-react-native.png
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md