// app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-white">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden w-full sky-gradient min-h-[90dvh] flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-24 pb-90 md:py-40 flex flex-col md:flex-row items-start gap-38 relative z-10">

          {/* Text */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight font-poppins">
              <span className="block animate-line-1">
                You focus on your craft
              </span>

              <span className="block pl-6 md:pl-12 text-white animate-line-2">
                We handle your leads
              </span>
            </h1>


            <p className="font-inter font-semibold mt-6 text-1xl text-black max-w-lg">
              veroClicks helps hardworking contractors get more jobs with modern websites, automated follow-ups,
              and no tech headaches.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-left">
              <a
                href="/booking"
                className="font-manrope px-6 py-3 bg-[#0f2c45] text-white text-lg rounded-md hover:bg-(--brand-dark) transition-all"
              >
                Book a Demo
              </a>
              <a
                href="/services"
                className="font-manrope px-6 py-3 border border-zinc-300 rounded-md hover:bg-zinc-100 transition-all"
              >
                View Services
              </a>
            </div>
          </div>


          {/* Hero Image */}
          <div className="hidden md:flex flex-1 justify-center relative z-20">
            <Image
              src="/Images/contractor-hero.jpg"
              alt="Contractor working"
              width={520}
              height={520}
              className="rounded-lg shadow-xl object-cover w-full max-w-xs mx-auto md:max-w-none appear-on-scroll will-animate"
              priority
            />

          </div>

        </div>

        {/* Bottom foreground shape */}
        <Image
          src="/Images/roofBack2.png"
          alt="Background ground curve"
          width={450}
          height={450}
          className="absolute bottom-[-2%] left-0 object-cover fade-in-bottom"
          priority
        />
              </section>

<section className="relative py-14">
  <div className="mx-auto max-w-6xl px-6 text-center appear-on-scroll">

    <h2 className="text-4xl font-extrabold tracking-tight text-[#0f2c45] mb-12">
      Recent Results
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <a
        href="/portfolio"
        className="cursor-pointer bg-white rounded-xl shadow-xl border overflow-hidden hover:shadow-2xl transition-all block"
      >
        <div className="relative h-52 w-full">
          <Image
            src="/Images/PortfolioPics/red.png"
            alt="Roofing Website & Automation"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#0f2c45] mb-2">
            Roofing Website & Automation
          </h3>
          <p className="text-zinc-700 text-sm">
            40% increase in qualified leads.
          </p>
        </div>
      </a>

      {/* CARD 2 */}
      <a
        href="/portfolio"
        className="cursor-pointer bg-white rounded-xl shadow-xl border overflow-hidden hover:shadow-2xl transition-all block"
      >
        <div className="relative h-52 w-full">
          <Image
            src="/Images/PortfolioPics/navy.png"
            alt="Emergency Roofing Response"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#0f2c45] mb-2">
            Emergency Roofing Response
          </h3>
          <p className="text-zinc-700 text-sm">
            30% faster lead response.
          </p>
        </div>
      </a>

      {/* CARD 3 */}
      <a
        href="/portfolio"
        className="cursor-pointer bg-white rounded-xl shadow-xl border overflow-hidden hover:shadow-2xl transition-all block"
      >
        <div className="relative h-52 w-full">
          <Image
            src="/Images/PortfolioPics/orange2.png"
            alt="Landscaping Lead Funnel"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#0f2c45] mb-2">
            Landscaping Lead Funnel
          </h3>
          <p className="text-zinc-700 text-sm">
            +25% increase in project value.
          </p>
        </div>
      </a>

    </div>

    <a
      href="/portfolio"
      className="mt-10 inline-flex items-center px-8 py-4 border border-[#0f2c45] text-[#0f2c45] rounded-lg font-semibold hover:bg-[#0f2c45] hover:text-white transition-all shadow-lg"
    >
      View Full Portfolio →
    </a>

  </div>
</section>



      {/* VALUE SECTION */}
      <section className="relative py-9">
  
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/Images/background.jpg')" }}
  ></div>

  {/* BLUR GLASS LAYER */}
  <div className="absolute inset-0 bg-white/30 backdrop-blur-[40px]"></div>

  {/* CONTENT LAYER */}
  <div className="relative mx-auto max-w-6xl px-6">
    
    <h2 className="text-4xl font-extrabold tracking-tight text-center mb-12 text-[#0f2c45] appear-on-scroll">
      What we do best
    </h2>

    <div className="grid md:grid-cols-3 gap-10 appear-on-scroll">
      
      <div className="bg-white p-8 rounded-xl shadow-xl border">
        <h3 className="text-xl font-bold mb-3 text-[#0f2c45]">Website That Converts</h3>
        <p className="text-zinc-700">
          Clean, modern contractor-focused websites built to turn traffic into real customers.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-xl border">
        <h3 className="text-xl font-bold mb-3 text-[#0f2c45]">Automated Follow-Ups</h3>
        <p className="text-zinc-700">
          Stop losing leads. Missed-call text back and smart automations keep you booked.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-xl border">
        <h3 className="text-xl font-bold mb-3 text-[#0f2c45]">More Jobs, Less Stress</h3>
        <p className="text-zinc-700">
          You already work hard. Let us handle the marketing so you can focus on your craft.
        </p>
      </div>

    </div>

  </div>
</section>

    </div>
  );
}
