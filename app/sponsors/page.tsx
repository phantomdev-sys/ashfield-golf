import type { Metadata } from "next";
import SponsorsGrid from "@/components/sections/SponsorsGrid";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Our Sponsors",
  description: "Ashfield Golf Club is proud to be supported by local businesses including ASEE Group and Corlatt Construction Services Ltd. Thank you for your support.",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        image="/images/course/fairway-blue-sky.webp"
        scrim="linear-gradient(100deg, rgba(26,58,42,0.59) 0%, rgba(26,58,42,0.63) 47%, rgba(26,58,42,0.15) 100%)"
        eyebrow="Support"
        title={<>Our <em style={{ color: "#c9a84c" }}>Sponsors</em></>}
        intro={<>Ashfield Golf Club is proud to be supported by the following local businesses. Thank you for your support.</>}
      />
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SponsorsGrid />
        </div>
      </div>
    </>
  );
}
