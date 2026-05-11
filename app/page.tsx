import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ScorecardPreview from "@/components/sections/ScorecardPreview";
import MembershipSnapshot from "@/components/sections/MembershipSnapshot";
import VisitorSnapshot from "@/components/sections/VisitorSnapshot";
import GalleryStrip from "@/components/sections/GalleryStrip";
import CtaSection from "@/components/sections/CtaSection";
import NewsSection from "@/components/sections/NewsSection";
import { SEO } from "@/lib/data";

export const metadata: Metadata = {
  title: SEO.siteTitle,
  description: SEO.siteDescription,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <GalleryStrip />
      <ScorecardPreview />
      <MembershipSnapshot />
      <VisitorSnapshot />
      <NewsSection />
      <CtaSection />
    </>
  );
}
