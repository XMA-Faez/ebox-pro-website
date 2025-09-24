# Component CSS Mapping Reference

## CSS Classes Analysis from theme.css

### Layout & Container Classes
```css
.page-wrapper → min-h-screen relative overflow-hidden
.section-clean → py-24 relative bg-white
.section-small → py-16 relative
.container-small → max-w-6xl mx-auto px-6
.content-block → relative z-10
.content-inner → relative
```

### Header/Hero Specific Classes
```css
.header → relative min-h-screen flex flex-col
.navbar → fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-md
.navigation-dark → bg-neutral-900 text-white
.navigation-container → flex items-center justify-between px-8 py-4
.navigation-left → flex items-center space-x-8
.navigation-right → flex items-center space-x-6
.nav-list → flex space-x-8
.nav-link-dark → text-white/80 hover:text-white transition-colors
.nav-button → bg-primary-dark text-white px-6 py-3 rounded-full
.nav-ghost → border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/10

.header-content → flex-1 flex flex-col justify-center px-8 py-20
.header-head → max-w-7xl mx-auto w-full
.header-detail → flex items-center space-x-6 mt-8
.header-social-media → flex space-x-4
.header-social-link → w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20
.header-tab → mt-12
.header-tab-menu → flex space-x-2
.header-tab-link → px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20

.header-background → absolute inset-0 -z-10
.header-overlay → absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-900/40
.header-image → w-full h-full object-cover
```

### Typography Classes
```css
.h1-heading → text-7xl font-space-grotesk font-normal leading-tight tracking-tight
.h3-heading → text-5xl font-space-grotesk font-medium leading-tight tracking-tight
.h4-heading → text-4xl font-space-grotesk font-medium leading-tight
.h5-heading → text-3xl font-space-grotesk font-medium leading-snug

.display → text-8xl lg:text-9xl font-bold
.linear-title → bg-gradient-to-r from-primary-base via-secondary-base to-primary-dark bg-clip-text text-transparent

.paragraph-large → text-lg leading-relaxed text-neutral-600
.paragraph-regular → text-base leading-normal text-neutral-600
.label-large → text-sm uppercase tracking-wider font-semibold
.label-regular → text-sm font-medium
.overline → text-xs uppercase tracking-widest text-white/60 mb-4
```

### Logo Section Classes
```css
.logo-master → py-16 overflow-hidden
.customer-logo → inline-flex items-center justify-center px-8 opacity-60 hover:opacity-100
.logo-grid → grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8
```

### Capabilities Section Classes
```css
.capability-master → py-20
.capability-grid → grid md:grid-cols-2 gap-8
.capability-card → bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-3xl p-10 relative overflow-hidden
.capability-wrapper → flex items-start space-x-3 mb-4
.feature-icon → w-5 h-5 rounded-full bg-primary-base/20 flex-shrink-0
.text-stroke → [custom CSS needed for stroke effect]
```

### Services Section Classes
```css
.service-wrapper → relative
.card-grid → grid md:grid-cols-2 lg:grid-cols-3 gap-8
.service-card → group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300
.base-icon → w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4
.service-title → text-xl font-semibold mb-3
.service-description → text-neutral-600
```

### Common Utility Classes
```css
.wrap-v-small → space-y-4
.wrap-v-regular → space-y-6
.wrap-v-large → space-y-8
.align-v-center → text-center items-center
.align-v-left → text-left items-start
.margin-bottom-64 → mb-16
.max-width-regular → max-w-2xl mx-auto
```

### Badge & Button Classes
```css
.badge → inline-block px-4 py-2 bg-neutral-100 rounded-full text-sm font-medium mb-4
.button-primary → bg-primary-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-darker transition-colors
.video-link → inline-flex items-center space-x-3 text-white hover:text-primary-base transition-colors
```

### Animation Classes (Framer Motion equivalents)
```css
[data-w-id] animations:
- opacity: 0 → 1 : initial={{ opacity: 0 }} animate={{ opacity: 1 }}
- transform: translate3d : initial={{ y: 20 }} animate={{ y: 0 }}
```

## Component-Specific Tailwind Conversions

### Hero.tsx
- Main container: `relative min-h-screen flex flex-col bg-neutral-900`
- Navigation: `fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-md`
- Content wrapper: `flex-1 flex items-center justify-center px-8`
- Title: `text-7xl lg:text-8xl font-space-grotesk font-normal`
- Gradient text: `bg-gradient-to-r from-[#f7bebc] via-[#bcf4f7] to-[#f74b45] bg-clip-text text-transparent`

### LogoSection.tsx
- Container: `py-16 bg-neutral-50`
- Logo grid: `grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8`
- Logo items: `opacity-60 hover:opacity-100 transition-opacity duration-300`

### Capabilities.tsx
- Container: `py-20 bg-white`
- Grid: `grid md:grid-cols-2 gap-8 max-w-6xl mx-auto`
- Cards: `bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-3xl p-10`
- Icons: `w-5 h-5 rounded-full bg-white/20`

### Services.tsx
- Container: `py-24 bg-neutral-50`
- Grid: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`
- Cards: `bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all`
- Icons: `w-12 h-12 rounded-xl bg-primary-light/20`