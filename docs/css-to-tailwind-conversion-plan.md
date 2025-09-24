# CSS to Tailwind Conversion Plan

## Overview
This document outlines the systematic approach to convert Webflow CSS classes from the Atlantio template to Tailwind CSS for the Ebox Pro website.

## Component Mapping

### 1. Hero Section (Header Component)
**HTML Reference**: Lines 102-480 in template
**React Component**: `/components/Hero.tsx`
**Key Classes to Convert**:
- `.header` → Main wrapper
- `.navbar` → Navigation container
- `.header-content` → Content container
- `.header-head` → Main heading section
- `.header-background` → Background image container
- `.header-overlay` → Overlay effect
- `.linear-title` → Gradient text effect
- `.header-tab` → Tab navigation system

### 2. Logo Section
**HTML Reference**: Lines 482-900 (logo-master section)
**React Component**: `/components/LogoSection.tsx`
**Key Classes to Convert**:
- `.logo-master` → Main container
- `.customer-logo` → Individual logo wrapper
- `.logo-grid` → Grid layout for logos

### 3. Capabilities Section
**HTML Reference**: Lines 900-1440
**React Component**: `/components/Capabilities.tsx`
**Key Classes to Convert**:
- `.capability-master` → Main container
- `.capability-card` → Individual capability card
- `.capability-wrapper` → Feature wrapper
- `.feature-icon` → Icon styling
- `.text-stroke` → Outlined text effect

### 4. Services Section
**HTML Reference**: Lines 1442-2500
**React Component**: `/components/Services.tsx`
**Key Classes to Convert**:
- `.content-block` → Main content wrapper
- `.service-wrapper` → Services container
- `.service-card` → Individual service card
- `.card-grid` → Grid layout
- `.badge` → Badge component
- `.base-icon` → Icon styling

## CSS Analysis from theme.css

### Core Layout Classes
```css
.section-clean → py-24 relative
.section-small → py-16 relative
.container-small → max-w-6xl mx-auto px-6
.page-wrapper → min-h-screen relative
```

### Typography Classes
```css
.h1-heading → text-7xl font-space-grotesk font-normal tracking-tight
.h3-heading → text-5xl font-space-grotesk font-medium tracking-tight
.paragraph-large → text-lg leading-relaxed
.paragraph-regular → text-base leading-normal
.label-large → text-sm uppercase tracking-wider font-semibold
.label-regular → text-sm font-medium
.overline → text-xs uppercase tracking-widest opacity-60
```

### Spacing & Wrapper Classes
```css
.wrap-v-small → space-y-4
.wrap-v-regular → space-y-6
.wrap-v-large → space-y-8
.margin-bottom-64 → mb-16
.max-width-regular → max-w-2xl
```

### Visual Effects Classes
```css
.text-stroke → Custom CSS (text stroke effect)
.linear-title → bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent
.badge → inline-block px-4 py-2 bg-neutral-100 rounded-full text-sm
```

### Card & Component Classes
```css
.service-card → bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow
.capability-card → bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-3xl p-10
.feature-icon → w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center
```

## Implementation Strategy

### Phase 1: Core Layout & Typography
1. Update global styles in `globals.css`
2. Configure Tailwind theme with custom values
3. Set up font families (Inter, Space Grotesk)

### Phase 2: Component by Component Conversion
1. Start with Hero component (most complex)
2. Move to simpler components (LogoSection)
3. Progress through Capabilities, Services
4. Handle remaining components

### Phase 3: Custom CSS Requirements
1. Text stroke effects (may need custom CSS)
2. Complex animations and transitions
3. Gradient overlays and masks

## Tailwind Config Updates Needed

```javascript
// tailwind.config.js additions
theme: {
  extend: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'space-grotesk': ['Space Grotesk', 'sans-serif'],
    },
    colors: {
      'neutral': {
        100: '#f5f7fa',
        200: '#e6ebf0',
        300: '#c7cdd4',
        400: '#858d94',
        500: '#4d545c',
        600: '#2f363d',
        700: '#1f2429',
        800: '#191d21',
        900: '#070b0f',
      },
      'primary': {
        light: '#fcf3f2',
        base: '#f7bebc',
        dark: '#f74b45',
      },
      'secondary': {
        light: '#f2fcfc',
        base: '#bcf4f7',
        dark: '#45edf7',
      }
    },
    spacing: {
      '18': '4.5rem',
      '88': '22rem',
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in',
      'slide-up': 'slideUp 0.6s ease-out',
    }
  }
}
```

## Custom CSS Required

Some effects will need custom CSS in addition to Tailwind:

```css
/* Text stroke effect */
.text-stroke {
  -webkit-text-stroke: 2px currentColor;
  -webkit-text-fill-color: transparent;
}

/* Glass morphism effect */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
```

## Next Steps
1. Begin with Hero component conversion
2. Test each component after conversion
3. Document any custom CSS requirements
4. Update component props for dynamic styling