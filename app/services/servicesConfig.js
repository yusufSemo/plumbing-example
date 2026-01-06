// ============================================================
// SERVICES PAGE CONFIGURATION
// ============================================================
// This config file controls the entire services page.
// Swap this out for any contractor or service-based business.
// ============================================================

const servicesConfig = {
  // ============ BUSINESS INFO ============
  businessName: "Flip's Auto Repair",
  businessType: "Mechanic Shop",
  tagline: "Honest Work. Fair Prices. Done Right.",

  // ============ META / SEO ============
  meta: {
    title: "Services | Flip's Auto Repair",
    description:
      "Full-service auto repair and maintenance. Oil changes, brake service, engine diagnostics, and more. Trusted by drivers across the valley.",
  },

  // ============ HERO SECTION ============
  hero: {
    headline: "Complete Auto Care You Can Trust",
    subheadline:
      "From routine maintenance to major repairs, we keep your vehicle running smooth without the dealership markup or runaround.",
    ctaText: "Schedule Service",
    ctaLink: "/book",
  },

  // ============ SERVICES OFFERED ============
  services: {
    sectionTitle: "What We Do",
    items: [
      {
        title: "Oil Changes & Fluid Services",
        description:
          "Quick, quality oil changes with premium filters. We also handle transmission fluid, coolant flushes, brake fluid, and power steering service.",
        icon: "🛢️",
      },
      {
        title: "Brake Repair & Replacement",
        description:
          "Pads, rotors, calipers, brake lines — we handle it all. Free brake inspections with any service. Your safety isn't optional.",
        icon: "🛑",
      },
      {
        title: "Engine Diagnostics & Repair",
        description:
          "Check engine light on? We use professional-grade scanners to find the real problem, not just guess. Honest diagnosis, honest repair.",
        icon: "🔧",
      },
      {
        title: "Tire Services",
        description:
          "New tires, rotations, balancing, and flat repairs. We'll help you find the right tires for your vehicle and driving style.",
        icon: "🚗",
      },
      {
        title: "AC & Heating",
        description:
          "Stay comfortable year-round. We diagnose and repair AC systems, heater cores, blower motors, and climate control issues.",
        icon: "❄️",
      },
      {
        title: "Suspension & Steering",
        description:
          "Shocks, struts, ball joints, tie rods, alignments. If your ride feels off or your steering pulls, we'll get you driving straight.",
        icon: "⚙️",
      },
    ],
  },

  // ============ WHO WE SERVE ============
  audiences: {
    sectionTitle: "Vehicles We Service",
    imageBasePath: "/Images/vehicles/",
    items: [
      { name: "Japanese Imports", img: "japanese.jpg" },
      { name: "European Vehicles", img: "european.jpg" },
      { name: "SUVs & Crossovers", img: "SUV.jpg" },
    ],
  },

  // ============ WHY CHOOSE US ============
  whyChooseUs: {
    headline: "Why Drivers Choose Flip's",
    subheadline:
      "We treat every car like it's our own. No upselling, no pressure — just honest work at fair prices.",
    points: [
      "Transparent pricing — no surprise charges",
      "ASE-certified technicians",
      "12-month / 12,000-mile warranty on repairs",
      "Same-day service for most jobs",
      "Loaner vehicles available",
    ],
  },

  // ============ TESTIMONIALS ============
  testimonials: {
    sectionTitle: "What Our Customers Say",
    items: [
      {
        quote:
          "Finally found a shop I can trust. They told me what I actually needed, not what would make them the most money.",
        author: "Marcus T.",
        role: "Honda Accord Owner",
        rating: 5,
      },
      {
        quote:
          "Quick, fair, and they actually explained what was wrong with my car in plain English. Will definitely be back.",
        author: "Sarah K.",
        role: "Ford F-150 Owner",
        rating: 5,
      },
      {
        quote:
          "Been bringing my fleet trucks here for 3 years. Consistent quality and they work with our schedule.",
        author: "Rodriguez Landscaping",
        role: "Fleet Customer",
        rating: 5,
      },
    ],
  },

  // ============ FAQ ============
  faq: {
    sectionTitle: "Frequently Asked Questions",
    items: [
      {
        question: "Do I need an appointment?",
        answer:
          "Appointments are recommended but not required. Walk-ins are welcome, though scheduled customers get priority. Call ahead for the fastest service.",
      },
      {
        question: "How long does a typical service take?",
        answer:
          "Oil changes take about 30-45 minutes. Brake jobs are usually 1-2 hours. Major repairs vary — we'll give you an honest time estimate before we start.",
      },
      {
        question: "Do you offer warranties on repairs?",
        answer:
          "Yes. All repairs come with a 12-month / 12,000-mile warranty on parts and labor. We stand behind our work.",
      },
      {
        question: "Can you work on my older/classic car?",
        answer:
          "Absolutely. We love working on classics and have experience with vehicles of all ages. Just let us know what you're bringing in.",
      },
      {
        question: "Do you offer financing?",
        answer:
          "Yes, we partner with several financing options for larger repairs. Ask our front desk about payment plans.",
      },
    ],
  },

  // ============ CTA SECTION ============
  cta: {
    headline: "Ready to Get Your Car Fixed Right?",
    subheadline:
      "Schedule your service online or give us a call. No pressure, no hassle.",
    buttonText: "Schedule Service",
    buttonLink: "/book",
  },

  // ============ THEME (Optional) ============
  theme: {
    primaryColor: "#1a1a2e",
    accentColor: "#e63946",
  },
};

export default servicesConfig;