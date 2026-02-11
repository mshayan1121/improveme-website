import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calculator,
  BookOpen,
  Microscope,
  Zap,
  FlaskConical,
  Leaf,
  Briefcase,
  TrendingUp,
  Brain,
  Target,
  Award,
  Crown,
  DollarSign,
  Cpu,
  Users,
  GraduationCap,
  BookCheck,
  Shield,
  ChevronRight,
  Palette,
  Star,
  ArrowRight,
} from 'lucide-react';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

export const metadata: Metadata = {
  title: 'Our Courses | Tutoring in Dubai | GCSE, IGCSE, A-Level, IB | Improve ME',
  description:
    'Browse all courses at Improve ME Institute Dubai. Mathematics, English, Sciences, Business, and more. GCSE, IGCSE, A-Level, IB exam preparation. Plus special programmes including CAT4, Chess, Financial Literacy.',
  keywords:
    'courses Dubai tutoring, GCSE subjects Dubai, A-Level tutoring, IB courses Dubai, exam preparation, special programs Dubai',
};

// Color mapping for hover states
const colorHoverMap: Record<string, string> = {
  blue: 'hover:border-blue-500',
  purple: 'hover:border-purple-500',
  green: 'hover:border-green-500',
  sky: 'hover:border-sky-500',
  emerald: 'hover:border-emerald-500',
  amber: 'hover:border-amber-500',
  teal: 'hover:border-teal-500',
  rose: 'hover:border-rose-500',
};

// Core Subjects Data
const coreSubjects = [
  {
    name: 'Mathematics',
    levels: 'EYFS to A-Level & IB',
    description: 'Number sense to calculus. Build confidence and master problem-solving.',
    href: '/courses/mathematics',
    icon: Calculator,
    color: 'blue',
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-500',
  },
  {
    name: 'English',
    levels: 'Primary to A-Level & IB',
    description: 'Reading, writing, literature. Develop confident communicators.',
    href: '/courses/english',
    icon: BookOpen,
    color: 'purple',
    iconColor: 'text-purple-500',
    borderColor: 'border-purple-500',
  },
  {
    name: 'Science (General)',
    levels: 'Primary & Key Stage 3',
    description: 'Explore biology, chemistry, and physics before specialization.',
    href: '/courses/science',
    icon: Microscope,
    color: 'green',
    iconColor: 'text-green-500',
    borderColor: 'border-green-500',
  },
  {
    name: 'Physics',
    levels: 'GCSE to A-Level & IB',
    description: 'Mechanics, electricity, waves. Clear explanations and exam prep.',
    href: '/courses/physics',
    icon: Zap,
    color: 'sky',
    iconColor: 'text-sky-500',
    borderColor: 'border-sky-500',
  },
  {
    name: 'Chemistry',
    levels: 'GCSE to A-Level & IB',
    description: 'Organic, inorganic, physical. Methodical and exam-focused.',
    href: '/courses/chemistry',
    icon: FlaskConical,
    color: 'purple',
    iconColor: 'text-purple-500',
    borderColor: 'border-purple-500',
  },
  {
    name: 'Biology',
    levels: 'GCSE to A-Level & IB',
    description: 'Cell biology to ecology. Comprehensive coverage and practical skills.',
    href: '/courses/biology',
    icon: Leaf,
    color: 'emerald',
    iconColor: 'text-emerald-500',
    borderColor: 'border-emerald-500',
  },
];

// Humanities & Business Data
const humanitiesBusiness = [
  {
    name: 'Business Studies',
    levels: 'GCSE to A-Level & IB',
    description: 'Marketing, finance, operations. Case studies and exam technique.',
    href: '/courses/business-studies',
    icon: Briefcase,
    color: 'amber',
    iconColor: 'text-amber-500',
    borderColor: 'border-amber-500',
  },
  {
    name: 'Economics',
    levels: 'GCSE to A-Level & IB',
    description: 'Micro and macro economics. Data analysis and evaluation skills.',
    href: '/courses/economics',
    icon: TrendingUp,
    color: 'teal',
    iconColor: 'text-teal-500',
    borderColor: 'border-teal-500',
  },
  {
    name: 'Psychology',
    levels: 'GCSE to A-Level & IB',
    description: 'Research methods, approaches, studies. Essay technique and analysis.',
    href: '/courses/psychology',
    icon: Brain,
    color: 'rose',
    iconColor: 'text-rose-500',
    borderColor: 'border-rose-500',
  },
];

// Special Programs Data
const specialPrograms = [
  {
    name: 'CAT4 Test Prep',
    age: 'Ages 7-13',
    description: 'Cognitive abilities training for school admissions',
    href: '/courses/cat-prep',
    icon: Target,
    badge: 'Popular',
  },
  {
    name: '7+/11+ Entrance Prep',
    age: 'Ages 6-11',
    description: 'Selective school entrance exam preparation',
    href: '/courses/entrance-prep',
    icon: Award,
  },
  {
    name: 'Chess Mastery',
    age: 'Ages 6+',
    description: 'Strategic thinking and problem-solving through chess',
    href: '/courses/chess',
    icon: Crown,
  },
  {
    name: 'Financial Literacy',
    age: 'Ages 8-16',
    description: 'Money management and real-world financial skills',
    href: '/courses/financial-literacy',
    icon: DollarSign,
  },
  {
    name: 'AI Literacy',
    age: 'Ages 10-16',
    description: 'Understanding AI and thinking critically about technology',
    href: '/courses/ai-literacy',
    icon: Cpu,
  },
];

// Benefits Data
const benefits = [
  {
    title: 'Small Groups',
    description: 'Maximum 6 students per class. Average 2-3 students. More attention, faster progress.',
    icon: Users,
  },
  {
    title: 'Subject Specialists',
    description: '40+ experienced tutors. Each specialist in their subject with proven track records.',
    icon: GraduationCap,
  },
  {
    title: 'Curriculum-Aligned',
    description: 'Every session matches what your child learns at school. All exam boards covered.',
    icon: BookCheck,
  },
  {
    title: 'Exam-Focused',
    description: 'We know what examiners expect. Structured preparation and proven exam technique.',
    icon: Target,
  },
  {
    title: 'Proven Results',
    description: '4.8-star rating, 206 reviews. Students consistently improve grades and confidence.',
    icon: TrendingUp,
  },
  {
    title: 'KHDA Approved',
    description: 'Officially licensed education provider meeting Dubai\'s quality standards.',
    icon: Shield,
  },
];

// Exam Boards
const examBoards = ['AQA', 'Edexcel (Pearson)', 'OCR', 'Cambridge International (IGCSE)', 'IB', 'WJEC', 'MYP'];

// Testimonials for Courses Page
const courseTestimonials = [
  {
    name: 'Veronica',
    role: 'Parent, Year 10',
    quote:
      'My son\'s confidence in maths has grown tremendously. He was moved up to the highest set at school and secured 2nd place in consecutive exams.',
    rating: 5,
  },
  {
    name: 'A.S.',
    role: 'Parent, Year 1 & FS2',
    quote:
      'The kids wouldn\'t stop asking, \'Mama, when are we going back to that cool place?\' My son\'s school noticed a big improvement in his maths.',
    rating: 5,
  },
  {
    name: 'Umika',
    role: 'Student, MYP Chemistry',
    quote:
      'I truly struggled in MYP Chemistry and was scoring low marks. After joining Improve ME, my grade went from a 3 to a 6 out of 7.',
    rating: 5,
  },
  {
    name: 'Imran',
    role: 'Student, Jumeirah College',
    quote:
      'Classes are very good and the teachers are really nice. I study Physics and Maths, and it has been improving my grades.',
    rating: 5,
  },
  {
    name: 'Ismaeel',
    role: 'Student, Year 8',
    quote:
      'I have been attending Improve ME for five years. Now in Year 8, I have excelled in most of my exams thanks to the dedicated teachers.',
    rating: 5,
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Courses at Improve ME Institute',
  description: 'Tutoring courses from EYFS to A-Level and IB',
  itemListElement: [
    ...coreSubjects.map((subject, index) => ({
      '@type': 'Course',
      position: index + 1,
      name: subject.name,
      description: subject.description,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Improve ME Institute',
      },
      url: `https://improvemeinstitute.com${subject.href}`,
    })),
    ...humanitiesBusiness.map((subject, index) => ({
      '@type': 'Course',
      position: coreSubjects.length + index + 1,
      name: subject.name,
      description: subject.description,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Improve ME Institute',
      },
      url: `https://improvemeinstitute.com${subject.href}`,
    })),
    ...specialPrograms.map((program, index) => ({
      '@type': 'Course',
      position: coreSubjects.length + humanitiesBusiness.length + index + 1,
      name: program.name,
      description: program.description,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Improve ME Institute',
      },
      url: `https://improvemeinstitute.com${program.href}`,
    })),
  ],
};

export default function CoursesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-navy-600" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item" className="hover:text-navy-900">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-navy-900 font-semibold">
                Our Courses
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative bg-gradient-to-br from-navy-600 to-navy-800 chevron-pattern py-20 md:py-24">
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Courses</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl">
            Comprehensive tutoring from ages 3–18 across all major subjects. Small groups, proven results, and exam-focused preparation.
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-3xl">
            We offer structured tutoring aligned to UK curriculum frameworks — EYFS, Key Stages 1-3, GCSE, IGCSE, A-Level, and IB. Every subject is taught by specialist tutors in small groups of 6 or fewer students.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white font-semibold">
              12+ Subjects
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white font-semibold">
              All Exam Boards
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white font-semibold">
              Max 6 per Class
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FILTER/NAVIGATION TABS (Optional - Sticky) */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            <a
              href="#core-subjects"
              className="px-6 py-4 text-navy-700 border-b-2 border-transparent hover:text-yellow-600 whitespace-nowrap transition-colors"
            >
              Core Subjects
            </a>
            <a
              href="#humanities-business"
              className="px-6 py-4 text-navy-700 border-b-2 border-transparent hover:text-yellow-600 whitespace-nowrap transition-colors"
            >
              Humanities & Business
            </a>
            <a
              href="#special-programs"
              className="px-6 py-4 text-navy-700 border-b-2 border-transparent hover:text-yellow-600 whitespace-nowrap transition-colors"
            >
              Special Programs
            </a>
            <a
              href="#curriculum-overview"
              className="px-6 py-4 text-navy-700 border-b-2 border-transparent hover:text-yellow-600 whitespace-nowrap transition-colors"
            >
              View by Level
            </a>
          </div>
        </div>
      </nav>

      {/* SECTION 3: CORE SUBJECTS */}
      <section id="core-subjects" className="bg-white py-14 md:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Core Subjects</h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              Foundation subjects from primary through to A-Level and IB
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {coreSubjects.map((subject) => {
              const Icon = subject.icon;
              return (
                <Link
                  key={subject.name}
                  href={subject.href}
                  className={`group bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all flex flex-col ${colorHoverMap[subject.color] || 'hover:border-yellow-500'}`}
                >
                  <Icon className={`w-12 h-12 ${subject.iconColor} mb-4 mx-auto`} aria-hidden="true" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2 text-center">{subject.name}</h3>
                  <p className="text-sm text-navy-600 mb-2 text-center">{subject.levels}</p>
                  <p className="text-base text-navy-700 mb-4 flex-1">{subject.description}</p>
                  <div className="flex items-center justify-center text-navy-900 group-hover:text-yellow-600 transition-colors">
                    <span className="text-sm font-semibold mr-2">Learn more</span>
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: HUMANITIES & BUSINESS */}
      <section id="humanities-business" className="bg-gray-50 py-14 md:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Humanities & Business</h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              Develop critical thinking, analysis, and commercial awareness
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {humanitiesBusiness.map((subject) => {
              const Icon = subject.icon;
              return (
                <Link
                  key={subject.name}
                  href={subject.href}
                  className={`group bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all flex flex-col ${colorHoverMap[subject.color] || 'hover:border-yellow-500'}`}
                >
                  <Icon className={`w-12 h-12 ${subject.iconColor} mb-4 mx-auto`} aria-hidden="true" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2 text-center">{subject.name}</h3>
                  <p className="text-sm text-navy-600 mb-2 text-center">{subject.levels}</p>
                  <p className="text-base text-navy-700 mb-4 flex-1">{subject.description}</p>
                  <div className="flex items-center justify-center text-navy-900 group-hover:text-yellow-600 transition-colors">
                    <span className="text-sm font-semibold mr-2">Learn more</span>
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: SPECIAL PROGRAMS */}
      <section id="special-programs" className="bg-white py-14 md:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Special Programs</h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              Future-ready skills beyond the classroom
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {specialPrograms.map((program) => {
              const Icon = program.icon;
              return (
                <Link
                  key={program.name}
                  href={program.href}
                  className="group bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-yellow-500 hover:shadow-lg transition-all flex flex-col relative"
                >
                  {program.badge && (
                    <span className="absolute top-2 right-2 bg-yellow-500 text-navy-900 text-xs font-semibold px-2 py-1 rounded-full">
                      {program.badge}
                    </span>
                  )}
                  <Icon className="w-10 h-10 text-yellow-500 mb-3 mx-auto" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-navy-900 mb-2 text-center">{program.name}</h3>
                  <p className="text-sm text-navy-600 mb-2 text-center">{program.age}</p>
                  <p className="text-sm text-navy-700 flex-1">{program.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: CURRICULUM OVERVIEW CARDS */}
      <section id="curriculum-overview" className="bg-gradient-to-br from-navy-600 to-navy-700 py-14 md:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Or Browse by Curriculum Level</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Find courses organized by your child&apos;s age and key stage
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Primary Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <Palette className="w-16 h-16 text-yellow-400 mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white mb-2">Primary Courses</h3>
              <p className="text-white/90 mb-4">Ages 3-11</p>
              <p className="text-white/80 mb-4">
                <strong className="text-white">Stages:</strong> EYFS, Key Stage 1, Key Stage 2
              </p>
              <p className="text-white/80 mb-4">
                <strong className="text-white">Subjects:</strong> Mathematics, English, Science
              </p>
              <p className="text-white/80 mb-6">
                <strong className="text-white">Programs:</strong> 7+/11+ Entrance Prep
              </p>
              <Link
                href="/curriculum/primary"
                className="inline-flex items-center gap-2 bg-yellow-500 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                View Primary Curriculum
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>

            {/* Secondary Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <GraduationCap className="w-16 h-16 text-yellow-400 mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white mb-2">Secondary Courses</h3>
              <p className="text-white/90 mb-4">Ages 11-18</p>
              <p className="text-white/80 mb-4">
                <strong className="text-white">Stages:</strong> Key Stage 3, GCSE/IGCSE, A-Level/IB
              </p>
              <p className="text-white/80 mb-4">
                <strong className="text-white">Subjects:</strong> All subjects available
              </p>
              <p className="text-white/80 mb-6">
                <strong className="text-white">Exam boards:</strong> AQA, Edexcel, OCR, Cambridge, IB
              </p>
              <Link
                href="/curriculum/secondary"
                className="inline-flex items-center gap-2 bg-yellow-500 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                View Secondary Curriculum
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE OUR COURSES */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Why Choose Improve ME Courses?</h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">What makes our tutoring different</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white border-l-4 border-yellow-500 p-6">
                  <div className="flex items-start gap-4">
                    <Icon className="w-10 h-10 text-yellow-500 shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">{benefit.title}</h3>
                      <p className="text-navy-700">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS CAROUSEL */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">
            What Parents & Students Say
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* SECTION 9: EXAM BOARDS COVERED */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">All Major Exam Boards Covered</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
            {examBoards.map((board) => (
              <div
                key={board}
                className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-lg text-navy-700 font-semibold hover:border-yellow-500 hover:text-yellow-600 transition-colors"
              >
                {board}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Ready to Start Learning?</h2>
          <p className="text-lg md:text-xl text-navy-800 mb-8">
            Book your free assessment today. We&apos;ll evaluate your child&apos;s current level and recommend the right courses and tutor to help them succeed.
          </p>

          {/* Stats/Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-navy-900">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Free assessment, no obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Response within 2 hours (working days)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Trusted by 30+ schools across Dubai</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              href="/contact#assessment"
              className="inline-flex items-center justify-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-navy-800 transition text-lg"
            >
              Book Free Assessment
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-xl font-semibold hover:bg-navy-900/5 transition text-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust Line */}
          <p className="text-sm text-navy-700">
            Trusted by families from Dubai College, Repton, JESS, Kings, and 30+ schools
          </p>
        </div>
      </section>
    </>
  );
}
