import { Metadata } from "next";
import { notFound } from "next/navigation";
import productsData from "@/app/data/products.json";
import ProductClient from "./product-client";

// Helper function to create URL-friendly slugs
function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function generateStaticParams() {
  return productsData.products.map((product) => ({
    id: createSlug(product.name),
  }));
}

function getProductBySlug(slug: string) {
  return productsData.products.find((p) => createSlug(p.name) === slug);
}

function getRandomProducts(count: number, excludeId: number) {
  const filteredProducts = productsData.products.filter(
    (p) => p.id !== excludeId,
  );
  const shuffled = [...filteredProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function ProductPage({ params }: { params: Promise<any> & { id: string } }) {
  const product = getProductBySlug(params.id);

  if (!product) {
    notFound();
  }

  const otherProducts = getRandomProducts(4, product.id);

  return <ProductClient product={product} otherProducts={otherProducts} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<any> & { id: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.id);

  if (!product) {
    return {
      title: "Product Not Found | HMS Machinery",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | HMS Machinery and Spares`,
    description: product.shortDescription,
    keywords: `${product.name}, construction equipment, HMS machinery, ${product.category}`,
    openGraph: {
      title: `${product.name} | HMS Machinery and Spares`,
      description: product.shortDescription,
      images: [product.mainImage],
    },
  };
}