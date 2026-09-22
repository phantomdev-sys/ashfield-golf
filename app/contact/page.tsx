import type { Metadata } from "next";
import { COURSE_INFO } from "@/lib/data";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ashfield Golf Club — phone, email and location details for South Armagh's parkland golf course on Cregganduff Road, Newry.",
};

const contactItems = [
  { icon: MapPin,       value: COURSE_INFO.address },
  { icon: Phone,        value: COURSE_INFO.phone,        href: `tel:${COURSE_INFO.phone.replace(/\s/g,"")}` },
  { icon: Mail,         value: COURSE_INFO.emailGeneral, href: `mailto:${COURSE_INFO.emailGeneral}` },
  { icon: ExternalLink, value: "Follow us on Facebook",  href: COURSE_INFO.facebook, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/course/fairway-rise-conifers.webp"
        scrim="linear-gradient(100deg, rgba(26,58,42,0.66) 0%, rgba(26,58,42,0.61) 47%, rgba(26,58,42,0.15) 100%)"
        eyebrow="Get in Touch"
        title={<>Contact <em style={{ color: "#c9a84c" }}>Ashfield</em></>}
      />
      <div style={{ background: "#f5f0e8", padding: "3rem 1.25rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            <div>
              <div style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", padding: "2rem", borderRadius: 2, marginBottom: "1.5rem" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#1a3a2a", marginBottom: "1.5rem" }}>Clubhouse Details</h2>
                {contactItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                      <Icon size={17} style={{ color: "#c9a84c", marginTop: 2, flexShrink: 0 }} />
                      {item.href
                        ? <a href={item.href} target={item.external ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontSize: 15, color: "#1a3a2a", textDecoration: "none" }}>{item.value}</a>
                        : <span style={{ fontSize: 15, color: "#1a3a2a", lineHeight: 1.5 }}>{item.value}</span>}
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
              {/* Google Maps embed */}
              <div style={{ borderRadius: 2, overflow: "hidden", marginBottom: "1.5rem" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.514646951762!2d-6.5807538234187675!3d54.11140057252104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860b871c8d240f3%3A0x24e2923e798e762e!2sAshfield%20Golf%20Course!5e1!3m2!1sen!2suk!4v1778530188740!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "3px solid #c9a84c", padding: "1.75rem", borderRadius: 2 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#1a3a2a", marginBottom: "0.75rem" }}>Send a Message</h3>
                <p style={{ fontSize: 14, color: "#6b7c68", lineHeight: 1.6, marginBottom: "1.25rem" }}>Fill in the form below and we&apos;ll get back to you shortly. For urgent enquiries, please call <a href="tel:02830868180" style={{ color: "#1a3a2a", fontWeight: 500, textDecoration: "none" }}>028 30 868180</a>.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
