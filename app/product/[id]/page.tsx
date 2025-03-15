
import { Metadata } from "next";
import { notFound } from "next/navigation";
import productsData from "@/app/data/products.json";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductClient from "./product-client";

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
  const filteredProducts = productsData.products.filter((p) => p.id !== excludeId);
  const shuffled = [...filteredProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductBySlug(params.id);

  if (!product) {
    notFound();
  }

  const otherProducts = getRandomProducts(4, product.id);

  return <ProductClient product={product} otherProducts={otherProducts} />;
}

export const metadata: Metadata = {
  title: "Hutaib Machinery and Spares | Industrial Equipment Specialists",
  description:
    "Hutaib Machinery and Spares offers high-quality industrial machinery and spare parts.",
  keywords:
    "industrial machinery, spare parts, Hutaib, manufacturing equipment",
};
