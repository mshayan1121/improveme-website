'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, BookOpen, Award } from 'lucide-react';

const HomeHero = () => {
  const stats = [
    { icon: Users, label: '5000+ Students', value: '5000+' },
    { icon: BookOpen, label: '200+ Schools', value: '200+' },
    { icon: Award, label: '20+ Subjects', value: '20+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with chevron pattern */}
      <div className="absolute inset-0 chevron-pattern noise-texture bg-gradient-to-br from-gray-50 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

      <div className="relative section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-navy-900 shadow-sm"
            >
              <MapPin className="w-4 h-4 text-red-500" />
              Gold & Diamond Park, Dubai
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-balance"
              >
                Leading Tutoring Center{' '}
                <span className="gradient-text-energy">in Dubai</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-navy-700 leading-relaxed max-w-xl"
              >
                Exceptional afterschool tutoring programs for primary and secondary students. 
                Personalized academic support across all major subjects, delivered by certified tutors.
              </motion.p>
            </div>

            {/* Stats Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm"
                >
                  <stat.icon className="w-5 h-5 text-navy-600" />
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{stat.value}</p>
                    <p className="text-xs text-navy-600">{stat.label.split(' ')[1]}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact#assessment"
                className="btn btn-primary px-8 py-4 text-base group"
              >
                Book Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/courses"
                className="btn btn-outline px-8 py-4 text-base"
              >
                Explore Courses
              </Link>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 text-sm text-navy-600"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-navy-600 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-navy-600 border-2 border-white" />
              </div>
              <p>
                <span className="font-semibold text-navy-900">Trusted by families</span> from 200+ schools across Dubai
              </p>
            </motion.div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            {/* Floating Subject Cards */}
            <div className="relative w-full h-[600px]">
              {/* Main card - Mathematics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="absolute top-10 right-10 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 cursor-pointer"
              >
                <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Mathematics</h3>
                <p className="text-sm text-navy-600">From EYFS to A-Levels</p>
              </motion.div>

              {/* Secondary card - Science */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute top-40 left-0 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 cursor-pointer"
              >
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Sciences</h3>
                <p className="text-sm text-navy-600">Physics, Chemistry, Biology</p>
              </motion.div>

              {/* Tertiary card - English */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="absolute bottom-32 right-20 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 cursor-pointer"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">English</h3>
                <p className="text-sm text-navy-600">Language & Literature</p>
              </motion.div>

              {/* Accent card - More */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-10 left-10 w-48 bg-gradient-to-br from-navy-600 to-navy-700 rounded-2xl shadow-xl p-6 cursor-pointer text-white"
              >
                <p className="text-sm font-medium mb-2">And many more...</p>
                <p className="text-3xl font-bold">20+</p>
                <p className="text-sm opacity-90">Subjects offered</p>
              </motion.div>

              {/* Decorative chevrons */}
              <svg
                className="absolute -top-10 -right-10 w-32 h-32 text-yellow-400/20"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M 10 50 L 50 10 L 90 50 L 50 30 Z" />
              </svg>
              
              <svg
                className="absolute -bottom-10 -left-10 w-40 h-40 text-red-500/10"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M 10 50 L 50 10 L 90 50 L 50 30 Z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-navy-600">
          <p className="text-xs uppercase tracking-wider">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-navy-600 rounded-full p-1"
          >
            <div className="w-1.5 h-3 bg-navy-600 rounded-full mx-auto" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
