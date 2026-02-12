import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QualificationSubjectPage } from "../../../_components/QualificationSubjectPage";
import {
  getQualificationSubjectContent,
  SUBJECTS_BY_LEVEL,
} from "../../../_data/qualification-subjects.content";
import type { QualificationKey, SubjectKey } from "../../../_data/qualification-subjects";

type SecondaryLevelKey = Exclude<QualificationKey, "primary">;

export function generateStaticParams() {
  const levels = Object.keys(SUBJECTS_BY_LEVEL).filter((k) => k !== "primary") as SecondaryLevelKey[];

  return levels.flatMap((level) =>
    SUBJECTS_BY_LEVEL[level].map((subject) => ({
      level,
      subject,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string; subject: string }>;
}): Promise<Metadata> {
  const { level, subject } = await params;
  const levelKey = level as SecondaryLevelKey;
  const subjectKey = subject as SubjectKey;
  const content = getQualificationSubjectContent(levelKey, subjectKey);
  if (!content) return { title: "Secondary Curriculum | Improve ME Institute Dubai" };

  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
  };
}

export default async function SecondaryLevelSubjectPage({
  params,
}: {
  params: Promise<{ level: string; subject: string }>;
}) {
  const { level, subject } = await params;
  const levelKey = level as SecondaryLevelKey;
  const subjectKey = subject as SubjectKey;
  const content = getQualificationSubjectContent(levelKey, subjectKey);
  if (!content) notFound();

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/curriculum/secondary", label: "Secondary Curriculum" },
    { href: `/curriculum/secondary/${levelKey}`, label: content.qualification.label },
    { label: content.subject.label },
  ];

  return <QualificationSubjectPage content={content} breadcrumbs={breadcrumbs} />;
}

