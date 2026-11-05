export const profile = {
  name: "Harshrajsinh Vaghela",
  role: "Full Stack Developer",
  location: "Ahmedabad, India",
  timezone: "Asia/Kolkata",
  email: "harshrajsinhvaghela7419@gmail.com",
  phone: "+91 91042 10092",
  phoneHref: "tel:+919104210092",
  github: "https://github.com/harshrajsinhvaghela7586",
  linkedin: "https://www.linkedin.com/in/harshrajsinh-vaghela-a38bba300/",
  resume: "/Harshrajsinh_Vaghela_Resume.pdf",
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const heroStats = [
  { value: 6, suffix: "", label: "Months in industry", pad: true },
  { value: 4, suffix: "", label: "Websites shipped" },
  { value: 2, suffix: "", label: "Mobile apps" },
  { value: 99, suffix: "", label: "Lighthouse score" },
] as const;

export const roles = [
  "Web Apps",
  "Mobile Apps",
  "APIs & Admin Panels",
  "AI Chatbots",
] as const;

export const marqueeStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "React Native",
  "Gemini API",
  "Stripe",
  "Docker",
  "GitHub Actions",
] as const;

export const facts = [
  { label: "Based in", value: "Ahmedabad, India", note: "Open to on-site and remote" },
  { label: "Right now", value: "Software Developer Intern", note: "Visezy Solutions Pvt. Ltd." },
  { label: "Studying", value: "MCA, LJ University", note: "Pursuing, expected Apr 2027" },
  { label: "Languages", value: "English, Hindi, Gujarati", note: "Gujarati is native" },
] as const;

export const education = [
  { when: "Expected Apr 2027", degree: "Master of Computer Applications (MCA)", school: "LJ University", note: "Pursuing" },
  { when: "Apr 2025", degree: "Bachelor of Computer Applications (BCA)", school: "LJ University", note: "CGPA 8.47 / 10" },
] as const;
