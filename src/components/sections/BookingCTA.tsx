'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, Shield, Clock, Loader2, Check } from 'lucide-react';

const gradeLevels = [
  'Reception / FS',
  'Year 1-2',
  'Year 3-4',
  'Year 5-6',
  'Year 7-9',
  'GCSE / IGCSE',
  'A-Level / IB',
];

const subjects = [
  'Mathematics',
  'English',
  'Science',
  'Physics',
  'Chemistry',
  'Biology',
  'Business',
  'Economics',
  'Other',
];

type FormData = {
  parentName: string;
  phone: string;
  email: string;
  gradeLevel: string;
  subjectInterest: string;
};

const initialData: FormData = {
  parentName: '',
  phone: '',
  email: '',
  gradeLevel: '',
  subjectInterest: '',
};

export default function BookingCTA() {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.parentName.trim()) e.parentName = 'Name is required';
    if (!data.phone.trim()) e.phone = 'Phone is required';
    if (!data.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Invalid email';
    if (!data.gradeLevel) e.gradeLevel = 'Please select grade level';
    if (!data.subjectInterest) e.subjectInterest = 'Please select subject';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      await new Promise((r) => setTimeout(r, 800));
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
    <section
      className="w-full py-10 md:py-14 relative overflow-hidden bg-gradient-to-b from-navy-700 to-navy-800"
      style={{
        background: 'linear-gradient(180deg, rgb(var(--navy-700)), rgb(var(--navy-800)))',
      }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Left - Content (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book Your Free Assessment
            </h2>
            <p className="text-white/90 text-lg mb-4 leading-relaxed">
              Our team will identify learning needs and match your child with
              expert tutors.
            </p>
            <ul className="space-y-4 text-white">
              <li className="flex items-center gap-3">
                <CheckCircle
                  className="w-6 h-6 shrink-0 text-yellow-400"
                  strokeWidth={2}
                />
                <span>Free consultation</span>
              </li>
              <li className="flex items-center gap-3">
                <Shield
                  className="w-6 h-6 shrink-0 text-yellow-400"
                  strokeWidth={2}
                />
                <span>No obligation</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock
                  className="w-6 h-6 shrink-0 text-yellow-400"
                  strokeWidth={2}
                />
                <span>24-hour response</span>
              </li>
            </ul>
          </motion.div>

          {/* Right - Form (60%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-5 border border-gray-200/50">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" strokeWidth={2.5} />
                  </div>
                  <p className="text-green-700 font-semibold text-lg mb-2">
                    Thank you! We&apos;ll be in touch within 24 hours.
                  </p>
                  <p className="text-navy-600 text-sm">
                    Check your email for confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label
                      htmlFor="parentName"
                      className="block mb-2 text-navy-900 font-medium"
                    >
                      Parent Name
                    </Label>
                    <Input
                      id="parentName"
                      value={data.parentName}
                      onChange={(e) => update('parentName')(e.target.value)}
                      placeholder="Your full name"
                      className={`border-gray-200 focus-visible:ring-yellow-400 focus-visible:ring-offset-0 ${
                        errors.parentName ? 'border-orange-500' : ''
                      }`}
                    />
                    {errors.parentName && (
                      <p className="text-orange-500 text-sm mt-1">{errors.parentName}</p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="block mb-2 text-navy-900 font-medium"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={data.phone}
                      onChange={(e) => update('phone')(e.target.value)}
                      placeholder="+971 50 123 4567"
                      className={`border-gray-200 focus-visible:ring-yellow-400 focus-visible:ring-offset-0 ${
                        errors.phone ? 'border-orange-500' : ''
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-orange-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="block mb-2 text-navy-900 font-medium"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={data.email}
                      onChange={(e) => update('email')(e.target.value)}
                      placeholder="you@example.com"
                      className={`border-gray-200 focus-visible:ring-yellow-400 focus-visible:ring-offset-0 ${
                        errors.email ? 'border-orange-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-orange-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="gradeLevel"
                      className="block mb-2 text-navy-900 font-medium"
                    >
                      Child&apos;s Grade Level
                    </Label>
                    <select
                      id="gradeLevel"
                      value={data.gradeLevel}
                      onChange={(e) => update('gradeLevel')(e.target.value)}
                      className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-0 ${
                        errors.gradeLevel ? 'border-orange-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select grade level</option>
                      {gradeLevels.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    {errors.gradeLevel && (
                      <p className="text-orange-500 text-sm mt-1">{errors.gradeLevel}</p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="subjectInterest"
                      className="block mb-2 text-navy-900 font-medium"
                    >
                      Subject Interest
                    </Label>
                    <select
                      id="subjectInterest"
                      value={data.subjectInterest}
                      onChange={(e) => update('subjectInterest')(e.target.value)}
                      className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-0 ${
                        errors.subjectInterest ? 'border-orange-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.subjectInterest && (
                      <p className="text-orange-500 text-sm mt-1">
                        {errors.subjectInterest}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-lg font-semibold text-navy-900 bg-yellow-400 hover:bg-yellow-500 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-70 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {status === 'loading' ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      'Book Free Assessment'
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-orange-500 text-sm text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <p className="text-navy-600 text-xs text-center">
                    We respect your privacy. Your information will not be shared
                    with third parties.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
