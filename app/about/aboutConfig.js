// ============================================================
// ABOUT PAGE CONFIGURATION
// ============================================================
// Edit this file to customize your entire about page.
// Works for any contractor or service-based business.
// ============================================================

const aboutConfig = {
  // ============ META / SEO ============
  meta: {
    title: "About Us | Flip's Auto Repair",
    description:
      "Family-owned auto repair shop serving the community for over 5 years. Honest work, fair prices, and mechanics you can trust.",
  },

  // ============ HERO SECTION ============
  hero: {
    headline: ["We Keep Your", "Vehicles Running", "Like New"],
    subheadline:
      "Family-owned and operated since 2021. We treat every car like it's our own — because your trust is everything to us.",
    ctaText: "Schedule Service",
    ctaLink: "/book",
    image: {
      src: "/Images/owner.jpg",
      alt: "Flip - Owner of Flip's Auto Repair",
    },
  },

  // ============ STATS / BADGES ============
  stats: {
    sectionTitle: "Trusted By Drivers Everywhere",
    items: [
      { number: "5+", label: "Years in Business" },
      { number: "1,000+", label: "Vehicles Serviced" },
      { number: "4.9", label: "Google Rating" },
      { number: "98%", label: "Customer Retention" },
      { number: "50+", label: "5-Star Reviews" },
    ],
  },

  // ============ VALUES SECTION ============
  values: {
    sectionTitle: ["Built on Trust,", "Driven by Quality"],
    items: [
      {
        title: "Honest Diagnostics",
        description:
          "We tell you exactly what's wrong and what it'll cost — no surprises, no upsells, no pressure.",
      },
      {
        title: "Quality Parts",
        description:
          "We use OEM and high-quality aftermarket parts. Never cheap stuff that'll fail in 6 months.",
      },
      {
        title: "Fair Pricing",
        description:
          "Dealership quality without dealership prices. We'll always give you options that fit your budget.",
      },
      {
        title: "Complimentary Wash",
        description:
          "With every service, we wash your car inside and out. A clean car is a happy car.",
      },
    ],
  },

  // ============ QUOTE / TESTIMONIAL ============
  quote: {
    text: "A car is more than just transportation — it's how you get to work, pick up your kids, and live your life. We never forget that responsibility.",
    author: "Flip Morrison",
    role: "Owner & Lead Technician",
  },

  // ============ TEAM SECTION (Optional) ============
  // team: {
  //   sectionTitle: "Meet the Team",
  //   members: [
  //     {
  //       name: "Flip Morrison",
  //       role: "Owner & Lead Technician",
  //       image: "/Images/team/flip.jpg",
  //       bio: "ASE Master Certified with 20+ years experience.",
  //     },
  //     {
  //       name: "Jake Torres",
  //       role: "Senior Mechanic",
  //       image: "/Images/team/jake.jpg",
  //       bio: "Specializes in European imports and diagnostics.",
  //     },
  //     {
  //       name: "Maria Santos",
  //       role: "Service Advisor",
  //       image: "/Images/team/maria.jpg",
  //       bio: "Your first point of contact. Fluent in English and Spanish.",
  //     },
  //   ],
  // },

  // ============ STORY SECTION (Optional) ============
  story: {
  sectionTitle: "Our Story",
  paragraphs: [
    "Before Flip's Auto Repair, there were five years at BMW — starting as a technician and working up through the ranks. Promotions came, the skills sharpened, and the experience stacked up. But something didn't sit right: customers were being overcharged, upsold on repairs they didn't need, and treated like numbers on a service ticket.",
    "That's when the decision was made to go independent. Same dealership-level expertise, but with fair prices and honest service. No corporate quotas. No pressure to sell unnecessary work. Just quality repairs from someone who actually gives a damn.",
    "Flip's Auto Repair opened in 2021 with a simple promise: treat every car like it's your own, and every customer like a neighbor. That hasn't changed — and it never will.",
  ],
},
};

export default aboutConfig;