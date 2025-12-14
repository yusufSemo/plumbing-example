"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../config/siteConfig";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { branding, header, business } = siteConfig;
  const { colors, navbar } = branding;

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`w-full sticky top-0 z-50 border-b border-white/20 ${
          navbar.blur ? "backdrop-blur-lg" : ""
        }`}
        style={{ backgroundColor: colors.dark }}
      >
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:py-4">

          {/* LOGO (centered on mobile) */}
          <Link
            href="/"
            className="
              flex flex-col items-center -mt-5
              absolute left-1/2 -translate-x-1/2
              md:static md:translate-x-0
            "
          >
            <Image
              src={branding.logo.src}
              alt={branding.logo.alt}
              width={84}
              height={84}
              className="object-contain"
              priority
            />

            <span
              className="-mt-4 mb-2 text-lg font-extrabold leading-none tracking-tight"
              style={{ color: colors.textOnDark }}
            >
              {business.name}
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6 text-sm font-medium items-center ml-auto">
            {header.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors"
                style={{ color: colors.textMuted }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.textOnDark)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.textMuted)
                }
              >
                {link.label}
              </a>
            ))}

            {/* CTA BUTTON */}
            <a
              href={header.cta.href}
              className="px-4 py-2 rounded-md font-semibold transition-all"
              style={{
                backgroundColor: colors.primary,
                color: colors.textOnDark,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-dark)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.primary;
              }}
            >
              {header.cta.label}
            </a>
          </div>

          {/* BURGER (mobile) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden ml-auto text-3xl font-bold"
            style={{ color: colors.textOnDark }}
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
              {header.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
              <a href={header.cta.href} className="font-bold">
                {header.cta.label}
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
