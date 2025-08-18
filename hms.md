
# HMS Machinery and Spares - Website Documentation

## Overview
HMS (Hutaib Machinery and Spares) is a construction equipment supplier website built with Next.js 14, featuring a modern, responsive design optimized for SEO and user conversion.

## Sitemap Structure

### Primary Pages
- **Homepage** (`/`) - Main landing page with product showcase
- **Contact** (`/contact`) - Contact form and company information
- **Product Listing** (`/product`) - Overview of all products

### Legal Pages
- **Privacy Policy** (`/privacy-policy`)
- **Terms & Conditions** (`/terms-conditions`)
- **Shipping Policy** (`/shipping-policy`)
- **Cancellations & Refunds** (`/cancellations-refunds`)

### Product Pages
Dynamic product pages using slug-based routing:
- **Bar Bending Machine** (`/product/bar-bending-machine`) - Custom detailed page
- **Bar/Rebar Cutting Machine** (`/product/bar-rebar-cutting-machine`) - Custom detailed page
- **Dynamic Product Pages** (`/product/[slug]`) - Generated from products.json

#### Product Categories
1. **Bending & Cutting Equipment**
   - Bar/Rebar Bending Machine
   - Bar/Rebar Cutting Machine
   - CNC Bar Bender
   - Ring Making Machine
   - Scrap Straightening Machine

2. **Concrete Equipment**
   - Concrete Mixer
   - Concrete Cutting Machine
   - Concrete Vibrator

3. **Compaction Equipment**
   - Plate Compactors
   - Tamping Rammer
   - Road Rollers

4. **Surface Finishing**
   - Power Trowel
   - Floaters

5. **Material Handling**
   - Building Material Hoist

6. **Threading Equipment**
   - Threading Machine

## Information Architecture

### Navigation Structure
```
Header
├── Logo (Links to Home)
├── Contact Information
│   ├── Phone: +91 9886474441
│   ├── Email: sales@hutaibmachinery.com
│   └── WhatsApp: +91 9740035153
└── Navigation Links (in Footer)
    ├── Home
    ├── Contact
    ├── Privacy Policy
    ├── Cancellations and Refunds
    ├── Terms and Conditions
    └── Shipping Policy
```

### Content Hierarchy
1. **Homepage**
   - Hero section with company introduction
   - Product grid with categories
   - Call-to-action for custom solutions

2. **Product Pages**
   - Product hero with main image
   - Specifications table
   - Key features and benefits
   - Applications section
   - Customer testimonials
   - FAQ section
   - Related products
   - Purchase options (Buy Now button)

3. **Contact Page**
   - Contact form
   - Company address and details
   - Multiple contact methods

### Data Structure
- **products.json** - Central product database with:
  - Product metadata (name, description, price)
  - Image galleries
  - Specifications
  - Features and benefits
  - Payment links for Razorpay integration

## Design Style Guide

### Color Scheme
- **Primary Colors**: 
  - Blue accent (`text-blue-600`, `hover:text-blue-700`)
  - Red CTA buttons (`bg-red-600`, `hover:bg-red-700`)
  - Green WhatsApp button (`bg-green-500`, `hover:bg-green-600`)

- **Neutral Colors**:
  - Background (`bg-background`)
  - Muted backgrounds (`bg-muted`)
  - Card backgrounds (`bg-card`)
  - Text colors (`text-foreground`, `text-muted-foreground`)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Heading Hierarchy**:
  - H1: `text-4xl md:text-5xl font-bold` (Homepage hero)
  - H2: `text-3xl font-semibold` (Section headers)
  - H3: `text-2xl font-semibold` (Subsections)
  - Body: `text-sm`, `text-base`, `text-lg`

### Layout Patterns

#### Grid Systems
- **Product Grid**: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- **Responsive Containers**: `container mx-auto px-4`
- **Spacing**: Consistent use of padding and margins (`p-4`, `mb-6`, `space-y-4`)

#### Card Components
```css
.product-card {
  @apply bg-card rounded-lg shadow-md overflow-hidden 
         transition-all duration-300 hover:shadow-lg;
}
```

#### Button Styles
- **Primary CTA**: Red background with hover effects
- **Secondary**: Link-style buttons with arrows
- **WhatsApp**: Green branded button
- **Shimmer Button**: Animated call-to-action

### Component Architecture

#### Reusable Components
- **Header** - Fixed header with logo and contact info
- **Footer** - Company info and navigation links
- **BreadCrumb** - Navigation breadcrumbs
- **BuyNowButton** - Razorpay integration component
- **DelayedContactOverlay** - Timed contact prompt

#### Page-Specific Components
- **Product Pages**:
  - `specifications-table.tsx`
  - `benefits-section.tsx`
  - `applications-section.tsx`
  - `testimonials-section.tsx`
  - `faq-section.tsx`

### Responsive Design
- **Mobile-First Approach**: All layouts start with mobile design
- **Breakpoints**: 
  - `sm:` (640px+)
  - `md:` (768px+)
  - `lg:` (1024px+)
- **Flexible Images**: `aspect-square` containers with `object-cover`

### SEO Optimization

#### Meta Tags
- Comprehensive meta descriptions
- OpenGraph tags for social sharing
- Structured keywords for each product
- Canonical URLs for product pages

#### Technical SEO
- **Sitemap Generation**: Automated sitemap.ts
- **Google Analytics**: GA4 integration (G-C33Y4WJML3)
- **Google Tag Manager**: GTM-MRNVHKW4
- **Site Verification**: Google Search Console verified

### Performance Features
- **Image Optimization**: WebP format with Next.js Image component
- **Static Generation**: Pre-built product pages
- **Lazy Loading**: Built-in Next.js optimizations
- **CDN Ready**: Optimized for Replit deployment

### Conversion Optimization
- **Multiple Contact Methods**: Phone, email, WhatsApp
- **Buy Now Integration**: Direct Razorpay payment links
- **Trust Signals**: Customer testimonials and company history
- **Clear CTAs**: Prominent contact and purchase buttons
- **Mobile Optimization**: Touch-friendly interface

## Technical Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: Custom UI components with shadcn/ui patterns
- **Images**: Next.js Image optimization with WebP
- **Analytics**: Google Analytics 4 + Google Tag Manager
- **Payments**: Razorpay integration
- **Deployment**: Replit with static export capability

## Future Enhancements
- Product search and filtering
- Customer portal for order tracking
- Multi-language support
- Advanced product comparison tools
- Inventory management integration
