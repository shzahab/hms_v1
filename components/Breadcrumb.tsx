"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="text-sm font-normal font-sans text-base text-gray-500 mb-4">
      <ol className="flex space-x-[3px]">
        <li>
          <Link href="/" className="text-primary ">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-[3px]">></span>
              {isLast ? (
                <span className="text-gray-700">
                  {segment === "product" ? "Product" : 
                   decodeURIComponent(segment).replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
                </span>
              ) : (
                <Link href={href} className="text-primary ">
                  {segment === "product" ? "Product" : 
                   decodeURIComponent(segment).replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
