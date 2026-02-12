import Link from "next/link";

export type QualificationCardVariant =
  | "primary"
  | "ks3"
  | "gcse"
  | "igcse"
  | "myp"
  | "a-level"
  | "ib";

type VariantStyles = {
  cardClassName: string;
  borderClassName: string;
  badgeClassName: string;
  linkClassName: string;
};

const VARIANT_STYLES: Record<QualificationCardVariant, VariantStyles> = {
  primary: {
    cardClassName: "bg-sky-50/80",
    borderClassName: "border-sky-100/70",
    badgeClassName: "bg-sky-600",
    linkClassName: "text-sky-700 hover:text-sky-800",
  },
  ks3: {
    cardClassName: "bg-slate-50/80",
    borderClassName: "border-slate-200/70",
    badgeClassName: "bg-slate-700",
    linkClassName: "text-slate-700 hover:text-slate-800",
  },
  gcse: {
    cardClassName: "bg-blue-50/80",
    borderClassName: "border-blue-100/70",
    badgeClassName: "bg-blue-600",
    linkClassName: "text-blue-700 hover:text-blue-800",
  },
  igcse: {
    cardClassName: "bg-purple-50/80",
    borderClassName: "border-purple-100/70",
    badgeClassName: "bg-purple-600",
    linkClassName: "text-purple-700 hover:text-purple-800",
  },
  myp: {
    cardClassName: "bg-teal-50/80",
    borderClassName: "border-teal-100/70",
    badgeClassName: "bg-teal-600",
    linkClassName: "text-teal-700 hover:text-teal-800",
  },
  "a-level": {
    cardClassName: "bg-indigo-50/80",
    borderClassName: "border-indigo-100/70",
    badgeClassName: "bg-indigo-600",
    linkClassName: "text-indigo-700 hover:text-indigo-800",
  },
  ib: {
    cardClassName: "bg-green-50/80",
    borderClassName: "border-green-100/70",
    badgeClassName: "bg-green-600",
    linkClassName: "text-green-700 hover:text-green-800",
  },
};

export function QualificationCard({
  variant,
  badge,
  title,
  boards,
  description,
  href,
  className,
}: {
  variant: QualificationCardVariant;
  badge: string;
  title: string;
  boards: string;
  description: string;
  href: string;
  className?: string;
}) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className={[
        "rounded-2xl border p-6 sm:p-7 flex flex-col min-h-[220px]",
        styles.cardClassName,
        styles.borderClassName,
        "shadow-sm hover:shadow-md transition-shadow",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          "px-3 py-1 rounded-full text-xs font-semibold text-white w-fit",
          styles.badgeClassName,
        ].join(" ")}
      >
        {badge}
      </span>

      <h3 className="mt-4 text-xl font-bold text-navy-900">{title}</h3>
      <p className="mt-1 text-sm font-medium text-navy-700">{boards}</p>

      <p className="mt-4 text-sm text-navy-700 leading-relaxed flex-grow">
        {description}
      </p>

      <Link
        href={href}
        className={[
          "mt-5 text-sm font-semibold underline-offset-4 hover:underline w-fit",
          styles.linkClassName,
        ].join(" ")}
        aria-label={`Learn more about ${title}`}
      >
        Learn More <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

