import * as React from "react";

export type BulletListProps = {
  items: Array<React.ReactNode>;
  bulletColorClassName?: string;
  textClassName?: string;
  className?: string;
};

export function BulletList({
  items,
  bulletColorClassName = "text-yellow-500",
  textClassName = "text-navy-700 text-base",
  className = "",
}: BulletListProps) {
  return (
    <ul className={`space-y-3 ${className}`.trim()}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span
            className={`${bulletColorClassName} text-xl mt-0.5 flex-shrink-0`}
            aria-hidden="true"
          >
            •
          </span>
          <span className={textClassName}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

