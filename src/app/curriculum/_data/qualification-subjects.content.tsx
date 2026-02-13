import React from "react";
import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Calculator,
  FlaskConical,
  Leaf,
  Microscope,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type {
  CurriculumSectionColumn,
  QualificationKey,
  SubjectKey,
  QualificationSubjectContent,
} from "./qualification-subjects";
import { QUALIFICATIONS, SUBJECTS } from "./qualification-subjects";

type ContentKey = `${QualificationKey}:${SubjectKey}`;

function key(q: QualificationKey, s: SubjectKey): ContentKey {
  return `${q}:${s}`;
}

function defaultKeywords(q: string, s: string, boards: string) {
  const qLower = q.toLowerCase();
  const sLower = s.toLowerCase();
  const bLower = boards.toLowerCase();
  return `${qLower} ${sLower} Dubai, ${sLower} tutor Dubai, ${boards} tutor Dubai, ${bLower}, Improve ME Institute, Gold and Diamond Park tutoring`;
}

function basicSchemaDescription(q: string, s: string, extra: string) {
  return `Expert ${q} ${s} tutoring in Dubai. ${extra}`.trim();
}

export const PRIMARY_SUBJECT_KEYS: SubjectKey[] = ["mathematics", "english", "science"];

export const SECONDARY_LEVELS: Array<Exclude<QualificationKey, "primary">> = [
  "ks3",
  "gcse",
  "igcse",
  "a-level",
  "ib",
  "myp",
];

export const SUBJECTS_BY_LEVEL: Record<QualificationKey, SubjectKey[]> = {
  primary: ["mathematics", "english", "science"],
  eyfs: ["mathematics", "english"],
  ks1: ["mathematics", "english", "science"],
  ks2: ["mathematics", "english", "science"],
  ks3: ["mathematics", "english", "science"],
  gcse: [
    "mathematics",
    "english-language",
    "physics",
    "chemistry",
    "biology",
    "business-studies",
    "economics",
    "psychology",
  ],
  igcse: [
    "mathematics",
    "english-language",
    "physics",
    "chemistry",
    "biology",
    "business-studies",
    "economics",
    "psychology",
  ],
  "a-level": [
    "mathematics",
    "english-literature",
    "physics",
    "chemistry",
    "biology",
    "business",
    "economics",
    "psychology",
  ],
  ib: [
    "mathematics",
    "english",
    "physics",
    "chemistry",
    "biology",
    "business-management",
    "economics",
    "psychology",
  ],
  myp: ["mathematics", "english", "sciences", "individuals-societies"],
};

/** URL slug -> canonical subject key for content lookup (when slug differs from key) */
export const SUBJECT_SLUG_TO_KEY: Partial<Record<QualificationKey, Record<string, SubjectKey>>> = {
  gcse: { "english-language": "english" },
  igcse: { "english-language": "english" },
  "a-level": { "english-literature": "english", business: "business-studies" },
  ib: { "business-management": "business-studies" },
};

/** Resolve display subject key to canonical key used for course content/assessment blocks */
function getContentSubjectKey(q: QualificationKey, s: SubjectKey): SubjectKey {
  const map = SUBJECT_SLUG_TO_KEY[q as keyof typeof SUBJECT_SLUG_TO_KEY];
  if (map && map[s as string]) return map[s as string] as SubjectKey;
  if (s === "english-language" || s === "english-literature") return "english";
  if (s === "business" || s === "business-management") return "business-studies";
  if (s === "sciences") return "science";
  return s;
}

function contentFor(q: QualificationKey, s: SubjectKey): QualificationSubjectContent {
  const qualification = QUALIFICATIONS[q];
  const subject = SUBJECTS[s];
  const contentSubjectKey = getContentSubjectKey(q, s);

  const subjectLabel = subject.label;
  const qualificationLabel = qualification.label;

  // Per-qualification “boards/format” string for SEO + hero.
  const boardsForSeo =
    q === "ib" ? "SL & HL" : q === "myp" ? "MYP Criteria" : q === "primary" || q === "eyfs" || q === "ks1" || q === "ks2" ? "UK & International Schools" : qualification.badge.replaceAll(" • ", ", ");

  const seoTitle = `${qualificationLabel} ${subjectLabel} Tutoring Dubai | ${boardsForSeo} | Improve ME`;
  const seoDescription = basicSchemaDescription(
    `${qualificationLabel}`,
    subjectLabel,
    "Small groups, proven results, and structured progress tracking. Book a free assessment."
  );

  const levelKeyBadges =
    q === "primary" || q === "eyfs" || q === "ks1" || q === "ks2"
      ? q === "eyfs"
        ? [
            { title: "Ages 3–5", subtitle: "EYFS" },
            { title: "Play & Learn", subtitle: "Confidence first" },
            { title: "Small Groups", subtitle: "2–6 students" },
          ]
        : q === "ks1"
          ? [
              { title: "Ages 5–7", subtitle: "Year 1–2" },
              { title: "Core Skills", subtitle: "Confidence first" },
              { title: "Small Groups", subtitle: "2–6 students" },
            ]
          : q === "ks2"
            ? [
                { title: "Ages 7–11", subtitle: "Year 3–6" },
                { title: "Core Skills", subtitle: "Confidence first" },
                { title: "Small Groups", subtitle: "2–6 students" },
              ]
            : [
                { title: "Ages 5–11", subtitle: "KS1–KS2" },
                { title: "Core Skills", subtitle: "Confidence first" },
                { title: "Small Groups", subtitle: "2–6 students" },
              ]
      : q === "ks3"
        ? [
            { title: "Ages 11–14", subtitle: "Year 7–9" },
            { title: "Foundation", subtitle: "Before GCSE" },
            { title: "Topic Mastery", subtitle: "Weekly targets" },
          ]
        : q === "gcse"
          ? [
              { title: "Ages 14–16", subtitle: "Year 10–11" },
              { title: "Exam Boards", subtitle: "AQA • Edexcel • OCR" },
              { title: "Target Grades", subtitle: "Grades 7–9" },
            ]
          : q === "igcse"
            ? [
                { title: "Ages 14–16", subtitle: "Year 10–11" },
                { title: "Exam Boards", subtitle: "Cambridge • Edexcel" },
                { title: "Target Grades", subtitle: "A*–A / 7–9" },
              ]
            : q === "a-level"
              ? [
                  { title: "Ages 16–18", subtitle: "Year 12–13" },
                  { title: "Exam Boards", subtitle: "AQA • Edexcel • OCR" },
                  { title: "University Prep", subtitle: "Top-grade strategy" },
                ]
              : q === "ib"
                ? [
                    { title: "Ages 16–18", subtitle: "DP Years 1–2" },
                    { title: "Levels", subtitle: "SL & HL" },
                    { title: "Assessments", subtitle: "IA + exams" },
                  ]
                : [
                    { title: "Ages 11–16", subtitle: "MYP" },
                    { title: "Approach", subtitle: "Inquiry-led" },
                    { title: "Assessments", subtitle: "Criteria-based" },
                  ];

  // Subject-specific building blocks.
  const courseContentColumns = (() => {
    const common = {
      mathsPrimary: [
        {
          title: "Number Sense",
          iconBgClassName: "bg-green-100",
          icon: <Calculator className="w-8 h-8 text-green-600" />,
          items: [
            "Place value and number bonds",
            "Four operations with fluency",
            "Fractions, decimals, percentages (age-appropriate)",
            "Mental maths and estimation",
            "Word problems and reasoning",
          ],
        },
        {
          title: "Algebra & Geometry",
          iconBgClassName: "bg-blue-100",
          icon: <Target className="w-8 h-8 text-blue-600" />,
          items: [
            "Patterns and sequences",
            "Shapes, symmetry, and angles",
            "Measurement and units",
            "Coordinates and simple graphs",
            "Times tables mastery",
          ],
        },
        {
          title: "Data & Probability",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Charts and tables",
            "Averages (mean/median/mode) introduction",
            "Simple probability",
            "Data handling and interpretation",
            "Reasoning with data",
          ],
        },
      ],
      mathsGCSE: [
        {
          title: "Algebraic Proficiency",
          iconBgClassName: "bg-green-100",
          icon: <Calculator className="w-8 h-8 text-green-600" />,
          items: [
            "Expanding, factorising, and solving equations",
            "Sequences and nth term",
            "Quadratic equations and graphs",
            "Tackling the algebra that trips up Grades 7–9",
            "Problem-solving with algebra",
          ],
        },
        {
          title: "Geometry & Trigonometry",
          iconBgClassName: "bg-blue-100",
          icon: <Target className="w-8 h-8 text-blue-600" />,
          items: [
            "Circle theorems and proof",
            "Pythagoras, trigonometry (SOH CAH TOA)",
            "Area, volume, and similarity",
            "Vectors and transformations",
            "Multi-step geometric reasoning",
          ],
        },
        {
          title: "Probability & Statistics",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Probability trees and Venn diagrams",
            "Averages, spread, and sampling",
            "Representing and interpreting data",
            "Foundation vs Higher tier content",
            "Exam technique and command words",
          ],
        },
      ],
      mathsALevel: [
        {
          title: "Pure Mathematics 1 & 2",
          iconBgClassName: "bg-green-100",
          icon: <Calculator className="w-8 h-8 text-green-600" />,
          items: [
            "Differentiation and integration (core calculus)",
            "Trigonometry, identities, and equations",
            "Sequences, series, and binomial expansion",
            "Proof and algebraic structures",
            "University-prep problem-solving",
          ],
        },
        {
          title: "Statistics",
          iconBgClassName: "bg-blue-100",
          icon: <Target className="w-8 h-8 text-blue-600" />,
          items: [
            "Probability distributions",
            "Statistical hypothesis testing",
            "Large data set and modelling",
            "Data presentation and interpretation",
            "Synoptic links with mechanics",
          ],
        },
        {
          title: "Mechanics",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Kinematics and variable acceleration",
            "Forces, Newton's laws, and connected particles",
            "Moments and equilibrium",
            "Projectiles and calculus in context",
            "Deep understanding for exam application",
          ],
        },
      ],
      mathsIB: [
        {
          title: "Analysis & Approaches (AA)",
          iconBgClassName: "bg-green-100",
          icon: <Calculator className="w-8 h-8 text-green-600" />,
          items: [
            "Calculus, functions, and proof",
            "SL vs HL: depth and breadth differences",
            "Algebra and trigonometry at HL",
            "Internal Assessment (IA) support",
            "Inquiry-based mathematical exploration",
          ],
        },
        {
          title: "Applications & Interpretation (AI)",
          iconBgClassName: "bg-blue-100",
          icon: <Target className="w-8 h-8 text-blue-600" />,
          items: [
            "Modelling and statistics",
            "Real-world applications and technology",
            "SL vs HL: applied focus",
            "IA planning and criteria alignment",
            "Data and financial mathematics",
          ],
        },
        {
          title: "Exam & IA Strategy",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Paper 1 (non-calculator) and Paper 2 technique",
            "HL Paper 3 (option) where applicable",
            "IA structure, feedback, and grade maximisation",
            "Markscheme awareness and common pitfalls",
            "SL & HL grade boundaries and targeting",
          ],
        },
      ],
      mathsMYP: [
        {
          title: "Number & Algebra",
          iconBgClassName: "bg-green-100",
          icon: <Calculator className="w-8 h-8 text-green-600" />,
          items: [
            "Algebraic reasoning and manipulation",
            "Functions and graphs",
            "Number systems and fluency",
            "Inquiry-based problem-solving",
            "MYP criteria A–D alignment",
          ],
        },
        {
          title: "Geometry & Trigonometry",
          iconBgClassName: "bg-blue-100",
          icon: <Target className="w-8 h-8 text-blue-600" />,
          items: [
            "Space and shape",
            "Measurement and trigonometry (phase-appropriate)",
            "Transformations and proof",
            "Real-world and interdisciplinary links",
            "Criteria-based assessment readiness",
          ],
        },
        {
          title: "Statistics & Probability",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Data handling and representation",
            "Probability and uncertainty",
            "Modelling and evaluation",
            "ATL: thinking and communication",
            "Progress to DP Mathematics",
          ],
        },
      ],
      mathsKS3: [
        {
          title: "Core Skills",
          iconBgClassName: "bg-green-100",
          icon: <Calculator className="w-8 h-8 text-green-600" />,
          items: [
            "Algebraic manipulation (where relevant)",
            "Ratio, proportion, and change",
            "Number and calculation strategies",
            "Accuracy, estimation, and bounds",
            "Problem-solving methods",
          ],
        },
        {
          title: "Algebra & Geometry",
          iconBgClassName: "bg-blue-100",
          icon: <Target className="w-8 h-8 text-blue-600" />,
          items: [
            "Equations, inequalities, and graphs",
            "Geometry, measures, and constructions",
            "Trigonometry (where applicable)",
            "Vectors and transformations (where applicable)",
            "Interpreting mathematical models",
          ],
        },
        {
          title: "Data & Probability",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Statistical representations and interpretation",
            "Averages, spread, and sampling",
            "Probability calculations and diagrams",
            "Correlation and trends (where applicable)",
            "Exam-style data questions",
          ],
        },
      ],
      englishPrimary: [
        {
          title: "Reading",
          iconBgClassName: "bg-blue-100",
          icon: <BookOpen className="w-8 h-8 text-blue-600" />,
          items: [
            "Phonics and decoding (as needed)",
            "Comprehension strategies",
            "Vocabulary building",
            "Inference and prediction",
            "Reading fluency and confidence",
          ],
        },
        {
          title: "Writing",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Sentence structure and punctuation",
            "Spelling patterns and accuracy",
            "Planning and organising ideas",
            "Creative writing foundations",
            "Handwriting and presentation",
          ],
        },
        {
          title: "Speaking & Listening",
          iconBgClassName: "bg-purple-100",
          icon: <Users className="w-8 h-8 text-purple-600" />,
          items: [
            "Confidence in communication",
            "Presentation and storytelling",
            "Listening and responding",
            "Vocabulary and expression",
            "Classroom participation skills",
          ],
        },
      ],
      englishLanguageGCSE: [
        {
          title: "Creative Writing",
          iconBgClassName: "bg-blue-100",
          icon: <BookOpen className="w-8 h-8 text-blue-600" />,
          items: [
            "Narrative and descriptive writing",
            "Planning, structure, and timing",
            "Vocabulary and literary techniques",
            "Essay structure and paragraphing",
            "Common pitfalls (vagueness, weak openings)",
          ],
        },
        {
          title: "Non-fiction Analysis",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Unseen 19th- and 20th/21st-century texts",
            "Language and structure analysis",
            "Comparing viewpoints and writers' methods",
            "Evaluation and critical response",
            "Exam technique and command words",
          ],
        },
        {
          title: "Spoken Language",
          iconBgClassName: "bg-purple-100",
          icon: <Users className="w-8 h-8 text-purple-600" />,
          items: [
            "Presentations and formal discussion",
            "Planning and responding to questions",
            "Confidence and clarity (where assessed)",
            "Preparation for the spoken endorsement",
            "Linking to reading and writing skills",
          ],
        },
      ],
      englishLiteratureGCSE: [
        {
          title: "Shakespeare",
          iconBgClassName: "bg-blue-100",
          icon: <BookOpen className="w-8 h-8 text-blue-600" />,
          items: [
            "Set play: themes, character, and context",
            "Extract and whole-text analysis",
            "Language, structure, and dramatic effect",
            "Essay structure and quote integration",
            "Tackling the 'explain' and 'explore' demands",
          ],
        },
        {
          title: "Modern Drama & Prose",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "e.g. An Inspector Calls, Jekyll & Hyde",
            "Themes, character, and writer's methods",
            "Comparative and contextual understanding",
            "Timed essay planning and execution",
            "Quote selection and analysis",
          ],
        },
        {
          title: "Poetry Anthology & Unseen",
          iconBgClassName: "bg-purple-100",
          icon: <Users className="w-8 h-8 text-purple-600" />,
          items: [
            "Anthology poems: comparison and analysis",
            "Unseen poetry: approach and comparison",
            "Form, structure, and language",
            "Essay structure under time pressure",
            "Grades 7–9 response strategies",
          ],
        },
      ],
      englishALevel: [
        {
          title: "Comparative Coursework",
          iconBgClassName: "bg-blue-100",
          icon: <BookOpen className="w-8 h-8 text-blue-600" />,
          items: [
            "NEA: independent critical study",
            "Comparing texts across time and genre",
            "Critical theory and contexts",
            "Planning, drafting, and refining",
            "Academic style and bibliography",
          ],
        },
        {
          title: "Set Texts & Exam Papers",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Drama, prose, and poetry (board-specific)",
            "Tragedy, comedy, and genre study",
            "Unseen analysis and comparison",
            "Essay structure and argument",
            "University-level critical reading",
          ],
        },
        {
          title: "Critical Theory",
          iconBgClassName: "bg-purple-100",
          icon: <Users className="w-8 h-8 text-purple-600" />,
          items: [
            "Literary theory and interpretation",
            "Contexts: historical, social, critical",
            "Evaluation and judgement (AO5)",
            "Synoptic assessment preparation",
            "Deep understanding for top grades",
          ],
        },
      ],
      englishIB: [
        {
          title: "Works in Translation & Literary Genres",
          iconBgClassName: "bg-blue-100",
          icon: <BookOpen className="w-8 h-8 text-blue-600" />,
          items: [
            "SL & HL: prescribed titles and options",
            "Individual Oral (IO) preparation",
            "Guided literary analysis",
            "Inquiry-based literary exploration",
            "Criteria alignment (A–D)",
          ],
        },
        {
          title: "Paper 1 & Paper 2",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Unseen literary passages (Paper 1)",
            "Comparative essay (Paper 2)",
            "HL Essay support",
            "Markscheme and command terms",
            "IA and exam strategy",
          ],
        },
        {
          title: "Speaking & Critical Response",
          iconBgClassName: "bg-purple-100",
          icon: <Users className="w-8 h-8 text-purple-600" />,
          items: [
            "Individual Oral structure and delivery",
            "Global issues and literary works",
            "Critical thinking and evaluation",
            "SL vs HL depth and breadth",
            "Consistent performance under pressure",
          ],
        },
      ],
      englishMYP: [
        {
          title: "Reading & Analysis",
          iconBgClassName: "bg-blue-100",
          icon: <BookOpen className="w-8 h-8 text-blue-600" />,
          items: [
            "Comprehension and analysis",
            "Language and structure techniques",
            "Comparing texts and viewpoints",
            "Inference, evaluation, synthesis",
            "MYP criteria and ATL",
          ],
        },
        {
          title: "Writing",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Narrative and transactional writing",
            "Grammar, punctuation, and style",
            "Planning and organising under time",
            "Editing and feedback loops",
            "Criteria-based success",
          ],
        },
        {
          title: "Speaking & Listening",
          iconBgClassName: "bg-purple-100",
          icon: <Users className="w-8 h-8 text-purple-600" />,
          items: [
            "Presentations and discussions",
            "Argument and persuasion",
            "Critical thinking and debate",
            "Inquiry and reflection",
            "Progress to DP Language & Literature",
          ],
        },
      ],
      englishKS3: [
        {
          title: "Reading",
          iconBgClassName: "bg-blue-100",
          icon: <BookOpen className="w-8 h-8 text-blue-600" />,
          items: [
            "Comprehension and analysis",
            "Language and structure techniques",
            "Comparing texts and viewpoints",
            "Inference, evaluation, synthesis",
            "Unseen text exam technique",
          ],
        },
        {
          title: "Writing",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Narrative and descriptive writing",
            "Transactional writing (letters/speeches/articles)",
            "Grammar, punctuation, and style",
            "Planning under timed conditions",
            "Editing, improving, and feedback loops",
          ],
        },
        {
          title: "Speaking & Listening",
          iconBgClassName: "bg-purple-100",
          icon: <Users className="w-8 h-8 text-purple-600" />,
          items: [
            "Presentations and discussions",
            "Argument building and persuasion",
            "Critical thinking and debate",
            "Exam-style responses (where assessed)",
            "Confidence and clarity under pressure",
          ],
        },
      ],
      scienceGeneral: [
        {
          title: "Biology",
          iconBgClassName: "bg-emerald-100",
          icon: <Leaf className="w-8 h-8 text-emerald-600" />,
          items:
            q === "primary"
              ? [
                  "Living things and habitats",
                  "Plants and humans",
                  "Food chains (intro)",
                  "Health and wellbeing",
                  "Simple classification",
                ]
              : [
                  "Cells, tissues, and systems (intro)",
                  "Reproduction and inheritance (intro)",
                  "Ecology and environment",
                  "Health and disease basics",
                  "Data interpretation in biology",
                ],
        },
        {
          title: "Chemistry",
          iconBgClassName: "bg-orange-100",
          icon: <FlaskConical className="w-8 h-8 text-orange-600" />,
          items:
            q === "primary"
              ? [
                  "Materials and properties",
                  "States of matter",
                  "Simple mixtures and solutions",
                  "Changes and reactions (intro)",
                  "Scientific vocabulary",
                ]
              : [
                  "Particles, elements, and compounds",
                  "Reactions and energy changes (intro)",
                  "Acids, alkalis, and salts (intro)",
                  "Separation techniques",
                  "Practical skills and safety",
                ],
        },
        {
          title: "Physics",
          iconBgClassName: "bg-sky-100",
          icon: <Zap className="w-8 h-8 text-sky-600" />,
          items:
            q === "primary"
              ? [
                  "Forces and motion (intro)",
                  "Light and sound",
                  "Electricity basics",
                  "Earth and space",
                  "Working scientifically",
                ]
              : [
                  "Forces and energy (intro)",
                  "Electricity and magnetism basics",
                  "Waves and optics (intro)",
                  "Space physics basics",
                  "Graphs and calculations",
                ],
        },
      ],
      physics: [
        {
          title: "Forces & Motion",
          iconBgClassName: "bg-blue-100",
          icon: <Zap className="w-8 h-8 text-blue-600" />,
          items: [
            "Kinematics and graphs",
            "Newton’s laws and free-body diagrams",
            "Momentum and impulse",
            "Moments and equilibrium",
            "Circular motion (where applicable)",
          ],
        },
        {
          title: "Energy & Waves",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Work, energy, and power",
            "Efficiency and energy transfers",
            "Waves, reflection and refraction",
            "Sound and electromagnetic spectrum",
            "Required practicals (where applicable)",
          ],
        },
        {
          title: "Electricity & Space",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Circuits and electrical quantities",
            "Series/parallel problem-solving",
            "Magnetism and electromagnetism",
            "Radioactivity (where applicable)",
            "Astrophysics / space (where applicable)",
          ],
        },
      ],
      physicsGCSE: [
        {
          title: "Forces & Motion",
          iconBgClassName: "bg-blue-100",
          icon: <Zap className="w-8 h-8 text-blue-600" />,
          items: [
            "Forces, motion, and Newton's laws",
            "Speed, velocity, and acceleration graphs",
            "Momentum and stopping distances",
            "Required practicals and calculations",
            "Common pitfalls: units and direction",
          ],
        },
        {
          title: "Energy, Electricity & Waves",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Energy stores and transfers",
            "Circuits, current, potential difference, resistance",
            "Domestic electricity and power",
            "Waves, electromagnetic spectrum, and atomic structure",
            "Exam technique for 6-mark questions",
          ],
        },
        {
          title: "Magnetism & Atomic Structure",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Magnetism and electromagnetism",
            "Particle model and pressure",
            "Radioactivity and nuclear physics",
            "Space physics (where applicable)",
            "Foundation vs Higher tier focus",
          ],
        },
      ],
      physicsALevel: [
        {
          title: "Particle Physics & Radiation",
          iconBgClassName: "bg-blue-100",
          icon: <Zap className="w-8 h-8 text-blue-600" />,
          items: [
            "Particles and radiation",
            "Quantum phenomena and photoelectric effect",
            "Nuclear physics and decay",
            "Required practicals and uncertainty",
            "Synoptic links across papers",
          ],
        },
        {
          title: "Mechanics, Materials & Waves",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Forces, motion, and momentum",
            "Materials and deformation",
            "Waves and superposition",
            "Simple Harmonic Motion (SHM)",
            "University-prep problem-solving",
          ],
        },
        {
          title: "Fields & Options",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Electric and magnetic fields",
            "Gravitational fields",
            "Capacitors and electromagnetic induction",
            "Astrophysics / medical / engineering (board options)",
            "Deep understanding for extended response",
          ],
        },
      ],
      chemistry: [
        {
          title: "Physical Chemistry",
          iconBgClassName: "bg-blue-100",
          icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
          items: [
            "Atomic structure and bonding",
            "Moles, equations, and calculations",
            "Energetics and reaction rates",
            "Equilibria (where applicable)",
            "Electrochemistry (where applicable)",
          ],
        },
        {
          title: "Inorganic Chemistry",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Periodic table trends",
            "Group chemistry and reactions",
            "Acids, bases, and salts",
            "Redox and oxidation states",
            "Practical techniques and analysis",
          ],
        },
        {
          title: "Organic Chemistry",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Alkanes, alkenes, alcohols (as applicable)",
            "Functional groups and mechanisms (as applicable)",
            "Polymers and materials",
            "Spectroscopy (A-Level/IB where applicable)",
            "Exam-style synthesis questions",
          ],
        },
      ],
      chemistryGCSE: [
        {
          title: "Atomic Structure & Bonding",
          iconBgClassName: "bg-blue-100",
          icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
          items: [
            "Atomic structure and the periodic table",
            "Bonding (ionic, covalent, metallic)",
            "Structure and properties of matter",
            "Moles and calculations (key pain point)",
            "Chemical equations and balancing",
          ],
        },
        {
          title: "Reactions & Energy",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Acids, bases, and salts",
            "Electrolysis and redox",
            "Energy changes and rates of reaction",
            "Reversible reactions and equilibria",
            "Required practicals and safety",
          ],
        },
        {
          title: "Organic & Analysis",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Crude oil and fuels",
            "Organic chemistry (alkanes, alkenes, alcohols)",
            "Polymers and materials",
            "Chemical analysis and chromatography",
            "Foundation vs Higher and exam technique",
          ],
        },
      ],
      chemistryALevel: [
        {
          title: "Physical Chemistry",
          iconBgClassName: "bg-blue-100",
          icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
          items: [
            "Atomic structure, bonding, and energetics",
            "Kinetics, equilibria, and Kp",
            "Thermodynamics and Gibbs free energy",
            "Electrochemistry and acids and bases",
            "Moles and calculations at depth",
          ],
        },
        {
          title: "Inorganic Chemistry",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Periodicity and period 3",
            "Group 2 and Group 7 chemistry",
            "Transition metals and redox",
            "Practical techniques and analysis",
            "Synoptic assessment preparation",
          ],
        },
        {
          title: "Organic Synthesis",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Mechanisms and functional groups",
            "Synthesis and multi-step routes",
            "Spectroscopy (NMR, IR, MS)",
            "Organic analysis and required practicals",
            "University-level problem-solving",
          ],
        },
      ],
      biology: [
        {
          title: "Cells & Systems",
          iconBgClassName: "bg-emerald-100",
          icon: <Leaf className="w-8 h-8 text-emerald-600" />,
          items: [
            "Cell structure and transport",
            "Enzymes and biological molecules",
            "Human body systems",
            "Homeostasis and response",
            "Required practicals (where applicable)",
          ],
        },
        {
          title: "Genetics & Evolution",
          iconBgClassName: "bg-blue-100",
          icon: <Target className="w-8 h-8 text-blue-600" />,
          items: [
            "DNA, genes, and inheritance",
            "Variation and natural selection",
            "Biotechnology (where applicable)",
            "Classification and biodiversity",
            "Data handling in biology",
          ],
        },
        {
          title: "Ecology & Skills",
          iconBgClassName: "bg-purple-100",
          icon: <Microscope className="w-8 h-8 text-purple-600" />,
          items: [
            "Ecosystems and cycles",
            "Population, sampling, and fieldwork",
            "Scientific method and evaluation",
            "Graphing and calculations",
            "Exam technique and command words",
          ],
        },
      ],
      biologyGCSE: [
        {
          title: "Cell Biology & Infection",
          iconBgClassName: "bg-emerald-100",
          icon: <Leaf className="w-8 h-8 text-emerald-600" />,
          items: [
            "Cell structure, division, and transport",
            "Organisation and digestive system",
            "Communicable and non-communicable disease",
            "Monoclonal antibodies and vaccination",
            "Required practicals and data",
          ],
        },
        {
          title: "Bioenergetics & Homeostasis",
          iconBgClassName: "bg-blue-100",
          icon: <Target className="w-8 h-8 text-blue-600" />,
          items: [
            "Photosynthesis and respiration",
            "Human nervous and endocrine systems",
            "Homeostasis and control",
            "Plant hormones and response",
            "Calculation and application questions",
          ],
        },
        {
          title: "Ecology & Genetics",
          iconBgClassName: "bg-purple-100",
          icon: <Microscope className="w-8 h-8 text-purple-600" />,
          items: [
            "Ecosystems, adaptation, and biodiversity",
            "Inheritance, variation, and evolution",
            "Classification and evolution",
            "Ecology fieldwork and sampling",
            "Exam technique and extended writing",
          ],
        },
      ],
      biologyALevel: [
        {
          title: "Biological Molecules & Cells",
          iconBgClassName: "bg-emerald-100",
          icon: <Leaf className="w-8 h-8 text-emerald-600" />,
          items: [
            "Biological molecules (proteins, nucleic acids, etc.)",
            "Cell structure and membranes",
            "Cell division and cell cycle",
            "Exchange and transport",
            "Required practicals and evaluation",
          ],
        },
        {
          title: "Genetics & Gene Expression",
          iconBgClassName: "bg-blue-100",
          icon: <Target className="w-8 h-8 text-blue-600" />,
          items: [
            "DNA, genes, and inheritance",
            "Gene expression and epigenetics",
            "Populations and evolution",
            "Classification and biodiversity",
            "Synoptic and application questions",
          ],
        },
        {
          title: "Organisms & Ecosystems",
          iconBgClassName: "bg-purple-100",
          icon: <Microscope className="w-8 h-8 text-purple-600" />,
          items: [
            "Energy transfer and nutrient cycles",
            "Response to the environment",
            "Ecosystems and succession",
            "Practical and investigative skills",
            "University-prep depth and essay technique",
          ],
        },
      ],
      business: [
        {
          title: "Marketing Mix & Strategy",
          iconBgClassName: "bg-blue-100",
          icon: <Briefcase className="w-8 h-8 text-blue-600" />,
          items: [
            "Product, price, place, promotion (4Ps)",
            "Market research and segmentation",
            "Branding and positioning",
            "Growth strategies and competitive advantage",
            "Case study analysis and application",
          ],
        },
        {
          title: "Finance & Accounts",
          iconBgClassName: "bg-green-100",
          icon: <TrendingUp className="w-8 h-8 text-green-600" />,
          items: [
            "Costs, revenue, profit, and break-even",
            "Cash flow and budgets",
            "Financial statements and ratios",
            "Sources of finance and investment",
            "Data response and calculation questions",
          ],
        },
        {
          title: "Operations Management",
          iconBgClassName: "bg-purple-100",
          icon: <Target className="w-8 h-8 text-purple-600" />,
          items: [
            "Operations and quality management",
            "Human resources and leadership",
            "Stakeholders, ethics, and external influences",
            "Entrepreneurship and business planning",
            "Essay structure and evaluation (A-Level/IB)",
          ],
        },
      ],
      economics: [
        {
          title: "Microeconomics",
          iconBgClassName: "bg-blue-100",
          icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
          items: [
            "Supply, demand, and elasticities",
            "Market failure and government intervention",
            "Firms, costs, and competition",
            "Labour markets (where applicable)",
            "Diagram technique and application",
          ],
        },
        {
          title: "Macroeconomics",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "GDP, inflation, and unemployment",
            "Fiscal and monetary policy",
            "Aggregate demand and supply",
            "International trade and exchange rates",
            "Evaluation and judgement",
          ],
        },
        {
          title: "Global Economics & Exam Skills",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Globalisation and development",
            "Data response and essay planning",
            "Structured evaluation paragraphs",
            "Application to case studies and context",
            "Past-paper practice and timing",
          ],
        },
      ],
      psychology: [
        {
          title: "Core Approaches",
          iconBgClassName: "bg-blue-100",
          icon: <Brain className="w-8 h-8 text-blue-600" />,
          items: [
            "Research methods and ethics",
            "Biological and cognitive approaches",
            "Learning theories and behaviour",
            "Social influence and identity",
            "Key studies and evaluation",
          ],
        },
        {
          title: "Topics & Applications",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Memory and attachment (as applicable)",
            "Psychopathology (as applicable)",
            "Development and relationships (as applicable)",
            "Stress and health (as applicable)",
            "Applying theory to scenarios",
          ],
        },
        {
          title: "Exam Technique",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Command words and mark schemes",
            "AO1/AO2/AO3 structure",
            "Evaluation paragraphs",
            "Research methods questions",
            "Timed practice and feedback",
          ],
        },
      ],
      individualsSocieties: [
        {
          title: "History & Change",
          iconBgClassName: "bg-blue-100",
          icon: <BookOpen className="w-8 h-8 text-blue-600" />,
          items: [
            "Historical sources and evidence",
            "Cause and consequence",
            "Change over time",
            "Inquiry and research skills",
            "Presenting arguments",
          ],
        },
        {
          title: "Geography & Systems",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "Human and physical geography",
            "Global systems and resources",
            "Sustainability and development",
            "Spatial thinking and maps",
            "Criteria-based assessment",
          ],
        },
        {
          title: "Civics & Economics",
          iconBgClassName: "bg-purple-100",
          icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
          items: [
            "Civic participation and rights",
            "Economic concepts (intro)",
            "Global perspectives",
            "MYP criteria and objectives",
            "Inquiry cycles and reflection",
          ],
        },
      ],
    } as const;

    const toMutableColumns = (
      cols: readonly {
        readonly title: string;
        readonly iconBgClassName: string;
        readonly icon: React.ReactNode;
        readonly items: readonly string[];
      }[]
    ): CurriculumSectionColumn[] =>
      cols.map((c) => ({
        ...c,
        items: [...c.items],
      }));

    switch (contentSubjectKey) {
      case "mathematics":
        if (q === "primary" || q === "eyfs" || q === "ks1" || q === "ks2") return toMutableColumns(common.mathsPrimary);
        if (q === "ks3") return toMutableColumns(common.mathsKS3);
        if (q === "gcse" || q === "igcse") return toMutableColumns(common.mathsGCSE);
        if (q === "a-level") return toMutableColumns(common.mathsALevel);
        if (q === "ib") return toMutableColumns(common.mathsIB);
        if (q === "myp") return toMutableColumns(common.mathsMYP);
        return toMutableColumns(common.mathsKS3);
      case "english":
        if (q === "primary" || q === "eyfs" || q === "ks1" || q === "ks2") return toMutableColumns(common.englishPrimary);
        if (q === "ks3") return toMutableColumns(common.englishKS3);
        if (q === "gcse" || q === "igcse") return toMutableColumns(common.englishLanguageGCSE);
        if (q === "a-level") return toMutableColumns(common.englishALevel);
        if (q === "ib") return toMutableColumns(common.englishIB);
        if (q === "myp") return toMutableColumns(common.englishMYP);
        return toMutableColumns(common.englishKS3);
      case "science":
        return toMutableColumns(common.scienceGeneral);
      case "sciences":
        return toMutableColumns(common.scienceGeneral);
      case "individuals-societies":
        return toMutableColumns(common.individualsSocieties);
      case "physics":
        if (q === "gcse" || q === "igcse") return toMutableColumns(common.physicsGCSE);
        if (q === "a-level" || q === "ib") return toMutableColumns(common.physicsALevel);
        return toMutableColumns(common.physics);
      case "chemistry":
        if (q === "gcse" || q === "igcse") return toMutableColumns(common.chemistryGCSE);
        if (q === "a-level" || q === "ib") return toMutableColumns(common.chemistryALevel);
        return toMutableColumns(common.chemistry);
      case "biology":
        if (q === "gcse" || q === "igcse") return toMutableColumns(common.biologyGCSE);
        if (q === "a-level" || q === "ib") return toMutableColumns(common.biologyALevel);
        return toMutableColumns(common.biology);
      case "business-studies":
        return toMutableColumns(common.business);
      case "economics":
        return toMutableColumns(common.economics);
      case "psychology":
        return toMutableColumns(common.psychology);
      default:
        return toMutableColumns(common.scienceGeneral);
    }
  })();

  const overviewCards =
    q === "gcse" && contentSubjectKey === "mathematics"
      ? [
          {
            title: "Foundation Tier",
            description:
              "Grades 1–5. Focus on essential mathematical skills, number work, basic algebra, geometry, and statistics.",
            bullets: ["Core arithmetic and fluency", "Introduction to algebra", "Geometry and measurement basics"],
          },
          {
            title: "Higher Tier",
            description:
              "Grades 4–9. Advanced topics including challenging algebra, trigonometry, and multi-step problem-solving.",
            bullets: ["Algebraic reasoning and equations", "Trigonometry and circle theorems", "Higher-grade exam technique"],
          },
        ]
      : q === "gcse" && contentSubjectKey === "english"
        ? [
            {
              title: "Creative Reading & Writing",
              description:
                "Unseen literature extract and creative writing (narrative/descriptive). We focus on structure, vocabulary, and essay technique.",
              bullets: ["Unseen text analysis", "Creative writing planning and execution", "Grades 7–9 response strategies"],
            },
            {
              title: "Writers' Viewpoints & Non-fiction",
              description:
                "Non-fiction reading, comparison, and transactional writing. Building analysis and evaluation under timed conditions.",
              bullets: ["Comparing viewpoints and writers' methods", "Transactional writing (letters, speeches, articles)", "Spoken Language endorsement"],
            },
          ]
        : q === "a-level" && contentSubjectKey === "mathematics"
          ? [
              {
                title: "Pure Mathematics",
                description:
                  "Proof, algebra, calculus (differentiation and integration), trigonometry, and sequences. The core of A-Level Maths and university preparation.",
                bullets: ["Differentiation and integration", "Trigonometry and identities", "Proof and algebraic structures"],
              },
              {
                title: "Statistics & Mechanics",
                description:
                  "Applied mathematics: probability, distributions, hypothesis testing, kinematics, forces, and moments. Synoptic links with Pure.",
                bullets: ["Statistics: distributions and testing", "Mechanics: forces, motion, moments", "Synoptic assessment preparation"],
              },
            ]
          : undefined;

  const assessmentCards = (() => {
    if (q === "primary" || q === "eyfs" || q === "ks1" || q === "ks2") {
      return [
        {
          eyebrow: "Diagnostic",
          title: "Baseline Assessment",
          bullets: ["Quick skills check", "Confidence and gaps identified", "Personalised plan"],
          accentClassName: "text-blue-600",
          borderClassName: "border-blue-500 bg-blue-50",
        },
        {
          eyebrow: "Weekly",
          title: "Skills Tracking",
          bullets: ["Short quizzes", "Homework feedback", "Milestone targets"],
          accentClassName: "text-blue-600",
          borderClassName: "border-blue-500 bg-blue-50",
        },
        {
          eyebrow: "Termly",
          title: "Progress Review",
          bullets: ["Clear next steps", "Parent updates", "Exam readiness (if applicable)"],
          accentClassName: "text-blue-600",
          borderClassName: "border-blue-500 bg-blue-50",
        },
      ];
    }

    if (q === "ib" && contentSubjectKey === "mathematics") {
      return [
        { eyebrow: "Internal", title: "Mathematics IA", bullets: ["Exploration or investigation", "SL & HL criteria", "Personal engagement and reflection"], accentClassName: "text-indigo-600", borderClassName: "border-indigo-500 bg-indigo-50" },
        { eyebrow: "Paper 1", title: "Non-Calculator", bullets: ["AA/AI Paper 1", "Short and extended response", "SL & HL differences"], accentClassName: "text-indigo-600", borderClassName: "border-indigo-500 bg-indigo-50" },
        { eyebrow: "Paper 2", title: "Calculator", bullets: ["AA/AI Paper 2", "Technology allowed", "HL Paper 3 (option) where applicable"], accentClassName: "text-indigo-600", borderClassName: "border-indigo-500 bg-indigo-50" },
      ];
    }

    if (q === "ib") {
      return [
        {
          eyebrow: "Internal",
          title: "IA Support",
          bullets: ["Planning and structure", "Feedback cycles", "Criteria-focused improvements"],
          accentClassName: "text-indigo-600",
          borderClassName: "border-indigo-500 bg-indigo-50",
        },
        {
          eyebrow: "External",
          title: "Final Exams",
          bullets: ["Topic mastery", "Markscheme awareness", "Timed papers and reflection"],
          accentClassName: "text-indigo-600",
          borderClassName: "border-indigo-500 bg-indigo-50",
        },
        {
          eyebrow: "Strategy",
          title: "Grade Maximisation",
          bullets: ["Question selection skills", "Common traps and fixes", "Exam-day routines"],
          accentClassName: "text-indigo-600",
          borderClassName: "border-indigo-500 bg-indigo-50",
        },
      ];
    }

    if (q === "myp") {
      return [
        {
          eyebrow: "Criteria",
          title: "MYP Assessments",
          bullets: ["Criteria A–D understanding", "Task-specific planning", "Feedback and improvements"],
          accentClassName: "text-emerald-700",
          borderClassName: "border-emerald-500 bg-emerald-50",
        },
        {
          eyebrow: "Skills",
          title: "ATL Focus",
          bullets: ["Communication", "Thinking skills", "Self-management"],
          accentClassName: "text-emerald-700",
          borderClassName: "border-emerald-500 bg-emerald-50",
        },
        {
          eyebrow: "Consistency",
          title: "Progress Tracking",
          bullets: ["Topic check-ins", "Confidence building", "Personalised targets"],
          accentClassName: "text-emerald-700",
          borderClassName: "border-emerald-500 bg-emerald-50",
        },
      ];
    }

    if ((q === "gcse" || q === "igcse") && contentSubjectKey === "mathematics") {
      const accent = q === "gcse" ? { accentClassName: "text-green-600" as const, borderClassName: "border-green-500 bg-green-50" as const } : { accentClassName: "text-teal-700" as const, borderClassName: "border-teal-500 bg-teal-50" as const };
      return [
        { eyebrow: "Paper 1", title: "Non-Calculator", bullets: ["1 hr 30 min", "80 marks", "Method and accuracy"], ...accent },
        { eyebrow: "Paper 2", title: "Calculator", bullets: ["1 hr 30 min", "80 marks", "Problem-solving focus"], ...accent },
        { eyebrow: "Paper 3", title: "Calculator", bullets: ["1 hr 30 min", "80 marks", "Mixed topic coverage"], ...accent },
      ];
    }

    if (q === "a-level" && contentSubjectKey === "mathematics") {
      return [
        { eyebrow: "Paper 1", title: "Pure Mathematics 1", bullets: ["2 hr", "100 marks", "Proof, algebra, calculus, trigonometry"], accentClassName: "text-purple-700", borderClassName: "border-purple-500 bg-purple-50" },
        { eyebrow: "Paper 2", title: "Pure Mathematics 2", bullets: ["2 hr", "100 marks", "Further calculus, sequences, numerical methods"], accentClassName: "text-purple-700", borderClassName: "border-purple-500 bg-purple-50" },
        { eyebrow: "Paper 3", title: "Statistics & Mechanics", bullets: ["2 hr", "100 marks", "Applied maths: stats and mechanics combined"], accentClassName: "text-purple-700", borderClassName: "border-purple-500 bg-purple-50" },
      ];
    }

    if ((q === "gcse" || q === "igcse") && contentSubjectKey === "physics") {
      const accent = q === "gcse" ? { accentClassName: "text-green-600" as const, borderClassName: "border-green-500 bg-green-50" as const } : { accentClassName: "text-teal-700" as const, borderClassName: "border-teal-500 bg-teal-50" as const };
      return [
        { eyebrow: "Paper 1", title: "Energy, Electricity, Particle Model, Atomic", bullets: ["Topics: energy, electricity, particle model, atomic structure", "Multiple choice and structured questions", "Foundation vs Higher tier"], ...accent },
        { eyebrow: "Paper 2", title: "Forces, Waves, Magnetism, Space", bullets: ["Topics: forces, waves, magnetism, space physics", "Structured and extended response", "Required practicals assessed"], ...accent },
      ];
    }

    if ((q === "gcse" || q === "igcse") && contentSubjectKey === "chemistry") {
      const accent = q === "gcse" ? { accentClassName: "text-green-600" as const, borderClassName: "border-green-500 bg-green-50" as const } : { accentClassName: "text-teal-700" as const, borderClassName: "border-teal-500 bg-teal-50" as const };
      return [
        { eyebrow: "Paper 1", title: "Atomic Structure, Bonding, Quantitative, Chemical Changes", bullets: ["Topics: atomic structure, bonding, moles, chemical changes", "Structured and calculation questions", "Moles and equations (key pain point)"], ...accent },
        { eyebrow: "Paper 2", title: "Rates, Organic, Analysis, Chemistry of Atmosphere", bullets: ["Topics: rates, organic chemistry, analysis, atmosphere", "Extended response and practical skills", "Foundation vs Higher"], ...accent },
      ];
    }

    if ((q === "gcse" || q === "igcse") && contentSubjectKey === "biology") {
      const accent = q === "gcse" ? { accentClassName: "text-green-600" as const, borderClassName: "border-green-500 bg-green-50" as const } : { accentClassName: "text-teal-700" as const, borderClassName: "border-teal-500 bg-teal-50" as const };
      return [
        { eyebrow: "Paper 1", title: "Cell Biology, Organisation, Infection, Bioenergetics", bullets: ["Topics: cells, organisation, infection, photosynthesis, respiration", "Structured and multiple choice", "Required practicals"], ...accent },
        { eyebrow: "Paper 2", title: "Homeostasis, Inheritance, Ecology", bullets: ["Topics: homeostasis, inheritance, variation, ecology", "Extended response and synoptic", "Exam technique for 6-mark questions"], ...accent },
      ];
    }

    if ((q === "gcse" || q === "igcse") && contentSubjectKey === "english") {
      const accent = q === "gcse" ? { accentClassName: "text-green-600" as const, borderClassName: "border-green-500 bg-green-50" as const } : { accentClassName: "text-teal-700" as const, borderClassName: "border-teal-500 bg-teal-50" as const };
      return [
        { eyebrow: "Paper 1", title: "Creative Reading & Writing", bullets: ["Unseen literature extract", "Creative writing (narrative/descriptive)", "Explorations in creative reading"], ...accent },
        { eyebrow: "Paper 2", title: "Writers' Viewpoints & Perspectives", bullets: ["Non-fiction reading and comparison", "Transactional writing", "Essay structure and analysis"], ...accent },
        { eyebrow: "Spoken", title: "Spoken Language Endorsement", bullets: ["Presentation and discussion", "Non-exam assessment", "Confidence and clarity"], ...accent },
      ];
    }

    if (q === "a-level" && contentSubjectKey === "english") {
      return [
        { eyebrow: "Paper 1", title: "Literary Genres (e.g. Tragedy)", bullets: ["Drama and poetry", "Shakespeare and other set texts", "Closed-book and open-book (board-specific)"], accentClassName: "text-purple-700", borderClassName: "border-purple-500 bg-purple-50" },
        { eyebrow: "Paper 2", title: "Texts and Genres (e.g. Elements of Crime)", bullets: ["Prose and comparison", "Themes and contexts", "Critical theory"], accentClassName: "text-purple-700", borderClassName: "border-purple-500 bg-purple-50" },
        { eyebrow: "NEA", title: "Comparative Coursework", bullets: ["Independent critical study", "Two texts, comparative essay", "Academic style and bibliography"], accentClassName: "text-purple-700", borderClassName: "border-purple-500 bg-purple-50" },
      ];
    }

    if ((q === "gcse" || q === "igcse") && (contentSubjectKey === "business-studies" || contentSubjectKey === "economics")) {
      const accent = q === "gcse" ? { accentClassName: "text-green-600" as const, borderClassName: "border-green-500 bg-green-50" as const } : { accentClassName: "text-teal-700" as const, borderClassName: "border-teal-500 bg-teal-50" as const };
      const isBiz = contentSubjectKey === "business-studies";
      return [
        { eyebrow: "Paper 1", title: isBiz ? "Theme 1 & 2 (Enterprise, Marketing, Finance)" : "Markets & Market Failure", bullets: [isBiz ? "Multiple choice and short answer" : "Microeconomics", "Case study / data response", "Structured questions"], ...accent },
        { eyebrow: "Paper 2", title: isBiz ? "Theme 3 & 4 (Operations, HR, Strategy)" : "National & Global Economy", bullets: [isBiz ? "Case study and extended response" : "Macroeconomics", "Evaluation and application", "Essay technique"], ...accent },
      ];
    }

    if (q === "a-level" && (contentSubjectKey === "business-studies" || contentSubjectKey === "economics")) {
      const isBiz = contentSubjectKey === "business-studies";
      return [
        { eyebrow: "Paper 1", title: isBiz ? "Marketing, People, Global Business" : "Markets & Market Failure", bullets: [isBiz ? "Multiple choice and short answer" : "Microeconomics and diagram technique", "Case study analysis", "Structured response"], accentClassName: "text-purple-700", borderClassName: "border-purple-500 bg-purple-50" },
        { eyebrow: "Paper 2", title: isBiz ? "Business Activities, Decisions, Strategy" : "National & Global Economy", bullets: [isBiz ? "Data response and essay" : "Macroeconomics, inflation, GDP", "Evaluation and judgement", "Synoptic assessment"], accentClassName: "text-purple-700", borderClassName: "border-purple-500 bg-purple-50" },
        { eyebrow: "Paper 3", title: isBiz ? "Synoptic Paper / Case Study" : "Economic Principles & Issues", bullets: [isBiz ? "Pre-release and synoptic" : "Multiple choice and essay", "Application to context", "University-prep depth"], accentClassName: "text-purple-700", borderClassName: "border-purple-500 bg-purple-50" },
      ];
    }

    if (q === "a-level" && (contentSubjectKey === "physics" || contentSubjectKey === "chemistry" || contentSubjectKey === "biology")) {
      const papers = contentSubjectKey === "physics"
        ? ["Modelling, Materials, Particles", "Waves, Electricity, Magnetism", "Fields, Option (e.g. Astrophysics)"]
        : contentSubjectKey === "chemistry"
          ? ["Relevant Physical & Inorganic", "Relevant Physical & Organic", "Synoptic + Practical"]
          : ["Biological Molecules, Cells, Organisms", "Genetics, Evolution, Ecosystems", "Synoptic + Practical"];
      return papers.map((title, i) => ({
        eyebrow: `Paper ${i + 1}`,
        title,
        bullets: ["Structured and extended response", "Required practicals (where applicable)", "Synoptic and deep understanding"],
        accentClassName: "text-purple-700",
        borderClassName: "border-purple-500 bg-purple-50",
      }));
    }

    // Default exam-style structure for GCSE/IGCSE/A-Level/KS3 (school assessments) per subject.
    const accent =
      q === "ks3"
        ? { accentClassName: "text-blue-600", borderClassName: "border-blue-500 bg-blue-50" }
        : q === "gcse"
          ? { accentClassName: "text-green-600", borderClassName: "border-green-500 bg-green-50" }
          : q === "igcse"
            ? { accentClassName: "text-teal-700", borderClassName: "border-teal-500 bg-teal-50" }
            : { accentClassName: "text-purple-700", borderClassName: "border-purple-500 bg-purple-50" };

    const paperName = q === "ks3" ? "School" : "Exam";

    return Array.from({ length: 3 }, (_, idx) => idx).map((i) => {
      const number = i + 1;
      const isUsed = number <= (q === "a-level" ? 3 : q === "ks3" ? 2 : 2);
      return {
        eyebrow: `${paperName} ${number}`,
        title: isUsed ? (q === "ks3" ? "Topic Tests" : "Written Paper") : "Coursework / Practical",
        bullets: isUsed
          ? [
              q === "ks3" ? "Curriculum-aligned topics" : "Specification-aligned topics",
              "Structured revision plan",
              "Timed practice + feedback",
            ]
          : ["Skills building", "Confidence and consistency", "Bridging to the next level"],
        ...accent,
      };
    });
  })();

  const examBoards = (() => {
    if (q === "primary" || q === "eyfs" || q === "ks1" || q === "ks2") {
      return [
        {
          name: "UK National Curriculum",
          description: "Aligned support for UK-based primary pathways: number, literacy, and core science skills.",
        },
        {
          name: "International Schools",
          description: "We adapt to school schemes and term plans across Dubai’s international school landscape.",
        },
        {
          name: "Entrance & Transition",
          description: "Support for transitions to secondary and selective pathways with confidence-building practice.",
        },
      ];
    }

    if (q === "igcse") {
      return [
        {
          name: "Cambridge (CAIE)",
          description: "Internationally recognised pathway with clear content progression and exam-style practice.",
        },
        {
          name: "Pearson Edexcel",
          description: "Specification-focused practice with structured past-paper routines.",
        },
      ];
    }

    if (q === "ib") {
      return [
        {
          name: "IB DP (SL)",
          description: "Clear structure for SL content with exam technique and topic mastery.",
        },
        {
          name: "IB DP (HL)",
          description: "Support for HL depth, challenge questions, and consistent top performance.",
        },
        {
          name: "Internal Assessment (IA)",
          description: "Planning, feedback, and criteria-focused improvements to maximise marks.",
        },
      ];
    }

    if (q === "myp") {
      return [
        {
          name: "MYP Criteria",
          description: "Criteria-based approach with strong understanding of task requirements and success descriptors.",
        },
        {
          name: "Inquiry Cycles",
          description: "We help students think, investigate, and communicate clearly—skills that transfer to DP success.",
        },
      ];
    }

    // GCSE / A-Level / KS3 default (AQA/Edexcel/OCR); plus subject-dependent notes
    return [
      {
        name: q === "ks3" ? "UK National Curriculum" : "AQA",
        description: q === "ks3" ? "KS3 pathways aligned to UK curriculum objectives and school assessments." : "Popular exam board with consistent mark schemes and clear assessment objectives.",
        specification: q === "gcse" && contentSubjectKey === "mathematics" ? "8300" : undefined,
      },
      {
        name: q === "ks3" ? "School Schemes" : "Pearson Edexcel",
        description: q === "ks3" ? "We follow your school’s scheme of work to stay one step ahead of class." : "Specification-focused teaching with strong exam-style practice.",
        specification: q === "gcse" && contentSubjectKey === "mathematics" ? "1MA1" : undefined,
      },
      {
        name: q === "ks3" ? "Transition to GCSE" : "OCR",
        description: q === "ks3" ? "Bridging content and skills to start GCSE with confidence." : "Strong problem-solving and application-style questions.",
        specification: q === "gcse" && contentSubjectKey === "mathematics" ? "J560" : undefined,
      },
    ];
  })();

  const differentiators = (() => {
    const base = [
      {
        title: "Small Groups",
        description: "Maximum 6 students per class. Many groups average 2–3 for personalised attention.",
        icon: <Users className="w-8 h-8" />,
      },
      {
        title: q === "primary" ? "Skills-First Teaching" : "Exam Technique",
        description:
          q === "primary"
            ? "We build confidence and accuracy with clear explanations, step-by-step practice, and positive momentum."
            : "We teach what examiners reward: method marks, structure, timing, and common pitfalls to avoid.",
        icon: <Target className="w-8 h-8" />,
      },
      {
        title: q === "primary" || q === "ks3" ? "Confidence & Consistency" : "Past Papers",
        description:
          q === "primary" || q === "ks3"
            ? "Regular practice and feedback build habits that transfer to school tests and future qualifications."
            : "Regular practice with authentic questions under timed conditions—reviewed with clear feedback.",
        icon: <BookOpen className="w-8 h-8" />,
      },
      {
        title: "Progress Tracking",
        description: "Clear targets and regular check-ins so students know exactly what to improve next.",
        icon: <Award className="w-8 h-8" />,
      },
    ];

    const colors =
      q === "primary" || q === "eyfs" || q === "ks1" || q === "ks2"
        ? q === "eyfs"
          ? ["bg-yellow-100", "text-yellow-700"]
          : q === "ks1"
            ? ["bg-sky-100", "text-sky-600"]
            : q === "ks2"
              ? ["bg-blue-100", "text-blue-600"]
              : ["bg-sky-100", "text-sky-600"]
        : q === "ks3"
          ? ["bg-blue-100", "text-blue-600"]
          : q === "gcse"
            ? ["bg-green-100", "text-green-600"]
            : q === "igcse"
              ? ["bg-teal-100", "text-teal-700"]
              : q === "a-level"
                ? ["bg-purple-100", "text-purple-700"]
                : q === "ib"
                  ? ["bg-indigo-100", "text-indigo-700"]
                  : ["bg-emerald-100", "text-emerald-700"];

    return base.map((it) => ({
      title: it.title,
      description: it.description,
      icon: React.cloneElement(it.icon as React.ReactElement<{ className?: string }>, {
        className: `w-8 h-8 ${colors[1]}`,
      }),
      iconBgClassName: colors[0],
      iconClassName: colors[1],
    }));
  })();

  const testimonials = (() => {
    const qLabel = qualificationLabel;
    const sLabel = subjectLabel;
    const schoolHint =
      q === "primary" ? "Parent, Primary Student" : q === "ks3" ? "Parent, Year 9 Student" : "Student, Dubai";

    const t1 = {
      quote: `“The ${qLabel} ${sLabel} sessions were structured and calm. My child finally understood the tricky topics and started enjoying the subject again.”`,
      name: "Sarah M.",
      role: schoolHint,
    };
    const t2 = {
      quote:
        q === "gcse"
          ? `“Past-paper practice and exam technique changed everything. I went into the ${qLabel} ${sLabel} exam confident and improved my grade significantly.”`
          : q === "ib"
            ? `“The IA feedback and HL-style questions were exactly what I needed. My confidence improved and I felt in control going into exams.”`
            : `“The small group made it easy to ask questions. I improved quickly and could see exactly what to do next each week.”`,
      name: "Ahmed K.",
      role: q === "gcse" ? "Student, Year 11" : q === "a-level" ? "Student, Year 13" : "Student",
    };
    return [t1, t2];
  })();

  const overviewHeading = `What is ${qualificationLabel} ${subjectLabel}?`;
  const overviewLead = (() => {
    if (q === "primary" || q === "eyfs" || q === "ks1" || q === "ks2") {
      if (q === "eyfs") return `EYFS ${subjectLabel} supports early development through play-based learning, curiosity, and readiness for Key Stage 1.`;
      if (q === "ks1") return `Key Stage 1 ${subjectLabel} builds core skills and confidence through structured, age-appropriate activities aligned to the UK curriculum.`;
      if (q === "ks2") return `Key Stage 2 ${subjectLabel} strengthens foundations and prepares students for secondary school with clear progress and support.`;
      return `Primary ${subjectLabel} builds strong foundations through clear explanations, guided practice, and confidence-building routines aligned to school learning.`;
    }
    if (q === "ks3") return `KS3 ${subjectLabel} strengthens understanding across core topics and prepares students for GCSE with strong study habits and problem-solving skills.`;
    if (q === "gcse") {
      if (contentSubjectKey === "mathematics") return `GCSE Mathematics develops algebraic proficiency, geometry and trigonometry, and probability—with a strong focus on problem-solving and exam technique for Foundation (Grades 1–5) and Higher (Grades 4–9) tier.`;
      if (contentSubjectKey === "english") return `GCSE English Language develops creative writing, non-fiction analysis, and spoken language. We focus on essay structure, unseen text technique, and the skills that secure Grades 7–9.`;
      if (contentSubjectKey === "physics") return `GCSE Physics covers forces, energy, electricity, waves, and atomic structure. We build fluency in calculations and required practicals, and target Foundation vs Higher tier effectively.`;
      if (contentSubjectKey === "chemistry") return `GCSE Chemistry builds from atomic structure and bonding through to organic chemistry. We tackle the topics students find hardest—including moles and calculations—with clear, step-by-step support.`;
      if (contentSubjectKey === "biology") return `GCSE Biology spans cell biology, infection and response, bioenergetics, and ecology. We strengthen extended writing and practical skills for strong performance across both papers.`;
      if (contentSubjectKey === "business-studies") return `GCSE Business Studies covers the marketing mix, finance and accounts, and operations management. We emphasise case study analysis and exam technique for data response and extended questions.`;
      if (contentSubjectKey === "economics") return `GCSE Economics introduces microeconomics (including market failure), macroeconomics (inflation, GDP, policy), and global economics. We build diagram technique and evaluation skills.`;
      return `GCSE ${subjectLabel} is a two-year qualification designed to develop knowledge, application, and exam technique across the full specification.`;
    }
    if (q === "igcse") {
      if (contentSubjectKey === "mathematics") return `IGCSE Mathematics develops algebraic proficiency, geometry and trigonometry, and probability, with exam technique and problem-solving for top grades (A*–A / 7–9).`;
      if (contentSubjectKey === "english") return `IGCSE English Language develops creative writing, non-fiction analysis, and spoken language, with specification-aligned exam technique.`;
      if (contentSubjectKey === "physics" || contentSubjectKey === "chemistry" || contentSubjectKey === "biology") return `IGCSE ${subjectLabel} is assessed through structured papers and practical components. We build specification mastery and exam technique for international pathways.`;
      return `IGCSE ${subjectLabel} is an internationally recognised qualification, assessed through structured exams and specification-aligned skills.`;
    }
    if (q === "a-level") {
      if (contentSubjectKey === "mathematics") return `A-Level Mathematics is split into Pure (differentiation, integration, proof) and Applied (Statistics and Mechanics). We focus on deep understanding and synoptic assessment for university preparation.`;
      if (contentSubjectKey === "english") return `A-Level English Literature combines set texts, comparative coursework (NEA), and critical theory. We build the analytical and essay skills expected at university level.`;
      if (contentSubjectKey === "physics") return `A-Level Physics covers particle physics, fields, simple harmonic motion, and options such as astrophysics. We support required practicals and synoptic assessment for top grades.`;
      if (contentSubjectKey === "chemistry") return `A-Level Chemistry extends to thermodynamics, organic synthesis, and spectroscopy. We tackle moles, mechanisms, and multi-step synthesis with university-prep depth.`;
      if (contentSubjectKey === "biology") return `A-Level Biology covers biological molecules, genetics, gene expression, and ecosystems. We build synoptic understanding and practical evaluation for strong exam performance.`;
      if (contentSubjectKey === "business-studies") return `A-Level Business focuses on marketing mix, finance and accounts, and operations management, with case study analysis and synoptic assessment for university readiness.`;
      if (contentSubjectKey === "economics") return `A-Level Economics combines microeconomics (market failure), macroeconomics (inflation, GDP, policy), and global economics, with data response and essay technique for top grades.`;
      return `A-Level ${subjectLabel} is an advanced qualification focused on depth, analysis, and university-level readiness.`;
    }
    if (q === "ib") {
      if (contentSubjectKey === "mathematics") return `IB Mathematics offers Analysis & Approaches (AA) and Applications & Interpretation (AI), each at SL and HL. We support the Internal Assessment (IA) and exam strategy, with clear SL vs HL differentiation.`;
      if (contentSubjectKey === "english") return `IB Language & Literature combines literary analysis, the Individual Oral, and Paper 1 & 2. We support HL Essay and criteria-focused preparation for SL and HL.`;
      if (contentSubjectKey === "physics" || contentSubjectKey === "chemistry" || contentSubjectKey === "biology") return `IB ${subjectLabel} is assessed through Internal Assessment (IA) and external papers. We support SL and HL content, inquiry-based learning, and markscheme awareness.`;
      if (contentSubjectKey === "business-studies" || contentSubjectKey === "economics") return `IB ${subjectLabel} combines case study and essay assessment with SL and HL options. We support the IA and exam strategy for consistent performance.`;
      return `IB ${subjectLabel} supports SL and HL pathways with a balance of content mastery, skills, and assessment strategy (including the IA).`;
    }
    if (q === "myp") {
      if (contentSubjectKey === "mathematics") return `MYP Mathematics builds number, algebra, geometry, and statistics through inquiry-based learning. We align to MYP criteria and prepare students for DP Mathematics (AA or AI).`;
      return `MYP ${subjectLabel} builds inquiry skills and conceptual understanding, with criteria-based assessments and strong feedback cycles.`;
    }
    return `MYP ${subjectLabel} builds inquiry skills and conceptual understanding, with criteria-based assessments and strong feedback cycles.`;
  })();

  const assessmentLead = (() => {
    if (q === "primary" || q === "eyfs" || q === "ks1" || q === "ks2") return "We focus on confidence, accuracy, and consistency using a clear assessment-to-plan approach.";
    if (q === "ib") return "We support both Internal Assessment (IA) and final exams with a structured plan, feedback cycles, and timed practice. SL and HL requirements are clearly differentiated.";
    if (q === "myp") return "We support criteria-based success with clear expectations, task planning, and consistent feedback aligned to MYP objectives.";
    if ((q === "gcse" || q === "igcse") && contentSubjectKey === "mathematics") return "Students sit three written papers (one non-calculator, two calculator). We build technique, timing, and confidence with structured past-paper practice for Grades 7–9.";
    if (q === "a-level" && contentSubjectKey === "mathematics") return "Assessment is via three papers: Pure Mathematics 1, Pure Mathematics 2, and Statistics & Mechanics. We focus on differentiation, integration, and synoptic application.";
    if ((q === "gcse" || q === "igcse") && contentSubjectKey === "english") return "Two written papers (Creative Reading & Writing; Writers' Viewpoints) plus Spoken Language endorsement. We build essay structure and analysis under timed conditions.";
    if (q === "a-level" && contentSubjectKey === "english") return "Assessment includes set-text papers and comparative coursework (NEA). We support critical theory, essay structure, and exam technique for top grades.";
    if ((q === "gcse" || q === "igcse") && (contentSubjectKey === "physics" || contentSubjectKey === "chemistry" || contentSubjectKey === "biology")) return "Two written papers cover the full specification; required practicals are assessed within the papers. We build exam technique and extended response skills.";
    if (q === "a-level" && (contentSubjectKey === "physics" || contentSubjectKey === "chemistry" || contentSubjectKey === "biology")) return "Three papers plus practical endorsement. We support synoptic assessment and the deep understanding examiners reward at A-Level.";
    if ((q === "gcse" || q === "igcse") && (contentSubjectKey === "business-studies" || contentSubjectKey === "economics")) return "Written papers include multiple choice, short answer, and extended response. We focus on case study analysis and evaluation technique.";
    if (q === "a-level" && (contentSubjectKey === "business-studies" || contentSubjectKey === "economics")) return "Assessment includes data response and essay papers, with synoptic elements at A-Level. We build evaluation and application to context for university prep.";
    return "Assessment is built around topic mastery, regular testing, and exam-style practice where applicable.";
  })();

  const contentLead = (() => {
    if (q === "primary" || q === "eyfs" || q === "ks1" || q === "ks2") return "Clear, age-appropriate learning with real progress you can see.";
    if (q === "ks3") return "Strong foundations across the key strands before GCSE.";
    if (q === "gcse") return "Comprehensive coverage of exam-board specifications with targeted grade improvements and exam technique for Grades 7–9.";
    if (q === "igcse") return "International specification coverage with clear structure and exam technique for A*–A.";
    if (q === "a-level") return "Advanced depth with step-by-step problem-solving, synoptic assessment preparation, and top-grade strategy for university.";
    if (q === "ib") return "SL & HL coverage plus Internal Assessment (IA) support and exam strategy.";
    if (q === "myp") return "Inquiry-led coverage with criteria-based success strategies and progress to DP.";
    return "Inquiry-led coverage with criteria-based success strategies.";
  })();

  const courseContentHeading = `${qualificationLabel} ${subjectLabel} Course Content`;

  const successHeading = `${qualificationLabel} ${subjectLabel} Success Stories`;

  const teachingHeading =
    q === "primary" || q === "eyfs" || q === "ks1" || q === "ks2"
      ? `Our ${qualificationLabel} ${subjectLabel} Teaching Approach`
      : `Our ${qualificationLabel} ${subjectLabel} Teaching Approach`;

  return {
    qualification,
    subject,
    seo: {
      title: seoTitle,
      description: seoDescription,
      keywords: defaultKeywords(qualificationLabel, subjectLabel, boardsForSeo),
    },
    hero: {
      subtitle: (() => {
        if (contentSubjectKey === "mathematics" && (q === "gcse" || q === "igcse")) return `Master ${qualificationLabel} Mathematics from Foundation to Higher with algebraic proficiency, problem-solving, and exam technique for Grades 7–9.`;
        if (contentSubjectKey === "mathematics" && q === "a-level") return "Master Pure and Applied Mathematics—differentiation, integration, statistics and mechanics—with synoptic assessment and university-prep support.";
        if (contentSubjectKey === "mathematics" && q === "ib") return "Navigate Analysis & Approaches (AA) or Applications & Interpretation (AI), SL and HL, with IA support and exam strategy.";
        if (contentSubjectKey === "english" && (q === "gcse" || q === "igcse")) return "Build confidence in creative writing, non-fiction analysis, and spoken language with exam technique that secures top grades.";
        if (contentSubjectKey === "english" && q === "a-level") return "Excel in set texts, comparative coursework, and critical theory with university-level analytical and essay skills.";
        if (contentSubjectKey === "physics" && (q === "gcse" || q === "igcse")) return "Master forces, energy, electricity, and atomic structure with required practicals and exam technique for Foundation and Higher tier.";
        if (contentSubjectKey === "physics" && q === "a-level") return "Build deep understanding in particle physics, fields, simple harmonic motion, and options—with synoptic assessment and practical skills.";
        if (contentSubjectKey === "chemistry" && (q === "gcse" || q === "igcse")) return "Tackle moles, bonding, and organic chemistry with clear step-by-step support and exam technique for both papers.";
        if (contentSubjectKey === "chemistry" && q === "a-level") return "Master thermodynamics, organic synthesis, and spectroscopy with university-prep depth and synoptic assessment.";
        if (contentSubjectKey === "biology" && (q === "gcse" || q === "igcse")) return "Strengthen cell biology, bioenergetics, ecology, and genetics with extended writing and practical skills for strong results.";
        if (contentSubjectKey === "biology" && q === "a-level") return "Build fluency in biological molecules, genetics, gene expression, and ecosystems with synoptic and practical assessment support.";
        if ((contentSubjectKey === "business-studies" || contentSubjectKey === "economics") && (q === "gcse" || q === "igcse")) return `Master ${contentSubjectKey === "economics" ? "microeconomics, macroeconomics, and global economics" : "marketing mix, finance, and operations"} with case study analysis and exam technique.`;
        if ((contentSubjectKey === "business-studies" || contentSubjectKey === "economics") && q === "a-level") return "Excel in data response and essay papers with evaluation, application to context, and synoptic assessment for university.";
        return `Build confidence and achieve strong results in ${qualificationLabel} ${subjectLabel} with expert support.`;
      })(),
      keyBadges: levelKeyBadges,
    },
    overview: {
      heading: overviewHeading,
      lead: overviewLead,
      cards: overviewCards,
    },
    courseContent: {
      heading: courseContentHeading,
      lead: contentLead,
      columns: courseContentColumns,
    },
    assessment: {
      heading: "Assessment Structure",
      lead: assessmentLead,
      cards: assessmentCards,
      noteHeading:
        q === "gcse" && contentSubjectKey === "mathematics" ? "Grade Boundaries (Typical)" : undefined,
      noteBody:
        q === "gcse" && contentSubjectKey === "mathematics"
          ? "Grade boundaries vary by year and exam board. We focus on maximising marks through method, accuracy, and smart exam strategy."
          : undefined,
    },
    examBoards: {
      heading: "Exam Boards We Cover",
      cards: examBoards,
    },
    differentiators: {
      heading: teachingHeading,
      items: differentiators,
    },
    success: {
      heading: successHeading,
      testimonials,
    },
    whyChooseUs: {
      heading: `Why Improve ME for ${qualificationLabel} ${subjectLabel}?`,
      items: [
        "KHDA-approved tutoring centre in Gold & Diamond Park",
        `10+ years' experience teaching ${subjectLabel} in Dubai`,
        "Small groups (maximum 6 students) for personalized attention",
        "Specialist subject tutors with proven track records",
        "Structured, curriculum-aligned teaching",
        `All exam boards covered: ${boardsForSeo}`,
        "Regular progress reports to track improvement",
        "Flexible scheduling to fit your family's routine",
        "Dedicated learning environment in our 7,000 sq ft teaching facility",
      ],
    },
  };
}

export const QUALIFICATION_SUBJECT_CONTENT: Record<ContentKey, QualificationSubjectContent> = Object.fromEntries(
  (Object.keys(SUBJECTS_BY_LEVEL) as QualificationKey[]).flatMap((q) =>
    SUBJECTS_BY_LEVEL[q].map((s) => [key(q, s), contentFor(q, s)] as const)
  )
) as Record<ContentKey, QualificationSubjectContent>;

export function getQualificationSubjectContent(q: QualificationKey, s: SubjectKey) {
  return QUALIFICATION_SUBJECT_CONTENT[key(q, s)];
}

