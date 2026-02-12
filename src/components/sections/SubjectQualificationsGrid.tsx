import { QualificationCard } from "@/components/qualifications/QualificationCard";
import type { QualificationCardVariant } from "@/components/qualifications/QualificationCard";
import { SUBJECTS_BY_LEVEL, type LevelKey, type SubjectKey } from "@/components/sections/_data/subjects-by-level";

type QualificationItem = {
  level: LevelKey;
  variant: QualificationCardVariant;
  badge: string;
  title: string;
  boards: string;
  description: string;
};

const LEVEL_ORDER: LevelKey[] = ["primary", "ks3", "myp", "gcse", "igcse", "a-level", "ib"];

const LEVEL_META: Record<LevelKey, { badge: string; boards: string; description: string; titlePrefix: string; variant: QualificationCardVariant }> =
  {
    primary: {
      badge: "Years 1-6",
      boards: "UK & International Schools",
      description: "Build curiosity, strong foundations, and confidence through hands-on learning.",
      titlePrefix: "Primary",
      variant: "primary",
    },
    ks3: {
      badge: "Years 7-9",
      boards: "UK National Curriculum",
      description: "Strong foundations before GCSE with clear structure and steady topic mastery.",
      titlePrefix: "KS3",
      variant: "ks3",
    },
    gcse: {
      badge: "Years 10-11",
      boards: "AQA, Edexcel, OCR",
      description: "Foundation to Higher tier, targeting grades 7-9.",
      titlePrefix: "GCSE",
      variant: "gcse",
    },
    igcse: {
      badge: "Years 10-11",
      boards: "Cambridge, Edexcel",
      description: "International curriculum with global recognition.",
      titlePrefix: "IGCSE",
      variant: "igcse",
    },
    myp: {
      badge: "Years 7-11",
      boards: "IB Middle Years",
      description: "Inquiry-based learning for IB pathway students.",
      titlePrefix: "MYP",
      variant: "myp",
    },
    "a-level": {
      badge: "Years 12-13",
      boards: "AQA, Edexcel, OCR",
      description: "Advanced level for university preparation in Dubai.",
      titlePrefix: "A-Level",
      variant: "a-level",
    },
    ib: {
      badge: "Years 12-13",
      boards: "SL & HL",
      description: "International Baccalaureate standard and higher level.",
      titlePrefix: "IB",
      variant: "ib",
    },
  };

function toTitleCaseSlug(slug: string) {
  return slug
    .replaceAll("-", " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function curriculumHref(level: LevelKey, subject: string) {
  if (level === "primary") return `/curriculum/primary/${subject}`;
  return `/curriculum/secondary/${level}/${subject}`;
}

function buildItemsForSubject(subjectKey: SubjectKey): QualificationItem[] {
  const levels = LEVEL_ORDER.filter((lvl) =>
    SUBJECTS_BY_LEVEL[lvl].includes(subjectKey)
  );

  return levels.map((level) => {
    const meta = LEVEL_META[level];
    return {
      level,
      variant: meta.variant,
      badge: meta.badge,
      title: `${meta.titlePrefix} ${toTitleCaseSlug(subjectKey)}`,
      boards: meta.boards,
      description: meta.description,
    };
  });
}

export function SubjectQualificationsGrid({
  subject,
  className,
}: {
  subject: string;
  className?: string;
}) {
  const subjectKey = subject.trim().toLowerCase() as SubjectKey;
  const items = buildItemsForSubject(subjectKey);

  if (items.length === 0) return null;

  return (
    <div
      className={[
        "grid gap-6 justify-center",
        // Auto-fit columns keeps the whole row centered even with fewer cards.
        // Each card column stays within a pleasant width range (matches the design reference).
        "grid-cols-[repeat(auto-fit,minmax(220px,260px))]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item) => (
        <QualificationCard
          key={`${subjectKey}-${item.level}`}
          variant={item.variant}
          badge={item.badge}
          title={item.title}
          boards={item.boards}
          description={item.description}
          href={curriculumHref(item.level, subjectKey)}
        />
      ))}
    </div>
  );
}

