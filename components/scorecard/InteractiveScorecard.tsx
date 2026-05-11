"use client";
import { useState } from "react";
import { HOLES, TOTALS } from "@/lib/data";
import { RotateCcw, Printer } from "lucide-react";

type TeeType = "gents" | "ladies";

function calcStableford(score: number, par: number, si: number, handicap: number): number {
  if (score === 0) return 0;
  const shots = Math.floor(handicap / 18) + (si <= (handicap % 18) ? 1 : 0);
  const net = score - par - shots;
  const points = 2 - net;
  return Math.max(0, points);
}

export default function InteractiveScorecard() {
  const [tee, setTee]           = useState<TeeType>("gents");
  const [handicap, setHandicap] = useState(18);
  const [scores, setScores]     = useState<Record<number, number>>({});

  const setScore = (hole: number, val: string) => {
    const n = parseInt(val);
    setScores((prev) => ({ ...prev, [hole]: isNaN(n) ? 0 : n }));
  };

  const totalScoreOut = HOLES.slice(0,9).reduce((s,h) => s + (scores[h.hole] || 0), 0);
  const totalScoreIn  = HOLES.slice(9).reduce((s,h) => s + (scores[h.hole] || 0), 0);
  const totalScore    = totalScoreOut + totalScoreIn;
  const parOut        = tee === "gents" ? TOTALS.parOut : TOTALS.ladiesParOut;
  const parIn         = tee === "gents" ? TOTALS.parIn  : TOTALS.ladiesParIn;
  const parTotal      = tee === "gents" ? TOTALS.parTotal : TOTALS.ladiesParTotal;
  const sfOut         = HOLES.slice(0,9).reduce((s,h) => s + calcStableford(scores[h.hole]||0, h.par, tee === "gents" ? h.si : h.ladiesSI, handicap), 0);
  const sfIn          = HOLES.slice(9).reduce((s,h) => s + calcStableford(scores[h.hole]||0, h.par, tee === "gents" ? h.si : h.ladiesSI, handicap), 0);
  const sfTotal       = sfOut + sfIn;
  const vsParTotal    = totalScore > 0 ? totalScore - parTotal : 0;

  const reset = () => setScores({});

  const thStyle: React.CSSProperties = {
    padding: "10px 6px", fontSize: 11, letterSpacing: "1px", textTransform: "uppercase",
    color: "#c9a84c", background: "rgba(201,168,76,0.12)", fontWeight: 500, textAlign: "center",
    borderBottom: "1px solid rgba(201,168,76,0.2)",
  };
  const tdStyle: React.CSSProperties = {
    padding: "9px 6px", fontSize: 13, color: "rgba(245,240,232,0.85)",
    borderBottom: "1px solid rgba(255,255,255,0.05)", textAlign: "center",
  };
  const subtotalStyle: React.CSSProperties = {
    ...tdStyle, background: "rgba(201,168,76,0.1)", color: "#c9a84c", fontWeight: 500,
    borderBottom: "2px solid rgba(201,168,76,0.3)",
  };

  const renderRows = (holeSlice: typeof HOLES) => holeSlice.map((h) => {
    const par   = h.par;
    const si    = tee === "gents" ? h.si : h.ladiesSI;
    const score = scores[h.hole] || 0;
    const sf    = calcStableford(score, par, si, handicap);
    const vsPar = score > 0 ? score - par : null;

    return (
      <tr key={h.hole}>
        <td style={{ ...tdStyle, fontWeight: 500, color: "#c9a84c" }}>{h.hole}</td>
        <td style={{ ...tdStyle, textAlign: "left", color: "rgba(245,240,232,0.9)", fontStyle: "italic", fontSize: 12 }}>{h.name}</td>
        <td style={tdStyle}>{tee === "gents" ? h.gentsYards : h.ladiesYards}</td>
        <td style={tdStyle}>{par}</td>
        <td style={tdStyle}>{si}</td>
        <td style={{ ...tdStyle, padding: "6px 4px" }}>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={15}
            value={score || ""}
            onChange={(e) => setScore(h.hole, e.target.value)}
            placeholder="—"
            style={{
              width: 44, textAlign: "center",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: 2, color: "#f5f0e8",
              fontSize: 16, padding: "6px 2px",
              outline: "none", WebkitAppearance: "none",
            }}
          />
        </td>
        <td style={{ ...tdStyle, color: vsPar === null ? "transparent" : vsPar < 0 ? "#e8c97a" : vsPar === 0 ? "rgba(245,240,232,0.85)" : "#f09595" }}>
          {vsPar === null ? "—" : vsPar === 0 ? "E" : vsPar > 0 ? `+${vsPar}` : vsPar}
        </td>
        <td style={{ ...tdStyle, color: sf > 2 ? "#e8c97a" : sf > 0 ? "rgba(245,240,232,0.85)" : "rgba(245,240,232,0.35)" }}>
          {score > 0 ? sf : "—"}
        </td>
      </tr>
    );
  });

  const fmtVsPar = (score: number, par: number) => {
    const d = score - par;
    return d === 0 ? "E" : d > 0 ? `+${d}` : `${d}`;
  };

  return (
    <div style={{ background: "#1a3a2a", borderRadius: 4, overflow: "hidden" }}>

      {/* Controls */}
      <div style={{ padding: "1.25rem", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
        {/* Tee + Handicap row */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          <div style={{ display: "flex", gap: 0 }}>
            {(["gents","ladies"] as TeeType[]).map((t) => (
              <button key={t} onClick={() => setTee(t)} style={{
                padding: "9px 18px", fontSize: 13, cursor: "pointer",
                background: tee === t ? "#c9a84c" : "transparent",
                color: tee === t ? "#1a3a2a" : "rgba(245,240,232,0.6)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: t === "gents" ? "2px 0 0 2px" : "0 2px 2px 0",
                fontWeight: tee === t ? 500 : 400,
              }}>
                {t === "gents" ? "Men's" : "Ladies'"}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <label style={{ fontSize: 13, color: "rgba(245,240,232,0.65)" }}>Handicap:</label>
            <input type="number" min={0} max={54} value={handicap}
              onChange={(e) => setHandicap(Math.max(0, Math.min(54, parseInt(e.target.value) || 0)))}
              style={{ width: 56, textAlign: "center", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 2, color: "#f5f0e8", fontSize: 14, padding: "6px" }} />
          </div>
          <div style={{ display: "flex", gap: "0.5rem", marginLeft: "auto" }}>
            <button onClick={reset} style={{ background: "transparent", border: "1px solid rgba(245,240,232,0.15)", borderRadius: 2, padding: "7px 12px", color: "rgba(245,240,232,0.5)", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
              <RotateCcw size={14} /> Reset
            </button>
            <button onClick={() => window.print()} style={{ background: "transparent", border: "1px solid rgba(245,240,232,0.15)", borderRadius: 2, padding: "7px 12px", color: "rgba(245,240,232,0.5)", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
              <Printer size={14} /> Print
            </button>
          </div>
        </div>

        {/* Summary pills — only show when scores entered */}
        {totalScore > 0 && (
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <div style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 2, padding: "6px 14px", textAlign: "center" }}>
              <span style={{ fontSize: 10, color: "rgba(245,240,232,0.5)", display: "block", letterSpacing: "1px", textTransform: "uppercase" }}>Gross</span>
              <span style={{ fontSize: 22, color: "#c9a84c", fontFamily: "'Playfair Display', serif" }}>{totalScore}</span>
            </div>
            <div style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 2, padding: "6px 14px", textAlign: "center" }}>
              <span style={{ fontSize: 10, color: "rgba(245,240,232,0.5)", display: "block", letterSpacing: "1px", textTransform: "uppercase" }}>vs Par</span>
              <span style={{ fontSize: 22, color: vsParTotal > 0 ? "#f09595" : vsParTotal < 0 ? "#e8c97a" : "#f5f0e8", fontFamily: "'Playfair Display', serif" }}>
                {vsParTotal === 0 ? "E" : vsParTotal > 0 ? `+${vsParTotal}` : vsParTotal}
              </span>
            </div>
            <div style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2, padding: "6px 14px", textAlign: "center" }}>
              <span style={{ fontSize: 10, color: "rgba(245,240,232,0.5)", display: "block", letterSpacing: "1px", textTransform: "uppercase" }}>Stableford</span>
              <span style={{ fontSize: 22, color: "#e8c97a", fontFamily: "'Playfair Display', serif" }}>{sfTotal} pts</span>
            </div>
          </div>
        )}
      </div>

      {/* Scrollable table */}
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 380 }}>
          <thead>
            <tr>
              <th style={thStyle}>#</th>
              <th style={{ ...thStyle, textAlign: "left" }}>Name</th>
              <th style={thStyle}>Yds</th>
              <th style={thStyle}>Par</th>
              <th style={thStyle}>SI</th>
              <th style={thStyle}>Score</th>
              <th style={thStyle}>+/-</th>
              <th style={thStyle}>Pts</th>
            </tr>
          </thead>
          <tbody>
            {renderRows(HOLES.slice(0,9))}
            <tr>
              <td colSpan={2} style={subtotalStyle}>OUT</td>
              <td style={subtotalStyle}>{tee === "gents" ? TOTALS.gentsOut : TOTALS.ladiesOut}</td>
              <td style={subtotalStyle}>{parOut}</td>
              <td style={subtotalStyle}>—</td>
              <td style={subtotalStyle}>{totalScoreOut || "—"}</td>
              <td style={subtotalStyle}>{totalScoreOut > 0 ? fmtVsPar(totalScoreOut, parOut) : "—"}</td>
              <td style={subtotalStyle}>{sfOut > 0 ? `${sfOut}` : "—"}</td>
            </tr>
            {renderRows(HOLES.slice(9))}
            <tr>
              <td colSpan={2} style={subtotalStyle}>IN</td>
              <td style={subtotalStyle}>{tee === "gents" ? TOTALS.gentsIn : TOTALS.ladiesIn}</td>
              <td style={subtotalStyle}>{parIn}</td>
              <td style={subtotalStyle}>—</td>
              <td style={subtotalStyle}>{totalScoreIn || "—"}</td>
              <td style={subtotalStyle}>{totalScoreIn > 0 ? fmtVsPar(totalScoreIn, parIn) : "—"}</td>
              <td style={subtotalStyle}>{sfIn > 0 ? `${sfIn}` : "—"}</td>
            </tr>
            <tr style={{ background: "rgba(201,168,76,0.08)" }}>
              <td colSpan={2} style={{ ...subtotalStyle, fontSize: 14, color: "#e8c97a" }}>TOTAL</td>
              <td style={{ ...subtotalStyle, color: "#e8c97a" }}>{tee === "gents" ? TOTALS.gentsTotal : TOTALS.ladiesTotal}</td>
              <td style={{ ...subtotalStyle, color: "#e8c97a" }}>{parTotal}</td>
              <td style={{ ...subtotalStyle, color: "#e8c97a" }}>—</td>
              <td style={{ ...subtotalStyle, color: "#e8c97a", fontSize: 15 }}>{totalScore || "—"}</td>
              <td style={{ ...subtotalStyle, color: "#e8c97a" }}>{totalScore > 0 ? fmtVsPar(totalScore, parTotal) : "—"}</td>
              <td style={{ ...subtotalStyle, color: "#e8c97a", fontSize: 15 }}>{sfTotal > 0 ? `${sfTotal} pts` : "—"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ padding: "1rem 1.25rem", fontSize: 12, color: "rgba(245,240,232,0.3)" }}>
        Please repair divots, pitch marks, and rake bunkers. Avoid slow play at all times.
      </p>
    </div>
  );
}