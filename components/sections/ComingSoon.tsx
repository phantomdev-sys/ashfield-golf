import Link from "next/link";

// Intentional, brand-styled "coming soon" block shared by placeholder pages.
export default function ComingSoon({
  icon,
  message,
  cta,
  children,
}: {
  icon: React.ReactNode;
  message: string;
  cta?: { label: string; href: string };
  children?: React.ReactNode; // optional content rendered above the card, same cream section
}) {
  return (
    <div style={{ background: "#f5f0e8", padding: "4rem 2rem 5rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {children && <div style={{ marginBottom: "2.5rem" }}>{children}</div>}
        <div style={{ background: "#fff", border: "1px solid rgba(26,58,42,0.1)", borderTop: "3px solid #c9a84c", borderRadius: 4, padding: "3.5rem 2.5rem", textAlign: "center", boxShadow: "0 2px 16px rgba(26,58,42,0.06)" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(201,168,76,0.12)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", color: "#c9a84c" }}>
            {icon}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "#1a3a2a", margin: "0 0 0.75rem" }}>Watch This Space</h2>
          <div style={{ width: 48, height: 2, background: "#c9a84c", margin: "0 auto 1.5rem" }} />
          <p style={{ fontSize: 16, color: "#3d4f3a", lineHeight: 1.7, maxWidth: 480, margin: "0 auto", fontWeight: 300 }}>{message}</p>
          {cta && (
            <Link href={cta.href} style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: "1.75rem", color: "#c9a84c", fontSize: 15, fontWeight: 500, textDecoration: "none" }}>
              {cta.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
