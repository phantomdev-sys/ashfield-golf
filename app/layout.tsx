import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/lib/data";

export const metadata: Metadata = {
  title: { default: SEO.siteTitle, template: "%s | Ashfield Golf Club" },
  description: SEO.siteDescription,
  keywords: SEO.keywords,
  openGraph: {
    title: SEO.siteTitle,
    description: SEO.siteDescription,
    type: "website",
    locale: "en_GB",
    siteName: "Ashfield Golf Club",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
