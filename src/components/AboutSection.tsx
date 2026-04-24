export default function AboutSection() {
  return (
    <section className="py-14 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left: Logo / emblem */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-40 h-40 rounded-full border-4 border-[#0071BC] bg-[#0071BC] flex items-center justify-center shadow-xl overflow-hidden">
              <div className="text-center px-3">
                <div className="flex gap-1 justify-center mb-1">
                  <span className="text-white text-lg">🏁</span>
                  <span className="text-white text-lg">🏁</span>
                </div>
                <div className="text-white font-black text-sm leading-snug text-center uppercase">
                  <div>TOWN CENTER</div>
                  <div className="text-xs font-bold mt-0.5">AUTO REPAIR</div>
                </div>
                <div className="text-white/70 text-[8px] font-semibold mt-1 uppercase tracking-wider">
                  Because We Just Love Cars
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1">
            <p className="text-[#0071BC] text-xs font-bold uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1a1a1a] mb-4 leading-tight">
              Your Source For Top-Quality Auto Repair In Highlands Ranch, CO
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              At Town Center Auto, we are passionate about keeping your vehicle running at its best. 
              Our ASE-certified mechanics bring expertise, honesty, and care to every repair—ensuring 
              you and your family stay safe on the road. From routine maintenance to complex diagnostics, 
              we handle it all with transparency and precision.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Located in Highlands Ranch, CO, we serve the local community with integrity. 
              We believe in fair pricing, fast service, and building lasting relationships with 
              every customer who walks through our door.
            </p>
            <a
              href="#appointment"
              className="bg-[#0071BC] text-white font-bold text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#005a96] transition-colors inline-block"
            >
              Schedule Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
