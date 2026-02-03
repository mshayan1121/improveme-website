# Improve ME Institute Website

A modern, high-performance website for Improve ME Institute built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## 🎨 Design Philosophy

This website embodies **"Modern Educational Warmth"** - a distinctive aesthetic that combines:
- Professional credibility with approachable warmth
- Contemporary Dubai design sensibility
- Energetic learning environment vibes
- **Zero generic AI-generated aesthetics**

### Key Visual Elements
- **Color Palette**: Navy blue (trust), Red (energy), Yellow (warmth)
- **Typography**: DM Sans (display) + Plus Jakarta Sans (body) - carefully chosen to avoid generic fonts
- **Layout**: Asymmetric sections with generous whitespace and diagonal flow
- **Animations**: Orchestrated page entrances with purposeful micro-interactions

## 📁 Project Structure

```
improve-me-institute/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Design system & tokens
│   │   ├── courses/                # Courses pages
│   │   ├── curriculum/             # Curriculum pages
│   │   ├── about/                  # About page
│   │   ├── contact/                # Contact & booking
│   │   └── faq/                    # FAQ page
│   │
│   ├── components/
│   │   ├── ui/                     # shadcn components
│   │   ├── navigation/
│   │   │   └── Header.tsx          # Navigation with dropdowns
│   │   ├── hero/
│   │   │   └── HomeHero.tsx        # Hero section with floating cards
│   │   ├── sections/
│   │   │   ├── PrimarySection.tsx
│   │   │   ├── SecondarySection.tsx
│   │   │   ├── TestimonialsCarousel.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   └── BookingCTA.tsx
│   │   └── Footer.tsx
│   │
│   └── lib/
│       ├── utils.ts
│       └── data/                   # Course & curriculum data
│
└── public/
    ├── logo.png                    # Company logo
    └── images/                     # Other images
```

## 🚀 Quick Start

### 1. Create Project
```bash
npx create-next-app@latest improve-me-institute --typescript --tailwind --app
cd improve-me-institute
```

### 2. Install Dependencies
```bash
# shadcn/ui setup
npx shadcn-ui@latest init

# Install components
npx shadcn-ui@latest add button card dropdown-menu dialog input label textarea

# Additional packages
npm install framer-motion lucide-react clsx tailwind-merge
```

### 3. Copy Files
Copy these provided files to your project:
- `globals.css` → `src/app/globals.css`
- `Header.tsx` → `src/components/navigation/Header.tsx`
- `HomeHero.tsx` → `src/components/hero/HomeHero.tsx`
- `logo.png` → `public/logo.png`

### 4. Configure Tailwind
Update `tailwind.config.ts` with custom colors and fonts (see QUICK_START.md)

### 5. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## 📋 Files Included

### Core Documentation
1. **CURSOR_INSTRUCTIONS.md** - Complete design system, component specs, and development guidelines
2. **QUICK_START.md** - Step-by-step setup commands and troubleshooting
3. **README.md** - This file

### Starter Components
1. **globals.css** - Complete design system with CSS variables, utilities, and animations
2. **Header.tsx** - Responsive navigation with dropdowns and mobile menu
3. **HomeHero.tsx** - Hero section with floating subject cards and CTAs

### Assets
1. **logo.png** - Company logo (provided by you)

## 🎯 What Makes This Different

### ❌ What We're Avoiding (Generic AI Look)
- Purple gradients on white backgrounds
- Inter/Roboto/Arial fonts
- Cookie-cutter card grids
- Predictable layouts
- Generic "hero-pattern.svg" backgrounds

### ✅ What We're Building Instead
- Bold color accents (red & yellow) with navy foundation
- Distinctive font pairing (DM Sans + Plus Jakarta Sans)
- Bento-style asymmetric layouts
- Diagonal elements echoing the logo's chevrons
- Orchestrated animations (not scattered micro-interactions)
- Warm, authentic feel (not sterile tech vibes)

## 🎨 Design System Highlights

### Colors
```css
/* Primary */
--navy-600: #1e3a8a   /* Brand navy */
--red-500: #ef4444    /* Energy accent */
--yellow-400: #fbbf24 /* Warmth accent */

/* Usage */
- Headings: Navy
- CTAs: Red gradient
- Accents: Yellow underlines, badges
- Backgrounds: Soft grays with subtle patterns
```

### Typography
```css
/* Display (Headings) */
font-family: 'DM Sans', sans-serif;
font-weight: 600-700;

/* Body (Paragraphs) */
font-family: 'Plus Jakarta Sans', sans-serif;
font-weight: 400-600;
```

### Animations
- **Page Load**: Orchestrated reveals with staggered delays
- **Scroll**: Fade-in-up on sections (threshold: 0.2)
- **Hover**: Subtle scale + shadow (cards), underline slide (nav)
- **Performance**: CSS-first, Framer Motion for complex sequences

## 🏗️ Development Roadmap

### Phase 1: Foundation ✅
- [x] Design system setup
- [x] Header component
- [x] Hero section
- [ ] Footer component

### Phase 2: Homepage Sections
- [ ] Primary courses section (bento grid)
- [ ] Secondary courses section (reverse layout)
- [ ] Stats bar with counter animations
- [ ] Testimonials carousel
- [ ] Booking CTA section

### Phase 3: Inner Pages
- [ ] Courses overview page
- [ ] Individual course pages (template)
- [ ] Curriculum pages (timeline visualization)
- [ ] About page
- [ ] Contact page with form
- [ ] FAQ page with accordions

### Phase 4: Enhancements
- [ ] Form handling (booking assessments)
- [ ] Google Maps integration
- [ ] Blog/news section
- [ ] Image optimization
- [ ] SEO meta tags

### Phase 5: Polish & Launch
- [ ] Performance optimization (Lighthouse 90+)
- [ ] Accessibility audit (WCAG AA)
- [ ] Mobile testing
- [ ] Cross-browser testing
- [ ] Analytics integration

## 💡 Using Cursor AI Effectively

### Best Prompts
```
"Create a [component] following the Modern Educational Warmth aesthetic from globals.css"

"Build a mobile-responsive [section] with asymmetric layout and scroll animations"

"Add Framer Motion animations to this component matching the orchestrated style"

"Optimize this component for performance while maintaining visual quality"

"Make this section more visually distinctive without adding complexity"
```

### Reference Context
Always point Cursor to:
- Design system in `globals.css`
- Component specs in `CURSOR_INSTRUCTIONS.md`
- Aesthetic guidelines (avoid generic AI look)

## 📊 Success Metrics

The website succeeds when:
- ✅ Parents feel: "This looks premium and trustworthy"
- ✅ It's memorable: "That's the one with the arrow design"
- ✅ Mobile experience is excellent (60%+ traffic)
- ✅ Booking form conversions are high
- ✅ Page load is <2s (Lighthouse 90+)
- ✅ It doesn't look like "another AI-generated education site"

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (DM Sans, Plus Jakarta Sans)

## 📱 Key Features

1. **Responsive Navigation**
   - Desktop: Dropdown menus for courses & curriculum
   - Mobile: Slide-in drawer with staggered animations

2. **Engaging Hero**
   - Asymmetric split layout
   - Floating subject cards with 3D effects
   - Location badge and trust indicators

3. **Distinctive Sections**
   - Bento grid layouts (not boring card grids)
   - Diagonal flow elements
   - Alternating content sides

4. **Performance**
   - Optimized images with Next.js Image
   - CSS-first animations
   - Code splitting
   - Lazy loading

5. **Accessibility**
   - Semantic HTML
   - Keyboard navigation
   - Screen reader support
   - Reduced motion support

## 🎓 Educational Content

### Course Categories
- **Primary (Age 3-11)**: Mathematics, English, Science
- **Secondary (Age 11-18)**: 
  - Sciences: Physics, Chemistry, Biology
  - Languages: English
  - Humanities: Business, Economics, Psychology
  - Special: Chess

### Curriculum Stages
- EYFS (Age 3-5)
- Key Stage 1 (Ages 5-7)
- Key Stage 2 (Ages 7-11)
- Key Stage 3 (Ages 11-14)
- IGCSE/GCSE/MYP (Ages 14-16)
- A-Levels/IB Diploma (Ages 16-18)

## 📞 Contact Information

**Location**: Gold & Diamond Park, Dubai
**Phone Numbers**:
- Primary: +971-50 185 2505
- Central: +971-58 533 4989
- Senior: +971-58 547 1457
- Landline: +971 4 380 5525

## 🔗 Original Website

Current site: https://improvemeinstitute.com (WordPress)
New site: Modern Next.js rebuild with enhanced UX/UI

## 🆘 Support & Questions

### Common Issues
See `QUICK_START.md` for troubleshooting guide

### Development Tips
See `CURSOR_INSTRUCTIONS.md` for:
- Component specifications
- Animation strategies
- Layout patterns
- Content guidelines

---

**Built with attention to detail and a commitment to avoiding generic AI aesthetics.** 🚀

Every design decision is intentional, every animation purposeful, every detail crafted to represent Improve ME Institute's excellence in education.
