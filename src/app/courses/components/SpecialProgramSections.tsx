import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

type CTA = {
  label: string;
  href: string;
  ariaLabel?: string;
};

type ProgramHeroProps = {
  title: string;
  badge: string;
  description: string;
  icon: LucideIcon;
  primaryCta: CTA;
  secondaryCta?: CTA;
};

type RelatedProgram = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type SuccessStory = {
  quote: string;
  name: string;
  detail: string;
};

export const Breadcrumbs = ({ current }: { current: string }) => (
  <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
    <div className="max-w-7xl mx-auto px-4">
      <ol className="flex items-center space-x-2 text-sm text-navy-600" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" itemProp="item" className="hover:text-navy-900">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        <li className="text-gray-400">/</li>
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/courses" itemProp="item" className="hover:text-navy-900">
            <span itemProp="name">Courses</span>
          </Link>
          <meta itemProp="position" content="2" />
        </li>
        <li className="text-gray-400">/</li>
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <span itemProp="name" className="text-navy-900 font-semibold">
            {current}
          </span>
          <meta itemProp="position" content="3" />
        </li>
      </ol>
    </div>
  </nav>
);

export const ProgramHero = ({
  title,
  badge,
  description,
  icon: Icon,
  primaryCta,
  secondaryCta,
}: ProgramHeroProps) => (
  <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-center text-navy-900">
    <div className="max-w-5xl mx-auto px-4 py-20 md:py-28">
      <Icon className="w-14 h-14 mx-auto mb-6 text-navy-900" aria-hidden="true" />
      <div className="inline-flex bg-white/60 text-navy-900 rounded-full px-6 py-2 text-sm font-semibold tracking-wide uppercase mb-6">
        {badge}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6" itemProp="name">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-navy-800 mb-10" itemProp="description">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href={primaryCta.href}
          aria-label={primaryCta.ariaLabel ?? primaryCta.label}
          className="inline-flex items-center justify-center gap-2 bg-navy-900 text-yellow-200 px-8 py-4 rounded-xl font-semibold hover:bg-navy-800 transition"
        >
          {primaryCta.label}
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            aria-label={secondaryCta.ariaLabel ?? secondaryCta.label}
            className="inline-flex items-center justify-center gap-2 border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-xl font-semibold hover:bg-navy-900/5 transition"
          >
            {secondaryCta.label}
          </Link>
        )}
      </div>
    </div>
  </section>
);

export const TeachingPillars = () => {
  const pillars = [
    {
      title: 'Expert Instructors',
      description: 'Specialists in each programme area with proven results.',
    },
    {
      title: 'Small Groups',
      description: 'Maximum of 6 students for personalised attention.',
    },
    {
      title: 'Practical Learning',
      description: 'Hands-on activities, real scenarios, and applied tasks.',
    },
    {
      title: 'Progress Tracking',
      description: 'Regular assessments and feedback for every learner.',
    },
  ];

  return (
    <section className="bg-gray-50 py-14 md:py-20" aria-labelledby="teaching-pillars-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-navy-600">How We Teach</p>
          <h2 id="teaching-pillars-heading" className="text-3xl font-bold text-navy-900">
            Consistent Teaching Pillars
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map(({ title, description }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-navy-900 mb-2">{title}</h3>
              <p className="text-navy-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const RelatedProgramsGrid = ({ programs }: { programs: RelatedProgram[] }) => (
  <section className="bg-white py-14 md:py-20" aria-labelledby="related-programs-heading">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-navy-600">Next Steps</p>
        <h2 id="related-programs-heading" className="text-3xl font-bold text-navy-900">
          Explore Related Programs
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {programs.map(({ name, description, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className="group bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-navy-900 hover:shadow-lg transition flex flex-col"
            aria-label={`Learn more about ${name}`}
          >
            <Icon className="w-10 h-10 text-navy-700 mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-navy-900 mb-2">{name}</h3>
            <p className="text-navy-700 flex-1">{description}</p>
            <span className="mt-4 text-navy-900 font-medium group-hover:underline">Learn more</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export const SuccessStoriesSection = ({ stories }: { stories: SuccessStory[] }) => (
  <section className="bg-gray-50 py-14 md:py-20" aria-labelledby="success-stories-heading">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-navy-600">Results</p>
        <h2 id="success-stories-heading" className="text-3xl font-bold text-navy-900">
          Success Stories
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {stories.map(({ quote, name, detail }) => (
          <figure key={name} className="bg-white border border-gray-200 rounded-2xl p-6">
            <blockquote className="text-navy-800 italic mb-4">&ldquo;{quote}&rdquo;</blockquote>
            <figcaption>
              <p className="font-semibold text-navy-900">{name}</p>
              <p className="text-sm text-navy-700">{detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export const FinalCTA = ({ programName }: { programName: string }) => (
  <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 py-16 text-center text-navy-900">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-lg text-navy-800 mb-8">
        Book your free assessment and discover how {programName} can benefit your child.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/contact#assessment"
          className="bg-navy-900 text-yellow-200 px-8 py-4 rounded-xl font-semibold hover:bg-navy-800 transition"
        >
          Book Free Assessment
        </Link>
        <Link
          href="/courses"
          className="border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-xl font-semibold hover:bg-navy-900/5 transition"
        >
          View All Programs
        </Link>
      </div>
    </div>
  </section>
);

export type { RelatedProgram, SuccessStory };
