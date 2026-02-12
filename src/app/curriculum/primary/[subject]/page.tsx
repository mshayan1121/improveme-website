import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QualificationSubjectPage } from "../../_components/QualificationSubjectPage";
import {
  getQualificationSubjectContent,
  SUBJECTS_BY_LEVEL,
} from "../../_data/qualification-subjects.content";
import type { SubjectKey } from "../../_data/qualification-subjects";

export function generateStaticParams() {
  return SUBJECTS_BY_LEVEL.primary.map((subject) => ({ subject }));
}

export async function generateMetadata({
  params,
}: {
  params: { subject: string };
}): Promise<Metadata> {
  const subject = params.subject as SubjectKey;
  const content = getQualificationSubjectContent("primary", subject);
  if (!content) return { title: "Primary Curriculum | Improve ME Institute Dubai" };

  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
  };
}

export default function PrimarySubjectPage({
  params,
}: {
  params: { subject: string };
}) {
  const subject = params.subject as SubjectKey;
  const content = getQualificationSubjectContent("primary", subject);
  if (!content) notFound();

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/curriculum/primary", label: "Primary Curriculum" },
    { label: content.subject.label },
  ];

  return <QualificationSubjectPage content={content} breadcrumbs={breadcrumbs} />;
}

