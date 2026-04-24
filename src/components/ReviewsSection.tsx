"use client";
import { useState } from "react";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely fantastic service! The team at Town Center Auto went above and beyond to get my Subaru running perfectly. Diagnosed a complex electrical issue in just a few hours that another shop couldn't figure out in two visits. Honest, transparent, and reasonably priced. Will never go anywhere else!",
    platform: "Google",
  },
  {
    name: "James T.",
    rating: 5,
    date: "1 month ago",
    text: "I've been taking my truck here for over 3 years now. The quality of work is exceptional every single time. They take the time to explain what's wrong and what they need to do. Mike and his team are real professionals. Highly recommend to anyone in Highlands Ranch area!",
    platform: "Google",
  },
  {
    name: "Linda R.",
    rating: 5,
    date: "3 weeks ago",
    text: "Town Center Auto is the only shop I trust with my family's vehicles. They're always honest about what work actually needs to be done now vs. what can wait. Never any pressure, always great communication. Customer service is outstanding. A+++ shop!",
    platform: "Google",
  },
  {
    name: "David K.",
    rating: 5,
    date: "1 month ago",
    text: "Brought in my BMW for an issue three other shops couldn't solve. Town Center Auto had it diagnosed and repaired same day! Their knowledge of European vehicles is impressive. The digital inspection report they sent was super detailed too. 10/10 experience.",
    platform: "Google",
  },
  {
    name: "Amy B.",
    rating: 5,
    date: "2 months ago",
    text: "Best auto repair shop in Highlands Ranch! They squeezed me in last minute when my car wouldn't start. Fixed the battery issue quickly at a very fair price. The shuttle service is a great bonus. Friendly staff and clean waiting area. Highly recommend!",
    platform: "Google",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#f59e0b]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;

  const visibleReviews = reviews.slice(activeIndex, activeIndex + visibleCount);

  return (
    <section className="py-16 bg-[#1a1a1a]" id="reviews">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[#0071BC] text-xs font-bold uppercase tracking-widest mb-2">
              Customer Reviews
            </p>
            <h2 className="text-white font-black text-2xl md:text-3xl uppercase tracking-wide">
              What Our Customers Are Saying
            </h2>
          </div>
          {/* Overall rating */}
          <div className="flex items-center gap-3 bg-[#111] px-5 py-3">
            <div className="text-center">
              <div className="text-white font-black text-4xl leading-none">5.0</div>
              <StarRating rating={5} />
              <div className="text-gray-400 text-xs mt-1">Based on 200+ reviews</div>
            </div>
            <div className="text-gray-400 text-xs border-l border-gray-700 pl-3">
              <div className="flex items-center gap-1 mb-1">
                <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="font-semibold text-white">Google</span>
              </div>
              <div className="text-gray-400">Verified Reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-[#0071BC] opacity-20">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-4 line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-auto">
                <div>
                  <div className="font-bold text-sm text-[#1a1a1a]">{review.name}</div>
                  <div className="text-gray-400 text-xs">{review.date}</div>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-xs text-gray-400">{review.platform}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all reviews button */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/search/town+center+auto+repair+highlands+ranch"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1a1a1a] font-bold text-sm uppercase tracking-wider px-8 py-3.5 hover:bg-[#0071BC] hover:text-white transition-colors inline-block"
          >
            Read All Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
