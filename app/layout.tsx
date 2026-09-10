import type { Metadata, Viewport } from "next";
import { Playfair_Display, EB_Garamond } from "next/font/google";
import "./globals.css";
import { ExLibrisNav } from "@/components/ExLibrisNav";
import { CustomCursor } from "@/components/CustomCursor";
import { profile } from "@/lib/data";

// ── Fonts ──────────────────────────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

// ── SEO Metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Full Stack Engineer based in Lagos, Nigeria. Building scalable web applications, AI-driven platforms, and well-crafted digital products.",
  keywords: [
    "Full Stack Engineer",
    "Frontend Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Lagos",
    "Nigeria",
    "Iseoluwa Osho",
  ],
  authors: [{ name: profile.name, url: profile.links.portfolio }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.links.portfolio,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.title}`,
    description:
      "Full Stack Engineer based in Lagos, Nigeria. Building scalable web applications, AI-driven platforms, and well-crafted digital products.",
    // TODO: Add a real Open Graph image at /public/og-image.png (recommended 1200×630)
    // images: [{ url: "/og-image.png", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description:
      "Full Stack Engineer based in Lagos, Nigeria. Building scalable web applications, AI-driven platforms, and well-crafted digital products.",
    // TODO: Add twitter handle if you have one: creator: "@handle"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // TODO: Add a favicon set — drop favicon.ico, apple-touch-icon.png, etc. into /public
  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f1",
  colorScheme: "light",
};

// ── Layout ─────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${ebGaramond.variable}`}
    >
      <body>
        <CustomCursor />
        {/* Fixed corner navigation — Ex Libris style */}
        <ExLibrisNav />
        {children}
      </body>
    </html>
  );
}
