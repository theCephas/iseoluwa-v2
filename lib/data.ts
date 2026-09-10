// ─── Types ──────────────────────────────────────────────────────────────────

export interface Profile {
  name: string;
  nameFormatted: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  links: {
    linkedin: string; // TODO: replace with exact LinkedIn URL
    github: string;
    portfolio: string; // TODO: update if new URL changes
    cv: string; // TODO: drop resume.pdf into /public
  };
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
  companyUrl?: string;
}

export interface Project {
  name: string;
  url: string;
  date: string;
  description: string;
  highlights: string[];
  tech: string[];
  featured?: boolean; // true = shown on page; false = in "View more" modal
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  slug?: string; // used for /cert/[slug] shareable URL
  credentialUrl?: string;
  credentialId?: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  field: string;
  graduationDate: string;
  gpa?: { scale: string; value: string }[];
}

// ─── Content ─────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Iseoluwa Osho",
  nameFormatted: "Osho, Iseoluwa",
  title: "Full Stack Engineer",
  location: "Yaba, Lagos, Nigeria",
  email: "oshoiseoluwa@gmail.com",
  phone: "+234 811 047 0908",
  summary:
    "A full stack engineer with a record of building scalable, user-centred web applications — from real-time dashboards and fintech platforms to AI-driven compliance systems. Committed to clean architecture, minimal technical debt, and adapting quickly to an ever-evolving technological landscape.",
  links: {
    linkedin: "https://linkedin.com/in/osho-iseoluwa",
    github: "https://github.com/theCephas",
    portfolio: "https://oshoiseoluwa.vercel.app",
    cv: "/resume.pdf",
  },
};

export const experience: Experience[] = [
  {
    company: "Sage-Grey Technologies",
    role: "Full Stack Engineer",
    startDate: "December 2025",
    endDate: "Present",
    location: "Nigeria",
    highlights: [
      "Engineering an AI-driven platform for compliance, verification, and consultation — built on a NestJS/Node.js backend and a Next.js/TypeScript frontend, designed for scale from the ground up.",
      "Architecting automated workflows that streamline complex regulatory adherence processes, ensuring robust data integrity and alignment with global compliance benchmarks.",
      "Contributing end-to-end: system architecture, database design, and deployment — maintaining code quality standards and eliminating technical debt throughout.",
    ],
  },
  {
    company: "Borges Technology",
    role: "Full Stack Engineer",
    startDate: "September 2025",
    endDate: "December 2025",
    location: "Nigeria (Contract)",
    highlights: [
      "Restructured a Next.js + TypeScript + Tailwind CSS + shadcn codebase to meet the company's requirements for further scale.",
      "Applied industry-standard practices to systematically clear accumulated technical debt.",
      "Worked across teams spanning deployments, frontend architecture, database structures, server implementations, and research beyond the usual scope.",
    ],
  },
  {
    company: "Mother and Child Health Project",
    companyUrl: "https://motherandchildhealthproject.com",
    role: "IT Manager (Volunteer)",
    startDate: "2023",
    endDate: "Present",
    location: "Nigeria (Remote)",
    highlights: [
      "Leading the IT team as volunteer IT Manager — responsible for building and managing the NGO's website, web infrastructure, email systems, and all technical operations.",
      "Maintains and evolves the public-facing platform for an organisation whose mission is raising global awareness on maternal and child health and educating communities on preventive measures to mitigate maternal and child mortality.",
      "Ensures the site remains accessible, performant, and up-to-date for a broad, international user base.",
    ],
  },
  {
    company: "Utiva",
    role: "Full Stack Engineer",
    startDate: "May 2025",
    endDate: "November 2025",
    location: "Nigeria",
    highlights: [
      "Built internal products using Node.js, React, TypeScript, and Zustand for state management, styled with Tailwind CSS.",
      "Delivered internal tooling for the company's operational use, collaborating within structured, cross-functional product teams.",
      "Helped establish and uphold engineering standards that improved team consistency and product delivery velocity.",
    ],
  },
  {
    company: "Fonu Telconix",
    role: "Frontend Developer",
    startDate: "August 2023",
    endDate: "September 2024",
    location: "Nigeria",
    highlights: [
      "Revamped and restructured an existing codebase, improving maintainability and developer experience.",
      "Consumed third-party APIs using React.js, Next.js, and TypeScript to surface dynamic, data-rich interfaces.",
      "Contributed to building a product legacy in the Nigerian telecommunications space.",
    ],
  },
  {
    company: "Link Technologies",
    role: "Frontend Developer",
    startDate: "January 2023",
    endDate: "June 2024",
    location: "USA (Remote)",
    highlights: [
      "Enforced visual and design integrity standards across web properties using Next.js and TypeScript.",
      "Integrated APIs to power data-driven web applications with accurate, real-time information.",
      "Built a real-time fleet management dashboard, giving users clear visibility and control over operational data.",
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
// featured: true  → shown directly on the page (first 4)
// featured: false → shown in the "View all projects" modal

export const projects: Project[] = [
  {
    name: "Pharmanalytics",
    url: "https://pharmanalytics.org",
    date: "April 2026",
    featured: true,
    description:
      "Africa's first pharmacy-specific digital health platform — built around African clinical contexts and real-world case studies, not adapted from foreign products.",
    highlights: [
      "Designed for the realities of African pharmaceutical practice, with locally-relevant clinical data and workflows.",
      "Built for an NGO with a focus on accessibility and reliability across varied network conditions.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Carpetech",
    url: "https://carpetech.xyz",
    date: "March 2026",
    featured: true,
    description:
      "A digital product studio helping organisations turn ideas into efficient products — centred on branding, design, and technology to deliver clear, purposeful, and high-performing solutions.",
    highlights: [
      "Full end-to-end product site communicating the studio's services and philosophy.",
      "Built for performance and clarity across device sizes.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Koajo",
    url: "https://github.com/theCephas/koajo-web",
    date: "Nov – Dec 2025",
    featured: true,
    description:
      "A fintech application for users in the USA enabling group and rotational contribution schemes — covering both the admin and end-user sides.",
    highlights: [
      "Built with Next.js, TypeScript, shadcn, Zustand, and TanStack Query for a performant, reactive experience.",
      "Integrated Stripe for authentication, identity verification, and all payment structures.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Zustand",
      "TanStack Query",
      "Stripe",
    ],
  },
  {
    name: "MailSweep",
    url: "https://mailsweep-web.vercel.app",
    date: "2025",
    featured: false,
    description:
      "Your inbox, edited. Clean. Calm. Controlled. Target senders, pick a time window, and clear the clutter in minutes — smart filters without the mess.",
    highlights: [
      "Personal project built to solve inbox overload with targeted sender filtering and time-window controls.",
      "Designed for simplicity: minimal UI, maximum signal-to-noise ratio.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "MyChange",
    url: "https://mychange.ng",
    date: "2025",
    featured: false,
    description:
      "A fintech platform that lets users collect change digitally using their phone number — so small amounts accumulate rather than disappear at the point of sale.",
    highlights: [
      "Built the public-facing website for a product tackling everyday micro-transaction friction in Nigeria.",
      "Clean, conversion-focused design that communicates the product value clearly.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "The Advertisers",
    url: "https://the-advertisers.com",
    date: "Apr – Jun 2024",
    featured: false,
    description:
      "An e-commerce platform connecting buyers and sellers, with full checkout functionality and product discovery features.",
    highlights: [
      "Supports seller product listings and buyer discovery flows with a clean, intuitive UX.",
      "Includes end-to-end checkout with payment integration.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Mother and Child Health Project",
    url: "https://motherandchildhealthproject.com",
    date: "2023 – Present",
    featured: false,
    description:
      "Website for a global NGO raising awareness on maternal and child health — focused on accessible navigation for a broad, international audience.",
    highlights: [
      "Built with React, JavaScript, and Tailwind CSS; includes ongoing management and updates.",
      "Optimised for accessibility and ease of use across a wide user base.",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend & Infrastructure",
    items: ["Node.js", "NestJS", "REST APIs", "Git", "Vercel"],
  },
  {
    category: "State & Data",
    items: ["Zustand", "TanStack Query", "TypeScript (strict)"],
  },
  {
    category: "AI & Emerging",
    items: [
      "AI-driven product development",
      "Building with AI in the workflow",
      "LLM integration",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Technical writing",
      "Cross-team communication",
      "Collaborative problem-solving",
    ],
  },
  {
    category: "Languages",
    items: ["English (Proficient)", "Yoruba (Conversational)"],
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
// To add a cert: duplicate an entry below and fill in the fields.
// credentialUrl should point to /certificates/<filename>.pdf

export const certifications: Certification[] = [
  {
    title: "Brixgate Certificate",
    issuer: "Brixgate",
    date: "2026",
    slug: "brixgate",
    credentialUrl: "/certificates/BRIXGATE-Certificate — Iseoluwa Osho.pdf",
  },
  {
    title: "HNG Internship Certificate",
    issuer: "HNG Tech",
    date: "2023",
    slug: "hng-internship",
    credentialUrl: "/certificates/Osho Iseoluwa_certificate_HNG.pdf",
  },
  {
    title: "DryCode Certificate",
    issuer: "DryCode",
    date: "2023",
    slug: "drycode",
    credentialUrl: "/certificates/iseoluwa_drycode_certificate.pdf",
  },
  {
    title: "Early Stemer Certificate I",
    issuer: "Early Stemer",
    date: "2022",
    slug: "early-stemer-1",
    credentialUrl: "/certificates/earlystemer_cert1.pdf",
  },
  {
    title: "Early Stemer Certificate II",
    issuer: "Early Stemer",
    date: "2022",
    slug: "early-stemer-2",
    credentialUrl: "/certificates/earlystemer_cert2.pdf",
  },
];

export const education: Education[] = [
  {
    institution: "University of Lagos",
    location: "Lagos, Nigeria",
    degree: "Bachelor of Arts",
    field: "English",
    graduationDate: "17 December 2025",
    gpa: [
      { scale: "5.0", value: "3.78" },
      { scale: "4.0", value: "3.024" },
    ],
  },
];
