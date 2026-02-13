import Link from "next/link";
import type { Metadata } from "next";
import {
  Globe,
  Map,
  Layers,
  Scale,
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
  Brain,
  Briefcase,
  FlaskConical,
  Leaf,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "IGCSE Tutoring Dubai | Cambridge & Edexcel Experts — Improve ME",
  description:
    "IGCSE tutoring in Dubai for Cambridge and Edexcel International. Small groups, specialist subject tutors, and exam-board-specific preparation. Book a free assessment.",
  keywords: [
    "IGCSE tutoring Dubai",
    "IGCSE tutor Dubai",
    "IGCSE exam preparation Dubai",
    "Cambridge IGCSE Dubai",
    "IGCSE revision Dubai",
    "Cambridge International",
    "Edexcel International",
    "international school exams",
    "A*-G grading",
    "extended and core curriculum",
    "IGCSE exam boards",
  ],
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "IGCSE Tutoring Dubai | Cambridge & Edexcel Experts — Improve ME",
    description:
      "IGCSE tutoring in Dubai for Cambridge and Edexcel International. Small groups, specialist subject tutors, and exam-board-specific preparation. Book a free assessment.",
    url: "https://improvemeinstitute.com/curriculum/secondary/igcse",
    siteName: "Improve ME Institute",
    locale: "en_AE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://improvemeinstitute.com/curriculum/secondary/igcse",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "IGCSE Curriculum",
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
  educationalLevel: "IGCSE (Years 10-11)",
  coursePrerequisites: "Completion of Key Stage 3 or equivalent",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between GCSE and IGCSE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GCSEs are set by UK exam boards (AQA, Edexcel UK, OCR) for schools in the UK. IGCSEs are set by Cambridge International or Edexcel International for schools outside the UK. Both are rigorous and internationally recognised, but the syllabus content, exam structure, and grading scales differ. We tutor for both — and we teach to the exact specification your child is sitting.",
      },
    },
    {
      "@type": "Question",
      name: "Which IGCSE exam board does my child's school use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Dubai international schools use either Cambridge International (CAIE) or Edexcel International. Your child's school will confirm which board they're registered with. If you're unsure, ask us — we're familiar with the exam boards used by most British-style schools in Dubai.",
      },
    },
    {
      "@type": "Question",
      name: "What does Core and Extended mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some Cambridge IGCSE subjects offer two tiers. The Core curriculum covers grades C to G, while the Extended curriculum covers grades A* to E. If your child is targeting top grades, they need to be on the Extended paper. We can assess your child against both tiers and advise honestly on which pathway is right.",
      },
    },
    {
      "@type": "Question",
      name: "Are IGCSEs recognised by universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. IGCSEs are recognised by universities worldwide, including in the UK, US, and across Europe and Asia. They carry the same weight as GCSEs in university admissions processes.",
      },
    },
    {
      "@type": "Question",
      name: "How many IGCSE subjects does my child take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most students take 7–10 IGCSE subjects. The exact number depends on your child's school. Core subjects typically include Maths, English, and Sciences, with additional options in humanities, business, and languages.",
      },
    },
    {
      "@type": "Question",
      name: "When are IGCSE exams held?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main IGCSE exam session runs from May to June. Cambridge International also offers a November exam session, which some Dubai schools use. Results are typically released in August (May/June session) or January (November session).",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover both Cambridge and Edexcel International?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our tutors are experienced with both boards and teach to each specification separately. We never mix exam board content — every session is specific to the papers your child will sit.",
      },
    },
    {
      "@type": "Question",
      name: "My child is struggling — is it too late to start tutoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's never too late to improve, but earlier is always better. Even in the final months before exams, targeted preparation focused on high-impact areas can make a meaningful difference to grades. We'll assess your child's position and focus our time where it will count most.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://improvemeinstitute.com" },
    { "@type": "ListItem", position: 2, name: "Our Curriculum", item: "https://improvemeinstitute.com/curriculum" },
    { "@type": "ListItem", position: 3, name: "Secondary", item: "https://improvemeinstitute.com/curriculum/secondary" },
    { "@type": "ListItem", position: 4, name: "IGCSE", item: "https://improvemeinstitute.com/curriculum/secondary/igcse" },
  ],
};

export default function IGCSEPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
                  IGCSE
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
                  International Curriculum
                </span>
                <span className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm">
                  Cambridge & Edexcel
                </span>
              </div>
              <h1
                itemProp="name"
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                IGCSE Curriculum
              </h1>
              <p className="text-white/80 text-sm md:text-base mb-4">
                Ages 14–16 · Cambridge International & Edexcel International · Years 10–11 (Grades 9–10)
              </p>
              <p
                itemProp="description"
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
              >
                The international gold standard in secondary qualifications — and we know exactly how to help your child excel in every subject, every paper, every exam session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition inline-flex items-center justify-center gap-2"
                  aria-label="Book a free IGCSE assessment in Dubai"
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

        {/* SECTION 2: WHAT IS IGCSE? + COMPARISON */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                What is IGCSE? A Parent&apos;s Guide
              </h2>
              <p className="text-navy-600 text-lg mb-2">
                Understanding the qualification that most Dubai international schools use
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700 mb-12">
              <p>
                IGCSE stands for International General Certificate of Secondary Education. It&apos;s the international equivalent of the GCSE, designed specifically for schools outside the UK. In Dubai, the IGCSE is the dominant qualification across international schools that follow British-style curricula — from established institutions to the newest additions to the city&apos;s education landscape.
              </p>
              <p>
                IGCSEs are set by two main exam boards: Cambridge International (also known as CAIE or CIE) and Edexcel International (part of Pearson). While both assess the same broad subject areas, they differ in syllabus content, exam structure, and how marks are awarded. Knowing which board your child&apos;s school uses — and understanding the specifics of their papers — is essential.
              </p>
              <p>
                Like GCSEs, IGCSEs are largely assessed through terminal exams at the end of the course. However, some IGCSE subjects offer a coursework or practical assessment component, depending on the exam board and subject. Your child&apos;s school will determine which assessment route they follow.
              </p>
            </div>

            {/* GCSE vs IGCSE Comparison - 2 Column Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                How Does IGCSE Differ from GCSE?
              </h3>
              <p className="text-navy-700 text-center mb-8 max-w-3xl mx-auto">
                This is the question we hear most from parents in Dubai. Here&apos;s the short answer: both are rigorous, internationally recognised qualifications — but they are not the same exam.
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <Map className="w-6 h-6 text-blue-600" />
                    GCSE
                  </h4>
                  <ul className="space-y-2 text-navy-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Set by UK boards: AQA, Edexcel (UK), OCR
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Designed for schools in the UK
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Grades 9–1
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      UK-centric content and context in some subjects
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Almost entirely exam-assessed
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-blue-600" />
                    IGCSE
                  </h4>
                  <ul className="space-y-2 text-navy-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Set by Cambridge International or Edexcel International
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Designed for international schools worldwide
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Grades A*–G (Cambridge) or 9–1 (Edexcel International)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Internationally contextualised content
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Mostly exam-assessed, with some coursework options
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 max-w-4xl mx-auto">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                  <p className="font-semibold text-navy-900 mb-2">The key point for parents:</p>
                  <p className="text-navy-700">
                    your child&apos;s tutor needs to know which qualification they&apos;re actually sitting. A tutor preparing a student for Cambridge IGCSE Biology is working with a different specification, different past papers, and different mark scheme expectations than one preparing for AQA GCSE Biology. At Improve ME, we don&apos;t blur this distinction. We teach to the exact specification your child is being examined on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY IGCSE RESULTS MATTER */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Why IGCSE Results Matter in Dubai
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700">
              <p>
                IGCSE results carry real weight. They determine which A-Level or IB subjects your child can pursue, and competitive sixth form programmes set clear grade thresholds for entry. Universities increasingly consider IGCSE results as part of the admissions picture — particularly for early applicants and those targeting selective programmes.
              </p>
              <p>
                In Dubai&apos;s competitive school environment, strong IGCSE performance also impacts set placement, scholarship eligibility, and the breadth of subject choices available at post-16 level. Students who perform well at IGCSE carry that momentum into A-Level or IB — and arrive at university applications with a track record that admissions teams can trust.
              </p>
              <p>
                We&apos;ve seen it for 16 years: the students who take IGCSE preparation seriously are the ones who keep their options open. And keeping options open is exactly what the IGCSE years should achieve.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: SUBJECTS WE COVER */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                IGCSE Subjects at Improve ME
              </h2>
              <p className="text-navy-600 text-lg">
                Every subject taught by tutors who know your child&apos;s exact exam board, specification, and paper structure
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link
                href="/curriculum/secondary/igcse/mathematics"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Mathematics
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Number, algebra, geometry, and statistics across core and extended tiers. We know where Cambridge and Edexcel papers differ — and teach accordingly.
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/igcse/english-language"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <BookOpen className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    English Language
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Reading comprehension, directed writing, and composition. We teach the specific skills each paper tests — from summary techniques to persuasive writing under exam conditions.
                  </p>
                  <span className="inline-flex items-center gap-2 text-purple-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/igcse/biology"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Biology
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Cell biology to human physiology to ecology. Structured topic coverage with past paper practice built into every session.
                  </p>
                  <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/igcse/chemistry"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <FlaskConical className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Chemistry
                  </h3>
                  <p className="text-navy-700 mb-4">
                    From atomic structure to organic chemistry — taught with the precision and depth that top IGCSE grades demand.
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/igcse/physics"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Zap className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Physics
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Motion, energy, waves, electricity, and nuclear physics. We build conceptual understanding alongside the mathematical skills your child needs for the exam.
                  </p>
                  <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/igcse/business-studies"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Briefcase className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Business Studies
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Business organisation, marketing, finance, and human resources. Real-world concepts applied to exam-style scenarios.
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/igcse/economics"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <TrendingUp className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Economics
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Market mechanisms, government intervention, and the global economy. We develop the analytical thinking that examiners reward with top marks.
                  </p>
                  <span className="inline-flex items-center gap-2 text-amber-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/igcse/psychology"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Brain className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Psychology
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Research methods, cognitive processes, and social psychology. Evidence-based answers structured for maximum marks.
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

        {/* SECTION 5: HOW WE DELIVER TOP IGCSE GRADES */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                How We Deliver Top IGCSE Grades
              </h2>
              <p className="text-navy-600 text-lg mb-6">
                Precision teaching for international exams — built on 16 years of results in Dubai
              </p>
              <p className="text-navy-700 max-w-4xl mx-auto">
                We know the IGCSE landscape in Dubai better than anyone. We know which schools use Cambridge, which use Edexcel International, and exactly how their exam structures differ. That depth of knowledge shapes everything we do.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Board-Specific Teaching from Day One
                </h3>
                <p className="text-navy-700 text-sm mb-3">
                  The first thing we establish is which exam board and specification your child is following. It sounds obvious, but it matters more than most parents realise. A Cambridge IGCSE Maths paper tests different content at different weightings to an Edexcel International paper. The question styles are different. The mark schemes reward different things.
                </p>
                <p className="text-navy-700 text-sm">
                  Every session your child attends at Improve ME is aligned to their exact specification. We use past papers from their board, we reference their mark schemes, and we teach the specific exam techniques that their papers require. There is no generic IGCSE tutoring here.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Our Own Study Materials
                </h3>
                <p className="text-navy-700 text-sm mb-3">
                  We&apos;ve invested years in developing our own revision books and topic resources — written specifically for IGCSE exam boards. These materials are built from detailed analysis of past papers, examiner reports, and the patterns we see across every exam series. They&apos;re structured to match the order topics are taught in Dubai schools and designed to be used alongside our sessions.
                </p>
                <p className="text-navy-700 text-sm">
                  Your child won&apos;t be working from photocopied textbook pages. They&apos;ll have materials that are purpose-built, regularly updated, and aligned to the exact exam they&apos;re sitting.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Data-Driven Progress Tracking
                </h3>
                <p className="text-navy-700 text-sm mb-3">
                  We track your child&apos;s performance across every topic in their specification — not in general terms, but against the specific assessment objectives their exam board uses. When we see a pattern of lost marks in a particular area, we address it immediately. When progress is clear, we move on.
                </p>
                <p className="text-navy-700 text-sm">
                  You&apos;ll receive regular progress reports that give you a transparent view of where your child stands. These reports don&apos;t just say &quot;doing well&quot; or &quot;needs improvement.&quot; They tell you which topics are secure, which are being worked on, and what the plan is for the weeks ahead.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <ClipboardCheck className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Mock Preparation & Exam Simulation
                </h3>
                <p className="text-navy-700 text-sm mb-3">
                  We prepare your child for their school&apos;s mock exams with the same intensity we bring to the final papers. That means full past paper practice under timed conditions, detailed mark scheme analysis, and targeted follow-up on areas where marks were lost.
                </p>
                <p className="text-navy-700 text-sm">
                  We also build exam resilience. IGCSE students in Dubai typically sit 15–25 individual papers across their subjects in a compressed exam window. That&apos;s a significant physical and mental demand. We prepare your child not just for individual papers, but for the sustained performance that exam season requires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: EXAM BOARDS */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Exam Boards We Cover
              </h2>
              <p className="text-navy-600 text-lg">
                Deep expertise across both major international exam boards
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Cambridge International (CAIE)
                </h3>
                <p className="text-navy-700 text-sm">
                  The world&apos;s largest provider of international qualifications. We teach to every Cambridge IGCSE specification across our subjects — from content structure to the specific way Cambridge examiners allocate marks. We know the papers, the insert materials, and the style of questioning inside out.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Edexcel International (Pearson)
                </h3>
                <p className="text-navy-700 text-sm">
                  Widely used in Dubai&apos;s international schools. Edexcel International papers have their own character — we know the format, the command words, and the specific approach to extended answers that these papers reward. Our tutors work with current Edexcel specifications daily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: UNDERSTANDING IGCSE TIERS & GRADING */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Understanding IGCSE Tiers and Grading
              </h2>
              <p className="text-navy-600 text-lg mb-2">
                A quick guide to how IGCSE grades work — and why tier choices matter
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700 mb-10">
              <p>
                One of the most common questions we get from parents is about IGCSE grading and tiers. It can be confusing, so here&apos;s what you need to know.
              </p>
              <p>
                <strong>Grading scales.</strong> Cambridge IGCSE subjects are graded A* to G, where A* is the highest grade. Edexcel International IGCSEs use the 9–1 scale (matching the UK GCSE system), where 9 is the highest. Both grading scales are internationally recognised.
              </p>
              <p>
                <strong>Core and Extended tiers.</strong> Some Cambridge IGCSE subjects — particularly Maths and the Sciences — offer two tiers: Core and Extended. The Core curriculum covers grades C to G, while the Extended curriculum covers grades A* to E. This means that if your child is entered for the Core paper, the highest grade they can achieve is a C.
              </p>
              <p>
                This is an important decision that your child&apos;s school will make, often during Year 10. If your child is targeting top grades, they need to be on the Extended paper. If they&apos;re currently on the Core pathway but showing potential, there may still be time to move up.
              </p>
            </div>

            {/* Tier Visual - Core vs Extended Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
              <div className="bg-white border-2 border-gray-300 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-8 h-8 text-gray-600" />
                  <h4 className="text-lg font-bold text-navy-900">Core Tier</h4>
                </div>
                <p className="text-navy-700 text-sm mb-4">
                  Grades C to G
                </p>
                <p className="text-navy-700 text-sm">
                  Maximum grade achievable: <strong>C</strong>. Suitable for students targeting a solid pass. If your child is capable of more, they should be on Extended.
                </p>
              </div>
              <div className="bg-white border-2 border-blue-400 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Scale className="w-8 h-8 text-blue-600" />
                  <h4 className="text-lg font-bold text-navy-900">Extended Tier</h4>
                </div>
                <p className="text-navy-700 text-sm mb-4">
                  Grades A* to E
                </p>
                <p className="text-navy-700 text-sm">
                  Maximum grade achievable: <strong>A*</strong>. Required for top grades. Essential for competitive sixth form and university pathways.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h4 className="font-semibold text-navy-900 mb-2">How we help with tier decisions</h4>
                <p className="text-navy-700">
                  We assess your child against both Core and Extended content, so we can give you an honest picture of where they stand. If they&apos;re on the Core pathway but capable of more, we&apos;ll tell you — and prepare them for the move. If they&apos;re on Extended but struggling with certain topics, we&apos;ll identify the gaps and close them before exam season.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: OUR IGCSE TEACHING APPROACH */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Our IGCSE Teaching Approach
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Small Groups
                </h3>
                <p className="text-sm text-navy-700">
                  Maximum 6 students per class, with most averaging 2–3. Grouped by subject, exam board, and tier — so every minute of every session is relevant to your child&apos;s exam.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Specification-Led Teaching
                </h3>
                <p className="text-sm text-navy-700">
                  Every session is mapped to your child&apos;s exact exam board specification. We don&apos;t teach generic content — we teach what&apos;s on the paper.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Exam Technique & Past Papers
                </h3>
                <p className="text-sm text-navy-700">
                  Regular practice with real past papers from your child&apos;s board. We teach mark allocation, timing, and the specific answering strategies each paper rewards.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Progress Reports
                </h3>
                <p className="text-sm text-navy-700">
                  Data-driven reports that show exactly which topics are secure and which need work. You&apos;ll always know where your child stands and what we&apos;re doing about it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: WHY IMPROVE ME FOR IGCSE? */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why Improve ME for IGCSE?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                "KHDA-approved tutoring centre in Gold & Diamond Park, Dubai",
                "16+ years supporting IGCSE students across Dubai's international schools",
                "Deep expertise in both Cambridge International and Edexcel International specifications",
                "Small groups (max 6 students) for focused, personalised attention",
                "Our own revision books and study materials — built from real IGCSE exam analysis",
                "Data-driven progress reports aligned to exam board assessment objectives",
                "Mock exam preparation matched to your child's school calendar",
                "Honest guidance on Core vs Extended tier placement",
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

        {/* SECTION 10: IGCSE SUCCESS STORIES */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              IGCSE Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  quote:
                    "My daughter was on the Core paper for Maths and we were told it was too late to move to Extended. Improve ME assessed her, said she could do it, and prepared her in three months. She got an A.",
                  name: "Rachel M.",
                  role: "Parent, Year 11 Student",
                },
                {
                  quote:
                    "The difference between Improve ME and other tutoring we tried is that they actually knew the Cambridge papers. Other tutors were using the wrong past papers. Here, everything was specific to my son's exam board.",
                  name: "Omar H.",
                  role: "Parent, Year 11 Student",
                },
                {
                  quote:
                    "The progress reports showed us exactly what was happening — which topics were strong, which needed work. For the first time, we felt like we had real visibility into our daughter's preparation.",
                  name: "Priya K.",
                  role: "Parent, Year 10 Student",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <meta itemProp="itemReviewed" content="IGCSE Tutoring" />
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
                See what comes before and after IGCSE
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/curriculum/secondary/a-level"
                className="block h-full group"
              >
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-8 h-full text-white hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                  <div className="relative z-10">
                    <GraduationCap className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      A-Level Curriculum
                    </h3>
                    <p className="text-white/90 mb-4">
                      Explore how IGCSE results shape A-Level pathways and university applications.
                    </p>
                    <span className="inline-flex items-center gap-2 font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/ib"
                className="block h-full group"
              >
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-8 h-full text-white hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                  <div className="relative z-10">
                    <Award className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      IB Curriculum
                    </h3>
                    <p className="text-white/90 mb-4">
                      Some IGCSE students transition to the IB Diploma. Explore how we support the IB pathway.
                    </p>
                    <span className="inline-flex items-center gap-2 font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/gcse"
                className="block h-full group"
              >
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 h-full text-white hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                  <div className="relative z-10">
                    <BookOpen className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      GCSE Curriculum
                    </h3>
                    <p className="text-white/90 mb-4">
                      Taking GCSEs rather than IGCSEs? Explore our GCSE programme for UK exam board support.
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
              IGCSE — Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="difference">
                <AccordionTrigger>
                  What is the difference between GCSE and IGCSE?
                </AccordionTrigger>
                <AccordionContent>
                  GCSEs are set by UK exam boards (AQA, Edexcel UK, OCR) for schools in the UK. IGCSEs are set by Cambridge International or Edexcel International for schools outside the UK. Both are rigorous and internationally recognised, but the syllabus content, exam structure, and grading scales differ. We tutor for both — and we teach to the exact specification your child is sitting.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="exam-board">
                <AccordionTrigger>
                  Which IGCSE exam board does my child&apos;s school use?
                </AccordionTrigger>
                <AccordionContent>
                  Most Dubai international schools use either Cambridge International (CAIE) or Edexcel International. Your child&apos;s school will confirm which board they&apos;re registered with. If you&apos;re unsure, ask us — we&apos;re familiar with the exam boards used by most British-style schools in Dubai.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="core-extended">
                <AccordionTrigger>
                  What does Core and Extended mean?
                </AccordionTrigger>
                <AccordionContent>
                  Some Cambridge IGCSE subjects offer two tiers. The Core curriculum covers grades C to G, while the Extended curriculum covers grades A* to E. If your child is targeting top grades, they need to be on the Extended paper. We can assess your child against both tiers and advise honestly on which pathway is right.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="recognition">
                <AccordionTrigger>
                  Are IGCSEs recognised by universities?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. IGCSEs are recognised by universities worldwide, including in the UK, US, and across Europe and Asia. They carry the same weight as GCSEs in university admissions processes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="subjects">
                <AccordionTrigger>
                  How many IGCSE subjects does my child take?
                </AccordionTrigger>
                <AccordionContent>
                  Most students take 7–10 IGCSE subjects. The exact number depends on your child&apos;s school. Core subjects typically include Maths, English, and Sciences, with additional options in humanities, business, and languages.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="exam-dates">
                <AccordionTrigger>
                  When are IGCSE exams held?
                </AccordionTrigger>
                <AccordionContent>
                  The main IGCSE exam session runs from May to June. Cambridge International also offers a November exam session, which some Dubai schools use. Results are typically released in August (May/June session) or January (November session).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="both-boards">
                <AccordionTrigger>
                  Do you cover both Cambridge and Edexcel International?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Our tutors are experienced with both boards and teach to each specification separately. We never mix exam board content — every session is specific to the papers your child will sit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="too-late">
                <AccordionTrigger>
                  My child is struggling — is it too late to start tutoring?
                </AccordionTrigger>
                <AccordionContent>
                  It&apos;s never too late to improve, but earlier is always better. Even in the final months before exams, targeted preparation focused on high-impact areas can make a meaningful difference to grades. We&apos;ll assess your child&apos;s position and focus our time where it will count most.
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
              Ready to Achieve the IGCSE Results Your Child Deserves?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
              Book a free assessment and find out exactly where your child stands across their IGCSE subjects — and how our specialist tutors can help them reach the top grades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/contact#assessment"
                className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition inline-flex items-center justify-center gap-2"
                aria-label="Book a free IGCSE assessment in Dubai"
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
              Trusted by families across Dubai since 2010 · KHDA-approved · Gold & Diamond Park
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
