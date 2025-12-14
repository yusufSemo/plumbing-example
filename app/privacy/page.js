export const metadata = {
  title: "Privacy Policy | VeroClicks",
  description:
    "Learn how VeroClicks collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white text-black">

      {/* HERO */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-lg">
          Last updated: January 31, 2024
        </p>
      </section>

      {/* CONTENT */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6 space-y-10 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-2xl font-bold mb-2">Introduction</h2>
            <p>
              This Privacy Policy explains how VeroClicks (“we,” “us,” or “our”)
              collects, uses, and protects your information when you visit our
              website or use our services. By using our site or services, you
              consent to the practices described in this policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
            <p>
              We may collect personal information such as your name, business
              name, email address, phone number, and any information you submit
              through our forms, booking pages, or communications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide requested services</li>
              <li>To communicate about your account or services</li>
              <li>To improve our website and offerings</li>
              <li>To send SMS or email messages you have opted into</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">
              SMS Messaging & Consent (A2P Required)
            </h2>
            <p>
              By submitting your phone number on our website or booking a call,
              you consent to receive SMS messages from VeroClicks related to your
              inquiry, onboarding, or services.
            </p>
            <p className="mt-2">
              Message and data rates may apply. Message frequency varies.
            </p>
            <p className="mt-2 font-semibold">
              You may opt out at any time by replying <span className="font-bold">STOP</span>.
            </p>
            <p className="mt-2">
              For help, reply <span className="font-bold">HELP</span> or contact us directly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Cookies & Analytics</h2>
            <p>
              We may use cookies and analytics tools (such as Google Analytics)
              to understand how visitors interact with our site. This helps us
              improve performance and user experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">
              Sharing of Information
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. We may
              share information with trusted service providers solely for the
              purpose of operating our services (such as booking, messaging, or
              payment processing).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Data Security</h2>
            <p>
              We take reasonable steps to protect your information. However, no
              method of transmission over the Internet is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, you may contact us at:
            </p>
            <p className="mt-2 font-semibold">
              Email: privacy@veroclicks.com
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
