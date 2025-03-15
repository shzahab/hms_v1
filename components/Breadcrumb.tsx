
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="flex items-center space-x-2 text-sm font-medium text-gray-500 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 mb-6 w-full sm:w-auto">
      <Link 
        href="/" 
        className="hover:text-blue-600 transition-colors flex items-center"
      >
        Home
      </Link>
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;
        const formattedSegment = segment === "product" 
          ? "Products"
          : decodeURIComponent(segment)
              .replace(/-/g, ' ')
              .replace(/(^\w|\s\w)/g, m => m.toUpperCase());

        return (
          <div key={href} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            {isLast ? (
              <span className="text-gray-900 font-semibold">
                {formattedSegment}
              </span>
            ) : (
              <Link 
                href={href}
                className="hover:text-blue-600 transition-colors"
              >
                {formattedSegment}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
