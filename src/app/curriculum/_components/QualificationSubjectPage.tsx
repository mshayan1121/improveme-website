import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Star } from "lucide-react";
import { BulletList } from "@/components/ui/bullet-list";
import type { QualificationSubjectContent } from "../_data/qualification-subjects";
import { QUALIFICATIONS } from "../_data/qualification-subjects";
import { SUBJECTS_BY_LEVEL } from "../_data/qualification-subjects.content";

function StarsRow() {
  return (
    <div className="flex items-center gap-1 mb-4" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

function toTitle(s: string) {
  return s.replaceAll("-", " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

function curriculumHref(levelKey: string, subjectKey: string) {
  if (levelKey === "primary") return `/curriculum/primary/${subjectKey}`;
  if (levelKey === "eyfs" || levelKey === "ks1" || levelKey === "ks2")
    return `/curriculum/primary/${levelKey}/${subjectKey}`;
  return `/curriculum/secondary/${levelKey}/${subjectKey}`;
}

function pickRelatedLevels(currentLevelKey: string, subjectKey: string) {
  const order = ["eyfs", "ks1", "ks2", "primary", "ks3", "myp", "gcse", "igcse", "a-level", "ib"] as const;

  const candidates = order.filter((k) => {
    if (k === currentLevelKey) return false;
    const list = SUBJECTS_BY_LEVEL[k as keyof typeof SUBJECTS_BY_LEVEL] ?? [];
    return (list as string[]).includes(subjectKey);
  });

  const currentIndex = order.indexOf(currentLevelKey as never);
  if (currentIndex === -1) return candidates.slice(0, 2);

  let prev: string | undefined;
  let next: string | undefined;

  for (let i = currentIndex - 1; i >= 0; i -= 1) {
    const k = order[i];
    if (candidates.includes(k)) {
      prev = k;
      break;
    }
  }

  for (let i = currentIndex + 1; i < order.length; i += 1) {
    const k = order[i];
    if (candidates.includes(k)) {
      next = k;
      break;
    }
  }

  const picked = [next, prev].filter(Boolean) as string[];
  if (picked.length >= 2) return picked.slice(0, 2);
  const remaining = candidates.filter((k) => !picked.includes(k));
  return [...picked, ...remaining].slice(0, 2);
}

export function QualificationSubjectPage({
  content,
  breadcrumbs,
  ctaLabel,
}: {
  content: QualificationSubjectContent;
  breadcrumbs: Array<{ href?: string; label: string }>;
  ctaLabel?: string;
}) {
  const { qualification, subject } = content;
  const pageTitle = `${qualification.label} ${subject.label}`;
  const relatedLevels = pickRelatedLevels(qualification.key, subject.key);

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${pageTitle} Tutoring`,
    description: content.seo.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "Improve ME Institute",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      url: "https://improvemeinstitute.com",
    },
    educationalLevel: qualification.label,
    about: subject.label,
    areaServed: "Dubai",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: b.label,
      item: b.href ? `https://improvemeinstitute.com${b.href}` : undefined,
    })),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm">
            {breadcrumbs.map((b, idx) => (
              <li key={`${b.label}-${idx}`} className="flex items-center">
                {idx !== 0 && <span className="text-gray-400 mx-2">/</span>}
                {b.href ? (
                  <Link href={b.href} className="text-navy-600 hover:text-navy-900">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-navy-900 font-medium">{b.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section
        className={`relative bg-gradient-to-br ${qualification.gradientClassName} chevron-pattern py-24 md:py-32 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {qualification.label.toUpperCase()} QUALIFICATION
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{pageTitle}</h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {content.hero.keyBadges.map((b) => (
              <div
                key={`${b.title}-${b.subtitle}`}
                className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3"
              >
                <div className="text-white font-bold text-lg">{b.title}</div>
                <div className="text-white/80 text-sm">{b.subtitle}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact#assessment"
              className="bg-white text-navy-900 hover:bg-white/90 px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2 transition-all"
            >
              {ctaLabel ?? "Book Free Assessment"}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={subject.courseHref}
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              View All {subject.label} Courses
            </Link>
          </div>

          <p className="text-white/80 mt-6 text-sm">{qualification.heroTrustLine}</p>
        </div>
      </section>

      {/* SECTION 2: OVERVIEW */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-6">
            {content.overview.heading}
          </h2>
          <p className="text-xl text-navy-600 text-center mb-12 max-w-3xl mx-auto">
            {content.overview.lead}
          </p>

          {content.overview.cards?.length ? (
            <div className="grid md:grid-cols-2 gap-8">
              {content.overview.cards.map((c) => (
                <div key={c.title} className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{c.title}</h3>
                  <p className="text-navy-700 mb-4">{c.description}</p>
                  <ul className="space-y-2">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-navy-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* SECTION 3: COURSE CONTENT */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-6">
            {content.courseContent.heading}
          </h2>
          <p className="text-xl text-navy-600 text-center mb-16 max-w-3xl mx-auto">
            {content.courseContent.lead}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.courseContent.columns.map((col) => (
              <div key={col.title} className="bg-white rounded-xl p-8 shadow-md">
                <div
                  className={`${col.iconBgClassName} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6`}
                >
                  {col.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">{col.title}</h3>
                <BulletList items={col.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ASSESSMENT STRUCTURE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-6">
            {content.assessment.heading}
          </h2>
          <p className="text-xl text-navy-600 text-center mb-12">{content.assessment.lead}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {content.assessment.cards.slice(0, 3).map((c) => (
              <div
                key={`${c.eyebrow}-${c.title}`}
                className={`${c.borderClassName} border-2 rounded-xl p-6`}
              >
                <div className={`${c.accentClassName} font-bold text-lg mb-2`}>{c.eyebrow}</div>
                <div className="text-2xl font-bold text-navy-900 mb-4">{c.title}</div>
                <BulletList items={c.bullets} className="space-y-2" textClassName="text-navy-700" />
              </div>
            ))}
          </div>

          {content.assessment.noteHeading && content.assessment.noteBody ? (
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                {content.assessment.noteHeading}
              </h3>
              <p className="text-navy-700">{content.assessment.noteBody}</p>
            </div>
          ) : null}
        </div>
      </section>

      {/* SECTION 5: EXAM BOARDS */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-12">
            {content.examBoards.heading}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.examBoards.cards.map((b) => (
              <div key={b.name} className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{b.name}</h3>
                <p className="text-navy-700 mb-4">{b.description}</p>
                {b.specification ? (
                  <div className="text-green-600 font-semibold">Specification {b.specification}</div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT MAKES US DIFFERENT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">
            {content.differentiators.heading}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {content.differentiators.items.map((d) => (
              <div key={d.title} className="text-center">
                <div
                  className={`${d.iconBgClassName} rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                >
                  {d.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{d.title}</h3>
                <p className="text-navy-700">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE US */}
      {content.whyChooseUs?.items?.length ? (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy-900 text-center mb-12">
              {content.whyChooseUs.heading}
            </h2>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {content.whyChooseUs.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700 text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* SECTION 8: SUCCESS STORIES */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">
            {content.success.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.success.testimonials.slice(0, 2).map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-8 shadow-md">
                <StarsRow />
                <p className="text-lg text-navy-700 italic mb-6">{t.quote}</p>
                <div className="font-semibold text-navy-900">— {t.name}</div>
                <div className="text-navy-600 text-sm">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: RELATED COURSES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-900 text-center mb-6">
            Explore Related Courses
          </h2>
          <p className="text-xl text-navy-600 text-center mb-16">
            Continue your {toTitle(subject.key)} journey or explore nearby pathways.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedLevels.map((lvl) => {
              const meta = QUALIFICATIONS[lvl as keyof typeof QUALIFICATIONS];
              const href = curriculumHref(lvl, subject.key);
              return (
                <Link key={lvl} href={href} className="block h-full">
                  <div
                    className={`bg-gradient-to-br ${meta.gradientClassName} rounded-xl p-8 h-full flex flex-col hover:scale-105 hover:shadow-2xl transition-all cursor-pointer`}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-16 h-16 mb-4 flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {meta.label} {subject.label}
                    </h3>
                    <p className="text-white/90 mb-4 flex-grow">
                      Explore the {meta.label} pathway for {subject.label} and see what we cover.
                    </p>
                    <div className="flex items-center gap-2 text-white/80 hover:text-white">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}

            {relatedLevels.length < 2 ? (
              <Link href="/contact#assessment" className="block h-full">
                <div
                  className={`bg-gradient-to-br ${qualification.gradientClassName} rounded-xl p-8 h-full flex flex-col hover:scale-105 hover:shadow-2xl transition-all cursor-pointer`}
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-16 h-16 mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Book an Assessment</h3>
                  <p className="text-white/90 mb-4 flex-grow">
                    Get a clear plan and the best next steps for {pageTitle}.
                  </p>
                  <div className="flex items-center gap-2 text-white/80 hover:text-white">
                    <span>Book now</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ) : null}

            <Link href={subject.courseHref} className="block h-full">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-8 h-full flex flex-col hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-16 h-16 mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">All {subject.label} Courses</h3>
                <p className="text-white/90 mb-4 flex-grow">
                  View all {subject.label} qualifications and pathways from Primary to advanced levels.
                </p>
                <div className="flex items-center gap-2 text-white/80 hover:text-white">
                  <span>View all courses</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className={`py-20 md:py-32 bg-gradient-to-br ${qualification.gradientClassName} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />

          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Excel in {pageTitle}?
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Book your free assessment and discover how we can help you succeed in{" "}
            {pageTitle}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#assessment"
              className="bg-white text-navy-900 hover:bg-white/90 px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2 transition-all"
            >
              Book Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={subject.courseHref}
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-10 py-5 rounded-xl font-bold text-lg transition-all"
            >
              View All {subject.label}
            </Link>
          </div>

          <p className="text-white/80 mt-6 text-sm">Trusted by families from Dubai College, Repton, JESS…</p>
        </div>
      </section>
    </div>
  );
}

