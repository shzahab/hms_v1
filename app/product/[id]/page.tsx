// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import productsData from "@/app/data/products.json";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import Breadcrumbs from "@/components/Breadcrumb";
// import { ShimmerButton } from "@/components/magicui/shimmer-button";
// import { GrnShimmerButton } from "@/components/magicui/grnshimmer-button";

// export async function generateStaticParams() {
//   return productsData.products.map((product) => ({
//     id: product.id.toString(),
//   }));
// }

// function getProductById(id: number) {
//   return productsData.products.find((p) => p.id === id);
// }

// function getRandomProducts(count: number, excludeId: number) {
//   const filteredProducts = productsData.products.filter(
//     (p: { id: number }) => p.id !== excludeId
//   );
//   const shuffled = [...filteredProducts].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// }

// export default function ProductPage({ params }: { params: { id: string } }) {
//   const productId = parseInt(params.id, 10);
//   const product = getProductById(productId);

//   if (!product) {
//     notFound();
//   }

//   const safeProduct = product as NonNullable<typeof product>;
//   const otherProducts = getRandomProducts(4, productId);

//   return (
//     <div className="min-h-screen bg-background text-foreground font-sans">
//       <header>
//         <Header />
//       </header>
//       <main className="mt-24 sm:mt-32 md:mt-40 pb-16">
//         <div className="container mx-auto px-5">
//           <Breadcrumbs />
//         </div>
//         <div className="container mx-auto px-4">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">
//             {safeProduct.name}
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Left Column: Product Images */}
//             <div>
//               <Image
//                 src={safeProduct.mainImage}
//                 alt={safeProduct.name}
//                 width={600}
//                 height={600}
//                 className="w-full rounded-lg shadow-lg"
//               />
//               {/* Gallery */}
//               <h2 className="text-2xl font-semibold mt-6">Product Gallery</h2>
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
//                 {safeProduct.gallery.map((image, index) => (
//                   <Image
//                     key={index}
//                     src={image}
//                     alt={`${safeProduct.name} - Image ${index + 1}`}
//                     width={300}
//                     height={300}
//                     className="w-full rounded-lg shadow"
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Right Column: Product Details */}
//             <div>
//               {/* Product Price */}
//               <p className="text-2xl font-semibold text-green-600 mb-2">
//                 Starting from {safeProduct.price}
//               </p>

//               {/* Product Full Description */}
//               <p className="text-gray-700 mb-4">
//                 {safeProduct.fullDescription}
//               </p>

//               {/* Specifications Table */}
//               <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//                 <h2 className="text-2xl font-semibold mb-4">
//                   Product Specifications
//                 </h2>
//                 <table className="w-full border border-gray-300 bg-white rounded-lg shadow">
//                   <tbody>
//                     {(safeProduct.specifications || []).map((spec, index) => (
//                       <tr
//                         key={index}
//                         className="border-b border-gray-300 text-sm sm:text-base"
//                       >
//                         <td className="p-3 font-semibold text-gray-700 border-r border-gray-300">
//                           {spec.label}
//                         </td>
//                         <td className="p-3 text-gray-600">{spec.value}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Brochure Download and Request Quote Buttons */}
//               <div className="mt-6 flex justify-center gap-4">
//                   {" "}
//                   <a
//                     href={safeProduct.brochureUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-green-600 text-white px-6 py-3 rounded-[30px] font-sembold shadow hover:bg-green-700 transition-all"
//                   >
//                     📄 Download Brochure
//                   </a>

//                 <ShimmerButton className="shadow-2xl">
//                   <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
//                     Request a Quote
//                   </span>
//                 </ShimmerButton>
//               </div>
//             </div>
//           </div>

//           {/* Need More Information Section */}
//           <div className="bg-muted rounded-lg p-8 mt-12">
//             <h2 className="text-2xl font-semibold text-center">
//               Need More Information?
//             </h2>
//             <p className="text-center mt-2">
//               Our team is ready to assist you with any questions about our{" "}
//               {safeProduct.name}.
//             </p>
//             <div className="flex justify-center mt-6">
//               <Link href="/contact">
//                 <ShimmerButton className="shadow-2xl">
//                   <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
//                     Contact Us
//                   </span>
//                 </ShimmerButton>
//               </Link>
//             </div>
//           </div>

//           {/* Other Products Section */}
//           <h2 className="text-2xl font-semibold mt-12">Other Products</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//             {otherProducts.map((product) => (
//               <div key={product.id} className="group">
//                 <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
//                   <Image
//                     src={product.mainImage}
//                     alt={product.name}
//                     width={300}
//                     height={300}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-semibold mb-2">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm sm:text-base text-muted-foreground mb-2">
//                   {product.shortDescription}
//                 </p>
//                 <Link href={`/product/${product.id}`}>
//                   <Button
//                     variant="link"
//                     className="p-0 h-auto text-sm sm:text-base font-medium text-primary group-hover:underline"
//                   >
//                     Learn More
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <footer className="bg-muted py-12">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// export const metadata: Metadata = {
//   title: "Hutaib Machinery and Spares | Industrial Equipment Specialists",
//   description:
//     "Hutaib Machinery and Spares offers high-quality industrial machinery and spare parts. With over 20 years of experience, we provide efficient solutions for various industries.",
//   keywords:
//     "industrial machinery, spare parts, Hutaib, manufacturing equipment",
//   openGraph: {
//     title: "Hutaib Machinery and Spares | Industrial Equipment Specialists",
//     description:
//       "High-quality industrial machinery and spare parts for efficient manufacturing solutions.",
//     images: [
//       {
//         url: "https://example.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Hutaib Machinery and Spares",
//       },
//     ],
//   },
// };

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
    id: createSlug(product.name), // Generate ID param from product name
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

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductBySlug(params.id); // Use the slug to find product

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
import { Metadata } from "next";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Breadcrumbs from "@/components/Breadcrumb";
import productsData from "@/app/data/products.json";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("description");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const product = productsData.products.find(
    (p) => createSlug(p.name) === params.id
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "benefits", label: "Benefits" },
    { id: "applications", label: "Applications" },
  ];

  // Get random products excluding the current one
  const otherProducts = productsData.products
    .filter(p => p.name !== product.name)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header>
        <Header />
      </header>
      <main className="mt-20 sm:mt-32 md:mt-40 pb-16">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Product Title Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 font-medium">{product.shortDescription}</p>
          </div>

          {/* Product Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={product.mainImage}
                  alt={product.name}
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600">{product.fullDescription}</p>
              </div>
              <div className="space-y-4">
                <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                <div className="space-x-4">
                  <a
                    href={product.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    📄 Download Brochure
                  </a>
                  <ShimmerButton 
                    className="shadow-2xl"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/919740035153', '_blank')
                      }
                    }}
                  >
                    <span className="text-sm font-medium tracking-tight text-white lg:text-lg">
                      Get Quote
                    </span>
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mb-12">
            <div className="md:hidden border-b border-gray-200">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-between w-full px-4 py-4 text-left bg-gradient-to-r from-blue-50 to-white border-b-2 border-blue-100 hover:bg-blue-50 transition-all duration-300"
              >
                <span className="text-base font-semibold text-blue-900 flex items-center">
                  <span className="mr-2">📑</span>
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-blue-500 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-180' : 'animate-bounce'}`}
                />
              </button>
              {isMenuOpen && (
                <div className="border-b border-gray-200">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left ${
                        activeTab === tab.id
                          ? "bg-blue-50 text-blue-800"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden md:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                        ${
                          activeTab === tab.id
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="py-6">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <p className="text-gray-600">{product.fullDescription}</p>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {product.specifications.map((spec, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {spec.label}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "benefits" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                    >
                      <p className="text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "applications" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.gallery.slice(0, 4).map((image, index) => (
                    <div
                      key={index}
                      className="bg-white shadow rounded-lg overflow-hidden"
                    >
                      <div className="aspect-video relative">
                        <Image
                          src={image}
                          alt={`${product.name} application ${index + 1}`}
                          className="object-cover"
                          fill
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${createSlug(relatedProduct.name)}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={relatedProduct.mainImage}
                        alt={relatedProduct.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        fill
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {relatedProduct.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
