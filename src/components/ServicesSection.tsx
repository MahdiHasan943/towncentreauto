const services = [
  {
    title: "ADAS Repair Services",
    description: "Advanced Driver Assistance Systems calibration and repair by certified technicians using state-of-the-art equipment.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Brake Repair Services",
    description: "Full brake system inspection, pad replacement, rotor resurfacing, and fluid flush for maximum safety.",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Diesel Repair Services",
    description: "Specialized diesel engine repair and maintenance for trucks and heavy-duty vehicles by experienced mechanics.",
    image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Alternator Repair",
    description: "Expert alternator testing, repair and replacement to keep your vehicle's electrical system healthy and charging.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Computer Diagnostics",
    description: "Advanced diagnostic testing to quickly and accurately identify any engine or system issues with your vehicle.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Oil Change Service",
    description: "Regular oil and filter changes to keep your engine running smoothly and extend its overall lifespan.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.67.335a2 2 0 01-1.788 0l-.67-.335a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.34.34a2 2 0 000 2.829l1.245 1.244A8 8 0 0011 22.143l1.1-.55a2 2 0 011.788 0l1.1.55a8 8 0 006.126-2.298l1.245-1.244a2 2 0 000-2.829l-.341-.341z" />
      </svg>
    ),
  },
  {
    title: "Vehicle Inspection",
    description: "Comprehensive multi-point inspections to catch potential issues before they become expensive problems.",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Transmission Repair",
    description: "Expert transmission diagnosis, fluid service, repair, and complete replacement for all vehicle types.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Car AC Repair",
    description: "Heating and air conditioning system diagnostics, recharge, and repair for year-round cabin comfort.",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 8l3-3m0 0l3 3m-3-3v12" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]" id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#0071BC]" />
            <p className="text-[#0071BC] text-sm font-black uppercase tracking-[0.4em]">
              Our Services
            </p>
            <div className="w-12 h-[2px] bg-[#0071BC]" />
          </div>
          <h2 className="text-white font-black text-4xl md:text-6xl uppercase tracking-tight leading-[0.9] mb-4">
            Distinctive Service For <br /><span className="text-[#0071BC]">Discerning Drivers</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-sm cursor-pointer shadow-2xl border border-white/5"
            >
              {/* Background image with zoom effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-[#0071BC]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-[#0071BC] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                {/* Icon Container */}
                <div className="mb-8 relative transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-[#0071BC] group-hover:text-white group-hover:bg-[#0071BC] group-hover:border-[#0071BC] transition-all duration-500 shadow-[0_0_20px_rgba(0,113,188,0.3)] group-hover:shadow-[0_0_30px_rgba(0,113,188,0.6)]">
                    {service.icon}
                  </div>
                </div>

                <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                  <h3 className="text-white font-black text-2xl uppercase tracking-wider leading-tight mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-[#0071BC] group-hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300">
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300 pb-1">Learn More</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/0 group-hover:border-[#0071BC]/50 transition-all duration-700 delay-100" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/0 group-hover:border-[#0071BC]/50 transition-all duration-700 delay-100" />
            </div>
          ))}
        </div>

        {/* View all footer */}
        <div className="mt-20 text-center">
          <div className="mb-8 flex flex-col items-center">
             <div className="h-px w-20 bg-white/10 mb-6" />
             <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold">
               Professional Care For Every Make & Model
             </p>
          </div>
          <a
            href="#appointment"
            className="group relative inline-flex items-center gap-6 bg-[#0071BC] text-white font-black text-sm uppercase tracking-[0.2em] px-12 py-6 overflow-hidden transition-all shadow-[0_10px_40px_rgba(0,113,188,0.4)] hover:shadow-[0_15px_50px_rgba(0,113,188,0.6)]"
          >
            <div className="absolute inset-0 bg-white transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)" />
            <span className="relative z-10 group-hover:text-[#0071BC] transition-colors duration-500">Book Full Service</span>
            <svg className="relative z-10 w-6 h-6 group-hover:text-[#0071BC] group-hover:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
