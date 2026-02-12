import Link from "next/link";
import type { Metadata } from "next";
import {
  Users,
  GraduationCap,
  Target,
  CheckCircle,
  BookOpen,
  ArrowRight,
  Microscope,
  Atom,
  Leaf,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { BulletList } from "../../../components/ui/bullet-list";
import { SubjectQualificationsGrid } from "@/components/sections/SubjectQualificationsGrid";

export const metadata: Metadata = {
  title: "Science Tutoring Dubai | Primary & KS3 | Improve ME Institute",
  description: "General science tutoring in Dubai for primary and KS3 students. Biology, chemistry, physics. Hands-on learning and exam preparation.",
  keywords: "science tutoring Dubai, primary science Dubai, KS3 science tutor, general science Dubai, science classes Dubai",
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "Science Tutoring in Dubai - Primary & KS3 | Improve ME Institute",
    description: "Expert general science tutoring for Primary and Key Stage 3 in Dubai. Small groups, qualified tutors, proven results.",
    url: "https://improvemeinstitute.com/courses/science",
    siteName: "Improve ME Institute",
    images: [{ url: "/og-science.jpg", width: 1200, height: 630, alt: "Science Tutoring in Dubai" }],
    locale: "en_AE",
    type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: "https://improvemeinstitute.com/courses/science" },
};

export default function SciencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Science Tutoring - Primary & Key Stage 3",
    description: "Comprehensive general science tutoring for students in Dubai covering Primary and Key Stage 3 curricula",
    provider: {
      "@type": "EducationalOrganization",
      name: "Improve ME Institute",
      address: { "@type": "PostalAddress", streetAddress: "Suite 3016-3017, Building 3, Gold and Diamond Park", addressLocality: "Dubai", addressCountry: "AE" },
      telephone: "+971-50-185-2505",
      url: "https://improvemeinstitute.com",
    },
    educationalLevel: ["Primary Education", "Secondary Education"],
    coursePrerequisites: "None - suitable for all levels from Primary to Key Stage 3",
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
                <span itemProp="name" className="text-navy-900 font-medium">Science (General)</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        <section className="relative bg-gradient-to-br from-green-600 to-green-700 chevron-pattern pt-32 pb-16">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 itemProp="name" className="text-4xl md:text-5xl font-bold text-white mb-4">Science (General)</h1>
              <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">Primary | Key Stage 1 | Key Stage 2 | Key Stage 3</div>
              <p itemProp="description" className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8">
                Explore the natural world through hands-on science. Covering biology, chemistry, and physics for primary and KS3 students before they specialize.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact#assessment" className="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition">Book Free Assessment</Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: QUALIFICATIONS GRID */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-4 text-center">
              Science Across All Qualifications
            </h2>
            <p className="text-navy-600 mb-10 text-center">
              Expert Dubai science tutoring tailored to your curriculum
            </p>

            <SubjectQualificationsGrid subject="science" />
          </div>
        </section>

        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Comprehensive Science Coverage</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Leaf className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">Biology Topics</h3>
                <BulletList
                  items={[
                    "Living things and habitats",
                    "Plants and animals",
                    "Human body systems",
                    "Life cycles and reproduction",
                    "Evolution and inheritance",
                    "Cells and organization",
                  ]}
                />
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Atom className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">Chemistry Topics</h3>
                <BulletList
                  items={[
                    "Materials and their properties",
                    "States of matter",
                    "Chemical reactions",
                    "Atoms, elements, compounds",
                    "The periodic table",
                    "Acids and alkalis",
                  ]}
                />
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Microscope className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">Physics Topics</h3>
                <BulletList
                  items={[
                    "Forces and motion",
                    "Light and sound",
                    "Electricity and magnetism",
                    "Energy and power",
                    "Space and the solar system",
                    "Waves and radiation",
                  ]}
                />
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
                  <item.Icon className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-navy-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Curriculum Coverage</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-navy-700 mb-6">We cover the UK National Curriculum for Science across all key stages, preparing students for GCSE specialization.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-green-600 to-green-700 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Why Improve ME for Science?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "KHDA-approved tutoring centre",
                "Small groups (max 6 students)",
                "Specialist subject tutors",
                "Proven track record of results",
                "Hands-on practical learning",
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
                { quote: "My daughter loves science now! The hands-on experiments made all the difference.", name: "Sarah L.", school: "Parent, Year 5" },
                { quote: "Prepared perfectly for GCSE - now confident in all three sciences.", name: "James K.", school: "Year 9 Student" },
                { quote: "The practical approach helped my son understand complex concepts easily.", name: "Maria R.", school: "Parent, Year 7" },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-green-50 border border-green-200 rounded-xl p-6" itemScope itemType="https://schema.org/Review">
                  <meta itemProp="itemReviewed" content="Science Tutoring" />
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
                { Icon: Atom, name: "Chemistry Tutoring", desc: "Specialized chemistry for GCSE and beyond.", href: "/courses/chemistry", color: "purple" },
                { Icon: Target, name: "Physics Tutoring", desc: "Specialized physics for GCSE and beyond.", href: "/courses/physics", color: "sky" },
                { Icon: Leaf, name: "Biology Tutoring", desc: "Specialized biology for GCSE and beyond.", href: "/courses/biology", color: "emerald" },
              ].map((subject) => (
                <div key={subject.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                  <subject.Icon className={`w-10 h-10 text-${subject.color}-600 mb-3`} />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{subject.name}</h3>
                  <p className="text-navy-600 text-sm mb-4">{subject.desc}</p>
                  <Link href={subject.href} className="text-green-600 font-medium hover:text-green-700 text-sm">
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
                <AccordionTrigger><span itemProp="name">What science levels do you teach?</span></AccordionTrigger>
                <AccordionContent>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-sm text-navy-700">
                      We teach general science for Key Stage 1 (Ages 5-7), Key Stage 2 (Ages 7-11), and Key Stage 3 (Ages 11-14). We cover the UK National Curriculum and prepare students for GCSE specialization.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" itemScope itemType="https://schema.org/Question">
                <AccordionTrigger><span itemProp="name">What is the class size for science tutoring?</span></AccordionTrigger>
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
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Ready to Excel in Science?</h2>
            <p className="text-navy-800 mb-8 text-lg">Book your free assessment and discover how we can help your child achieve stronger results in science.</p>
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
