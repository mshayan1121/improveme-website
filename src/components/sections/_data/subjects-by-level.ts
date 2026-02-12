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

export type LevelKey = "primary" | "ks3" | "gcse" | "igcse" | "myp" | "a-level" | "ib";

// Keep in sync with `src/app/curriculum/_data/qualification-subjects.content.tsx`
export const SUBJECTS_BY_LEVEL: Record<LevelKey, SubjectKey[]> = {
  primary: ["mathematics", "english", "science"],
  ks3: ["mathematics", "english", "science"],
  gcse: [
    "mathematics",
    "english",
    "physics",
    "chemistry",
    "biology",
    "business-studies",
    "economics",
    "psychology",
  ],
  igcse: [
    "mathematics",
    "english",
    "physics",
    "chemistry",
    "biology",
    "business-studies",
    "economics",
  ],
  "a-level": [
    "mathematics",
    "english",
    "physics",
    "chemistry",
    "biology",
    "business-studies",
    "economics",
    "psychology",
  ],
  ib: [
    "mathematics",
    "english",
    "physics",
    "chemistry",
    "biology",
    "business-studies",
    "economics",
    "psychology",
  ],
  myp: ["chemistry", "physics", "biology"],
};

