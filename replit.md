# Replit.md

## Overview

This is a modern full-stack web application built as a professional portfolio website for Lalita Chopra. The project follows a modular architecture with a React frontend using TypeScript, a Node.js/Express backend, and PostgreSQL database integration through Drizzle ORM. The application showcases her work as a founder, community builder, and tech & ML strategist with sections for home, about, portfolio, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion for smooth transitions and scroll-based animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot module replacement with Vite integration

### Database Design
- **Primary Database**: PostgreSQL (configured via Neon serverless)
- **Schema Management**: Drizzle migrations in `./migrations` directory
- **Schema Definition**: Centralized in `shared/schema.ts` with Zod validation
- **Current Tables**: Users table with id, username, and password fields

## Key Components

### Frontend Components
1. **Layout Components**
   - `Sidebar`: Fixed navigation with Lalita's profile image and smooth scrolling, LinkedIn/Instagram links
   - `HeroSection`: Full-screen landing with professional photo as background
   - `AboutSection`: Personal information showcasing founder and strategist background
   - `PortfolioSection`: Project showcase featuring tech, strategy, and community building work
   - `ContactSection`: Simple "Get in touch" button linking to email

2. **UI Library**
   - Complete shadcn/ui component suite (buttons, cards, forms, dialogs, etc.)
   - Custom hooks for mobile detection and scroll animations
   - Toast notifications for user feedback
   - Form handling with React Hook Form and Zod validation

3. **Styling System**
   - CSS custom properties for theme management using brand colors #faf8ef, #222222, #475c55
   - Light/dark mode support
   - Responsive design with mobile-first approach
   - Professional color palette with cream background, sage green, and accent blue

### Backend Components
1. **Storage Layer**
   - Abstract `IStorage` interface for database operations
   - `MemStorage` implementation for development/testing
   - Database operations: user creation, retrieval by ID and username
   - Future-ready for PostgreSQL production implementation

2. **API Structure**
   - RESTful API design with `/api` prefix
   - Express middleware for JSON parsing and URL encoding
   - Error handling middleware with proper HTTP status codes
   - Request logging with response time tracking

3. **Development Tools**
   - Vite integration for frontend serving in development
   - Hot module replacement for rapid development
   - TypeScript compilation with path aliases
   - Automated server restart with tsx

## Data Flow

### Frontend Data Flow
1. **Navigation**: Smooth scroll-based navigation between portfolio sections
2. **Form Handling**: Contact form with validation, submission, and toast feedback
3. **Animation Triggers**: Intersection Observer API for scroll-based animations
4. **State Management**: React Query for API calls and server state caching

### Backend Data Flow
1. **Request Processing**: Express middleware chain for parsing and logging
2. **Storage Operations**: Abstract storage interface with pluggable implementations
3. **Error Handling**: Centralized error middleware with JSON responses
4. **Session Management**: PostgreSQL-backed sessions for user authentication

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18 with TypeScript, Wouter routing, TanStack Query
- **UI Framework**: Radix UI primitives, shadcn/ui components, Tailwind CSS
- **Backend**: Express.js, Drizzle ORM, Neon PostgreSQL driver
- **Development**: Vite, tsx for TypeScript execution, esbuild for production builds
- **Animation**: Framer Motion for smooth transitions and scroll effects

### Database & Storage
- **Database**: Neon PostgreSQL serverless (via `@neondatabase/serverless`)
- **ORM**: Drizzle ORM with PostgreSQL dialect and Zod schema validation
- **Sessions**: connect-pg-simple for PostgreSQL session storage

### Styling & UI
- **CSS Framework**: Tailwind CSS with PostCSS processing
- **Component Library**: Complete shadcn/ui component collection
- **Icons**: Font Awesome for consistent iconography
- **Fonts**: Google Fonts (Poppins, Open Sans) for typography

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public` directory
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `npm run db:push`

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend with HMR
- **Type Checking**: `npm run check` validates TypeScript across entire project
- **Database Management**: Drizzle Kit for schema management and migrations

### Production Deployment
- **Server Start**: `npm start` runs the production-built Express server
- **Static Assets**: Express serves built frontend from `dist/public`
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Session Storage**: PostgreSQL-backed sessions for scalability

### Environment Configuration
- **Database URL**: Required `DATABASE_URL` environment variable for PostgreSQL connection
- **Node Environment**: `NODE_ENV` for development/production mode switching
- **Replit Integration**: Special handling for Replit environment detection and cartographer plugin