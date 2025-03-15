import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMS Bar Bending Machine: Precision, Efficiency & Reliability",
  description: "Precision bar bending machine by Hutaib Machinery and Spares. Designed for high-performance construction with digital controls, dual modes, and low maintenance."
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMS Bar Bending Machine | Heavy Duty Construction Equipment",
  description: "Professional-grade HMS Bar Bending Machine with digital controls, dual operation modes, and high precision. Perfect for construction and industrial applications.",
  openGraph: {
    title: "HMS Bar Bending Machine | Heavy Duty Construction Equipment",
    description: "Professional-grade HMS Bar Bending Machine with digital controls, dual operation modes, and high precision. Perfect for construction and industrial applications.",
    images: ["/images/products/bar-bending-machine-1.webp"],
  },
  keywords: "bar bending machine, construction equipment, HMS machinery, rebar bender, steel bar bending",
  robots: "index, follow",
  alternates: {
    canonical: "https://hutaib.com/product/bar-bending-machine"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
