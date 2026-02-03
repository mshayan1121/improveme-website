import HomeHero from "@/components/hero/HomeHero";
import StatsBar from "@/components/sections/StatsBar";
import PrimarySection from "@/components/sections/PrimarySection";
import SecondarySection from "@/components/sections/SecondarySection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import BookingCTA from "@/components/sections/BookingCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <PrimarySection />
      <SecondarySection />
      <TestimonialsCarousel />
      <BookingCTA />
    </>
  );
}
