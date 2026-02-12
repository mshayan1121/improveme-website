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
  Crown,
  Swords,
  Trophy,
  BrainCircuit,
  Calculator,
  Cpu,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { BulletList } from "../../../components/ui/bullet-list";

export const metadata: Metadata = {
  title: "Chess Classes Dubai | Strategic Thinking for Children | Improve ME",
  description:
    "Chess classes in Dubai for ages 6+. Develop strategic thinking, problem-solving, patience, and competition readiness from beginner to advanced levels.",
  keywords: [
    "chess classes Dubai",
    "chess for children",
    "chess lessons Dubai",
    "strategic thinking games",
  ],
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "Chess Mastery for Children in Dubai | Improve ME Institute",
    description:
      "Beginner to advanced chess coaching that builds strategic thinking, problem-solving, and focus for students aged 6+.",
    url: "https://improvemeinstitute.com/courses/chess",
    siteName: "Improve ME Institute",
    images: [
      {
        url: "/og-chess.jpg",
        width: 1200,
        height: 630,
        alt: "Chess training for children in Dubai",
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
    canonical: "https://improvemeinstitute.com/courses/chess",
  },
};

const qualificationsId = "chess-levels";

export default function ChessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Chess Mastery",
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
    coursePrerequisites: "None - suitable for all levels from beginner to advanced",
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
                  Chess Mastery
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* SECTION 1: HERO */}
        <section className="relative bg-gradient-to-br from-emerald-500 to-green-600 chevron-pattern pt-32 pb-16">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                STRATEGIC THINKING
              </div>
              <h1
                itemProp="name"
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Chess Mastery
              </h1>
              <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                Ages 6+ | Life Skills
              </div>
              <p
                itemProp="description"
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
              >
                Develop strategic thinking, problem-solving, and patience through
                the ancient game of chess. Beginner to competitive levels delivered
                at our modern Gold &amp; Diamond Park learning center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
                  aria-label="Book a free chess assessment in Dubai"
                >
                  Book Free Assessment
                </Link>
                <Link
                  href={`#${qualificationsId}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
                  aria-label="Explore chess levels we teach in Dubai"
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
          aria-labelledby="chess-levels-heading"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2
              id="chess-levels-heading"
              className="text-3xl font-bold text-navy-900 mb-4 text-center"
            >
              Chess Across All Levels
            </h2>
            <p className="text-navy-600 mb-10 text-center">
              Expert Dubai chess coaching tailored to your skill level
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Beginner
                </span>
                <Crown className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Complete Novices
                </h3>
                <p className="text-sm text-navy-600 mb-3">Foundation Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Learn the board, piece movements, and basic rules. Build
                  confidence with puzzles and simple tactics.
                </p>
                <BulletList
                  items={[
                    "Board and piece basics",
                    "Basic rules and checkmates",
                    "Opening principles",
                    "Simple tactics",
                  ]}
                  textClassName="text-navy-700 text-sm"
                  className="mb-4"
                />
                <span className="mt-auto text-green-600 font-medium text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>

              <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-emerald-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Intermediate
                </span>
                <Trophy className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Club Players
                </h3>
                <p className="text-sm text-navy-600 mb-3">Intermediate Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Develop tactical patterns, opening repertoire, and positional
                  understanding. Tournament preparation basics.
                </p>
                <BulletList
                  items={[
                    "Tactical patterns",
                    "Opening repertoire",
                    "Positional play",
                    "Tournament prep",
                  ]}
                  textClassName="text-navy-700 text-sm"
                  className="mb-4"
                />
                <span className="mt-auto text-emerald-600 font-medium text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>

              <div className="group bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Advanced
                </span>
                <Award className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Tournament Ready
                </h3>
                <p className="text-sm text-navy-600 mb-3">Advanced Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Advanced tactics, endgame technique, and competitive play.
                  Preparation for rated tournaments and championships.
                </p>
                <BulletList
                  items={[
                    "Advanced tactics",
                    "Endgame mastery",
                    "Competitive strategies",
                    "Performance analysis",
                  ]}
                  textClassName="text-navy-700 text-sm"
                  className="mb-4"
                />
                <span className="mt-auto text-teal-600 font-medium text-sm group-hover:underline">
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
              Comprehensive Chess Coverage
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Swords
                  className="w-10 h-10 text-emerald-600 mb-4"
                  aria-label="Swords icon for opening principles"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Opening Principles
                </h3>
                <BulletList
                  items={[
                    "Opening fundamentals and principles",
                    "Popular opening repertoires",
                    "Opening traps and tactics",
                    "Positional understanding",
                    "Development and control",
                    "King safety principles",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Target
                  className="w-10 h-10 text-emerald-600 mb-4"
                  aria-label="Target icon for tactical patterns"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Tactical Patterns
                </h3>
                <BulletList
                  items={[
                    "Pins, forks, and skewers",
                    "Discovered attacks",
                    "Back rank weaknesses",
                    "Mating patterns",
                    "Tactical combinations",
                    "Calculation training",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <BrainCircuit
                  className="w-10 h-10 text-emerald-600 mb-4"
                  aria-label="BrainCircuit icon for strategic concepts"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Strategic Concepts
                </h3>
                <BulletList
                  items={[
                    "Position evaluation",
                    "Long-term planning",
                    "Pawn structures",
                    "Piece coordination",
                    "Endgame technique",
                    "Time management",
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
              Chess by Level
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Foundation Level
                </span>
                <Crown
                  className="w-10 h-10 text-green-600 mb-4"
                  aria-label="Crown icon for beginner to intermediate"
                />
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Beginner to Intermediate
                </h3>
                <BulletList
                  items={[
                    "Basic rules and piece movements",
                    "Opening principles and development",
                    "Simple tactics and patterns",
                    "Basic endgame knowledge",
                    "Tournament etiquette",
                    "Confidence building through play",
                  ]}
                />
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-8">
                <span className="bg-teal-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Advanced Level
                </span>
                <Trophy
                  className="w-10 h-10 text-teal-600 mb-4"
                  aria-label="Trophy icon for competitive play"
                />
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Competitive Play
                </h3>
                <BulletList
                  items={[
                    "Advanced tactical combinations",
                    "Complex strategic planning",
                    "Endgame mastery and studies",
                    "Opening theory and preparation",
                    "Performance analysis and review",
                    "Competitive tournament strategies",
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
                  className="w-12 h-12 text-emerald-600 mb-4"
                  aria-label="Users icon representing small groups"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Small Group Excellence
                </h3>
                <p className="text-navy-700 text-sm">
                  Maximum 6 students per class ensures personalized attention
                  and interactive learning through game analysis.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <BookOpen
                  className="w-12 h-12 text-emerald-600 mb-4"
                  aria-label="BookOpen icon representing interactive board work"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Interactive Board Work
                </h3>
                <p className="text-navy-700 text-sm">
                  Digital analysis tools and hands-on practice sessions with
                  real game positions and tactical puzzles.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Trophy
                  className="w-12 h-12 text-emerald-600 mb-4"
                  aria-label="Trophy icon representing regular tournaments"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Regular Tournaments
                </h3>
                <p className="text-navy-700 text-sm">
                  In-house tournaments and match play for competitive experience
                  and confidence building.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <TrendingUp
                  className="w-12 h-12 text-emerald-600 mb-4"
                  aria-label="TrendingUp icon representing progress tracking"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Progress Tracking
                </h3>
                <p className="text-navy-700 text-sm">
                  Performance reports and rating improvement monitoring with
                  personalized feedback and improvement plans.
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
                "Weekly Sessions",
                "Flexible Timing",
                "Max 6 Students",
                "Tournaments Included",
                "Progress Reports",
              ].map((detail) => (
                <div
                  key={detail}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
                >
                  <CheckCircle
                    className="w-6 h-6 text-emerald-600 mx-auto mb-2"
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
        <section className="bg-gradient-to-br from-emerald-500 to-green-600 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why Choose Our Chess Programme?
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "KHDA-approved tutoring centre with proven track record",
                "Experienced chess coaches with tournament experience",
                "Small groups (maximum 6 students) for personalized attention",
                "Comprehensive coverage from beginner to advanced levels",
                "Regular in-house tournaments and competitive play",
                "Regular progress tracking with detailed feedback reports",
                "Proven track record of tournament success",
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
                <meta itemProp="itemReviewed" content="Chess Mastery" />
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
                  &quot;After one term my son moved from casual play to winning
                  his first inter-school tournament.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Lina M.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 5 student</p>
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
                <meta itemProp="itemReviewed" content="Chess Mastery" />
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
                  &quot;The mix of strategy lessons and tournaments kept our
                  daughter motivated and confident.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Ahmad K.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 8 student</p>
              </div>

              <div
                className="bg-green-50 border border-green-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="Chess Mastery" />
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
                  &quot;Excellent coaching programme. My son&apos;s strategic
                  thinking has improved dramatically.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Fatima A.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 7 student</p>
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
                  Boost cognitive reasoning alongside strategic play.
                </p>
                <Link
                  href="/courses/cat-prep"
                  className="text-emerald-600 font-medium hover:text-emerald-700 text-sm"
                  aria-label="Explore CAT4 test prep courses in Dubai"
                >
                  Explore CAT4 Prep →
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
                  Strengthen analytical thinking for tactical calculation.
                </p>
                <Link
                  href="/courses/mathematics"
                  className="text-emerald-600 font-medium hover:text-emerald-700 text-sm"
                  aria-label="Explore mathematics courses in Dubai"
                >
                  Explore Mathematics →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Cpu
                  className="w-10 h-10 text-navy-600 mb-3"
                  aria-label="Cpu icon for AI literacy"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  AI Literacy
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Explore how technology and strategy intersect.
                </p>
                <Link
                  href="/courses/ai-literacy"
                  className="text-emerald-600 font-medium hover:text-emerald-700 text-sm"
                  aria-label="Explore AI literacy courses in Dubai"
                >
                  Explore AI Literacy →
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
                    What chess levels do you teach?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We teach chess for all levels from complete beginners
                      (ages 6+) through advanced competitive players. Our
                      programme is tailored to each student&apos;s current skill
                      level.
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
                    What is the class size for chess coaching?
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
                      1-on-1 coaching for students who prefer individual
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
                    Do you organize chess tournaments?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Yes, we organize regular in-house tournaments and match play
                      sessions. This helps students build competitive experience
                      and confidence in tournament settings.
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
                    How long does chess coaching take?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Our chess coaching programme runs on a weekly basis with
                      flexible scheduling options. Students can join at any time
                      and progress at their own pace.
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
              Ready to Master Chess?
            </h2>
            <p className="text-navy-800 mb-8 text-lg">
              Book a free assessment and discover your pathway to chess mastery
              with Dubai&apos;s best chess coaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-navy-800 transition"
                aria-label="Book a free chess assessment at Improve ME Institute Dubai"
              >
                <span>Book Free Assessment</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/contact#timetable"
                className="inline-flex items-center gap-2 bg-white text-navy-900 border-2 border-navy-900 px-10 py-4 rounded-lg font-semibold hover:bg-navy-50 transition"
                aria-label="View chess coaching timetable in Dubai"
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
