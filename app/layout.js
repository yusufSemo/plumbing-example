import "./globals.css";
import Navbar from "./components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "VeroClicks | Websites & Marketing For Contractors",
  description:
    "We help hardworking contractors get more jobs — without the tech headache.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
      <body className={`font-sans bg-[#F8F8FF] text-black`}>
        <Navbar />

        <main>{children}</main>

        <footer className=" w-full border-t border-gray-200 bg-[#F8F8FF]">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600 flex flex-wrap justify-between">
            
            <p>© {new Date().getFullYear()} VeroClicks. All rights reserved.</p>

            <div className="flex space-x-4">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
              <a href="/privacy" className="hover:underline">Privacy</a>
              <a href="/cookies" className="hover:underline">Cookies</a>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}
