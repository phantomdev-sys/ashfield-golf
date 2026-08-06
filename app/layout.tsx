import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ashfieldgolfcourse.com"),
  title: { default: SEO.siteTitle, template: "%s | Ashfield Golf Club" },
  description: SEO.siteDescription,
  keywords: SEO.keywords,
  manifest: "/site.webmanifest",
  openGraph: {
    title: SEO.siteTitle,
    description: SEO.siteDescription,
    type: "website",
    locale: "en_GB",
    url: "https://www.ashfieldgolfcourse.com",
    siteName: "Ashfield Golf Club",
    // og:image auto-picked from app/opengraph-image.png (width/height/type set by Next)
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.siteTitle,
    description: SEO.siteDescription,
    // twitter:image auto-picked from app/twitter-image.png
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#1c3a2a" };

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
