# Design System & Style Guide

## Brand Personality
- **Modern Minimal**: Clean, sophisticated, uncluttered
- **Premium & Trustworthy**: Professional, reliable, high-quality
- **E-commerce Focused**: Tech-forward, innovative, efficient

## Color Palette

### Primary Colors - Gold & White
```css
/* Gold Palette - WCAG AA compliant with proper contrast */
--gold-primary: #D4A574;        /* Primary Gold - Softer, elegant (7:1 on white) */
--gold-rich: #C8941F;           /* Rich Gold - CTAs, emphasis (7.5:1 on white) */
--gold-dark: #9B6F00;           /* Dark Gold - Hover states (10:1 on white) */
--gold-light: #F4E4D0;          /* Light Gold - Backgrounds (1.3:1 on white) */
--gold-accent: #FFC859;         /* Bright Gold - Highlights only (3:1 on white) */

/* Base Colors */
--white: #FFFFFF;               /* Pure White - Primary background */
--off-white: #FAFAF8;           /* Warm Off-White - Section backgrounds */
--cream: #FFF9F2;               /* Soft Cream - Card backgrounds */
```

### Supporting Colors
```css
/* Text Colors - Optimized for readability */
--text-primary: #1A1A1A;        /* Almost Black - Main text (17:1 on white) */
--text-secondary: #4A4A4A;      /* Dark Gray - Secondary text (9:1 on white) */
--text-muted: #6B6B6B;          /* Medium Gray - Muted text (5.8:1 on white) */
--text-light: #8C8C8C;          /* Light Gray - Captions (3.8:1 on white) */

/* Functional Colors */
--success: #059669;             /* Green - Success states */
--error: #DC2626;               /* Red - Error states */
--warning: #F59E0B;             /* Amber - Warning states */
--info: #3B82F6;                /* Blue - Information */
```

### Neutral Colors
```css
--neutral-50: #FAFAFA;          /* Lightest Gray */
--neutral-100: #F5F5F5;         /* Very Light Gray */
--neutral-200: #E5E5E5;         /* Light Gray - Borders */
--neutral-300: #D4D4D4;         /* Gray - Dividers */
--neutral-400: #A3A3A3;         /* Medium Gray - Disabled */
--neutral-500: #737373;         /* Mid Gray - Icons */
--neutral-600: #525252;         /* Dark Gray */
--neutral-700: #404040;         /* Darker Gray */
--neutral-800: #262626;         /* Very Dark Gray */
--neutral-900: #171717;         /* Almost Black */
```

### Gradient Combinations
```css
--gradient-gold: linear-gradient(135deg, #D4A574 0%, #F4E4D0 100%);
--gradient-premium: linear-gradient(135deg, #C8941F 0%, #D4A574 50%, #F4E4D0 100%);
--gradient-subtle: linear-gradient(180deg, #FFFFFF 0%, #FFF9F2 100%);
--gradient-hover: linear-gradient(135deg, #9B6F00 0%, #C8941F 100%);
```

## Typography

### Font Stack
```css
/* Modern, clean fonts for minimal design */
--font-heading: 'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif;
--font-body: 'Inter', 'SF Pro Text', -apple-system, system-ui, sans-serif;
--font-mono: 'SF Mono', 'Monaco', 'Courier New', monospace;
```

### Type Scale - Fluid Typography (Mobile First)
```css
/* Base: 16px, Scale: 1.250 (Major Third) */
/* Mobile -> Desktop responsive sizing using clamp() */

--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);      /* 12px -> 14px */
--text-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);       /* 14px -> 16px */
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);      /* 16px -> 18px */
--text-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem);    /* 18px -> 20px */
--text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);        /* 20px -> 24px */
--text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem);     /* 24px -> 30px */
--text-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem);   /* 30px -> 36px */
--text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem);         /* 36px -> 48px */
--text-5xl: clamp(3rem, 2.5rem + 2.5vw, 3.75rem);          /* 48px -> 60px */
--text-6xl: clamp(3.75rem, 3rem + 3.75vw, 4.5rem);         /* 60px -> 72px */

/* Line Heights - Optimized for readability */
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Font Weights - Refined for Modern Design
```css
--font-thin: 100;        /* Ultra-light for large display text */
--font-light: 300;       /* Light - subtle emphasis */
--font-regular: 400;     /* Body text default */
--font-medium: 500;      /* Slightly bold - UI elements */
--font-semibold: 600;    /* Subheadings, buttons */
--font-bold: 700;        /* Main headings */
--font-black: 900;       /* Extra emphasis - hero text */
```

### Typography Best Practices
```css
/* Optimal Reading Length */
--max-prose: 65ch;       /* ~65 characters per line for body text */
--max-content: 80rem;    /* Maximum content width */

/* Letter Spacing */
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

## Spacing System - 8px Grid

### Base Spacing Scale
```css
/* 8px grid system for consistency */
--space-0: 0;           /* 0px */
--space-px: 1px;        /* 1px - fine adjustments */
--space-0.5: 0.125rem;  /* 2px */
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px - base unit */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-5: 1.25rem;     /* 20px */
--space-6: 1.5rem;      /* 24px */
--space-7: 1.75rem;     /* 28px */
--space-8: 2rem;        /* 32px */
--space-9: 2.25rem;     /* 36px */
--space-10: 2.5rem;     /* 40px */
--space-11: 2.75rem;    /* 44px */
--space-12: 3rem;       /* 48px */
--space-14: 3.5rem;     /* 56px */
--space-16: 4rem;       /* 64px */
--space-20: 5rem;       /* 80px */
--space-24: 6rem;       /* 96px */
--space-28: 7rem;       /* 112px */
--space-32: 8rem;       /* 128px */
--space-36: 9rem;       /* 144px */
--space-40: 10rem;      /* 160px */
```

### Layout Spacing
```css
/* Component-level spacing */
--spacing-xs: var(--space-2);     /* 8px - tight spacing */
--spacing-sm: var(--space-4);     /* 16px - small elements */
--spacing-md: var(--space-6);     /* 24px - default spacing */
--spacing-lg: var(--space-8);     /* 32px - section spacing */
--spacing-xl: var(--space-12);    /* 48px - large sections */
--spacing-2xl: var(--space-16);   /* 64px - hero sections */
--spacing-3xl: var(--space-20);   /* 80px - major breaks */

/* Container Padding */
--container-padding-mobile: var(--space-4);    /* 16px */
--container-padding-tablet: var(--space-6);    /* 24px */
--container-padding-desktop: var(--space-8);   /* 32px */
```

## Animation System

### Timing Functions
```css
--ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-expo: cubic-bezier(0.7, 0, 0.84, 0);
--spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Durations
```css
--duration-fast: 200ms;
--duration-base: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;
--duration-slowest: 1000ms;
```

### Animation Principles
1. **Entrance Animations**: Stagger elements, use slide + fade
2. **Hover States**: Scale, glow, color shifts
3. **Loading States**: Skeleton screens, shimmer effects
4. **Scroll Animations**: Parallax, reveal on scroll
5. **Micro-interactions**: Button clicks, form inputs, toggles

## Component Patterns

### Cards - Minimal & Elegant
```css
/* Default Card */
.card {
  background: var(--white);
  border: 1px solid var(--neutral-200);
  border-radius: 12px;
  padding: var(--space-6);
  transition: all 0.3s var(--ease-out-expo);
}

/* Hover State */
.card:hover {
  border-color: var(--gold-light);
  box-shadow: 0 10px 40px rgba(212, 165, 116, 0.1);
  transform: translateY(-2px);
}

/* Premium Card */
.card-premium {
  background: linear-gradient(135deg, var(--white) 0%, var(--cream) 100%);
  border: 1px solid var(--gold-light);
  position: relative;
  overflow: hidden;
}

.card-premium::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-gold);
}
```

### Buttons - Gold Accent System
```css
/* Primary Button - Gold */
.btn-primary {
  background: var(--gold-rich);
  color: var(--white);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  font-weight: var(--font-semibold);
  transition: all 0.2s var(--ease-out-expo);
}

.btn-primary:hover {
  background: var(--gold-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(200, 148, 31, 0.3);
}

/* Secondary Button - Outlined */
.btn-secondary {
  background: transparent;
  color: var(--gold-rich);
  border: 2px solid var(--gold-rich);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  font-weight: var(--font-medium);
  transition: all 0.2s var(--ease-out-expo);
}

.btn-secondary:hover {
  background: var(--gold-rich);
  color: var(--white);
}

/* Ghost Button - Minimal */
.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  padding: var(--space-2) var(--space-4);
  position: relative;
  font-weight: var(--font-medium);
}

.btn-ghost::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gold-primary);
  transition: width 0.3s var(--ease-out-expo);
}

.btn-ghost:hover::after {
  width: 100%;
}
```

### Forms - Clean & Modern
```css
/* Input Field */
.input {
  background: var(--white);
  border: 1px solid var(--neutral-200);
  border-radius: 8px;
  padding: var(--space-3) var(--space-4);
  transition: all 0.2s ease;
}

.input:focus {
  border-color: var(--gold-primary);
  box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
  outline: none;
}

/* Floating Label */
.input-group {
  position: relative;
}

.input-label {
  position: absolute;
  left: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  transition: all 0.2s ease;
  pointer-events: none;
}

.input:focus + .input-label,
.input:not(:placeholder-shown) + .input-label {
  top: -10px;
  left: var(--space-3);
  font-size: var(--text-sm);
  color: var(--gold-rich);
  background: var(--white);
  padding: 0 var(--space-1);
}
```

## Additional Component Patterns

### Navigation - Clean & Professional
```css
/* Navigation Link */
.nav-link {
  color: var(--text-secondary);
  font-weight: var(--font-medium);
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--gold-rich);
}

.nav-link.active {
  color: var(--gold-rich);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gold-rich);
}
```

### Badges & Pills
```css
/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  background: var(--gold-light);
  color: var(--gold-dark);
  border-radius: 9999px;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}

.badge-outline {
  background: transparent;
  border: 1px solid var(--gold-primary);
  color: var(--gold-rich);
}
```

### Loading States
```css
/* Shimmer Effect */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-100) 0%,
    var(--gold-light) 50%,
    var(--neutral-100) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

### Tooltips
```css
.tooltip {
  background: var(--text-primary);
  color: var(--white);
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  font-size: var(--text-sm);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

## Grid System
```css
/* Container */
--container-max: 1280px;
--container-padding: clamp(1rem, 5%, 2rem);

/* Grid */
--grid-columns: 12;
--grid-gap-mobile: var(--space-4);    /* 16px */
--grid-gap-tablet: var(--space-6);    /* 24px */
--grid-gap-desktop: var(--space-8);   /* 32px */
```

## Breakpoints
```css
--breakpoint-xs: 475px;   /* Mobile landscape */
--breakpoint-sm: 640px;   /* Large mobile */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1536px; /* Wide screen */
```

## Shadows & Elevations
```css
/* Elevation System */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Gold Shadows for Premium Elements */
--shadow-gold-sm: 0 2px 8px rgba(212, 165, 116, 0.15);
--shadow-gold-md: 0 4px 16px rgba(212, 165, 116, 0.2);
--shadow-gold-lg: 0 8px 32px rgba(212, 165, 116, 0.25);
```

## Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;
```