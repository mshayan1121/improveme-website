import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Book Free Assessment | Improve ME Institute',
  description: 'Contact Improve ME Institute in Dubai. Book your free assessment, visit our Gold & Diamond Park centre, or call us. Primary: +971-50 185 2505 | Senior: +971-58 547 1457',
  keywords: 'contact improve me institute, tutoring centre dubai location, book free assessment, gold diamond park tutoring, improve me phone number',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
