// app/blog/page.js - Blog listing page

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/app/config/siteConfig";

const blogPosts = [
  {
    slug: "how-to-fix-leaky-faucet",
    title: "How to Fix a Leaky Faucet: A Step-by-Step Guide",
    excerpt: "A dripping faucet can waste hundreds of gallons of water per year. Learn when to DIY and when to call a professional plumber.",
    date: "January 8, 2026",
    readTime: "5 min read",
    category: "DIY Tips",
    image: "/Images/blog/leak.jpg",
  },
  {
    slug: "signs-you-need-water-heater-replacement",
    title: "7 Signs You Need a Water Heater Replacement",
    excerpt: "Is your water heater on its last legs? Discover the warning signs that indicate it's time for a replacement before it fails completely.",
    date: "January 5, 2026",
    readTime: "6 min read",
    category: "Maintenance",
    image: "/Images/blog/heater.png",
  },
  {
    slug: "prevent-frozen-pipes-winter",
    title: "How to Prevent Frozen Pipes This Winter",
    excerpt: "Frozen pipes can burst and cause thousands in damage. Follow these tips to protect your home during cold Texas winters.",
    date: "December 28, 2025",
    readTime: "4 min read",
    category: "Seasonal Tips",
    image: "/Images/blog/frozen.jpg",
  },
  {
    slug: "when-to-call-emergency-plumber",
    title: "When to Call an Emergency Plumber: 5 Situations That Can't Wait",
    excerpt: "Some plumbing problems need immediate attention. Learn which issues require emergency service and which can wait until morning.",
    date: "December 20, 2025",
    readTime: "5 min read",
    category: "Emergency",
    image: "/Images/blog/flood.png",
  },
  {
    slug: "benefits-of-tankless-water-heaters",
    title: "The Benefits of Tankless Water Heaters for Texas Homes",
    excerpt: "Thinking about upgrading to a tankless water heater? Here's everything you need to know about costs, savings, and installation.",
    date: "December 15, 2025",
    readTime: "7 min read",
    category: "Upgrades",
    image: "/Images/blog/tankless.png",
  },
];

export const metadata = {
  title: "Plumbing Tips & Advice Blog | ABC Plumbing",
  description: "Expert plumbing tips, maintenance advice, and guides from ABC Plumbing in North Richland Hills, TX. Learn how to care for your home's plumbing system.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Plumbing Tips & Advice
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expert advice from your local North Richland Hills plumbers. Learn how to maintain your plumbing, save money, and know when to call a pro.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-sky-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-sky-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sky-500 font-medium text-sm hover:text-sky-600 transition-colors flex items-center gap-1"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Help?
          </h2>
          <p className="text-slate-300 mb-8">
            Some plumbing problems are best left to the experts. Contact us for fast, reliable service in North Richland Hills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.business.phone.replace(/[^0-9]/g, '')}`}
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Call {siteConfig.business.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}