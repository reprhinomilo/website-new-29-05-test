"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MobileMenu from "./mobile-menu";
import { Nav } from "./nav";
import { GENERAL } from '@/constants';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#031228] text-white">
      <div className=" max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-lg font-bold uppercase tracking-wider font-sans leading-[135%] text-center">
          <Link href="/">{GENERAL.name}</Link>
        </div>
        {/* Desktop Navigation */}
        <Nav />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </header>
  );
}
