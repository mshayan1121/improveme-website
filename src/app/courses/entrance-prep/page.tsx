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
  Puzzle,
  Mic,
  School,
  PenTool,
  Compass,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { BulletList } from "../../../components/ui/bullet-list";

export const metadata: Metadata = {
  title: "7+/11+ Entrance Exam Preparation Dubai | Improve ME Institute",
  description:
    "Selective school entrance exam preparation in Dubai. 7+ and 11+ exam prep for top schools covering English, maths, reasoning, and interview skills.",
  keywords: [
    "7+ entrance exam Dubai",
    "11+ preparation Dubai",
    "selective school entrance Dubai",
    "private school exam prep Dubai",
  ],
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "7+/11+ Entrance Exam Preparation Dubai | Improve ME Institute",
    description:
      "Comprehensive 7+ and 11+ exam prep covering English, Maths, reasoning, mock exams, and interview skills for Dubai's selective schools.",
    url: "https://improvemeinstitute.com/courses/entrance-prep",
    siteName: "Improve ME Institute",
    images: [
      {
        url: "/og-entrance-prep.jpg",
        width: 1200,
        height: 630,
        alt: "Entrance exam preparation in Dubai",
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
    canonical: "https://improvemeinstitute.com/courses/entrance-prep",
  },
};

const qualificationsId = "entrance-levels";

export default function EntrancePrepPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "7+/11+ Entrance Exam Preparation",
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
    educationalLevel: "Primary Education",
    coursePrerequisites: "None - suitable for students aged 6-11",
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
                  7+/11+ Entrance Prep
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* SECTION 1: HERO */}
        <section className="relative bg-gradient-to-br from-blue-500 to-indigo-600 chevron-pattern pt-32 pb-16">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                ENTRANCE EXAMINATION
              </div>
              <h1
                itemProp="name"
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                7+/11+ Entrance Prep
              </h1>
              <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                Ages 6-11 | School Admissions
              </div>
              <p
                itemProp="description"
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
              >
                Comprehensive preparation for selective school entrance exams.
                Expert tutoring covering English, mathematics, reasoning, and
                interview skills to help your child succeed in Dubai&apos;s top
                schools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
                  aria-label="Book a free entrance exam assessment in Dubai"
                >
                  Book Free Assessment
                </Link>
                <Link
                  href={`#${qualificationsId}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
                  aria-label="Explore entrance exam levels we prepare for in Dubai"
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
          aria-labelledby="entrance-levels-heading"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2
              id="entrance-levels-heading"
              className="text-3xl font-bold text-navy-900 mb-4 text-center"
            >
              Entrance Exam Levels
            </h2>
            <p className="text-navy-600 mb-10 text-center">
              Expert Dubai entrance exam preparation tailored to your child&apos;s age
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Year 2-3
                </span>
                <School className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Ages 6-7 (7+ Level)
                </h3>
                <p className="text-sm text-navy-600 mb-3">Foundation Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Early preparation for selective prep schools. Focus on literacy,
                  numeracy, and basic reasoning skills.
                </p>
                <BulletList
                  items={[
                    "Reading and comprehension",
                    "Basic mathematics",
                    "Simple reasoning",
                    "Interview preparation",
                  ]}
                  textClassName="text-navy-700 text-sm"
                  className="mb-4"
                />
                <span className="mt-auto text-blue-600 font-medium text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>

              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Year 4-5
                </span>
                <GraduationCap className="w-10 h-10 text-purple-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Ages 8-10 (Pre-11+)
                </h3>
                <p className="text-sm text-navy-600 mb-3">Intermediate Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Building skills for 11+ preparation. Enhanced English, maths,
                  and reasoning development.
                </p>
                <BulletList
                  items={[
                    "Advanced comprehension",
                    "Problem-solving maths",
                    "Verbal and non-verbal reasoning",
                    "Exam technique",
                  ]}
                  textClassName="text-navy-700 text-sm"
                  className="mb-4"
                />
                <span className="mt-auto text-purple-600 font-medium text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>

              <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Year 6
                </span>
                <Award className="w-10 h-10 text-indigo-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Ages 10-11 (11+ Level)
                </h3>
                <p className="text-sm text-navy-600 mb-3">Advanced Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Intensive preparation for selective secondary school admissions.
                  Comprehensive exam and interview coaching.
                </p>
                <BulletList
                  items={[
                    "Advanced English and maths",
                    "Complex reasoning",
                    "Mock exams",
                    "Interview skills",
                  ]}
                  textClassName="text-navy-700 text-sm"
                  className="mb-4"
                />
                <span className="mt-auto text-indigo-600 font-medium text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT WE COVER */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Comprehensive Entrance Exam Coverage
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <BookOpen
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-label="BookOpen icon for English and comprehension"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  English & Comprehension
                </h3>
                <BulletList
                  items={[
                    "Reading comprehension techniques",
                    "Creative writing practice",
                    "Grammar and vocabulary mastery",
                    "Verbal reasoning drills",
                    "Timed comprehension strategies",
                    "Story analysis and inference",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Calculator
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-label="Calculator icon for mathematics and problem-solving"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Mathematics & Problem-Solving
                </h3>
                <BulletList
                  items={[
                    "Arithmetic fluency and accuracy",
                    "Problem-solving heuristics",
                    "Number patterns and sequences",
                    "Mental maths workouts",
                    "Applied word problems",
                    "Time management strategies",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Puzzle
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-label="Puzzle icon for reasoning and interview skills"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Reasoning & Interview Skills
                </h3>
                <BulletList
                  items={[
                    "Non-verbal reasoning & spatial skills",
                    "Interview preparation & etiquette",
                    "Time management strategies",
                    "Exam confidence coaching",
                    "Mindset and resilience training",
                    "Mock interview practice",
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
              Entrance Prep by Level
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Foundation Level
                </span>
                <School
                  className="w-10 h-10 text-blue-600 mb-4"
                  aria-label="School icon for 7+ preparation"
                />
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  7+ Preparation
                </h3>
                <BulletList
                  items={[
                    "Early literacy and numeracy skills",
                    "Basic reasoning development",
                    "Interview confidence building",
                    "Age-appropriate exam technique",
                    "Foundation English and maths",
                    "Social and communication skills",
                  ]}
                />
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Advanced Level
                </span>
                <GraduationCap
                  className="w-10 h-10 text-indigo-600 mb-4"
                  aria-label="GraduationCap icon for 11+ preparation"
                />
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  11+ Preparation
                </h3>
                <BulletList
                  items={[
                    "Advanced English and mathematics",
                    "Complex reasoning challenges",
                    "Comprehensive mock exam practice",
                    "Professional interview coaching",
                    "Competitive exam strategies",
                    "Time management and confidence",
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
                <PenTool
                  className="w-12 h-12 text-blue-600 mb-4"
                  aria-label="PenTool icon representing subject specialists"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Subject Specialists
                </h3>
                <p className="text-navy-700 text-sm">
                  English and maths tutors who understand each exam board&apos;s
                  nuances and mark schemes for selective school admissions.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Users
                  className="w-12 h-12 text-blue-600 mb-4"
                  aria-label="Users icon representing small groups"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Small Group Excellence
                </h3>
                <p className="text-navy-700 text-sm">
                  Maximum 6 students per class ensures personalized attention
                  and focused practice on individual strengths.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Compass
                  className="w-12 h-12 text-blue-600 mb-4"
                  aria-label="Compass icon representing reasoning labs"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Reasoning Labs
                </h3>
                <p className="text-navy-700 text-sm">
                  Hands-on sessions dedicated to verbal, non-verbal, and
                  problem-solving techniques with targeted practice.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Mic
                  className="w-12 h-12 text-blue-600 mb-4"
                  aria-label="Mic icon representing interview coaching"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Interview Coaching
                </h3>
                <p className="text-navy-700 text-sm">
                  Role-play scenarios, communication skills, and
                  confidence-building for parent and student meetings.
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
                "12-20 Sessions",
                "Weekly or Bi-weekly",
                "Max 6 Students",
                "Mock Exams Included",
                "Progress Reports",
              ].map((detail) => (
                <div
                  key={detail}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
                >
                  <CheckCircle
                    className="w-6 h-6 text-blue-600 mx-auto mb-2"
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
        <section className="bg-gradient-to-br from-blue-500 to-indigo-600 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why Choose Our Entrance Exam Preparation?
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "KHDA-approved tutoring centre with proven track record",
                "Experienced tutors familiar with selective school expectations",
                "Small groups (maximum 6 students) for personalized attention",
                "Comprehensive coverage of 7+ and 11+ exam formats",
                "Regular mock exams and interview practice sessions",
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
                <meta itemProp="itemReviewed" content="7+/11+ Entrance Prep" />
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
                  &quot;Improve ME helped my son secure offers from both Dubai
                  College and JESS after three months of preparation.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Sarah P.</span>
                </p>
                <p className="text-xs text-navy-600">Year 6 parent | 11+ offer holder</p>
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
                <meta itemProp="itemReviewed" content="7+/11+ Entrance Prep" />
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
                  &quot;The interview coaching was invaluable—our daughter
                  walked in prepared and confident.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Omar L.</span>
                </p>
                <p className="text-xs text-navy-600">Year 3 parent | 7+ interview success</p>
              </div>

              <div
                className="bg-blue-50 border border-blue-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="7+/11+ Entrance Prep" />
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
                  <span itemProp="name">Priya S.</span>
                </p>
                <p className="text-xs text-navy-600">Year 5 parent</p>
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
                <Target
                  className="w-10 h-10 text-blue-600 mb-3"
                  aria-label="Target icon for CAT4 test prep"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  CAT4 Test Prep
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Benchmark reasoning skills before the admissions season.
                </p>
                <Link
                  href="/courses/cat-prep"
                  className="text-blue-600 font-medium hover:text-blue-700 text-sm"
                  aria-label="Explore CAT4 test prep courses in Dubai"
                >
                  Explore CAT4 Prep →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Calculator
                  className="w-10 h-10 text-green-600 mb-3"
                  aria-label="Calculator icon for primary mathematics"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Primary Mathematics
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Deepen numeracy skills and mental maths for written papers.
                </p>
                <Link
                  href="/courses/mathematics"
                  className="text-blue-600 font-medium hover:text-blue-700 text-sm"
                  aria-label="Explore mathematics courses in Dubai"
                >
                  Explore Mathematics →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <BookOpen
                  className="w-10 h-10 text-navy-600 mb-3"
                  aria-label="BookOpen icon for primary English"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Primary English
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Sharpen comprehension and creative writing technique.
                </p>
                <Link
                  href="/courses/english"
                  className="text-blue-600 font-medium hover:text-blue-700 text-sm"
                  aria-label="Explore English courses in Dubai"
                >
                  Explore English →
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
                    What entrance exams do you prepare students for?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We prepare students for 7+ exams (Year 2-3) and 11+ exams
                      (Year 6) for selective schools in Dubai including Dubai
                      College, JESS, Kings Dubai, and other top institutions.
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
                    What is the class size for entrance exam preparation?
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
                    Do you provide interview coaching?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Yes, interview coaching is built into every programme. We
                      provide role-play scenarios, communication skills training,
                      and confidence-building sessions for both students and
                      parents.
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
                    How long does entrance exam preparation take?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Our entrance exam preparation typically runs for 12-20
                      sessions, depending on the student&apos;s starting level
                      and target school requirements. Sessions can be scheduled
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
              Ready to Excel in Entrance Exams?
            </h2>
            <p className="text-navy-800 mb-8 text-lg">
              Book a free assessment and discover your pathway to selective
              school success with Dubai&apos;s best entrance exam tutors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-navy-800 transition"
                aria-label="Book a free entrance exam assessment at Improve ME Institute Dubai"
              >
                <span>Book Free Assessment</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/contact#timetable"
                className="inline-flex items-center gap-2 bg-white text-navy-900 border-2 border-navy-900 px-10 py-4 rounded-lg font-semibold hover:bg-navy-50 transition"
                aria-label="View entrance exam preparation timetable in Dubai"
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
