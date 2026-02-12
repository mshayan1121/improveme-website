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
  PenTool,
  FileText,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { BulletList } from "../../../components/ui/bullet-list";

export const metadata: Metadata = {
  title:
    "English Tutoring Dubai | Language & Literature | GCSE to A-Level",
  description:
    "Expert English tutoring in Dubai. Language, literature, creative writing. GCSE, IGCSE, A-Level, IB. Essay technique, analysis, and exam preparation.",
  keywords:
    "English tutoring Dubai, GCSE English Dubai, IGCSE English tutor, A-Level English Dubai, IB English tutoring, English classes Dubai, Gold Diamond Park tutoring, English exam preparation Dubai",
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "English Tutoring in Dubai - All Levels | Improve ME Institute",
    description:
      "Expert English tutoring for Primary, GCSE, IGCSE, A-Level, and IB in Dubai. Small groups, qualified tutors, proven results.",
    url: "https://improvemeinstitute.com/courses/english",
    siteName: "Improve ME Institute",
    images: [
      {
        url: "/og-english.jpg",
        width: 1200,
        height: 630,
        alt: "English Tutoring in Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Tutoring in Dubai - GCSE, A-Level & IB",
    description:
      "Expert English tutoring in Dubai. All major curricula. Book your free assessment today.",
    images: ["/og-english.jpg"],
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
    canonical: "https://improvemeinstitute.com/courses/english",
  },
};

export default function EnglishPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "English Tutoring - Primary, GCSE, IGCSE, A-Level & IB",
    description:
      "Comprehensive English tutoring for students in Dubai covering Primary, GCSE, IGCSE, A-Level, and IB curricula",
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
    coursePrerequisites: "None - suitable for all levels from Primary to IB",
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
        name: "What English qualifications do you teach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We teach English for Primary (Ages 3-11), Key Stage 3 (Ages 11-14), GCSE/IGCSE English Language and Literature, A-Level, and IB Diploma. We cover all major exam boards including AQA, Edexcel, OCR, Cambridge, and IB.",
        },
      },
      {
        "@type": "Question",
        name: "What is the class size for English tutoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We maintain small group classes with a maximum of 6 students to ensure personalized attention. We also offer 1-on-1 tutoring for students who prefer individual instruction.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover both English Language and Literature?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we cover both English Language (reading, writing, speaking, listening) and English Literature (poetry, prose, drama, Shakespeare). Students can study either or both subjects.",
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
                  English
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* SECTION 1: HERO */}
        <section className="relative bg-gradient-to-br from-purple-600 to-purple-700 chevron-pattern pt-32 pb-16">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1
                itemProp="name"
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                English
              </h1>
              <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                Primary | GCSE | IGCSE | A-Level | IB
              </div>
              <p
                itemProp="description"
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
              >
                Develop confident readers, writers, and critical thinkers. From reading comprehension and creative writing to literary analysis and exam technique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                  Book Free Assessment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT WE COVER */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Comprehensive English Coverage
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <PenTool
                  className="w-10 h-10 text-purple-600 mb-4"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Language Skills
                </h3>
                <BulletList
                  items={[
                    "Reading comprehension",
                    "Creative writing",
                    "Descriptive and narrative writing",
                    "Grammar and punctuation",
                    "Vocabulary development",
                    "Speaking and listening",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <BookOpen
                  className="w-10 h-10 text-purple-600 mb-4"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Literary Analysis
                </h3>
                <BulletList
                  items={[
                    "Poetry analysis",
                    "Prose and fiction study",
                    "Drama and Shakespeare",
                    "Literary techniques",
                    "Character and theme analysis",
                    "Context and interpretation",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <FileText
                  className="w-10 h-10 text-purple-600 mb-4"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Exam Skills
                </h3>
                <BulletList
                  items={[
                    "Essay structure and planning",
                    "Analytical writing technique",
                    "Comparative analysis",
                    "Extract analysis",
                    "Timed writing practice",
                    "Critical evaluation",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: BY LEVEL BREAKDOWN */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              English by Level
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Foundation Level
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Primary to GCSE/IGCSE English
                </h3>
                <BulletList
                  items={[
                    "Build fundamental reading and writing skills",
                    "Develop grammar and vocabulary",
                    "Creative and analytical writing practice",
                    "Text analysis and interpretation",
                    "Comprehension and critical thinking",
                    "Exam technique for top grades",
                  ]}
                />
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Advanced Level
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  A-Level & IB English Literature
                </h3>
                <BulletList
                  items={[
                    "Advanced literary analysis",
                    "Critical theory and perspectives",
                    "Sophisticated essay writing technique",
                    "Comparative literature study",
                    "University entrance preparation",
                    "Rigorous text analysis",
                  ]}
                />
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
                <GraduationCap className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Qualified Specialists
                </h3>
                <p className="text-navy-700 text-sm">
                  Subject experts with proven results across all exam boards.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Small Groups (Max 6)
                </h3>
                <p className="text-navy-700 text-sm">
                  Personalized attention, faster progress.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Exam-Focused
                </h3>
                <p className="text-navy-700 text-sm">
                  We know what examiners expect.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <BookOpen className="w-12 h-12 text-purple-600 mb-4" />
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
                      className="w-6 h-6 text-purple-600 mx-auto mb-2"
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
        <section className="bg-gradient-to-br from-purple-600 to-purple-700 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why Improve ME for English?
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
                className="bg-purple-50 border border-purple-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="English Tutoring" />
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <blockquote className="text-navy-800 text-sm" itemProp="reviewBody">
                  &quot;Improved from grade 5 to grade 8 in GCSE English Language!&quot;
                </blockquote>
                <p className="text-sm font-semibold text-navy-900 mt-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">Emma R.</span>
                </p>
                <p className="text-xs text-navy-600">Dubai British School</p>
                <div className="flex mt-3 gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-yellow-400 text-lg leading-none">★</span>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6" itemScope itemType="https://schema.org/Review">
                <meta itemProp="itemReviewed" content="English Tutoring" />
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <blockquote className="text-navy-800 text-sm" itemProp="reviewBody">
                  &quot;The essay writing techniques made all the difference for my A-Level exams.&quot;
                </blockquote>
                <p className="text-sm font-semibold text-navy-900 mt-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">Michael T.</span>
                </p>
                <p className="text-xs text-navy-600">JESS Arabian Ranches</p>
                <div className="flex mt-3 gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-yellow-400 text-lg leading-none">★</span>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6" itemScope itemType="https://schema.org/Review">
                <meta itemProp="itemReviewed" content="English Tutoring" />
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <blockquote className="text-navy-800 text-sm" itemProp="reviewBody">
                  &quot;Achieved grade 7 in IB English Literature HL - excellent support!&quot;
                </blockquote>
                <p className="text-sm font-semibold text-navy-900 mt-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">Sophie K.</span>
                </p>
                <p className="text-xs text-navy-600">GEMS Wellington</p>
                <div className="flex mt-3 gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-yellow-400 text-lg leading-none">★</span>
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
                <Sparkles className="w-10 h-10 text-rose-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Psychology Tutoring
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Essay writing and critical analysis skills.
                </p>
                <Link href="/courses/psychology" className="text-purple-600 font-medium hover:text-purple-700 text-sm">
                  Explore Psychology →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Award className="w-10 h-10 text-amber-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Business Studies Tutoring
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Case study analysis and written communication.
                </p>
                <Link href="/courses/business-studies" className="text-purple-600 font-medium hover:text-purple-700 text-sm">
                  Explore Business Studies →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <TrendingUp className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Economics Tutoring
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Essay writing and evaluation skills.
                </p>
                <Link href="/courses/economics" className="text-purple-600 font-medium hover:text-purple-700 text-sm">
                  Explore Economics →
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

            <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-2">
              <AccordionItem value="faq-1" itemScope itemType="https://schema.org/Question">
                <AccordionTrigger>
                  <span itemProp="name">What English qualifications do you teach?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-sm text-navy-700">
                      We teach English for Primary (Ages 3-11), Key Stage 3 (Ages 11-14), GCSE/IGCSE English Language and Literature, A-Level, and IB Diploma. We cover all major exam boards including AQA, Edexcel, OCR, Cambridge, and IB.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" itemScope itemType="https://schema.org/Question">
                <AccordionTrigger>
                  <span itemProp="name">What is the class size for English tutoring?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-sm text-navy-700">
                      We maintain small group classes with a maximum of 6 students to ensure personalized attention. We also offer 1-on-1 tutoring for students who prefer individual instruction.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" itemScope itemType="https://schema.org/Question">
                <AccordionTrigger>
                  <span itemProp="name">Do you cover both English Language and Literature?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-sm text-navy-700">
                      Yes, we cover both English Language (reading, writing, speaking, listening) and English Literature (poetry, prose, drama, Shakespeare). Students can study either or both subjects.
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
              Ready to Excel in English?
            </h2>
            <p className="text-navy-800 mb-8 text-lg">
              Book your free assessment and discover how we can help your child achieve stronger results in English.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-navy-800 transition"
              >
                <span>Book Free Assessment</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-white text-navy-900 border-2 border-navy-900 px-10 py-4 rounded-lg font-semibold hover:bg-navy-50 transition"
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
