import type { Metadata } from "next";
import { COURSE_INFO } from "@/lib/data";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ashfield Golf Club — phone, email and location details for South Armagh's parkland golf course on Cregganduff Road, Newry.",
};

const contactItems = [
  { label: "Address", value: COURSE_INFO.address },
  { label: "Phone", value: COURSE_INFO.phone, href: `tel:${COURSE_INFO.phone.replace(/\s/g,"")}` },
  { label: "Email", value: COURSE_INFO.emailGeneral, href: `mailto:${COURSE_INFO.emailGeneral}` },
  { label: "Facebook", value: "Follow us on Facebook", href: COURSE_INFO.facebook },
];

const icons = [MapPin, Phone, Mail, ExternalLink];

export default function ContactPage() {
  return (
    <>
      <div style={{ background: "#1a3a2a", padding: "5rem 2rem 3rem", marginTop: 68 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Get in Touch</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#f5f0e8", margin: "0.5rem 0 1rem" }}>
            Contact <em style={{ color: "#c9a84c" }}>Ashfield</em>
          </h1>
        </div>
      </div>
      <div style={{ background: "#f5f0e8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div>
              <div style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", padding: "2rem", borderRadius: 2, marginBottom: "1.5rem" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#1a3a2a", marginBottom: "1.5rem" }}>Clubhouse Details</h2>
                {contactItems.map((item, i) => {
                  const Icon = icons[i];
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                      <Icon size={18} style={{ color: "#c9a84c", marginTop: 2, flexShrink: 0 }} />
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontSize: 15, color: "#1a3a2a", textDecoration: "none" }}>{item.value}</a>
                        : <span style={{ fontSize: 15, color: "#1a3a2a", lineHeight: 1.4 }}>{item.value}</span>}
                    </div>
                  );
                })}
              </div>
              <div style={{ background: "#1a3a2a", padding: "1.5rem", borderRadius: 2 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#c9a84c", marginBottom: "0.75rem" }}>Getting Here</h3>
                <p style={{ fontSize: 14, color: "rgba(245,240,232,0.75)", lineHeight: 1.7 }}>
                  Located on Cregganduff Road, Newry, approximately 1 hour from Dublin Airport and 1 hour from Belfast. Follow signs for Newtownhamilton from Newry town centre.
                </p>
              </div>
            </div>
            <div>
              <div style={{ background: "#2d5a3f", height: 300, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <p style={{ color: "rgba(245,240,232,0.4)", fontSize: 14 }}>Add Google Maps embed here</p>
              </div>
              <div style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "3px solid #c9a84c", padding: "2rem", borderRadius: 2 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#1a3a2a", marginBottom: "1rem" }}>Send a Message</h3>
                <p style={{ fontSize: 14, color: "#6b7c68", marginBottom: "1rem" }}>For bookings, membership or society days — the quickest way to reach us is by phone.</p>
                <a href={`mailto:${COURSE_INFO.emailGeneral}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1a3a2a", color: "#f5f0e8", padding: "12px 24px", borderRadius: 2, fontSize: 14, textDecoration: "none" }}>
                  <Mail size={16} /> Email the Club
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
