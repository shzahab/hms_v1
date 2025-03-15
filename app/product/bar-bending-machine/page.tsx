"use client";

import { Metadata } from "next";
import ProductClient from "../[id]/product-client";
import productsData from "@/app/data/products.json";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumb";




const product = {
  id: 1,
  name: "HMS Bar Bending Machine",
  mainImage: "/images/products/bar-bending-machine-1.webp",
  gallery: [
    "/images/products/bar-bending-machine-1.webp",
    "/images/products/bar-bending-machine-2.webp",
    "/images/products/bar-bending-machine-3.webp"
  ]
};

const otherProducts = productsData.products
  .filter(p => p.id !== 1)
  .slice(0, 4);

export default function BarBendingMachinePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header>
        <Header />
      </header>
      <main className="mt-24 sm:mt-32 md:mt-40 pb-16">
        <div className="ml-[150px] md:ml-[50px] sm:ml-0 sm:flex sm:justify-center">
          <Breadcrumbs />
        </div>
        <ProductClient product={product} otherProducts={otherProducts} />
      </main>
      <footer className="bg-muted py-12">
        <Footer />
      </footer>
    </div>
  );
}