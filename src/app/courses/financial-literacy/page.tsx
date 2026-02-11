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
  DollarSign,
  PiggyBank,
  Wallet,
  Calculator,
  Briefcase,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

export const metadata: Metadata = {
  title: "Financial Literacy for Children Dubai | Money Management Skills",
  description:
    "Financial literacy programme in Dubai for ages 8-16. Teach children about money, budgeting, saving, and investing through practical, age-appropriate lessons.",
  keywords: [
    "financial literacy Dubai",
    "money management children",
    "financial education kids Dubai",
    "budgeting for children",
  ],
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "Financial Literacy for Children Dubai | Money Management Skills",
    description:
      "Interactive financial literacy classes covering budgeting, saving, banking, investing, and smart spending for ages 8-16.",
    url: "https://improvemeinstitute.com/courses/financial-literacy",
    siteName: "Improve ME Institute",
    images: [
      {
        url: "/og-financial-literacy.jpg",
        width: 1200,
        height: 630,
        alt: "Financial literacy lessons for children",
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
    canonical: "https://improvemeinstitute.com/courses/financial-literacy",
  },
};

const qualificationsId = "financial-levels";

export default function FinancialLiteracyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Financial Literacy for Children",
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
    educationalLevel: "Primary and Secondary Education",
    coursePrerequisites: "None - suitable for students aged 8-16",
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
                  Financial Literacy
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* SECTION 1: HERO */}
        <section className="relative bg-gradient-to-br from-green-500 to-teal-600 chevron-pattern pt-32 pb-16">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                LIFE SKILLS
              </div>
              <h1
                itemProp="name"
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Financial Literacy
              </h1>
              <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                Ages 8-16 | Money Management
              </div>
              <p
                itemProp="description"
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
              >
                Equip your child with essential money management skills. From
                budgeting and saving to investing and smart spending, delivered
                at our modern Gold &amp; Diamond Park learning center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
                  aria-label="Book a free financial literacy assessment in Dubai"
                >
                  Book Free Assessment
                </Link>
                <Link
                  href={`#${qualificationsId}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
                  aria-label="Explore financial literacy levels we teach in Dubai"
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
          aria-labelledby="financial-levels-heading"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2
              id="financial-levels-heading"
              className="text-3xl font-bold text-navy-900 mb-4 text-center"
            >
              Financial Literacy Across All Levels
            </h2>
            <p className="text-navy-600 mb-10 text-center">
              Expert Dubai financial education tailored to your child&apos;s age
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Ages 8-11
                </span>
                <PiggyBank className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Foundation (Money Basics)
                </h3>
                <p className="text-sm text-navy-600 mb-3">Foundation Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Understanding money, choices, and basic saving. Learn to save,
                  share, and spend wisely.
                </p>
                <ul className="text-sm text-navy-700 space-y-1 mb-4">
                  <li>• What is money?</li>
                  <li>• Needs vs wants</li>
                  <li>• Basic saving concepts</li>
                  <li>• Smart spending choices</li>
                </ul>
                <span className="mt-auto text-green-600 font-medium text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>

              <div className="group bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Ages 12-14
                </span>
                <Wallet className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Intermediate (Banking & Saving)
                </h3>
                <p className="text-sm text-navy-600 mb-3">Intermediate Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Budgeting, banking, and introductions to investing. Building
                  independence with allowance planning.
                </p>
                <ul className="text-sm text-navy-700 space-y-1 mb-4">
                  <li>• Personal budgeting</li>
                  <li>• Banking basics</li>
                  <li>• Interest concepts</li>
                  <li>• Goal setting</li>
                </ul>
                <span className="mt-auto text-teal-600 font-medium text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>

              <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-emerald-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Ages 15-16
                </span>
                <TrendingUp className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Advanced (Investing & Planning)
                </h3>
                <p className="text-sm text-navy-600 mb-3">Advanced Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Responsible investing, compounding, and financial planning for
                  university and future.
                </p>
                <ul className="text-sm text-navy-700 space-y-1 mb-4">
                  <li>• Investing fundamentals</li>
                  <li>• Risk and return</li>
                  <li>• Long-term planning</li>
                  <li>• Financial responsibility</li>
                </ul>
                <span className="mt-auto text-emerald-600 font-medium text-sm group-hover:underline">
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
              Comprehensive Financial Literacy Coverage
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <DollarSign
                  className="w-10 h-10 text-green-600 mb-4"
                  aria-label="DollarSign icon for money fundamentals"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Money Fundamentals
                </h3>
                <ul className="space-y-2 text-navy-700">
                  <li>Understanding money and value</li>
                  <li>Earning, spending, and saving</li>
                  <li>Needs vs wants decision-making</li>
                  <li>Values-based money choices</li>
                  <li>Basic financial vocabulary</li>
                  <li>Money safety and security</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <PiggyBank
                  className="w-10 h-10 text-green-600 mb-4"
                  aria-label="PiggyBank icon for banking and saving"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Banking & Saving
                </h3>
                <ul className="space-y-2 text-navy-700">
                  <li>How banks operate</li>
                  <li>Different account types</li>
                  <li>Simple and compound interest</li>
                  <li>Savings goals and planning</li>
                  <li>Online banking safety</li>
                  <li>Scam recognition</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <TrendingUp
                  className="w-10 h-10 text-green-600 mb-4"
                  aria-label="TrendingUp icon for investing and planning"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Investing & Planning
                </h3>
                <ul className="space-y-2 text-navy-700">
                  <li>What is investing?</li>
                  <li>Stocks, funds, and diversification</li>
                  <li>Risk vs return concepts</li>
                  <li>Long-term wealth building</li>
                  <li>Financial goal setting</li>
                  <li>Future planning strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: BY LEVEL BREAKDOWN */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Financial Literacy by Level
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Foundation Level
                </span>
                <PiggyBank
                  className="w-10 h-10 text-green-600 mb-4"
                  aria-label="PiggyBank icon for ages 8-11"
                />
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Ages 8-11
                </h3>
                <p className="text-navy-700 mb-4">
                  Build strong financial foundations with comprehensive coverage
                  of basic money concepts. Foundation financial literacy focuses
                  on{" "}
                  <span className="font-semibold">understanding money and choices</span>{" "}
                  for younger students.
                </p>
                <ul className="space-y-2 text-navy-700">
                  <li>Money basics and value</li>
                  <li>Earning and spending concepts</li>
                  <li>Basic saving habits</li>
                  <li>Needs vs wants decisions</li>
                  <li>Smart spending choices</li>
                  <li>Money safety awareness</li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-8">
                <span className="bg-teal-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Advanced Level
                </span>
                <Wallet
                  className="w-10 h-10 text-teal-600 mb-4"
                  aria-label="Wallet icon for ages 12-16"
                />
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Ages 12-16
                </h3>
                <p className="text-navy-700 mb-4">
                  Master advanced financial skills for independence and future
                  planning. Advanced level students learn{" "}
                  <span className="font-semibold">banking, investing, and planning</span>{" "}
                  for university and career preparation in Dubai.
                </p>
                <ul className="space-y-2 text-navy-700">
                  <li>Personal budgeting and planning</li>
                  <li>Banking and account management</li>
                  <li>Investing fundamentals</li>
                  <li>Risk assessment and decision-making</li>
                  <li>Long-term financial planning</li>
                  <li>Financial responsibility</li>
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
                <PiggyBank
                  className="w-12 h-12 text-green-600 mb-4"
                  aria-label="PiggyBank icon representing interactive lessons"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Interactive Lessons
                </h3>
                <p className="text-navy-700 text-sm">
                  Gamified activities, role-play markets, and real-world case
                  studies for every financial concept.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Users
                  className="w-12 h-12 text-green-600 mb-4"
                  aria-label="Users icon representing small groups"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Small Group Excellence
                </h3>
                <p className="text-navy-700 text-sm">
                  Maximum 6 students per class ensures personalized attention
                  and practical financial skill development.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <TrendingUp
                  className="w-12 h-12 text-green-600 mb-4"
                  aria-label="TrendingUp icon representing practical projects"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Practical Projects
                </h3>
                <p className="text-navy-700 text-sm">
                  Budget trackers, savings challenges, and investing simulations
                  that continue at home.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <GraduationCap
                  className="w-12 h-12 text-green-600 mb-4"
                  aria-label="GraduationCap icon representing guided reflection"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Guided Reflection
                </h3>
                <p className="text-navy-700 text-sm">
                  Students reflect on values, goals, and ethical spending to
                  build confident financial habits.
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
                "Practical Projects",
                "Progress Reports",
              ].map((detail) => (
                <div
                  key={detail}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
                >
                  <CheckCircle
                    className="w-6 h-6 text-green-600 mx-auto mb-2"
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
        <section className="bg-gradient-to-br from-green-500 to-teal-600 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why Choose Our Financial Literacy Programme?
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "KHDA-approved tutoring centre with proven track record",
                "Experienced financial educators with practical expertise",
                "Small groups (maximum 6 students) for personalized attention",
                "Age-appropriate content from basics to advanced investing",
                "Interactive lessons with real-world applications",
                "Regular progress tracking with detailed feedback reports",
                "Proven track record of building financial confidence",
                "Flexible scheduling options including weekends",
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
                className="bg-green-50 border border-green-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="Financial Literacy" />
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
                  &quot;Our son now keeps a budget and even tracks his savings
                  goals without reminders.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Helen S.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 7 student</p>
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
                className="bg-green-50 border border-green-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="Financial Literacy" />
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
                  &quot;The investing simulation helped my daughter understand
                  risk before buying her first stock with us.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Jasmeet R.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 10 student</p>
              </div>

              <div
                className="bg-green-50 border border-green-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="Financial Literacy" />
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
                  &quot;Excellent programme. My daughter now understands the
                  value of money and makes informed spending decisions.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Mohammed A.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 9 student</p>
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
                <Calculator
                  className="w-10 h-10 text-blue-600 mb-3"
                  aria-label="Calculator icon for mathematics"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Mathematics
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Strengthen numeracy and data literacy to support financial
                  concepts.
                </p>
                <Link
                  href="/courses/mathematics"
                  className="text-green-600 font-medium hover:text-green-700 text-sm"
                  aria-label="Explore mathematics courses in Dubai"
                >
                  Explore Mathematics →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Briefcase
                  className="w-10 h-10 text-green-600 mb-3"
                  aria-label="Briefcase icon for business studies"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Business Studies
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Explore entrepreneurship, marketing, and real-world commerce.
                </p>
                <Link
                  href="/courses/business-studies"
                  className="text-green-600 font-medium hover:text-green-700 text-sm"
                  aria-label="Explore business studies courses in Dubai"
                >
                  Explore Business →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <TrendingUp
                  className="w-10 h-10 text-navy-600 mb-3"
                  aria-label="TrendingUp icon for economics"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Economics
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Connect personal finance skills with macroeconomic understanding.
                </p>
                <Link
                  href="/courses/economics"
                  className="text-green-600 font-medium hover:text-green-700 text-sm"
                  aria-label="Explore economics courses in Dubai"
                >
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
                    What age groups do you teach financial literacy?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We teach financial literacy for students aged 8-16, with
                      age-appropriate content divided into foundation (8-11),
                      intermediate (12-14), and advanced (15-16) levels.
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
                    What is the class size for financial literacy classes?
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
                    Do you cover investing in the financial literacy programme?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Yes, our advanced level (ages 15-16) covers investing
                      fundamentals including stocks, funds, diversification, and
                      risk vs return concepts through interactive simulations.
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
                    How long does the financial literacy programme take?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Our financial literacy programme typically runs for 12-16
                      sessions, depending on the student&apos;s age and level.
                      Sessions can be scheduled weekly or bi-weekly.
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
              Ready to Build Financial Confidence?
            </h2>
            <p className="text-navy-800 mb-8 text-lg">
              Book a free assessment and discover your pathway to financial
              literacy with Dubai&apos;s best money management education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-navy-800 transition"
                aria-label="Book a free financial literacy assessment at Improve ME Institute Dubai"
              >
                <span>Book Free Assessment</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/contact#timetable"
                className="inline-flex items-center gap-2 bg-white text-navy-900 border-2 border-navy-900 px-10 py-4 rounded-lg font-semibold hover:bg-navy-50 transition"
                aria-label="View financial literacy timetable in Dubai"
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
