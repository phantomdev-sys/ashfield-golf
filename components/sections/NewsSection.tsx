"use client";
export default function NewsSection() {
  const items = [
    { tag: "Competition", title: "Winter League 2024", body: "The Winter League is well underway with excellent scoring across all three divisions. Check the results board for the latest standings.", date: "Nov 2024" },
    { tag: "Membership", title: "2025 Membership Now Open", body: "Applications for 2025 membership are now being accepted. Refer a new member and receive a £50 discount on your renewal fee.", date: "Jan 2025" },
    { tag: "Juniors", title: "Junior Coaching Returns April", body: "Saturday morning junior coaching sessions resume in April with our club professional. All juniors welcome — no experience necessary.", date: "Mar 2025" },
  ];
  return (
    <section style={{ background: "#ede5d8", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#4a8c62", fontWeight: 500 }}>Club News</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 36px)", color: "#1a3a2a", margin: "0.5rem 0 2.5rem", lineHeight: 1.2 }}>
          Latest from <em style={{ color: "#c9a84c" }}>Ashfield</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {items.map((n, i) => (
            <div key={i} style={{ borderTop: "2px solid #4a8c62", paddingTop: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#4a8c62", fontWeight: 500 }}>{n.tag}</span>
                <span style={{ fontSize: 12, color: "#6b7c68" }}>{n.date}</span>
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#1a3a2a", marginBottom: "0.5rem" }}>{n.title}</h4>
              <p style={{ fontSize: 14, color: "#3d4f3a", lineHeight: 1.6 }}>{n.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
