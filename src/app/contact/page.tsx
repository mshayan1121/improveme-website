'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Shield,
  Navigation,
  ExternalLink,
  Train,
  Car,
  Building2,
  Instagram,
  MessageCircle,
  ChevronDown,
  Loader2,
  Check,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

// Form data type
type FormData = {
  parentName: string;
  phone: string;
  email: string;
  yearGroup: string;
  subjectInterest: string;
  additionalInfo: string;
  website: string; // Honeypot field
};

const initialData: FormData = {
  parentName: '',
  phone: '',
  email: '',
  yearGroup: '',
  subjectInterest: '',
  additionalInfo: '',
  website: '',
};

const yearGroups = [
  'FS1 (Age 3-4)',
  'FS2 (Age 4-5)',
  'Year 1 (Age 5-6)',
  'Year 2 (Age 6-7)',
  'Year 3 (Age 7-8)',
  'Year 4 (Age 8-9)',
  'Year 5 (Age 9-10)',
  'Year 6 (Age 10-11)',
  'Year 7 (Age 11-12)',
  'Year 8 (Age 12-13)',
  'Year 9 (Age 13-14)',
  'Year 10 (Age 14-15)',
  'Year 11 (Age 15-16)',
  'Year 12 (Age 16-17)',
  'Year 13 (Age 17-18)',
];

const subjects = [
  'Mathematics',
  'English',
  'Science (General)',
  'Physics',
  'Chemistry',
  'Biology',
  'Business Studies',
  'Economics',
  'Psychology',
  'CAT4 Test Prep',
  '7+/11+ Entrance Prep',
  'Multiple Subjects',
  'Not Sure Yet',
];

// Schema markup for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Improve ME Institute',
  url: 'https://www.improvemeinstitute.com',
  telephone: ['+971501852505', '+971585471457'],
  email: 'contact@improvemeinstitute.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suite 3016-3017, Building 3, Gold and Diamond Park',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.12514517775727',
    longitude: '55.206411875379544',
  },
  openingHours: ['Mo-Su 08:00-20:00'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+971-50-185-2505',
      contactType: 'Primary Department',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+971-58-547-1457',
      contactType: 'Senior Department',
      availableLanguage: 'English',
    },
  ],
};

export default function ContactPage() {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    
    // Honeypot check
    if (data.website) {
      return false; // Bot detected
    }
    
    if (!data.parentName.trim()) e.parentName = 'Parent/Guardian name is required';
    if (!data.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^\+?[\d\s-()]+$/.test(data.phone)) e.phone = 'Please enter a valid phone number';
    if (!data.email.trim()) e.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Please enter a valid email address';
    if (!data.yearGroup) e.yearGroup = 'Please select year group';
    if (!data.subjectInterest) e.subjectInterest = 'Please select subject interest';
    
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('loading');
    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 1000));
      console.log('Form data:', data);
      setStatus('success');
      setData(initialData);
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  const update = (k: keyof FormData) => (v: string) =>
    setData((d) => ({ ...d, [k]: v }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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
              <span itemProp="name" className="text-navy-900 font-medium">Contact</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-navy-600 to-navy-800 chevron-pattern">
        <div className="absolute inset-0 opacity-10 chevron-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Book your free assessment, visit our centre, or reach out with any questions. We typically respond within 2 hours on working days.
            </p>
            
            {/* Stats Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div className="text-left">
                  <span className="block font-bold text-white text-sm">2 Hours</span>
                  <span className="block text-xs text-white/80">Response Time (Working Days)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                <Building2 className="w-5 h-5 text-yellow-400" />
                <div className="text-left">
                  <span className="block font-bold text-white text-sm">7,000 sq ft</span>
                  <span className="block text-xs text-white/80">Teaching Facility</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <div className="text-left">
                  <span className="block font-bold text-white text-sm">Mon-Fri: 10AM-8PM</span>
                  <span className="block text-xs text-white/80">Sat: 9AM-7PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CONTACT METHODS GRID */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-12">
            Ways to Reach Us
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Primary Department */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <Phone className="w-12 h-12 text-yellow-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">Primary Department</h3>
                <a
                  href="tel:+971501852505"
                  className="text-xl font-semibold text-yellow-600 hover:text-yellow-700 mb-2 group-hover:underline"
                >
                  +971-50 185 2505
                </a>
                <p className="text-sm text-navy-600">Ages 3-11 (FS1 to Year 6)</p>
              </div>
            </motion.div>

            {/* Card 2 - Senior Department */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <Phone className="w-12 h-12 text-yellow-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">Senior Department</h3>
                <a
                  href="tel:+971585471457"
                  className="text-xl font-semibold text-yellow-600 hover:text-yellow-700 mb-2 group-hover:underline"
                >
                  +971-58 547 1457
                </a>
                <p className="text-sm text-navy-600">Ages 11-18 (Year 7 to Year 13)</p>
              </div>
            </motion.div>

            {/* Card 3 - Email Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <Mail className="w-12 h-12 text-yellow-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">Email Us</h3>
                <a
                  href="mailto:contact@improvemeinstitute.com"
                  className="text-xl font-semibold text-yellow-600 hover:text-yellow-700 mb-2 break-all group-hover:underline"
                >
                  contact@improvemeinstitute.com
                </a>
                <p className="text-sm text-navy-600">Response within 24 hours</p>
              </div>
            </motion.div>

            {/* Card 4 - Our Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <MapPin className="w-12 h-12 text-yellow-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">Our Location</h3>
                <button
                  onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-xl font-semibold text-yellow-600 hover:text-yellow-700 mb-2 group-hover:underline"
                >
                  Gold & Diamond Park
                </button>
                <p className="text-sm text-navy-600">Suite 3016-3017, Building 3</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BOOK FREE ASSESSMENT FORM */}
      <section id="assessment" className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Book Your Free Assessment
              </h2>
              <p className="text-base md:text-lg text-navy-700 mb-6 leading-relaxed">
                Our team will assess your child&apos;s current level and recommend the right group and tutor. There&apos;s no cost and no obligation — we typically respond within 2 hours on working days.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-navy-700">Free diagnostic assessment</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-navy-700">No obligation to enrol</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-navy-700">Personalised programme recommendation</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-navy-700">
                    We respect your privacy. Your information will not be shared with third parties.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <p className="font-semibold text-navy-900">Open 7 Days a Week</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <p className="text-navy-700">Sunday - Saturday: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
                {status === 'success' ? (
                  <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                    <p className="text-green-700 font-semibold text-lg mb-2">
                      Thank you! We&apos;ve received your assessment request and will contact you within 2 hours on working days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot field */}
                    <input
                      type="text"
                      name="website"
                      value={data.website}
                      onChange={(e) => update('website')(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div>
                      <Label htmlFor="parentName" className="text-sm font-semibold text-navy-900 mb-2 block">
                        Parent/Guardian Name <span className="text-red-600">*</span>
                      </Label>
                      <Input
                        id="parentName"
                        type="text"
                        value={data.parentName}
                        onChange={(e) => update('parentName')(e.target.value)}
                        placeholder="e.g., Sarah Ahmed"
                        className={`border-2 ${errors.parentName ? 'border-red-600' : 'border-gray-300'} focus:border-yellow-500 rounded-lg p-3 w-full`}
                        aria-describedby={errors.parentName ? 'parentName-error' : undefined}
                        aria-invalid={!!errors.parentName}
                      />
                      {errors.parentName && (
                        <p id="parentName-error" className="text-red-600 text-sm mt-1" role="alert">
                          {errors.parentName}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-navy-900 mb-2 block">
                        Phone Number <span className="text-red-600">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={data.phone}
                        onChange={(e) => update('phone')(e.target.value)}
                        placeholder="+971-50-xxx-xxxx"
                        className={`border-2 ${errors.phone ? 'border-red-600' : 'border-gray-300'} focus:border-yellow-500 rounded-lg p-3 w-full`}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-red-600 text-sm mt-1" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-navy-900 mb-2 block">
                        Email Address <span className="text-red-600">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => update('email')(e.target.value)}
                        placeholder="e.g., sarah@email.com"
                        className={`border-2 ${errors.email ? 'border-red-600' : 'border-gray-300'} focus:border-yellow-500 rounded-lg p-3 w-full`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="yearGroup" className="text-sm font-semibold text-navy-900 mb-2 block">
                        Child&apos;s Year Group <span className="text-red-600">*</span>
                      </Label>
                      <select
                        id="yearGroup"
                        value={data.yearGroup}
                        onChange={(e) => update('yearGroup')(e.target.value)}
                        className={`flex h-10 w-full rounded-lg border-2 bg-white px-3 py-2 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                          errors.yearGroup ? 'border-red-600' : 'border-gray-300'
                        }`}
                        aria-describedby={errors.yearGroup ? 'yearGroup-error' : undefined}
                        aria-invalid={!!errors.yearGroup}
                      >
                        <option value="">Select year group</option>
                        {yearGroups.map((yg) => (
                          <option key={yg} value={yg}>
                            {yg}
                          </option>
                        ))}
                      </select>
                      {errors.yearGroup && (
                        <p id="yearGroup-error" className="text-red-600 text-sm mt-1" role="alert">
                          {errors.yearGroup}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="subjectInterest" className="text-sm font-semibold text-navy-900 mb-2 block">
                        Subject Interest <span className="text-red-600">*</span>
                      </Label>
                      <select
                        id="subjectInterest"
                        value={data.subjectInterest}
                        onChange={(e) => update('subjectInterest')(e.target.value)}
                        className={`flex h-10 w-full rounded-lg border-2 bg-white px-3 py-2 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                          errors.subjectInterest ? 'border-red-600' : 'border-gray-300'
                        }`}
                        aria-describedby={errors.subjectInterest ? 'subjectInterest-error' : undefined}
                        aria-invalid={!!errors.subjectInterest}
                      >
                        <option value="">Select subject</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.subjectInterest && (
                        <p id="subjectInterest-error" className="text-red-600 text-sm mt-1" role="alert">
                          {errors.subjectInterest}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo" className="text-sm font-semibold text-navy-900 mb-2 block">
                        Additional Information (Optional)
                      </Label>
                      <textarea
                        id="additionalInfo"
                        value={data.additionalInfo}
                        onChange={(e) => update('additionalInfo')(e.target.value)}
                        placeholder="Tell us more about your child's needs, goals, or any specific questions you have..."
                        rows={4}
                        className="flex w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 rounded-lg font-semibold text-navy-900 bg-yellow-400 hover:bg-yellow-500 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-70 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {status === 'loading' ? (
                        <span className="inline-flex items-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        'Book Free Assessment'
                      )}
                    </button>

                    {status === 'error' && (
                      <p className="text-red-600 text-sm text-center" role="alert">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATION & MAP */}
      <section id="map" className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[40%_60%] gap-8 lg:gap-12">
            {/* Left Column - Location Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Visit Our Centre
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-navy-900">Suite 3016-3017, Building 3</p>
                    <p className="text-navy-700">Gold and Diamond Park</p>
                    <p className="text-navy-700">Dubai, UAE</p>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/idHaaznLXT189cL28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-navy-900 px-6 py-3 rounded-lg font-semibold transition mb-6"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <p className="text-navy-700">Located in Building 3 of Gold & Diamond Park</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <p className="text-navy-700">Ample parking available</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Train className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <p className="text-navy-700">Nearest Metro: Equiti Metro Station (10 min drive)</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <p className="font-semibold text-navy-900">Open 7 Days a Week</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <p className="text-navy-700">Sunday - Saturday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <a href="tel:+971501852505" className="text-navy-700 hover:text-yellow-600">
                      Primary: +971-50 185 2505
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <a href="tel:+971585471457" className="text-navy-700 hover:text-yellow-600">
                      Senior: +971-58 547 1457
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.9540006816633!2d55.206411875379544!3d25.12514517775727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bc6792d0437%3A0xe71d4aaa3d08b9!2sImprove%20ME%20Institute!5e1!3m2!1sen!2sae!4v1770818880559!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Improve ME Institute Location - Gold & Diamond Park, Dubai"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="faq-1" itemScope itemType="https://schema.org/Question">
              <AccordionTrigger>
                <span itemProp="name">What happens during the free assessment?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-base text-navy-700 leading-relaxed">
                    Our tutors will evaluate your child&apos;s current level through a short diagnostic test and discussion. This helps us recommend the right programme, group size, and tutor. The assessment takes approximately 30-45 minutes and there&apos;s no obligation to enrol.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" itemScope itemType="https://schema.org/Question">
              <AccordionTrigger>
                <span itemProp="name">What are your class sizes?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-base text-navy-700 leading-relaxed">
                    We keep our groups small for maximum attention. Our classes have a maximum of 6 students, with an average of just 2-3 students per session. This ensures personalised support and faster progress.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" itemScope itemType="https://schema.org/Question">
              <AccordionTrigger>
                <span itemProp="name">Which exam boards do you cover?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-base text-navy-700 leading-relaxed">
                    We support all major UK exam boards including AQA, Edexcel, OCR, Cambridge (IGCSE), Pearson, and WJEC. We also cover IB (International Baccalaureate) and MYP (Middle Years Programme).
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" itemScope itemType="https://schema.org/Question">
              <AccordionTrigger>
                <span itemProp="name">Do you offer 1-to-1 tutoring?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-base text-navy-700 leading-relaxed">
                    We specialise in small group tutoring (maximum 6 students) rather than 1-to-1 sessions. Research shows that small group learning promotes collaboration, confidence, and better long-term outcomes while remaining more affordable for families.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" itemScope itemType="https://schema.org/Question">
              <AccordionTrigger>
                <span itemProp="name">What are your fees?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-base text-navy-700 leading-relaxed">
                    Our fees vary depending on the year group, subject, and programme. Please contact us for detailed pricing information. We offer term-based packages and flexible payment options.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" itemScope itemType="https://schema.org/Question">
              <AccordionTrigger>
                <span itemProp="name">Can I visit the centre before enrolling?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-base text-navy-700 leading-relaxed">
                    Absolutely! We encourage parents and students to visit our 7,000 sq ft teaching facility in Gold & Diamond Park. You can see our UK-themed classrooms and meet our team. Call us to schedule a visit: Primary +971-50 185 2505 | Senior +971-58 547 1457
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" itemScope itemType="https://schema.org/Question">
              <AccordionTrigger>
                <span itemProp="name">What is your cancellation policy?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-base text-navy-700 leading-relaxed">
                    We require 24 hours&apos; notice for session cancellations. Sessions cancelled with less than 24 hours&apos; notice may not be eligible for makeup sessions. Please contact us to discuss our full terms and conditions.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8" itemScope itemType="https://schema.org/Question">
              <AccordionTrigger>
                <span itemProp="name">Do you offer online tutoring?</span>
              </AccordionTrigger>
              <AccordionContent>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-base text-navy-700 leading-relaxed">
                    Currently, all our sessions are in-person at our Gold & Diamond Park centre. We believe face-to-face learning in small groups delivers the best outcomes for students.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* SECTION 6: ALTERNATIVE CONTACT METHODS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-12">
            Other Ways to Connect
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Instagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg transition-all text-center"
            >
              <Instagram className="w-12 h-12 text-yellow-500 mx-auto mb-4 flex-shrink-0" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">Follow Us</h3>
              <p className="text-navy-700 mb-3">@imidxb</p>
              <a
                href="https://www.instagram.com/imidxb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                Visit Instagram
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Card 2 - WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg transition-all text-center"
            >
              <MessageCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4 flex-shrink-0" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">WhatsApp</h3>
              <p className="text-navy-700 mb-3">Quick questions via WhatsApp</p>
              <a
                href="https://wa.me/971501852505"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                Message Us
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Card 3 - School Partnerships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg transition-all text-center"
            >
              <Building2 className="w-12 h-12 text-yellow-500 mx-auto mb-4 flex-shrink-0" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">School Partnerships</h3>
              <p className="text-navy-700 mb-3">Interested in partnering with us?</p>
              <a
                href="mailto:contact@improvemeinstitute.com?subject=School Partnership Inquiry"
                className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                Partnership Enquiries
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
