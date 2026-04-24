import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FeaturesDetail from "@/components/FeaturesDetail";
import ServicesSection from "@/components/ServicesSection";
import VehiclesSection from "@/components/VehiclesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import AppointmentSection from "@/components/AppointmentSection";
import SpecialsSection from "@/components/SpecialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <FeaturesDetail />
      <ServicesSection />
      <VehiclesSection />
      <WhyChooseUs />
      <ReviewsSection />
      <AppointmentSection />
      <SpecialsSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
