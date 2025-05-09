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

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.id);
  
  if (!product) {
    return {
      title: "Product Not Found | HMS Machinery",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | HMS Machinery and Spares`,
    description: product.description,
    keywords: `${product.name}, construction equipment, HMS machinery, ${product.category}`,
    openGraph: {
      title: `${product.name} | HMS Machinery and Spares`,
      description: product.description,
      images: [product.images[0]],
    }
  }
}
