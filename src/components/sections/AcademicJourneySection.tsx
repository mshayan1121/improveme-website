'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Calculator,
  BookOpen,
  Atom,
  ArrowRight,
  GraduationCap,
  Trophy,
  BookText,
  Zap,
  FlaskConical,
  Leaf,
  Briefcase,
  TrendingUp,
  Brain,
  Target,
  Crown,
  Wallet,
  Cpu,
} from 'lucide-react';

/* Two main stages: Primary (3–11), Secondary (11–18) */
const stages = [
  {
    id: 'primary',
    label: 'Primary',
    range: 'Ages 3–11',
    sub: 'Building the Foundation',
    description: 'Strong foundations in Maths, English, and Science across EYFS, Key Stage 1, and Key Stage 2. Each session is matched to your child\'s year group and school curriculum. 7+ and 11+ entrance prep available.',
    Icon: GraduationCap,
    nodeClass: 'bg-navy-600',
    pills: null as string[] | null,
  },
  {
    id: 'secondary',
    label: 'Secondary',
    range: 'Ages 11–18',
    sub: null,
    description: 'Key Stage 3 to A-Level and IB. Every session aligns with your child\'s exam board and school timetable. Our tutors know what examiners expect — and teach accordingly.',
    Icon: Trophy,
    nodeClass: 'bg-navy-600',
    pills: ['Years 7–9 (KS3)', 'GCSE/IGCSE (Ages 14-16)', 'A-Levels/IB (Ages 16-18)'],
  },
];

/* Subject color scheme: Math=dark blue, English=gold/orange, Science/Biology=green, Physics=light blue, Chemistry/Psychology=purple, Economics/Business=teal or burnt orange */
const primarySubjects = [
  { Icon: Calculator, name: 'Mathematics', description: 'Number & problem-solving', bgClass: 'from-navy-600 to-navy-700', href: '/courses/mathematics' },
  { Icon: BookOpen, name: 'English Language', description: 'Reading, writing & comprehension', bgClass: 'from-amber-500 to-amber-600', href: '/courses/english' },
  { Icon: Atom, name: 'Science', description: 'Natural world & scientific enquiry', bgClass: 'from-green-600 to-green-700', href: '/courses/science' },
];

/* Secondary: 8 subjects with unique descriptions, 4x2 grid */
const secondarySubjects = [
  { Icon: Calculator, name: 'Mathematics', description: 'Algebra to calculus', gradient: 'from-navy-600 to-navy-700' },
  { Icon: BookText, name: 'English', description: 'Essay technique & analysis', gradient: 'from-amber-500 to-amber-600' },
  { Icon: Zap, name: 'Physics', description: 'Mechanics, electricity & waves', gradient: 'from-sky-400 to-blue-500' },
  { Icon: FlaskConical, name: 'Chemistry', description: 'Organic, inorganic & physical', gradient: 'from-purple-500 to-purple-600' },
  { Icon: Leaf, name: 'Biology', description: 'Cell biology to ecology', gradient: 'from-green-500 to-green-600' },
  { Icon: Briefcase, name: 'Business', description: 'Case studies & exam technique', gradient: 'from-amber-600 to-amber-700' },
  { Icon: TrendingUp, name: 'Economics', description: 'Micro, macro & data analysis', gradient: 'from-teal-500 to-teal-600' },
  { Icon: Brain, name: 'Psychology', description: 'Research methods & approaches', gradient: 'from-purple-500 to-purple-600' },
];

/* Enrichment: 4 programs, small cards/pills with icons, dark blue text */
const enrichmentPrograms = [
  { Icon: Target, name: 'CAT Prep', description: 'Preparation for CAT4 cognitive ability tests (Ages 7–13)', href: '/courses/cat-prep' },
  { Icon: Crown, name: 'Chess Mastery', description: 'Developing logic, strategy, and focus', href: '/enrichment/chess' },
  { Icon: Wallet, name: 'Financial Literacy', description: 'Practical money skills and economic awareness', href: '/enrichment/financial-literacy' },
  { Icon: Cpu, name: 'AI Literacy', description: 'Understanding AI tools and thinking critically about technology', href: '/enrichment/ai-literacy' },
];

export default function AcademicJourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="academic-journey"
      ref={ref}
      className="relative overflow-hidden bg-gray-50 noise-texture"
    >
      <div className="section-container">
        {/* Section title */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4 leading-tight"
          >
            The Academic Journey:{' '}
            <span className="gradient-text-warmth sm:whitespace-nowrap">From Foundation to Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-navy-700 text-lg leading-relaxed"
          >
            See how we support your child at every stage — from early years through to university-level exams.
          </motion.p>
        </div>

        {/* Primary + Secondary rows */}
        <div className="relative">
          {/* Row 1: Primary (Ages 3-11) - 3 cards */}
          <StageRow
            stage={stages[0]}
            ctaHref="/curriculum/primary"
            ctaText="View Primary Curriculum"
            isInView={isInView}
            delay={0.15}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {primarySubjects.map((s, i) => (
                  <SmallSubjectCard key={s.name} subject={s} index={i} variant="primary" />
                ))}
              </div>
            </div>
          </StageRow>

          {/* Row 2: Secondary (Ages 11-18) - pills + 8 cards in 4x2 grid */}
          <StageRow
            stage={stages[1]}
            ctaHref="/curriculum/secondary"
            ctaText="View Secondary Curriculum"
            isInView={isInView}
            delay={0.25}
          >
            <div className="space-y-4">
              {stages[1].pills && stages[1].pills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {stages[1].pills.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-navy-100 text-navy-700 border border-navy-200"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {secondarySubjects.map((s, i) => (
                  <SmallSubjectCard key={s.name} subject={s} index={i} variant="gradient" />
                ))}
              </div>
            </div>
          </StageRow>
        </div>

        {/* Enrichment row: horizontal full-width bar, no spine - bonus layer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-12 md:mt-16 rounded-2xl overflow-hidden"
          style={{ backgroundColor: 'rgb(251 191 36 / 0.12)' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 py-12 md:py-16 px-6 sm:px-8 lg:px-10">
            {/* Left: title + subtitle */}
            <div className="lg:w-[28%] lg:max-w-[16rem] shrink-0 mb-6 lg:mb-0">
              <h3 className="text-xl font-extrabold text-navy-900">Enrichment & Future Skills</h3>
              <p className="text-sm text-navy-700 mt-1 font-medium">Building well-rounded learners alongside their academic programme.</p>
            </div>
            {/* Right: 4 pills + note */}
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {enrichmentPrograms.map((program, i) => (
                  <Link
                    key={program.name}
                    href={program.href}
                    title={program.name}
                    className="group flex items-start gap-3 rounded-xl bg-white/80 hover:bg-white border border-amber-200/60 p-4 transition-all duration-200 hover:shadow-md hover:shadow-amber-200/20"
                  >
                    <span className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 text-navy-700 group-hover:bg-amber-200/50 transition-colors">
                      <program.Icon className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="font-semibold text-navy-900 text-sm block">{program.name}</span>
                      <span className="text-xs text-navy-700 leading-snug block mt-0.5">{program.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-xs text-navy-600 mt-4 leading-relaxed italic">
                These programmes run alongside our academic courses for a more complete education.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-20 md:mt-28"
        >
          <Link
            href="/courses"
            className="btn btn-primary px-6 py-3 inline-flex items-center gap-2 w-fit group"
          >
            Explore All Courses
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function StageRow({
  stage,
  children,
  ctaHref,
  ctaText,
  isInView,
  delay,
}: {
  stage: (typeof stages)[0];
  children: React.ReactNode;
  ctaHref: string;
  ctaText: string;
  isInView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="py-12 md:py-16 first:pt-0"
    >
      {/* Content: stage title + description (25%) then cards (75%); consistent padding between Primary and Secondary */}
      <div className="min-w-0 border-b border-gray-200 last:border-b-0 pb-12 md:pb-16 last:pb-0">
        <div className="min-w-0">
          <div className="flex items-start gap-2">
            <span
              className={`w-7 h-7 rounded-lg ${stage.nodeClass} flex items-center justify-center shrink-0 mt-0.5`}
              style={{ color: '#FFFFFF' }}
              aria-hidden
            >
              <stage.Icon className="w-4 h-4" strokeWidth={2} />
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 leading-tight">{stage.label}</h3>
          </div>
          <p className="text-sm font-medium text-navy-600 mt-1">
            {stage.range}
            {stage.sub != null && ` · ${stage.sub}`}
          </p>
        </div>

        <div className="mt-4">
          {children}
        </div>

        <p className="text-base text-navy-600 mt-4 leading-relaxed">{stage.description}</p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-1 text-base text-navy-600 hover:text-navy-900 font-medium mt-4 w-fit"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

type PrimarySubject = { Icon: React.ElementType; name: string; description: string; bgClass: string; href: string };
type GradientSubject = { Icon: React.ElementType; name: string; description: string; gradient: string };

function SmallSubjectCard({
  subject,
  index,
  variant,
  compact,
}: {
  subject: PrimarySubject | GradientSubject;
  index: number;
  variant: 'primary' | 'gradient';
  compact?: boolean;
}) {
  const href = 'href' in subject ? subject.href : `/courses/secondary#${subject.name.toLowerCase().replace(/\s+/g, '-')}`;

  if (variant === 'gradient' && 'gradient' in subject) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.03 }}
      >
        <Link
          href={href}
          className={`block rounded-xl bg-gradient-to-br ${subject.gradient} p-3 h-full min-h-[3.5rem] sm:min-h-[4rem] transition-all duration-200 hover:-translate-y-[5px] hover:shadow-xl hover:shadow-gray-400/50 ${compact ? 'flex items-center' : ''}`}
        >
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <subject.Icon className="w-4 h-4 text-[#FFFFFF]" strokeWidth={1.5} />
            </span>
            <div className="min-w-0 flex-1">
              <span className="font-semibold text-[#FFFFFF] text-sm block truncate">{subject.name}</span>
              {!compact && subject.description && (
                <span className="text-xs line-clamp-2 opacity-90" style={{ color: '#FFFFFF' }}>{subject.description}</span>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  const p = subject as PrimarySubject;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <Link
        href={href}
        className={`flex items-center gap-2 rounded-xl bg-gradient-to-br ${p.bgClass} p-3 min-w-0 min-h-[3.5rem] sm:min-h-[4rem] transition-all duration-200 hover:-translate-y-[5px] hover:shadow-xl hover:shadow-gray-400/50`}
      >
        <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
          <p.Icon className="w-4 h-4 text-[#FFFFFF]" strokeWidth={1.5} />
        </span>
        <div className="min-w-0 flex-1">
          <span className="font-semibold text-sm block truncate text-[#FFFFFF]">
            {p.name}
          </span>
          {p.description && (
            <span className="text-xs line-clamp-2 opacity-90" style={{ color: '#FFFFFF' }}>
              {p.description}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
