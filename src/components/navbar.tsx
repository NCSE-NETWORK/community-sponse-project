"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo/logo_ncse_network.svg"
              alt="NCSE Network Logo - 賦能學生社群，共創技術未來"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              服務項目
            </a>
            <a
              href="#sponsors"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              贊助商
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              贊助專案
            </a>
            <a
              href="#call-for-sponsor"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              招募贊助
            </a>
            <a
              href="#communities"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              合作社群
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              聯絡我們
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                服務項目
              </a>
              <a
                href="#sponsors"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                贊助商
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                贊助專案
              </a>
              <a
                href="#call-for-sponsor"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                招募贊助
              </a>
              <a
                href="#communities"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                合作社群
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-center"
                onClick={closeMenu}
              >
                聯絡我們
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
