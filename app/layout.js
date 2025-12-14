import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { siteConfig } from "@/app/config/siteConfig";
import { Geist, Geist_Mono, Poppins } from "next/font/google";

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
  weight: ["400", "600", "700", "800"],
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
        className="font-sans text-black"
        style={{
          backgroundColor: siteConfig.branding.colors.dark,
        }}
      >
        <Navbar />

        <main>{children}</main>

        {/* FOOTER */}
        <footer className="w-full border-t border-gray-200" style={{
          backgroundColor: siteConfig.branding.colors.dark,
        }}>
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm flex flex-wrap justify-between gap-6"
          style={{ color: siteConfig.branding.colors.textMuted }}>
            <div>
              <p>
                © {new Date().getFullYear()} {siteConfig.business.name}. All
                rights reserved.
              </p>
              <p>{siteConfig.business.location}</p>
            </div>

            <div className="flex space-x-4">
              {siteConfig.footer.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
