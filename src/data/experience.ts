export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Visezy Solutions Pvt. Ltd.",
    role: "Software Developer Intern",
    duration: "June 2026 – Present",
    location: "Remote",
    description:
      "Working as a Full Stack Developer on production-grade web applications, contributing to both frontend and backend development using modern web technologies.",

    highlights: [
      "Developed and maintained the frontend and backend of the company's two primary websites using Next.js, React.js, Node.js, Express.js, MongoDB, TypeScript, and Tailwind CSS.",
      "Working on live client projects by building new features, resolving production issues, and implementing UI/UX improvements.",
      "Built responsive user interfaces from Figma designs with reusable and scalable components.",
      "Developed REST APIs, integrated dynamic functionality, and improved application architecture.",
      "Improved Google Lighthouse Performance from 69 to 99 through performance optimization, image optimization, and accessibility improvements.",
      "Managed production deployments, hosting, and environment configuration to ensure reliable releases.",
      "Collaborated with senior developers using Git, feature branches, pull requests, and code reviews.",
    ],
  },
];