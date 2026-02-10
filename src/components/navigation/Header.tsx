'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TOP_BAR_BG = '#002D62';
const CTA_GOLD = '#FFC107';

/* Our Courses: 4-column mega menu — Primary | KS3 | Exam Success (10-13) | Enrichment */
const coursesMega = {
  primary: {
    columnTitle: 'Primary',
    subTitle: 'Ages 3-11',
    links: [
      { name: 'Primary Mathematics', href: '/courses/primary-mathematics', title: 'Primary Mathematics tutoring at Improve ME Institute' },
      { name: 'Primary English & Phonics', href: '/courses/primary-english', title: 'Primary English and Phonics tutoring' },
      { name: 'Primary Science', href: '/courses/primary-science', title: 'Primary Science tutoring' },
      { name: '7+/11+ Entrance Prep', href: '/courses/entrance-exam-prep', title: '7+ and 11+ entrance exam preparation' },
    ],
  },
  ks3: {
    columnTitle: 'Key Stage 3 (Years 7-9)',
    links: [
      { name: 'KS3 English', href: '/courses/ks3-english', title: 'KS3 English tutoring' },
      { name: 'KS3 Mathematics', href: '/courses/ks3-mathematics', title: 'KS3 Mathematics tutoring' },
      { name: 'KS3 Science', href: '/courses/ks3-science', title: 'KS3 Science tutoring' },
    ],
  },
  examSuccess: {
    columnTitle: 'GCSE / IGCSE Mastery (Years 10-13)',
    coreLabel: 'Core',
    core: [
      { name: 'Mathematics', href: '/courses/secondary-mathematics', title: 'GCSE & IGCSE Mathematics' },
      { name: 'English Language', href: '/courses/secondary-english', title: 'GCSE & IGCSE English Language' },
    ],
    sciencesLabel: 'Sciences',
    sciences: [
      { name: 'Physics', href: '/courses/physics', title: 'Physics tutoring' },
      { name: 'Chemistry', href: '/courses/chemistry', title: 'Chemistry tutoring' },
      { name: 'Biology', href: '/courses/biology', title: 'Biology tutoring' },
    ],
    humanitiesLabel: 'Humanities',
    humanities: [
      { name: 'Business Studies', href: '/courses/business', title: 'Business Studies' },
      { name: 'Economics', href: '/courses/economics', title: 'Economics' },
      { name: 'Psychology', href: '/courses/psychology', title: 'Psychology' },
    ],
  },
  enrichment: {
    columnTitle: 'Future Skills',
    links: [
      { name: 'CAT Prep', href: '/courses/cat-prep', title: 'Cognitive Abilities Test preparation' },
      { name: 'Chess Mastery', href: '/enrichment/chess', title: 'Chess tutoring and mastery' },
      { name: 'Financial Literacy', href: '/enrichment/financial-literacy', title: 'Financial literacy for students' },
      { name: 'AI Literacy', href: '/enrichment/ai-tech', title: 'AI and technology literacy' },
    ],
  },
};

/* Our Curriculum: 2-column dropdown — Standards | Exams | Methodology */
const curriculumMega = {
  standards: {
    label: 'Standards',
    links: [
      { name: 'British National Curriculum (KS1–KS5)', href: '/curriculum/british', title: 'British National Curriculum KS1 to KS5' },
      { name: 'IB Diploma & MYP Support', href: '/curriculum/ib', title: 'IB Diploma and MYP support' },
    ],
  },
  exams: {
    label: 'Exams',
    links: [
      { name: 'GCSE & IGCSE Boards (AQA, Edexcel, CIE, OxfordAQA)', href: '/curriculum/igcse-boards', title: 'GCSE & IGCSE exam boards' },
      { name: 'A-Level & IB Excellence', href: '/curriculum/alevel-ib', title: 'A-Level and IB excellence' },
      { name: 'Entrance Exams (7+, 11+, 13+)', href: '/curriculum/entrance-exams', title: 'Entrance exams 7+, 11+, 13+' },
    ],
  },
  methodology: {
    label: 'Methodology',
    links: [
      { name: 'Exam Technique & Grade Mastery', href: '/curriculum/exam-technique', title: 'Exam technique and grade mastery' },
    ],
  },
};

/* Main nav: Home, Our Courses, Our Curriculum, About Us, Contact — Enrichment lives inside Our Courses */
const mainNavItems = [
  { name: 'Home', href: '/', title: 'Improve ME Institute Home', hasDropdown: null as null },
  { name: 'Our Courses', href: '/courses', title: 'Our Courses', hasDropdown: 'courses' as const },
  { name: 'Our Curriculum', href: '/curriculum', title: '', hasDropdown: 'curriculum' as const },
  { name: 'About Us', href: '/about', title: 'About Improve ME Institute', hasDropdown: null as null },
  { name: 'Contact', href: '/contact', title: 'Contact us', hasDropdown: null as null },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<'courses' | 'curriculum' | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setMobileAccordion(null);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Dark Blue #002D62 */}
      <div
        className="w-full"
        style={{ backgroundColor: TOP_BAR_BG }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="text-white text-xs sm:text-sm font-medium" aria-label="Location">
            📍 Gold & Diamond Park, Dubai
          </span>
          <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
            Primary: +971-50 185 2505 | Senior: +971-58 547 1457
          </span>
        </div>
      </div>

      {/* Main Nav - White, Sticky, Box Shadow */}
      <nav
        className="w-full bg-white border-b border-gray-200 transition-shadow duration-200"
        style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wrapper so mega menu is full-width and no gap: hover area includes nav row + dropdown */}
          <div
            className="relative"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link
                href="/"
                className="flex-shrink-0 transition-transform hover:scale-105"
                title="Improve ME Institute - Home"
              >
                <Image
                  src="/logo.png"
                  alt="Improve ME Institute"
                  width={185}
                  height={45}
                  priority
                  className="h-9 w-auto"
                />
              </Link>

              {/* Desktop Nav Links — no onMouseLeave on items so menu stays open when moving to dropdown */}
              <div className="hidden lg:flex lg:items-center lg:gap-0.5">
                {mainNavItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.hasDropdown)}
                  >
                    <Link
                      href={item.href}
                      {...(item.title ? { title: item.title } : {})}
                      className={`flex items-center gap-0.5 px-4 py-3 text-sm font-medium rounded-md transition-colors duration-100 ${
                        item.hasDropdown && activeDropdown === item.hasDropdown
                          ? 'text-[#FFC107]'
                          : 'text-navy-900 hover:text-[#FFC107]'
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.hasDropdown ? 'rotate-180' : ''
                          }`}
                          aria-hidden
                        />
                      )}
                    </Link>

                    {/* Our Curriculum DROPDOWN — compact 2-column: Standards + Methodology | Exams */}
                    {item.hasDropdown === 'curriculum' && activeDropdown === 'curriculum' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 pt-2"
                    >
                      <div
                        className="rounded-xl shadow-xl border border-gray-200/80 py-3 px-4 min-w-[320px] backdrop-blur-md"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)' }}
                      >
                        <div className="flex gap-6">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                              {curriculumMega.standards.label}
                            </h4>
                            <ul className="space-y-0.5">
                              {curriculumMega.standards.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    title={link.title}
                                    className="block py-1.5 text-sm text-navy-900 hover:text-[#FFC107] rounded px-0.5 -mx-0.5 hover:bg-gray-50/80 transition-colors"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5 mt-3">
                              {curriculumMega.methodology.label}
                            </h4>
                            <ul className="space-y-0.5">
                              {curriculumMega.methodology.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    title={link.title}
                                    className="block py-1.5 text-sm text-navy-900 hover:text-[#FFC107] rounded px-0.5 -mx-0.5 hover:bg-gray-50/80 transition-colors"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                              {curriculumMega.exams.label}
                            </h4>
                            <ul className="space-y-0.5">
                              {curriculumMega.exams.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    title={link.title}
                                    className="block py-1.5 text-sm text-navy-900 hover:text-[#FFC107] rounded px-0.5 -mx-0.5 hover:bg-gray-50/80 transition-colors"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  </div>
                ))}
              </div>

              {/* CTA - Gold background, Bold black text */}
            <div className="hidden lg:block flex-shrink-0">
              <Link
                href="/contact#assessment"
                title="Book a free assessment with Improve ME Institute"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-black rounded-lg transition-all duration-200 hover:opacity-95 hover:shadow-md"
                style={{ backgroundColor: CTA_GOLD }}
              >
                Book Free Assessment
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-navy-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Our Courses MEGA MENU — compact width, centered, 4 columns, no dividers */}
          {activeDropdown === 'courses' && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 top-full pt-0 flex justify-center"
            >
              <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
                <div
                  className="rounded-2xl shadow-xl border border-gray-200/80 py-3 px-8 sm:px-10 backdrop-blur-md"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)' }}
                >
                  <div className="flex gap-3 lg:gap-4 min-w-0">
                    {/* Column 1: Primary (Ages 3-11) */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                        {coursesMega.primary.columnTitle}
                      </h4>
                      <ul className="space-y-0.5">
                        {coursesMega.primary.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              title={link.title}
                              className="text-sm text-navy-900 hover:text-[#FFC107] transition-colors duration-100 block py-1.5 rounded px-0.5 -mx-0.5 hover:bg-gray-50/80 whitespace-nowrap"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Column 2: Key Stage 3 (Years 7-9) */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                        {coursesMega.ks3.columnTitle}
                      </h4>
                      <ul className="space-y-0.5">
                        {coursesMega.ks3.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              title={link.title}
                              className="text-sm text-navy-900 hover:text-[#FFC107] transition-colors duration-100 block py-1.5 rounded px-0.5 -mx-0.5 hover:bg-gray-50/80 whitespace-nowrap"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Column 3: Exam Success (Years 10-13) — Core, Sciences, Humanities */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                        {coursesMega.examSuccess.columnTitle}
                      </h4>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-navy-700 mb-0.5 mt-3 first:mt-0">
                        {coursesMega.examSuccess.coreLabel}
                      </p>
                      <ul className="space-y-0.5">
                        {coursesMega.examSuccess.core.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              title={link.title}
                              className="text-sm text-navy-900 hover:text-[#FFC107] transition-colors duration-100 block py-1.5 rounded px-0.5 -mx-0.5 hover:bg-gray-50/80 whitespace-nowrap"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-navy-700 mb-0.5 mt-3">
                        {coursesMega.examSuccess.sciencesLabel}
                      </p>
                      <ul className="space-y-0.5">
                        {coursesMega.examSuccess.sciences.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              title={link.title}
                              className="text-sm text-navy-900 hover:text-[#FFC107] transition-colors duration-100 block py-1.5 rounded px-0.5 -mx-0.5 hover:bg-gray-50/80 whitespace-nowrap"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-navy-700 mb-0.5 mt-3">
                        {coursesMega.examSuccess.humanitiesLabel}
                      </p>
                      <ul className="space-y-0.5">
                        {coursesMega.examSuccess.humanities.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              title={link.title}
                              className="text-sm text-navy-900 hover:text-[#FFC107] transition-colors duration-100 block py-1.5 rounded px-0.5 -mx-0.5 hover:bg-gray-50/80 whitespace-nowrap"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Column 4: Enrichment & Skills */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                        {coursesMega.enrichment.columnTitle}
                      </h4>
                      <ul className="space-y-0.5">
                        {coursesMega.enrichment.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              title={link.title}
                              className="text-sm text-navy-900 hover:text-[#FFC107] transition-colors duration-100 block py-1.5 rounded px-0.5 -mx-0.5 hover:bg-gray-50/80 whitespace-nowrap"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Accordions */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
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
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)} title="Improve ME Institute - Home">
                    <Image src="/logo.png" alt="Improve ME Institute" width={150} height={36} className="h-8 w-auto" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-navy-900 hover:bg-gray-100 rounded-lg"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-1" aria-label="Mobile navigation">
                  <Link
                    href="/"
                    title="Improve ME Institute Home"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-2 text-base font-medium text-navy-900 hover:text-[#FFC107] transition-colors rounded-lg"
                  >
                    Home
                  </Link>

                  {/* Our Courses Accordion — Primary | KS3 | Exam Success (10-13) | Enrichment */}
                  <div className="border-b border-gray-100">
                    <button
                      type="button"
                      onClick={() => setMobileAccordion(mobileAccordion === 'courses' ? null : 'courses')}
                      className="flex items-center justify-between w-full py-3 px-2 text-base font-medium text-navy-900 hover:text-[#FFC107] transition-colors rounded-lg"
                      aria-expanded={mobileAccordion === 'courses'}
                      aria-controls="mobile-courses"
                      id="mobile-courses-btn"
                    >
                      Our Courses
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${mobileAccordion === 'courses' ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      id="mobile-courses"
                      role="region"
                      aria-labelledby="mobile-courses-btn"
                      className="overflow-hidden"
                    >
                      <AnimatePresence>
                        {mobileAccordion === 'courses' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 pb-4 space-y-3"
                          >
                            <p className="text-xs font-bold uppercase tracking-wider text-navy-900 mt-2 mb-1">
                              {coursesMega.primary.columnTitle}
                            </p>
                            {coursesMega.primary.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                title={link.title}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-navy-700 hover:text-[#FFC107] transition-colors"
                              >
                                {link.name}
                              </Link>
                            ))}
                            <p className="text-xs font-bold uppercase tracking-wider text-navy-900 mt-4 mb-1">
                              {coursesMega.ks3.columnTitle}
                            </p>
                            {coursesMega.ks3.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                title={link.title}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-navy-700 hover:text-[#FFC107] transition-colors"
                              >
                                {link.name}
                              </Link>
                            ))}
                            <p className="text-xs font-bold uppercase tracking-wider text-navy-900 mt-4 mb-1">
                              {coursesMega.examSuccess.columnTitle}
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-navy-700 mt-2 mb-1">
                              {coursesMega.examSuccess.coreLabel}
                            </p>
                            {coursesMega.examSuccess.core.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                title={link.title}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-navy-700 hover:text-[#FFC107] transition-colors"
                              >
                                {link.name}
                              </Link>
                            ))}
                            <p className="text-[10px] font-bold uppercase tracking-wider text-navy-700 mt-3 mb-1">
                              {coursesMega.examSuccess.sciencesLabel}
                            </p>
                            {coursesMega.examSuccess.sciences.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                title={link.title}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-navy-700 hover:text-[#FFC107] transition-colors"
                              >
                                {link.name}
                              </Link>
                            ))}
                            <p className="text-[10px] font-bold uppercase tracking-wider text-navy-700 mt-3 mb-1">
                              {coursesMega.examSuccess.humanitiesLabel}
                            </p>
                            {coursesMega.examSuccess.humanities.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                title={link.title}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-navy-700 hover:text-[#FFC107] transition-colors"
                              >
                                {link.name}
                              </Link>
                            ))}
                            <p className="text-xs font-bold uppercase tracking-wider text-navy-900 mt-4 mb-1">
                              {coursesMega.enrichment.columnTitle}
                            </p>
                            {coursesMega.enrichment.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                title={link.title}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-navy-700 hover:text-[#FFC107] transition-colors"
                              >
                                {link.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Our Curriculum Accordion — increased vertical spacing */}
                  <div className="border-b border-gray-100">
                    <button
                      type="button"
                      onClick={() => setMobileAccordion(mobileAccordion === 'curriculum' ? null : 'curriculum')}
                      className="flex items-center justify-between w-full py-3 px-2 text-base font-medium text-navy-900 hover:text-[#FFC107] transition-colors rounded-lg"
                      aria-expanded={mobileAccordion === 'curriculum'}
                      aria-controls="mobile-curriculum"
                      id="mobile-curriculum-btn"
                    >
                      Our Curriculum
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${mobileAccordion === 'curriculum' ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div id="mobile-curriculum" role="region" aria-labelledby="mobile-curriculum-btn" className="overflow-hidden">
                      <AnimatePresence>
                        {mobileAccordion === 'curriculum' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 pb-4 space-y-3"
                          >
                            <p className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mt-2 mb-1">
                              {curriculumMega.standards.label}
                            </p>
                            {curriculumMega.standards.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                title={link.title}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-navy-700 hover:text-[#FFC107] transition-colors"
                              >
                                {link.name}
                              </Link>
                            ))}
                            <p className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mt-4 mb-1">
                              {curriculumMega.exams.label}
                            </p>
                            {curriculumMega.exams.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                title={link.title}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-navy-700 hover:text-[#FFC107] transition-colors"
                              >
                                {link.name}
                              </Link>
                            ))}
                            <p className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mt-4 mb-1">
                              {curriculumMega.methodology.label}
                            </p>
                            {curriculumMega.methodology.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                title={link.title}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-navy-700 hover:text-[#FFC107] transition-colors"
                              >
                                {link.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <Link
                    href="/about"
                    title="About Improve ME Institute"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-2 text-base font-medium text-navy-900 hover:text-[#FFC107] transition-colors rounded-lg"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    title="Contact us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-2 text-base font-medium text-navy-900 hover:text-[#FFC107] transition-colors rounded-lg"
                  >
                    Contact
                  </Link>
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/contact#assessment"
                    title="Book a free assessment"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-black rounded-lg transition-all hover:opacity-95"
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
