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

function contentFor(q: QualificationKey, s: SubjectKey): QualificationSubjectContent {
  const qualification = QUALIFICATIONS[q];
  const subject = SUBJECTS[s];

  const subjectLabel = subject.label;
  const qualificationLabel = qualification.label;

  // Per-qualification “boards/format” string for SEO + hero.
  const boardsForSeo =
    q === "ib" ? "SL & HL" : q === "myp" ? "MYP Criteria" : q === "primary" ? "UK & International Schools" : qualification.badge.replaceAll(" • ", ", ");

  const seoTitle = `${qualificationLabel} ${subjectLabel} Tutoring Dubai | ${boardsForSeo} | Improve ME`;
  const seoDescription = basicSchemaDescription(
    `${qualificationLabel}`,
    subjectLabel,
    "Small groups, proven results, and structured progress tracking. Book a free assessment."
  );

  const levelKeyBadges =
    q === "primary"
      ? [
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
      maths: [
        {
          title: q === "primary" ? "Number Sense" : "Core Skills",
          iconBgClassName: "bg-green-100",
          icon: <Calculator className="w-8 h-8 text-green-600" />,
          items:
            q === "primary"
              ? [
                  "Place value and number bonds",
                  "Four operations with fluency",
                  "Fractions, decimals, percentages (age-appropriate)",
                  "Mental maths and estimation",
                  "Word problems and reasoning",
                ]
              : [
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
          items:
            q === "primary"
              ? [
                  "Patterns and sequences",
                  "Shapes, symmetry, and angles",
                  "Measurement and units",
                  "Coordinates and simple graphs",
                  "Times tables mastery",
                ]
              : [
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
          items:
            q === "primary"
              ? [
                  "Charts and tables",
                  "Averages (mean/median/mode) introduction",
                  "Simple probability",
                  "Data handling and interpretation",
                  "Reasoning with data",
                ]
              : [
                  "Statistical representations and interpretation",
                  "Averages, spread, and sampling",
                  "Probability calculations and diagrams",
                  "Correlation and trends (where applicable)",
                  "Exam-style data questions",
                ],
        },
      ],
      english: [
        {
          title: "Reading",
          iconBgClassName: "bg-blue-100",
          icon: <BookOpen className="w-8 h-8 text-blue-600" />,
          items:
            q === "primary"
              ? [
                  "Phonics and decoding (as needed)",
                  "Comprehension strategies",
                  "Vocabulary building",
                  "Inference and prediction",
                  "Reading fluency and confidence",
                ]
              : [
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
          items:
            q === "primary"
              ? [
                  "Sentence structure and punctuation",
                  "Spelling patterns and accuracy",
                  "Planning and organising ideas",
                  "Creative writing foundations",
                  "Handwriting and presentation",
                ]
              : [
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
          items:
            q === "primary"
              ? [
                  "Confidence in communication",
                  "Presentation and storytelling",
                  "Listening and responding",
                  "Vocabulary and expression",
                  "Classroom participation skills",
                ]
              : [
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
      business: [
        {
          title: "Business Foundations",
          iconBgClassName: "bg-blue-100",
          icon: <Briefcase className="w-8 h-8 text-blue-600" />,
          items: [
            "Business ownership and aims",
            "Stakeholders and ethics",
            "Entrepreneurship and innovation",
            "External influences and risk",
            "Case-study interpretation",
          ],
        },
        {
          title: "Operations & Finance",
          iconBgClassName: "bg-green-100",
          icon: <TrendingUp className="w-8 h-8 text-green-600" />,
          items: [
            "Operations and quality management",
            "Costs, revenue, profit",
            "Budgets and cash flow",
            "Break-even and decision-making",
            "Data response questions",
          ],
        },
        {
          title: "Marketing & Strategy",
          iconBgClassName: "bg-purple-100",
          icon: <Target className="w-8 h-8 text-purple-600" />,
          items: [
            "Market research and segmentation",
            "Marketing mix and branding",
            "Growth strategies",
            "Human resources and leadership",
            "Essay structure (A-Level/IB where applicable)",
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
            "Diagram technique",
          ],
        },
        {
          title: "Macroeconomics",
          iconBgClassName: "bg-green-100",
          icon: <Target className="w-8 h-8 text-green-600" />,
          items: [
            "GDP, inflation, unemployment",
            "Fiscal and monetary policy",
            "International trade and exchange rates",
            "Development (where applicable)",
            "Evaluation and judgement",
          ],
        },
        {
          title: "Exam Skills",
          iconBgClassName: "bg-purple-100",
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          items: [
            "Data response questions",
            "Structured evaluation paragraphs",
            "Essay planning under time pressure",
            "Application to case studies",
            "Past-paper practice routines",
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

    switch (s) {
      case "mathematics":
        return toMutableColumns(common.maths);
      case "english":
        return toMutableColumns(common.english);
      case "science":
        return toMutableColumns(common.scienceGeneral);
      case "physics":
        return toMutableColumns(common.physics);
      case "chemistry":
        return toMutableColumns(common.chemistry);
      case "biology":
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
    q === "gcse" && s === "mathematics"
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
      : q === "gcse" && s === "english"
        ? [
            {
              title: "Language",
              description:
                "Reading and writing skills assessed through unseen texts and creative/transactional tasks.",
              bullets: ["Unseen text analysis", "Writing for purpose and audience", "Accuracy and style"],
            },
            {
              title: "Literature",
              description:
                "Texts, themes, and essay writing—building confident, structured responses under timed conditions.",
              bullets: ["Theme and character analysis", "Quote selection and analysis", "Essay structure and timing"],
            },
          ]
        : undefined;

  const assessmentCards = (() => {
    if (q === "primary") {
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

    if (q === "gcse" && s === "mathematics") {
      return [
        {
          eyebrow: "Paper 1",
          title: "Non-Calculator",
          bullets: ["1 hr 30 min", "80 marks", "Method and accuracy"],
          accentClassName: "text-green-600",
          borderClassName: "border-green-500 bg-green-50",
        },
        {
          eyebrow: "Paper 2",
          title: "Calculator",
          bullets: ["1 hr 30 min", "80 marks", "Problem-solving focus"],
          accentClassName: "text-green-600",
          borderClassName: "border-green-500 bg-green-50",
        },
        {
          eyebrow: "Paper 3",
          title: "Calculator",
          bullets: ["1 hr 30 min", "80 marks", "Mixed topic coverage"],
          accentClassName: "text-green-600",
          borderClassName: "border-green-500 bg-green-50",
        },
      ];
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
    if (q === "primary") {
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
        specification: q === "gcse" && s === "mathematics" ? "8300" : undefined,
      },
      {
        name: q === "ks3" ? "School Schemes" : "Pearson Edexcel",
        description: q === "ks3" ? "We follow your school’s scheme of work to stay one step ahead of class." : "Specification-focused teaching with strong exam-style practice.",
        specification: q === "gcse" && s === "mathematics" ? "1MA1" : undefined,
      },
      {
        name: q === "ks3" ? "Transition to GCSE" : "OCR",
        description: q === "ks3" ? "Bridging content and skills to start GCSE with confidence." : "Strong problem-solving and application-style questions.",
        specification: q === "gcse" && s === "mathematics" ? "J560" : undefined,
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
      q === "primary"
        ? ["bg-sky-100", "text-sky-600"]
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
  const overviewLead =
    q === "primary"
      ? `Primary ${subjectLabel} builds strong foundations through clear explanations, guided practice, and confidence-building routines aligned to school learning.`
      : q === "ks3"
        ? `KS3 ${subjectLabel} strengthens understanding across core topics and prepares students for GCSE with strong study habits and problem-solving skills.`
        : q === "gcse"
          ? `GCSE ${subjectLabel} is a two-year qualification designed to develop knowledge, application, and exam technique across the full specification.`
          : q === "igcse"
            ? `IGCSE ${subjectLabel} is an internationally recognised qualification, assessed through structured exams and specification-aligned skills.`
            : q === "a-level"
              ? `A-Level ${subjectLabel} is an advanced qualification focused on depth, analysis, and university-level readiness.`
              : q === "ib"
                ? `IB ${subjectLabel} supports SL and HL pathways with a balance of content mastery, skills, and assessment strategy (including the IA).`
                : `MYP ${subjectLabel} builds inquiry skills and conceptual understanding, with criteria-based assessments and strong feedback cycles.`;

  const assessmentLead =
    q === "gcse" && s === "mathematics"
      ? "Students sit three written papers. We build technique, timing, and confidence with structured past-paper practice."
      : q === "primary"
        ? "We focus on confidence, accuracy, and consistency using a clear assessment-to-plan approach."
        : q === "ib"
          ? "We support both IA and final exams with a structured plan, feedback cycles, and timed practice."
          : q === "myp"
            ? "We support criteria-based success with clear expectations, task planning, and consistent feedback."
            : "Assessment is built around topic mastery, regular testing, and exam-style practice where applicable.";

  const contentLead =
    q === "primary"
      ? "Clear, age-appropriate learning with real progress you can see."
      : q === "ks3"
        ? "Strong foundations across the key strands before GCSE."
        : q === "gcse"
          ? "Comprehensive coverage of exam-board specifications with targeted grade improvements."
          : q === "igcse"
            ? "International specification coverage with clear structure and exam technique."
            : q === "a-level"
              ? "Advanced depth with step-by-step problem-solving and top-grade strategy."
              : q === "ib"
                ? "SL & HL coverage plus IA support and exam strategy."
                : "Inquiry-led coverage with criteria-based success strategies.";

  const courseContentHeading = `${qualificationLabel} ${subjectLabel} Course Content`;

  const successHeading = `${qualificationLabel} ${subjectLabel} Success Stories`;

  const teachingHeading =
    q === "primary"
      ? `Our Primary ${subjectLabel} Teaching Approach`
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
      subtitle:
        s === "mathematics" && q === "gcse"
          ? "Master GCSE Mathematics from Foundation to Higher tier with structured revision and exam technique."
          : `Build confidence and achieve strong results in ${qualificationLabel} ${subjectLabel} with expert support.`,
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
        q === "gcse" && s === "mathematics" ? "Grade Boundaries (Typical)" : undefined,
      noteBody:
        q === "gcse" && s === "mathematics"
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

