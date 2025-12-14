"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="w-full sticky top-0 z-50 backdrop-blur-lg bg-white/30 border-b border-white/20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:py-4">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Images/VClogo.png"
              alt="VeroClicks Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <h1 className="text-xl font-bold">VeroClicks</h1>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6 text-sm font-medium items-center">
            <a href="/portfolio" className="hover:text-(--brand-dark) transition-colors">Portfolio</a>
            <a href="/pricing" className="hover:text-(--brand-dark) transition-colors">Pricing</a>
            <a href="/about" className="hover:text-(--brand-dark) transition-colors">About</a>
            <a href="/contact" className="hover:text-(--brand-dark) transition-colors">Contact</a>
            <a
              href="/booking"
              className="px-4 py-2 bg-(--brand) text-white rounded-md hover:bg-(--brand-dark) transition-all"
            >
              Book a Demo
            </a>
          </div>

          {/* BURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl font-bold"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-3/4 h-full p-6 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-3xl"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <nav className="mt-12 flex flex-col gap-6 text-xl font-medium">
                <a href="/">Home</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/pricing">Pricing</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/booking">Book a Demo</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
