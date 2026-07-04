import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { RoomsSection } from "@/components/RoomsSection";
import { DrinksSection } from "@/components/DrinksSection";
import { GallerySection } from "@/components/GallerySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <RoomsSection />
      <DrinksSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
