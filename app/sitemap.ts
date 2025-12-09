import { MetadataRoute } from 'next'
import productsData from './data/products.json'
import categoriesData from './data/categories.json'

interface Product {
  slug: string;
  name: string;
}

interface Category {
  slug: string;
  name: string;
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

  // Category pages
  const categoryRoutes = (categoriesData.categories as Category[]).map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Product pages - using slug directly from product data
  const productRoutes = (productsData.products as Product[]).map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...routes, ...categoryRoutes, ...productRoutes]
}
