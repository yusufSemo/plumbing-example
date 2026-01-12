import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { siteConfig } from "@/app/config/siteConfig";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
    >
      <body
        className="font-sans antialiased"
        style={{
          backgroundColor: siteConfig.branding.colors.light,
          color: siteConfig.branding.colors.textOnLight,
        }}
      >
        <Navbar />

        <main>{children}</main>

        {/* FOOTER */}
        <footer 
          className="w-full"
          style={{ backgroundColor: siteConfig.branding.colors.dark }}
        >
          <div className="mx-auto max-w-7xl px-6 py-16">
            {/* Top section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-white">
                    {siteConfig.business.name}
                  </span>
                </div>
                <p className="text-slate-400 max-w-sm leading-relaxed">
                  Your trusted local plumbing experts. Providing quality service to North Richland Hills and surrounding areas.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <nav className="flex flex-col gap-2">
                  {siteConfig.header.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <div className="flex flex-col gap-3 text-slate-400">
                  <a 
                    href={`tel:${siteConfig.business.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {siteConfig.business.phone}
                  </a>
                  <a 
                    href={`mailto:${siteConfig.business.email}`}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {siteConfig.business.email}
                  </a>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {siteConfig.business.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <p>
                  © {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
                </p>
                <div className="flex gap-6">
                  {siteConfig.footer.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}