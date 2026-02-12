import type { ReactNode } from "react";

export type CurriculumSectionColumn = {
  title: string;
  iconBgClassName: string;
  icon: ReactNode;
  items: string[];
};

export type AssessmentCard = {
  eyebrow: string;
  title: string;
  bullets: string[];
  accentClassName: string;
  borderClassName: string;
};

export type ExamBoardCard = {
  name: string;
  description: string;
  specification?: string;
};

export type Differentiator = {
  title: string;
  description: string;
  icon: ReactNode;
  iconBgClassName: string;
  iconClassName: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type QualificationKey = "primary" | "ks3" | "gcse" | "igcse" | "a-level" | "ib" | "myp";

export type QualificationMeta = {
  key: QualificationKey;
  label: string;
  gradientClassName: string;
  badge: string;
  age: string;
  heroTrustLine: string;
};

export type SubjectKey =
  | "mathematics"
  | "english"
  | "science"
  | "physics"
  | "chemistry"
  | "biology"
  | "business-studies"
  | "economics"
  | "psychology";

export type SubjectMeta = {
  key: SubjectKey;
  label: string;
  courseHref: string;
};

export type QualificationSubjectContent = {
  qualification: QualificationMeta;
  subject: SubjectMeta;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    subtitle: string;
    keyBadges: Array<{ title: string; subtitle: string }>;
  };
  overview: {
    heading: string;
    lead: string;
    cards?: Array<{ title: string; description: string; bullets: string[] }>;
  };
  courseContent: {
    heading: string;
    lead: string;
    columns: CurriculumSectionColumn[];
  };
  assessment: {
    heading: string;
    lead: string;
    cards: AssessmentCard[];
    noteHeading?: string;
    noteBody?: string;
  };
  examBoards: {
    heading: string;
    cards: ExamBoardCard[];
  };
  differentiators: {
    heading: string;
    items: Differentiator[];
  };
  success: {
    heading: string;
    testimonials: Testimonial[];
  };
};

export const QUALIFICATIONS: Record<QualificationKey, QualificationMeta> = {
  primary: {
    key: "primary",
    label: "Primary",
    gradientClassName: "from-sky-400 to-blue-500",
    badge: "EYFS • KS1 • KS2",
    age: "Ages 5-11",
    heroTrustLine: "Trusted by Dubai families • Skills-first • Confidence-building",
  },
  ks3: {
    key: "ks3",
    label: "Key Stage 3",
    gradientClassName: "from-blue-500 to-blue-600",
    badge: "UK National Curriculum",
    age: "Ages 11-14",
    heroTrustLine: "Strong foundations before GCSE • Small groups • Clear progress tracking",
  },
  gcse: {
    key: "gcse",
    label: "GCSE",
    gradientClassName: "from-green-500 to-green-600",
    badge: "AQA • Edexcel • OCR",
    age: "Ages 14-16",
    heroTrustLine: "Exam-board aligned • Past-paper practice • Target higher grades",
  },
  igcse: {
    key: "igcse",
    label: "IGCSE",
    gradientClassName: "from-teal-500 to-cyan-600",
    badge: "Cambridge • Edexcel",
    age: "Ages 14-16",
    heroTrustLine: "International pathway • Strong fundamentals • Exam technique",
  },
  "a-level": {
    key: "a-level",
    label: "A-Level",
    gradientClassName: "from-purple-500 to-purple-600",
    badge: "AQA • Edexcel • OCR",
    age: "Ages 16-18",
    heroTrustLine: "University-focused outcomes • Advanced problem-solving • Top-grade strategy",
  },
  ib: {
    key: "ib",
    label: "IB",
    gradientClassName: "from-indigo-500 to-indigo-600",
    badge: "SL & HL",
    age: "Ages 16-18",
    heroTrustLine: "SL/HL clarity • IA support • Exam strategy",
  },
  myp: {
    key: "myp",
    label: "MYP",
    gradientClassName: "from-emerald-500 to-green-600",
    badge: "IB Middle Years Programme",
    age: "Ages 11-16",
    heroTrustLine: "Inquiry-based learning • Strong understanding • Assessment readiness",
  },
};

export const SUBJECTS: Record<SubjectKey, SubjectMeta> = {
  mathematics: { key: "mathematics", label: "Mathematics", courseHref: "/courses/mathematics" },
  english: { key: "english", label: "English", courseHref: "/courses/english" },
  science: { key: "science", label: "Science", courseHref: "/courses/science" },
  physics: { key: "physics", label: "Physics", courseHref: "/courses/physics" },
  chemistry: { key: "chemistry", label: "Chemistry", courseHref: "/courses/chemistry" },
  biology: { key: "biology", label: "Biology", courseHref: "/courses/biology" },
  "business-studies": {
    key: "business-studies",
    label: "Business Studies",
    courseHref: "/courses/business-studies",
  },
  economics: { key: "economics", label: "Economics", courseHref: "/courses/economics" },
  psychology: { key: "psychology", label: "Psychology", courseHref: "/courses/psychology" },
};

