"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState<string | null>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Optional: shrink navbar on scroll
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { 
      label: "About Us", 
      href: "#about",
      subLinks: [
        { label: "Support & Resources for Veterans", href: "/help-vets" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Did You Know?", href: "/car-notes" },
        { label: "Blog", href: "/blog" },
      ]
    },
    { 
      label: "Services", 
      href: "#services",
      subLinks: [
        { label: "ADAS Repair Services", href: "/services/adas-repair-services" },
        { label: "Alternator Repair Services", href: "/services/alternator-repair-services" },
        { label: "Auto Glass Repair & Replacement", href: "/services/auto-glass-repair-replacement" },
        { label: "Belt & Hose Inspection", href: "/services/belts-hoses-inspection-replacement" },
        { label: "Brake Repair Services", href: "/services/brake-repair" },
        { label: "Car AC Repair", href: "/services/air-conditioning-repair" },
        { label: "Car Battery Service", href: "/services/battery-inspections-replacements" },
        { label: "Check Engine Light", href: "/services/check-engine-light" },
        { label: "Computer Diagnostics", href: "/services/computer-diagnostics" },
        { label: "Cooling System Repair", href: "/services/cooling-system-radiators-repair-replacement" },
        { label: "Diesel Repair Services", href: "/services/diesel-repair-services" },
        { label: "Drivetrain Repair", href: "/services/drivetrain-repair" },
        { label: "Electrical Diagnostics", href: "/services/electrical-diagnostics" },
        { label: "Engine Repair", href: "/services/engine-repairs-replacements" },
        { label: "Fleet Services", href: "/services/fleet-service" },
        { label: "Fuel System Repair", href: "/services/fuel-system-repair" },
        { label: "Oil Change Service", href: "/services/oil-changes" },
        { label: "Starter Replacement", href: "/services/starter-replacement-services" },
        { label: "Suspension & Steering", href: "/services/suspension-steering-repairs" },
        { label: "Timing Belt Replacement", href: "/services/timing-belt-replacement" },
        { label: "Tire Repair & Replacement", href: "/services/tire-repair-replacement" },
        { label: "Tire Rotation Services", href: "/services/tire-rotations" },
        { label: "Transmission Repair", href: "/services/transmission-repair-replacement" },
        { label: "Tune Up Services", href: "/services/tune-up-services" },
        { label: "Vehicle Inspection", href: "/services/vehicle-inspection-services" },
        { label: "Wheel Alignment", href: "/services/wheel-alignment" },
      ]
    },
    { 
      label: "Vehicles", 
      href: "#vehicles",
      subLinks: [
        {
          label: "Asian",
          href: "#",
          subLinks: [
            { label: "Acura Service & Repair", href: "/vehicles/acura-service-repair" },
            { label: "Genesis Service & Repair", href: "/vehicles/genesis-service-repair" },
            { label: "Honda Service & Repair", href: "/vehicles/honda-service-repair" },
            { label: "Hyundai Service & Repair", href: "/vehicles/hyundai-service-repair" },
            { label: "Infiniti Service & Repair", href: "/vehicles/infiniti-service-repair" },
            { label: "Kia Service & Repair", href: "/vehicles/kia-service-repair" },
            { label: "Lexus Service & Repair", href: "/vehicles/lexus-service-repair" },
            { label: "Mazda Service & Repair", href: "/vehicles/mazda-service-repair" },
            { label: "Nissan Service & Repair", href: "/vehicles/nissan-service-repair" },
            { label: "Subaru Service & Repair", href: "/vehicles/subaru-service-repair" },
            { label: "Toyota Service & Repair", href: "/vehicles/toyota-service-repair" },
          ]
        },
        {
          label: "Domestic",
          href: "#",
          subLinks: [
            { label: "Buick Service & Repair", href: "/vehicles/buick-service-repair" },
            { label: "Cadillac Service & Repair", href: "/vehicles/cadillac-service-repair" },
            { label: "Chevrolet Service & Repair", href: "/vehicles/chevrolet-service-repair" },
            { label: "Chrysler Service & Repair", href: "/vehicles/chrysler-service-repair" },
            { label: "Dodge Service & Repair", href: "/vehicles/dodge-service-repair" },
            { label: "Ford Service & Repair", href: "/vehicles/ford-service-repair" },
            { label: "GMC Service & Repair", href: "/vehicles/gmc-service-repair" },
            { label: "Jeep Service & Repair", href: "/vehicles/jeep-service-repair" },
            { label: "Lincoln Service & Repair", href: "/vehicles/lincoln-service-repair" },
            { label: "Mercury Service & Repair", href: "/vehicles/mercury-service-repair" },
            { label: "RAM Service & Repair", href: "/vehicles/ram-service-repair" },
            { label: "Saturn Service & Repair", href: "/vehicles/saturn-service-repair" },
          ]
        }
      ]
    },
    { label: "Reviews", href: "#reviews" },
    { label: "Specials", href: "#specials" },
    { label: "Careers", href: "#careers" },
  ];

  return (
    <header className="w-full z-[100] bg-[#1a1a1a] sticky top-0 overflow-x-clip">
      {/* Top info bar */}
      <div className="bg-[#111111] border-b border-[#2a2a2a] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between py-2 gap-2">
          {/* Left: Hours */}
          <div className="flex items-center gap-2 text-gray-300 text-xs">
            <svg className="w-3.5 h-3.5 text-[#0071BC] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold text-white text-xs">Shop Hours:</span>
            <span>Mon - Fri: 7:00 AM - 5:00 PM</span>
          </div>
          {/* Center: Address */}
          <div className="flex items-center gap-2 text-gray-300 text-xs">
            <svg className="w-3.5 h-3.5 text-[#0071BC] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0071BC] transition-colors">
              8057 Carder Ct., Highlands Ranch, CO 80125
            </a>
          </div>
          {/* Right: Phone */}
          <div className="flex items-center gap-2 text-gray-300 text-xs">
            <svg className="w-3.5 h-3.5 text-[#0071BC] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:7206648909" className="font-bold text-white hover:text-[#0071BC] transition-colors text-sm">
              720-664-8909
            </a>
          </div>
          {/* CTA Button */}
          <a
            href="#appointment"
            className="bg-[#0071BC] text-white text-xs font-bold uppercase px-4 py-2 hover:bg-[#005a96] transition-colors tracking-wide shadow-lg shadow-blue-900/20"
          >
            Make An Appointment
          </a>
        </div>
      </div>

      {/* Weekend hours notice */}
      <div className="bg-[#E6B012] text-black text-center text-xs font-bold py-1.5 px-4 tracking-wide uppercase hidden md:block">
        Weekend Hours Available! Sat 8:00 AM - 12:00 PM | Book Your Weekend Appointment Today!
      </div>

      <nav className="bg-[#1a1a1a] border-b border-[#2a2a2a] relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image 
              src="/logo2.fw_.png" 
              alt="Town Center Auto Repair" 
              width={280} 
              height={80} 
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1 h-full">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group h-full flex items-center">
                <Link
                  href={link.href}
                  className="flex items-center text-white text-sm font-bold uppercase tracking-wide px-4 h-full hover:text-[#0071BC] transition-colors"
                >
                  {link.label}
                  {link.subLinks && (
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {link.subLinks && (
                  <div className={`absolute top-full bg-[#0a0a0a] border-t-4 border-[#0071BC] shadow-2xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 rounded-b-md 
                    ${link.label === "Services" ? 'w-[850px] -left-[250px]' : 'w-64 left-0'}`}
                  >
                    <div className={`p-1 ${link.label === "Services" ? 'grid grid-cols-3 gap-1 p-4' : 'flex flex-col'}`}>
                      {link.subLinks.map((sub) => (
                        <div key={sub.label} className="relative group/sub">
                          <Link
                            href={sub.href}
                            className="flex items-center justify-between px-5 py-3 text-[13px] font-medium text-gray-200 hover:text-white hover:bg-[#0071BC] transition-all rounded-sm"
                          >
                            <span className="flex items-center gap-2">
                              {link.label === "Services" && <div className="w-1 h-1 rounded-full bg-[#0071BC] group-hover/sub:bg-white" />}
                              {sub.label}
                            </span>
                            {sub.subLinks && (
                              <svg className="w-3 h-3 ml-2 -rotate-90 text-gray-500 group-hover/sub:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                          </Link>
                          
                          {sub.subLinks && (
                            <div className="absolute top-0 left-full w-64 bg-[#0a0a0a] border-l border-white/10 shadow-2xl opacity-0 invisible translate-x-4 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-300 z-[60]">
                              <div className="py-2">
                                {sub.subLinks.map((nested) => (
                                  <Link
                                    key={nested.label}
                                    href={nested.href}
                                    className="flex items-center gap-3 px-6 py-3 text-[13px] text-gray-300 hover:text-white hover:bg-[#0071BC] transition-all"
                                  >
                                    <div className="w-1 h-1 rounded-full bg-[#0071BC] group-hover:bg-white" />
                                    {nested.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0a0a0a] border-t border-[#0071BC]/30 max-h-[calc(100vh-100px)] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-white/5">
                <div 
                  className={`flex items-center justify-between text-white text-sm font-bold uppercase tracking-wider px-6 py-5 transition-colors ${activeSubMenu === link.label ? 'bg-[#1a1a1a] text-[#0071BC]' : 'hover:bg-[#111111]'}`}
                  onClick={() => {
                    if (link.subLinks) {
                      setActiveSubMenu(activeSubMenu === link.label ? null : link.label);
                      setActiveNestedMenu(null); // Reset nested when switching main
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                >
                  <span className="flex-1 cursor-pointer flex items-center justify-between">
                    {link.label}
                    {link.subLinks && (
                      <svg className={`w-4 h-4 transition-transform duration-300 ${activeSubMenu === link.label ? 'rotate-180 text-[#0071BC]' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>
                
                {link.subLinks && activeSubMenu === link.label && (
                  <div className="bg-[#050505] py-1 border-b border-white/5 animate-in slide-in-from-top-2 duration-200">
                    {link.subLinks.map((sub) => (
                      <div key={sub.label}>
                        <div 
                          className={`flex items-center justify-between text-gray-400 text-[11px] font-bold uppercase tracking-widest px-10 py-4 border-b border-white/5 transition-colors ${activeNestedMenu === sub.label ? 'text-[#0071BC] bg-[#111111]' : 'hover:text-white'}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (sub.subLinks) {
                              setActiveNestedMenu(activeNestedMenu === sub.label ? null : sub.label);
                            } else {
                              setMobileOpen(false);
                            }
                          }}
                        >
                          <span className="flex-1">{sub.label}</span>
                          {sub.subLinks && (
                            <svg className={`w-3 h-3 transition-transform ${activeNestedMenu === sub.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </div>

                        {sub.subLinks && activeNestedMenu === sub.label && (
                          <div className="bg-[#000000] py-2 animate-in slide-in-from-top-1 duration-150">
                            {sub.subLinks.map((nested) => (
                              <Link
                                key={nested.label}
                                href={nested.href}
                                className="flex items-center gap-3 px-14 py-3 text-gray-500 text-[10px] font-bold uppercase tracking-widest hover:text-[#0071BC] transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                <div className="w-2 h-[1px] bg-gray-800" />
                                {nested.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
