const posts = [
  {
    title: "How Often Should You Really Change Your Oil?",
    excerpt: "Modern synthetic oils last longer than the old 3,000-mile myth. Here's what your car actually needs and why following your manufacturer's schedule matters.",
    category: "Maintenance Tips",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    slug: "#blog",
  },
  {
    title: "5 Warning Signs Your Brakes Need Immediate Attention",
    excerpt: "Squealing, grinding, pulling to one side—don't ignore these brake warning signs. We break down exactly what each symptom means and what to do about it.",
    category: "Safety",
    date: "April 8, 2026",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80",
    slug: "#blog",
  },
  {
    title: "Understanding Your Check Engine Light: A Complete Guide",
    excerpt: "That little light can mean dozens of things. Learn which codes are urgent, which can wait, and why you should never ignore it for long.",
    category: "Diagnostics",
    date: "March 28, 2026",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80",
    slug: "#blog",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[#0071BC] text-xs font-bold uppercase tracking-widest mb-2">
              Our Blog
            </p>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1a1a1a] leading-tight">
              Latest Automotive Tips
            </h2>
          </div>
          <a
            href="#blog"
            className="text-[#0071BC] text-sm font-bold uppercase tracking-wider flex items-center gap-1 hover:underline"
          >
            View All Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden h-48">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#0071BC] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="font-black text-sm uppercase text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#0071BC] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href={post.slug}
                  className="inline-flex items-center gap-1 text-[#0071BC] text-xs font-bold uppercase tracking-wide hover:underline"
                >
                  Read More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
