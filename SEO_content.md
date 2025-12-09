# **Elaborate Prompt: Create City-Specific SEO Landing Pages**

## **Objective:**
Create local SEO-optimized landing pages for [PRODUCT_NAME] targeting specific cities to rank for "PRODUCT_NAME in CITY_NAME" searches while maintaining content quality and user experience.

## **Technical Implementation:**

### **1. Dynamic Route Structure**
```
/src/app/product/[product-slug]/[city]/page.tsx
```

### **2. Required Components:**
- **City Array**: List all target cities (URL-friendly slugs)
- **City Names Mapping**: Object mapping slugs to display names  
- **generateStaticParams()**: Pre-render all city combinations
- **generateMetadata()**: Dynamic SEO meta tags per city
- **notFound()**: Handle invalid city requests

### **3. City-Specific Optimizations:**

**Meta Tags:**
- Title: `"PRODUCT_NAME in CITY_NAME - Main Benefit | Brand"`
- Description: Include city name 2-3 times naturally
- Keywords: `"product_name city_name, main_keyword city_name"`

**Content Modifications (Keep 95% Same):**
- H1: `"PRODUCT_NAME in CITY_NAME"`
- Intro paragraph: Mention city 2-3 times
- Local delivery section with city benefits
- CTA buttons: `"Call for Quote in CITY_NAME"`
- Applications: Reference city-specific use cases

### **4. Cross-Linking Strategy:**

**Main Product Page:**
```jsx
<section>
  <h2>PRODUCT_NAME Available in [STATE/REGION] Cities</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {cities.map(city => (
      <Link href={`/product/PRODUCT_SLUG/${city}`}>
        <span>PRODUCT_KEYWORD in {cityName}</span>
      </Link>
    ))}
  </div>
</section>
```

**City Pages:**
```jsx
<section>
  <h2>PRODUCT_NAME Available in Other [REGION] Cities</h2>
  {cities.filter(city => city !== currentCity).map(city => (
    <Link href={`/product/PRODUCT_SLUG/${city}`}>
      PRODUCT_KEYWORD in {cityName}
    </Link>
  ))}
</section>
```

### **5. SEO Best Practices:**

**Anchor Text Rules:**
- ❌ Generic: "Mumbai", "Delhi"  
- ✅ Keyword-rich: "Bar Bending in Mumbai", "Concrete Mixer in Delhi"

**Content Guidelines:**
- Maintain original technical specifications
- Keep safety instructions identical
- Add local delivery/support mentions
- Include regional service areas
- Maintain keyword density 2-3%

**URL Structure:**
- `/product/bar-bending-machine/mumbai`
- `/product/concrete-mixer/bangalore`
- Clean, descriptive, hyphens for spaces

### **6. Implementation Template:**

```typescript
// [city]/page.tsx
const cities = ['city1', 'city2', 'city3'] // URL slugs
const cityNames = { 'city1': 'City 1', 'city2': 'City 2' }

export async function generateStaticParams() {
  return cities.map((city) => ({ city }))
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const cityName = cityNames[params.city]
  return {
    title: `PRODUCT_NAME in ${cityName} - KEY_BENEFIT | BRAND`,
    description: `Professional PRODUCT_NAME available in ${cityName}, STATE. KEY_BENEFITS with UNIQUE_FEATURES. Best PRODUCT_NAME prices in ${cityName}. Call PHONE`,
    keywords: `product_name ${cityName.toLowerCase()}, main_keyword ${cityName.toLowerCase()}, related_keywords`
  }
}

export default function CityProductPage({ params }) {
  const cityName = cityNames[params.city]
  if (!cityName) notFound()
  
  return (
    <div>
      <h1>PRODUCT_NAME in {cityName}</h1>
      <p>High-quality PRODUCT_NAME available in {cityName}, STATE...</p>
      
      {/* Local delivery section */}
      <section className="bg-green-50">
        <h2>PRODUCT_NAME Delivery in {cityName}</h2>
        <div className="grid grid-cols-3">
          <div>Fast Delivery to {cityName}</div>
          <div>Local Support in {cityName}</div>
          <div>Best Prices for {cityName}</div>
        </div>
      </section>
      
      {/* Original content with city mentions */}
      {/* Cross-links to other cities */}
    </div>
  )
}
```

### **7. Variables to Customize:**

**Replace These Placeholders:**
- `PRODUCT_NAME`: "Bar Bending Machine", "Concrete Mixer"
- `PRODUCT_SLUG`: "bar-bending-machine", "concrete-mixer"  
- `PRODUCT_KEYWORD`: "Bar Bending", "Concrete Mixing"
- `KEY_BENEFIT`: "Professional Rebar Bending Equipment"
- `UNIQUE_FEATURES`: "High precision, safety features"
- `STATE/REGION`: "Karnataka", "Tamil Nadu"
- `BRAND`: "HMS Machinery"
- `PHONE`: "+91 9886474441"

### **8. Content Strategy:**

**Keep Identical:**
- Technical specifications
- Safety instructions  
- Product features/benefits
- Applications (general)
- Why choose company section

**Localize These:**
- Page title and H1
- Meta description
- Intro paragraph (2-3 city mentions)
- Delivery/support section
- CTA button text
- Applications (add city context)
- Cross-links section

### **9. Quality Checklist:**

**Technical:**
- [ ] All cities pre-render correctly
- [ ] 404 handling for invalid cities  
- [ ] Canonical URLs set properly
- [ ] Mobile responsive design

**SEO:**
- [ ] Unique title/description per city
- [ ] Natural keyword integration (not stuffed)
- [ ] Descriptive anchor text for internal links
- [ ] Local relevance signals included

**User Experience:**
- [ ] Content adds genuine local value
- [ ] Fast page load times
- [ ] Clear navigation between cities
- [ ] Consistent branding/design

### **10. Scaling Instructions:**

**For New Products:**
1. Copy city page template
2. Replace all product variables
3. Update specifications section
4. Modify product-specific content
5. Add to main product page

**For New Cities:**
1. Add to cities array
2. Add to cityNames mapping
3. No other changes needed (dynamic)

**For New Regions:**
1. Create separate city arrays per region
2. Group cities logically
3. Update cross-linking sections

## **Expected Results:**
- 15 cities × 1 product = 15 new SEO landing pages
- Target keywords: "PRODUCT_NAME in CITY_NAME"
- Improved local search rankings
- Better user experience for location-specific searches
- Increased organic traffic from long-tail local queries

**Reuse this prompt by simply replacing the variables with your specific product and target cities.**

---

## **Real Example Implementation (Bar Bending Machine):**

### **Cities Array:**
```typescript
const cities = [
  'bengaluru', 'mysuru', 'hubballi-dharwad', 'mangaluru', 'belagavi',
  'ballari', 'kalaburagi', 'tumakuru', 'shivamogga', 'davanagere',
  'vijayapura', 'raichur', 'hassan', 'chitradurga', 'udupi'
]

const cityNames: { [key: string]: string } = {
  'bengaluru': 'Bengaluru',
  'mysuru': 'Mysuru', 
  'hubballi-dharwad': 'Hubballi-Dharwad',
  'mangaluru': 'Mangaluru',
  'belagavi': 'Belagavi',
  'ballari': 'Ballari',
  'kalaburagi': 'Kalaburagi',
  'tumakuru': 'Tumakuru',
  'shivamogga': 'Shivamogga',
  'davanagere': 'Davanagere',
  'vijayapura': 'Vijayapura',
  'raichur': 'Raichur',
  'hassan': 'Hassan',
  'chitradurga': 'Chitradurga',
  'udupi': 'Udupi'
}
```

### **Sample Meta Tags:**
```typescript
title: `Bar Bending Machine in ${cityName} - Professional Rebar Bending Equipment | HMS Machinery`
description: `Professional Bar Bending Machine available in ${cityName}, Karnataka. High precision rebar bending with safety features. Best Bar Bending Machine prices in ${cityName}. Call +91 9886474441`
keywords: `bar bending machine ${cityName.toLowerCase()}, rebar bending machine ${cityName.toLowerCase()}, construction equipment ${cityName.toLowerCase()}, steel bar bender ${cityName.toLowerCase()}, bar bending machine price ${cityName.toLowerCase()}`
```

### **Sample Content Modifications:**
```jsx
<h1>Bar Bending Machine in {cityName}</h1>
<p>High-precision Bar Bending Machine available in {cityName}, Karnataka. 
Our Bar Bending Machine delivers reliable performance for all rebar bending requirements 
with fast delivery across {cityName}.</p>

<section className="bg-green-50">
  <h2>Bar Bending Machine Delivery in {cityName}</h2>
  <div className="grid grid-cols-3">
    <div>Fast Delivery to {cityName}</div>
    <div>Local Support in {cityName}</div>
    <div>Best Prices for {cityName}</div>
  </div>
</section>
```

### **URL Examples:**
- `/product/bar-bending-machine/bengaluru`
- `/product/bar-bending-machine/mysuru`
- `/product/bar-bending-machine/hubballi-dharwad`

### **Cross-Link Examples:**
```jsx
<Link href="/product/bar-bending-machine/bengaluru">
  <span>Bar Bending in Bengaluru</span>
</Link>
<Link href="/product/bar-bending-machine/mysuru">
  <span>Bar Bending in Mysuru</span>
</Link>
```
