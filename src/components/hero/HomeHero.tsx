'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Users,
  Calendar,
  Star,
  CheckCircle2,
} from 'lucide-react';

const HomeHero = () => {
  const stats = [
    { icon: Users, value: '1,000+', label: 'Students Yearly' },
    { icon: Calendar, value: 'Est. 2010', label: '' },
    { icon: Star, value: '4.8★', label: '206 Google Reviews' },
  ];


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
              KHDA-approved tutoring centre in Dubai for ages 3–18. Since 2010, we&apos;ve helped students from 30+ schools — including Dubai College, Repton, and JESS — achieve stronger results across GCSE, IGCSE, A-Level, and IB.
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

          {/* RIGHT COLUMN - Hero Image with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Study Image */}
            <Image
              src="/jason class2.jpg"
              alt="Students learning in small groups at Improve ME Institute, Dubai"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            
            {/* Floating Badge - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur shadow-lg p-4 rounded-xl flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-navy-900 text-sm">Trusted by</p>
                <p className="text-navy-700 text-xs">1,000+ Families</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HomeHero;
