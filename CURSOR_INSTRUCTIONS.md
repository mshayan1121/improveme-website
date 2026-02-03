# Improve ME Institute Website - Cursor AI Instructions

## 🎯 Project Overview
Building a Next.js website for Improve ME Institute, a premium tutoring center in Dubai's Gold & Diamond Park. The site must feel **warm, energetic, and professional** - avoiding generic AI-generated aesthetics.

## 🎨 Design Philosophy: "Upward Progress"

### Brand DNA
- **Not**: Sterile tech startup, corporate stiffness, generic education templates
- **Yes**: Warm professionalism, energetic learning environment, authentic Dubai presence
- **Core Theme**: The chevron arrows in the logo = upward progression, improvement, aspiration

### Aesthetic Direction: "Modern Educational Warmth"
Think: Premium tutoring space meets contemporary Dubai design - clean but not cold, professional but approachable, energetic without being childish.

---

## 🎨 Design System

### Color Palette (from logo analysis)
```css
:root {
  /* Primary Colors */
  --navy-900: #0f172a;        /* Deep navy for text */
  --navy-800: #1e293b;        
  --navy-700: #334155;        
  --navy-600: #1e3a8a;        /* Brand navy */
  
  /* Accent Colors */
  --red-500: #ef4444;         /* "ME" red - energy, attention */
  --red-600: #dc2626;
  --yellow-400: #fbbf24;      /* Chevron gold - warmth, optimism */
  --yellow-500: #f59e0b;
  
  /* Neutrals */
  --white: #ffffff;
  --gray-50: #f8fafc;
  --gray-100: #f1f5f9;
  --gray-200: #e2e8f0;
  --gray-800: #1e293b;
  
  /* Gradient Accent (for CTAs) */
  --gradient-energy: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  --gradient-warmth: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}
```

### Typography
**IMPORTANT**: Avoid Inter, Roboto, Arial, Space Grotesk (generic AI choices)

```css
/* Recommended Font Pairings */

/* Option 1: Modern Editorial */
--font-display: 'DM Sans', sans-serif;      /* Headings - geometric but warm */
--font-body: 'Plus Jakarta Sans', sans-serif; /* Body - friendly, readable */

/* Option 2: Bold Contemporary */
--font-display: 'Outfit', sans-serif;       /* Headings - distinctive, modern */
--font-body: 'Manrope', sans-serif;         /* Body - professional, approachable */

/* Implementation */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
```

### Spacing & Layout Philosophy
- **Generous whitespace**: Let content breathe
- **Asymmetric sections**: Break the predictable grid
- **Diagonal elements**: Echo the chevron arrows
- **Layering**: Subtle overlaps create depth

---

## 🏗️ Project Structure

```
improve-me-institute/
├── app/
│   ├── layout.tsx                 # Root layout with fonts
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Design system tokens
│   ├── courses/
│   │   ├── page.tsx              # Courses overview
│   │   └── [subject]/page.tsx    # Individual subjects
│   ├── curriculum/
│   │   ├── page.tsx              # Curriculum hub
│   │   └── [stage]/page.tsx      # EYFS, KS1, KS2, etc.
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── faq/page.tsx
│
├── components/
│   ├── ui/                        # shadcn components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ... (install as needed)
│   ├── navigation/
│   │   ├── Header.tsx            # Main navigation
│   │   └── MobileMenu.tsx
│   ├── hero/
│   │   └── HomeHero.tsx          # Hero section
│   ├── sections/
│   │   ├── PrimarySection.tsx
│   │   ├── SecondarySection.tsx
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── StatsBar.tsx
│   │   └── BookingCTA.tsx
│   └── animations/
│       └── PageTransition.tsx
│
├── lib/
│   ├── utils.ts
│   └── data/
│       ├── courses.ts
│       ├── curriculum.ts
│       └── testimonials.ts
│
└── public/
    ├── images/
    └── logo.png
```

---

## 🎭 Component Specifications

### 1. Header/Navigation
**Design Requirements**:
- Fixed header with subtle backdrop blur on scroll
- Logo on left (use provided image)
- Main nav: Home | Courses | Curriculum | About | FAQ | Contact
- "Book Free Assessment" CTA button (red accent)
- Mobile: Slide-in menu (not hamburger overlay)

**Animation**:
- Smooth scroll-triggered fade: transparent → backdrop-blur-md
- Nav items underline on hover (yellow accent, diagonal slide)
- Mobile menu slides from right with stagger

```tsx
// Key features:
- Sticky positioning with scroll-triggered background
- Dropdown menus for Courses & Curriculum (multi-level)
- Mobile-first responsive design
- Framer Motion for smooth transitions
```

### 2. Hero Section (Homepage)
**Layout**: Full viewport height, asymmetric split

**Left Side (60%)**:
- H1: "Leading Tutoring Center in Dubai" (but make it feel aspirational)
- Subheading with location badge: "Gold & Diamond Park"
- Key stats in small badges: "5000+ Students" | "200+ Schools" | "20+ Subjects"
- Dual CTAs: "Book Free Assessment" (primary red) + "Explore Courses" (outline)

**Right Side (40%)**:
- Decorative element using chevron pattern from logo
- Or: Image of the actual institute (if you provide)
- Floating cards showing subjects (subtle 3D effect)

**Background**:
- Soft gradient: gray-50 → white
- Subtle noise texture for warmth
- Animated chevron pattern in background (very subtle, navy-100 opacity)

### 3. Primary Section (Age 3-11)
**Layout**: Bento grid style (break the standard card grid)

```
┌─────────────┬───────────┐
│             │           │
│   Content   │   Image   │
│   (Left)    │           │
│             │           │
├─────┬───────┴───────────┤
│ Mth │   English   │ Sci │
└─────┴─────────────┴─────┘
```

**Features**:
- Large leading paragraph about early years
- Subject cards with icons (hand-drawn style, not generic)
- Hover: Cards lift with subtle shadow (not too aggressive)
- Background: Alternating sections for visual rhythm

### 4. Secondary Section (Age 11-18)
**Layout**: Reverse of primary (image left, content right)

**Special Element**: Timeline visualization
- Years 7-9 → GCSE/IGCSE → A-Levels/IB
- Interactive: Hover shows subjects available per stage
- Uses yellow accent for active state

### 5. Stats Bar
**Design**: Full-width strip between sections

```
┌────────────────────────────────────────────────────┐
│  5000+ Students  •  200+ Schools  •  10000+ Hours  │
└────────────────────────────────────────────────────┘
```

- Animated counter on scroll into view
- Navy background, white text
- Yellow accent separators (•)

### 6. Testimonials
**Design**: Card carousel (NOT standard slider)

- 3 cards visible on desktop, auto-rotate
- Parent name + child's grade level
- 5-star rating (yellow stars)
- Pull quote in larger text
- Google Reviews badge

**Layout Trick**: Cards slightly rotated (±2deg) for organic feel

### 7. Booking CTA Section
**Design**: Full-width, red gradient background

- White text, high contrast
- Form embedded (not redirect): Name, Phone, Grade Level, Subject Interest
- "Book Your Free Assessment" heading
- Subheading: Response time promise
- Form on right, content on left

---

## 🎬 Animation Strategy

### Guiding Principle
**Quality over quantity**: One great orchestrated entrance beats scattered micro-interactions

### Page Load Sequence
1. Header fades down (0ms delay)
2. Hero left content (100ms delay, slide from left)
3. Hero right element (200ms delay, slide from right)
4. Stats badges (300ms delay, stagger 50ms each)

### Scroll Animations
Use Framer Motion's `useInView` for:
- Section fade-ins (threshold: 0.2)
- Stats counter animations
- Card hovers (scale: 1.02, shadow increase)

### Hover States
- Buttons: Slight scale + shadow increase
- Cards: Lift effect (translateY: -4px)
- Nav items: Underline slide from left
- Subject tiles: Icon subtle bounce

### Critical Performance
- CSS animations where possible (transforms, opacity)
- Framer Motion for complex orchestrations
- Reduce motion for accessibility: `prefers-reduced-motion`

---

## 📦 Tech Stack & Setup

### Dependencies
```bash
npx create-next-app@latest improve-me-institute --typescript --tailwind --app
cd improve-me-institute

# Install shadcn
npx shadcn-ui@latest init

# Install required shadcn components
npx shadcn-ui@latest add button card dropdown-menu

# Install additional packages
npm install framer-motion
npm install lucide-react  # For icons
npm install clsx tailwind-merge
```

### Tailwind Config
```js
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          600: '#1e3a8a',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        red: {
          500: '#ef4444',
          600: '#dc2626',
        },
        yellow: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 🎯 Key Pages Structure

### Homepage
1. Hero (full viewport)
2. Primary section (bento layout)
3. Secondary section (reverse layout)
4. Stats bar (full width)
5. Testimonials (carousel)
6. Booking CTA
7. Footer

### Courses Page
- Hero with filter chips (Primary | Secondary | All)
- Grid of course cards (hover reveals quick info)
- Each card links to detailed page

### Curriculum Page
- Timeline visualization showing progression
- Expandable sections for each key stage
- Subject matrix showing what's covered when

### Contact Page
- Map embed (Google Maps - Gold & Diamond Park location)
- Contact form
- Multiple phone numbers displayed
- Office hours

---

## 🚫 What to AVOID

### Generic AI Patterns
❌ Purple gradients on white backgrounds
❌ Boring card grids with centered text
❌ Generic "hero-pattern.svg" backgrounds
❌ Overuse of drop shadows
❌ Cookie-cutter layouts

### Technical Anti-Patterns
❌ Using `<Image>` without proper sizing (CLS issues)
❌ Inline styles (use Tailwind classes)
❌ Heavy animations on every element
❌ Missing alt tags on images
❌ Non-semantic HTML

---

## ✅ Development Checklist

### Phase 1: Foundation
- [ ] Set up Next.js project with TypeScript
- [ ] Configure Tailwind with custom design tokens
- [ ] Install shadcn components
- [ ] Add Google Fonts
- [ ] Create color palette CSS variables
- [ ] Set up folder structure

### Phase 2: Core Components
- [ ] Header with navigation
- [ ] Mobile menu
- [ ] Footer
- [ ] Button variants (primary, secondary, outline)
- [ ] Card component with hover states

### Phase 3: Homepage
- [ ] Hero section
- [ ] Primary courses section
- [ ] Secondary courses section
- [ ] Stats bar with animations
- [ ] Testimonials carousel
- [ ] Booking CTA section

### Phase 4: Additional Pages
- [ ] Courses overview page
- [ ] Individual course pages (template)
- [ ] Curriculum page
- [ ] About page
- [ ] Contact page
- [ ] FAQ page

### Phase 5: Polish
- [ ] Page transitions
- [ ] Scroll animations
- [ ] Mobile responsive testing
- [ ] Performance optimization
- [ ] Accessibility audit (WCAG AA)
- [ ] SEO meta tags

---

## 🎨 Design Inspiration References

### For Layout
- Apple Education pages (clean, spacious)
- Stripe's homepage (asymmetric sections)
- Linear's website (diagonal elements)

### For Typography
- Medium's reading experience
- Notion's clarity

### For Animation
- Vercel's homepage (subtle, purposeful)
- Framer's landing pages (orchestrated reveals)

---

## 📝 Content Strategy Notes

### Tone of Voice
- **Parents**: Professional, results-focused, trustworthy
- **Students**: Encouraging, not intimidating
- **Overall**: Warm professionalism (not corporate stiff)

### Key Messages
1. Dubai's premier tutoring center
2. Curriculum-aligned expertise
3. Small group attention
4. Proven results (stats)
5. Convenient Gold & Diamond Park location

### SEO Keywords (weave naturally)
- "Tutoring center in Dubai"
- "Coaching institute Dubai"
- "GCSE tutoring Dubai"
- "A-Level tutors Dubai"
- "Gold and Diamond Park tutoring"

---

## 🚀 Cursor-Specific Instructions

### When starting:
1. Create project structure first
2. Set up design tokens in globals.css
3. Build components bottom-up (atoms → molecules → organisms)
4. Test each component in isolation before composing

### For each component:
1. Start with TypeScript interface for props
2. Build semantic HTML structure
3. Add Tailwind styling
4. Implement animations last
5. Test responsive breakpoints

### Use Cursor's strengths:
- "Generate this component based on design specs above"
- "Make this more visually interesting without adding complexity"
- "Improve accessibility for this section"
- "Optimize this animation for performance"

---

## 🎯 Success Criteria

The website succeeds when:
✅ Parents feel: "This looks premium and trustworthy"
✅ It's memorable: "That's the one with the arrow design"
✅ Mobile experience is excellent (60%+ traffic)
✅ Booking form submissions work flawlessly
✅ Page load is <2s (Lighthouse 90+)
✅ It doesn't look like "another AI-generated education site"

---

**Ready to build?** Start with the design system in globals.css, then the Header component. Build mobile-first, test often, and commit to the aesthetic vision!
