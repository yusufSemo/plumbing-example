// app/page.js
import Image from "next/image";
import Hero from "@/app/components/Hero";
import QuickContactForm from "@/app/components/QuickContactForm";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import ReviewsSection from "@/app/components/ReviewsSection";
import ServiceArea from "@/app/components/ServiceArea";
import Leavereview from "@/app/components/Leavereview";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
     <Hero />
    <QuickContactForm />
    <WhyChooseUs />
    <ReviewsSection />
    <Leavereview />
    <ServiceArea />


    </div>
  );
}
