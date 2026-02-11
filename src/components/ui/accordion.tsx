'use client';

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
}

interface AccordionContextValue {
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
  collapsible: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined,
);

function useAccordionContext(): AccordionContextValue {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion components must be used within an <Accordion> root.",
    );
  }
  return context;
}

interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
  toggle: () => void;
}

const AccordionItemContext = React.createContext<
  AccordionItemContextValue | undefined
>(undefined);

function useAccordionItemContext(): AccordionItemContextValue {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "AccordionItem children must be used within an <AccordionItem>.",
    );
  }
  return context;
}

export function Accordion({
  className,
  type = "single",
  collapsible = false,
  ...props
}: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <AccordionContext.Provider
      value={{ openItem, setOpenItem, collapsible }}
    >
      <div
        data-accordion
        data-type={type}
        data-collapsible={collapsible ? "true" : "false"}
        className={cn("space-y-2", className)}
        {...props}
      />
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({
  className,
  ...props
}: AccordionItemProps) {
  const { openItem, setOpenItem, collapsible } = useAccordionContext();
  const { value } = props;
  const isOpen = openItem === value;

  const toggle = () => {
    if (isOpen && collapsible) {
      setOpenItem(null);
    } else {
      setOpenItem(value);
    }
  };

  return (
    <AccordionItemContext.Provider value={{ value, isOpen, toggle }}>
      <div
        data-accordion-item
        data-state={isOpen ? "open" : "closed"}
        className={cn("border border-gray-200 rounded-lg bg-white", className)}
        {...props}
      />
    </AccordionItemContext.Provider>
  );
}

export type AccordionTriggerProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  const { isOpen, toggle } = useAccordionItemContext();
  const { onClick, ...rest } = props;

  return (
    <button
      type="button"
      className={cn(
        "w-full flex items-center justify-between py-3 px-4 text-left font-medium text-navy-900",
        className,
      )}
      aria-expanded={isOpen}
      onClick={(event) => {
        toggle();
        if (onClick) {
          onClick(event);
        }
      }}
      {...rest}
    >
      <span className="flex-1 text-left">{children}</span>
      <ChevronDown
        className={cn(
          "ml-2 h-4 w-4 text-navy-700 transition-transform duration-200",
          isOpen ? "rotate-180" : "rotate-0",
        )}
        aria-hidden="true"
      />
    </button>
  );
}

export type AccordionContentProps =
  React.HTMLAttributes<HTMLDivElement>;

export function AccordionContent({
  className,
  ...props
}: AccordionContentProps) {
  const { isOpen } = useAccordionItemContext();

  return (
    <div
      className={cn(
        "px-4 pb-4 text-sm text-navy-700 border-t border-gray-200",
        isOpen ? "block" : "hidden",
        className,
      )}
      {...props}
    />
  );
}

