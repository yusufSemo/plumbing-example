export const metadata = {
  title: "Cookie Policy | VeroClicks",
  description: "Learn how VeroClicks uses cookies and tracking technologies.",
};

export default function CookiePolicy() {
  return (
    <div className="bg-white text-black">
      
      {/* HEADER */}
      <section className="text-center py-20 px-6 bg-(--brand-light)">
        <h1 className="text-5xl font-extrabold mb-4">Cookie Policy</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          How we use cookies and tracking technologies to improve your experience.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10 leading-relaxed text-gray-800">

        <p><strong>Last Updated:</strong> January 2025</p>

        <p>
          VeroClicks (“we”, “us”, “our”) uses cookies and similar tracking 
          technologies on our website to improve your experience, analyze traffic, 
          and support our marketing efforts. By using our website, you agree to the 
          use of cookies as described in this policy.
        </p>

        <h2 className="text-3xl font-bold text-(--brand)">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device when you visit a website. 
          They help websites remember user actions, preferences, and improve 
          performance.
        </p>

        <ul className="list-disc ml-6">
          <li>Session cookies (deleted when you close your browser)</li>
          <li>Persistent cookies (stay on your device longer)</li>
          <li>First-party cookies (set by us)</li>
          <li>Third-party cookies (set by outside services like Google or Meta)</li>
        </ul>

        <h2 className="text-3xl font-bold text-(--brand)">2. How We Use Cookies</h2>

        <h3 className="text-xl font-semibold">a. Essential Cookies</h3>
        <p>
          Required for the website to function — security, forms, and preferences. 
          These cannot be disabled.
        </p>

        <h3 className="text-xl font-semibold">b. Analytics & Performance Cookies</h3>
        <p>
          Help us understand how people use our site. We may use Google Analytics or similar tools.
        </p>

        <h3 className="text-xl font-semibold">c. Marketing Cookies</h3>
        <p>
          Used for advertising, retargeting, and optimizing ad performance through 
          tools like Meta Pixel or Google Ads.
        </p>

        <h2 className="text-3xl font-bold text-(--brand)">3. What Cookies We Use</h2>

        <table className="w-full border border-gray-300 text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Type</th>
              <th className="p-3 border-b">Provider</th>
              <th className="p-3 border-b">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b">Essential</td>
              <td className="p-3 border-b">Next.js / Vercel</td>
              <td className="p-3 border-b">Site functionality and performance</td>
            </tr>
            <tr>
              <td className="p-3 border-b">Analytics</td>
              <td className="p-3 border-b">Google Analytics</td>
              <td className="p-3 border-b">Traffic & behavior insights</td>
            </tr>
            <tr>
              <td className="p-3 border-b">Marketing</td>
              <td className="p-3 border-b">Meta Pixel / Google Ads</td>
              <td className="p-3 border-b">Advertising & retargeting</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-3xl font-bold text-(--brand)">4. Your Choices</h2>
        <p>You may disable cookies at any time through your browser.</p>

        <ul className="list-disc ml-6">
          <li>Chrome: chrome://settings/cookies</li>
          <li>Safari: Preferences → Privacy</li>
          <li>Firefox: Preferences → Privacy & Security</li>
          <li>Edge: Settings → Cookies & Site Permissions</li>
        </ul>

        <p>
          You may also use opt-out tools like the Google Analytics Opt-Out Browser Add-on 
          or AdChoices.
        </p>

        <h2 className="text-3xl font-bold text-(--brand)">5. Third-Party Tracking</h2>
        <p>
          Some services that may set cookies include Google Analytics, Meta Pixel, TikTok Pixel, 
          GoHighLevel tracking, and email marketing tools.
        </p>

        <h2 className="text-3xl font-bold text-(--brand)">6. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy occasionally. The updated version will always be posted 
          on this page.
        </p>

        <h2 className="text-3xl font-bold text-(--brand)">7. Contact Us</h2>
        <p>
          If you have any questions regarding this Cookie Policy, contact us at:
        </p>

        <p className="font-semibold">
          privacy@veroclicks.com
        </p>

      </section>

    </div>
  );
}
