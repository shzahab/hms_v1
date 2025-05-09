
import { MetadataRoute } from 'next'
import productsData from './data/products.json'

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hutaibmachinery.com'
  
  // Base pages
  const routes = [
    '',
    '/contact',
    '/privacy-policy',
    '/terms-conditions',
    '/shipping-policy',
    '/cancellations-refunds',
    '/product'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Product pages
  const productRoutes = productsData.products.map((product) => ({
    url: `${baseUrl}/product/${createSlug(product.name)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...routes, ...productRoutes]
}
