import type { Metadata } from "next";
import HomeHero from "@/components/hero/HomeHero";
import StatsBar from "@/components/sections/StatsBar";
import AcademicJourneySection from "@/components/sections/AcademicJourneySection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import BookingCTA from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  title: 'Tutoring Centre in Dubai | Ages 3–18 | Improve ME Institute',
  description: 'KHDA-approved tutoring centre in Dubai for ages 3–18. Maths, English & Sciences across GCSE, IGCSE, A-Level and IB. Small groups of 6 or fewer. Book a free assessment.',
  keywords: 'tutoring centre dubai, tutors in dubai, GCSE tutoring, IGCSE tutoring, A-Level tutoring, IB tutoring, small group tutoring dubai, KHDA approved tutor',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  "name": "Improve ME Institute",
  "description": "KHDA-approved tutoring centre in Dubai for ages 3–18.",
  "url": "https://www.improvemeinstitute.com",
  "telephone": ["+971501852505", "+971585471457"],
  "email": "contact@improvemeinstitute.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Suite 3016-3017, Building 3, Gold and Diamond Park",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "foundingDate": "2010",
  "numberOfEmployees": "40+",
  "areaServed": "Dubai, UAE",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "206",
    "bestRating": "5"
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <StatsBar />
      <AcademicJourneySection />
      <TestimonialsCarousel />
      <BookingCTA />
    </>
  );
}
