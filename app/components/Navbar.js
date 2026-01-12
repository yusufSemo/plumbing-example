// app/components/Navbar.js

"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "../config/siteConfig";

const services = [
  { name: "Emergency Plumbing", href: "/services/emergency-plumbing", icon: "" },
  { name: "Leak Detection & Repair", href: "/services/leak-detection-repair", icon: "" },
  { name: "Drain Cleaning", href: "/services/drain-cleaning", icon: "" },
  { name: "Water Heater Services", href: "/services/water-heater-services", icon: "" },
  { name: "Sewer Line Services", href: "/services/sewer-line-services", icon: "" },
  { name: "Toilet Repair & Installation", href: "/services/toilet-repair-installation", icon: "" },
  { name: "Faucet & Fixture Services", href: "/services/faucet-fixture-services", icon: "" },
  { name: "Garbage Disposal", href: "/services/garbage-disposal-services", icon: "" },
  { name: "Water Line Repair", href: "/services/water-line-repair", icon: "" },
  { name: "Gas Line Services", href: "/services/gas-line-services", icon: "" },
  { name: "Bathroom Plumbing", href: "/services/bathroom-plumbing", icon: "" },
  { name: "Kitchen Plumbing", href: "/services/kitchen-plumbing", icon: "" },
  { name: "Pipe Repair & Replacement", href: "/services/pipe-repair-replacement", icon: "" },
  { name: "Water Filtration", href: "/services/water-filtration", icon: "" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { header, business } = siteConfig;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightBackground = useMemo(() => {
    if (typeof window === "undefined") return false;

    const parseRgb = (rgbString) => {
      const match = rgbString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (!match) return null;
      return {
        r: Number(match[1]),
        g: Number(match[2]),
        b: Number(match[3]),
      };
    };

    const getBackgroundRgb = (el) => {
      if (!el) return null;
      const color = getComputedStyle(el).backgroundColor;
      if (!color || color === "transparent" || color === "rgba(0, 0, 0, 0)") {
        return null;
      }
      return parseRgb(color);
    };

    const rgb =
      getBackgroundRgb(document.body) || getBackgroundRgb(document.documentElement);

    if (!rgb) return false;
    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    return luminance > 0.7;
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md py-3" : "py-4"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/30">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
              </svg>
            </div>
            <span
              className={`text-2xl font-bold tracking-tight ${
                isHome ? "text-white" : scrolled ? "text-white" : isLightBackground ? "text-slate-900" : "text-white"
              }`}
            >
              {business.name}
            </span>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 text-base font-medium transition-all duration-300 ${
                  isHome
                    ? "text-white/90 hover:text-white"
                    : scrolled
                    ? "text-white/90 hover:text-white"
                    : isLightBackground
                      ? "text-slate-700 hover:text-slate-900"
                      : "text-white/90 hover:text-white"
                }`}
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45"></div>
                  
                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-slate-900">Our Services</h3>
                      <Link 
                        href="/services" 
                        className="text-sm text-sky-500 hover:text-sky-600 font-medium"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All →
                      </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="text-xl">{service.icon}</span>
                          <span className="text-sm font-medium text-slate-700 group-hover:text-sky-600 transition-colors">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <Link
                        href="/quote"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all"
                        onClick={() => setServicesOpen(false)}
                      >
                        Get a Free Quote
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {header.links.filter(link => link.label !== "Services").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-all duration-300 ${
                  isHome
                    ? "text-white/90 hover:text-white"
                    : scrolled
                    ? "text-white/90 hover:text-white"
                    : isLightBackground
                      ? "text-slate-700 hover:text-slate-900"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={header.cta.href}
              className={`flex items-center gap-2 text-base font-semibold ${
                isHome ? "text-white" : scrolled ? "text-white" : isLightBackground ? "text-slate-900" : "text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {business.phone}
            </a>

            <Link
              href="/quote"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:bg-sky-600 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
              isHome
                ? "text-white hover:bg-white/10"
                : scrolled
                ? "text-white hover:bg-white/10"
                : isLightBackground
                  ? "text-slate-900 hover:bg-black/10"
                  : "text-white hover:bg-white/10"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {open && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-80 max-w-[85vw] h-full p-6 shadow-2xl relative ml-auto overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/30">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
                  </svg>
                </div>
                <span className="text-xl font-bold">{business.name}</span>
              </div>

              <nav className="flex flex-col gap-1">
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-lg font-medium hover:bg-slate-100 transition-colors"
                  >
                    Services
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link
                        href="/services"
                        className="flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium text-sky-600 hover:bg-sky-50 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        View All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-2 py-2 px-4 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          <span>{service.icon}</span>
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {header.links.filter(link => link.label !== 'Services').map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-3 px-4 rounded-xl text-lg font-medium hover:bg-slate-100 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <a
                href={header.cta.href}
                className="flex items-center gap-3 mt-6 py-3 px-4 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">{business.phone}</span>
              </a>

              <Link
                href="/quote"
                className="flex items-center justify-center w-full mt-6 px-5 py-3 rounded-xl font-semibold bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:bg-sky-600 transition-all"
                onClick={() => setOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
