import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { certifications, profile } from "@/lib/data";
import { CertViewer } from "./CertViewer";

interface Props {
  params: Promise<{ slug: string }>;
}

function getCert(slug: string) {
  return certifications.find((c) => c.slug === slug) ?? null;
}

export function generateStaticParams() {
  return certifications
    .filter((c) => c.slug)
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCert(slug);
  if (!cert) return {};
  return {
    title: `${cert.title} — ${profile.name}`,
    description: `${cert.title} issued by ${cert.issuer} (${cert.date})`,
  };
}

export default async function CertPage({ params }: Props) {
  const { slug } = await params;
  const cert = getCert(slug);
  if (!cert || !cert.credentialUrl) notFound();

  return (
    <CertViewer
      title={cert.title}
      issuer={cert.issuer}
      date={cert.date}
      url={cert.credentialUrl}
    />
  );
}
