// app/portfolio/page.js
'use client'; 

import Image from "next/image";
import { useState, useRef, useEffect } from 'react';

// --- Default Background Color (Changed to pure white for better contrast) ---
const DEFAULT_BG_COLOR = '#FFFFFF'; 

// --- Case Study Data (Colors adjusted for better visibility) ---
const caseStudies = [
  {
    id: 1,
    title: "Roofing Website & Automation",
    tagline: "Total brand refresh and automation implementation for a regional contractor.",
    industry: "Roofing & Construction",
    imageUrl: "/Images/PortfolioPics/red.png",
    results: "<strong>40% increase</strong> in qualified lead volume.",
    color: '#fee2e2', // Light Red/Pink
  },
  {
    id: 2,
    title: "Emergency Roofing Response System",
    tagline: "Implemented automated follow-ups to immediately capture storm damage and missed emergency calls.",
    industry: "Roofing & Emergency Services",
    imageUrl: "/Images/PortfolioPics/navy.png",
    results: "<strong>30% reduction</strong> in lead response time.",
    color: '#e0f2f1', // Light Teal/Cyan
  },
  {
    id: 3,
    title: "Landscaping Lead Funnel",
    tagline: "Built a premium website to attract high-value design-build projects and affluent clients.",
    industry: "Landscaping & Design",
    imageUrl: "/Images/PortfolioPics/orange2.png",
    results: "<strong>25% increase</strong> in average project value.",
    color: '#ffedd5', // Light Orange
  },
  {
    id: 4,
    title: "Epoxy Flooring SEO & Lead Capture",
    tagline: "Developed a site focused on high-margin commercial flooring leads, optimized for local search.",
    industry: "Epoxy Flooring",
    imageUrl: "/Images/PortfolioPics/purple.png",
    results: "Achieved <strong>#1 Google ranking</strong> for 5 key local search terms.",
    color: '#ede9fe', // Light Purple
  },
  {
    id: 5,
    title: "Targeted Roofing Marketing",
    tagline: "Created a focused landing page and ad campaign for immediate storm damage repair leads.",
    industry: "Roofing & Insurance",
    imageUrl: "/Images/PortfolioPics/bluegreen.png",
    results: "<strong>35 high-value leads</strong> generated in the first 30 days.",
    color: '#e0f7fa', // Very Light Blue-Green
  },
  {
    id: 6, // --- ADJUSTED COLOR ---
    title: "Hardscaping Visual Conversion",
    tagline: "Built a visually stunning site to showcase patio and deck work, maximizing gallery conversions.",
    industry: "Patio & Hardscaping",
    imageUrl: "/Images/PortfolioPics/gray.png",
    results: "<strong>60% increase</strong> in website form submissions.",
    color: '#e5e7eb', // Slightly darker gray for better contrast
  },
  {
    id: 7,
    title: "Power Washing Online Quoting",
    tagline: "Implemented an online quoting tool allowing homeowners to receive instant, customized service estimates.",
    industry: "Power Washing",
    imageUrl: "/Images/PortfolioPics/yellow.png",
    results: "<strong>40% reduction</strong> in time spent on preliminary calls.",
    color: '#fffbe6', // Light Yellow
  },
  {
    id: 8,
    title: "Solar Installation Nurture Funnel",
    tagline: "Designed a multi-stage funnel using educational content to nurture high-ticket solar leads.",
    industry: "Solar Installation",
    imageUrl: "/Images/PortfolioPics/yellow2.png",
    results: "<strong>15% conversion rate</strong> from lead-to-consultation.",
    color: '#fff7ed', // Light Orange-Yellow
  },
  {
    id: 9, // --- ADJUSTED COLOR ---
    title: "Kitchen & Bath Remodel Funnel",
    tagline: "Created a photo-rich lead magnet and qualification forms to filter for high-budget remodeling projects.",
    industry: "Kitch. & Bath Remodeling",
    imageUrl: "/Images/PortfolioPics/black.png",
    results: "<strong>45% increase</strong> in qualified project inquiries.",
    color: '#d1d5db', // Darker gray for clear transition
  },
];

const CaseStudyCard = ({ study, onMouseEnter, onMouseLeave }) => {
    return (
        // 1. Outer Div: Make the entire card a Flex container, spanning full height
        <div 
            className="flex flex-col h-full block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-zinc-100 cursor-pointer"
            onMouseEnter={() => onMouseEnter(study.color)}
            onMouseLeave={onMouseLeave}
        > 
            {/* 2. Image Div: Use shrink-0 to prevent this section from collapsing */}
            <div className="relative h-60 w-full overflow-hidden shrink-0">
                <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105" 
                />
                <span className="absolute top-3 right-3 bg-[#0f2c45] text-white text-xs font-semibold px-3 py-1 rounded-full">{study.industry}</span>
            </div>

            {/* 3. Content Wrapper: Make this a Flex container that grows to fill remaining height */}
            <div className="p-6 flex flex-col flex-grow">
                
                {/* 4. Text Content: Use flex-grow here to push the results box down */}
                <div className="flex-grow"> 
                    <h3 className="text-2xl font-bold text-zinc-800 mb-2 transition-colors">
                        {study.title}
                    </h3>
                    <p className="text-zinc-600 mb-4 italic">{study.tagline}</p>
                </div>
                
                {/* 5. Results Box: Use mt-auto to ensure it sticks to the bottom */}
                <div className="flex items-center text-sm font-semibold text-green-700 bg-green-50 p-3 rounded-md mt-auto">
                    <span className="mr-2 text-xl">🏆</span>
                    <span dangerouslySetInnerHTML={{ __html: study.results }} /> 
                </div>
            </div>
        </div>
    );
};


export default function PortfolioPage() {
    const [bgColor, setBgColor] = useState(DEFAULT_BG_COLOR);

    const handleMouseEnter = (color) => {
        setBgColor(color);
    };

    const handleMouseLeave = () => {
        setBgColor(DEFAULT_BG_COLOR);
    };

    return (
        <div 
            className="w-full py-16 sm:py-24 transition-colors duration-500" 
            style={{ backgroundColor: bgColor }}
        >
            <div className="mx-auto max-w-7xl px-4">
                
                {/* Portfolio Header */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 font-poppins">
                        Our Work: Results You Can Build On
                    </h1>
                    <p className="mt-4 text-xl text-zinc-600 max-w-3xl mx-auto">
                        See how veroClicks has transformed lead generation and online presence for contractors just like you. Proof that modern websites and smart automation get jobs done.
                    </p>
                    <a
                        href="/booking"
                        className="mt-8 inline-flex items-center font-manrope px-8 py-3 bg-[#0f2c45] text-white text-lg rounded-lg hover:bg-blue-700 transition-all shadow-md"
                    >
                        <span className="mr-2 text-lg">⚡</span> Start Your Case Study
                    </a>
                </header>

                {/* Case Studies Grid */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {caseStudies.map((study) => (
                            <CaseStudyCard 
                                key={study.id} 
                                study={study} 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave}
                            />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}