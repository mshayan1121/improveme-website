import Link from "next/link";
import type { Metadata } from "next";
import {
  BookOpen,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  Calculator,
  Microscope,
  ClipboardCheck,
  FileText,
  BarChart3,
  GraduationCap,
  Award,
  ArrowRight,
  Star,
  Calendar,
  Brain,
  Briefcase,
  DollarSign,
  TestTube,
  Zap,
  Clock,
  CheckCircle2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "GCSE Tutoring Dubai | Expert Exam Preparation — Improve ME",
  description:
    "GCSE tutoring in Dubai for Years 10–11. Small group classes, specialist subject tutors, mock exam preparation, and data-driven progress tracking. Book a free assessment.",
  keywords: [
    "GCSE tutoring Dubai",
    "GCSE tutor Dubai",
    "GCSE revision Dubai",
    "GCSE exam preparation Dubai",
    "GCSE results Dubai",
    "grades 9-1",
    "terminal exams",
    "mock exams",
    "AQA",
    "Edexcel",
    "OCR",
    "exam technique",
    "revision strategies",
    "Year 10 Year 11",
  ],
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "GCSE Tutoring Dubai | Expert Exam Preparation — Improve ME",
    description:
      "GCSE tutoring in Dubai for Years 10–11. Small group classes, specialist subject tutors, mock exam preparation, and data-driven progress tracking. Book a free assessment.",
    url: "https://improvemeinstitute.com/curriculum/secondary/gcse",
    siteName: "Improve ME Institute",
    locale: "en_AE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://improvemeinstitute.com/curriculum/secondary/gcse",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "GCSE Curriculum",
  description: metadata.description,
  provider: {
    "@type": "EducationalOrganization",
    name: "Improve ME Institute",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 3016-3017, Building 3, Gold and Diamond Park",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    telephone: "+971-50-185-2505",
    url: "https://improvemeinstitute.com",
  },
  educationalLevel: "GCSE (Years 10-11)",
  coursePrerequisites: "Completion of Key Stage 3 or equivalent",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What age are GCSEs taken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GCSEs are typically sat in Year 11, when students are 15–16 years old. The two-year GCSE course runs from Year 10 to Year 11. In the UAE grade system, this corresponds to Grades 9 and 10.",
      },
    },
    {
      "@type": "Question",
      name: "How are GCSEs graded?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GCSEs use a 9–1 grading scale, with 9 being the highest. A grade 4 is considered a standard pass, and a grade 7 is equivalent to the old A grade. The top grade of 9 is designed to differentiate the very highest-performing students.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between GCSE and IGCSE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GCSEs follow UK national exam boards (AQA, Edexcel, OCR) and are the standard qualification in British curriculum schools. IGCSEs are the international version, set by Cambridge International or Edexcel International, and are designed for schools outside the UK. Both are widely recognised, but the syllabus content and exam structure differ. We tutor for both.",
      },
    },
    {
      "@type": "Question",
      name: "How many GCSEs does my child take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most students take 8–10 GCSE subjects. Core subjects (Maths, English, and Sciences) are compulsory, with 3–4 additional options chosen during Year 9. The exact number depends on your child's school.",
      },
    },
    {
      "@type": "Question",
      name: "When are mock exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Dubai schools schedule mock exams in the autumn or spring term of Year 11, typically between November and February. Some schools also run Year 10 mocks. We track mock dates across Dubai's major British schools and prepare your child accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Is coursework still part of GCSEs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In almost all subjects, coursework has been replaced by terminal exams at the end of Year 11. This means your child's entire grade depends on their exam performance. A small number of subjects retain a practical or spoken language component, but the vast majority is exam-assessed.",
      },
    },
    {
      "@type": "Question",
      name: "Which exam boards do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover AQA, Edexcel, and OCR — the three main UK exam boards used by British curriculum schools in Dubai. Our tutors know each board's specification, question styles, and mark schemes in detail.",
      },
    },
    {
      "@type": "Question",
      name: "How do your groups work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our groups have a maximum of 6 students, with most sessions averaging 2–3. Students are grouped by subject, exam board, and ability level to ensure every session is relevant and productive.",
      },
    },
    {
      "@type": "Question",
      name: "My child's mocks are in two months. Is it too late to start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's never too late to make a difference — but the sooner you start, the more we can achieve. We'll run a diagnostic assessment to identify the highest-impact areas and focus your child's time where it matters most. Even a few weeks of targeted preparation can shift mock results.",
      },
    },
  ],
};

export default function GCSEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article itemScope itemType="https://schema.org/Course">
        {/* BREADCRUMBS */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
          <div className="max-w-7xl mx-auto px-4">
            <ol
              className="flex items-center space-x-2 text-sm"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Link
                  href="/"
                  itemProp="item"
                  className="text-navy-600 hover:text-navy-900"
                >
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Link
                  href="/curriculum"
                  itemProp="item"
                  className="text-navy-600 hover:text-navy-900"
                >
                  <span itemProp="name">Our Curriculum</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-gray-400">/</li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Link
                  href="/curriculum/secondary"
                  itemProp="item"
                  className="text-navy-600 hover:text-navy-900"
                >
                  <span itemProp="name">Secondary</span>
                </Link>
                <meta itemProp="position" content="3" />
              </li>
              <li className="text-gray-400">/</li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <span itemProp="name" className="text-navy-900 font-medium">
                  GCSE
                </span>
                <meta itemProp="position" content="4" />
              </li>
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
                  Ages 14–16
                </span>
                <span className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm">
                  Years 10–11
                </span>
                <span className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm">
                  Grades 9–1
                </span>
              </div>
              <h1
                itemProp="name"
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                GCSE Curriculum
              </h1>
              <p className="text-white/80 text-sm md:text-base mb-4">
                Ages 14–16 · UK National Curriculum · Years 10–11 (Grades 9–10)
              </p>
              <p
                itemProp="description"
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
              >
                Your child's GCSE results shape everything that follows — A-Level
                choices, university applications, and career pathways. We know
                exactly how to get them there.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition inline-flex items-center justify-center gap-2"
                  aria-label="Book a free GCSE assessment in Dubai"
                >
                  Book Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/courses"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
                  aria-label="View all courses at Improve ME Institute"
                >
                  View All Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-white/70 text-sm">
                Trusted by families across Dubai since 2010 · KHDA-approved
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT IS GCSE? */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                What is GCSE? A Parent's Guide
              </h2>
              <p className="text-navy-600 text-lg mb-2">
                Everything you need to know about your child's most important exams
                so far
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700 mb-12">
              <p>
                GCSE stands for General Certificate of Secondary Education. These
                are the formal qualifications your child sits at the end of Year 11,
                typically across 8–10 subjects. In the UK grading system, GCSEs
                are scored from 9 (highest) to 1 (lowest), with a grade 4
                considered a standard pass and a grade 7 equivalent to the old A
                grade.
              </p>
              <p>
                For families in Dubai following the British curriculum, GCSEs are
                the qualifications taken at schools like Dubai College, JESS, Kings'
                Schools, Repton, and Nord Anglia. They are the UK national standard
                — recognised by universities and employers worldwide.
              </p>
              <p>
                The most significant thing parents need to understand about today's
                GCSEs is this: coursework has been almost entirely replaced by
                terminal exams. Everything your child has learnt over two years
                comes down to their performance in the exam hall at the end of Year
                11. There is no safety net of ongoing assessment to fall back on.
              </p>
              <p>
                That's why preparation isn't something that starts in the final
                term. It starts the moment your child begins Year 10 — and at
                Improve ME, we've spent 16 years making sure Dubai students are
                ready when that moment arrives.
              </p>
            </div>

            {/* GCSE at a Glance - 3 Column Cards */}
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                GCSE at a Glance
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-navy-900 mb-2">
                    Year 10 (Grade 9)
                  </h4>
                  <p className="text-sm text-navy-600 mb-3 font-medium">
                    Age: 14–15
                  </p>
                  <p className="text-sm text-navy-700 mb-2">
                    GCSE courses begin — content is taught from day one
                  </p>
                  <p className="text-sm text-navy-700 mb-2">
                    Internal assessments and early topic tests
                  </p>
                  <p className="text-sm font-semibold text-navy-900">
                    Focus: Building subject knowledge and exam foundations
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-navy-900 mb-2">
                    Year 11 (Grade 10)
                  </h4>
                  <p className="text-sm text-navy-600 mb-3 font-medium">
                    Age: 15–16
                  </p>
                  <p className="text-sm text-navy-700 mb-2">
                    Mock exams in autumn/spring term
                  </p>
                  <p className="text-sm text-navy-700 mb-2">
                    Intensive revision period before final exams
                  </p>
                  <p className="text-sm font-semibold text-navy-900">
                    Focus: Exam technique, revision, and peak performance
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-navy-900 mb-2">
                    Exam Season (May–June)
                  </h4>
                  <p className="text-sm text-navy-600 mb-3 font-medium">
                    Typically 15–25 individual exam papers across all subjects
                  </p>
                  <p className="text-sm text-navy-700 mb-2">
                    Results released in August
                  </p>
                  <p className="text-sm text-navy-700 mb-2">
                    Grades determine A-Level and post-16 pathways
                  </p>
                  <p className="text-sm font-semibold text-navy-900">
                    Focus: Execution — everything comes together here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY GCSE RESULTS MATTER */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Why GCSE Results Matter More Than Ever
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700">
              <p>
                GCSE grades are no longer just a stepping stone. They are the
                grades that sixth forms, colleges, and universities look at first.
                A-Level courses typically require a minimum of grade 6 or 7 in
                relevant GCSEs. Competitive sixth forms set their own entry
                thresholds. And many university courses consider GCSE results
                alongside A-Level predictions during the application process.
              </p>
              <p>
                For students in Dubai's British curriculum schools, GCSE
                performance also determines which subjects they can continue at
                A-Level — and which doors remain open for medicine, engineering,
                law, business, and other competitive pathways.
              </p>
              <p>
                The good news: with the right preparation, structure, and guidance,
                strong results are entirely achievable. That's what we do.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: SUBJECTS WE COVER */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                GCSE Subjects at Improve ME
              </h2>
              <p className="text-navy-600 text-lg">
                Specialist tutoring across every major GCSE subject — taught by
                tutors who know each syllabus inside out
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link
                href="/curriculum/secondary/gcse/mathematics"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Mathematics
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Build fluency across number, algebra, geometry, ratio, and
                    statistics. Covers both foundation and higher tier.
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/gcse/english-language"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <BookOpen className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    English Language
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Develop reading analysis, creative and transactional writing,
                    and the exam technique that turns good answers into top-grade
                    answers.
                  </p>
                  <span className="inline-flex items-center gap-2 text-purple-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/gcse/biology"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Microscope className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Biology
                  </h3>
                  <p className="text-navy-700 mb-4">
                    From cell biology to ecology — structured coverage of every
                    topic with exam-style practice from day one.
                  </p>
                  <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/gcse/chemistry"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <TestTube className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Chemistry
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Atomic structure, bonding, organic chemistry, and quantitative
                    skills. We make the abstract concrete.
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/gcse/physics"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Zap className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Physics
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Forces, energy, waves, electricity, and space — taught with
                    clarity and rigour so your child doesn't just memorise, they
                    understand.
                  </p>
                  <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/gcse/business-studies"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Briefcase className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Business Studies
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Entrepreneurship, marketing, finance, and operations.
                    Real-world business concepts brought to life for the exam hall.
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/gcse/economics"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <DollarSign className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Economics
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Micro and macroeconomics — supply and demand, market
                    structures, fiscal and monetary policy. Analytical skills that
                    examiners reward.
                  </p>
                  <span className="inline-flex items-center gap-2 text-amber-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/gcse/psychology"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Brain className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Psychology
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Research methods, memory, social influence, and psychopathology.
                    Evidence-based answers that hit every mark scheme point.
                  </p>
                  <span className="inline-flex items-center gap-2 text-pink-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: HOW WE GET YOUR CHILD EXAM-READY */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                How We Get Your Child Exam-Ready
              </h2>
              <p className="text-navy-600 text-lg">
                A structured, data-driven approach built on 16 years of GCSE results
                in Dubai
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700 mb-8">
              <p>
                We don't leave exam results to chance. Every session, every
                resource, and every conversation with your child is designed to move
                them closer to the grades they need. Here's how.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <ClipboardCheck className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Personalised Learning Plans
                </h3>
                <p className="text-navy-700 text-sm mb-3">
                  No two students arrive with the same gaps. Before your child
                  attends a single session, we run a comprehensive diagnostic
                  assessment that maps their knowledge against the full GCSE
                  specification. We identify exactly which topics are secure,
                  which need reinforcement, and which haven't been understood at
                  all. From there, we build a learning plan that targets the areas
                  where marks are being lost — not a generic programme that covers
                  everything at the same pace.
                </p>
                <p className="text-navy-700 text-sm">
                  As your child progresses, we adjust. If they master a topic, we
                  move on. If something isn't clicking, we address it from a
                  different angle. This is what personalised learning actually
                  looks like — not a marketing claim, but a working plan that
                  changes as your child does.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Syllabus Mastery & Exam-Board Expertise
                </h3>
                <p className="text-navy-700 text-sm mb-3">
                  Our tutors don't just teach the subject — they teach the exam. We
                  work with the AQA, Edexcel, and OCR specifications daily, and we
                  know the difference between them. We know which topics carry the
                  most marks, which question types catch students out, and exactly
                  how examiners allocate grades.
                </p>
                <p className="text-navy-700 text-sm mb-3">
                  Your child's tutor can walk through a mark scheme with their eyes
                  closed. They know the command words. They know the common
                  mistakes. They know where students drop marks unnecessarily — and
                  they train your child to stop making those errors.
                </p>
                <p className="text-navy-700 text-sm">
                  We've also developed our own revision books and study materials,
                  tailored to the specific exam boards and subjects we teach. These
                  aren't off-the-shelf resources. They're built from years of exam
                  analysis, student feedback, and the patterns we see repeated in
                  every exam series.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <Calendar className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Mock Exam Preparation
                </h3>
                <p className="text-navy-700 text-sm mb-3">
                  We know when your child's school mocks are happening. We know
                  because we've been tracking the mock exam calendars of Dubai's
                  British curriculum schools for over a decade. Our programme is
                  built around these dates — not around an arbitrary schedule.
                </p>
                <p className="text-navy-700 text-sm mb-3">
                  In the weeks leading up to mocks, we shift into exam-simulation
                  mode. Your child sits full papers under timed conditions, receives
                  detailed feedback against the mark scheme, and works through
                  their weakest areas before the real mock arrives. The result: your
                  child walks into their mock confident, prepared, and familiar with
                  the pressure of exam conditions.
                </p>
                <p className="text-navy-700 text-sm">
                  Mock results matter. They set predicted grades, determine set
                  changes, and shape teacher expectations. We treat them with the
                  same seriousness as the final exams.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Progress Reports & Data-Driven Tracking
                </h3>
                <p className="text-navy-700 text-sm mb-3">
                  You'll never have to guess how your child is performing. We issue
                  regular progress reports that show exactly where your child stands
                  across every topic in their specification. You'll see which areas
                  have improved, which are still being worked on, and what the plan
                  is for the sessions ahead.
                </p>
                <p className="text-navy-700 text-sm">
                  Our tracking isn't just for parents — we use it to drive our
                  teaching. When data shows a student consistently losing marks on a
                  particular question type, we adjust. When a topic clicks and
                  scores improve, we bank it and move on. This is what data-driven
                  tutoring means: every decision backed by evidence, not guesswork.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: THE EXAM BOARDS WE COVER */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Exam Boards We Cover
              </h2>
              <p className="text-navy-600 text-lg">
                Whichever board your child's school uses, we've got it covered
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-navy-900 mb-3">AQA</h3>
                <p className="text-navy-700 text-sm">
                  The most widely used exam board in the UK. We teach to every AQA
                  specification across our GCSE subjects — from content to mark
                  scheme structure.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Edexcel (Pearson)
                </h3>
                <p className="text-navy-700 text-sm">
                  Popular with Dubai's British curriculum schools. We know the
                  Edexcel papers, their style, and the specific ways they test
                  application of knowledge.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-navy-900 mb-3">OCR</h3>
                <p className="text-navy-700 text-sm">
                  Used by several Dubai schools for specific subjects. Our tutors
                  are familiar with OCR's question formats, assessment objectives,
                  and grading patterns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: MOCK EXAMS & THE ROAD TO RESULTS */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Mock Exams and the Road to Results
              </h2>
              <p className="text-navy-600 text-lg">
                We plan around the milestones that actually matter
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700 mb-8">
              <p>
                GCSE preparation isn't a straight line — it's a series of critical
                checkpoints. We build our programme around each one, so your child
                arrives at every milestone ready.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  Phase 1
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  September to December (Building Foundations)
                </h3>
                <p className="text-sm text-navy-700">
                  The first term of each GCSE year is about building secure topic
                  knowledge. We work alongside your child's school scheme of work,
                  reinforcing what's being taught in class and filling any gaps
                  that emerge. Regular topic tests track progress.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
                <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  Phase 2
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  January to March (Mock Exam Preparation)
                </h3>
                <p className="text-sm text-navy-700">
                  Mock exams are the first real test of exam readiness. We prepare
                  your child specifically for their school's mock papers — timed
                  practice, mark scheme analysis, and exam technique under pressure.
                  Mock results set predicted grades and reveal exactly where to
                  focus revision.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
                <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  Phase 3
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  April to June (Final Revision & Exam Season)
                </h3>
                <p className="text-sm text-navy-700">
                  The final stretch. We switch to intensive revision mode: targeted
                  topic review, past paper practice, and examiner-focused technique
                  work. Your child enters the exam hall having already practised
                  under the exact conditions they'll face.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: OUR GCSE TEACHING APPROACH */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Our GCSE Teaching Approach
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Small Groups
                </h3>
                <p className="text-sm text-navy-700">
                  Maximum 6 students per class, with most sessions averaging 2–3.
                  Every student gets the attention they need — no one falls through
                  the cracks.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Exam Technique
                </h3>
                <p className="text-sm text-navy-700">
                  We teach how examiners think. Mark schemes, command words, timing,
                  structure — your child learns to turn what they know into the
                  marks they deserve.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Confidence & Consistency
                </h3>
                <p className="text-sm text-navy-700">
                  Weekly sessions build momentum. Regular testing builds familiarity.
                  By the time exams arrive, your child has done this hundreds of
                  times before.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Progress Tracking
                </h3>
                <p className="text-sm text-navy-700">
                  Data-driven reports show exactly where your child stands. No
                  surprises — just clear information and a plan for what comes next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: WHY IMPROVE ME FOR GCSE? */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why Improve ME for GCSE?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                "KHDA-approved tutoring centre in Gold & Diamond Park, Dubai",
                "16+ years preparing GCSE students for top grades in Dubai",
                "Specialist subject tutors who know AQA, Edexcel, and OCR inside out",
                "Small groups (max 6 students) for focused, personalised teaching",
                "Our own revision books and study materials — built from real exam analysis",
                "Data-driven progress reports so you always know where your child stands",
                "Mock exam preparation aligned to your child's school calendar",
                "Structured, syllabus-driven sessions — not generic homework help",
                "Proven approach trusted by 1,000+ students every year",
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

        {/* SECTION 10: GCSE SUCCESS STORIES */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              GCSE Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  quote:
                    "My daughter went from predicted 5s to achieving 8s and 9s across her sciences. The tutors knew the syllabus better than her school teachers — she said everything finally made sense.",
                  name: "Fatima A.",
                  role: "Parent, Year 11 Student",
                },
                {
                  quote:
                    "The mock exam preparation was a game-changer. My son had already sat three full papers before his school mock, so he walked in completely calm. His predicted grades went up immediately.",
                  name: "James T.",
                  role: "Parent, Year 11 Student",
                },
                {
                  quote:
                    "What impressed me most was the progress reports. I could see exactly what was being covered and where my son was improving. No other tutoring centre gave us that level of detail.",
                  name: "Nadia S.",
                  role: "Parent, Year 10 Student",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <meta itemProp="itemReviewed" content="GCSE Tutoring" />
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

        {/* SECTION 11: EXPLORE RELATED CURRICULUM */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Explore Related Curriculum
              </h2>
              <p className="text-navy-600 text-lg">
                See what comes before and after GCSE
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/curriculum/secondary/a-level"
                className="block h-full group"
              >
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 h-full text-white hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                  <div className="relative z-10">
                    <GraduationCap className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      A-Level Curriculum
                    </h3>
                    <p className="text-white/90 mb-4">
                      Explore the A-Level pathway and see how GCSE results shape
                      your child's post-16 options.
                    </p>
                    <span className="inline-flex items-center gap-2 font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/ks3"
                className="block h-full group"
              >
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-8 h-full text-white hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                  <div className="relative z-10">
                    <BookOpen className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      Key Stage 3 Curriculum
                    </h3>
                    <p className="text-white/90 mb-4">
                      Explore the KS3 foundation years — the stage that prepares
                      students for GCSE success.
                    </p>
                    <span className="inline-flex items-center gap-2 font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/igcse"
                className="block h-full group"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 h-full text-white hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                  <div className="relative z-10">
                    <Award className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      IGCSE Curriculum
                    </h3>
                    <p className="text-white/90 mb-4">
                      Taking IGCSEs instead? Explore our IGCSE programme for
                      international exam board support.
                    </p>
                    <span className="inline-flex items-center gap-2 font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 12: FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-white py-14">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              GCSE — Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="age">
                <AccordionTrigger>What age are GCSEs taken?</AccordionTrigger>
                <AccordionContent>
                  GCSEs are typically sat in Year 11, when students are 15–16 years
                  old. The two-year GCSE course runs from Year 10 to Year 11. In
                  the UAE grade system, this corresponds to Grades 9 and 10.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="grading">
                <AccordionTrigger>How are GCSEs graded?</AccordionTrigger>
                <AccordionContent>
                  GCSEs use a 9–1 grading scale, with 9 being the highest. A grade 4
                  is considered a standard pass, and a grade 7 is equivalent to the
                  old A grade. The top grade of 9 is designed to differentiate the
                  very highest-performing students.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="difference">
                <AccordionTrigger>
                  What's the difference between GCSE and IGCSE?
                </AccordionTrigger>
                <AccordionContent>
                  GCSEs follow UK national exam boards (AQA, Edexcel, OCR) and are
                  the standard qualification in British curriculum schools. IGCSEs
                  are the international version, set by Cambridge International or
                  Edexcel International, and are designed for schools outside the
                  UK. Both are widely recognised, but the syllabus content and exam
                  structure differ. We tutor for both.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="how-many">
                <AccordionTrigger>
                  How many GCSEs does my child take?
                </AccordionTrigger>
                <AccordionContent>
                  Most students take 8–10 GCSE subjects. Core subjects (Maths,
                  English, and Sciences) are compulsory, with 3–4 additional
                  options chosen during Year 9. The exact number depends on your
                  child's school.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mocks">
                <AccordionTrigger>When are mock exams?</AccordionTrigger>
                <AccordionContent>
                  Most Dubai schools schedule mock exams in the autumn or spring
                  term of Year 11, typically between November and February. Some
                  schools also run Year 10 mocks. We track mock dates across
                  Dubai's major British schools and prepare your child accordingly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="coursework">
                <AccordionTrigger>
                  Is coursework still part of GCSEs?
                </AccordionTrigger>
                <AccordionContent>
                  In almost all subjects, coursework has been replaced by terminal
                  exams at the end of Year 11. This means your child's entire grade
                  depends on their exam performance. A small number of subjects
                  retain a practical or spoken language component, but the vast
                  majority is exam-assessed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="exam-boards">
                <AccordionTrigger>
                  Which exam boards do you cover?
                </AccordionTrigger>
                <AccordionContent>
                  We cover AQA, Edexcel, and OCR — the three main UK exam boards
                  used by British curriculum schools in Dubai. Our tutors know each
                  board's specification, question styles, and mark schemes in
                  detail.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="groups">
                <AccordionTrigger>How do your groups work?</AccordionTrigger>
                <AccordionContent>
                  Our groups have a maximum of 6 students, with most sessions
                  averaging 2–3. Students are grouped by subject, exam board, and
                  ability level to ensure every session is relevant and productive.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="too-late">
                <AccordionTrigger>
                  My child's mocks are in two months. Is it too late to start?
                </AccordionTrigger>
                <AccordionContent>
                  It's never too late to make a difference — but the sooner you
                  start, the more we can achieve. We'll run a diagnostic assessment
                  to identify the highest-impact areas and focus your child's time
                  where it matters most. Even a few weeks of targeted preparation
                  can shift mock results.
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

        {/* SECTION 13: FINAL CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-14">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get the GCSE Results That Open Doors?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
              Book a free assessment and find out exactly where your child stands —
              and how we can help them achieve the grades they need for A-Level and
              beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/contact#assessment"
                className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition inline-flex items-center justify-center gap-2"
                aria-label="Book a free GCSE assessment in Dubai"
              >
                Book Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/courses"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
                aria-label="View all courses at Improve ME Institute"
              >
                View All Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-white/70 text-sm">
              Trusted by families across Dubai since 2010 · KHDA-approved · Gold &
              Diamond Park
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
