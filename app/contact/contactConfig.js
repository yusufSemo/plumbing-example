// ============================================================
// CONTACT PAGE CONFIGURATION
// ============================================================
// Edit this file to customize your contact page.
// Works for any contractor or service-based business.
// ============================================================

const contactConfig = {
  // ============ META / SEO ============
  meta: {
    title: "Contact | Flip's Auto Repair",
    description:
      "Get in touch with Flip's Auto Repair. Call us, text us, or fill out our quick form for a fast response.",
  },

  // ============ HERO SECTION ============
  hero: {
    headline: "Get In Touch",
    subheadline:
      "Have a question or need service? Reach out by phone, text, or fill out the form below — we respond fast.",
  },

  // ============ CONTACT METHODS ============
  contactMethods: [
    {
      icon: "📞",
      title: "Call Us",
      lines: ["(817) 366-3084"],
      link: "tel:+18173663084",
    },
    {
      icon: "💬",
      title: "Text Us",
      lines: ["(817) 366-3084", "Fast response during business hours"],
      link: "sms:+18173663084",
    },
    // {
    //   icon: "📍",
    //   title: "Visit Us",
    //   lines: ["1234 Main Street", "Austin, TX 78701"],
    //   link: "https://maps.google.com/?q=1234+Main+Street+Austin+TX",
    // },
  ],

  // ============ BUSINESS HOURS ============
  hours: {
    sectionTitle: "Business Hours",
    schedule: [
      { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
      { days: "Saturday", hours: "9:00 AM – 3:00 PM" },
      { days: "Sunday", hours: "9:00 AM – 5:00 PM" },
    ],
  },

  // ============ CONTACT FORM ============
  form: {
    sectionTitle: "Send Us a Message",
    subheadline: "Fill out the form and we'll get back to you ASAP.",
    fields: [
      {
        name: "name",
        type: "text",
        placeholder: "Your Name",
        required: true,
      },
      {
        name: "phone",
        type: "tel",
        placeholder: "Phone Number",
        required: true,
      },
      {
        name: "message",
        type: "textarea",
        placeholder: "How can we help?",
        required: false,
        rows: 4,
      },
    ],
    submitText: "Send Message",
    consentText:
      "I agree to receive calls and text messages regarding my request. Message & data rates may apply. Reply STOP to opt out.",
    privacyLink: "/privacy-policy",
    successMessage: "Thanks! We'll be in touch shortly.",
  },

  // ============ CTA SECTION ============
  cta: {
    headline: "Need Immediate Help?",
    subheadline: "Give us a call and we'll get you taken care of right away.",
    buttonText: "Call Now",
    buttonLink: "tel:+15551234567",
  },
};

export default contactConfig;