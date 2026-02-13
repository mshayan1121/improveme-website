import Link from "next/link";
import type { Metadata } from "next";
import {
  BookOpen,
  GraduationCap,
  Award,
  Calculator,
  Microscope,
  Zap,
  FlaskConical,
  Leaf,
  Briefcase,
  TrendingUp,
  Brain,
  Users,
  ArrowRight,
  Star,
  CheckCircle,
  Target,
  BarChart3,
  FileText,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Secondary Tutoring Dubai | KS3 to A-Level & IB — Improve ME",
  description:
    "Secondary school tutoring in Dubai for ages 11–18. KS3, GCSE, IGCSE, MYP, A-Level, and IB — all exam boards, specialist subject tutors, small groups.",
  keywords: [
    "secondary school tutoring Dubai",
    "secondary tutor Dubai",
    "secondary curriculum Dubai",
    "GCSE IGCSE A-Level tutoring Dubai",
    "Years 7–13 tutoring Dubai",
    "UK curriculum",
    "British school support",
    "exam preparation",
    "qualification pathways",
    "sixth form preparation",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What age range does secondary cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support secondary students aged 11–18, from Year 7 (Grade 6) through to Year 13 (Grade 12). This spans Key Stage 3, GCSE, IGCSE, MYP, A-Level, and IB Diploma.",
      },
    },
    {
      "@type": "Question",
      name: "Which exam boards do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all major exam boards used in Dubai: AQA, Edexcel (UK and International), OCR, Cambridge International (CAIE), and the IB. Our tutors teach to the exact specification your child is being examined on — we never mix exam board content.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between GCSE and IGCSE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GCSEs are set by UK exam boards (AQA, Edexcel, OCR) and use a 9–1 grading scale. IGCSEs are set by Cambridge International or Edexcel International for schools outside the UK, and use either A*–G or 9–1 grading. Both are internationally recognised, but the syllabus content and exam structure differ. We tutor for both — with separate teaching for each.",
      },
    },
    {
      "@type": "Question",
      name: "My child is at an IB school. Do you cover MYP and IB Diploma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer tutoring for the IB Middle Years Programme (MYP) at ages 14–16 and the IB Diploma Programme (SL and HL) at ages 16–18. Our tutors understand IB assessment criteria, internal assessments, and the specific demands of the IB approach.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know which qualification my child is taking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your child's school will determine which qualification pathway they follow. Most British curriculum schools in Dubai offer GCSE or IGCSE at ages 14–16, and A-Level at ages 16–18. IB schools offer MYP and the IB Diploma. If you're unsure, ask us — we're familiar with the qualifications offered by most British-style schools in Dubai.",
      },
    },
    {
      "@type": "Question",
      name: "Which subjects do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At secondary level, we offer Mathematics, English, Biology, Chemistry, Physics, Business Studies, Economics, and Psychology. Subject availability varies by qualification stage — explore the individual stage pages for full details.",
      },
    },
    {
      "@type": "Question",
      name: "How big are your groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our groups have a maximum of 6 students, with most sessions averaging 2–3. Students are grouped by subject, qualification, exam board, and level to ensure every session is directly relevant.",
      },
    },
    {
      "@type": "Question",
      name: "My child is struggling across multiple subjects. Can you help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many students attend Improve ME for two or three subjects. We'll start with a diagnostic assessment to identify priorities and build a plan that covers the subjects where support will have the greatest impact.",
      },
    },
    {
      "@type": "Question",
      name: "Is it too late to start if exams are soon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's never too late to make a difference, but the sooner you start, the more we can achieve. Even a few weeks of targeted preparation — focused on high-impact topics and exam technique — can shift results. Book a free assessment and we'll be honest about what's realistic.",
      },
    },
  ],
};

export default function SecondaryCurriculumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <article className="min-h-screen">
        {/* BREADCRUMBS */}
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
                  href="/curriculum/primary"
                  className="text-navy-600 hover:text-navy-900"
                >
                  Our Curriculum
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-navy-900 font-medium">Secondary</li>
            </ol>
          </div>
        </nav>

        {/* SECTION 1: HERO */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 chevron-pattern pt-32 pb-16">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm">
                  Ages 11–18
                </span>
                <span className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm">
                  Years 7–13
                </span>
                <span className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm">
                  All Exam Boards
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Secondary Curriculum
              </h1>
              <p className="text-white/80 text-sm md:text-base mb-4">
                Ages 11–18 · Key Stage 3 through A-Level and IB · All Major Exam
                Boards
              </p>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8">
                From the first day of secondary school to the final A-Level or IB
                exam — specialist tutoring across every qualification, every
                subject, and every exam board taught in Dubai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition inline-flex items-center justify-center gap-2"
                >
                  Book Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/curriculum/primary"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
                >
                  View Primary Curriculum
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-white/70 text-sm">
                Trusted by families across Dubai since 2010 · KHDA-approved
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: YOUR CHILD'S SECONDARY JOURNEY */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Your Child's Secondary Journey
              </h2>
              <p className="text-navy-600 text-lg mb-2">
                Understanding the pathway from Year 7 to university
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700 mb-12">
              <p>
                Secondary education in Dubai's British curriculum schools spans
                seven years and three distinct stages. Each stage builds on the
                last — and each one matters.
              </p>
            </div>

            {/* Visual Pathway - 3 Stages */}
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Stage 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 relative">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    Foundation
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Key Stage 3
                  </h3>
                  <p className="text-sm text-navy-600 mb-3 font-medium">
                    Ages 11–14 · Years 7–9
                  </p>
                  <p className="text-sm text-navy-700 mb-4">
                    The first three years of secondary school. Your child builds
                    the core knowledge, study habits, and independent thinking
                    that everything else depends on. KS3 covers Mathematics,
                    English, and Science across Years 7, 8, and 9.
                  </p>
                  <Link
                    href="/curriculum/secondary/ks3"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700"
                  >
                    Explore KS3
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Stage 2 */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 relative">
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    Examinations
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    GCSE / IGCSE / MYP
                  </h3>
                  <p className="text-sm text-navy-600 mb-3 font-medium">
                    Ages 14–16 · Years 10–11
                  </p>
                  <p className="text-sm text-navy-700 mb-4">
                    The exam years. Your child sits formal qualifications across
                    8–10 subjects. GCSE (AQA, Edexcel, OCR), IGCSE (Cambridge,
                    Edexcel International), or MYP (IB Middle Years Programme)
                    — depending on their school. Results directly determine
                    A-Level and IB entry.
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/curriculum/secondary/gcse"
                      className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700"
                    >
                      Explore GCSE
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/curriculum/secondary/igcse"
                      className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700"
                    >
                      Explore IGCSE
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/curriculum/secondary/myp"
                      className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700"
                    >
                      Explore MYP
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 relative">
                  <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    University Preparation
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    A-Level / IB Diploma
                  </h3>
                  <p className="text-sm text-navy-600 mb-3 font-medium">
                    Ages 16–18 · Years 12–13
                  </p>
                  <p className="text-sm text-navy-700 mb-4">
                    The final stage before university. Your child specialises in
                    3–4 subjects at A-Level or follows the broader IB Diploma
                    programme. Grades at this stage determine university offers
                    — including Oxbridge, Russell Group, and top international
                    universities.
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/curriculum/secondary/a-level"
                      className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm hover:text-purple-700"
                    >
                      Explore A-Level
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/curriculum/secondary/ib"
                      className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm hover:text-purple-700"
                    >
                      Explore IB
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CHOOSE YOUR QUALIFICATION STAGE */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Choose Your Qualification Stage
              </h2>
              <p className="text-navy-600 text-lg">
                Select your child's current stage to see subjects, exam boards,
                and how we prepare them
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* KS3 */}
              <Link href="/curriculum/secondary/ks3" className="block h-full">
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 h-full hover:shadow-lg hover:scale-105 transition-all">
                  <BookOpen className="w-10 h-10 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Key Stage 3
                  </h3>
                  <p className="text-navy-600 text-sm mb-3">
                    Ages 11–14 · Years 7–9
                  </p>
                  <p className="text-navy-700 text-sm mb-4">
                    UK National Curriculum. Building foundations before GCSE
                    with structured teaching across Maths, English, and Science.
                  </p>
                  <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                    View KS3 Curriculum
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* GCSE */}
              <Link href="/curriculum/secondary/gcse" className="block h-full">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 h-full hover:shadow-lg hover:scale-105 transition-all">
                  <GraduationCap className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">GCSE</h3>
                  <p className="text-navy-600 text-sm mb-3">
                    Ages 14–16 · Years 10–11
                  </p>
                  <p className="text-navy-700 text-sm mb-4">
                    AQA, Edexcel, OCR. Formal UK qualifications graded 9–1.
                    Terminal exams across 8–10 subjects at the end of Year 11.
                  </p>
                  <span className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm">
                    View GCSE Curriculum
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* IGCSE */}
              <Link href="/curriculum/secondary/igcse" className="block h-full">
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 h-full hover:shadow-lg hover:scale-105 transition-all">
                  <GraduationCap className="w-10 h-10 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    IGCSE
                  </h3>
                  <p className="text-navy-600 text-sm mb-3">
                    Ages 14–16 · Years 10–11
                  </p>
                  <p className="text-navy-700 text-sm mb-4">
                    Cambridge International, Edexcel International. The
                    international equivalent of GCSE, used by Dubai's
                    international schools. Graded A*–G or 9–1.
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm">
                    View IGCSE Curriculum
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* MYP */}
              <Link href="/curriculum/secondary/myp" className="block h-full">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 h-full hover:shadow-lg hover:scale-105 transition-all">
                  <BookOpen className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">MYP</h3>
                  <p className="text-navy-600 text-sm mb-3">
                    Ages 14–16 · Years 10–11
                  </p>
                  <p className="text-navy-700 text-sm mb-4">
                    IB Middle Years Programme. Criterion-based assessment across
                    eight subject groups. The pathway into the IB Diploma.
                  </p>
                  <span className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm">
                    View MYP Curriculum
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* A-Level */}
              <Link href="/curriculum/secondary/a-level" className="block h-full">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 h-full hover:shadow-lg hover:scale-105 transition-all">
                  <Award className="w-10 h-10 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    A-Level
                  </h3>
                  <p className="text-navy-600 text-sm mb-3">
                    Ages 16–18 · Years 12–13
                  </p>
                  <p className="text-navy-700 text-sm mb-4">
                    AQA, Edexcel, OCR, Cambridge International. 3–4 specialist
                    subjects studied over two years. The standard route to UK
                    universities.
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm">
                    View A-Level Curriculum
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* IB Diploma */}
              <Link href="/curriculum/secondary/ib" className="block h-full">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 h-full hover:shadow-lg hover:scale-105 transition-all">
                  <Award className="w-10 h-10 text-yellow-600 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    IB Diploma
                  </h3>
                  <p className="text-navy-600 text-sm mb-3">
                    Ages 16–18 · Years 12–13
                  </p>
                  <p className="text-navy-700 text-sm mb-4">
                    SL and HL across six subject groups plus Theory of Knowledge,
                    Extended Essay, and CAS. A rigorous, internationally
                    recognised programme.
                  </p>
                  <span className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm">
                    View IB Curriculum
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: NOT SURE WHERE TO START? */}
        <section className="bg-gray-100 py-14">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Not Sure Which Stage Your Child Is At?
            </h2>
            <p className="text-navy-700 text-lg mb-6">
              It's completely normal — especially if your child is new to the UK
              curriculum, changing schools, or you're comparing different
              qualification pathways. We'll help you work it out.
            </p>
            <p className="text-navy-700 mb-8">
              Book a free assessment and we'll identify exactly where your child
              stands, which qualification they're following, and where they
              need support.
            </p>
            <Link
              href="/contact#assessment"
              className="inline-flex items-center gap-2 bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Book Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* SECTION 5: WHAT WE COVER AT SECONDARY LEVEL */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Subjects We Cover
              </h2>
              <p className="text-navy-600 text-lg">
                Specialist tutoring across every core secondary subject — from
                Year 7 through to A-Level and IB
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Row 1 */}
              <Link
                href="/courses/mathematics"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                <Calculator className="w-12 h-12 text-navy-900 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Mathematics
                </h3>
                <p className="text-sm text-navy-700">
                  From KS3 foundations to A-Level and IB calculus
                </p>
              </Link>
              <Link
                href="/courses/english"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                <BookOpen className="w-12 h-12 text-navy-900 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">English</h3>
                <p className="text-sm text-navy-700">
                  Language, Literature, and exam writing across all levels
                </p>
              </Link>
              <Link
                href="/courses/physics"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                <Zap className="w-12 h-12 text-navy-900 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">Physics</h3>
                <p className="text-sm text-navy-700">
                  Conceptual understanding and mathematical rigour
                </p>
              </Link>
              <Link
                href="/courses/chemistry"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                <FlaskConical className="w-12 h-12 text-navy-900 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Chemistry
                </h3>
                <p className="text-sm text-navy-700">
                  Atomic structure to organic chemistry, all exam boards
                </p>
              </Link>
              {/* Row 2 */}
              <Link
                href="/courses/biology"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                <Leaf className="w-12 h-12 text-navy-900 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">Biology</h3>
                <p className="text-sm text-navy-700">
                  Cells to ecosystems, with exam-style practice throughout
                </p>
              </Link>
              <Link
                href="/courses/business"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                <Briefcase className="w-12 h-12 text-navy-900 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Business Studies
                </h3>
                <p className="text-sm text-navy-700">
                  Entrepreneurship, finance, and operations
                </p>
              </Link>
              <Link
                href="/courses/economics"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                <TrendingUp className="w-12 h-12 text-navy-900 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Economics
                </h3>
                <p className="text-sm text-navy-700">
                  Micro, macro, and analytical skills for top grades
                </p>
              </Link>
              <Link
                href="/courses/psychology"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                <Brain className="w-12 h-12 text-navy-900 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Psychology
                </h3>
                <p className="text-sm text-navy-700">
                  Research methods, cognitive processes, and beyond
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: OUR SECONDARY TEACHING APPROACH */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Our Teaching Approach
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Small Groups
                </h3>
                <p className="text-sm text-navy-700">
                  Maximum 6 students per class, with most sessions averaging
                  2–3. Your child gets the focused attention that large school
                  classes can't provide.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Exam Board Expertise
                </h3>
                <p className="text-sm text-navy-700">
                  AQA, Edexcel, OCR, Cambridge International, IB — we teach to
                  the exact specification your child is being examined on. No
                  generic content.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Data-Driven Progress
                </h3>
                <p className="text-sm text-navy-700">
                  Regular diagnostic assessments and progress reports so you
                  always know where your child stands and what we're working on
                  next.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Structured Sessions
                </h3>
                <p className="text-sm text-navy-700">
                  Every session follows a clear plan — topic coverage,
                  exam-style practice, and targeted feedback. No wasted time, no
                  improvised lessons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHY IMPROVE ME FOR SECONDARY? */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why Improve ME for Secondary?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                "KHDA-approved tutoring centre in Gold & Diamond Park, Dubai",
                "16+ years preparing secondary students across every qualification level",
                "40+ specialist subject tutors with proven track records",
                "Small groups (max 6 students) for focused, personalised teaching",
                "All major exam boards: AQA, Edexcel, OCR, Cambridge International, IB",
                "Our own revision books and study materials built from real exam analysis",
                "Data-driven progress reports aligned to your child's specification",
                "Mock exam preparation matched to Dubai school calendars",
                "Trusted by 1,000+ students and their families every year",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-3 items-start text-white/90"
                >
                  <CheckCircle
                    className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: SUCCESS STORIES */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              What Parents Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  quote:
                    "My son started at Improve ME in Year 7 and is now in Year 11. They've supported him through KS3 and into his GCSEs — the consistency has made a huge difference. He knows the tutors, they know him, and his results show it.",
                  name: "Sarah L.",
                  role: "Parent, Year 11 Student",
                },
                {
                  quote:
                    "We moved to Dubai mid-year and my daughter needed to catch up on the Cambridge IGCSE syllabus quickly. Improve ME assessed her, built a plan, and within two months she was back on track. The exam board expertise was exactly what we needed.",
                  name: "Ahmed R.",
                  role: "Parent, Year 10 Student",
                },
                {
                  quote:
                    "The A-Level Maths and Physics tutoring was exceptional. My daughter's predicted grades went from Cs to As. She's now at her first-choice university. We couldn't have done it without Improve ME.",
                  name: "Karen T.",
                  role: "Parent, Former A-Level Student",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <meta itemProp="itemReviewed" content="Secondary Tutoring" />
                  <div
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                  <div className="flex gap-1 mb-4" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote
                    className="text-navy-800 text-sm mb-4"
                    itemProp="reviewBody"
                  >
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <p
                    className="text-sm font-semibold text-navy-900"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">{testimonial.name}</span>
                  </p>
                  <p className="text-xs text-navy-600">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Secondary Curriculum — Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="age-range">
                <AccordionTrigger>
                  What age range does secondary cover?
                </AccordionTrigger>
                <AccordionContent>
                  We support secondary students aged 11–18, from Year 7 (Grade
                  6) through to Year 13 (Grade 12). This spans Key Stage 3,
                  GCSE, IGCSE, MYP, A-Level, and IB Diploma.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="exam-boards">
                <AccordionTrigger>
                  Which exam boards do you cover?
                </AccordionTrigger>
                <AccordionContent>
                  We cover all major exam boards used in Dubai: AQA, Edexcel
                  (UK and International), OCR, Cambridge International (CAIE),
                  and the IB. Our tutors teach to the exact specification your
                  child is being examined on — we never mix exam board content.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="gcse-vs-igcse">
                <AccordionTrigger>
                  What's the difference between GCSE and IGCSE?
                </AccordionTrigger>
                <AccordionContent>
                  GCSEs are set by UK exam boards (AQA, Edexcel, OCR) and use a
                  9–1 grading scale. IGCSEs are set by Cambridge International
                  or Edexcel International for schools outside the UK, and use
                  either A*–G or 9–1 grading. Both are internationally
                  recognised, but the syllabus content and exam structure differ.
                  We tutor for both — with separate teaching for each.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ib-coverage">
                <AccordionTrigger>
                  My child is at an IB school. Do you cover MYP and IB Diploma?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We offer tutoring for the IB Middle Years Programme (MYP)
                  at ages 14–16 and the IB Diploma Programme (SL and HL) at
                  ages 16–18. Our tutors understand IB assessment criteria,
                  internal assessments, and the specific demands of the IB
                  approach.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="qualification-identification">
                <AccordionTrigger>
                  How do I know which qualification my child is taking?
                </AccordionTrigger>
                <AccordionContent>
                  Your child's school will determine which qualification pathway
                  they follow. Most British curriculum schools in Dubai offer
                  GCSE or IGCSE at ages 14–16, and A-Level at ages 16–18. IB
                  schools offer MYP and the IB Diploma. If you're unsure, ask us
                  — we're familiar with the qualifications offered by most
                  British-style schools in Dubai.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="subjects-offered">
                <AccordionTrigger>Which subjects do you offer?</AccordionTrigger>
                <AccordionContent>
                  At secondary level, we offer Mathematics, English, Biology,
                  Chemistry, Physics, Business Studies, Economics, and
                  Psychology. Subject availability varies by qualification stage
                  — explore the individual stage pages for full details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="group-size">
                <AccordionTrigger>How big are your groups?</AccordionTrigger>
                <AccordionContent>
                  Our groups have a maximum of 6 students, with most sessions
                  averaging 2–3. Students are grouped by subject,
                  qualification, exam board, and level to ensure every session
                  is directly relevant.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="multiple-subjects">
                <AccordionTrigger>
                  My child is struggling across multiple subjects. Can you help?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Many students attend Improve ME for two or three
                  subjects. We'll start with a diagnostic assessment to identify
                  priorities and build a plan that covers the subjects where
                  support will have the greatest impact.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="late-start">
                <AccordionTrigger>
                  Is it too late to start if exams are soon?
                </AccordionTrigger>
                <AccordionContent>
                  It's never too late to make a difference, but the sooner you
                  start, the more we can achieve. Even a few weeks of targeted
                  preparation — focused on high-impact topics and exam technique
                  — can shift results. Book a free assessment and we'll be
                  honest about what's realistic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center mt-8">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center gap-2 bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Book a free assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: FINAL CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-14">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Give Your Child the Support That Makes the Difference
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
              Whether your child is starting Year 7 or preparing for their final
              A-Level exam, we'll meet them exactly where they are — and take
              them where they need to go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/contact#assessment"
                className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition inline-flex items-center justify-center gap-2"
              >
                Book Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/courses"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
              >
                View All Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-white/70 text-sm">
              Trusted by families across Dubai since 2010 · KHDA-approved ·
              Gold & Diamond Park
            </p>
          </div>
        </section>

        {/* SECTION 11: EXPLORE SECONDARY QUALIFICATIONS — FULL SUBJECT GRID */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Browse All Secondary Subjects by Qualification
              </h2>
              <p className="text-navy-600 text-lg">
                Jump directly to any subject at any qualification level
              </p>
            </div>

            <div className="space-y-10">
              {/* Key Stage 3 */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Key Stage 3 (Ages 11–14)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link
                    href="/curriculum/secondary/ks3/mathematics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Mathematics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Core skills and problem-solving foundations for Years
                        7–9
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/ks3/english"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        English
                      </h4>
                      <p className="text-sm text-navy-600">
                        Reading, writing, and analysis skills for the secondary
                        transition
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/ks3/science"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Microscope className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Science
                      </h4>
                      <p className="text-sm text-navy-600">
                        Biology, chemistry, and physics foundations before
                        specialisation
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* GCSE */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  GCSE (Ages 14–16)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link
                    href="/curriculum/secondary/gcse/mathematics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Mathematics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Foundation to Higher tier — algebra, geometry,
                        statistics, and ratio
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/gcse/english-language"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        English Language
                      </h4>
                      <p className="text-sm text-navy-600">
                        Language and Literature — creative writing, analysis,
                        and exam technique
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/gcse/physics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Zap className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Physics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Forces, energy, waves, electricity — all exam boards
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/gcse/chemistry"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <FlaskConical className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Chemistry
                      </h4>
                      <p className="text-sm text-navy-600">
                        Atomic structure, bonding, organic chemistry —
                        exam-focused
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/gcse/biology"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Leaf className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Biology
                      </h4>
                      <p className="text-sm text-navy-600">
                        Cells, genetics, ecology — structured topic coverage
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/gcse/business-studies"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Briefcase className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Business Studies
                      </h4>
                      <p className="text-sm text-navy-600">
                        Marketing, finance, and operations — real-world exam
                        scenarios
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/gcse/economics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <TrendingUp className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Economics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Micro and macroeconomics — analytical frameworks for top
                        marks
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/gcse/psychology"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Brain className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Psychology
                      </h4>
                      <p className="text-sm text-navy-600">
                        Research methods, cognitive processes, and social
                        influence
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* IGCSE */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  IGCSE (Ages 14–16)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link
                    href="/curriculum/secondary/igcse/mathematics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Mathematics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Core and Extended curriculum — Cambridge and Edexcel
                        International
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/igcse/english-language"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        English Language
                      </h4>
                      <p className="text-sm text-navy-600">
                        Cambridge and Edexcel International — directed writing,
                        comprehension, composition
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/igcse/physics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Zap className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Physics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Forces, energy, waves, electricity — all exam boards
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/igcse/chemistry"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <FlaskConical className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Chemistry
                      </h4>
                      <p className="text-sm text-navy-600">
                        Atomic structure, bonding, organic chemistry —
                        exam-focused
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/igcse/biology"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Leaf className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Biology
                      </h4>
                      <p className="text-sm text-navy-600">
                        Cells, genetics, ecology — structured topic coverage
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/igcse/business-studies"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Briefcase className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Business Studies
                      </h4>
                      <p className="text-sm text-navy-600">
                        Marketing, finance, and operations — real-world exam
                        scenarios
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/igcse/economics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <TrendingUp className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Economics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Micro and macroeconomics — analytical frameworks for top
                        marks
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/igcse/psychology"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Brain className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Psychology
                      </h4>
                      <p className="text-sm text-navy-600">
                        Research methods, cognitive processes, and social
                        influence
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* MYP */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  MYP (Ages 11–16)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link
                    href="/curriculum/secondary/myp/mathematics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Mathematics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Inquiry-based learning with criterion-referenced
                        assessment
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/myp/english"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        English
                      </h4>
                      <p className="text-sm text-navy-600">
                        Language and Literature with criterion-based assessment
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/myp/sciences"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Microscope className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Sciences
                      </h4>
                      <p className="text-sm text-navy-600">
                        Biology, chemistry, and physics with inquiry-based
                        approach
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/myp/individuals-societies"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Users className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Individuals & Societies
                      </h4>
                      <p className="text-sm text-navy-600">
                        History, geography, and civics with global contexts
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* A-Level */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  A-Level (Ages 16–18)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link
                    href="/curriculum/secondary/a-level/mathematics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Mathematics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Pure maths, statistics, and mechanics for university
                        preparation
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/a-level/english-literature"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        English Literature
                      </h4>
                      <p className="text-sm text-navy-600">
                        Set texts, critical analysis, and comparative essay
                        writing
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/a-level/physics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Zap className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Physics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Particle physics, fields, and mechanics for university
                        pathways
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/a-level/chemistry"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <FlaskConical className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Chemistry
                      </h4>
                      <p className="text-sm text-navy-600">
                        Organic synthesis, spectroscopy, and energetics
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/a-level/biology"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Leaf className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Biology
                      </h4>
                      <p className="text-sm text-navy-600">
                        Genetics, ecosystems, and biological processes in depth
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/a-level/business"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Briefcase className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Business
                      </h4>
                      <p className="text-sm text-navy-600">
                        Marketing, finance, and strategy — case study analysis
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/a-level/economics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <TrendingUp className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Economics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Micro, macro, and policy evaluation for top grades
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/a-level/psychology"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Brain className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Psychology
                      </h4>
                      <p className="text-sm text-navy-600">
                        Research methods, biopsychology, and issues & debates
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* IB Diploma */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  IB Diploma Programme (Ages 16–18)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link
                    href="/curriculum/secondary/ib/mathematics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Mathematics
                      </h4>
                      <p className="text-sm text-navy-600">
                        Analysis & Approaches or Applications — SL and HL
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/ib/english"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">English</h4>
                      <p className="text-sm text-navy-600">
                        Language & Literature — SL and HL with Individual Oral
                        preparation
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/ib/physics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Zap className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Physics</h4>
                      <p className="text-sm text-navy-600">
                        SL and HL with Internal Assessment support
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/ib/chemistry"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <FlaskConical className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Chemistry
                      </h4>
                      <p className="text-sm text-navy-600">
                        SL and HL with Internal Assessment support
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/ib/biology"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Leaf className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Biology</h4>
                      <p className="text-sm text-navy-600">
                        SL and HL with Internal Assessment support
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/ib/business-management"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Briefcase className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Business Management
                      </h4>
                      <p className="text-sm text-navy-600">
                        SL and HL with IA and examination support
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/ib/economics"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <TrendingUp className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Economics
                      </h4>
                      <p className="text-sm text-navy-600">
                        SL and HL with Internal Assessment and commentary support
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/curriculum/secondary/ib/psychology"
                    className="block h-full"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Brain className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">
                        Psychology
                      </h4>
                      <p className="text-sm text-navy-600">
                        SL and HL with experimental study support
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
