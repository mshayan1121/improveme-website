'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 5000, suffix: '+', label: 'Students' },
  { value: 200, suffix: '+', label: 'Schools' },
  { value: 10000, suffix: '+', label: 'Hours' },
  { value: 20, suffix: '+', label: 'Subjects' },
];

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const duration = 1500;
  const steps = 60;
  const increment = value / steps;
  const stepDuration = duration / steps;

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isInView, value, increment, stepDuration]);

  const formatted = value >= 10000 ? display.toLocaleString() : display.toString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      ref={ref}
      className="w-full bg-[#1e3a8a] py-12 md:py-16 overflow-hidden"
    >
      <div className="section-container py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center ${
                index < stats.length - 1 ? 'lg:border-r lg:border-yellow-400/50 lg:border-solid' : ''
              }`}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <p className="text-yellow-400 font-semibold text-sm md:text-base tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
