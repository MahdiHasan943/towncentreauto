const specialsList = [
  {
    title: "$19.95 Oil Change Special",
    subtitle: "Conventional oil | Up to 5 quarts",
    note: "Cannot be combined with other offers. Expires 06/30/2026.",
    color: "bg-[#0071BC]",
  },
  {
    title: "Free Multi-Point Inspection",
    subtitle: "With any paid service",
    note: "Present coupon at check-in. One per vehicle.",
    color: "bg-[#111]",
  },
  {
    title: "10% Off Any Repair",
    subtitle: "For military, veterans & first responders",
    note: "Valid ID required. Cannot combine with other discounts.",
    color: "bg-[#0071BC]",
  },
  {
    title: "Free AC Performance Check",
    subtitle: "Summer ready inspection",
    note: "Inspection only. Labor additional if repairs needed.",
    color: "bg-[#111]",
  },
];

export default function SpecialsSection() {
  return (
    <section className="py-16 bg-[#f7f7f7]" id="specials">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#0071BC] text-xs font-bold uppercase tracking-widest mb-2">
            Current Offers
          </p>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1a1a1a] leading-tight">
            Specials &amp; Coupons
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialsList.map((special, index) => (
            <div
              key={index}
              className={`${special.color} text-white p-6 flex flex-col justify-between min-h-[200px] group hover:scale-[1.02] transition-transform`}
            >
              <div>
                <div className="w-10 h-0.5 bg-white/50 mb-4" />
                <h3 className="font-black text-xl uppercase leading-tight mb-2">{special.title}</h3>
                <p className="text-white/80 text-sm font-semibold">{special.subtitle}</p>
              </div>
              <div>
                <div className="w-full h-px bg-white/20 my-4" />
                <p className="text-white/60 text-xs leading-relaxed">{special.note}</p>
                <a
                  href="#appointment"
                  className="mt-4 inline-block bg-white/20 hover:bg-white hover:text-[#0071BC] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 transition-all"
                >
                  Redeem Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
