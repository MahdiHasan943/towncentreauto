import Link from "next/link";
import Image from "next/image";

const footerServices = [
  "Vehicle Inspection",
  "Drivetrain Repair",
  "Diesel Repair",
  "Brake Service",
  "Oil Change",
  "Transmission Service",
  "Engine Repair",
  "Electrical Diagnostics",
  "ADAS Calibration",
  "Alternator Repair",
  "Starter Replacement",
  "AC Service",
];

const footerLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Vehicles We Service", href: "#vehicles" },
  { label: "Reviews", href: "#reviews" },
  { label: "Specials & Coupons", href: "#specials" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#appointment" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo & about */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center mb-5">
              <Image 
                src="/logo2.fw_.png" 
                alt="Town Center Auto Repair" 
                width={240} 
                height={70} 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              Your trusted ASE-certified auto repair shop in Highlands Ranch, CO. Honest service, fair prices, and repairs done right the first time.
            </p>
            {/* Social links */}
            <div className="flex gap-2 mt-4">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 bg-[#1a1a1a] hover:bg-[#0071BC] flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 bg-[#1a1a1a] hover:bg-[#0071BC] flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              {/* Google */}
              <a href="#" className="w-8 h-8 bg-[#1a1a1a] hover:bg-[#0071BC] flex items-center justify-center transition-colors" aria-label="Google">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#0071BC]" />
            </h4>
            <ul className="space-y-2.5 mt-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-xs hover:text-[#0071BC] transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-2.5 h-2.5 text-[#0071BC]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#0071BC]" />
            </h4>
            <ul className="space-y-2.5 mt-4">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-500 text-xs hover:text-[#0071BC] transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-2.5 h-2.5 text-[#0071BC]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#0071BC]" />
            </h4>
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#0071BC] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-xs text-gray-500 leading-relaxed">
                  8057 Carder Ct.<br />
                  Highlands Ranch, CO 80125
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#0071BC] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:7206648909" className="text-xs text-gray-400 hover:text-[#0071BC] transition-colors">
                  720-664-8909
                </a>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#0071BC] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-xs text-gray-500 leading-relaxed">
                  Mon – Fri: 7:00 AM – 5:00 PM<br />
                  Saturday: 8:00 AM – 12:00 PM<br />
                  Sunday: Closed
                </div>
              </div>

              <a
                href="#appointment"
                className="mt-2 block bg-[#0071BC] text-white text-xs font-bold uppercase tracking-wider text-center py-3 px-4 hover:bg-[#005a96] transition-colors"
              >
                Make An Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#222] py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Town Center Auto Repair. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-600 text-xs hover:text-[#0071BC] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 text-xs hover:text-[#0071BC] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 text-xs hover:text-[#0071BC] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
