"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Package } from "lucide-react";
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

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const categories = [...categoriesData.categories].sort(
    (a, b) => a.order - b.order
  ) as Category[];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Products
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          <Link
            href="/product"
            className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            All Products
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-primary">
                {iconMap[category.icon] || <Package className="h-4 w-4" />}
              </span>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {category.name}
                </div>
                <div className="text-xs text-gray-500">
                  {category.shortDescription}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

