import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  BookOpen,
  Microscope,
  Zap,
  FlaskConical,
  Leaf,
  Briefcase,
  TrendingUp,
  Brain,
} from "lucide-react";
import { SUBJECTS_BY_LEVEL } from "../../_data/qualification-subjects.content";

type LevelKey = "ks3" | "gcse" | "igcse" | "a-level" | "ib" | "myp";

const LEVELS: Record<
  LevelKey,
  {
    label: string;
    gradient: string;
    age: string;
    badge: string;
    description: string;
  }
> = {
  ks3: {
    label: "Key Stage 3",
    gradient: "from-blue-500 to-blue-600",
    age: "Ages 11-14",
    badge: "UK National Curriculum",
    description:
      "Build strong foundations before GCSE with clear teaching, practice, and confidence-building support.",
  },
  gcse: {
    label: "GCSE",
    gradient: "from-green-500 to-green-600",
    age: "Ages 14-16",
    badge: "AQA, Edexcel, OCR",
    description:
      "Exam-board aligned teaching with topic mastery, structured revision, and past-paper technique.",
  },
  igcse: {
    label: "IGCSE",
    gradient: "from-teal-500 to-cyan-600",
    age: "Ages 14-16",
    badge: "Cambridge, Edexcel",
    description:
      "International pathway support with strong fundamentals, practical skills, and targeted exam practice.",
  },
  "a-level": {
    label: "A-Level",
    gradient: "from-purple-500 to-purple-600",
    age: "Ages 16-18",
    badge: "AQA, Edexcel, OCR",
    description:
      "Advanced level preparation with rigorous problem-solving, essay technique, and top-grade strategies.",
  },
  ib: {
    label: "IB",
    gradient: "from-indigo-500 to-indigo-600",
    age: "Ages 16-18",
    badge: "SL & HL",
    description:
      "IB support for SL/HL content, assessments, and exam strategy—built around clear structure and feedback.",
  },
  myp: {
    label: "MYP",
    gradient: "from-emerald-500 to-green-600",
    age: "Ages 11-16",
    badge: "IB Middle Years Programme",
    description:
      "Inquiry-based learning support with strong understanding, skill-building, and assessment readiness.",
  },
};

const SUBJECTS = [
  {
    slug: "mathematics",
    label: "Mathematics",
    Icon: Calculator,
  },
  {
    slug: "english",
    label: "English",
    Icon: BookOpen,
  },
  {
    slug: "science",
    label: "Science (General)",
    Icon: Microscope,
  },
  {
    slug: "physics",
    label: "Physics",
    Icon: Zap,
  },
  {
    slug: "chemistry",
    label: "Chemistry",
    Icon: FlaskConical,
  },
  {
    slug: "biology",
    label: "Biology",
    Icon: Leaf,
  },
  {
    slug: "business-studies",
    label: "Business Studies",
    Icon: Briefcase,
  },
  {
    slug: "economics",
    label: "Economics",
    Icon: TrendingUp,
  },
  {
    slug: "psychology",
    label: "Psychology",
    Icon: Brain,
  },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string }>;
}): Promise<Metadata> {
  const { level } = await params;
  const key = level as LevelKey;
  const data = LEVELS[key];

  if (!data) {
    return {
      title: "Secondary Curriculum | Improve ME Institute Dubai",
    };
  }

  return {
    title: `${data.label} Curriculum | Improve ME Institute Dubai`,
    description: `${data.label} curriculum support in Dubai. ${data.age}. ${data.badge}.`,
  };
}

export default async function SecondaryLevelCurriculumPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const key = level as LevelKey;
  const data = LEVELS[key];

  if (!data) notFound();

  const allowedSubjects = new Set(SUBJECTS_BY_LEVEL[key]);
  const visibleSubjects = SUBJECTS.filter((s) => allowedSubjects.has(s.slug as never));

  return (
    <article className="min-h-screen">
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-navy-600 hover:text-navy-900">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                href="/curriculum/secondary"
                className="text-navy-600 hover:text-navy-900"
              >
                Secondary Curriculum
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-navy-900 font-medium">{data.label}</li>
          </ol>
        </div>
      </nav>

      <section
        className={`relative bg-gradient-to-br ${data.gradient} chevron-pattern pt-32 pb-16`}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {data.label} Curriculum
            </h1>
            <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">
              {data.age} • {data.badge}
            </div>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8">
              {data.description}
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-4 text-center">
            Subjects at {data.label}
          </h2>
          <p className="text-navy-600 mb-10 text-center">
            Choose your subject to see what we cover and how we prepare students for
            assessments and exams.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleSubjects.map(({ slug, label, Icon }) => (
              <Link
                key={slug}
                href={`/curriculum/secondary/${key}/${slug}`}
                className="block h-full"
              >
                <div className="group bg-gray-50 border border-gray-200 rounded-xl p-6 h-full flex flex-col hover:shadow-2xl hover:scale-105 transition-all">
                  <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-gray-200">
                    <Icon className="w-8 h-8 text-navy-900" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 text-center mb-2">
                    {label}
                  </h3>
                  <p className="text-sm text-navy-600 text-center mb-4 flex-grow">
                    Explore our {data.label} support for {label}.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-navy-600 text-sm mt-auto transition-colors group-hover:text-navy-900">
                    <span>View {label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

