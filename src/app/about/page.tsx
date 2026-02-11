import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: 'About Us | Improve ME Institute | Tutoring Centre in Dubai',
  description: 'Family-run tutoring centre in Dubai since 2010. KHDA-approved, small groups of 6 or fewer, 40 specialist tutors, 1,000+ students yearly. Meet our team and discover our approach.',
  keywords: 'about improve me institute, tutoring centre dubai, KHDA approved tutor, family-run tutoring, small group tutoring',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Improve ME Institute",
  "description": "Family-run tutoring centre in Dubai since 2010",
  "url": "https://www.improvemeinstitute.com/about",
  "foundingDate": "2010",
  "founder": {
    "@type": "Person",
    "name": "Neeta Daswani"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Suite 3016-3017, Building 3, Gold and Diamond Park",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "206"
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
