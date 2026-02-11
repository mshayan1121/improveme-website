'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Users,
  Calendar,
  Star,
  Calculator,
  Atom,
  BookOpen,
  Award,
} from 'lucide-react';

const HomeHero = () => {
  const stats = [
    { icon: Users, value: '1,000+', label: 'Students Yearly' },
    { icon: Calendar, value: 'Est. 2010', label: '' },
    { icon: Star, value: '4.8★', label: '206 Google Reviews' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8 + i * 0.2, duration: 0.4 },
    }),
  };

  return (
    <section className="relative py-20 md:py-24 overflow-hidden chevron-pattern noise-texture bg-gradient-to-br from-gray-50 to-white">
      {/* Decorative blurs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative section-container w-full">
        <div className="grid lg:grid-cols-[60%_40%] gap-8 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* 1. Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
              Tutoring Centre in Dubai for Ages 3–18
            </h1>

            {/* 2. Description */}
            <p className="text-lg md:text-xl text-navy-700 max-w-2xl">
              KHDA-approved tutoring centre in Dubai for ages 3–18. Since 2010, we've helped students from 30+ schools — including Dubai College, Repton, and JESS — achieve stronger results across GCSE, IGCSE, A-Level, and IB.
            </p>

            {/* 3. Stats Badges */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
              {stats.map((stat) => (
                <div
                  key={stat.label || stat.value}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3 shadow-sm"
                >
                  <stat.icon className="w-5 h-5 text-navy-600 shrink-0" />
                  <div>
                    <span className="block font-bold text-navy-900 text-sm">
                      {stat.value}
                    </span>
                    {stat.label && (
                      <span className="block text-xs text-navy-600">
                        {stat.label}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 4. CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact#assessment"
                className="btn btn-primary px-6 py-3 text-base inline-flex items-center justify-center gap-2 group"
              >
                Book Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/courses"
                className="btn btn-outline px-6 py-3 text-base inline-flex items-center justify-center gap-2"
              >
                Explore Courses
              </Link>
            </div>

            {/* 5. Trust Indicator */}
            <p className="text-sm text-navy-600">
              Trusted by families from Dubai College, Repton, JESS, Kings, and 30+ schools across Dubai.
            </p>
          </motion.div>

          {/* RIGHT COLUMN - Subject Cards (desktop only) */}
          <div className="hidden lg:grid grid-cols-2 gap-3 max-w-md w-full mx-auto">
            {/* Card 1 - Mathematics */}
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col p-4 rounded-xl shadow-lg bg-gradient-to-br from-navy-600 to-navy-700 aspect-square transition-transform overflow-hidden"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                <Calculator className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1 line-clamp-1">
                Mathematics
              </h3>
              <p className="text-xs text-white/80 mb-auto line-clamp-2">All levels</p>
              <Link
                href="/courses/mathematics"
                className="inline-flex items-center gap-1 text-xs text-yellow-400 mt-3 font-medium hover:gap-2 transition-all w-fit"
              >
                Learn More
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            {/* Card 2 - English */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col p-4 rounded-xl shadow-lg bg-white border border-gray-200 aspect-square transition-transform overflow-hidden"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-600 to-navy-700 flex items-center justify-center mb-3">
                <BookOpen className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-sm font-semibold text-navy-900 mb-1 line-clamp-1">English</h3>
              <p className="text-xs text-navy-600 mb-auto line-clamp-2">
                Language & Literature
              </p>
              <Link
                href="/courses/english"
                className="inline-flex items-center gap-1 text-xs text-navy-600 mt-3 font-medium hover:gap-2 transition-all w-fit"
              >
                Learn More
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            {/* Card 3 - Sciences */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col p-4 rounded-xl shadow-lg bg-white border border-gray-200 aspect-square transition-transform overflow-hidden"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mb-3">
                <Atom className="w-5 h-5 text-navy-900" />
              </div>
              <h3 className="text-sm font-semibold text-navy-900 mb-1 line-clamp-1">Sciences</h3>
              <p className="text-xs text-navy-600 mb-auto line-clamp-2">
                Physics, Chemistry, Biology
              </p>
              <Link
                href="/courses/science"
                className="inline-flex items-center gap-1 text-xs text-navy-600 mt-3 font-medium hover:gap-2 transition-all w-fit"
              >
                Learn More
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            {/* Card 4 - 12+ Subjects */}
            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col justify-between p-4 rounded-xl shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500 aspect-square transition-transform overflow-hidden"
            >
              <div className="flex justify-start">
                <Award className="w-8 h-8 text-navy-900" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy-900 mb-1 line-clamp-1">12+ Subjects</h3>
                <p className="text-xs text-navy-900/80 mb-auto line-clamp-2">Business, Economics & more</p>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-1 text-xs text-navy-900 mt-3 font-medium hover:gap-2 transition-all w-fit"
                >
                  Explore All
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomeHero;
