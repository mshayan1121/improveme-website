'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Target, Clock, GraduationCap } from 'lucide-react';

const stats = [
  { Icon: Users, number: 'Max 6', label: 'per group' },
  { Icon: Target, number: '2-3', label: 'average class size' },
  { Icon: Clock, number: '54,000+', label: 'teaching hours yearly' },
  { Icon: GraduationCap, number: '40+', label: 'specialist tutors' },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      ref={ref}
      className="w-full bg-gradient-to-r from-navy-600 to-navy-700 py-10 overflow-hidden"
    >
      <div className="section-container py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <stat.Icon className="w-8 h-8 text-yellow-400 mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <p className="text-yellow-400 text-xs md:text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
