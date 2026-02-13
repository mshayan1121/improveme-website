import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Award,
  Calculator,
  Microscope,
  Zap,
  FlaskConical,
  Leaf,
  Briefcase,
  TrendingUp,
  Brain,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Secondary Curriculum | KS3, GCSE, A-Level, IB | Improve ME Institute Dubai",
  description:
    "Secondary curriculum tutoring in Dubai. Key Stage 3, GCSE, IGCSE, A-Level, and IB. All exam boards. Specialist tutors.",
  keywords:
    "secondary curriculum Dubai, GCSE Dubai, IGCSE A-Level IB, secondary school tutoring Dubai, Improve ME Institute",
};

export default function SecondaryCurriculumPage() {
  return (
    <article className="min-h-screen">
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-navy-600 hover:text-navy-900">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/courses" className="text-navy-600 hover:text-navy-900">
                Courses
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-navy-900 font-medium">Secondary Curriculum</li>
          </ol>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-700 chevron-pattern pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Secondary Curriculum
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
            Key Stage 3, GCSE, IGCSE, A-Level, and IB. All major exam boards.
            Specialist tutors for every subject.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Courses
          </Link>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/curriculum/secondary/ks3" className="block h-full">
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 h-full hover:shadow-lg hover:scale-105 transition-all">
                <BookOpen className="w-10 h-10 text-indigo-600 mb-4" />
                <h2 className="text-xl font-bold text-navy-900 mb-2">Key Stage 3</h2>
                <p className="text-navy-700 text-sm">
                  Ages 11-14. Year 7-9. UK National Curriculum preparing for GCSE.
                </p>
              </div>
            </Link>
            <Link href="/curriculum/secondary/gcse" className="block h-full">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 h-full hover:shadow-lg hover:scale-105 transition-all">
                <GraduationCap className="w-10 h-10 text-green-600 mb-4" />
                <h2 className="text-xl font-bold text-navy-900 mb-2">GCSE</h2>
                <p className="text-navy-700 text-sm">
                  Ages 14-16. AQA, Edexcel, OCR. Foundation to Higher tier.
                </p>
              </div>
            </Link>
            <Link href="/curriculum/secondary/igcse" className="block h-full">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 h-full hover:shadow-lg hover:scale-105 transition-all">
                <GraduationCap className="w-10 h-10 text-teal-600 mb-4" />
                <h2 className="text-xl font-bold text-navy-900 mb-2">IGCSE</h2>
                <p className="text-navy-700 text-sm">
                  Ages 14-16. Cambridge, Edexcel. International curriculum.
                </p>
              </div>
            </Link>
            <Link href="/curriculum/secondary/a-level" className="block h-full">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 h-full hover:shadow-lg hover:scale-105 transition-all">
                <Award className="w-10 h-10 text-purple-600 mb-4" />
                <h2 className="text-xl font-bold text-navy-900 mb-2">A-Level</h2>
                <p className="text-navy-700 text-sm">
                  Ages 16-18. University preparation. All exam boards.
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
              Explore Secondary Qualifications
            </h2>
            <p className="text-navy-600 text-center mb-10">
              Choose a qualification and subject to see what we cover and how we prepare students for assessments and exams.
            </p>

            <div className="space-y-10">
              {/* Key Stage 3 */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Key Stage 3 (Ages 11-14)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link href="/curriculum/secondary/ks3/mathematics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Mathematics</h4>
                      <p className="text-sm text-navy-600">Core skills and problem-solving foundations.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/ks3/english" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">English</h4>
                      <p className="text-sm text-navy-600">Reading, writing, and analysis skills.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/ks3/science" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Microscope className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Science</h4>
                      <p className="text-sm text-navy-600">Biology, chemistry, and physics foundations.</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* GCSE */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">GCSE (Ages 14-16)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link href="/curriculum/secondary/gcse/mathematics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Mathematics</h4>
                      <p className="text-sm text-navy-600">Foundation to Higher tier support.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/gcse/english-language" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">English Language</h4>
                      <p className="text-sm text-navy-600">Creative writing and analysis.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/gcse/physics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Zap className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Physics</h4>
                      <p className="text-sm text-navy-600">Forces, energy, and waves.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/gcse/chemistry" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <FlaskConical className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Chemistry</h4>
                      <p className="text-sm text-navy-600">Atomic structure and reactions.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/gcse/biology" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Leaf className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Biology</h4>
                      <p className="text-sm text-navy-600">Cells, genetics, and ecology.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/gcse/business-studies" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Briefcase className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Business Studies</h4>
                      <p className="text-sm text-navy-600">Marketing, finance, and operations.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/gcse/economics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <TrendingUp className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Economics</h4>
                      <p className="text-sm text-navy-600">Micro and macroeconomics.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/gcse/psychology" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Brain className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Psychology</h4>
                      <p className="text-sm text-navy-600">Core approaches and applications.</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* IGCSE */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">IGCSE (Ages 14-16)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link href="/curriculum/secondary/igcse/mathematics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Mathematics</h4>
                      <p className="text-sm text-navy-600">International curriculum support.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/igcse/english-language" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">English Language</h4>
                      <p className="text-sm text-navy-600">Cambridge and Edexcel pathways.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/igcse/physics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Zap className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Physics</h4>
                      <p className="text-sm text-navy-600">Forces, energy, and waves.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/igcse/chemistry" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <FlaskConical className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Chemistry</h4>
                      <p className="text-sm text-navy-600">Atomic structure and reactions.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/igcse/biology" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Leaf className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Biology</h4>
                      <p className="text-sm text-navy-600">Cells, genetics, and ecology.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/igcse/business-studies" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Briefcase className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Business Studies</h4>
                      <p className="text-sm text-navy-600">Marketing, finance, and operations.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/igcse/economics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <TrendingUp className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Economics</h4>
                      <p className="text-sm text-navy-600">Micro and macroeconomics.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/igcse/psychology" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Brain className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Psychology</h4>
                      <p className="text-sm text-navy-600">Core approaches and applications.</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* A-Level */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">A-Level (Ages 16-18)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link href="/curriculum/secondary/a-level/mathematics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Mathematics</h4>
                      <p className="text-sm text-navy-600">Pure, statistics, and mechanics.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/a-level/english-literature" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">English Literature</h4>
                      <p className="text-sm text-navy-600">Set texts and critical theory.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/a-level/physics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Zap className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Physics</h4>
                      <p className="text-sm text-navy-600">Particle physics and fields.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/a-level/chemistry" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <FlaskConical className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Chemistry</h4>
                      <p className="text-sm text-navy-600">Organic synthesis and spectroscopy.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/a-level/biology" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Leaf className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Biology</h4>
                      <p className="text-sm text-navy-600">Genetics and ecosystems.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/a-level/business" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Briefcase className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Business</h4>
                      <p className="text-sm text-navy-600">Marketing, finance, and strategy.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/a-level/economics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <TrendingUp className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Economics</h4>
                      <p className="text-sm text-navy-600">Micro and macroeconomics.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/a-level/psychology" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Brain className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Psychology</h4>
                      <p className="text-sm text-navy-600">Core approaches and applications.</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* IB (DP) */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">IB Diploma Programme (Ages 16-18)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link href="/curriculum/secondary/ib/mathematics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Mathematics</h4>
                      <p className="text-sm text-navy-600">AA/AI - SL & HL support.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/ib/english" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">English</h4>
                      <p className="text-sm text-navy-600">Lang & Lit - SL & HL.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/ib/physics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Zap className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Physics</h4>
                      <p className="text-sm text-navy-600">SL & HL with IA support.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/ib/chemistry" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <FlaskConical className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Chemistry</h4>
                      <p className="text-sm text-navy-600">SL & HL with IA support.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/ib/biology" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Leaf className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Biology</h4>
                      <p className="text-sm text-navy-600">SL & HL with IA support.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/ib/business-management" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Briefcase className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Business Management</h4>
                      <p className="text-sm text-navy-600">SL & HL with IA support.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/ib/economics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <TrendingUp className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Economics</h4>
                      <p className="text-sm text-navy-600">SL & HL with IA support.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/ib/psychology" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Brain className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Psychology</h4>
                      <p className="text-sm text-navy-600">SL & HL with IA support.</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* MYP */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">MYP (Ages 11-16)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link href="/curriculum/secondary/myp/mathematics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Mathematics</h4>
                      <p className="text-sm text-navy-600">Inquiry-based learning.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/myp/english" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">English</h4>
                      <p className="text-sm text-navy-600">Reading, writing, and analysis.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/myp/sciences" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Microscope className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Sciences</h4>
                      <p className="text-sm text-navy-600">Biology, chemistry, and physics.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/secondary/myp/individuals-societies" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Users className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Individuals & Societies</h4>
                      <p className="text-sm text-navy-600">History, geography, and civics.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact#assessment"
              className="inline-flex items-center gap-2 bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Book Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
