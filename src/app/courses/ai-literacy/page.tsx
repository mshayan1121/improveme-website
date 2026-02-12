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
  Cpu,
  Brain,
  Shield,
  Rocket,
  CircuitBoard,
  MessageSquare,
  Calculator,
  Crown,
  DollarSign,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { BulletList } from "../../../components/ui/bullet-list";

export const metadata: Metadata = {
  title: "AI Literacy for Children Dubai | Understanding Artificial Intelligence",
  description:
    "AI literacy programme in Dubai for ages 10-16. Understand AI, machine learning, ethics, and responsible technology use through hands-on projects.",
  keywords: [
    "AI literacy Dubai",
    "artificial intelligence for children",
    "technology education Dubai",
    "AI understanding kids",
  ],
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "AI Literacy for Children Dubai | Improve ME Institute",
    description:
      "Teach students aged 10-16 how AI works, where it is used, and how to think critically about technology, ethics, and real-world applications.",
    url: "https://improvemeinstitute.com/courses/ai-literacy",
    siteName: "Improve ME Institute",
    images: [
      {
        url: "/og-ai-literacy.jpg",
        width: 1200,
        height: 630,
        alt: "AI literacy class in Dubai",
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
    canonical: "https://improvemeinstitute.com/courses/ai-literacy",
  },
};

const qualificationsId = "ai-levels";

export default function AILiteracyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Literacy Programme",
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
    coursePrerequisites: "None - suitable for students aged 10-16",
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
                  AI Literacy
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* SECTION 1: HERO */}
        <section className="relative bg-gradient-to-br from-cyan-500 to-blue-600 chevron-pattern pt-32 pb-16">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                FUTURE SKILLS
              </div>
              <h1
                itemProp="name"
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                AI Literacy
              </h1>
              <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">
                Ages 10-16 | Technology Understanding
              </div>
              <p
                itemProp="description"
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
              >
                Understand artificial intelligence and think critically about
                technology. Learn how AI works, where it&apos;s used, and how
                to use it responsibly, delivered at our modern Gold &amp;
                Diamond Park learning center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
                  aria-label="Book a free AI literacy assessment in Dubai"
                >
                  Book Free Assessment
                </Link>
                <Link
                  href={`#${qualificationsId}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
                  aria-label="Explore AI literacy levels we teach in Dubai"
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
          aria-labelledby="ai-levels-heading"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2
              id="ai-levels-heading"
              className="text-3xl font-bold text-navy-900 mb-4 text-center"
            >
              AI Literacy Across All Levels
            </h2>
            <p className="text-navy-600 mb-10 text-center">
              Expert Dubai AI education tailored to your child&apos;s age
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-cyan-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Ages 10-12
                </span>
                <Brain className="w-10 h-10 text-cyan-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Introduction (What is AI?)
                </h3>
                <p className="text-sm text-navy-600 mb-3">Foundation Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Foundations: what AI is and where it shows up. Visual,
                  game-based demos and storytelling.
                </p>
                <BulletList
                  items={[
                    "Understanding AI basics",
                    "AI in everyday life",
                    "Visual demonstrations",
                    "Interactive games",
                  ]}
                  textClassName="text-navy-700 text-sm"
                  className="mb-4"
                />
                <span className="mt-auto text-cyan-600 font-medium text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Ages 13-14
                </span>
                <CircuitBoard className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Understanding (How AI Works)
                </h3>
                <p className="text-sm text-navy-600 mb-3">Intermediate Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Deeper look at how AI works and real applications. Critical
                  thinking and bias investigations.
                </p>
                <BulletList
                  items={[
                    "How AI systems work",
                    "Machine learning basics",
                    "Real-world applications",
                    "Critical thinking skills",
                  ]}
                  textClassName="text-navy-700 text-sm"
                  className="mb-4"
                />
                <span className="mt-auto text-blue-600 font-medium text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>

              <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                  Ages 15-16
                </span>
                <Rocket className="w-10 h-10 text-indigo-600 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Critical Thinking (AI Ethics & Use)
                </h3>
                <p className="text-sm text-navy-600 mb-3">Advanced Level</p>
                <p className="text-sm text-navy-700 mb-4">
                  Ethics, privacy, and advanced case studies. Career exploration
                  and responsible tool building.
                </p>
                <BulletList
                  items={[
                    "AI ethics and bias",
                    "Privacy and security",
                    "Responsible AI use",
                    "Career exploration",
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
              Comprehensive AI Literacy Coverage
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Cpu
                  className="w-10 h-10 text-cyan-600 mb-4"
                  aria-label="Cpu icon for AI fundamentals"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  AI Fundamentals
                </h3>
                <BulletList
                  items={[
                    "What is AI and machine learning?",
                    "Narrow vs general intelligence",
                    "AI in everyday life examples",
                    "Data, patterns, and model training",
                    "Algorithms and decision making",
                    "Neural networks explained simply",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <CircuitBoard
                  className="w-10 h-10 text-cyan-600 mb-4"
                  aria-label="CircuitBoard icon for how AI works"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  How AI Works
                </h3>
                <BulletList
                  items={[
                    "Voice assistants and chatbots",
                    "Image recognition and computer vision",
                    "Natural language processing",
                    "Recommendation engines",
                    "Self-driving cars case studies",
                    "Healthcare AI applications",
                  ]}
                />
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Shield
                  className="w-10 h-10 text-cyan-600 mb-4"
                  aria-label="Shield icon for ethics and responsible use"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Ethics & Responsible Use
                </h3>
                <BulletList
                  items={[
                    "AI capabilities vs limitations",
                    "Bias, privacy, and misinformation",
                    "Ethical frameworks and debate",
                    "Fact-checking and deepfake detection",
                    "Responsible AI tool usage",
                    "Digital safety and privacy",
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
              AI Literacy by Level
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-8">
                <span className="bg-cyan-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Foundation Level
                </span>
                <Brain
                  className="w-10 h-10 text-cyan-600 mb-4"
                  aria-label="Brain icon for ages 10-12"
                />
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Ages 10-12
                </h3>
                <BulletList
                  items={[
                    "What AI is and where it appears",
                    "Visual demonstrations and games",
                    "Storytelling and interactive activities",
                    "Basic AI vocabulary",
                    "Safe technology use",
                    "Building curiosity and interest",
                  ]}
                />
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">
                  Advanced Level
                </span>
                <Rocket
                  className="w-10 h-10 text-indigo-600 mb-4"
                  aria-label="Rocket icon for ages 13-16"
                />
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Ages 13-16
                </h3>
                <BulletList
                  items={[
                    "How AI systems work technically",
                    "Critical thinking about AI capabilities",
                    "Ethics, bias, and privacy concerns",
                    "Responsible AI tool usage",
                    "Career exploration in AI fields",
                    "Advanced case studies and projects",
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
                <CircuitBoard
                  className="w-12 h-12 text-cyan-600 mb-4"
                  aria-label="CircuitBoard icon representing hands-on demos"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Hands-On Demos
                </h3>
                <p className="text-navy-700 text-sm">
                  Students experiment with real AI tools, datasets, and
                  sandboxed models for practical understanding.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Users
                  className="w-12 h-12 text-cyan-600 mb-4"
                  aria-label="Users icon representing small groups"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Small Group Excellence
                </h3>
                <p className="text-navy-700 text-sm">
                  Maximum 6 students per class ensures personalized attention
                  and interactive discussions.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <MessageSquare
                  className="w-12 h-12 text-cyan-600 mb-4"
                  aria-label="MessageSquare icon representing interactive discussions"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Interactive Discussions
                </h3>
                <p className="text-navy-700 text-sm">
                  Debates, Socratic circles, and ethical scenarios build
                  balanced perspectives on AI.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Rocket
                  className="w-12 h-12 text-cyan-600 mb-4"
                  aria-label="Rocket icon representing project-based learning"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Project-Based Learning
                </h3>
                <p className="text-navy-700 text-sm">
                  Team challenges culminate in creative AI projects and
                  showcases for practical application.
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
                "Hands-On Projects",
                "Progress Reports",
              ].map((detail) => (
                <div
                  key={detail}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
                >
                  <CheckCircle
                    className="w-6 h-6 text-cyan-600 mx-auto mb-2"
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
        <section className="bg-gradient-to-br from-cyan-500 to-blue-600 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why Choose Our AI Literacy Programme?
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "KHDA-approved tutoring centre with proven track record",
                "Experienced technology educators with AI expertise",
                "Small groups (maximum 6 students) for personalized attention",
                "Age-appropriate content from basics to advanced ethics",
                "Hands-on demos with real AI tools and projects",
                "Regular progress tracking with detailed feedback reports",
                "Proven track record of building critical thinking skills",
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
                className="bg-cyan-50 border border-cyan-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="AI Literacy" />
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
                  &quot;My son now understands how recommendation systems work
                  and thinks critically before trusting everything online.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Nadia L.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 9 student</p>
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
                className="bg-cyan-50 border border-cyan-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="AI Literacy" />
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
                  &quot;The ethical debates and AI tool demos helped our
                  daughter use technology responsibly for school projects.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Tariq A.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 11 student</p>
              </div>

              <div
                className="bg-cyan-50 border border-cyan-200 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="AI Literacy" />
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
                  &quot;Excellent programme. My daughter now thinks critically
                  about technology and makes informed decisions.&quot;
                </blockquote>
                <p
                  className="text-sm font-semibold text-navy-900 mt-4"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Sarah M.</span>
                </p>
                <p className="text-xs text-navy-600">Parent of Year 10 student</p>
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
                  Strengthen logic and data reasoning that underpin AI concepts.
                </p>
                <Link
                  href="/courses/mathematics"
                  className="text-cyan-600 font-medium hover:text-cyan-700 text-sm"
                  aria-label="Explore mathematics courses in Dubai"
                >
                  Explore Mathematics →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <Crown
                  className="w-10 h-10 text-green-600 mb-3"
                  aria-label="Crown icon for chess mastery"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Chess Mastery
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Build strategic thinking and pattern recognition skills.
                </p>
                <Link
                  href="/courses/chess"
                  className="text-cyan-600 font-medium hover:text-cyan-700 text-sm"
                  aria-label="Explore chess mastery courses in Dubai"
                >
                  Explore Chess →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <DollarSign
                  className="w-10 h-10 text-navy-600 mb-3"
                  aria-label="DollarSign icon for financial literacy"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Financial Literacy
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  Connect technology decisions with future-ready money skills.
                </p>
                <Link
                  href="/courses/financial-literacy"
                  className="text-cyan-600 font-medium hover:text-cyan-700 text-sm"
                  aria-label="Explore financial literacy courses in Dubai"
                >
                  Explore Financial Literacy →
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
                    What age groups do you teach AI literacy?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      We teach AI literacy for students aged 10-16, with
                      age-appropriate content divided into introduction (10-12),
                      understanding (13-14), and critical thinking (15-16)
                      levels.
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
                    What is the class size for AI literacy classes?
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
                    Do students use real AI tools in the programme?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Yes, students experiment with real AI tools, datasets, and
                      sandboxed models in hands-on demos. We teach responsible
                      use and critical thinking about AI capabilities.
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
                    How long does the AI literacy programme take?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-sm text-navy-700">
                      Our AI literacy programme typically runs for 12-16
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
              Ready to Understand AI?
            </h2>
            <p className="text-navy-800 mb-8 text-lg">
              Book a free assessment and discover your pathway to AI literacy
              with Dubai&apos;s best technology education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-navy-800 transition"
                aria-label="Book a free AI literacy assessment at Improve ME Institute Dubai"
              >
                <span>Book Free Assessment</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/contact#timetable"
                className="inline-flex items-center gap-2 bg-white text-navy-900 border-2 border-navy-900 px-10 py-4 rounded-lg font-semibold hover:bg-navy-50 transition"
                aria-label="View AI literacy timetable in Dubai"
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
