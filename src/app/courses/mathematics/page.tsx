import Link from "next/link";
import type { Metadata } from "next";
import {
  Users,
  GraduationCap,
  Target,
  TrendingUp,
  CheckCircle,
  BookOpen,
  Award,
  ArrowRight,
  Calculator,
  Brain,
  BarChart3,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

export const metadata: Metadata = {
  title:
    "Mathematics Tutoring Dubai | GCSE, IGCSE, A-Level, IB | Improve ME Institute",
  description:
    "Expert mathematics tutoring in Dubai for all levels. From EYFS to A-Level and IB. Small groups, proven results. Algebra, calculus, statistics, and more.",
  keywords:
    "mathematics tutoring Dubai, GCSE maths Dubai, IGCSE maths tutor, A-Level mathematics Dubai, IB mathematics tutoring, maths classes Dubai, Gold Diamond Park tutoring, mathematics exam preparation Dubai",
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "Mathematics Tutoring in Dubai - All Levels | Improve ME Institute",
    description:
      "Expert mathematics tutoring for EYFS, GCSE, IGCSE, A-Level, and IB in Dubai. Small groups, qualified tutors, proven results.",
    url: "https://improvemeinstitute.com/courses/mathematics",
    siteName: "Improve ME Institute",
    images: [
      {
        url: "/og-mathematics.jpg",
        width: 1200,
        height: 630,
        alt: "Mathematics Tutoring in Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathematics Tutoring in Dubai - GCSE, A-Level & IB",
    description:
      "Expert mathematics tutoring in Dubai. All major curricula. Book your free assessment today.",
    images: ["/og-mathematics.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://improvemeinstitute.com/courses/mathematics",
  },
};

const qualificationsId = "mathematics-qualifications";

export default function MathematicsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Mathematics Tutoring - EYFS, GCSE, IGCSE, A-Level & IB",
    description:
      "Comprehensive mathematics tutoring for students in Dubai covering EYFS, Primary, GCSE, IGCSE, A-Level, and IB curricula",
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
    educationalLevel: ["Primary Education", "Secondary Education", "High School"],
    coursePrerequisites: "None - suitable for all levels from EYFS to IB",
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "In-person",
        location: {
          "@type": "Place",
          name: "Improve ME Institute",
          address: "Gold and Diamond Park, Dubai",
        },
      },
    ],
    offers: {
      "@type": "Offer",
      category: "Educational",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "116",
      bestRating: "5",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What mathematics qualifications do you teach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We teach mathematics for EYFS/Primary (Ages 3-11), Key Stage 3 (Ages 11-14), GCSE, IGCSE, A-Level, and IB Diploma (both Standard and Higher Level). We cover all major exam boards including AQA, Edexcel, OCR, Cambridge, and IB.",
        },
      },
      {
        "@type": "Question",
        name: "What is the class size for mathematics tutoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We maintain small group classes with a maximum of 6 students to ensure personalized attention. We also offer 1-on-1 tutoring for students who prefer individual instruction.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover all mathematics topics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we cover all mathematics topics from number sense and arithmetic to advanced calculus, statistics, and mechanics. Our curriculum is comprehensive and aligned with all major exam boards.",
        },
      },
      {
        "@type": "Question",
        name: "How much does mathematics tutoring cost in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our mathematics tutoring fees vary based on the level (Primary, GCSE, A-Level, IB) and format (group or individual). Please book a free assessment to discuss pricing options that suit your needs.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Improve ME Institute located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are located in Gold & Diamond Park, Dubai (Suite 3016-3017, Building 3), easily accessible from major areas of Dubai with ample parking available.",
        },
      },
      {
        "@type": "Question",
        name: "What are the mathematics tutoring class timings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer flexible scheduling including weekday evenings (4pm-9pm), weekend mornings and afternoons, and intensive holiday courses to accommodate student schedules.",
        },
      },
    ],
  };

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
                  aria-label="Go to Improve ME Institute home page"
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
                  href="/courses"
                  itemProp="item"
                  className="text-navy-600 hover:text-navy-900"
                  aria-label="View all tutoring courses at Improve ME Institute"
                >
                  <span itemProp="name">Courses</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-gray-400">/</li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <span itemProp="name" className="text-navy-900 font-medium">
                  Mathematics
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* SECTION 1: HERO */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 chevron-pattern pt-32 pb-16">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1
                itemProp="name"
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Mathematics
              </h1>
              <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                EYFS | Primary | GCSE | IGCSE | A-Level | IB
              </div>
              <p
                itemProp="description"
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
              >
                Build confidence and master mathematics from foundation through to advanced level. We cover everything from number sense and arithmetic to calculus and statistics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
                  aria-label="Book a free mathematics assessment in Dubai"
                >
                  Book Free Assessment
                </Link>
                <Link
                  href={`#${qualificationsId}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
                  aria-label="Explore mathematics qualifications we teach in Dubai"
                >
                  Explore Qualifications
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: QUALIFICATIONS OVERVIEW */}
        <section
          id={qualificationsId}
          className="bg-white py-14 scroll-mt-24"
          aria-labelledby="mathematics-qualifications-heading"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2
              id="mathematics-qualifications-heading"
              className="text-3xl font-bold text-navy-900 mb-4 text-center"
            >
              Mathematics Across All Qualifications
            </h2>
            <p className="text-navy-600 mb-10 text-center">
              Expert Dubai mathematics tutoring tailored to your curriculum
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="group bg-gradient-to-br from-blue-400 to-blue-500 border border-blue-300 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-white text-blue-700 px-3 py-1 rounded-full mb-3 inline-block font-semibold">
                  Ages 3-11
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  EYFS/Primary
                </h3>
                <p className="text-sm text-white/90 mb-3">Foundation Mathematics</p>
                <p className="text-sm text-white/80 mb-4">
                  Building number sense, problem-solving, and mathematical reasoning.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-white text-blue-700 px-3 py-1 rounded-full mb-3 inline-block font-semibold">
                  Ages 11-14
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Key Stage 3
                </h3>
                <p className="text-sm text-white/90 mb-3">UK National Curriculum</p>
                <p className="text-sm text-white/80 mb-4">
                  Preparing for GCSE with comprehensive coverage of key concepts.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-green-500 to-green-600 border border-green-400 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-white text-green-700 px-3 py-1 rounded-full mb-3 inline-block font-semibold">
                  Ages 14-16
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  GCSE
                </h3>
                <p className="text-sm text-white/90 mb-3">AQA, Edexcel, OCR</p>
                <p className="text-sm text-white/80 mb-4">
                  Foundation to Higher tier, targeting grades 7-9.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-teal-500 to-teal-600 border border-teal-400 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-white text-teal-700 px-3 py-1 rounded-full mb-3 inline-block font-semibold">
                  Ages 14-16
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  IGCSE
                </h3>
                <p className="text-sm text-white/90 mb-3">Cambridge, Edexcel</p>
                <p className="text-sm text-white/80 mb-4">
                  International curriculum with global recognition.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-purple-500 to-purple-600 border border-purple-400 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-white text-purple-700 px-3 py-1 rounded-full mb-3 inline-block font-semibold">
                  Ages 16-18
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  A-Level
                </h3>
                <p className="text-sm text-white/90 mb-3">AQA, Edexcel, OCR</p>
                <p className="text-sm text-white/80 mb-4">
                  Advanced level for university preparation.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-indigo-500 to-indigo-600 border border-indigo-400 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-white text-indigo-700 px-3 py-1 rounded-full mb-3 inline-block font-semibold">
                  Ages 16-18
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  IB
                </h3>
                <p className="text-sm text-white/90 mb-3">SL & HL</p>
                <p className="text-sm text-white/80 mb-4">
                  International Baccalaureate standard and higher level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT WE COVER */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Comprehensive Mathematics Coverage
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Calculator
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-label="Calculator icon for foundation mathematics topics"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Foundation Topics
                </h3>
                <ul className="space-y-2 text-navy-700">
                  <li>Number and place value</li>
                  <li>Arithmetic operations</li>
                  <li>Fractions, decimals, percentages</li>
                  <li>Basic algebra and equations</li>
                  <li>Geometry and measurement</li>
                  <li>Data handling and statistics</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Brain
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-label="Brain icon for intermediate mathematics concepts"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Intermediate Topics
                </h3>
                <ul className="space-y-2 text-navy-700">
                  <li>Linear and quadratic equations</li>
                  <li>Trigonometry</li>
                  <li>Coordinate geometry</li>
                  <li>Probability and statistics</li>
                  <li>Sequences and series</li>
                  <li>Graph interpretation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <BarChart3
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-label="Bar chart icon for advanced mathematics topics"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Advanced Topics
                </h3>
                <ul className="space-y-2 text-navy-700">
                  <li>Calculus (differentiation and integration)</li>
                  <li>Further algebra and functions</li>
                  <li>Complex numbers</li>
                  <li>Vectors and matrices</li>
                  <li>Mechanics and statistics</li>
                  <li>Pure and applied mathematics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: BY LEVEL BREAKDOWN */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Mathematics by Level
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Foundation Level
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  EYFS to GCSE/IGCSE Mathematics
                </h3>
                <p className="text-navy-700 mb-4">
                  Building strong foundations in number sense, problem-solving, and mathematical reasoning. We focus on confidence, exam technique, and applying mathematics to real-world situations.
                </p>
                <ul className="space-y-2 text-navy-700">
                  <li>Fundamental concepts and number operations</li>
                  <li>Problem-solving strategies</li>
                  <li>Algebraic manipulation</li>
                  <li>Geometric reasoning</li>
                  <li>Exam technique for top grades</li>
                </ul>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Advanced Level
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  A-Level & IB Mathematics
                </h3>
                <p className="text-navy-700 mb-4">
                  Advanced mathematics covering pure, mechanics, and statistics. We prepare students for university-level mathematics and demanding exams with rigorous problem-solving practice.
                </p>
                <ul className="space-y-2 text-navy-700">
                  <li>In-depth theoretical understanding</li>
                  <li>Advanced calculus and analysis</li>
                  <li>Complex problem-solving</li>
                  <li>Mathematical modeling</li>
                  <li>University entrance preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: TEACHING APPROACH */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Our Teaching Approach
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <GraduationCap
                  className="w-12 h-12 text-blue-600 mb-4"
                  aria-label="Graduation cap icon representing qualified mathematics specialists"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Qualified Specialists
                </h3>
                <p className="text-navy-700 text-sm">
                  Subject experts with proven results across all exam boards.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Users
                  className="w-12 h-12 text-blue-600 mb-4"
                  aria-label="Group icon representing small mathematics classes"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Small Groups (Max 6)
                </h3>
                <p className="text-navy-700 text-sm">
                  Personalized attention, faster progress.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Target
                  className="w-12 h-12 text-blue-600 mb-4"
                  aria-label="Target icon representing exam-focused strategy"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Exam-Focused
                </h3>
                <p className="text-navy-700 text-sm">
                  We know what examiners expect.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <BookOpen
                  className="w-12 h-12 text-blue-600 mb-4"
                  aria-label="Book icon representing structured sessions"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Structured Sessions
                </h3>
                <p className="text-navy-700 text-sm">
                  Clear learning objectives every session.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: EXAM BOARDS COVERED */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              All Major Exam Boards
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
              {["AQA", "Edexcel", "OCR", "Cambridge", "Pearson", "IB", "WJEC"].map(
                (board) => (
                  <div
                    key={board}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
                  >
                    <CheckCircle
                      className="w-6 h-6 text-blue-600 mx-auto mb-2"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold text-navy-900">
                      {board}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* SECTION 7: WHY CHOOSE US */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why Improve ME for Mathematics?
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "KHDA-approved tutoring centre",
                "Small groups (max 6 students)",
                "Specialist subject tutors",
                "Proven track record of results",
                "All exam boards covered",
                "Structured, curriculum-aligned",
                "Regular progress reports",
                "Flexible scheduling",
                "Dedicated learning environment",
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
              Student Success Stories
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div
                className="bg-blue-50 border border-blue-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="Mathematics Tutoring" />
                <div
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <blockquote
                  className="text-navy-800 text-sm"
                  itemProp="reviewBody"
                >
                  &quot;In just weeks, my son was moved to the highest maths set at school and secured 2nd place in two consecutive advanced exams.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Veronica</span>
                </p>
                <p className="text-xs text-navy-600">Parent, Year 10</p>
                <div className="flex mt-3 gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="text-yellow-400 text-lg leading-none"
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="bg-blue-50 border border-blue-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="Mathematics Tutoring" />
                <div
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <blockquote
                  className="text-navy-800 text-sm"
                  itemProp="reviewBody"
                >
                  &quot;My son&apos;s school has noticed a big improvement in his maths, which was one of my main concerns.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">A.S.</span>
                </p>
                <p className="text-xs text-navy-600">Parent, Year 1 & FS2</p>
                <div className="flex mt-3 gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="text-yellow-400 text-lg leading-none"
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="bg-blue-50 border border-blue-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="Mathematics Tutoring" />
                <div
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <blockquote
                  className="text-navy-800 text-sm"
                  itemProp="reviewBody"
                >
                  &quot;Achieved grade 9 in GCSE Mathematics - couldn&apos;t have done it without the support!&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">James L.</span>
                </p>
                <p className="text-xs text-navy-600">GEMS Wellington</p>
                <div className="flex mt-3 gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="text-yellow-400 text-lg leading-none"
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: RELATED SUBJECTS */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Explore Related Subjects
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Target
                  className="w-10 h-10 text-sky-600 mb-3"
                  aria-label="Target icon for physics tutoring"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Physics Tutoring
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Forces, energy, and motion across all levels.
                </p>
                <Link
                  href="/courses/physics"
                  className="text-blue-600 font-medium hover:text-blue-700 text-sm"
                  aria-label="Explore physics tutoring courses in Dubai"
                >
                  Explore Physics →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <TrendingUp
                  className="w-10 h-10 text-teal-600 mb-3"
                  aria-label="Trending up icon for economics tutoring"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Economics Tutoring
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Essential quantitative analysis and data interpretation.
                </p>
                <Link
                  href="/courses/economics"
                  className="text-blue-600 font-medium hover:text-blue-700 text-sm"
                  aria-label="Explore economics tutoring courses in Dubai"
                >
                  Explore Economics →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Award
                  className="w-10 h-10 text-amber-600 mb-3"
                  aria-label="Award icon for business studies tutoring"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Business Studies Tutoring
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Financial analysis and quantitative decision-making.
                </p>
                <Link
                  href="/courses/business-studies"
                  className="text-blue-600 font-medium hover:text-blue-700 text-sm"
                  aria-label="Explore business studies tutoring courses in Dubai"
                >
                  Explore Business Studies →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Frequently Asked Questions
            </h2>

            <Accordion
              type="single"
              collapsible
              className="max-w-3xl mx-auto space-y-2"
            >
              <AccordionItem
                value="faq-1"
                itemScope
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger>
                  <span itemProp="name">
                    What mathematics qualifications do you teach?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We teach mathematics for EYFS/Primary (Ages 3-11), Key Stage 3 (Ages 11-14), GCSE, IGCSE, A-Level, and IB Diploma (both Standard and Higher Level). We cover all major exam boards including AQA, Edexcel, OCR, Cambridge, and IB.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-2"
                itemScope
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger>
                  <span itemProp="name">
                    What is the class size for mathematics tutoring?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We maintain small group classes with a maximum of 6 students to ensure personalized attention. We also offer 1-on-1 tutoring for students who prefer individual instruction.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-3"
                itemScope
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger>
                  <span itemProp="name">
                    Do you cover all mathematics topics?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Yes, we cover all mathematics topics from number sense and arithmetic to advanced calculus, statistics, and mechanics. Our curriculum is comprehensive and aligned with all major exam boards.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-4"
                itemScope
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger>
                  <span itemProp="name">
                    How much does mathematics tutoring cost in Dubai?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Our mathematics tutoring fees vary based on the level (Primary, GCSE, A-Level, IB) and format (group or individual). Please book a free assessment to discuss pricing options that suit your needs.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-5"
                itemScope
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger>
                  <span itemProp="name">
                    Where is Improve ME Institute located?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We are located in Gold &amp; Diamond Park, Dubai (Suite 3016-3017, Building 3), easily accessible from major areas of Dubai with ample parking available.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-6"
                itemScope
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger>
                  <span itemProp="name">
                    What are the mathematics tutoring class timings?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We offer flexible scheduling including weekday evenings (4pm-9pm), weekend mornings and afternoons, and intensive holiday courses to accommodate student schedules.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* SECTION 11: FINAL CTA */}
        <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-14">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Ready to Excel in Mathematics?
            </h2>
            <p className="text-navy-800 mb-8 text-lg">
              Book your free assessment and discover how we can help your child achieve stronger results in mathematics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-navy-800 transition"
                aria-label="Book a free mathematics assessment at Improve ME Institute Dubai"
              >
                <span>Book Free Assessment</span>
                <ArrowRight
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-white text-navy-900 border-2 border-navy-900 px-10 py-4 rounded-lg font-semibold hover:bg-navy-50 transition"
                aria-label="View all courses at Improve ME Institute"
              >
                <span>View All Courses</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
