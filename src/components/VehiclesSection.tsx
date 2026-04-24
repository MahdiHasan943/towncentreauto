"use client";
import { useEffect, useRef } from "react";

const brands = [
  { name: "Toyota", logo: "https://logo.clearbit.com/toyota.com" },
  { name: "Honda", logo: "/honda-logo.webp" },
  { name: "Ford", logo: "/ford-logo.webp" },
  { name: "Chevrolet", logo: "/chevrolet-logo.webp" },
  { name: "BMW", logo: "https://logo.clearbit.com/bmw.com" },
  { name: "Mercedes-Benz", logo: "https://logo.clearbit.com/mercedes-benz.com" },
  { name: "Jeep", logo: "https://logo.clearbit.com/jeep.com" },
  { name: "Dodge", logo: "/dodge-logo.webp" },
  { name: "Subaru", logo: "https://logo.clearbit.com/subaru.com" },
  { name: "Volkswagen", logo: "https://logo.clearbit.com/vw.com" },
  // Adding a few more from local to make it fuller
  { name: "Hyundai", logo: "/hyundai-logo.webp" },
  { name: "GMC", logo: "/gmc-logo.webp" },
  { name: "Cadillac", logo: "/cadillac-logo.webp" },
  { name: "Buick", logo: "/buick-logo.webp" },
  { name: "Chrysler", logo: "/chrysler-logo.webp" },
  { name: "Infiniti", logo: "/infiniti-logo.webp" },
];

export default function VehiclesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const step = 1; // Adjust speed here
    const interval = 30;

    const scroll = () => {
      scrollAmount += step;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const timer = setInterval(scroll, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden" id="vehicles">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <p className="text-[#0071BC] text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Trusted Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-black uppercase text-[#1a1a1a] tracking-tight">
          We Service <span className="text-[#0071BC]">All Makes &amp; Models</span>
        </h2>
      </div>

      {/* Auto-sliding carousel */}
      <div className="relative w-full">
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden whitespace-nowrap gap-8 py-4 select-none pointer-events-none"
        >
          {/* Double the list for seamless loop */}
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center w-40 h-32 bg-gray-50 rounded-lg border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:border-[#0071BC]/20 group"
            >
              <div className="h-12 w-28 flex items-center justify-center mb-3">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#0071BC] transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Faded edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 text-center">
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Our certified technicians are trained to work on all vehicle makes and models—domestic and foreign alike. 
          We use factory-standard parts and diagnostic equipment to ensure your vehicle stays in peak condition.
        </p>
      </div>
    </section>
  );
}
