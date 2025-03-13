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