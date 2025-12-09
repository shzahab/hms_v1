"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Package } from "lucide-react";
import categoriesData from "@/app/data/categories.json";

interface Category {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  icon: string;
  order: number;
}

const iconMap: { [key: string]: React.ReactNode } = {
  Package: <Package className="h-4 w-4" />,
};

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [...categoriesData.categories].sort(
    (a, b) => a.order - b.order
  ) as Category[];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-lg z-50">
          <nav className="container mx-auto px-4 py-4">
            <Link
              href="/"
              className="block py-3 text-sm font-medium text-gray-700 hover:text-primary border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <div className="border-b border-gray-100">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700 hover:text-primary"
              >
                Products
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCategoriesOpen && (
                <div className="pl-4 pb-3 space-y-1">
                  <Link
                    href="/product"
                    className="block py-2 text-sm text-gray-600 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    All Products
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-primary">
                        {iconMap[category.icon] || (
                          <Package className="h-3 w-3" />
                        )}
                      </span>
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block py-3 text-sm font-medium text-gray-700 hover:text-primary border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

