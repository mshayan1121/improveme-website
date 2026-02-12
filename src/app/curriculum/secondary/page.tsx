import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, BookOpen, GraduationCap, Award } from "lucide-react";

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
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <BookOpen className="w-10 h-10 text-indigo-600 mb-4" />
              <h2 className="text-xl font-bold text-navy-900 mb-2">Key Stage 3</h2>
              <p className="text-navy-700 text-sm">
                Ages 11-14. Year 7-9. UK National Curriculum preparing for GCSE.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <GraduationCap className="w-10 h-10 text-green-600 mb-4" />
              <h2 className="text-xl font-bold text-navy-900 mb-2">GCSE</h2>
              <p className="text-navy-700 text-sm">
                Ages 14-16. AQA, Edexcel, OCR. Foundation to Higher tier.
              </p>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <GraduationCap className="w-10 h-10 text-teal-600 mb-4" />
              <h2 className="text-xl font-bold text-navy-900 mb-2">IGCSE</h2>
              <p className="text-navy-700 text-sm">
                Ages 14-16. Cambridge, Edexcel. International curriculum.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <Award className="w-10 h-10 text-purple-600 mb-4" />
              <h2 className="text-xl font-bold text-navy-900 mb-2">A-Level & IB</h2>
              <p className="text-navy-700 text-sm">
                Ages 16-18. University preparation. All exam boards.
              </p>
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
