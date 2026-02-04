'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ChevronRight,
  GraduationCap,
  Award,
  Trophy,
  Calculator,
  BookText,
  Zap,
  FlaskConical,
  Leaf,
  Briefcase,
  TrendingUp,
  Brain,
  Users,
  BookOpen,
  BarChart3,
} from 'lucide-react';

const timelineSteps = [
  {
    label: 'Years 7-9',
    sub: 'Foundation',
    desc: 'Core subject building and study skills for exam readiness.',
    Icon: GraduationCap,
    color: 'rgb(var(--navy-600))',
    bgClass: 'bg-navy-600',
  },
  {
    label: 'IGCSE/GCSE',
    sub: 'Certification',
    desc: 'Structured revision and exam technique across all subjects.',
    Icon: Award,
    color: 'rgb(var(--yellow-500))',
    bgClass: 'bg-yellow-500',
  },
  {
    label: 'A-Levels/IB',
    sub: 'Excellence',
    desc: 'Specialist support for university preparation and top grades.',
    Icon: Trophy,
    color: 'rgb(var(--yellow-500))',
    bgClass: 'bg-yellow-500',
  },
];

const subjectCards = [
  { Icon: Calculator, name: 'Mathematics', color: 'rgb(var(--navy-600))', gradient: 'from-navy-600/90 to-navy-700' },
  { Icon: BookText, name: 'English', color: 'rgb(var(--yellow-500))', gradient: 'from-yellow-400/90 to-yellow-500' },
  { Icon: Zap, name: 'Physics', color: '#2563eb', gradient: 'from-blue-500/90 to-blue-600' },
  { Icon: FlaskConical, name: 'Chemistry', color: '#7c3aed', gradient: 'from-purple-500/90 to-purple-600' },
  { Icon: Leaf, name: 'Biology', color: '#16a34a', gradient: 'from-green-500/90 to-green-600' },
  { Icon: Briefcase, name: 'Business', color: '#ea580c', gradient: 'from-orange-500/90 to-orange-600' },
  { Icon: TrendingUp, name: 'Economics', color: '#0d9488', gradient: 'from-teal-500/90 to-teal-600' },
  { Icon: Brain, name: 'Psychology', color: '#4f46e5', gradient: 'from-indigo-500/90 to-indigo-600' },
];

export default function SecondarySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-10 md:py-14"
    >
      <div className="section-container">
        {/* Reverse Layout - Top Row */}
        <div className="grid lg:grid-cols-5 gap-4 lg:gap-5 mb-6">
          {/* Left - Timeline (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <div className="h-full min-h-[360px] rounded-2xl bg-gray-50/80 border border-gray-200 p-4 md:p-5 flex flex-col">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Your roadmap
              </h3>
              <div className="relative flex flex-col gap-0">
                {/* Connecting line - gradient */}
                <div
                  className="absolute left-5 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-navy-600 via-yellow-500 to-yellow-600 opacity-80"
                  aria-hidden
                />
                {timelineSteps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 * i }}
                    className="relative flex gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="relative z-10 shrink-0">
                      <button
                        type="button"
                        onClick={() => setExpandedStage(expandedStage === i ? null : i)}
                        className={`w-10 h-10 rounded-full ${step.bgClass} border-2 border-white shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-600`}
                        style={{ color: 'white' }}
                        aria-expanded={expandedStage === i}
                        aria-label={`${step.label} - ${step.sub}`}
                      >
                        <step.Icon className="w-5 h-5" strokeWidth={2} />
                      </button>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-navy-900">{step.label}</p>
                      <p className="text-sm font-medium text-navy-600">{step.sub}</p>
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedStage === i ? 'auto' : 0,
                          opacity: expandedStage === i ? 1 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-navy-600 mt-2 pt-2 border-t border-gray-200">
                          {step.desc}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Content (60%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Secondary <span className="gradient-text-warmth">(Age 11-18)</span>
            </h2>
            <div className="space-y-4 mb-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy-600/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-navy-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Foundation (Years 7-9)</h4>
                  <p className="text-navy-600 text-sm">
                    Core subject building and study skills to prepare for exam years.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-yellow-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Exams (GCSE / IGCSE)</h4>
                  <p className="text-navy-600 text-sm">
                    Curriculum-aligned tutoring and exam technique for certification.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-200/80">
              <p className="font-medium text-navy-900 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-navy-600" />
                What We Offer
              </p>
              <ul className="text-navy-600 space-y-1.5 text-sm flex flex-wrap gap-x-4 gap-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-600" />
                  Small groups & one-to-one
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-600" />
                  Curriculum-aligned tutoring
                </li>
                <li className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-navy-600 shrink-0" />
                  Progress tracking & reports
                </li>
              </ul>
            </div>
            <Link
              href="/courses/secondary"
              className="btn btn-primary px-6 py-3 inline-flex items-center gap-2 w-fit group"
            >
              Explore Secondary Courses
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom - 8 Subject Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {subjectCards.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
              className="group"
            >
              <div className={`relative rounded-2xl bg-gradient-to-br ${subject.gradient} p-5 h-full flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-gray-300/50`}>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-10 flex items-center justify-center text-white mb-3 transition-transform duration-300 group-hover:scale-110">
                    <subject.Icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-white text-base mb-1">
                    {subject.name}
                  </h3>
                  <p className="text-white/90 text-sm flex-1">
                    Specialist support for exam success.
                  </p>
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 rounded-2xl" aria-hidden />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
