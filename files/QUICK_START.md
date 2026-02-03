# Quick Start Commands for Cursor AI

## 1. Create Next.js Project
```bash
npx create-next-app@latest improve-me-institute --typescript --tailwind --app --src-dir --import-alias "@/*"
cd improve-me-institute
```

## 2. Install Dependencies
```bash
# Install shadcn/ui
npx shadcn-ui@latest init

# When prompted, choose:
# - Style: Default
# - Base color: Slate
# - CSS variables: Yes

# Install shadcn components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add textarea

# Install other dependencies
npm install framer-motion lucide-react clsx tailwind-merge
```

## 3. Configure Tailwind
Replace your `tailwind.config.ts` with:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          600: 'rgb(var(--navy-600) / <alpha-value>)',
          700: 'rgb(var(--navy-700) / <alpha-value>)',
          800: 'rgb(var(--navy-800) / <alpha-value>)',
          900: 'rgb(var(--navy-900) / <alpha-value>)',
        },
        red: {
          500: 'rgb(var(--red-500) / <alpha-value>)',
          600: 'rgb(var(--red-600) / <alpha-value>)',
        },
        yellow: {
          400: 'rgb(var(--yellow-400) / <alpha-value>)',
          500: 'rgb(var(--yellow-500) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
```

## 4. File Structure to Create
```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Use the provided globals.css
│   ├── courses/
│   │   └── page.tsx
│   ├── curriculum/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── faq/
│       └── page.tsx
│
├── components/
│   ├── ui/                 # shadcn components
│   ├── navigation/
│   │   └── Header.tsx     # Use provided Header.tsx
│   ├── hero/
│   │   └── HomeHero.tsx   # Use provided HomeHero.tsx
│   ├── sections/
│   └── Footer.tsx
│
└── lib/
    └── utils.ts           # Utility functions
```

## 5. Copy Provided Files
1. Copy `globals.css` → `src/app/globals.css`
2. Copy `Header.tsx` → `src/components/navigation/Header.tsx`
3. Copy `HomeHero.tsx` → `src/components/hero/HomeHero.tsx`
4. Copy logo to `public/logo.png`

## 6. Update Root Layout
```typescript
// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Improve ME Institute - Leading Tutoring Center in Dubai",
  description: "Exceptional afterschool tutoring programs for primary and secondary students in Dubai's Gold & Diamond Park.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plusJakarta.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

## 7. Create Homepage
```typescript
// src/app/page.tsx
import HomeHero from "@/components/hero/HomeHero";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      {/* Add more sections as you build them */}
    </>
  );
}
```

## 8. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

---

## Cursor AI Prompts to Use

### When building components:
- "Create a testimonials carousel component following the design system in globals.css"
- "Build a primary courses section using the bento grid layout described in CURSOR_INSTRUCTIONS.md"
- "Create a footer component with the contact information from the original site"

### For styling:
- "Make this component match the 'Modern Educational Warmth' aesthetic"
- "Add scroll animations using Framer Motion for this section"
- "Ensure this is mobile-responsive following mobile-first approach"

### For optimization:
- "Optimize this component for performance"
- "Add accessibility features to this form"
- "Check for any layout shift issues"

---

## Next Steps

1. ✅ Set up project structure
2. ✅ Install dependencies
3. ✅ Copy provided files
4. Build remaining sections:
   - Primary courses section
   - Secondary courses section
   - Stats bar
   - Testimonials
   - Booking CTA
   - Footer
5. Create inner pages:
   - Courses pages
   - Curriculum pages
   - About page
   - Contact page
   - FAQ page
6. Add interactivity:
   - Form handling
   - Loading states
   - Error handling
7. Performance & SEO:
   - Image optimization
   - Meta tags
   - Sitemap
   - robots.txt
8. Testing:
   - Mobile responsiveness
   - Cross-browser testing
   - Accessibility audit
   - Performance metrics

---

## Common Issues & Solutions

### Issue: Fonts not loading
**Solution**: Make sure fonts are imported in layout.tsx and CSS variables are defined in globals.css

### Issue: Tailwind classes not working
**Solution**: Check that tailwind.config.ts includes all content paths

### Issue: Framer Motion hydration errors
**Solution**: Ensure components using Framer Motion are client components ('use client')

### Issue: Images not showing
**Solution**: Check that images are in the `public` folder and paths start with `/`

---

## Pro Tips for Cursor AI

1. **Reference the design system**: Always mention "following the design system in globals.css"
2. **Be specific about aesthetics**: Use phrases like "Modern Educational Warmth" or "avoid generic AI look"
3. **Request mobile-first**: Always ask for "mobile-responsive" or "mobile-first design"
4. **Iterate in small chunks**: Build one component at a time and test it
5. **Ask for variations**: "Show me 3 different layouts for this section"
