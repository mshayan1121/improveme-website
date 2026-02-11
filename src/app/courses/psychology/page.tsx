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
  Brain,
  Lightbulb,
  Heart,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

export const metadata: Metadata = {
  title: "Psychology Tutoring Dubai | GCSE, IGCSE, A-Level, IB | Improve ME Institute",
  description: "Psychology tutoring in Dubai. Research methods, approaches, studies. GCSE to A-Level and IB. Essay technique and exam preparation.",
  keywords: "psychology tutoring Dubai, GCSE psychology Dubai, IGCSE psychology tutor, A-Level psychology Dubai, IB psychology tutoring",
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "Psychology Tutoring in Dubai - All Levels | Improve ME Institute",
    description: "Expert psychology tutoring for GCSE, IGCSE, A-Level, and IB in Dubai. Small groups, qualified tutors, proven results.",
    url: "https://improvemeinstitute.com/courses/psychology",
    siteName: "Improve ME Institute",
    images: [{ url: "/og-psychology.jpg", width: 1200, height: 630, alt: "Psychology Tutoring in Dubai" }],
    locale: "en_AE",
    type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: "https://improvemeinstitute.com/courses/psychology" },
};

const qualificationsId = "psychology-qualifications";

export default function PsychologyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Psychology Tutoring - GCSE, IGCSE, A-Level & IB",
    description: "Comprehensive psychology tutoring for students in Dubai covering GCSE, IGCSE, A-Level, and IB curricula",
    provider: {
      "@type": "EducationalOrganization",
      name: "Improve ME Institute",
      address: { "@type": "PostalAddress", streetAddress: "Suite 3016-3017, Building 3, Gold and Diamond Park", addressLocality: "Dubai", addressCountry: "AE" },
      telephone: "+971-50-185-2505",
      url: "https://improvemeinstitute.com",
    },
    educationalLevel: ["Secondary Education", "High School"],
    coursePrerequisites: "None - suitable for all levels from GCSE to IB",
    hasCourseInstance: [{ "@type": "CourseInstance", courseMode: "In-person", location: { "@type": "Place", name: "Improve ME Institute", address: "Gold and Diamond Park, Dubai" } }],
    offers: { "@type": "Offer", category: "Educational", availability: "https://schema.org/InStock" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "116", bestRating: "5" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article itemScope itemType="https://schema.org/Course">
        <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
          <div className="max-w-7xl mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item" className="text-navy-600 hover:text-navy-900"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/courses" itemProp="item" className="text-navy-600 hover:text-navy-900"><span itemProp="name">Courses</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-navy-900 font-medium">Psychology</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        <section className="relative bg-gradient-to-br from-rose-600 to-rose-700 chevron-pattern pt-32 pb-16">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 itemProp="name" className="text-4xl md:text-5xl font-bold text-white mb-4">Psychology</h1>
              <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">GCSE | IGCSE | A-Level | IB</div>
              <p itemProp="description" className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8">
                Explore human behaviour and mental processes. Master research methods, psychological approaches, and key studies with structured exam preparation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact#assessment" className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition">Book Free Assessment</Link>
                <Link href={`#${qualificationsId}`} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">Explore Qualifications</Link>
              </div>
            </div>
          </div>
        </section>

        <section id={qualificationsId} className="bg-white py-14 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-4 text-center">Psychology Across All Qualifications</h2>
            <p className="text-navy-600 mb-10 text-center">Expert Dubai psychology tutoring tailored to your curriculum</p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "GCSE", age: "Ages 14-16", boards: "AQA, Edexcel, OCR", desc: "Foundation to Higher tier, targeting grades 7-9." },
                { name: "IGCSE", age: "Ages 14-16", boards: "Cambridge, Edexcel", desc: "International curriculum with global recognition." },
                { name: "A-Level", age: "Ages 16-18", boards: "AQA, Edexcel, OCR", desc: "Advanced level for university preparation." },
                { name: "IB", age: "Ages 16-18", boards: "Psychology SL & HL", desc: "International Baccalaureate standard and higher level." },
              ].map((qual) => (
                <div key={qual.name} className="group bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer flex flex-col">
                  <span className="text-xs bg-rose-600 text-white px-3 py-1 rounded-full mb-3 inline-block">{qual.age}</span>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{qual.name}</h3>
                  <p className="text-sm text-navy-600 mb-3">{qual.boards}</p>
                  <p className="text-sm text-navy-700 mb-4">{qual.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Comprehensive Psychology Coverage</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Brain className="w-10 h-10 text-rose-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">Approaches</h3>
                <ul className="space-y-2 text-navy-700">
                  <li>Biological approach</li>
                  <li>Cognitive approach</li>
                  <li>Behavioural approach</li>
                  <li>Social psychology</li>
                  <li>Developmental psychology</li>
                  <li>Psychodynamic approach</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Lightbulb className="w-10 h-10 text-rose-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">Research Methods</h3>
                <ul className="space-y-2 text-navy-700">
                  <li>Experimental methods</li>
                  <li>Observational studies</li>
                  <li>Interviews and surveys</li>
                  <li>Case studies</li>
                  <li>Statistical analysis</li>
                  <li>Research design and ethics</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Heart className="w-10 h-10 text-rose-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">Applications</h3>
                <ul className="space-y-2 text-navy-700">
                  <li>Clinical psychology</li>
                  <li>Cognitive psychology</li>
                  <li>Social influence</li>
                  <li>Memory and cognition</li>
                  <li>Mental health</li>
                  <li>Individual differences</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Psychology by Level</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">Foundation Level</span>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">GCSE/IGCSE Psychology</h3>
                <p className="text-navy-700 mb-4">Introduction to key psychological concepts, research methods, and classic studies. We develop understanding and exam technique.</p>
                <ul className="space-y-2 text-navy-700">
                  <li>Fundamental psychological concepts</li>
                  <li>Basic research methods</li>
                  <li>Classic studies and theories</li>
                  <li>Exam technique for top grades</li>
                </ul>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">Advanced Level</span>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">A-Level & IB Psychology</h3>
                <p className="text-navy-700 mb-4">Advanced psychology including detailed research methods, complex theories, and sophisticated evaluation skills. Preparing students for university psychology.</p>
                <ul className="space-y-2 text-navy-700">
                  <li>In-depth theoretical understanding</li>
                  <li>Advanced research methods</li>
                  <li>Sophisticated evaluation skills</li>
                  <li>University entrance preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Our Teaching Approach</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { Icon: GraduationCap, title: "Qualified Specialists", desc: "Subject experts with proven results across all exam boards." },
                { Icon: Users, title: "Small Groups (Max 6)", desc: "Personalized attention, faster progress." },
                { Icon: Target, title: "Exam-Focused", desc: "We know what examiners expect." },
                { Icon: BookOpen, title: "Structured Sessions", desc: "Clear learning objectives every session." },
              ].map((item) => (
                <div key={item.title} className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                  <item.Icon className="w-12 h-12 text-rose-600 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-navy-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">All Major Exam Boards</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {["AQA", "Edexcel", "OCR", "Cambridge", "Pearson", "IB"].map((board) => (
                <div key={board} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-rose-600 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-semibold text-navy-900">{board}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-rose-600 to-rose-700 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Why Improve ME for Psychology?</h2>
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
                <div key={benefit} className="flex gap-3 items-start text-white/90">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Student Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { quote: "Improved from grade 4 to grade 8 in GCSE Psychology!", name: "Olivia M.", school: "Dubai British School" },
                { quote: "The research methods and essay techniques were excellent.", name: "Noah K.", school: "GEMS Wellington" },
                { quote: "Achieved grade 7 in IB Psychology HL - couldn't have done it without support!", name: "Isabella R.", school: "JESS Arabian Ranches" },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-rose-50 border border-rose-200 rounded-xl p-6" itemScope itemType="https://schema.org/Review">
                  <meta itemProp="itemReviewed" content="Psychology Tutoring" />
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                  <blockquote className="text-navy-800 text-sm" itemProp="reviewBody">&quot;{testimonial.quote}&quot;</blockquote>
                  <p className="text-sm font-semibold text-navy-900 mt-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{testimonial.name}</span>
                  </p>
                  <p className="text-xs text-navy-600">{testimonial.school}</p>
                  <div className="flex mt-3 gap-1" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg leading-none">★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Explore Related Subjects</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { Icon: Target, name: "Biology Tutoring", desc: "Biological basis of behavior.", href: "/courses/biology", color: "emerald" },
                { Icon: Award, name: "Business Studies Tutoring", desc: "Consumer behavior and marketing psychology.", href: "/courses/business-studies", color: "amber" },
                { Icon: BookOpen, name: "English Tutoring", desc: "Essay writing and critical analysis.", href: "/courses/english", color: "purple" },
              ].map((subject) => (
                <div key={subject.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                  <subject.Icon className={`w-10 h-10 text-${subject.color}-600 mb-3`} />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{subject.name}</h3>
                  <p className="text-navy-600 text-sm mb-4">{subject.desc}</p>
                  <Link href={subject.href} className="text-rose-600 font-medium hover:text-rose-700 text-sm">
                    Explore {subject.name.split(" ")[0]} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-2">
              <AccordionItem value="faq-1" itemScope itemType="https://schema.org/Question">
                <AccordionTrigger><span itemProp="name">What psychology qualifications do you teach?</span></AccordionTrigger>
                <AccordionContent>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-sm text-navy-700">
                      We teach psychology for GCSE, IGCSE, A-Level, and IB Psychology (both Standard and Higher Level). We cover all major exam boards including AQA, Edexcel, OCR, Cambridge, and IB.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" itemScope itemType="https://schema.org/Question">
                <AccordionTrigger><span itemProp="name">What is the class size for psychology tutoring?</span></AccordionTrigger>
                <AccordionContent>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-sm text-navy-700">
                      We maintain small group classes with a maximum of 6 students to ensure personalized attention. We also offer 1-on-1 tutoring for students who prefer individual instruction.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-14">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Ready to Excel in Psychology?</h2>
            <p className="text-navy-800 mb-8 text-lg">Book your free assessment and discover how we can help your child achieve stronger results in psychology.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#assessment" className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-navy-800 transition">
                <span>Book Free Assessment</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link href="/courses" className="inline-flex items-center gap-2 bg-white text-navy-900 border-2 border-navy-900 px-10 py-4 rounded-lg font-semibold hover:bg-navy-50 transition">
                <span>View All Courses</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
