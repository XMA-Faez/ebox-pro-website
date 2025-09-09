import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Button variant styles for consistent usage
export const buttonVariants = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  ghost: 'btn-ghost',
}

// Card variant styles
export const cardVariants = {
  default: 'card',
  premium: 'card bg-gradient-to-br from-white to-cream border-gold-light relative overflow-hidden',
  elevated: 'card shadow-gold-md border-gold-light',
}

// Text variant styles
export const textVariants = {
  hero: 'text-5xl font-bold text-primary leading-tight',
  heading: 'text-4xl font-bold text-primary leading-tight',
  subheading: 'text-2xl font-semibold text-secondary leading-tight',
  body: 'text-base text-secondary leading-relaxed',
  caption: 'text-sm text-muted',
  gold: 'text-gold-rich font-semibold',
}

// Container styles for consistent layouts
export const containerVariants = {
  default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  wide: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
}

// Section spacing variants
export const sectionVariants = {
  default: 'py-12 sm:py-16 lg:py-20',
  large: 'py-16 sm:py-20 lg:py-24',
  small: 'py-8 sm:py-12 lg:py-16',
}

// Animation helper classes
export const animations = {
  fadeIn: 'animate-in fade-in duration-700',
  slideUp: 'animate-in slide-in-from-bottom-4 duration-700',
  scaleIn: 'animate-in zoom-in-95 duration-500',
  staggered: (delay: number) => `animate-in fade-in slide-in-from-bottom-4 duration-700 delay-${delay}`,
}

// Gold theme color mappings for Tailwind
export const goldColors = {
  'gold-primary': '#D4A574',
  'gold-rich': '#C8941F', 
  'gold-dark': '#9B6F00',
  'gold-light': '#F4E4D0',
  'gold-accent': '#FFC859',
  'text-primary': '#1A1A1A',
  'text-secondary': '#4A4A4A',
  'text-muted': '#6B6B6B',
  'text-light': '#8C8C8C',
  'cream': '#FFF9F2',
  'off-white': '#FAFAF8',
}

// Responsive breakpoint helpers
export const breakpoints = {
  xs: '475px',
  sm: '640px', 
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

// Shadow variants with gold theme
export const shadowVariants = {
  subtle: 'shadow-sm',
  medium: 'shadow-md',
  large: 'shadow-lg',
  gold: 'shadow-gold-sm',
  goldMedium: 'shadow-gold-md',
}

// Focus ring styles for accessibility
export const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus-visible:ring-offset-2'

// Common transition styles
export const transitions = {
  default: 'transition-all duration-300 ease-out',
  fast: 'transition-all duration-200 ease-out',
  slow: 'transition-all duration-500 ease-out',
  spring: 'transition-all duration-500 cubic-bezier(0.68, -0.55, 0.265, 1.55)',
}

// Grid layout helpers
export const gridVariants = {
  '2-col': 'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8',
  '3-col': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
  '4-col': 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8',
  services: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
  testimonials: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
}

// Form input styles
export const inputVariants = {
  default: 'w-full px-4 py-3 border border-neutral-200 rounded-lg focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/10 transition-colors',
  error: 'w-full px-4 py-3 border border-error rounded-lg focus:border-error focus:ring-2 focus:ring-error/10 transition-colors',
}

// Icon size variants
export const iconSizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4', 
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10',
}