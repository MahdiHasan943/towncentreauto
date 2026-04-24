import Image from "next/image";

export default function FeaturesDetail() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Composite Image (Mechanics + Logo + ASE) */}
          <div className="lg:w-[45%] flex-shrink-0">
            <div className="relative overflow-hidden rounded-sm shadow-xl border border-gray-100">
              <Image 
                src="/about.png" 
                alt="Town Center Auto Repair Team" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:w-[55%]">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-[#0071BC]" />
              <p className="text-[#0071BC] text-xs font-bold uppercase tracking-[0.2em]">
                About Town Center Auto Repair
              </p>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-black uppercase text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight">
              Your Source for <span className="text-[#0071BC]">Top-Quality Auto Repair</span> in Highlands Ranch, CO
            </h2>
            
            <div className="space-y-5 text-gray-600 text-[15px] leading-relaxed">
              <p>
                At Town Center Auto Repair, we are a full–service auto care facility in Highlands Ranch, CO, servicing all makes and models of cars, trucks, hybrids, SUVs, and AWD (All Wheel Drive) and 4 wheel drive vehicles.
              </p>
              <p>
                Besides handling all your automotive repair and maintenance needs, our skilled technicians will use their expertise to complete warranty repairs and scheduled maintenance for cars of all makes and models! Schedule an appointment online today!
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#appointment"
                className="bg-[#0071BC] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#005a96] transition-all shadow-lg shadow-blue-900/20"
              >
                Schedule An Appointment
              </a>
              <a
                href="tel:7206648909"
                className="bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] font-bold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#1a1a1a] hover:text-white transition-all"
              >
                Call: 720-664-8909
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
