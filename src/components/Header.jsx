// components/Navbar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">ShopLogo</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/shop" className="text-white hover:text-gray-300">
            Shop
          </Link>
          <Link href="/cart" className="text-white hover:text-gray-300">
            Cart
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18l1 9H4L3 3zm1 10h16a2 2 0 002-2v-2H3v2a2 2 0 002 2zm16 4H5a2 2 0 002 2h10a2 2 0 002-2z"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black align-bottom space-y-4 p-4">
          <Link href="/" className="block text-white">
            Home
          </Link>
          <Link href="/shop" className="block text-white">
            Shop
          </Link>
          <Link href="/cart" className="block text-white">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}
