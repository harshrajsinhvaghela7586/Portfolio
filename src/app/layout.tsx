import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Harshrajsinh Vaghela | MERN Stack Developer",
    template: "%s | Harshrajsinh Vaghela",
  },
  description:
    "Professional developer portfolio of Harshrajsinh Vaghela, a MERN Stack Developer building production-style full-stack web applications with React, Next.js, Node.js, MongoDB, authentication, payments, admin dashboards, and deployment.",
  keywords: [
    "Harshrajsinh Vaghela",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "TypeScript Developer",
    "Ahmedabad Developer",
    "E-Commerce Developer",
  ],
  authors: [{ name: "Harshrajsinh Vaghela" }],
  creator: "Harshrajsinh Vaghela",
  publisher: "Harshrajsinh Vaghela",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Harshrajsinh Vaghela | MERN Stack Developer",
    description:
      "MERN Stack Developer focused on production-style full-stack applications with authentication, payments, dashboards, APIs, and deployment.",
    type: "website",
    locale: "en_IN",
    siteName: "Harshrajsinh Vaghela Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshrajsinh Vaghela | MERN Stack Developer",
    description:
      "MERN Stack Developer building production-style full-stack web applications.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}