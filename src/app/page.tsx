import HomeHero from "@/components/hero/HomeHero";
import StatsBar from "@/components/sections/StatsBar";
import AcademicJourneySection from "@/components/sections/AcademicJourneySection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import BookingCTA from "@/components/sections/BookingCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <AcademicJourneySection />
      <TestimonialsCarousel />
      <BookingCTA />
    </>
  );
}
