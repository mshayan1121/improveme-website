'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type DropdownSection = { section: string; items: { name: string; href: string }[] };

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Navigation structure
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      {
        name: 'Our Courses',
        href: '/courses',
        dropdown: [
          {
            section: 'Primary (Age 3-11)',
            items: [
              { name: 'Mathematics', href: '/courses/primary-mathematics' },
              { name: 'English', href: '/courses/primary-english' },
              { name: 'Science', href: '/courses/primary-science' },
            ],
          },
          {
            section: 'Secondary (Age 11-18)',
            items: [
              { name: 'Mathematics', href: '/courses/secondary-mathematics' },
              { name: 'Physics', href: '/courses/secondary-physics' },
              { name: 'Chemistry', href: '/courses/secondary-chemistry' },
              { name: 'Biology', href: '/courses/secondary-biology' },
              { name: 'English', href: '/courses/secondary-english' },
              { name: 'Business Studies', href: '/courses/secondary-business' },
              { name: 'Economics', href: '/courses/secondary-economics' },
              { name: 'Psychology', href: '/courses/secondary-psychology' },
            ],
          },
          {
            section: 'Special Programs',
            items: [
              { name: 'Chess', href: '/courses/chess' },
            ],
          },
        ],
      },
      {
        name: 'Our Curriculum',
        href: '/curriculum',
        dropdown: [
          { name: 'EYFS (Age 3-5)', href: '/curriculum/eyfs' },
          { name: 'Key Stage 1 (Ages 5-7)', href: '/curriculum/ks1' },
          { name: 'Key Stage 2 (Ages 7-11)', href: '/curriculum/ks2' },
          { name: 'Key Stage 3 (Ages 11-14)', href: '/curriculum/ks3' },
          { name: 'IGCSE/GCSE/MYP (Ages 14-16)', href: '/curriculum/igcse' },
          { name: 'A Levels/IB Diploma (Ages 16-18)', href: '/curriculum/a-levels' },
        ],
      },
      { name: 'About Us', href: '/about' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <Image
              src="/logo.png"
              alt="Improve ME Institute"
              width={185}
              height={45}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.main.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="group px-4 py-2 text-sm font-medium text-navy-900 hover:text-navy-600 transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 glass rounded-lg shadow-xl py-2"
                  >
                    {item.dropdown.length > 0 && 'section' in item.dropdown[0] ? (
                      // Courses dropdown (grouped sections)
                      (item.dropdown as DropdownSection[]).map((section) => (
                        <div key={section.section} className="px-4 py-2">
                          <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide mb-1">
                            {section.section}
                          </p>
                          {section.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-1 text-sm text-navy-900 hover:text-red-500 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))
                    ) : (
                      // Curriculum dropdown (simple list)
                      (item.dropdown as { name: string; href: string }[]).map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-navy-900 hover:bg-gray-100 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/contact#assessment"
              className="btn btn-primary px-6 py-3 text-sm"
            >
              Book Free Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-navy-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <Image
                  src="/logo.png"
                  alt="Improve ME Institute"
                  width={150}
                  height={36}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-navy-900 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-4">
                {navigation.main.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium text-navy-900 hover:text-red-500 transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.length > 0 && 'section' in item.dropdown[0] ? (
                          (item.dropdown as DropdownSection[]).map((section) => (
                            <div key={section.section} className="mb-3">
                              <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide mb-1">
                                {section.section}
                              </p>
                              {section.items?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block text-sm text-navy-700 hover:text-red-500 transition-colors py-1"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          ))
                        ) : (
                          (item.dropdown as { name: string; href: string }[]).map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-sm text-navy-700 hover:text-red-500 transition-colors py-1"
                            >
                              {subItem.name}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  href="/contact#assessment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-primary w-full justify-center px-6 py-4 text-base"
                >
                  Book Free Assessment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
          style={{ zIndex: -1 }}
        />
      )}
    </header>
  );
};

export default Header;
