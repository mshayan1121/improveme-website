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
  MessageSquare,
  Shapes,
  Calculator,
  Layers,
  School,
  ClipboardCheck,
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
  title: "CAT4 Test Preparation Dubai | Ages 7-13 | Improve ME Institute",
  description:
    "CAT4 test preparation in Dubai. Cognitive abilities training for school admissions. Verbal, non-verbal, quantitative, and spatial reasoning.",
  keywords: [
    "CAT4 test Dubai",
    "cognitive abilities test",
    "CAT4 preparation",
    "school entrance test Dubai",
  ],
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "CAT4 Test Preparation Dubai | Ages 7-13 | Improve ME Institute",
    description:
      "Focused CAT4 preparation covering verbal, non-verbal, quantitative, and spatial reasoning. Diagnostic assessments, targeted practice, and mock exams.",
    url: "https://improvemeinstitute.com/courses/cat-prep",
    siteName: "Improve ME Institute",
    images: [
      {
        url: "/og-cat-prep.jpg",
        width: 1200,
        height: 630,
        alt: "Students preparing for the CAT4 test",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://improvemeinstitute.com/courses/cat-prep",
  },
};

const qualificationsId = "cat4-levels";

export default function CAT4PrepPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "CAT4 Test Prep",
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
    educationalLevel: "Primary and Middle School",
    coursePrerequisites: "None - suitable for all levels from Level A to Level F",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                  CAT4 Test Prep
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* SECTION 1: HERO */}
        <section className="relative bg-gradient-to-br from-yellow-500 to-orange-600 chevron-pattern pt-32 pb-16">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                ENRICHMENT PROGRAMME
              </div>
              <h1
                itemProp="name"
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                CAT4 Test Prep
              </h1>
              <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                Ages 7-13 | Cognitive Assessment
              </div>
              <p
                itemProp="description"
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
              >
                Comprehensive preparation for the Cognitive Abilities Test (CAT4).
                We train students in verbal reasoning, non-verbal reasoning,
                quantitative reasoning, and spatial reasoning to excel in
                selective school admissions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
                  aria-label="Book a free CAT4 assessment in Dubai"
                >
                  Book Free Assessment
                </Link>
                <Link
                  href={`#${qualificationsId}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
                  aria-label="Explore CAT4 levels we prepare for in Dubai"
                >
                  Explore Levels
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: QUALIFICATIONS OVERVIEW */}
        <section
          id={qualificationsId}
          className="bg-white py-14 scroll-mt-24"
          aria-labelledby="cat4-levels-heading"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2
              id="cat4-levels-heading"
              className="text-3xl font-bold text-navy-900 mb-4 text-center"
            >
              CAT4 Test Levels
            </h2>
            <p className="text-navy-600 mb-10 text-center">
              We prepare students for all age-appropriate CAT4 levels
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition flex flex-col">
                <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Ages 6-8
                </span>
                <Target className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Level A-B
                </h3>
                <p className="text-sm text-navy-600 mb-3">Foundation Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Foundation level for younger students. Basic pattern
                  recognition and reasoning skills.
                </p>
                <BulletList
                  items={[
                    "Verbal reasoning basics",
                    "Simple patterns",
                    "Number sequences",
                    "Shape recognition",
                  ]}
                  textClassName="text-navy-700 text-sm"
                  className="mb-4"
                />
              </div>

              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition flex flex-col">
                <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Ages 9-11
                </span>
                <Layers className="w-10 h-10 text-purple-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Level C-D
                </h3>
                <p className="text-sm text-navy-600 mb-3">Intermediate Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Intermediate level with increased complexity and
                  problem-solving challenges.
                </p>
                <BulletList
                  items={[
                    "Advanced verbal reasoning",
                    "Complex patterns",
                    "Mathematical relationships",
                    "Spatial visualization",
                  ]}
                  textClassName="text-navy-700 text-sm"
                  className="mb-4"
                />
              </div>

              <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-xl p-6 hover:shadow-lg transition flex flex-col">
                <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Ages 12+
                </span>
                <Award className="w-10 h-10 text-indigo-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Level E-F
                </h3>
                <p className="text-sm text-navy-600 mb-3">Advanced Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Advanced level for older students with sophisticated reasoning
                  and abstract thinking.
                </p>
                <BulletList
                  items={[
                    "Complex verbal logic",
                    "Abstract patterns",
                    "Advanced quantitative reasoning",
                    "3D spatial reasoning",
                  ]}
                  textClassName="text-navy-700 text-sm"
                  className="mb-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT WE COVER */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              What We Cover in CAT4 Preparation
            </h2>
            <p className="text-navy-600 mb-10 text-center">
              Comprehensive training across all four reasoning types
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <MessageSquare
                  className="w-10 h-10 text-yellow-500 mb-4"
                  aria-label="MessageSquare icon for verbal reasoning"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Verbal Reasoning
                </h3>
                <BulletList
                  items={[
                    "Word relationships and analogies",
                    "Verbal classification exercises",
                    "Vocabulary building techniques",
                    "Comprehension skills",
                    "Logic puzzles",
                    "Deductive reasoning",
                    "Practice tests and timed exercises",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Shapes
                  className="w-10 h-10 text-yellow-500 mb-4"
                  aria-label="Shapes icon for non-verbal and spatial reasoning"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Non-Verbal & Spatial Reasoning
                </h3>
                <BulletList
                  items={[
                    "Pattern completion",
                    "Figure matrices",
                    "Figure classification",
                    "3D visualization",
                    "Mental rotation exercises",
                    "Shape sequences",
                    "Spatial awareness training",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Calculator
                  className="w-10 h-10 text-yellow-500 mb-4"
                  aria-label="Calculator icon for quantitative reasoning"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Quantitative Reasoning
                </h3>
                <BulletList
                  items={[
                    "Number series and patterns",
                    "Number analogies",
                    "Number matrices",
                    "Mathematical problem-solving",
                    "Logical number sequences",
                    "Data interpretation",
                    "Numerical reasoning practice",
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
              Our Approach by Level
            </h2>
            <p className="text-navy-600 mb-10 text-center">
              Tailored preparation based on age and ability
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Foundation Level
                </span>
                <School
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-label="School icon for foundation levels"
                />
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Foundation Levels (Ages 6-10)
                </h3>
                <BulletList
                  items={[
                    "Master verbal reasoning basics (word relationships, analogies)",
                    "Develop pattern recognition skills",
                    "Build number sequence understanding",
                    "Practice spatial awareness exercises",
                    "Timed practice with age-appropriate materials",
                    "Regular diagnostic assessments",
                  ]}
                />
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Advanced Level
                </span>
                <GraduationCap
                  className="w-10 h-10 text-indigo-600 mb-4"
                  aria-label="GraduationCap icon for advanced levels"
                />
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Advanced Levels (Ages 10-14)
                </h3>
                <BulletList
                  items={[
                    "Complex pattern analysis and abstract reasoning",
                    "Advanced verbal logic and deductive reasoning",
                    "Sophisticated quantitative reasoning",
                    "3D spatial visualization and mental rotation",
                    "Time management strategies for exam success",
                    "Competitive exam preparation for top Dubai schools",
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
                <Users
                  className="w-12 h-12 text-yellow-500 mb-4"
                  aria-label="Users icon representing small groups"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Small Groups
                </h3>
                <p className="text-navy-700 text-sm">
                  Maximum 6 students per class ensures personalized attention
                  and focused practice on individual reasoning strengths.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <ClipboardCheck
                  className="w-12 h-12 text-yellow-500 mb-4"
                  aria-label="ClipboardCheck icon representing diagnostic assessment"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Diagnostic Assessment
                </h3>
                <p className="text-navy-700 text-sm">
                  Initial testing to identify current ability levels and areas
                  for development across all four reasoning types.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Target
                  className="w-12 h-12 text-yellow-500 mb-4"
                  aria-label="Target icon representing focused training"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Focused Training
                </h3>
                <p className="text-navy-700 text-sm">
                  Targeted practice on weak areas with progressive difficulty
                  and regular checkpoints to track improvement.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Award
                  className="w-12 h-12 text-yellow-500 mb-4"
                  aria-label="Award icon representing practice tests"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Practice Tests
                </h3>
                <p className="text-navy-700 text-sm">
                  Regular mock tests under exam conditions with detailed
                  feedback and improvement strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: PROGRAMME DETAILS */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Programme Details
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {[
                "12-16 Sessions",
                "Weekly or Bi-weekly",
                "Max 6 Students",
                "Practice Tests Included",
                "Progress Reports",
              ].map((detail) => (
                <div
                  key={detail}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
                >
                  <CheckCircle
                    className="w-6 h-6 text-yellow-500 mx-auto mb-2"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-navy-900">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: WHY CHOOSE US */}
        <section className="bg-gradient-to-br from-yellow-500 to-orange-600 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why Choose Our CAT4 Preparation?
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "KHDA-approved tutoring centre with proven track record",
                "Experienced tutors familiar with all CAT4 levels and question types",
                "Small groups (maximum 6 students) for personalized attention",
                "All CAT4 levels covered (A through F) for ages 6-14",
                "Comprehensive mock testing under real exam conditions",
                "Regular progress tracking with detailed feedback reports",
                "Proven track record of successful school placements",
                "Flexible scheduling options including weekends and holidays",
                "Dedicated learning environment in Gold & Diamond Park with easy access from Sheikh Zayed Road",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-3 items-start text-white/90"
                >
                  <CheckCircle
                    className="w-6 h-6 text-white flex-shrink-0 mt-0.5"
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
                className="bg-yellow-50 border border-yellow-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="CAT4 Test Prep" />
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
                  &quot;Our daughter improved her CAT4 scores significantly and
                  received offers from both Dubai College and JESS.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Mariam H.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 6 student</p>
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
                className="bg-yellow-50 border border-yellow-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="CAT4 Test Prep" />
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
                  &quot;The mock tests were incredibly helpful. My son felt
                  confident and prepared on exam day.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Sanjay R.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 7 student</p>
              </div>

              <div
                className="bg-yellow-50 border border-yellow-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="CAT4 Test Prep" />
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
                  &quot;Excellent preparation programme. The tutors really
                  understood how to help my child improve.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Fatima A.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 5 student</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: RELATED PROGRAMMES */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Explore Related Programmes
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Award
                  className="w-10 h-10 text-blue-600 mb-3"
                  aria-label="Award icon for entrance prep"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  7+/11+ Entrance Prep
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  School entrance exam preparation covering English, maths, and
                  reasoning.
                </p>
                <Link
                  href="/courses/entrance-prep"
                  className="text-yellow-500 font-medium hover:text-yellow-600 text-sm"
                  aria-label="Explore entrance prep courses in Dubai"
                >
                  Explore Entrance Prep →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Calculator
                  className="w-10 h-10 text-green-600 mb-3"
                  aria-label="Calculator icon for mathematics"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Mathematics
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Strengthen numerical reasoning and problem-solving skills.
                </p>
                <Link
                  href="/courses/mathematics"
                  className="text-yellow-500 font-medium hover:text-yellow-600 text-sm"
                  aria-label="Explore mathematics courses in Dubai"
                >
                  Explore Mathematics →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Target
                  className="w-10 h-10 text-navy-600 mb-3"
                  aria-label="Target icon for chess mastery"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Chess Mastery
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Strategic thinking and logic development through chess.
                </p>
                <Link
                  href="/courses/chess"
                  className="text-yellow-500 font-medium hover:text-yellow-600 text-sm"
                  aria-label="Explore chess mastery courses in Dubai"
                >
                  Explore Chess →
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
                    What CAT4 levels do you prepare students for?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We prepare students for all CAT4 levels from Level A
                      (ages 6-7) through Level F (ages 13+). Our programme is
                      tailored to each student&apos;s age and current ability level.
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
                    What is the class size for CAT4 preparation?
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
                    Do you provide mock CAT4 tests?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Yes, we provide regular mock tests under real exam
                      conditions with detailed feedback and improvement
                      strategies. This helps students build confidence and
                      familiarity with the test format.
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
                    How long does CAT4 preparation take?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Our CAT4 preparation programme typically runs for 12-16
                      sessions, depending on the student&apos;s starting level and
                      target school requirements. Sessions can be scheduled
                      weekly or bi-weekly.
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
              Ready to Excel in CAT4?
            </h2>
            <p className="text-navy-800 mb-8 text-lg">
              Book a free assessment and discover your pathway to CAT4 success
              with Dubai&apos;s best cognitive abilities training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-navy-800 transition"
                aria-label="Book a free CAT4 assessment at Improve ME Institute Dubai"
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
                aria-label="View CAT4 preparation timetable in Dubai"
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
