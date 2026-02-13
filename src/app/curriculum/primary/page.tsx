import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, BookOpen, GraduationCap, Calculator, Microscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Primary Curriculum | EYFS, KS1, KS2 | Improve ME Institute Dubai",
  description:
    "Primary curriculum tutoring in Dubai. EYFS, Key Stage 1, and Key Stage 2. Maths, English, Science aligned to UK National Curriculum.",
  keywords:
    "primary curriculum Dubai, EYFS Dubai, KS1 KS2 tutoring, primary school Dubai, Improve ME Institute",
};

export default function PrimaryCurriculumPage() {
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
            <li className="text-navy-900 font-medium">Primary Curriculum</li>
          </ol>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 chevron-pattern pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Primary Curriculum
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
            EYFS, Key Stage 1, and Key Stage 2. Building strong foundations in
            Mathematics, English, and Science.
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
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
              <h2 className="text-xl font-bold text-navy-900 mb-2">EYFS</h2>
              <p className="text-navy-700 text-sm">
                Ages 3-5. Early Years Foundation Stage – building curiosity and
                readiness for learning.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
              <h2 className="text-xl font-bold text-navy-900 mb-2">
                Key Stage 1
              </h2>
              <p className="text-navy-700 text-sm">
                Ages 5-7. Year 1-2. Core literacy, numeracy, and scientific
                thinking.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
              <h2 className="text-xl font-bold text-navy-900 mb-2">
                Key Stage 2
              </h2>
              <p className="text-navy-700 text-sm">
                Ages 7-11. Year 3-6. Preparing for secondary school with strong
                foundations.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
              Primary Subjects by Key Stage
            </h2>
            <p className="text-navy-600 text-center mb-10">
              Choose a key stage and subject to see what we cover and how we build strong foundations.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">EYFS (Ages 3-5)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/curriculum/primary/eyfs/mathematics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Mathematics</h4>
                      <p className="text-sm text-navy-600">Number sense and early maths confidence.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/primary/eyfs/english" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">English</h4>
                      <p className="text-sm text-navy-600">Early literacy and communication.</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Key Stage 1 (Ages 5-7)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link href="/curriculum/primary/ks1/mathematics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Mathematics</h4>
                      <p className="text-sm text-navy-600">Core numeracy and problem-solving.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/primary/ks1/english" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">English</h4>
                      <p className="text-sm text-navy-600">Reading, writing, and speaking.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/primary/ks1/science" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Microscope className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Science</h4>
                      <p className="text-sm text-navy-600">Scientific thinking and discovery.</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Key Stage 2 (Ages 7-11)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link href="/curriculum/primary/ks2/mathematics" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Calculator className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Mathematics</h4>
                      <p className="text-sm text-navy-600">Number sense, problem-solving, and fluency.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/primary/ks2/english" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <BookOpen className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">English</h4>
                      <p className="text-sm text-navy-600">Comprehension, writing, and vocabulary.</p>
                    </div>
                  </Link>
                  <Link href="/curriculum/primary/ks2/science" className="block h-full">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all">
                      <Microscope className="w-10 h-10 text-navy-900 mb-3" />
                      <h4 className="text-lg font-bold text-navy-900">Science</h4>
                      <p className="text-sm text-navy-600">Biology, chemistry, and physics foundations.</p>
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
