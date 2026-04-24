"use client";
import { useState } from "react";

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    vehicle: "",
    message: "",
    date: "",
  });

  const services = [
    "Vehicle Inspection",
    "Oil Change",
    "Brake Service",
    "Tire Service",
    "Engine Repair",
    "Transmission Service",
    "Alignment",
    "Electrical Diagnosis",
    "AC Service",
    "Diesel Repair",
    "ADAS Calibration",
    "Other",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment request submitted! We'll contact you shortly to confirm.");
  };

  return (
    <section className="py-16 bg-[#f7f7f7]" id="appointment">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Info */}
          <div className="lg:w-80 flex-shrink-0">
            <p className="text-[#0071BC] text-xs font-bold uppercase tracking-widest mb-2">
              Book A Service
            </p>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1a1a1a] leading-tight mb-5">
              Schedule Your Appointment Today
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Ready to get your vehicle serviced? Fill out the form and we&apos;ll get back to you within one business hour to confirm your appointment. You can also call or text us directly.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#0071BC] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-gray-400 tracking-wider">Phone / Text</div>
                  <a href="tel:7206648909" className="text-[#1a1a1a] font-bold text-sm hover:text-[#0071BC] transition-colors">720-664-8909</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#0071BC] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-gray-400 tracking-wider">Address</div>
                  <div className="text-[#1a1a1a] font-semibold text-sm">8057 Carder Ct.</div>
                  <div className="text-gray-500 text-sm">Highlands Ranch, CO 80125</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#0071BC] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-gray-400 tracking-wider">Hours</div>
                  <div className="text-[#1a1a1a] font-semibold text-sm">Mon - Fri: 7:00 AM – 5:00 PM</div>
                  <div className="text-[#1a1a1a] font-semibold text-sm">Sat: 8:00 AM – 12:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 bg-white shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#0071BC] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#0071BC] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#0071BC] transition-colors"
                    placeholder="(720) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#0071BC] transition-colors"
                    placeholder="john@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Service Needed *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#0071BC] transition-colors bg-white"
                >
                  <option value="">Select a Service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Vehicle (Year/Make/Model)
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#0071BC] transition-colors"
                    placeholder="e.g. 2018 Toyota Camry"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#0071BC] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Message / Description
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#0071BC] transition-colors resize-none"
                  placeholder="Describe the issue or service needed..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0071BC] text-white font-bold text-sm uppercase tracking-wider py-4 hover:bg-[#005a96] transition-colors"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
