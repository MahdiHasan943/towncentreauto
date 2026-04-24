const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "ASE Certified Technicians",
    description: "Our mechanics hold current ASE certifications ensuring top-quality, industry-standard repair work you can trust.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Transparent, Fair Pricing",
    description: "No hidden fees, no surprises. We provide honest estimates before any work begins so you know exactly what to expect.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast, Efficient Service",
    description: "We respect your time. Most repairs are completed same-day so you can get back to your life as quickly as possible.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Nationwide Warranty",
    description: "All of our repairs come backed by a 3-year/36,000-mile warranty through NAPA AutoCare for your peace of mind.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Community-Focused",
    description: "Proudly serving Highlands Ranch and surrounding communities. We're your neighbors and we treat you like family.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2M9 9h6M9 12h4" />
      </svg>
    ),
    title: "Latest Diagnostic Technology",
    description: "We use state-of-the-art diagnostic equipment to accurately pinpoint issues and provide the most effective solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Text + reasons */}
          <div className="flex-1">
            <p className="text-[#0071BC] text-xs font-bold uppercase tracking-widest mb-2">
              Why Choose Us
            </p>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1a1a1a] leading-tight mb-3">
              Why Town Center Auto?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              We go beyond a standard auto shop. Town Center Auto is built on honesty, expertise, and genuine care for every customer.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              A full-service auto shop ready to meet your needs:
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {[
                "ASE-Certified Mechanics On Staff",
                "NAPA AutoCare Center",
                "3-Year / 36,000-Mile Warranty",
                "Free Multi-Point Inspections",
                "Loaner Vehicles Available",
                "Towing Services Available",
                "Saturday Hours Available",
                "Digital Vehicle Inspection Reports",
                "Shuttle Service Available",
                "Custom Estimates Provided",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-[#0071BC] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="#appointment"
                className="bg-[#0071BC] text-white font-bold text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#005a96] transition-colors inline-block"
              >
                Make An Appointment
              </a>
              <a
                href="tel:7206648909"
                className="border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors inline-block"
              >
                720-664-8909
              </a>
            </div>
          </div>

          {/* Right: ASE certified badge image */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div
              className="relative overflow-hidden rounded-sm shadow-2xl h-80 lg:h-full min-h-[380px]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#0071BC]/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* ASE badge overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-xl shadow-2xl border-b-8 border-[#0071BC] flex flex-col items-center">
                  <img src="/ASE02-1-150x150-1.jpg" alt="ASE Certified" className="w-24 h-24 object-contain mb-2" />
                  <div className="text-[#0071BC] font-black text-xl tracking-tight leading-none uppercase">ASE Certified</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Professional Mechanics</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 border border-gray-100 hover:border-[#0071BC] hover:shadow-md transition-all group"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-[#f0f7ff] group-hover:bg-[#0071BC] flex items-center justify-center transition-colors text-[#0071BC] group-hover:text-white">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase text-[#1a1a1a] mb-1.5">{reason.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
