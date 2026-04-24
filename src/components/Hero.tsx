export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-[#111]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0071BC] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 mb-5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            ASE Certified Mechanics
          </div>

          <h1 className="text-white font-black text-3xl md:text-4xl lg:text-5xl uppercase leading-tight mb-4 tracking-wide">
            Let Us Help You Keep{" "}
            <span className="text-[#0071BC]">Your Vehicle Safe</span>{" "}
            &amp; Reliable For You &amp; Your Family!
          </h1>

          <p className="text-gray-300 text-sm md:text-base font-semibold uppercase tracking-widest mb-8">
            Because We Love Cars!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#appointment"
              className="bg-[#0071BC] text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 hover:bg-[#005a96] transition-colors"
            >
              Make An Appointment
            </a>
            <a
              href="#services"
              className="bg-white text-[#0071BC] border-2 border-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 hover:bg-[#0071BC] hover:text-white hover:border-[#0071BC] transition-all"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0071BC]" />
    </section>
  );
}
