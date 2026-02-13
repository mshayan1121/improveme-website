'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, PanInfo } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'A.S.',
    role: 'Parent, Year 1 & FS2',
    quote:
      'My son\'s school has noticed a big improvement in his maths, which was one of my main concerns. The kids wouldn\'t stop asking, \'Mama, when are we going back to that cool place?\'',
    rating: 5,
  },
  {
    name: 'Veronica',
    role: 'Parent, Year 10',
    quote:
      'In just weeks, my son was moved to the highest maths set at school and secured 2nd place in two consecutive advanced exams. The difference has been extraordinary.',
    rating: 5,
  },
  {
    name: 'Umika',
    role: 'Student, MYP Chemistry',
    quote:
      'I truly struggled in MYP Chemistry and was scoring low marks. After joining Improve ME, my grade went from a 3 to a 6 out of 7.',
    rating: 5,
  },
];

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?kgmid=/g/11c54bkv6t&hl=en-AE&q=Improve+ME+Institute&shem=sumc,shrtsdl&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=16f1ab0c03232984&utm_source=sumc,shrtsdl,sh/x/loc/osrp/m5/1';

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (typeof window === 'undefined') return;
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerView(3); // Desktop: 3 cards
      } else if (width >= 768) {
        setItemsPerView(2); // Tablet: 2 cards
      } else {
        setItemsPerView(1); // Mobile: 1 card
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);
  const goTo = useCallback(
    (index: number) => setCurrent(Math.max(0, Math.min(index, maxIndex))),
    [maxIndex]
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(
      () => setCurrent((p) => (p >= maxIndex ? 0 : p + 1)),
      6000
    );
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const visible = testimonials
    .slice(current, current + itemsPerView)
    .concat(
      current + itemsPerView > testimonials.length
        ? testimonials.slice(0, current + itemsPerView - testimonials.length)
        : []
    );

  const x = useMotionValue(0);
  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) goTo(Math.max(0, current - 1));
    else if (info.offset.x < -threshold) goTo(Math.min(maxIndex, current + 1));
  };

  return (
    <section className="relative overflow-hidden bg-gray-100/80 py-10 md:py-14">
      <div className="section-container">
        {/* Header: Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            What Parents Say
          </h2>
          
          {/* Google Rating Badge - Prominently displayed */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white rounded-xl border border-gray-200 shadow-md px-5 py-4 hover:shadow-lg hover:border-yellow-400 transition-all w-fit mx-auto"
          >
            {/* Google logo (simplified G colors) */}
            <svg
              className="w-10 h-10 shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-navy-900">4.9</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-navy-600 text-sm mt-1 font-medium">Google Rating</p>
              <p className="text-navy-500 text-xs mt-0.5">Based on 206+ reviews</p>
            </div>
          </a>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-stretch gap-4 overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-5 w-full justify-center flex-wrap lg:flex-nowrap"
              drag={itemsPerView === 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={onDragEnd}
              style={{ x: itemsPerView === 1 ? x : 0 }}
            >
              {visible.map((testimonial, i) => (
                <motion.div
                  key={`${testimonial.name}-${current}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className={`flex-[1_1_100%] ${
                    itemsPerView === 2 ? 'md:flex-[1_1_calc(50%-0.5rem)]' : ''
                  } ${
                    itemsPerView === 3 ? 'lg:flex-[1_1_calc(33.333%-1rem)]' : ''
                  } max-w-md mx-auto lg:mx-0 min-w-0 flex`}
                >
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200/80 p-4 md:p-5 h-full flex flex-col w-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400 shrink-0"
                        />
                      ))}
                    </div>
                    <blockquote className="text-navy-700 text-lg leading-relaxed mb-4 flex-1">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div>
                      <p className="font-semibold text-navy-900">{testimonial.name}</p>
                      <p className="text-sm text-navy-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows - Always visible */}
          {testimonials.length > itemsPerView && (
            <>
              <button
                type="button"
                onClick={() => goTo(Math.max(0, current - 1))}
                disabled={current === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-navy-600 hover:bg-gray-50 hover:border-yellow-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                type="button"
                onClick={() => goTo(Math.min(maxIndex, current + 1))}
                disabled={current >= maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-navy-600 hover:bg-gray-50 hover:border-yellow-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === current
                    ? 'bg-yellow-400 w-6'
                    : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
