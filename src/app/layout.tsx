import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono, Caveat } from "next/font/google";
import { profile } from "@/data/profile";
import "@/styles/base.css";
import "@/styles/components.css";
import "@/styles/sections.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL in Vercel to your real domain so share previews use absolute URLs.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const title = `${profile.name} | Full Stack Developer`;
const description =
  "Full-stack developer in Ahmedabad building web apps, mobile apps and AI features with Next.js, Node.js, MongoDB and React Native. Available for full-time roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  keywords: [
    "Harshrajsinh Vaghela",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Native Developer",
    "Node.js Developer",
    "Ahmedabad",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: profile.name,
    title,
    description,
    images: [{ url: "/og/og.png", width: 1200, height: 630, alt: `${profile.name}, Full Stack Developer` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

// Runs before first paint: marks the page as JS-capable (so reveal animations may hide content)
// and skips the intro curtain on repeat visits in the same tab.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('hv-seen')){d.classList.add('no-curtain')}else{sessionStorage.setItem('hv-seen','1')}}catch(e){}setTimeout(function(){if(!d.classList.contains('is-ready')){d.classList.remove('js')}},6000)})();`;

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressCountry: "IN" },
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  worksFor: { "@type": "Organization", name: "Visezy Solutions Pvt. Ltd." },
  alumniOf: { "@type": "CollegeOrUniversity", name: "LJ University" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${mono.variable} ${hand.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
