const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "15,000+", label: "Happy Customers" },
  { value: "5★", label: "Google Rating" },
  { value: "3yr / 36k", label: "Mile Warranty" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0071BC]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-blue-500/40">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 px-4 text-center">
              <div className="text-white font-black text-3xl md:text-4xl leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-blue-200 text-xs font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
