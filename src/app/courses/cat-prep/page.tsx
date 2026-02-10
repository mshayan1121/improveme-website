import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Brain, TrendingUp, Users, GraduationCap, CheckCircle, ArrowRight, Lightbulb, Puzzle, Calculator, Zap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'CAT4 Test Preparation in Dubai - Cognitive Ability Assessment | Improve ME Institute',
  description: 'Expert CAT4 test preparation in Dubai for ages 7-13. Master verbal, non-verbal, quantitative, and spatial reasoning. Boost cognitive skills for school entrance exams.',
  keywords: 'CAT4 test Dubai, cognitive abilities test Dubai, CAT4 preparation, school entrance exam Dubai, cognitive assessment tutoring, CAT4 levels A-F, reasoning skills Dubai',
  authors: [{ name: 'Improve ME Institute' }],
  openGraph: {
    title: 'CAT4 Test Preparation Dubai | Cognitive Abilities Tutoring',
    description: 'Prepare for CAT4 assessments with expert tutoring. All levels (A-F) covered. Proven strategies for verbal, non-verbal, quantitative, and spatial reasoning.',
    url: 'https://improvemeinstitute.com/courses/cat-prep',
    siteName: 'Improve ME Institute',
    images: [
      {
        url: '/og-cat-prep.jpg',
        width: 1200,
        height: 630,
        alt: 'CAT4 Test Preparation in Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://improvemeinstitute.com/courses/cat-prep',
  },
};

export default function CAT4PrepPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'CAT4 Test Preparation',
    description: 'Comprehensive CAT4 (Cognitive Abilities Test) preparation for students aged 7-13 covering all four reasoning batteries',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Improve ME Institute',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite 3016-3017, Building 3, Gold and Diamond Park',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      telephone: '+971-50-185-2505',
    },
    educationalLevel: 'Primary and Middle School',
    coursePrerequisites: 'None - suitable for students aged 7-13',
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'In-person',
        location: {
          '@type': 'Place',
          name: 'Improve ME Institute',
          address: 'Gold and Diamond Park, Dubai',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '116',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the CAT4 test?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The CAT4 (Cognitive Abilities Test) is a standardized assessment that measures students' reasoning abilities across four areas: verbal, non-verbal, quantitative, and spatial reasoning. It helps identify cognitive strengths and potential for academic success.",
        },
      },
      {
        '@type': 'Question',
        name: 'What ages is CAT4 preparation suitable for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our CAT4 preparation is designed for students aged 7-13, covering Levels A through F. Each level corresponds to specific age groups and school years.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long is the CAT4 preparation program?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Programs typically run for 8-12 weeks with 2 sessions per week. We also offer intensive courses closer to exam dates and ongoing cognitive skills development programs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide practice tests?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide authentic-style practice tests, timed assessments, and comprehensive performance analysis to track progress and identify areas for improvement.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should my child start CAT4 preparation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend starting 2-3 months before a scheduled assessment. However, earlier preparation helps build stronger cognitive skills that benefit overall academic performance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is CAT4 preparation suitable for all students?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes! Whether your child is taking CAT4 for school placement, gifted program qualification, or general cognitive development, our program adapts to individual needs and abilities.",
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
            <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item" className="text-navy-600 hover:text-navy-900" aria-label="Go to Home">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/courses" itemProp="item" className="text-navy-600 hover:text-navy-900" aria-label="View all courses">
                  <span itemProp="name">Courses</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-navy-900 font-medium">CAT4 Preparation</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* SECTION 1: HERO (Yellow Gradient - Dark text) */}
        <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-yellow-400 to-yellow-500 chevron-pattern">
          <div className="max-w-7xl mx-auto px-4 py-20 md:py-24 text-center w-full">
            {/* H1 Title */}
            <h1 itemProp="name" className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              CAT4 Test Preparation
            </h1>

            {/* Subtitle Badge */}
            <div className="inline-flex bg-navy-900/20 rounded-full px-6 py-2 text-navy-900 text-sm font-medium mb-8">
              Ages 7-13 | Cognitive Ability Assessment
            </div>

            {/* Description */}
            <p itemProp="description" className="max-w-2xl mx-auto text-lg md:text-xl text-navy-800 mb-10 leading-relaxed">
              Prepare for the Cognitive Abilities Test (CAT4) with expert tutoring. Master verbal, non-verbal, quantitative, and spatial reasoning skills for school entrance exams and cognitive development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center justify-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 transition-all duration-200"
                aria-label="Book a free CAT4 assessment"
              >
                Book Free Assessment
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-navy-900/10 transition-all duration-200"
                aria-label="Download sample CAT4 questions"
              >
                Download Sample Questions
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT IS CAT4? */}
        <section className="bg-white py-14" aria-labelledby="what-is-cat4-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="what-is-cat4-heading" className="text-3xl font-bold text-navy-900 mb-6 text-center">
              What is the CAT4 Test?
            </h2>
            <p className="max-w-3xl mx-auto text-center text-lg text-navy-700 mb-10">
              The Cognitive Abilities Test (CAT4) is a standardized assessment used by schools worldwide to evaluate students&apos; reasoning abilities and learning potential. Unlike achievement tests, CAT4 measures how students think and learn across four key reasoning areas.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Verbal Reasoning</h3>
                <p className="text-navy-700">Word relationships, vocabulary, and language skills</p>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mt-4">VR</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
                <Puzzle className="w-12 h-12 text-purple-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Non-Verbal Reasoning</h3>
                <p className="text-navy-700">Pattern recognition and visual logic</p>
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mt-4">NVR</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <Calculator className="w-12 h-12 text-green-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Quantitative Reasoning</h3>
                <p className="text-navy-700">Number series and mathematical problem-solving</p>
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mt-4">QR</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
                <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Spatial Reasoning</h3>
                <p className="text-navy-700">3D visualization and spatial awareness</p>
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mt-4">SR</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CAT4 LEVELS */}
        <section className="bg-gray-50 py-14" aria-labelledby="cat4-levels-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="cat4-levels-heading" className="text-3xl font-bold text-navy-900 mb-4 text-center">
              CAT4 Levels We Cover
            </h2>
            <p className="text-navy-600 mb-10 text-center">Expert preparation for all age groups</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <span className="bg-yellow-400 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Level A-B</span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Ages 7-9</h3>
                <ul className="space-y-2 text-navy-700">
                  <li>• Level A: Year 2 (Age 7)</li>
                  <li>• Level B: Year 3-4 (Age 8-9)</li>
                  <li>• Foundation reasoning skills</li>
                  <li>• School entry assessments</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <span className="bg-yellow-500 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Level C-D</span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Ages 9-12</h3>
                <ul className="space-y-2 text-navy-700">
                  <li>• Level C: Year 5-6 (Age 9-11)</li>
                  <li>• Level D: Year 7 (Age 11-12)</li>
                  <li>• 11+ entrance exam preparation</li>
                  <li>• Intermediate reasoning development</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <span className="bg-yellow-600 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Level E-F</span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Ages 12-13+</h3>
                <ul className="space-y-2 text-navy-700">
                  <li>• Level E: Year 8 (Age 12-13)</li>
                  <li>• Level F: Year 9+ (Age 13+)</li>
                  <li>• Advanced cognitive assessment</li>
                  <li>• Secondary school placement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CURRICULUM BREAKDOWN */}
        <section className="bg-white py-14" aria-labelledby="curriculum-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="curriculum-heading" className="text-3xl font-bold text-navy-900 mb-10 text-center">
              What Your Child Will Master
            </h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="verbal-reasoning">
                <AccordionTrigger>Verbal Reasoning (VR)</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Vocabulary and word relationships</li>
                    <li>Sentence completion techniques</li>
                    <li>Verbal classification strategies</li>
                    <li>Analogies and word patterns</li>
                    <li>Verbal logic and deduction</li>
                    <li>Time management for VR questions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="non-verbal-reasoning">
                <AccordionTrigger>Non-Verbal Reasoning (NVR)</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Figure matrices and sequences</li>
                    <li>Pattern recognition strategies</li>
                    <li>Shape manipulation and rotation</li>
                    <li>Figure analogies</li>
                    <li>Spatial visualization techniques</li>
                    <li>Abstract reasoning development</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quantitative-reasoning">
                <AccordionTrigger>Quantitative Reasoning (QR)</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Number series and patterns</li>
                    <li>Mathematical problem-solving</li>
                    <li>Data interpretation skills</li>
                    <li>Number analogies</li>
                    <li>Equation building</li>
                    <li>Mental calculation techniques</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="spatial-reasoning">
                <AccordionTrigger>Spatial Reasoning (SR)</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>3D visualization skills</li>
                    <li>Figure analysis and rotation</li>
                    <li>Spatial relationships</li>
                    <li>Block counting</li>
                    <li>Paper folding exercises</li>
                    <li>Mental manipulation of objects</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="test-strategy">
                <AccordionTrigger>Test-Taking Strategy</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Time management techniques</li>
                    <li>Question prioritization</li>
                    <li>Elimination strategies</li>
                    <li>Stress management</li>
                    <li>Multiple-choice tactics</li>
                    <li>Mock test experience</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* SECTION 5: PROGRAM STRUCTURE */}
        <section className="bg-gray-50 py-14" aria-labelledby="program-structure-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="program-structure-heading" className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Our CAT4 Preparation Program
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white border border-yellow-400 rounded-xl p-6">
                <div className="bg-yellow-400 text-navy-900 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">01</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Initial Assessment</h3>
                <p className="text-navy-700">Comprehensive diagnostic test to identify strengths and areas for improvement across all four reasoning batteries</p>
              </div>
              <div className="bg-white border border-yellow-400 rounded-xl p-6">
                <div className="bg-yellow-400 text-navy-900 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">02</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Targeted Training</h3>
                <p className="text-navy-700">Structured lessons focusing on specific question types, strategies, and cognitive skills development with regular practice</p>
              </div>
              <div className="bg-white border border-yellow-400 rounded-xl p-6">
                <div className="bg-yellow-400 text-navy-900 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">03</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Mock Testing &amp; Analysis</h3>
                <p className="text-navy-700">Timed practice tests under exam conditions with detailed performance analysis and personalized improvement plans</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHY CAT4 MATTERS */}
        <section className="bg-white py-14" aria-labelledby="why-cat4-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="why-cat4-heading" className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Why CAT4 Preparation Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-8">
                <Target className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">School Admissions</h3>
                <p className="text-navy-700">Many top schools in Dubai use CAT4 scores as part of their entrance assessment. Strong performance opens doors to prestigious educational opportunities.</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-8">
                <Lightbulb className="w-12 h-12 text-purple-600 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">Identify Potential</h3>
                <p className="text-navy-700">CAT4 reveals cognitive strengths and learning potential, helping parents and teachers understand how to best support each student&apos;s development.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-8">
                <TrendingUp className="w-12 h-12 text-green-600 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">Academic Planning</h3>
                <p className="text-navy-700">Results guide curriculum differentiation, identify gifted students, and help plan appropriate academic challenges and support.</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-8">
                <Brain className="w-12 h-12 text-orange-600 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">Cognitive Development</h3>
                <p className="text-navy-700">Preparation exercises strengthen overall thinking skills, improving academic performance across all subjects beyond just the test.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: TEACHING APPROACH */}
        <section className="bg-gray-50 py-14" aria-labelledby="teaching-approach-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="teaching-approach-heading" className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Our Teaching Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Users className="w-12 h-12 text-yellow-500 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Small Group Learning</h3>
                <p className="text-navy-700">Groups of 4-6 students matched by age and ability level for peer learning and personalized attention</p>
              </div>
              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <GraduationCap className="w-12 h-12 text-yellow-500 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Experienced Instructors</h3>
                <p className="text-navy-700">Specialized tutors trained in cognitive assessment preparation and child development</p>
              </div>
              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <Target className="w-12 h-12 text-yellow-500 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Structured Practice</h3>
                <p className="text-navy-700">Systematic progression through question types with increasing difficulty and timed exercises</p>
              </div>
              <div className="border border-gray-200 bg-white rounded-xl p-6 hover:shadow-lg transition">
                <TrendingUp className="w-12 h-12 text-yellow-500 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Progress Monitoring</h3>
                <p className="text-navy-700">Regular assessments with detailed reports tracking improvement across all four reasoning areas</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: WHY CHOOSE US */}
        <section className="bg-gradient-to-br from-navy-600 to-navy-700 py-14" aria-labelledby="why-choose-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="why-choose-heading" className="text-3xl font-bold text-white mb-10 text-center">
              Why Improve ME for CAT4 Preparation?
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white/90">Proven CAT4 preparation success with consistent score improvements</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white/90">All levels covered: A through F (ages 7-13+)</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white/90">Authentic question-type practice materials</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white/90">Personalized learning plans based on diagnostic assessment</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white/90">Regular mock tests under timed conditions</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white/90">Detailed performance analytics and progress tracking</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white/90">Flexible scheduling: weekday evenings and weekend sessions</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white/90">Conveniently located in Gold &amp; Diamond Park, Dubai</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-white py-14" aria-labelledby="faq-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="faq-heading" className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="faq-1">
                <div itemScope itemType="https://schema.org/Question">
                  <AccordionTrigger itemProp="name">What is the CAT4 test?</AccordionTrigger>
                  <AccordionContent itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <div itemProp="text">The CAT4 (Cognitive Abilities Test) is a standardized assessment that measures students&apos; reasoning abilities across four areas: verbal, non-verbal, quantitative, and spatial reasoning. It helps identify cognitive strengths and potential for academic success.</div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <div itemScope itemType="https://schema.org/Question">
                  <AccordionTrigger itemProp="name">What ages is CAT4 preparation suitable for?</AccordionTrigger>
                  <AccordionContent itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <div itemProp="text">Our CAT4 preparation is designed for students aged 7-13, covering Levels A through F. Each level corresponds to specific age groups and school years.</div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <div itemScope itemType="https://schema.org/Question">
                  <AccordionTrigger itemProp="name">How long is the CAT4 preparation program?</AccordionTrigger>
                  <AccordionContent itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <div itemProp="text">Programs typically run for 8-12 weeks with 2 sessions per week. We also offer intensive courses closer to exam dates and ongoing cognitive skills development programs.</div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <div itemScope itemType="https://schema.org/Question">
                  <AccordionTrigger itemProp="name">Do you provide practice tests?</AccordionTrigger>
                  <AccordionContent itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <div itemProp="text">Yes, we provide authentic-style practice tests, timed assessments, and comprehensive performance analysis to track progress and identify areas for improvement.</div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <div itemScope itemType="https://schema.org/Question">
                  <AccordionTrigger itemProp="name">When should my child start CAT4 preparation?</AccordionTrigger>
                  <AccordionContent itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <div itemProp="text">We recommend starting 2-3 months before a scheduled assessment. However, earlier preparation helps build stronger cognitive skills that benefit overall academic performance.</div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <div itemScope itemType="https://schema.org/Question">
                  <AccordionTrigger itemProp="name">Is CAT4 preparation suitable for all students?</AccordionTrigger>
                  <AccordionContent itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <div itemProp="text">Yes! Whether your child is taking CAT4 for school placement, gifted program qualification, or general cognitive development, our program adapts to individual needs and abilities.</div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* SECTION 10: RELATED PROGRAMS */}
        <section className="bg-gray-50 py-14" aria-labelledby="related-programs-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="related-programs-heading" className="text-3xl font-bold text-navy-900 mb-10 text-center">
              Explore Related Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                href="/courses/entrance-prep"
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition group"
                aria-label="Learn more about 7+ and 11+ entrance exam preparation"
              >
                <Target className="w-10 h-10 text-navy-600 mb-3" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">7+/11+ Entrance Prep</h3>
                <p className="text-navy-600 text-sm mb-4">Comprehensive school entrance exam preparation</p>
                <span className="text-yellow-600 font-medium group-hover:text-yellow-700">Learn More →</span>
              </Link>
              <Link
                href="/courses/chess"
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition group"
                aria-label="Learn more about Chess Mastery program"
              >
                <Puzzle className="w-10 h-10 text-navy-600 mb-3" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Chess Mastery</h3>
                <p className="text-navy-600 text-sm mb-4">Strategic thinking and cognitive development</p>
                <span className="text-yellow-600 font-medium group-hover:text-yellow-700">Learn More →</span>
              </Link>
              <Link
                href="/courses/mathematics"
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition group"
                aria-label="Learn more about Mathematics tutoring"
              >
                <Calculator className="w-10 h-10 text-navy-600 mb-3" aria-hidden="true" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Mathematics Tutoring</h3>
                <p className="text-navy-600 text-sm mb-4">Essential numeracy and problem-solving skills</p>
                <span className="text-yellow-600 font-medium group-hover:text-yellow-700">Learn More →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 11: FINAL CTA */}
        <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 py-14" aria-labelledby="final-cta-heading">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 id="final-cta-heading" className="text-3xl font-bold text-navy-900 mb-4">
              Ready to Boost Your Child&apos;s Cognitive Abilities?
            </h2>
            <p className="text-navy-800 mb-8 text-lg">
              Book a free diagnostic assessment and discover your child&apos;s cognitive strengths
            </p>
            <Link
              href="/contact#assessment"
              className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-navy-800 transition"
              aria-label="Book a free CAT4 diagnostic assessment"
            >
              Book Free Assessment
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
