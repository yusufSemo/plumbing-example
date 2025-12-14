"use client"
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full min-h-[90dvh] flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/Images/hero.jpg"
        alt="Contractor working"
        fill
        priority
        // MODIFIED: Increased scale for "zoom"
        className="object-cover scale-115 origin-top-right" 
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black animate-hero-fade pointer-events-none" />

     {/* CONTENT */}
<div className="relative z-10 w-full max-w-7xl px-6 mx-auto">
 <div className="ml-auto -mt-70 md:-mt-20 max-w-2xl md:max-w-3xl text-center md:text-right text-white">

    <h1 className="text-2xl md:text-6xl font-extrabold tracking-tight animate-underline ">
      Honest Auto Repair.
      <br />
      Done Right the First Time.
    </h1>

    <p className="mt-3 text-lg md:text-xl text-gray-200">
      Local auto repair in North Richland Hills.
      Quality work, fair pricing, and no surprises.
    </p>

    <div
  className="
    mt-5
    flex flex-col sm:flex-row gap-3
    justify-center md:justify-end
  "
>
      <a
        href="/booking"
        className="px-6 py-4 rounded-md text-lg font-semibold transition-all"
        style={{
          backgroundColor: "var(--brand)",
          color: "white",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--brand-dark)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--brand)")
        }
      >
        Book an Appointment
      </a>

      <a
        href="/services"
        className="px-8 py-4 rounded-md text-lg font-semibold border border-white/60 hover:bg-white/10 transition-all"
      >
        View Services
      </a>
    </div>

  </div>
</div>
    </section>
  );
}
