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
  Atom,
  Beaker,
  FlaskConical,
  Microscope,
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
    "Chemistry Tutoring in Dubai - GCSE, IGCSE, A-Level & IB | Improve ME Institute",
  description:
    "Expert chemistry tutoring in Dubai for GCSE, IGCSE, MYP, A-Level, and IB students. Experienced tutors, small classes, proven results. Located in Gold & Diamond Park. Book free assessment.",
  keywords:
    "chemistry tutoring Dubai, GCSE chemistry Dubai, IGCSE chemistry tutor, A-Level chemistry Dubai, IB chemistry tutoring, chemistry classes Dubai, Gold Diamond Park tutoring, chemistry exam preparation Dubai",
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "Chemistry Tutoring in Dubai - All Levels | Improve ME Institute",
    description:
      "Expert chemistry tutoring for GCSE, IGCSE, A-Level, and IB in Dubai. Small groups, qualified tutors, proven results.",
    url: "https://improvemeinstitute.com/courses/chemistry",
    siteName: "Improve ME Institute",
    images: [
      {
        url: "/og-chemistry.jpg",
        width: 1200,
        height: 630,
        alt: "Chemistry Tutoring in Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chemistry Tutoring in Dubai - GCSE, A-Level & IB",
    description:
      "Expert chemistry tutoring in Dubai. All major curricula. Book your free assessment today.",
    images: ["/og-chemistry.jpg"],
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
    canonical: "https://improvemeinstitute.com/courses/chemistry",
  },
};

export default function ChemistryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Chemistry Tutoring - GCSE, IGCSE, A-Level & IB",
    description:
      "Comprehensive chemistry tutoring for students in Dubai covering GCSE, IGCSE, MYP, A-Level, and IB curricula",
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
    educationalLevel: ["Secondary Education", "High School"],
    coursePrerequisites: "None - suitable for all levels from GCSE to IB",
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
        name: "What chemistry qualifications do you teach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We teach chemistry for GCSE, IGCSE, MYP (Years 7-11), A-Level, and IB Diploma (both Standard and Higher Level). We cover all major exam boards including AQA, Edexcel, OCR, Cambridge, and IB.",
        },
      },
      {
        "@type": "Question",
        name: "What is the class size for chemistry tutoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We maintain small group classes with a maximum of 6 students to ensure personalized attention. We also offer 1-on-1 tutoring for students who prefer individual instruction.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide practical chemistry lab sessions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we have a fully equipped chemistry lab at our Gold & Diamond Park facility. Students complete all required practicals, experiments, and investigations as part of their curriculum.",
        },
      },
      {
        "@type": "Question",
        name: "How much does chemistry tutoring cost in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our chemistry tutoring fees vary based on the level (GCSE, A-Level, IB) and format (group or individual). Please book a free assessment to discuss pricing options that suit your needs.",
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
        name: "What are the chemistry tutoring class timings?",
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
                  Chemistry
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
                Chemistry Tutoring
              </h1>
              <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                GCSE | IGCSE | MYP | A-Level | IB
              </div>
              <p
                itemProp="description"
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
              >
                Master chemistry from foundation to advanced level with expert
                Dubai chemistry tutoring. Specialist chemistry tuition in Dubai
                across GCSE, IGCSE, MYP, A-Level, and IB Diploma, delivered at
                our modern Gold &amp; Diamond Park learning center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
                  aria-label="Book a free chemistry assessment in Dubai"
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
              Comprehensive Chemistry Coverage
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Atom
                  className="w-10 h-10 text-purple-600 mb-4"
                  aria-label="Atom icon for core chemistry topics"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Core Topics
                </h3>
                <BulletList
                  items={[
                    "Atomic structure and periodic table",
                    "Chemical bonding and structures",
                    "Stoichiometry and equations",
                    "Energetics and thermodynamics",
                    "Kinetics and equilibrium",
                    "Acids, bases, and salts",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Beaker
                  className="w-10 h-10 text-purple-600 mb-4"
                  aria-label="Beaker icon for advanced chemistry concepts"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Advanced Concepts
                </h3>
                <BulletList
                  items={[
                    "Organic chemistry mechanisms",
                    "Redox and electrochemistry",
                    "Transition metals",
                    "Spectroscopic techniques",
                    "Chemical analysis",
                    "Green chemistry principles",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Microscope
                  className="w-10 h-10 text-purple-600 mb-4"
                  aria-label="Microscope icon for practical chemistry skills"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Practical Skills
                </h3>
                <BulletList
                  items={[
                    "Laboratory techniques",
                    "Data collection and analysis",
                    "Graph plotting and interpretation",
                    "Risk assessment",
                    "Internal assessments (IA)",
                    "Experimental design",
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
              Chemistry by Level
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Foundation Level
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  GCSE, IGCSE &amp; MYP Chemistry
                </h3>
                <p className="text-navy-700 mb-4">
                  Build strong chemistry foundations with comprehensive coverage
                  of key concepts. Foundation chemistry courses prepare students
                  for{" "}
                  <Link
                    href="/courses/gcse-chemistry"
                    className="text-blue-700 underline-offset-2 hover:underline"
                  >
                    GCSE Chemistry
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/courses/igcse-chemistry"
                    className="text-blue-700 underline-offset-2 hover:underline"
                  >
                    IGCSE Chemistry
                  </Link>{" "}
                  examinations in Dubai.
                </p>
                <BulletList
                  items={[
                    "Fundamental concepts and theories",
                    "Core practical experiments",
                    "Equation writing and balancing",
                    "Calculation skills",
                    "Exam technique for top grades",
                  ]}
                />
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                  <Link
                    href="/courses/gcse-chemistry"
                    className="text-blue-600"
                    aria-label="Go to GCSE Chemistry course page"
                  >
                    GCSE →
                  </Link>
                  <Link
                    href="/courses/igcse-chemistry"
                    className="text-blue-600"
                    aria-label="Go to IGCSE Chemistry course page"
                  >
                    IGCSE →
                  </Link>
                  <Link
                    href="/courses/myp-chemistry"
                    className="text-blue-600"
                    aria-label="Go to MYP Chemistry course page"
                  >
                    MYP →
                  </Link>
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Advanced Level
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  A-Level &amp; IB Chemistry
                </h3>
                <p className="text-navy-700 mb-4">
                  Master advanced chemistry for university and beyond. Advanced
                  level students progress to{" "}
                  <Link
                    href="/courses/a-level-chemistry"
                    className="text-indigo-700 underline-offset-2 hover:underline"
                  >
                    A-Level Chemistry
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/courses/ib-chemistry"
                    className="text-indigo-700 underline-offset-2 hover:underline"
                  >
                    IB Chemistry
                  </Link>{" "}
                  for competitive university preparation in Dubai.
                </p>
                <BulletList
                  items={[
                    "In-depth theoretical understanding",
                    "Complex organic mechanisms",
                    "Advanced practical investigations",
                    "Internal assessments and coursework",
                    "University entrance preparation",
                  ]}
                />
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                  <Link
                    href="/courses/a-level-chemistry"
                    className="text-indigo-600"
                    aria-label="Go to A-Level Chemistry course page"
                  >
                    A-Level →
                  </Link>
                  <Link
                    href="/courses/ib-chemistry"
                    className="text-indigo-600"
                    aria-label="Go to IB Chemistry course page"
                  >
                    IB Chemistry →
                  </Link>
                </div>
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
                  className="w-12 h-12 text-purple-600 mb-4"
                  aria-label="Graduation cap icon representing qualified chemistry specialists"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Qualified Chemistry Specialists
                </h3>
                <p className="text-navy-700 text-sm">
                  All tutors hold degrees in Chemistry or related sciences with
                  proven track records across all exam boards.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Users
                  className="w-12 h-12 text-purple-600 mb-4"
                  aria-label="Group icon representing small chemistry classes"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Small Group Excellence
                </h3>
                <p className="text-navy-700 text-sm">
                  Maximum 6 students per class ensures personalized attention
                  and interactive learning.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Beaker
                  className="w-12 h-12 text-purple-600 mb-4"
                  aria-label="Beaker icon representing hands-on chemistry practicals"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Hands-On Practicals
                </h3>
                <p className="text-navy-700 text-sm">
                  Fully equipped lab for required experiments, investigations,
                  and practical endorsements.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <TrendingUp
                  className="w-12 h-12 text-purple-600 mb-4"
                  aria-label="Trending up icon representing exam-focused strategy"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Exam-Focused Strategy
                </h3>
                <p className="text-navy-700 text-sm">
                  Regular assessments, past paper practice, and mark scheme
                  analysis for grade optimization.
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
              {["AQA", "Edexcel", "OCR", "Cambridge", "IB", "Pearson", "WJEC"].map(
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
              Why Improve ME for Chemistry?
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "Expert chemistry tutors with university degrees and teaching certifications",
                "Comprehensive coverage of GCSE, IGCSE, MYP, A-Level, and IB curricula",
                "All major exam boards supported: AQA, Edexcel, OCR, Cambridge, IB",
                "Proven results: 94% of students achieve their target grades or higher",
                "Fully equipped chemistry lab for hands-on practical work",
                "Small group classes (max 6 students) and 1-on-1 options available",
                "Regular mock exams and personalized feedback reports",
                "Flexible scheduling: weekday evenings, weekends, and intensive courses",
                "Prime location in Dubai's Gold & Diamond Park with modern chemistry lab facilities and easy access from Sheikh Zayed Road",
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
                <meta itemProp="itemReviewed" content="Chemistry Tutoring" />
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
                  &quot;Improved from grade 5 to grade 9 in GCSE Chemistry!&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Sarah M.</span>
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

              <div
                className="bg-purple-50 border border-purple-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="Chemistry Tutoring" />
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
                  &quot;The practical sessions made chemistry finally make
                  sense.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Ahmed K.</span>
                </p>
                <p className="text-xs text-navy-600">Dubai British School</p>
              </div>

              <div
                className="bg-purple-50 border border-purple-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="Chemistry Tutoring" />
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
                  &quot;Achieved 7 in IB Chemistry HL - couldn&apos;t have done
                  it without the support!&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Priya S.</span>
                </p>
                <p className="text-xs text-navy-600">JESS Arabian Ranches</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: RELATED SUBJECTS */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Explore Related Sciences
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Atom
                  className="w-10 h-10 text-blue-600 mb-3"
                  aria-label="Atom icon for physics tutoring"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Physics Tutoring
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Forces, energy, and motion across all levels.
                </p>
                <Link
                  href="/courses/physics"
                  className="text-purple-600 font-medium hover:text-purple-700 text-sm"
                  aria-label="Explore physics tutoring courses in Dubai"
                >
                  Explore Physics →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Microscope
                  className="w-10 h-10 text-green-600 mb-3"
                  aria-label="Microscope icon for biology tutoring"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Biology Tutoring
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Life sciences from cells to ecosystems.
                </p>
                <Link
                  href="/courses/biology"
                  className="text-purple-600 font-medium hover:text-purple-700 text-sm"
                  aria-label="Explore biology tutoring courses in Dubai"
                >
                  Explore Biology →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Target
                  className="w-10 h-10 text-navy-600 mb-3"
                  aria-label="Target icon for mathematics tutoring"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Mathematics Tutoring
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Essential calculations and problem-solving.
                </p>
                <Link
                  href="/courses/mathematics"
                  className="text-purple-600 font-medium hover:text-purple-700 text-sm"
                  aria-label="Explore mathematics tutoring courses in Dubai"
                >
                  Explore Mathematics →
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
                    What chemistry qualifications do you teach?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We teach chemistry for GCSE, IGCSE, MYP (Years 7-11),
                      A-Level, and IB Diploma (both Standard and Higher Level).
                      We cover all major exam boards including AQA, Edexcel,
                      OCR, Cambridge, and IB.
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
                    What is the class size for chemistry tutoring?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We maintain small group classes with a maximum of 6
                      students to ensure personalized attention. We also offer
                      1-on-1 tutoring for students who prefer individual
                      instruction.
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
                    Do you provide practical chemistry lab sessions?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Yes, we have a fully equipped chemistry lab at our Gold
                      &amp; Diamond Park facility. Students complete all
                      required practicals, experiments, and investigations as
                      part of their curriculum.
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
                    How much does chemistry tutoring cost in Dubai?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Our chemistry tutoring fees vary based on the level (GCSE,
                      A-Level, IB) and format (group or individual). Please book
                      a free assessment to discuss pricing options that suit
                      your needs.
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
                      We are located in Gold &amp; Diamond Park, Dubai (Suite
                      3016-3017, Building 3), easily accessible from major
                      areas of Dubai with ample parking available.
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
                    What are the chemistry tutoring class timings?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We offer flexible scheduling including weekday evenings
                      (4pm-9pm), weekend mornings and afternoons, and intensive
                      holiday courses to accommodate student schedules.
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
              Ready to Excel in Chemistry?
            </h2>
            <p className="text-navy-800 mb-8 text-lg">
              Book a free assessment and discover your chemistry pathway to
              success with Dubai&apos;s best chemistry tutors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-navy-800 transition"
                aria-label="Book a free chemistry assessment at Improve ME Institute Dubai"
              >
                <span>Book Free Assessment</span>
                <ArrowRight
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/contact#timetable"
                className="inline-flex items-center gap-2 bg-white text-navy-900 border-2 border-navy-900 px-10 py-4 rounded-lg font-semibold hover:bg-navy-50 transition"
                aria-label="View chemistry tutoring timetable in Dubai"
              >
                <span>View Timetable</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
