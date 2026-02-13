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
  Search,
  Lightbulb,
  Heart,
  MessageSquare,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "KS3 Tutoring Dubai | Key Stage 3 Curriculum — Improve ME",
  description:
    "KS3 tutoring in Dubai for Years 7–9. Build strong foundations before GCSE with small group classes, diagnostic assessments, and specialist subject tutors.",
  keywords: [
    "KS3 tutoring Dubai",
    "Key Stage 3 Dubai",
    "Year 7 tutoring Dubai",
    "secondary school tutoring Dubai",
    "KS3 curriculum support",
    "GCSE preparation",
    "Year 7 transition",
    "secondary school subjects",
    "UK curriculum Dubai",
    "exam readiness",
  ],
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "KS3 Tutoring Dubai | Key Stage 3 Curriculum — Improve ME",
    description:
      "KS3 tutoring in Dubai for Years 7–9. Build strong foundations before GCSE with small group classes, diagnostic assessments, and specialist subject tutors.",
    url: "https://improvemeinstitute.com/curriculum/secondary/ks3",
    siteName: "Improve ME Institute",
    locale: "en_AE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://improvemeinstitute.com/curriculum/secondary/ks3",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Key Stage 3 Curriculum",
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
  educationalLevel: "Key Stage 3 (Years 7-9)",
  coursePrerequisites: "Completion of Key Stage 2 or equivalent",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What ages does Key Stage 3 cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KS3 covers students aged 11–14, in Years 7, 8, and 9. In the UAE grade system, this corresponds to Grades 6, 7, and 8.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between KS3 and GCSE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KS3 is the foundation stage — Years 7 to 9. GCSE is the exam stage — Years 10 and 11. What your child learns at KS3 directly prepares them for GCSE-level content and exams.",
      },
    },
    {
      "@type": "Question",
      name: "My child just started Year 7 and is already struggling. Is that normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The jump from primary to secondary is significant, and many students experience a dip in the first term. The key is catching gaps early before they compound. Our diagnostic assessments identify exactly where your child needs support.",
      },
    },
    {
      "@type": "Question",
      name: "When do students choose their GCSE subjects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Dubai schools ask students to select their GCSE options during Year 8 or early Year 9. We can help by assessing your child's strengths and providing honest guidance on where they're most likely to succeed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer tutoring for all three sciences at KS3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our KS3 Science programme covers Biology, Chemistry, and Physics as an integrated course, following the UK National Curriculum. From GCSE onward, we offer each science as a separate course.",
      },
    },
    {
      "@type": "Question",
      name: "How big are your groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our groups have a maximum of 6 students, and most sessions average 2–3. This ensures your child receives focused, personalised attention.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my child needs KS3 tutoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common signs include dropping grades, difficulty with homework, a lack of confidence in a subject, or simply wanting to stay ahead. We offer a free diagnostic assessment to help you understand where your child stands.",
      },
    },
    {
      "@type": "Question",
      name: "What qualifications do your tutors have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have 40+ tutors with specialist subject knowledge across Mathematics, English, and Sciences. All are experienced in teaching the UK curriculum at KS3 level and above.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help with school homework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our sessions are structured around curriculum content, not homework help. However, because we align with your child's school scheme of work, what we cover often directly supports the homework they're set.",
      },
    },
  ],
};

export default function KS3Page() {
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
                  Key Stage 3
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
                  Ages 11–14
                </span>
                <span className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm">
                  Secondary Foundation
                </span>
                <span className="inline-flex bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm">
                  Exam Readiness
                </span>
              </div>
              <h1
                itemProp="name"
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Key Stage 3 Curriculum
              </h1>
              <p className="text-white/80 text-sm md:text-base mb-4">
                Ages 11–14 · UK National Curriculum & MYP Foundation · Years 7–9 (Grades 6–8)
              </p>
              <p
                itemProp="description"
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
              >
                Build strong foundations before GCSE with clear teaching,
                structured practice, and the confidence your child needs during
                secondary school's most formative years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/contact#assessment"
                  className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition inline-flex items-center justify-center gap-2"
                  aria-label="Book a free KS3 assessment in Dubai"
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

        {/* SECTION 2: WHAT IS KEY STAGE 3? */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                What is Key Stage 3?
              </h2>
              <p className="text-navy-600 text-lg mb-2">
                A parent's guide to your child's first three years of secondary
                school
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700 mb-12">
              <p>
                Key Stage 3 covers Years 7, 8, and 9 — also known as Grades 6,
                7, and 8 in some Dubai schools. It's the bridge between the
                primary years and the exam years, sitting after Key Stage 2 and
                before GCSE, IGCSE, or MYP.
              </p>
              <p>
                While our core framework follows the British Curriculum, the
                skills we build—inquiry, analysis, and structured writing—are
                universally essential for students transitioning to IB MYP or US
                curriculums.
              </p>
              <p>
                These are the years where your child builds the subject
                knowledge, study habits, and independent thinking that everything
                else depends on. What they learn now directly shapes how they
                perform at GCSE and the options available to them afterward.
              </p>
              <p>
                For families in Dubai following the UK curriculum, KS3 is taught
                at schools like Dubai College, JESS, Kings', Repton, and Nord
                Anglia. Whether your child calls it Year 7 or Grade 6, the
                curriculum expectations are the same.
              </p>
              <p>
                At Improve ME, we've supported KS3 students in Dubai for over
                16 years. We know this stage inside out — the curriculum, the
                pressure points, and what it takes to arrive at GCSE ready to
                succeed.
              </p>
            </div>

            {/* KS3 at a Glance - 3 Column Cards */}
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                KS3 at a Glance
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-navy-900 mb-2">
                    Year 7 (Grade 6)
                  </h4>
                  <p className="text-sm text-navy-600 mb-3 font-medium">
                    Age: 11–12
                  </p>
                  <p className="text-sm text-navy-700 mb-2">
                    First year of secondary — new school, new subjects, new
                    expectations
                  </p>
                  <p className="text-sm font-semibold text-navy-900">
                    Focus: Core foundations and settling in
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-navy-900 mb-2">
                    Year 8 (Grade 7)
                  </h4>
                  <p className="text-sm text-navy-600 mb-3 font-medium">
                    Age: 12–13
                  </p>
                  <p className="text-sm text-navy-700 mb-2">
                    Content deepens — study skills become essential
                  </p>
                  <p className="text-sm font-semibold text-navy-900">
                    Focus: Building depth and strong habits
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-navy-900 mb-2">
                    Year 9 (Grade 8)
                  </h4>
                  <p className="text-sm text-navy-600 mb-3 font-medium">
                    Age: 13–14
                  </p>
                  <p className="text-sm text-navy-700 mb-2">
                    GCSE preparation begins — choosing options, bridging into
                    exam-level content
                  </p>
                  <p className="text-sm font-semibold text-navy-900">
                    Focus: Readiness and subject choices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE YEAR 7 TRANSITION */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                The Year 7 Transition — What Parents Need to Know
              </h2>
              <p className="text-navy-600 text-lg">
                Starting secondary school is one of the biggest changes your
                child will face
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700 mb-12">
              <p>
                Your child may have just passed a competitive entrance exam,
                changed schools entirely, or simply moved from being the oldest
                in primary to the youngest in secondary. Either way, everything
                changes at once.
              </p>
              <p>
                The workload increases. Subjects are taught by different
                specialist teachers. Homework expectations jump. Your child is
                expected to manage their own time, organise their materials, and
                adapt to a pace that's noticeably faster than primary school.
              </p>
              <p>
                For many students — even strong ones — this can feel
                overwhelming. It's completely normal. And it's exactly why the
                right support during KS3 matters so much.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="font-semibold text-navy-900 mb-2">
                  Academically,
                </p>
                <p>
                  students often arrive with gaps they don't realise they have.
                  Primary school may have covered topics broadly, but secondary
                  teachers expect mastery. Maths moves from arithmetic to
                  algebra. English moves from comprehension to literary
                  analysis. Science splits into three distinct disciplines.
                </p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <p className="font-semibold text-navy-900 mb-2">
                  Emotionally,
                </p>
                <p>
                  your child is adjusting to a new environment, new friendships,
                  higher expectations, and the pressure of being assessed more
                  formally and more frequently.
                </p>
              </div>
            </div>

            {/* How We Support the Transition - 4 Icon Grid */}
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
                How We Support the Transition
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                  <ClipboardCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-navy-900 mb-2">
                    Diagnostic Assessment
                  </h4>
                  <p className="text-sm text-navy-700">
                    We start every student with a diagnostic assessment to
                    understand exactly where they are and where the gaps lie.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-navy-900 mb-2">
                    Fill the Gaps
                  </h4>
                  <p className="text-sm text-navy-700">
                    We address knowledge gaps from primary before they compound —
                    so your child isn't playing catch-up all year.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                  <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-navy-900 mb-2">
                    Build Study Habits
                  </h4>
                  <p className="text-sm text-navy-700">
                    We teach the organisational and revision skills that secondary
                    school demands but rarely teaches.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-navy-900 mb-2">
                    Small, Safe Groups
                  </h4>
                  <p className="text-sm text-navy-700">
                    With a maximum of 6 students and an average of 2–3, your
                    child gets attention that's hard to find in a classroom of
                    25–30.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SUBJECTS AT KEY STAGE 3 */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Subjects at Key Stage 3
              </h2>
              <p className="text-navy-600 text-lg">
                Choose your subject to explore what we cover and how we prepare
                your child for GCSE and beyond.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/curriculum/secondary/ks3/mathematics"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Mathematics
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Core skills and problem-solving foundations
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/ks3/english"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <BookOpen className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    English
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Reading, writing, and analysis skills
                  </p>
                  <span className="inline-flex items-center gap-2 text-purple-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary/ks3/science"
                className="block h-full"
              >
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-8 h-full hover:shadow-xl hover:scale-105 transition-all text-center">
                  <Microscope className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Science
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Biology, chemistry, and physics foundations
                  </p>
                  <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                    View Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: YEAR-BY-YEAR PROGRESSION */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                What Changes from Year 7 to Year 9
              </h2>
              <p className="text-navy-600 text-lg">
                KS3 isn't three identical years — each one builds on the last
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border-t-4 border-blue-600 border border-gray-200 rounded-xl p-6">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  Foundation
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Year 7: Finding Their Feet
                </h3>
                <p className="text-sm text-navy-700 mb-3">
                  Introduced to secondary-level content across Maths, English, and
                  Science. Focus on core knowledge, basic analytical skills, and
                  adjusting to the pace of secondary school.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded-r">
                  <p className="text-sm font-semibold text-navy-900 mb-1">
                    Watch for:
                  </p>
                  <p className="text-sm text-navy-700">
                    Gaps from primary that cause problems as content builds.
                    Students who were strong at KS2 can struggle if skills in
                    fractions, sentence structure, or scientific vocabulary aren't
                    secure.
                  </p>
                </div>
              </div>
              <div className="bg-white border-t-4 border-orange-600 border border-gray-200 rounded-xl p-6">
                <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  Building Depth
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Year 8: The Forgotten Year
                </h3>
                <p className="text-sm text-navy-700 mb-3">
                  Content gets significantly harder and study skills become
                  essential. Often overlooked between the excitement of Year 7
                  and the urgency of Year 9.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-3 rounded-r">
                  <p className="text-sm font-semibold text-navy-900 mb-1">
                    Watch for:
                  </p>
                  <p className="text-sm text-navy-700">
                    A dip in motivation or results. Many students coast through
                    Year 8 and arrive at Year 9 underprepared. This is the year
                    to lock in strong habits.
                  </p>
                </div>
              </div>
              <div className="bg-white border-t-4 border-green-600 border border-gray-200 rounded-xl p-6">
                <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  Exam Readiness
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Year 9: The Bridge to GCSE
                </h3>
                <p className="text-sm text-navy-700 mb-3">
                  Many Dubai schools begin covering GCSE-level content in Year 9.
                  Students face one of their most important decisions: choosing
                  GCSE or MYP options.
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-3 rounded-r">
                  <p className="text-sm font-semibold text-navy-900 mb-1">
                    Watch for:
                  </p>
                  <p className="text-sm text-navy-700">
                    Subject choices that don't align with your child's strengths
                    or plans. Homework volume and difficulty increase sharply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: HOW WE PREPARE YOUR CHILD */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                How We Prepare Your Child for What's Coming
              </h2>
              <p className="text-navy-600 text-lg">
                KS3 doesn't have formal external exams — but exam preparation
                starts here
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700 mb-8">
              <p>
                The schools your child attends are assessing them every term. The
                skills they need for GCSE begin developing now. Here's how we
                build exam readiness from Year 7 onward.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <ClipboardCheck className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Diagnostic Assessments
                </h3>
                <p className="text-navy-700 text-sm">
                  We identify your child's specific gaps and strengths
                  immediately, reassessing regularly to track progress rather
                  than relying on guesswork.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Exam-Style Practice
                </h3>
                <p className="text-navy-700 text-sm">
                  Students learn to interpret command words and structure
                  answers for maximum marks, moving to authentic past-paper
                  questions by Year 9.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Revision Packs & Study Skills
                </h3>
                <p className="text-navy-700 text-sm">
                  We provide targeted revision materials and teach active recall
                  techniques—essential study habits most students don't learn
                  until it's too late.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Personalised Learning
                </h3>
                <p className="text-navy-700 text-sm">
                  Our small group model allows us to adapt to your child's
                  needs, providing you with clear updates on exactly what we've
                  covered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: CHOOSING GCSE & MYP OPTIONS */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Choosing GCSE and MYP Options — Getting It Right
              </h2>
              <p className="text-navy-600 text-lg">
                One of the most important decisions your child makes during KS3
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700 mb-8">
              <p>
                At most British curriculum schools in Dubai, students study a
                core of compulsory subjects at GCSE: Mathematics, English
                Language, English Literature, and the Sciences. Beyond that, they
                typically choose 3–4 additional subjects from options that may
                include Business Studies, Economics, Psychology, History,
                Geography, and others.
              </p>
              <p>
                If your child follows the IB Middle Years Programme (MYP), the
                structure differs — but the same principles of informed subject
                selection apply.
              </p>
              <p>
                Most schools ask students to select their options during Year 8
                or early Year 9. The subjects your child chooses now directly
                affect their A-Level options, university applications, and career
                pathways.
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  What parents should consider
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-navy-900 mb-1">
                      Strengths and interests.
                    </p>
                    <p className="text-sm text-navy-700">
                      GCSE subjects are demanding. Students perform better in
                      subjects they enjoy and have a natural aptitude for.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1">
                      Future pathways.
                    </p>
                    <p className="text-sm text-navy-700">
                      Some A-Level and university courses require specific GCSEs.
                      A student considering A-Level Economics benefits from
                      strong GCSE Maths. Medicine pathways typically require all
                      three sciences.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1">Balance.</p>
                    <p className="text-sm text-navy-700">
                      A mix of subjects — some analytical, some creative, some
                      humanities-based — tends to keep options open and prevent
                      burnout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-6">
                <p className="font-semibold text-navy-900 mb-2">
                  How we help with options decisions
                </p>
                <p className="text-sm text-navy-700 mb-4">
                  We don't make the decision for you, but we're well placed to
                  support it. We can assess your child's current performance
                  across subjects, provide honest feedback on whether a subject is
                  realistic at GCSE level, and support the transition once
                  options are confirmed.
                </p>
                <p className="text-sm text-navy-700">
                  We offer GCSE and IGCSE tutoring across Mathematics, English,
                  Biology, Chemistry, Physics, Business Studies, Economics, and
                  Psychology.
                </p>
              </div>
            </div>
            <div className="flex justify-center mb-6">
              <Link
                href="/counselling-pathways"
                className="border-2 border-navy-600 text-navy-600 px-6 py-3 rounded-lg font-semibold hover:bg-navy-50 transition inline-flex items-center justify-center gap-2"
              >
                View counselling Pathways & Future Skills
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/curriculum/secondary/gcse"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center gap-2"
              >
                Explore GCSE Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/curriculum/secondary/igcse"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center justify-center gap-2"
              >
                Explore IGCSE Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/curriculum/secondary/myp"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center justify-center gap-2"
              >
                Explore MYP Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: OUR KS3 TEACHING APPROACH */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Our Key Stage 3 Teaching Approach
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Small Groups
                </h3>
                <p className="text-sm text-navy-700">
                  Maximum 6 students per class. Many groups average 2–3 for
                  personalised attention.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Exam Technique
                </h3>
                <p className="text-sm text-navy-700">
                  We teach mark schemes, command words, structure, timing, and
                  common pitfalls to avoid.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Confidence & Consistency
                </h3>
                <p className="text-sm text-navy-700">
                  Regular practice and feedback builds trust so your child enters
                  each school term with confidence.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Progress Tracking
                </h3>
                <p className="text-sm text-navy-700">
                  Clear targets and regular check-ins so students (and parents)
                  know exactly what to work on next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: WHY IMPROVE ME FOR KEY STAGE 3? */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why Improve ME for Key Stage 3?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                "KHDA-approved tutoring centre in Gold & Diamond Park",
                "16+ years' experience teaching KS3 in Dubai",
                "Small groups (max 6 students) for personalised support",
                "Specialist subject tutors with proven track records",
                "Structured, curriculum-aligned teaching across all exam boards",
                "All exam boards covered: UK National, International Schools",
                "Regular progress reports to track improvement",
                "Flexible scheduling to fit your family's routine",
                "Dedicated learning environment with easy access from Sheikh Zayed Road",
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

        {/* SECTION 10: MORE THAN ACADEMICS */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                More Than Academics — Supporting Your Child Through KS3
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-navy-700">
              <p>
                KS3 isn't just about what your child learns in the classroom.
                It's a period of real personal growth — and sometimes real
                pressure. Students are navigating new friendships, greater
                independence, higher expectations, and the growing awareness that
                their performance has long-term consequences.
              </p>
              <p>
                A child who feels overwhelmed or unsupported won't perform at
                their best, no matter how good the teaching is. That's why our
                approach goes beyond content delivery.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <Users className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    A safe, small-group environment.
                  </h3>
                  <p className="text-sm text-navy-700">
                    Your child isn't lost in a crowd. They can ask questions,
                    make mistakes, and build confidence without the social
                    pressure of a large classroom.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <Heart className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    Tutors who know your child.
                  </h3>
                  <p className="text-sm text-navy-700">
                    Because our groups are small and consistent, our tutors
                    develop a genuine understanding of each student — their
                    strengths, struggles, and what motivates them. This isn't
                    drop-in tutoring. It's an ongoing relationship.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <Lightbulb className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    Building independence.
                  </h3>
                  <p className="text-sm text-navy-700">
                    We don't do the work for your child. We teach them how to
                    approach problems, manage their time, and take ownership of
                    their learning — habits that carry them through GCSE,
                    A-Level, and beyond.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <MessageSquare className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    Communication with parents.
                  </h3>
                  <p className="text-sm text-navy-700">
                    If we notice a change in your child's attitude, effort, or
                    performance, we'll let you know and work with you on a plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: KEY STAGE 3 SUCCESS STORIES */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Key Stage 3 Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  quote:
                    "My son started Year 7 really struggling with the jump from primary. Within a term at Improve ME, his confidence came back and his grades followed.",
                  name: "Parent M.",
                  role: "Parent, Year 7 Student",
                },
                {
                  quote:
                    "The small groups made such a difference. My daughter actually looks forward to her sessions — she says she can ask questions without feeling embarrassed.",
                  name: "Aisha K.",
                  role: "Parent, Year 8 Student",
                },
                {
                  quote:
                    "Improve ME helped us navigate the GCSE options process. They were honest about where my son was strong and where he needed to be realistic. That guidance was invaluable.",
                  name: "David R.",
                  role: "Parent, Year 9 Student",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <meta itemProp="itemReviewed" content="Key Stage 3 Tutoring" />
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

        {/* SECTION 12: EXPLORE RELATED CURRICULUM */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Explore Related Curriculum
              </h2>
              <p className="text-navy-600 text-lg">
                Continue your child's learning journey or explore nearby pathways
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/curriculum/secondary/gcse"
                className="block h-full group"
              >
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 h-full text-white hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                  <div className="relative z-10">
                    <GraduationCap className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">GCSE Curriculum</h3>
                    <p className="text-white/90 mb-4">
                      Explore the GCSE pathway for Mathematics, English, and
                      Sciences and see what comes next.
                    </p>
                    <span className="inline-flex items-center gap-2 font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/curriculum/primary/ks2"
                className="block h-full group"
              >
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-8 h-full text-white hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                  <div className="relative z-10">
                    <BookOpen className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      Key Stage 2 Curriculum
                    </h3>
                    <p className="text-white/90 mb-4">
                      Explore the Key Stage 2 pathway and see where your child's
                      foundations were built.
                    </p>
                    <span className="inline-flex items-center gap-2 font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/curriculum/secondary"
                className="block h-full group"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 h-full text-white hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                  <div className="relative z-10">
                    <Award className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      All Secondary Courses
                    </h3>
                    <p className="text-white/90 mb-4">
                      View all secondary qualifications and pathways from GCSE to
                      A-Level and IB.
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

        {/* SECTION 13: FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Key Stage 3 — Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="ages">
                <AccordionTrigger>
                  What ages does Key Stage 3 cover?
                </AccordionTrigger>
                <AccordionContent>
                  KS3 covers students aged 11–14, in Years 7, 8, and 9. In the
                  UAE grade system, this corresponds to Grades 6, 7, and 8.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="difference">
                <AccordionTrigger>
                  What's the difference between KS3 and GCSE?
                </AccordionTrigger>
                <AccordionContent>
                  KS3 is the foundation stage — Years 7 to 9. GCSE is the exam
                  stage — Years 10 and 11. What your child learns at KS3
                  directly prepares them for GCSE-level content and exams.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="struggling">
                <AccordionTrigger>
                  My child just started Year 7 and is already struggling. Is
                  that normal?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. The jump from primary to secondary is significant, and many
                  students experience a dip in the first term. The key is
                  catching gaps early before they compound. Our diagnostic
                  assessments identify exactly where your child needs support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="gcse-options">
                <AccordionTrigger>
                  When do students choose their GCSE subjects?
                </AccordionTrigger>
                <AccordionContent>
                  Most Dubai schools ask students to select their GCSE options
                  during Year 8 or early Year 9. We can help by assessing your
                  child's strengths and providing honest guidance on where they're
                  most likely to succeed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sciences">
                <AccordionTrigger>
                  Do you offer tutoring for all three sciences at KS3?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Our KS3 Science programme covers Biology, Chemistry, and
                  Physics as an integrated course, following the UK National
                  Curriculum. From GCSE onward, we offer each science as a
                  separate course.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="group-size">
                <AccordionTrigger>How big are your groups?</AccordionTrigger>
                <AccordionContent>
                  Our groups have a maximum of 6 students, and most sessions
                  average 2–3. This ensures your child receives focused,
                  personalised attention.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="need-tutoring">
                <AccordionTrigger>
                  How do I know if my child needs KS3 tutoring?
                </AccordionTrigger>
                <AccordionContent>
                  Common signs include dropping grades, difficulty with homework,
                  a lack of confidence in a subject, or simply wanting to stay
                  ahead. We offer a free diagnostic assessment to help you
                  understand where your child stands.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="qualifications">
                <AccordionTrigger>
                  What qualifications do your tutors have?
                </AccordionTrigger>
                <AccordionContent>
                  We have 40+ tutors with specialist subject knowledge across
                  Mathematics, English, and Sciences. All are experienced in
                  teaching the UK curriculum at KS3 level and above.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="homework">
                <AccordionTrigger>Do you help with school homework?</AccordionTrigger>
                <AccordionContent>
                  Our sessions are structured around curriculum content, not
                  homework help. However, because we align with your child's
                  school scheme of work, what we cover often directly supports the
                  homework they're set.
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

        {/* SECTION 14: FINAL CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-14">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Give Your Child the Strongest Start to Secondary?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
              Book a free assessment and find out exactly where your child
              stands — and how we can help them build the confidence and skills
              they need for GCSE and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/contact#assessment"
                className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition inline-flex items-center justify-center gap-2"
                aria-label="Book a free KS3 assessment in Dubai"
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
              Trusted by families across Dubai since 2010 · KHDA-approved · Gold
              & Diamond Park
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
