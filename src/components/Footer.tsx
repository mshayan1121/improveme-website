import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

const primaryLinks = [
  { label: 'Primary Mathematics', href: '/courses/primary/mathematics' },
  { label: 'Primary English', href: '/courses/primary/english' },
  { label: 'Primary Science', href: '/courses/primary/science' },
];

const secondaryLinks = [
  { label: 'Secondary Mathematics', href: '/courses/secondary/mathematics' },
  { label: 'Physics', href: '/courses/secondary/physics' },
  { label: 'Chemistry', href: '/courses/secondary/chemistry' },
  { label: 'Biology', href: '/courses/secondary/biology' },
  { label: 'English', href: '/courses/secondary/english' },
  { label: 'Business', href: '/courses/secondary/business' },
  { label: 'Economics', href: '/courses/secondary/economics' },
  { label: 'GCSE/IGCSE/MYP', href: '/courses/secondary' },
];

const bottomLinks = [
  { label: 'Our Courses', href: '/courses' },
  { label: 'About Us', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

const phones = [
  { label: 'Primary', number: '+971-50 185 2505' },
  { label: 'Central', number: '+971-58 533 4989' },
  { label: 'Senior', number: '+971-58 547 1457' },
  { label: 'Landline', number: '+971 4 380 5525' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* 1. Logo & Social */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-white p-2 rounded-md inline-block">
                <Image 
                  src="/logo.png" 
                  alt="Improve ME Institute" 
                  width={185} 
                  height={45} 
                  className="h-8 w-auto"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Leading Tutoring Center in Dubai
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <Link
              href="/contact#assessment"
              className="btn btn-primary px-5 py-2.5 text-sm inline-block"
            >
              Book Your Free Assessment
            </Link>
          </div>

          {/* 2. Primary Courses */}
          <div>
            <h4 className="font-semibold text-white mb-4">Primary Courses</h4>
            <ul className="space-y-2">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Secondary Courses */}
          <div>
            <h4 className="font-semibold text-white mb-4">Secondary Courses</h4>
            <ul className="space-y-2">
              {secondaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-4">
              Suite 3016-3017, Building 3,<br />
              Gold and Diamond Park,<br />
              Dubai
            </p>
            <ul className="space-y-2">
              {phones.map((p) => (
                <li key={p.label} className="text-sm">
                  <span className="text-gray-500">{p.label}: </span>
                  <a
                    href={`tel:${p.number.replace(/\s/g, '')}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {p.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-navy-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-gray-500 text-sm">
              Improve ME Institute © 2026. All Rights Reserved
            </p>
            <div className="flex flex-wrap gap-6">
              {bottomLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-4">
            Operates under RAK Free Zone license
          </p>
        </div>
      </div>
    </footer>
  );
}
