'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  BookOpen,
  TrendingUp,
  Building,
  GraduationCap,
  Lightbulb,
  Target,
  Star,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function AboutContent() {
  return (
    <>
      {/* BREADCRUMBS */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item" className="text-navy-600 hover:text-navy-900" aria-label="Go to Home">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-navy-900 font-medium">About Us</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-navy-600 to-navy-800 chevron-pattern">
        <div className="absolute inset-0 opacity-10 chevron-pattern" />
        <div className="relative section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              About Improve ME Institute
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Building confident, future-ready students since 2010
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Family-run, KHDA-approved tutoring centre in Dubai, dedicated to helping students from ages 3–18 achieve stronger academic results and develop essential life skills.
            </p>
            
            {/* Stats Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
              {[
                { value: "1,000+", label: "Students Yearly" },
                { value: "40+", label: "Specialist Tutors" },
                { value: "15 Years", label: "In Education" },
                { value: "4.8★", label: "Google Rating" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE */}
      <section className="py-14 md:py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                Who We Are
              </h2>
              <div className="space-y-4 text-base md:text-lg text-navy-700 leading-relaxed">
                <p>
                  Improve ME Institute is a KHDA-approved education provider in Dubai, supporting students from FS1 to Year 13 across primary and secondary education.
                </p>
                <p>We offer:</p>
                <ul className="space-y-3 ml-6 list-disc">
                  <li>
                    Structured tutoring in Maths, English, and Sciences aligned to UK curriculum — EYFS, Key Stage 1, Key Stage 2, Key Stage 3, GCSE, IGCSE, A-Level, and IB
                  </li>
                  <li>
                    Small group sessions with a maximum of 6 students per class (average 2–3 students)
                  </li>
                  <li>
                    Future-ready skills programmes including Financial Literacy, Chess Mastery, CAT4 Test Preparation, and AI Literacy
                  </li>
                  <li>
                    A dedicated 7,000 sq ft teaching facility in Gold and Diamond Park with UK-themed classrooms designed to inspire and engage young learners
                  </li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-navy-600 italic border-l-4 border-yellow-400 pl-4">
                Trusted by families from 30+ schools across Dubai including Dubai College, Repton, Jumeirah College, JESS, and Kings.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/jason class2.jpg"
                alt="Students learning in small groups at Improve ME Institute, Dubai"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR STORY (FOUNDER'S MESSAGE) */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              A Message From Our Founder
            </h2>
            
            {/* Founder Photo */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/Neeta Daswani professional.jpeg"
                  alt="Neeta Daswani, Founder of Improve ME Institute"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
              <p className="font-semibold text-navy-900 mt-4 text-lg">Neeta Daswani</p>
              <p className="text-navy-600">Founder, Improve ME Institute</p>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-medium text-navy-800 italic leading-relaxed border-l-4 border-yellow-400 pl-6 text-left">
              &ldquo;For over thirty years, I have dedicated my career to helping students learn better and achieve outstanding results. Improve ME Institute was built on the same promise: raise standards, build future-ready skills, and support every child to thrive in the real world.&rdquo;
            </blockquote>

            {/* Body Copy */}
            <div className="space-y-4 text-base md:text-lg text-navy-700 leading-relaxed text-left">
              <p>
                Today, we stand strong with 40 faculty members and over 1,000 students enrolled annually, as we combine high-quality tutoring, life-skills programmes, and proven teaching methods to improve student attainment.
              </p>
              <p>
                I am especially proud that the next generation of my family has joined this mission. My sons, Shaun and Jason, now lead our Secondary Department, bringing fresh perspectives and deep expertise to serve families across Dubai.
              </p>
              <p>
                We are excited to support your child&apos;s academic journey and help them reach their full potential.
              </p>
            </div>

            {/* Signature */}
            <div className="text-left pt-4">
              <p className="font-bold text-navy-900 text-lg">Neeta Daswani</p>
              <p className="text-navy-600">Founder, Improve ME Institute</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: MEET THE LEADERSHIP TEAM */}
      <section className="py-14 md:py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-navy-700">
              A family-run institute with three generations of educational expertise, led by experienced educators who are passionate about student success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Shaun Daswani",
                title: "Secondary Department Lead",
                bio: "Leading our secondary team with expertise in GCSE, A-Level, and IB curriculum. Shaun brings fresh perspectives and deep subject knowledge to support students through their most critical exam years.",
                image: "/Shaun Daswani Professional Headshot.jpeg",
              },
              {
                name: "Jason Daswani",
                title: "Secondary Department Lead",
                bio: "Co-leading the secondary department with a focus on student outcomes and exam preparation. Jason's approach combines proven teaching methods with modern learning techniques.",
                image: "/jason-daswani.jpeg",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.title}`}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-yellow-600 font-medium mb-4">
                  {member.title}
                </p>
                <p className="text-base text-navy-700 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE IMPROVE ME */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Why Choose Improve ME Institute?
            </h2>
            <p className="text-lg text-navy-700">
              We&apos;re not just another tutoring centre. Here&apos;s what makes us different:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                heading: "Small Group Focus",
                description: "Maximum 6 students per class, with an average of just 2–3 students. This means more attention for your child and faster progress.",
              },
              {
                icon: Award,
                heading: "KHDA Approved",
                description: "Officially licensed by Dubai's Knowledge and Human Development Authority, meeting strict quality standards for education providers.",
              },
              {
                icon: BookOpen,
                heading: "Curriculum-Aligned",
                description: "Every session matches what your child learns at school — GCSE, IGCSE, MYP, A-Level, and IB exam boards covered.",
              },
              {
                icon: Users,
                heading: "Experienced Team",
                description: "40 specialist tutors with deep subject expertise and proven track records in helping students achieve stronger grades.",
              },
              {
                icon: TrendingUp,
                heading: "Proven Results",
                description: "4.8-star rating on Google with 206 reviews. Students consistently report improved grades and confidence after joining us.",
              },
              {
                icon: Building,
                heading: "Dedicated Facility",
                description: "7,000 sq ft purpose-built teaching facility in Gold and Diamond Park with UK-themed classrooms and a motivating environment.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {benefit.heading}
                </h3>
                <p className="text-navy-700 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR APPROACH */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-navy-600 to-navy-700">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Approach to Learning
            </h2>
            <p className="text-lg text-white/90">
              We combine structured curriculum support with skills that prepare students for real-world success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: GraduationCap,
                heading: "Academic Excellence",
                description: "Small group tutoring in Maths, English, and Sciences. Every session is tailored to your child's year group, exam board, and school curriculum.",
              },
              {
                icon: Lightbulb,
                heading: "Skills-Based Learning",
                description: "Chess for strategic thinking, Financial Literacy for real-world skills, CAT4 prep for cognitive development, and AI Literacy for future readiness.",
              },
              {
                icon: Target,
                heading: "Exam-Focused",
                description: "Our tutors know what examiners expect across GCSE, IGCSE, A-Level, and IB. We teach exam technique, time management, and how to maximize marks.",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                className="text-center"
              >
                <pillar.icon className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.heading}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: IMPACT & RESULTS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Impact & Results
            </h2>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { value: "1,000+", label: "Students supported annually" },
                { value: "40", label: "Faculty members" },
                { value: "15 years", label: "Demonstrable outcomes in education" },
                { value: "4.8★", label: "Google rating" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-navy-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Google Rating Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="inline-flex items-center gap-4 bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-4 mb-12"
            >
              <div className="text-4xl font-bold text-navy-900">4.8</div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i <= 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/50 text-yellow-400'}`}
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm text-navy-600">Based on 206 Google Reviews</p>
                <a
                  href="https://g.page/r/CYOUR_GOOGLE_BUSINESS_ID/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-600 hover:text-navy-900 underline"
                >
                  Read reviews →
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote: "This place is excellent, I've learnt so much and I've only been here for a couple weeks. I have a lot more knowledge on school topics and the tutors give us lessons for the future so we are prepared and it works.",
                author: "Faizaan Malik",
                school: "Dubai British School",
                rating: 5,
              },
              {
                quote: "Classes are very good and the teachers are really nice. I study Physics and Maths, and it has been improving my grades and I do much better in my classes now.",
                author: "Imran Mamode Ally",
                school: "Jumeirah College",
                rating: 5,
              },
              {
                quote: "In just weeks, my son was moved to the highest maths set at school and secured 2nd place in two consecutive advanced exams. The difference has been extraordinary.",
                author: "Veronica",
                school: "Parent, Year 10",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-navy-700 italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-navy-900">{testimonial.author}</p>
                  <p className="text-sm text-navy-600">{testimonial.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR FACILITY */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Our Learning Environment
            </h2>
            <p className="text-lg text-navy-700 leading-relaxed">
              Our 7,000 sq ft teaching facility in Gold and Diamond Park is purpose-built to inspire and motivate young learners. With UK-themed classrooms, comfortable study spaces, and modern resources, we&apos;ve created an environment where students love to learn.
            </p>
          </motion.div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                src: "/jason class2.jpg",
                alt: "Instructor teaching maths at the whiteboard at Improve ME Institute",
              },
              {
                src: "/Students at Maths Class (3).jpeg",
                alt: "Students in maths class at Gold and Diamond Park centre",
              },
              {
                src: "/Taavisha, Raahat in Maths class.jpeg",
                alt: "Small group maths session with students and tutor",
              },
              {
                src: "/GCSE Maths Class (5).jpeg",
                alt: "GCSE Maths class in progress at Improve ME Institute",
              },
              {
                src: "/Y5 English.jpeg",
                alt: "Year 5 English class at Improve ME Institute",
              },
              {
                src: "/Chess_Strategic Thinking.jpeg",
                alt: "Chess and strategic thinking session at Improve ME Institute",
              },
              {
                src: "/Y11 Physics.jpeg",
                alt: "Year 11 Physics class at Improve ME Institute",
              },
              {
                src: "/Y11 Physics (1).jpeg",
                alt: "Year 11 Physics lesson at Improve ME Institute",
              },
            ].map((image, index) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </motion.div>
            ))}
          </div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-center"
          >
            <p className="text-navy-700 mb-4 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-navy-600" />
              <span>Located at Suite 3016-3017, Building 3, Gold and Diamond Park, Dubai</span>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-navy-700 transition-colors"
            >
              Get Directions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              Experience the Difference
            </h2>
            <p className="text-lg md:text-xl text-navy-900/90 leading-relaxed">
              Join over 1,000 students who have improved their grades and built confidence with our support. Book a free assessment today and see how we can help your child succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white rounded-lg font-semibold hover:bg-navy-800 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2"
              >
                Book Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 border-2 border-navy-900 rounded-lg font-semibold hover:bg-gray-50 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2"
              >
                View Our Courses
              </Link>
            </div>

            <p className="text-sm text-navy-900/80">
              Response within 2 hours on working days
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
