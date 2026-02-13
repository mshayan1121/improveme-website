import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Calculator, BookOpen, Microscope } from "lucide-react";
import { SUBJECTS_BY_LEVEL } from "../../_data/qualification-subjects.content";
import { QUALIFICATIONS } from "../../_data/qualification-subjects";
import type { QualificationKey, SubjectKey } from "../../_data/qualification-subjects";

const STAGES: Array<"eyfs" | "ks1" | "ks2"> = ["eyfs", "ks1", "ks2"];

const SUBJECT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  mathematics: Calculator,
  english: BookOpen,
  science: Microscope,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stage: string }>;
}): Promise<Metadata> {
  const { stage } = await params;
  const key = stage as "eyfs" | "ks1" | "ks2";
  if (!STAGES.includes(key)) return { title: "Primary Curriculum | Improve ME Institute Dubai" };
  const qual = QUALIFICATIONS[key];
  return {
    title: `${qual.label} Curriculum | Improve ME Institute Dubai`,
    description: `${qual.label} tutoring in Dubai. ${qual.age}. ${qual.badge}.`,
  };
}

export default async function PrimaryStagePage({
  params,
}: {
  params: Promise<{ stage: string }>;
}) {
  const { stage } = await params;
  const stageKey = stage as "eyfs" | "ks1" | "ks2";
  if (!STAGES.includes(stageKey)) notFound();

  const qual = QUALIFICATIONS[stageKey];
  const subjects = (SUBJECTS_BY_LEVEL[stageKey as QualificationKey] ?? []) as SubjectKey[];

  return (
    <article className="min-h-screen">
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm">
            <li>
              <Link href="/" className="text-navy-600 hover:text-navy-900">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/curriculum/primary" className="text-navy-600 hover:text-navy-900">Primary Curriculum</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-navy-900 font-medium">{qual.label}</li>
          </ol>
        </div>
      </nav>

      <section
        className={`relative bg-gradient-to-br ${qual.gradientClassName} chevron-pattern py-24 md:py-32 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{qual.label} Curriculum</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">{qual.age} • {qual.badge}</p>
          <Link
            href="/curriculum/primary"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            Back to Primary
          </Link>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">Subjects</h2>
          <p className="text-navy-600 text-center mb-10">Choose a subject to see course details and how we can help.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {subjects.map((sub) => {
              const Icon = SUBJECT_ICONS[sub] ?? BookOpen;
              return (
                <Link
                  key={sub}
                  href={`/curriculum/primary/${stageKey}/${sub}`}
                  className="block h-full"
                >
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-xl hover:scale-105 transition-all">
                    <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-gray-200">
                      <Icon className="w-8 h-8 text-navy-900" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 text-center capitalize">
                      {sub.replace("-", " ")}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-navy-600 text-sm mt-2">
                      <span>View {qual.label} {sub.replace("-", " ")}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
