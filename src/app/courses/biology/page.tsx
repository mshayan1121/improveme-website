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
  Leaf,
  Dna,
  Heart,
  Atom,
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
    "Biology Tutoring Dubai | GCSE, IGCSE, A-Level, IB | Improve ME Institute",
  description:
    "Expert biology tutoring in Dubai. Cell biology, genetics, ecology. GCSE to A-Level and IB. Exam-focused, practical understanding.",
  keywords:
    "biology tutoring Dubai, GCSE biology Dubai, IGCSE biology tutor, A-Level biology Dubai, IB biology tutoring, biology classes Dubai, Gold Diamond Park tutoring, biology exam preparation Dubai",
  authors: [{ name: "Improve ME Institute" }],
  openGraph: {
    title: "Biology Tutoring in Dubai - All Levels | Improve ME Institute",
    description:
      "Expert biology tutoring for GCSE, IGCSE, A-Level, and IB in Dubai. Small groups, qualified tutors, proven results.",
    url: "https://improvemeinstitute.com/courses/biology",
    siteName: "Improve ME Institute",
    images: [{ url: "/og-biology.jpg", width: 1200, height: 630, alt: "Biology Tutoring in Dubai" }],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biology Tutoring in Dubai - GCSE, A-Level & IB",
    description: "Expert biology tutoring in Dubai. All major curricula. Book your free assessment today.",
    images: ["/og-biology.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: "https://improvemeinstitute.com/courses/biology" },
};

const qualificationsId = "biology-qualifications";

export default function BiologyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Biology Tutoring - GCSE, IGCSE, A-Level & IB",
    description: "Comprehensive biology tutoring for students in Dubai covering GCSE, IGCSE, A-Level, and IB curricula",
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
                <span itemProp="name" className="text-navy-900 font-medium">Biology</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 chevron-pattern pt-32 pb-16">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 itemProp="name" className="text-4xl md:text-5xl font-bold text-white mb-4">Biology</h1>
              <div className="inline-flex bg-white/20 rounded-full px-6 py-2 text-white/90 text-sm mb-6">GCSE | IGCSE | A-Level | IB</div>
              <p itemProp="description" className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8">
                Explore life from cells to ecosystems. Master cell biology, genetics, physiology, and ecology with clear, methodical teaching.
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
            <h2 className="text-3xl font-bold text-navy-900 mb-4 text-center">Biology Across All Qualifications</h2>
            <p className="text-navy-600 mb-10 text-center">Expert Dubai biology tutoring tailored to your curriculum</p>
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="grid grid-flow-col auto-cols-[200px] sm:auto-cols-[220px] lg:auto-cols-[240px] xl:auto-cols-[260px] gap-6 px-4">
              <Link href="/curriculum/secondary/gcse/biology" className="block h-full">
                <div className="group bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 min-h-[220px] h-full flex flex-col hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-semibold mb-2 inline-block w-fit">
                    Ages 14-16
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-1">GCSE</h3>
                  <p className="text-white/90 text-[10px] text-center mb-2">
                    AQA, Edexcel, OCR
                  </p>
                  <p className="text-white/90 text-xs text-center mb-2 flex-grow leading-tight">
                    Foundation to Higher tier. Covers cells, genetics, homeostasis,
                    ecosystems, and required practicals with exam technique.
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-white/80 text-[10px] mt-auto transition-colors group-hover:text-white">
                    <span>Learn more about GCSE Biology</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              </Link>

              <Link href="/curriculum/secondary/igcse/biology" className="block h-full">
                <div className="group bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-3 min-h-[220px] h-full flex flex-col hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-semibold mb-2 inline-block w-fit">
                    Ages 14-16
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-1">IGCSE</h3>
                  <p className="text-white/90 text-[10px] text-center mb-2">
                    Cambridge, Edexcel
                  </p>
                  <p className="text-white/90 text-xs text-center mb-2 flex-grow leading-tight">
                    International pathway covering cell biology, human physiology,
                    ecology, and practical skills—supported by targeted paper practice.
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-white/80 text-[10px] mt-auto transition-colors group-hover:text-white">
                    <span>Learn more about IGCSE Biology</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              </Link>

              <Link href="/curriculum/secondary/a-level/biology" className="block h-full">
                <div className="group bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 min-h-[220px] h-full flex flex-col hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-semibold mb-2 inline-block w-fit">
                    Ages 16-18
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-1">A-Level</h3>
                  <p className="text-white/90 text-[10px] text-center mb-2">
                    AQA, Edexcel, OCR
                  </p>
                  <p className="text-white/90 text-xs text-center mb-2 flex-grow leading-tight">
                    Advanced study of biochemistry, genetics, physiology, and
                    experimental design—ideal preparation for medicine and life sciences.
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-white/80 text-[10px] mt-auto transition-colors group-hover:text-white">
                    <span>Learn more about A-Level Biology</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              </Link>

              <Link href="/curriculum/secondary/ib/biology" className="block h-full">
                <div className="group bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-3 min-h-[220px] h-full flex flex-col hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-semibold mb-2 inline-block w-fit">
                    Ages 16-18
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-1">IB Biology</h3>
                  <p className="text-white/90 text-[10px] text-center mb-2">SL &amp; HL</p>
                  <p className="text-white/90 text-xs text-center mb-2 flex-grow leading-tight">
                    Standard and Higher Level support with clear explanations, strong
                    data handling, and Internal Assessment guidance.
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-white/80 text-[10px] mt-auto transition-colors group-hover:text-white">
                    <span>Learn more about IB Biology</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Comprehensive Biology Coverage</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Dna className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">Cell Biology & Genetics</h3>
                <BulletList
                  items={[
                    "Cell structure and function",
                    "Cell division (mitosis and meiosis)",
                    "DNA and protein synthesis",
                    "Genetics and inheritance",
                    "Evolution and natural selection",
                    "Genetic engineering",
                  ]}
                />
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Heart className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">Human Biology</h3>
                <BulletList
                  items={[
                    "Organ systems",
                    "Digestion and nutrition",
                    "Respiration and gas exchange",
                    "Circulation and heart",
                    "Nervous system and hormones",
                    "Health and disease",
                  ]}
                />
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Leaf className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">Ecology & Environment</h3>
                <BulletList
                  items={[
                    "Ecosystems and food webs",
                    "Photosynthesis and respiration",
                    "Biodiversity and classification",
                    "Environmental impacts",
                    "Conservation",
                    "Field techniques",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Biology by Level</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">Foundation Level</span>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">GCSE/IGCSE Biology</h3>
                <BulletList
                  items={[
                    "Fundamental concepts and theories",
                    "Core practical experiments",
                    "Scientific method and analysis",
                    "Cell biology, human biology, ecology",
                    "Exam technique for top grades",
                  ]}
                />
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full mb-4 inline-block text-sm">Advanced Level</span>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">A-Level & IB Biology</h3>
                <BulletList
                  items={[
                    "In-depth theoretical understanding",
                    "Advanced practical investigations",
                    "Research skills and analysis",
                    "University entrance preparation",
                    "Biochemistry, genetics, physiology",
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
                  <item.Icon className="w-12 h-12 text-emerald-600 mb-4" />
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
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
              {["AQA", "Edexcel", "OCR", "Cambridge", "Pearson", "IB", "WJEC"].map((board) => (
                <div key={board} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-semibold text-navy-900">{board}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Why Improve ME for Biology?</h2>
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
                { quote: "Improved from grade 5 to grade 9 in GCSE Biology!", name: "Rachel K.", school: "Dubai British School" },
                { quote: "The practical sessions made biology concepts clear.", name: "Omar H.", school: "GEMS Wellington" },
                { quote: "Achieved grade 7 in IB Biology HL - excellent support!", name: "Zara M.", school: "JESS Arabian Ranches" },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-emerald-50 border border-emerald-200 rounded-xl p-6" itemScope itemType="https://schema.org/Review">
                  <meta itemProp="itemReviewed" content="Biology Tutoring" />
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
                { Icon: Atom, name: "Chemistry Tutoring", desc: "Complementary life sciences.", href: "/courses/chemistry", color: "purple" },
                { Icon: Target, name: "Physics Tutoring", desc: "Forces, energy, and motion.", href: "/courses/physics", color: "sky" },
                { Icon: Award, name: "Psychology Tutoring", desc: "Understanding human behavior.", href: "/courses/psychology", color: "rose" },
              ].map((subject) => (
                <div key={subject.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                  <subject.Icon className={`w-10 h-10 text-${subject.color}-600 mb-3`} />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{subject.name}</h3>
                  <p className="text-navy-600 text-sm mb-4">{subject.desc}</p>
                  <Link href={subject.href} className="text-emerald-600 font-medium hover:text-emerald-700 text-sm">
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
                <AccordionTrigger><span itemProp="name">What biology qualifications do you teach?</span></AccordionTrigger>
                <AccordionContent>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-sm text-navy-700">
                      We teach biology for GCSE, IGCSE, A-Level, and IB Diploma (both Standard and Higher Level). We cover all major exam boards including AQA, Edexcel, OCR, Cambridge, and IB.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" itemScope itemType="https://schema.org/Question">
                <AccordionTrigger><span itemProp="name">What is the class size for biology tutoring?</span></AccordionTrigger>
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
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Ready to Excel in Biology?</h2>
            <p className="text-navy-800 mb-8 text-lg">Book your free assessment and discover how we can help your child achieve stronger results in biology.</p>
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
