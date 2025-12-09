"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import CategoryDropdown from "./category-dropdown";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="md:fixed md:top-0 md:left-0 md:right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/logo.png"
                alt="Hutaib Machinery Logo"
                width={400}
                height={67}
                className="w-40 h-auto sm:w-48 md:w-56 lg:w-64"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <CategoryDropdown />
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info & Mobile Nav */}
          <div className="flex items-center gap-4">
            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+919886474441"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9886474441</span>
              </a>
              <a
                href="mailto:sales@hutaibmachinery.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">sales@hutaibmachinery.com</span>
              </a>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918074949635"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 transition-colors duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium hidden sm:inline">
                WhatsApp
              </span>
            </a>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
