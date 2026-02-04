'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TOP_BAR_BG = '#002D62';
const CTA_GOLD = '#FFC107';

/* Our Courses: 3-column mega menu */
const coursesMega = {
  primary: {
    title: 'Primary',
    links: [
      { name: 'Primary Mathematics', href: '/courses/primary-mathematics', title: 'Primary Mathematics tutoring at Improve ME Institute' },
      { name: 'Primary English & Phonics', href: '/courses/primary-english', title: 'Primary English and Phonics tutoring' },
      { name: 'Primary Science', href: '/courses/primary-science', title: 'Primary Science tutoring' },
      { name: '7+/11+ Entrance Exam Prep', href: '/courses/entrance-exam-prep', title: '7+ and 11+ entrance exam preparation' },
    ],
  },
  secondaryStages: {
    title: 'Secondary Stages',
    links: [
      { name: 'Foundation (Years 7-9)', href: '/courses/foundation', title: 'Foundation stage tutoring Years 7-9' },
      { name: 'GCSE / IGCSE Mastery', href: '/courses/gcse-igcse', title: 'GCSE and IGCSE exam mastery' },
      { name: 'A-Level / IB Excellence', href: '/courses/a-level-ib', title: 'A-Level and IB Diploma tutoring' },
    ],
  },
  specialist: {
    title: 'Specialist Subjects',
    links: [
      { name: 'Secondary Mathematics', href: '/courses/secondary-mathematics', title: 'Secondary Mathematics tutoring' },
      { name: 'English Language & Lit', href: '/courses/secondary-english', title: 'English Language and Literature' },
      { name: 'The Sciences (Physics, Chemistry, Biology)', href: '/courses/sciences', title: 'Physics, Chemistry and Biology tutoring' },
      { name: 'Business & Economics', href: '/courses/business-economics', title: 'Business and Economics tutoring' },
      { name: 'Psychology', href: '/courses/psychology', title: 'Psychology tutoring' },
    ],
  },
};

/* Our Curriculum: standards-focused dropdown */
const curriculumLinks = [
  { name: 'British National Curriculum (KS1-KS5)', href: '/curriculum/british', title: 'British National Curriculum KS1 to KS5' },
  { name: 'IGCSE Boards (AQA, Edexcel, CIE)', href: '/curriculum/igcse-boards', title: 'IGCSE exam boards AQA Edexcel CIE' },
  { name: 'IB Diploma & MYP Support', href: '/curriculum/ib', title: 'IB Diploma and MYP support' },
  { name: 'Exam Technique & Mastery', href: '/curriculum/exam-technique', title: 'Exam technique and mastery' },
];

/* Enrichment: skills-focused dropdown */
const enrichmentLinks = [
  { name: 'CAT Prep (Cognitive Abilities)', href: '/enrichment/cat-prep', title: 'Cognitive Abilities Test preparation' },
  { name: 'Chess Mastery', href: '/enrichment/chess', title: 'Chess tutoring and mastery' },
  { name: 'Financial Literacy', href: '/enrichment/financial-literacy', title: 'Financial literacy for students' },
  { name: 'AI & Tech Literacy', href: '/enrichment/ai-tech', title: 'AI and technology literacy' },
];

const mainNavItems = [
  { name: 'Home', href: '/', title: 'Improve ME Institute Home' },
  { name: 'Our Courses', href: '/courses', title: 'Our Courses', hasDropdown: 'courses' as const },
  { name: 'Our Curriculum', href: '/curriculum', title: 'Our Curriculum', hasDropdown: 'curriculum' as const },
  { name: 'Enrichment', href: '/enrichment', title: 'Enrichment programs', hasDropdown: 'enrichment' as const },
  { name: 'About Us', href: '/about', title: 'About Improve ME Institute' },
  { name: 'Contact', href: '/contact', title: 'Contact us' },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<'courses' | 'curriculum' | 'enrichment' | null>(null);

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

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex lg:items-center lg:gap-0.5">
              {mainNavItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.hasDropdown)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    title={item.title}
                    className={`flex items-center gap-0.5 px-4 py-3 text-sm font-medium rounded-md transition-colors ${
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

                  {/* Our Courses MEGA MENU */}
                  {item.hasDropdown === 'courses' && activeDropdown === 'courses' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-0 pt-2"
                    >
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-6 px-6 min-w-[640px] flex gap-8">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-navy-600 uppercase tracking-wider mb-3">
                            {coursesMega.primary.title}
                          </p>
                          <ul className="space-y-2">
                            {coursesMega.primary.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  title={link.title}
                                  className="text-sm text-navy-900 hover:text-[#FFC107] transition-colors block py-1"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex-1 min-w-0 border-l border-gray-200 pl-6">
                          <p className="text-xs font-semibold text-navy-600 uppercase tracking-wider mb-3">
                            {coursesMega.secondaryStages.title}
                          </p>
                          <ul className="space-y-2">
                            {coursesMega.secondaryStages.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  title={link.title}
                                  className="text-sm text-navy-900 hover:text-[#FFC107] transition-colors block py-1"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex-1 min-w-0 border-l border-gray-200 pl-6">
                          <p className="text-xs font-semibold text-navy-600 uppercase tracking-wider mb-3">
                            {coursesMega.specialist.title}
                          </p>
                          <ul className="space-y-2">
                            {coursesMega.specialist.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  title={link.title}
                                  className="text-sm text-navy-900 hover:text-[#FFC107] transition-colors block py-1"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Our Curriculum DROPDOWN */}
                  {item.hasDropdown === 'curriculum' && activeDropdown === 'curriculum' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 pt-2"
                    >
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-3 min-w-[280px]">
                        <ul className="space-y-0.5 px-2">
                          {curriculumLinks.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                title={link.title}
                                className="block px-3 py-2.5 text-sm text-navy-900 hover:text-[#FFC107] rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {/* Enrichment DROPDOWN */}
                  {item.hasDropdown === 'enrichment' && activeDropdown === 'enrichment' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 pt-2"
                    >
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-3 min-w-[260px]">
                        <ul className="space-y-0.5 px-2">
                          {enrichmentLinks.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                title={link.title}
                                className="block px-3 py-2.5 text-sm text-navy-900 hover:text-[#FFC107] rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
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

                  {/* Our Courses Accordion */}
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
                            className="pl-4 pb-3 space-y-1"
                          >
                            <p className="text-xs font-semibold text-navy-600 uppercase tracking-wider mt-2 mb-1">
                              Primary
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
                            <p className="text-xs font-semibold text-navy-600 uppercase tracking-wider mt-3 mb-1">
                              Secondary Stages
                            </p>
                            {coursesMega.secondaryStages.links.map((link) => (
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
                            <p className="text-xs font-semibold text-navy-600 uppercase tracking-wider mt-3 mb-1">
                              Specialist Subjects
                            </p>
                            {coursesMega.specialist.links.map((link) => (
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

                  {/* Our Curriculum Accordion */}
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
                            className="pl-4 pb-3 space-y-0.5"
                          >
                            {curriculumLinks.map((link) => (
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

                  {/* Enrichment Accordion */}
                  <div className="border-b border-gray-100">
                    <button
                      type="button"
                      onClick={() => setMobileAccordion(mobileAccordion === 'enrichment' ? null : 'enrichment')}
                      className="flex items-center justify-between w-full py-3 px-2 text-base font-medium text-navy-900 hover:text-[#FFC107] transition-colors rounded-lg"
                      aria-expanded={mobileAccordion === 'enrichment'}
                      aria-controls="mobile-enrichment"
                      id="mobile-enrichment-btn"
                    >
                      Enrichment
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${mobileAccordion === 'enrichment' ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div id="mobile-enrichment" role="region" aria-labelledby="mobile-enrichment-btn" className="overflow-hidden">
                      <AnimatePresence>
                        {mobileAccordion === 'enrichment' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 pb-3 space-y-0.5"
                          >
                            {enrichmentLinks.map((link) => (
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
