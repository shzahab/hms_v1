# HMS Machinery Website

## Overview

HMS Machinery and Spares is a B2B e-commerce website for a construction equipment supplier based in Bengaluru, India. The site showcases industrial machinery products like bar bending machines, concrete mixers, road rollers, and other construction equipment. Built with Next.js 14 using static export for deployment, the site is heavily optimized for SEO to target the South Indian construction market.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 14** with App Router for page routing and React Server Components
- **Static Site Generation (SSG)** via `output: 'export'` configuration - all pages are pre-rendered at build time
- **TypeScript** for type safety across the codebase

### Styling System
- **Tailwind CSS** with custom configuration for design tokens
- **shadcn/ui** component library (New York style) providing pre-built accessible components
- CSS variables for theming with forced light mode (no dark mode support)

### Component Architecture
- Shared layout components: `Header`, `Footer` with responsive mobile navigation
- UI primitives in `/components/ui/` following shadcn patterns
- Product data stored as JSON files in `/app/data/` (products.json, categories.json)
- Dynamic product pages using `[slug]` routing pattern

### SEO Implementation
- Extensive metadata configuration per page with Open Graph tags
- JSON-LD structured data for products and categories
- Dynamic sitemap.ts and robots.ts generation
- City-specific landing pages strategy documented for local SEO

### Page Structure
- Homepage with product showcase and category grid
- Product listing page with category grouping
- Individual product detail pages with specifications, gallery, and buy buttons
- Category pages for product filtering
- Legal pages (privacy policy, terms, shipping, refunds)
- Contact page with form submission

### Static Export
The site builds to the `/out` directory as static HTML files, suitable for deployment on any static hosting provider. Images are unoptimized due to static export limitations.

## External Dependencies

### Analytics & Tracking
- **Google Analytics 4** (G-C33Y4WJML3) for traffic tracking
- **Google Tag Manager** (GTM-MRNVHKW4) for tag management
- **Ahrefs Analytics** for SEO monitoring

### Payment Processing
- **Razorpay** payment links for product purchases (external redirect)

### Form Handling
- **Google Apps Script** webhook for contact form submissions (no-cors POST requests)

### Maps
- **Google Maps Embed** on contact page for location display

### CDN/Storage
- **Vercel Blob Storage** for some image hosting (hebbkx1anhila5yf.public.blob.vercel-storage.com)

### No Database
The application uses static JSON files for product/category data. There is no database integration - all content is managed through JSON files and rebuilt at deploy time.