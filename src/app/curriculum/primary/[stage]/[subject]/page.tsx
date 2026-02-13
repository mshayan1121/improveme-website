import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QualificationSubjectPage } from "../../../_components/QualificationSubjectPage";
import {
  getQualificationSubjectContent,
  SUBJECTS_BY_LEVEL,
} from "../../../_data/qualification-subjects.content";
import type { QualificationKey, SubjectKey } from "../../../_data/qualification-subjects";

const PRIMARY_STAGES: Array<"eyfs" | "ks1" | "ks2"> = ["eyfs", "ks1", "ks2"];

export function generateStaticParams() {
  return PRIMARY_STAGES.flatMap((stage) =>
    (SUBJECTS_BY_LEVEL[stage] as SubjectKey[]).map((subject) => ({
      stage,
      subject,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stage: string; subject: string }>;
}): Promise<Metadata> {
  const { stage, subject } = await params;
  const stageKey = stage as "eyfs" | "ks1" | "ks2";
  const subjectKey = subject as SubjectKey;
  if (!PRIMARY_STAGES.includes(stageKey)) return { title: "Primary Curriculum | Improve ME Institute Dubai" };
  const content = getQualificationSubjectContent(stageKey, subjectKey);
  if (!content) return { title: "Primary Curriculum | Improve ME Institute Dubai" };

  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
  };
}

export default async function PrimaryStageSubjectPage({
  params,
}: {
  params: Promise<{ stage: string; subject: string }>;
}) {
  const { stage, subject } = await params;
  const stageKey = stage as "eyfs" | "ks1" | "ks2";
  const subjectKey = subject as SubjectKey;
  if (!PRIMARY_STAGES.includes(stageKey)) notFound();
  const content = getQualificationSubjectContent(stageKey, subjectKey);
  if (!content) notFound();

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/curriculum/primary", label: "Primary Curriculum" },
    { href: `/curriculum/primary/${stageKey}`, label: content.qualification.label },
    { label: content.subject.label },
  ];

  return <QualificationSubjectPage content={content} breadcrumbs={breadcrumbs} />;
}
