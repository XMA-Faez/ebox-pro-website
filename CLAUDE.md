# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for 3PL (Third-Party Logistics) company - Ebox Pro. It's a B2B corporate website with bold, distinctive design focusing on warehousing, order fulfillment, transportation management, and value-added logistics services.

## Development Commands

```bash
# Development server with Turbopack
bun run dev

# Production build
bun run build

# Start production server
bun run start

# Run ESLint
bun run lint
```

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **TypeScript**: Strict mode enabled

### Key Directories
- `/app` - Next.js app router pages and layouts
- `/components` - React components (Header, Hero, Services, Footer, etc.)
- `/lib` - Utility functions and animation helpers
- `/docs` - Project documentation including design system, component architecture, and implementation status

### Path Aliases
- `@/*` maps to root directory (configured in tsconfig.json)

## Important Project Guidelines

### Documentation First Approach
Before making any changes, consult the `/docs` directory:
- `project-overview.md` - Business requirements and objectives
- `design-system.md` - Colors, typography, spacing, animations
- `component-architecture.md` - Component structure and patterns
- `implementation-status.md` - Current progress tracking

After implementing changes, update relevant documentation.

### Design System
- **Primary Color**: Deep Navy Blue (#1E3A8A)
- **Typography**: Inter font family
- **Animations**: Use Framer Motion with defined timing functions
- **Spacing**: Follow the 4px grid system defined in design-system.md
- **Components**: Follow glass morphism and gradient patterns for premium feel

### Component Patterns
- Use TypeScript strict mode - all props must be typed
- Implement animations using Framer Motion helpers in `/lib/animations.ts`
- Follow existing component structure patterns
- Use `clsx` with `tailwind-merge` for conditional classes via `/lib/utils.ts`

### Form Handling
- Use React Hook Form for all forms
- Implement Zod schemas for validation
- Include loading states and error handling
- Add success animations on form submission

### Performance Considerations
- Use Next.js Image component for all images
- Implement lazy loading for heavy components
- Prefer CSS animations over JavaScript where possible
- Use Turbopack in development for faster builds

## Code Style Conventions

- Use functional components with TypeScript
- Prefer named exports for components
- Keep components focused and single-purpose
- Place reusable logic in custom hooks
- Follow existing file naming patterns (PascalCase for components)
- No unnecessary comments unless explaining complex logic
- dont' use whilehover and whiletap. Always use css for styling hover animation not the framer motion