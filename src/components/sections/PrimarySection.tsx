'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calculator, BookOpen, Atom, ArrowRight } from 'lucide-react';

const subjectCards = [
  {
    Icon: Calculator,
    name: 'Mathematics',
    description: 'Foundation to advanced problem-solving',
    bgClass: 'bg-gradient-to-br from-navy-600 to-navy-700',
    iconContainerClass: 'bg-white/10 backdrop-blur rounded-xl',
    iconColorClass: 'text-yellow-400',
    titleClass: 'text-white',
    descClass: 'text-white/80',
    ctaClass: 'text-yellow-400',
    ctaIconClass: 'text-yellow-400',
  },
  {
    Icon: BookOpen,
    name: 'English Language',
    description: 'Reading, writing, and communication',
    bgClass: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
    iconContainerClass: 'bg-navy-900/10 backdrop-blur rounded-xl',
    iconColorClass: 'text-navy-900',
    titleClass: 'text-navy-900',
    descClass: 'text-navy-900/80',
    ctaClass: 'text-navy-900',
    ctaIconClass: 'text-navy-900',
  },
  {
    Icon: Atom,
    name: 'Science',
    description: 'Explore the natural world',
    bgClass: 'bg-white border border-gray-200',
    iconContainerClass: 'bg-yellow-100 rounded-xl',
    iconColorClass: 'text-yellow-500',
    titleClass: 'text-navy-900',
    descClass: 'text-navy-600',
    ctaClass: 'text-navy-600',
    ctaIconClass: 'text-navy-600',
  },
];

export default function PrimarySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gray-50 py-10 md:py-14 noise-texture"
    >
      <div className="section-container">
        {/* Heading + intro (centered, max-w-3xl) */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-navy-900 mb-4"
          >
            Primary <span className="gradient-text-warmth">(Age 3-11)</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-navy-700 text-lg leading-relaxed"
          >
            Our early years foundation program nurtures curiosity and builds
            confidence. We create a supportive environment where young learners
            develop essential skills through engaging, age-appropriate activities.
          </motion.p>
        </div>

        {/* Grid of 3 subject cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {subjectCards.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className={`rounded-2xl shadow-xl p-4 md:p-5 cursor-pointer ${subject.bgClass}`}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center mb-4 ${subject.iconContainerClass}`}
              >
                <subject.Icon
                  className={`w-10 h-10 ${subject.iconColorClass}`}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className={`text-2xl font-bold mb-2 ${subject.titleClass}`}
              >
                {subject.name}
              </h3>
              <p className={`text-sm mb-4 ${subject.descClass}`}>
                {subject.description}
              </p>
              <Link
                href={`/courses/primary#${subject.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`inline-flex items-center gap-2 text-sm font-medium ${subject.ctaClass}`}
              >
                Learn More
                <ArrowRight className={`w-4 h-4 ${subject.ctaIconClass}`} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
