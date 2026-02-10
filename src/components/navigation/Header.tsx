'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
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
  Puzzle,
  DollarSign,
  Cpu,
  Palette,
  PenTool,
  Book,
  BookMarked,
  GraduationCap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TOP_BAR_BG = '#002D62';
const CTA_GOLD = '#FFC107';

type MegaMenuKey = 'courses' | 'curriculum';

type CourseItem = {
  icon: LucideIcon;
  name: string;
  subtitle: string;
  href: string;
};

type CourseColumn = {
  title: string;
  items: CourseItem[];
  viewAllLink?: {
    text: string;
    href: string;
  };
};

const coursesColumns: CourseColumn[] = [
  {
    title: 'Core Subjects',
    items: [
      { icon: Calculator, name: 'Mathematics', subtitle: 'Primary & Secondary', href: '/courses/mathematics' },
      { icon: BookOpen, name: 'English', subtitle: 'Primary & Secondary', href: '/courses/english' },
      { icon: Microscope, name: 'Science (General)', subtitle: 'Primary, KS3', href: '/courses/science' },
      { icon: Zap, name: 'Physics', subtitle: 'GCSE, IGCSE, A-Level, IB', href: '/courses/physics' },
      { icon: FlaskConical, name: 'Chemistry', subtitle: 'GCSE, IGCSE, A-Level, IB', href: '/courses/chemistry' },
      { icon: Leaf, name: 'Biology', subtitle: 'GCSE, IGCSE, A-Level, IB', href: '/courses/biology' },
    ],
  },
  {
    title: 'Humanities & Business',
    items: [
      { icon: Briefcase, name: 'Business Studies', subtitle: 'GCSE, IGCSE, A-Level, IB', href: '/courses/business-studies' },
      { icon: TrendingUp, name: 'Economics', subtitle: 'GCSE, IGCSE, A-Level, IB', href: '/courses/economics' },
      { icon: Brain, name: 'Psychology', subtitle: 'GCSE, IGCSE, A-Level, IB', href: '/courses/psychology' },
    ],
  },
  {
    title: 'Special Programs',
    items: [
      { icon: Target, name: 'CAT4 Test Prep', subtitle: 'Ages 7-13', href: '/courses/cat-prep' },
      { icon: Award, name: '7+/11+ Entrance Prep', subtitle: 'School Admissions', href: '/courses/entrance-prep' },
      { icon: Puzzle, name: 'Chess Mastery', subtitle: 'Strategic Thinking', href: '/courses/chess' },
      { icon: DollarSign, name: 'Financial Literacy', subtitle: 'Money Management', href: '/courses/financial-literacy' },
      { icon: Cpu, name: 'AI Literacy', subtitle: 'Future Skills', href: '/courses/ai-literacy' },
    ],
    viewAllLink: { text: 'View All Courses →', href: '/courses' },
  },
];

type CurriculumLink = { name: string; href: string };
type CurriculumSubsection = { label: string; links: CurriculumLink[] };
type CurriculumSection = {
  icon: LucideIcon;
  name: string;
  links?: CurriculumLink[];
  subsections?: CurriculumSubsection[];
};
type CurriculumColumn = {
  title: string;
  ageRange?: string;
  sections: CurriculumSection[];
  viewAllLink: { text: string; href: string };
};

const curriculumColumns: CurriculumColumn[] = [
  {
    title: 'PRIMARY (AGES 3-11)',
    sections: [
      { icon: Palette, name: 'EYFS (Ages 3-5)', links: [{ name: 'Mathematics', href: '/courses/eyfs-mathematics' }, { name: 'English', href: '/courses/eyfs-english' }] },
      { icon: BookOpen, name: 'Key Stage 1 (Ages 5-7)', links: [{ name: 'Mathematics', href: '/courses/ks1-mathematics' }, { name: 'English', href: '/courses/ks1-english' }, { name: 'Science', href: '/courses/ks1-science' }] },
      { icon: PenTool, name: 'Key Stage 2 (Ages 7-11)', links: [{ name: 'Mathematics', href: '/courses/ks2-mathematics' }, { name: 'English', href: '/courses/ks2-english' }, { name: 'Science', href: '/courses/ks2-science' }] },
    ],
    viewAllLink: { text: 'View Primary Curriculum →', href: '/curriculum/primary' },
  },
  {
    title: 'SECONDARY (AGES 11-18)',
    sections: [
      { icon: Book, name: 'Key Stage 3 (Ages 11-14)', links: [{ name: 'Mathematics', href: '/courses/ks3-mathematics' }, { name: 'English', href: '/courses/ks3-english' }, { name: 'Science (Combined)', href: '/courses/ks3-science' }] },
      {
        icon: BookMarked,
        name: 'GCSE/IGCSE/MYP (Ages 14-16)',
        subsections: [
          {
            label: 'GCSE Subjects:',
            links: [
              { name: 'GCSE Mathematics', href: '/courses/gcse-mathematics' },
              { name: 'GCSE English Language', href: '/courses/gcse-english-language' },
              { name: 'GCSE Physics', href: '/courses/gcse-physics' },
              { name: 'GCSE Chemistry', href: '/courses/gcse-chemistry' },
              { name: 'GCSE Biology', href: '/courses/gcse-biology' },
              { name: 'GCSE Business Studies', href: '/courses/gcse-business-studies' },
              { name: 'GCSE Economics', href: '/courses/gcse-economics' },
              { name: 'GCSE Psychology', href: '/courses/gcse-psychology' },
            ],
          },
          {
            label: 'IGCSE Subjects:',
            links: [
              { name: 'IGCSE Mathematics', href: '/courses/igcse-mathematics' },
              { name: 'IGCSE English Language', href: '/courses/igcse-english-language' },
              { name: 'IGCSE Physics', href: '/courses/igcse-physics' },
              { name: 'IGCSE Chemistry', href: '/courses/igcse-chemistry' },
              { name: 'IGCSE Biology', href: '/courses/igcse-biology' },
              { name: 'IGCSE Business Studies', href: '/courses/igcse-business-studies' },
              { name: 'IGCSE Economics', href: '/courses/igcse-economics' },
              { name: 'IGCSE Psychology', href: '/courses/igcse-psychology' },
            ],
          },
          {
            label: 'MYP Subjects:',
            links: [
              { name: 'MYP Mathematics', href: '/courses/myp-mathematics' },
              { name: 'MYP English', href: '/courses/myp-english' },
              { name: 'MYP Sciences', href: '/courses/myp-sciences' },
              { name: 'MYP Individuals & Societies', href: '/courses/myp-individuals-societies' },
            ],
          },
        ],
      },
      {
        icon: GraduationCap,
        name: 'A-Level/IB (Ages 16-18)',
        subsections: [
          {
            label: 'A-Level Subjects:',
            links: [
              { name: 'A-Level Mathematics', href: '/courses/a-level-mathematics' },
              { name: 'A-Level English Literature', href: '/courses/a-level-english-literature' },
              { name: 'A-Level Physics', href: '/courses/a-level-physics' },
              { name: 'A-Level Chemistry', href: '/courses/a-level-chemistry' },
              { name: 'A-Level Biology', href: '/courses/a-level-biology' },
              { name: 'A-Level Business', href: '/courses/a-level-business' },
              { name: 'A-Level Economics', href: '/courses/a-level-economics' },
              { name: 'A-Level Psychology', href: '/courses/a-level-psychology' },
            ],
          },
          {
            label: 'IB Subjects (SL/HL):',
            links: [
              { name: 'IB Mathematics', href: '/courses/ib-mathematics' },
              { name: 'IB English', href: '/courses/ib-english' },
              { name: 'IB Physics', href: '/courses/ib-physics' },
              { name: 'IB Chemistry', href: '/courses/ib-chemistry' },
              { name: 'IB Biology', href: '/courses/ib-biology' },
              { name: 'IB Business Management', href: '/courses/ib-business-management' },
              { name: 'IB Economics', href: '/courses/ib-economics' },
              { name: 'IB Psychology', href: '/courses/ib-psychology' },
            ],
          },
        ],
      },
    ],
    viewAllLink: { text: 'View Secondary Curriculum →', href: '/curriculum/secondary' },
  },
];

type MainNavItem = {
  name: string;
  href: string;
  title: string;
  hasDropdown?: MegaMenuKey;
};

const mainNavItems: MainNavItem[] = [
  { name: 'Home', href: '/', title: 'Improve ME Institute Home' },
  { name: 'Our Courses', href: '/courses', title: 'Our Courses at Improve ME Institute', hasDropdown: 'courses' },
  { name: 'Our Curriculum', href: '/curriculum', title: 'Our Curriculum at Improve ME Institute', hasDropdown: 'curriculum' },
  { name: 'About Us', href: '/about', title: 'About Improve ME Institute' },
  { name: 'Contact', href: '/contact', title: 'Contact Improve ME Institute' },
];

const desktopDropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15, ease: 'easeIn' as const } },
};

const mobileMenuItemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { duration: 0.2, delay: i * 0.05, ease: 'easeOut' as const } }),
};

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<MegaMenuKey | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<MegaMenuKey | null>(null);
  const [mobilePrimaryOpen, setMobilePrimaryOpen] = useState(false);
  const [mobileSecondaryOpen, setMobileSecondaryOpen] = useState(false);
  const [mobilePrimaryStagesOpen, setMobilePrimaryStagesOpen] = useState<Record<string, boolean>>({});
  const [mobileSecondaryStagesOpen, setMobileSecondaryStagesOpen] = useState<Record<string, boolean>>({});
  const [mobileQualificationTypesOpen, setMobileQualificationTypesOpen] = useState<Record<string, boolean>>({});

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileAccordion(null);
    setMobilePrimaryOpen(false);
    setMobileSecondaryOpen(false);
    setMobilePrimaryStagesOpen({});
    setMobileSecondaryStagesOpen({});
    setMobileQualificationTypesOpen({});
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const togglePrimaryStage = (name: string) => {
    setMobilePrimaryStagesOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  const toggleSecondaryStage = (name: string) => {
    setMobileSecondaryStagesOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  const toggleQualificationType = (label: string) => {
    setMobileQualificationTypesOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="w-full" style={{ backgroundColor: TOP_BAR_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="text-white text-xs sm:text-sm font-medium" aria-label="Location">
            📍 Gold & Diamond Park, Dubai
          </span>
          <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
            Primary: +971-50 185 2505 | Senior: +971-58 547 1457
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className="w-full bg-white border-b border-gray-200 transition-shadow duration-200"
        style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105" title="Improve ME Institute - Home">
                <Image src="/logo.png" alt="Improve ME Institute" width={185} height={45} priority className="h-9 w-auto" />
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex lg:items-center lg:gap-0.5">
                {mainNavItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.hasDropdown)}
                  >
                    <Link
                      href={item.href}
                      title={item.title}
                      className={`flex items-center gap-0.5 px-4 py-3 text-sm font-medium rounded-md transition-colors duration-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 ${
                        item.hasDropdown && activeDropdown === item.hasDropdown ? 'text-yellow-500' : 'text-navy-900 hover:text-yellow-500'
                      }`}
                      aria-expanded={item.hasDropdown ? activeDropdown === item.hasDropdown : undefined}
                      aria-controls={item.hasDropdown ? `desktop-${item.hasDropdown}-menu` : undefined}
                      aria-haspopup={!!item.hasDropdown}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${activeDropdown === item.hasDropdown ? 'rotate-180' : ''}`}
                          aria-hidden
                        />
                      )}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="hidden lg:block flex-shrink-0">
                <Link
                  href="/contact#assessment"
                  title="Book a free assessment with Improve ME Institute"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-black rounded-lg transition-all duration-200 hover:opacity-95 hover:shadow-md focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
                  style={{ backgroundColor: CTA_GOLD }}
                >
                  Book Free Assessment
                </Link>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-navy-900 hover:bg-gray-100 rounded-lg transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Our Courses Mega Dropdown - Desktop (multi-column, matches Curriculum style) */}
            <AnimatePresence>
              {activeDropdown === 'courses' && (
                <motion.div
                  id="desktop-courses-menu"
                  role="region"
                  aria-label="Our Courses"
                  variants={desktopDropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 right-0 top-full mt-2 flex justify-center lg:block px-4"
                >
                  <div className="w-full max-w-6xl mx-auto">
                    <div className="bg-white backdrop-blur-md border-t-4 border-yellow-400 shadow-2xl rounded-b-lg p-5 min-h-[30rem] flex flex-col">
                      <div className="[column-count:1] md:[column-count:2] lg:[column-count:3] [column-gap:2rem] [column-rule:1px_solid_rgb(229_231_235)] flex-1 min-h-0">
                        {/* CORE SUBJECTS - column 1 (matches Curriculum section header style) */}
                        <div className="break-inside-avoid mb-3">
                          <h2 className="text-xs font-bold uppercase tracking-wide text-navy-600 border-b border-gray-200 pb-1">
                            CORE SUBJECTS
                          </h2>
                        </div>
                        {coursesColumns[0].items.map((c) => (
                            <div key={c.href} className="break-inside-avoid mb-8">
                              <Link href={c.href} className="block group">
                                <div className="flex items-baseline gap-2 hover:bg-gray-50 py-0.5 px-1 -mx-1 rounded transition-colors">
                                  <span className="text-sm font-semibold text-navy-900 group-hover:text-yellow-600 transition-colors whitespace-nowrap">
                                    {c.name}
                                  </span>
                                  <span className="text-xs text-gray-500">{c.subtitle}</span>
                                </div>
                              </Link>
                            </div>
                        ))}
                        {/* HUMANITIES & BUSINESS - column 2 (force new column like Curriculum) */}
                        <div className="break-inside-avoid mb-3 break-before-column">
                          <h2 className="text-xs font-bold uppercase tracking-wide text-navy-600 border-b border-gray-200 pb-1">
                            HUMANITIES & BUSINESS
                          </h2>
                        </div>
                        {coursesColumns[1].items.map((c) => (
                            <div key={c.href} className="break-inside-avoid mb-8">
                              <Link href={c.href} className="block group">
                                <div className="flex items-baseline gap-2 hover:bg-gray-50 py-0.5 px-1 -mx-1 rounded transition-colors">
                                  <span className="text-sm font-semibold text-navy-900 group-hover:text-yellow-600 transition-colors whitespace-nowrap">
                                    {c.name}
                                  </span>
                                  <span className="text-xs text-gray-500">{c.subtitle}</span>
                                </div>
                              </Link>
                            </div>
                        ))}
                        {/* SPECIAL PROGRAMS - column 3 */}
                        <div className="break-inside-avoid mb-3 break-before-column">
                          <h2 className="text-xs font-bold uppercase tracking-wide text-navy-600 border-b border-gray-200 pb-1">
                            SPECIAL PROGRAMS
                          </h2>
                        </div>
                        {coursesColumns[2].items.map((c) => (
                            <div key={c.href} className="break-inside-avoid mb-8">
                              <Link href={c.href} className="block group">
                                <div className="flex items-baseline gap-2 hover:bg-gray-50 py-0.5 px-1 -mx-1 rounded transition-colors">
                                  <span className="text-sm font-semibold text-navy-900 group-hover:text-yellow-600 transition-colors whitespace-nowrap">
                                    {c.name}
                                  </span>
                                  <span className="text-xs text-gray-500">{c.subtitle}</span>
                                </div>
                              </Link>
                            </div>
                        ))}
                      </div>
                      {/* Footer matches Curriculum: same border and flex layout */}
                      <div className="flex flex-wrap justify-between gap-4 pt-4 mt-auto border-t border-gray-200">
                        <Link
                          href="/courses"
                          className="text-xs text-yellow-600 font-medium hover:text-yellow-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                        >
                          View All Courses →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Our Curriculum Mega Dropdown - Desktop (3 columns: Primary | KS3 | GCSE/A-Level/IB) */}
            <AnimatePresence>
              {activeDropdown === 'curriculum' && (
                <motion.div
                  id="desktop-curriculum-menu"
                  role="region"
                  aria-label="Our Curriculum"
                  variants={desktopDropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 right-0 top-full mt-2 flex justify-center lg:block px-4"
                >
                  <div className="w-full max-w-6xl mx-auto">
                    <div className="bg-white backdrop-blur-md border-t-4 border-yellow-400 shadow-2xl rounded-b-lg p-5 min-h-[30rem] flex flex-col">
                      {/* Multi-column container: flows sections like a newspaper layout */}
                      <div className="[column-count:1] md:[column-count:2] lg:[column-count:3] [column-gap:2rem] [column-rule:1px_solid_rgb(229_231_235)] flex-1 min-h-0">
                        {/* Block 1: PRIMARY HEADER */}
                        <div className="break-inside-avoid mb-3">
                          <h2 className="text-xs font-bold uppercase tracking-wide text-navy-600 border-b border-gray-200 pb-1">
                            PRIMARY (AGES 3-11)
                          </h2>
                        </div>

                        {/* Block 2: EYFS (Ages 3-5) */}
                        <div className="break-inside-avoid mb-4">
                          <div className="flex items-center gap-2 mb-1.5">
                            <Palette className="w-4 h-4 text-yellow-500" />
                            <h3 className="text-sm font-bold text-navy-900">EYFS (Ages 3-5)</h3>
                          </div>
                          <div className="pl-6 space-y-0.5">
                            <Link
                              href="/courses/eyfs-mathematics"
                              className="block text-xs text-navy-700 hover:text-yellow-600 transition-colors"
                            >
                              Mathematics
                            </Link>
                            <Link
                              href="/courses/eyfs-english"
                              className="block text-xs text-navy-700 hover:text-yellow-600 transition-colors"
                            >
                              English
                            </Link>
                          </div>
                        </div>

                        {/* Block 3: Key Stage 1 (Ages 5-7) */}
                        <div className="break-inside-avoid mb-4">
                          <div className="flex items-center gap-2 mb-1.5">
                            <BookOpen className="w-4 h-4 text-yellow-500" />
                            <h3 className="text-sm font-bold text-navy-900">Key Stage 1 (Ages 5-7)</h3>
                          </div>
                          <div className="pl-6 space-y-0.5">
                            <Link
                              href="/courses/ks1-mathematics"
                              className="block text-xs text-navy-700 hover:text-yellow-600 transition-colors"
                            >
                              Mathematics
                            </Link>
                            <Link
                              href="/courses/ks1-english"
                              className="block text-xs text-navy-700 hover:text-yellow-600 transition-colors"
                            >
                              English
                            </Link>
                            <Link
                              href="/courses/ks1-science"
                              className="block text-xs text-navy-700 hover:text-yellow-600 transition-colors"
                            >
                              Science
                            </Link>
                          </div>
                        </div>

                        {/* Block 4: Key Stage 2 (Ages 7-11) */}
                        <div className="break-inside-avoid mb-4">
                          <div className="flex items-center gap-2 mb-1.5">
                            <PenTool className="w-4 h-4 text-yellow-500" />
                            <h3 className="text-sm font-bold text-navy-900">Key Stage 2 (Ages 7-11)</h3>
                          </div>
                          <div className="pl-6 space-y-0.5">
                            <Link
                              href="/courses/ks2-mathematics"
                              className="block text-xs text-navy-700 hover:text-yellow-600 transition-colors"
                            >
                              Mathematics
                            </Link>
                            <Link
                              href="/courses/ks2-english"
                              className="block text-xs text-navy-700 hover:text-yellow-600 transition-colors"
                            >
                              English
                            </Link>
                            <Link
                              href="/courses/ks2-science"
                              className="block text-xs text-navy-700 hover:text-yellow-600 transition-colors"
                            >
                              Science
                            </Link>
                          </div>
                        </div>

                        {/* Block 5: SECONDARY HEADER - force new column so it starts column 2 */}
                        <div className="break-inside-avoid mb-3 break-before-column">
                          <h2 className="text-xs font-bold uppercase tracking-wide text-navy-600 border-b border-gray-200 pb-1">
                            SECONDARY (AGES 11-18)
                          </h2>
                        </div>

                        {/* Block 6: Key Stage 3 (Ages 11-14) */}
                        <div className="break-inside-avoid mb-4">
                          <div className="flex items-center gap-2 mb-1.5">
                            <Book className="w-4 h-4 text-yellow-500" />
                            <h3 className="text-sm font-bold text-navy-900">Key Stage 3 (Ages 11-14)</h3>
                          </div>
                          <div className="pl-6 space-y-0.5">
                            <Link
                              href="/courses/ks3-mathematics"
                              className="block text-xs text-navy-700 hover:text-yellow-600 transition-colors"
                            >
                              Mathematics
                            </Link>
                            <Link
                              href="/courses/ks3-english"
                              className="block text-xs text-navy-700 hover:text-yellow-600 transition-colors"
                            >
                              English
                            </Link>
                            <Link
                              href="/courses/ks3-science"
                              className="block text-xs text-navy-700 hover:text-yellow-600 transition-colors"
                            >
                              Science (Combined)
                            </Link>
                          </div>
                        </div>

                        {/* Block 7: GCSE (Ages 14-16) */}
                        <div className="break-inside-avoid mb-4">
                          <div className="mb-1.5">
                            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                              <BookMarked className="w-4 h-4 text-yellow-500" />
                              GCSE (Ages 14-16)
                            </h3>
                          </div>
                          <div className="pl-6">
                            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                              <Link
                                href="/courses/gcse-mathematics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Mathematics
                              </Link>
                              <Link
                                href="/courses/gcse-physics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Physics
                              </Link>
                              <Link
                                href="/courses/gcse-english-language"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                English Language
                              </Link>
                              <Link
                                href="/courses/gcse-chemistry"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Chemistry
                              </Link>
                              <Link
                                href="/courses/gcse-biology"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Biology
                              </Link>
                              <Link
                                href="/courses/gcse-business-studies"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Business Studies
                              </Link>
                              <Link
                                href="/courses/gcse-economics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Economics
                              </Link>
                              <Link
                                href="/courses/gcse-psychology"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Psychology
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Block 8: IGCSE (Ages 14-16) */}
                        <div className="break-inside-avoid mb-4">
                          <div className="mb-1.5">
                            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                              <BookMarked className="w-4 h-4 text-yellow-500" />
                              IGCSE (Ages 14-16)
                            </h3>
                          </div>
                          <div className="pl-6">
                            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                              <Link
                                href="/courses/igcse-mathematics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Mathematics
                              </Link>
                              <Link
                                href="/courses/igcse-physics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Physics
                              </Link>
                              <Link
                                href="/courses/igcse-english-language"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                English Language
                              </Link>
                              <Link
                                href="/courses/igcse-chemistry"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Chemistry
                              </Link>
                              <Link
                                href="/courses/igcse-biology"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Biology
                              </Link>
                              <Link
                                href="/courses/igcse-business-studies"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Business Studies
                              </Link>
                              <Link
                                href="/courses/igcse-economics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Economics
                              </Link>
                              <Link
                                href="/courses/igcse-psychology"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Psychology
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Block 9: MYP (Ages 14-16) */}
                        <div className="break-inside-avoid mb-4">
                          <div className="mb-1.5">
                            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-yellow-500" />
                              MYP (Ages 14-16)
                            </h3>
                          </div>
                          <div className="pl-6 space-y-0.5">
                            <Link
                              href="/courses/myp-mathematics"
                              className="block text-xs text-navy-700 hover:text-yellow-600"
                            >
                              Mathematics
                            </Link>
                            <Link
                              href="/courses/myp-english"
                              className="block text-xs text-navy-700 hover:text-yellow-600"
                            >
                              English
                            </Link>
                            <Link
                              href="/courses/myp-sciences"
                              className="block text-xs text-navy-700 hover:text-yellow-600"
                            >
                              Sciences
                            </Link>
                            <Link
                              href="/courses/myp-individuals-societies"
                              className="block text-xs text-navy-700 hover:text-yellow-600"
                            >
                              Individuals &amp; Societies
                            </Link>
                          </div>
                        </div>

                        {/* Block 10: A-Level (Ages 16-18) */}
                        <div className="break-inside-avoid mb-4">
                          <div className="mb-1.5">
                            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                              <GraduationCap className="w-4 h-4 text-yellow-500" />
                              A-Level (Ages 16-18)
                            </h3>
                          </div>
                          <div className="pl-6">
                            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                              <Link
                                href="/courses/a-level-mathematics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Mathematics
                              </Link>
                              <Link
                                href="/courses/a-level-physics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Physics
                              </Link>
                              <Link
                                href="/courses/a-level-english-literature"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                English Literature
                              </Link>
                              <Link
                                href="/courses/a-level-chemistry"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Chemistry
                              </Link>
                              <Link
                                href="/courses/a-level-biology"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Biology
                              </Link>
                              <Link
                                href="/courses/a-level-business"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Business
                              </Link>
                              <Link
                                href="/courses/a-level-economics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Economics
                              </Link>
                              <Link
                                href="/courses/a-level-psychology"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Psychology
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Block 11: IB (SL/HL, Ages 16-18) */}
                        <div className="break-inside-avoid mb-4">
                          <div className="mb-1.5">
                            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                              <GraduationCap className="w-4 h-4 text-yellow-500" />
                              IB (SL/HL, Ages 16-18)
                            </h3>
                          </div>
                          <div className="pl-6">
                            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                              <Link
                                href="/courses/ib-mathematics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Mathematics
                              </Link>
                              <Link
                                href="/courses/ib-physics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Physics
                              </Link>
                              <Link
                                href="/courses/ib-english"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                English
                              </Link>
                              <Link
                                href="/courses/ib-chemistry"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Chemistry
                              </Link>
                              <Link
                                href="/courses/ib-biology"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Biology
                              </Link>
                              <Link
                                href="/courses/ib-business-management"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Business Management
                              </Link>
                              <Link
                                href="/courses/ib-economics"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Economics
                              </Link>
                              <Link
                                href="/courses/ib-psychology"
                                className="text-xs text-navy-700 hover:text-yellow-600"
                              >
                                Psychology
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* View All links at bottom */}
                      <div className="flex flex-wrap justify-between gap-4 pt-4 mt-4 border-t border-gray-200">
                        <Link
                          href={curriculumColumns[0].viewAllLink.href}
                          className="text-xs text-yellow-600 font-medium hover:text-yellow-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                        >
                          {curriculumColumns[0].viewAllLink.text}
                        </Link>
                        <Link
                          href={curriculumColumns[1].viewAllLink.href}
                          className="text-xs text-yellow-600 font-medium hover:text-yellow-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                        >
                          {curriculumColumns[1].viewAllLink.text}
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/25 backdrop-blur-sm lg:hidden z-40"
              aria-hidden
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl lg:hidden z-50 overflow-y-auto"
            >
              <div className="p-6 pt-8">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" onClick={closeMobileMenu} title="Improve ME Institute - Home">
                    <Image src="/logo.png" alt="Improve ME Institute" width={150} height={36} className="h-8 w-auto" />
                  </Link>
                  <button type="button" onClick={closeMobileMenu} className="p-2 text-navy-900 hover:bg-gray-100 rounded-lg focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400" aria-label="Close menu">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-1" aria-label="Mobile navigation">
                  <motion.div variants={mobileMenuItemVariants} initial="hidden" animate="visible" custom={0}>
                    <Link href="/" title="Improve ME Institute Home" onClick={closeMobileMenu} className="block py-3 px-2 text-base font-medium text-navy-900 hover:text-yellow-500 transition-colors rounded-lg focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400">
                      Home
                    </Link>
                  </motion.div>

                  {/* Our Courses Accordion - Mobile */}
                  <div className="border-b border-gray-100">
                    <button
                      type="button"
                      onClick={() => setMobileAccordion(mobileAccordion === 'courses' ? null : 'courses')}
                      className="flex items-center justify-between w-full py-3 px-2 text-base font-medium text-navy-900 hover:text-yellow-500 transition-colors rounded-lg focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400"
                      aria-expanded={mobileAccordion === 'courses'}
                      aria-controls="mobile-courses"
                      id="mobile-courses-btn"
                    >
                      Our Courses
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileAccordion === 'courses' ? 'rotate-180' : ''}`} aria-hidden />
                    </button>
                    <div id="mobile-courses" role="region" aria-labelledby="mobile-courses-btn" className="overflow-hidden">
                      <AnimatePresence>
                        {mobileAccordion === 'courses' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="pl-4 pb-4"
                          >
                            {coursesColumns.map((col, colIdx) => (
                              <div key={col.title}>
                                {colIdx === 2 && <hr className="my-4 border-gray-200" />}
                                {col.items.map((c, i) => {
                                  const Icon = c.icon;
                                  return (
                                    <motion.div key={c.href} variants={mobileMenuItemVariants} initial="hidden" animate="visible" custom={colIdx * 10 + i}>
                                      <Link
                                        href={c.href}
                                        onClick={closeMobileMenu}
                                        className="flex items-start gap-3 py-3 text-navy-900 hover:text-yellow-600 transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                                      >
                                        <Icon className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                                        <span>
                                          <span className="block text-base font-medium">{c.name}</span>
                                          <span className="block text-sm text-navy-600">{c.subtitle}</span>
                                        </span>
                                      </Link>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            ))}
                            <motion.div variants={mobileMenuItemVariants} initial="hidden" animate="visible" custom={20}>
                              <Link
                                href="/courses"
                                onClick={closeMobileMenu}
                                className="mt-4 inline-flex items-center gap-1 text-yellow-600 font-medium hover:text-yellow-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                              >
                                View All Courses →
                              </Link>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Our Curriculum Accordion - Mobile: PRIMARY + SECONDARY sub-accordions */}
                  <div className="border-b border-gray-100">
                    <button
                      type="button"
                      onClick={() => setMobileAccordion(mobileAccordion === 'curriculum' ? null : 'curriculum')}
                      className="flex items-center justify-between w-full py-3 px-2 text-base font-medium text-navy-900 hover:text-yellow-500 transition-colors rounded-lg focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400"
                      aria-expanded={mobileAccordion === 'curriculum'}
                      aria-controls="mobile-curriculum"
                      id="mobile-curriculum-btn"
                    >
                      Our Curriculum
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileAccordion === 'curriculum' ? 'rotate-180' : ''}`} aria-hidden />
                    </button>
                    <div id="mobile-curriculum" role="region" aria-labelledby="mobile-curriculum-btn" className="overflow-hidden">
                      <AnimatePresence>
                        {mobileAccordion === 'curriculum' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="pl-4 pb-4 space-y-2"
                          >
                            {/* PRIMARY (Ages 3-11) sub-accordion */}
                            <div>
                              <button
                                type="button"
                                onClick={() => setMobilePrimaryOpen(!mobilePrimaryOpen)}
                                className="flex items-center justify-between w-full py-2 text-sm font-semibold text-navy-900 hover:text-yellow-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                                aria-expanded={mobilePrimaryOpen}
                                aria-controls="mobile-curriculum-primary"
                              >
                                PRIMARY (AGES 3-11)
                                <ChevronDown className={`w-4 h-4 transition-transform ${mobilePrimaryOpen ? 'rotate-180' : ''}`} aria-hidden />
                              </button>
                              <div id="mobile-curriculum-primary" className="overflow-hidden">
                                {mobilePrimaryOpen && curriculumColumns[0].sections.map((sec) => (
                                  <div key={sec.name} className="pl-2">
                                    <button
                                      type="button"
                                      onClick={() => togglePrimaryStage(sec.name)}
                                      className="flex items-center gap-2 w-full py-2 text-sm font-medium text-navy-800 hover:text-yellow-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                                      aria-expanded={mobilePrimaryStagesOpen[sec.name]}
                                      aria-controls={`mobile-primary-${sec.name}`}
                                    >
                                      <ChevronRight className={`w-4 h-4 transition-transform ${mobilePrimaryStagesOpen[sec.name] ? 'rotate-90' : ''}`} aria-hidden />
                                      {sec.name}
                                    </button>
                                    <AnimatePresence>
                                      {mobilePrimaryStagesOpen[sec.name] && sec.links && (
                                        <motion.div
                                          id={`mobile-primary-${sec.name}`}
                                          initial={{ height: 0 }}
                                          animate={{ height: 'auto' }}
                                          exit={{ height: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="pl-4 overflow-hidden"
                                        >
                                          {sec.links.map((link) => (
                                            <Link
                                              key={link.href}
                                              href={link.href}
                                              onClick={closeMobileMenu}
                                              className="block py-1.5 text-sm text-navy-700 hover:text-yellow-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                                            >
                                              {link.name}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ))}
                                {mobilePrimaryOpen && (
                                  <Link href="/curriculum/primary" onClick={closeMobileMenu} className="mt-2 pl-2 inline-flex items-center gap-1 text-sm text-yellow-600 font-medium">
                                    View Primary Curriculum →
                                  </Link>
                                )}
                              </div>
                            </div>

                            {/* SECONDARY (Ages 11-18) sub-accordion */}
                            <div>
                              <button
                                type="button"
                                onClick={() => setMobileSecondaryOpen(!mobileSecondaryOpen)}
                                className="flex items-center justify-between w-full py-2 text-sm font-semibold text-navy-900 hover:text-yellow-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                                aria-expanded={mobileSecondaryOpen}
                                aria-controls="mobile-curriculum-secondary"
                              >
                                SECONDARY (AGES 11-18)
                                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSecondaryOpen ? 'rotate-180' : ''}`} aria-hidden />
                              </button>
                              <div id="mobile-curriculum-secondary" className="overflow-hidden">
                                {mobileSecondaryOpen && curriculumColumns[1].sections.map((sec) => (
                                  <div key={sec.name} className="pl-2">
                                    {sec.links ? (
                                      <>
                                        <button
                                          type="button"
                                          onClick={() => toggleSecondaryStage(sec.name)}
                                          className="flex items-center gap-2 w-full py-2 text-sm font-medium text-navy-800 hover:text-yellow-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                                          aria-expanded={mobileSecondaryStagesOpen[sec.name]}
                                          aria-controls={`mobile-secondary-${sec.name}`}
                                        >
                                          <ChevronRight className={`w-4 h-4 transition-transform ${mobileSecondaryStagesOpen[sec.name] ? 'rotate-90' : ''}`} aria-hidden />
                                          {sec.name}
                                        </button>
                                        <AnimatePresence>
                                          {mobileSecondaryStagesOpen[sec.name] && (
                                            <motion.div
                                              id={`mobile-secondary-${sec.name}`}
                                              initial={{ height: 0 }}
                                              animate={{ height: 'auto' }}
                                              exit={{ height: 0 }}
                                              transition={{ duration: 0.2 }}
                                              className="pl-4 overflow-hidden"
                                            >
                                              {sec.links.map((link) => (
                                                <Link key={link.href} href={link.href} onClick={closeMobileMenu} className="block py-1.5 text-sm text-navy-700 hover:text-yellow-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded">
                                                  {link.name}
                                                </Link>
                                              ))}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </>
                                    ) : (
                                      <>
                                        <button
                                          type="button"
                                          onClick={() => toggleSecondaryStage(sec.name)}
                                          className="flex items-center gap-2 w-full py-2 text-sm font-medium text-navy-800 hover:text-yellow-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                                          aria-expanded={mobileSecondaryStagesOpen[sec.name]}
                                          aria-controls={`mobile-secondary-${sec.name}`}
                                        >
                                          <ChevronRight className={`w-4 h-4 transition-transform ${mobileSecondaryStagesOpen[sec.name] ? 'rotate-90' : ''}`} aria-hidden />
                                          {sec.name}
                                        </button>
                                        <AnimatePresence>
                                          {mobileSecondaryStagesOpen[sec.name] && sec.subsections && (
                                            <motion.div
                                              id={`mobile-secondary-${sec.name}`}
                                              initial={{ height: 0 }}
                                              animate={{ height: 'auto' }}
                                              exit={{ height: 0 }}
                                              transition={{ duration: 0.2 }}
                                              className="pl-4 space-y-3"
                                            >
                                              {sec.subsections.map((sub) => (
                                                <div key={sub.label}>
                                                  <button
                                                    type="button"
                                                    onClick={() => toggleQualificationType(sub.label)}
                                                    className="flex items-center justify-between w-full py-1.5 text-sm font-semibold text-navy-700 hover:text-yellow-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                                                    aria-expanded={mobileQualificationTypesOpen[sub.label]}
                                                    aria-controls={`mobile-qual-${sub.label}`}
                                                  >
                                                    {sub.label}
                                                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileQualificationTypesOpen[sub.label] ? 'rotate-180' : ''}`} aria-hidden />
                                                  </button>
                                                  <AnimatePresence>
                                                    {mobileQualificationTypesOpen[sub.label] && (
                                                      <motion.div
                                                        id={`mobile-qual-${sub.label}`}
                                                        initial={{ height: 0 }}
                                                        animate={{ height: 'auto' }}
                                                        exit={{ height: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="pl-2 overflow-hidden"
                                                      >
                                                        {sub.links.map((link) => (
                                                          <Link key={link.href} href={link.href} onClick={closeMobileMenu} className="block py-1 text-sm text-navy-700 hover:text-yellow-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 rounded">
                                                            {link.name}
                                                          </Link>
                                                        ))}
                                                      </motion.div>
                                                    )}
                                                  </AnimatePresence>
                                                </div>
                                              ))}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </>
                                    )}
                                  </div>
                                ))}
                                {mobileSecondaryOpen && (
                                  <Link href="/curriculum/secondary" onClick={closeMobileMenu} className="mt-2 pl-2 inline-flex items-center gap-1 text-sm text-yellow-600 font-medium">
                                    View Secondary Curriculum →
                                  </Link>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <motion.div variants={mobileMenuItemVariants} initial="hidden" animate="visible" custom={30}>
                    <Link href="/about" title="About Improve ME Institute" onClick={closeMobileMenu} className="block py-3 px-2 text-base font-medium text-navy-900 hover:text-yellow-500 transition-colors rounded-lg focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400">
                      About Us
                    </Link>
                  </motion.div>
                  <motion.div variants={mobileMenuItemVariants} initial="hidden" animate="visible" custom={31}>
                    <Link href="/contact" title="Contact us" onClick={closeMobileMenu} className="block py-3 px-2 text-base font-medium text-navy-900 hover:text-yellow-500 transition-colors rounded-lg focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400">
                      Contact
                    </Link>
                  </motion.div>
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/contact#assessment"
                    title="Book a free assessment"
                    onClick={closeMobileMenu}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-black rounded-lg transition-all hover:opacity-95 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
                    style={{ backgroundColor: CTA_GOLD }}
                  >
                    Book Free Assessment
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
