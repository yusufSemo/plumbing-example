// src/config/siteConfig.js
export const siteConfig = {
  seo: {
    title: "ABC Plumbing | Local Plumbing Services in North Richland Hills, TX",
    description:
      "ABC Plumbing provides honest, affordable plumbing services from a trusted local team in North Richland Hills, TX.",
  },

  business: {
    name: "ABC Plumbing",
    phone: "(817) 555-0192",
    email: "info@abcplumbing.com",
    location: "North Richland Hills, TX",
  },

  branding: {
    logo: {
      src: "/Images/logo1.png",
      alt: "ABC Plumbing logo",
    },

    colors: {
      /* Core brand */
      primary: "#0EA5E9",      // sky blue (CTAs)
      dark: "#0F172A",         // dark slate for footer only
      light: "#FFFFFF",        // white background

      /* Text */
      textOnDark: "#FFFFFF",   // white text on dark backgrounds
      textMuted: "#64748B",    // slate-500
      textOnLight: "#0F172A",  // dark text on light backgrounds
    },

    navbar: {
      blur: true,
      background: "#FFFFFF",   // white navbar
    },
  },

  header: {
    links: [
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: {
      label: "Call Now",
      href: "tel:8175550192",
    },
  },

  footer: {
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
};