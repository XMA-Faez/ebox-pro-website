# Component Architecture

## Component Structure

### Core Layout Components

#### 1. Header
- **Fixed/Sticky** positioning with backdrop blur
- **Logo** with animation on load
- **Navigation** with hover effects
- **CTA Button** (Get Quote)
- **Mobile Menu** with hamburger animation
- **Sub-features**: 
  - Transparent to solid on scroll
  - Active page indicators
  - Mega menu for services (desktop)

#### 2. Hero Section
- **Full viewport height** on desktop, responsive on mobile
- **Animated headline** with typewriter or fade-in effect
- **Subheadline** with delayed animation
- **Dual CTA buttons** (Get Quote, View Services)
- **Background**: Animated gradient or particle system
- **Visual element**: 3D warehouse/truck illustration or animated logistics network

#### 3. Services Section
- **Service cards** with icon animations
- **Hover effects**: Card lift, icon spin/bounce
- **Tab system** for service categories
- **Feature list** with check animations
- **CTA** for each service

#### 4. Cost Calculator
- **Multi-step form** with progress indicator
- **Input types**:
  - Package dimensions
  - Weight
  - Origin/Destination
  - Service type selection
  - Volume/quantity
- **Real-time calculation** with animated number updates
- **Results display** with breakdown
- **Save/Export quote** functionality

#### 5. Quote Request Form
- **Floating labels** with smooth transitions
- **Multi-step** or single page option
- **Fields**:
  - Company information
  - Service requirements
  - Volume estimates
  - Timeline
  - Special requirements
- **File upload** for RFQ documents
- **Success animation** on submit

#### 6. About Us Section
- **Company stats** with count-up animation
- **Timeline** or milestones with scroll reveal
- **Team/Leadership** cards (optional)
- **Certifications/Awards** carousel
- **Company video** or image gallery

#### 7. Contact Section
- **Contact form** with validation
- **Office locations** with interactive map
- **Contact cards** for different departments
- **Operating hours** display
- **Direct action buttons** (Call, Email, Chat)

#### 8. Footer
- **Multi-column layout**
- **Newsletter signup** with animation
- **Social links** with hover effects
- **Legal links** (Privacy, Terms)
- **Certifications/Partnerships** logos
- **Back to top** smooth scroll button

### Micro-Components

#### Animations & Effects
- **ScrollTrigger** wrapper for reveal animations
- **ParallaxWrapper** for depth effects
- **GlowButton** with hover glow effect
- **AnimatedCounter** for statistics
- **LoadingSpinner** with brand colors
- **SkeletonLoader** for content loading

#### UI Elements
- **Badge** for features/tags
- **Tooltip** with smooth fade
- **Modal** with backdrop blur
- **Accordion** for FAQs
- **Tab** component for content switching
- **Slider/Carousel** for testimonials

## State Management
- Form state with React Hook Form
- Animation state with Framer Motion
- Global UI state with Context API
- Calculator state with local state

## Performance Considerations
- Lazy load heavy animations
- Image optimization with Next.js Image
- Code splitting for calculator/forms
- Debounced scroll handlers
- CSS animations where possible over JS

## Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader announcements
- Reduced motion options