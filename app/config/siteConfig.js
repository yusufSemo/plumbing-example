// src/config/siteConfig.js
export const siteConfig = {
  seo: {
    title: "Flip's Auto Repair | Local Auto Repair in North Richland Hills, TX",
    description:
      "Flip's Auto Repair provides honest, affordable auto repair from a trusted local garage in North Richland Hills, TX.",
  },

  business: {
    name: "FLIPS AUTO REPAIR",
    phone: "(817) 555-0192",
    email: "flipsautorepair@gmail.com",
    location: "North Richland Hills, TX",
  },

  branding: {
    logo: {
      src: "/Images/logo1.png",
      alt: "Flip's Auto Repair logo",
    },

    colors: {
      /* Core brand */
      primary: "#CC5A32",      // orange (CTAs)
      dark: "#3B3B3B",         // navbar / page bg
      light: "#BEBEBE",        // light sections

      /* Text */
      textOnDark: "#E5E7EB",   // gray-200
      textMuted: "#BDBDBD",    // gray-400
      textOnLight: "#111827",  // slate-900
    },

    navbar: {
      blur: true, // purely behavioral, not color
    },
  },

  header: {
    links: [
      { label: "Services", href: "/services" },
      { label: "Reviews", href: "/reviews" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: {
      label: "Call Now",
      href: "tel:8173663084",
    },
  },

  footer: {
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
};
