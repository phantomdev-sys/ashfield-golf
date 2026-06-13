import type { CSSProperties } from "react";

// Shared form styling — forest-green / cream / gold palette.

export const fieldWrap: CSSProperties = { marginBottom: "1.1rem" };

export const labelStyle: CSSProperties = {
  display: "block", fontSize: 13, color: "#3d4f3a", fontWeight: 500,
  marginBottom: 6, letterSpacing: "0.3px",
};

const inputBase: CSSProperties = {
  width: "100%", padding: "11px 13px", fontSize: 15, fontFamily: "inherit",
  color: "#1a2218", background: "#fff", borderRadius: 2, outline: "none",
  boxSizing: "border-box",
};

// Required-field error state = gold border (per design).
export function inputStyle(hasError: boolean): CSSProperties {
  return {
    ...inputBase,
    border: hasError ? "1px solid #c9a84c" : "1px solid rgba(26,58,42,0.2)",
    background: hasError ? "#fffdf3" : "#fff",
  };
}

export function textareaStyle(hasError: boolean): CSSProperties {
  return { ...inputStyle(hasError), minHeight: 120, resize: "vertical", lineHeight: 1.5 };
}

export const errorTextStyle: CSSProperties = {
  display: "block", marginTop: 5, fontSize: 13, color: "#b4452f",
};

export const successBanner: CSSProperties = {
  padding: "12px 14px", borderRadius: 2, background: "rgba(45,90,63,0.1)",
  border: "1px solid #2d5a3f", color: "#1f4030", fontSize: 14, lineHeight: 1.55,
  marginBottom: "1.25rem",
};

export const errorBanner: CSSProperties = {
  padding: "12px 14px", borderRadius: 2, background: "rgba(176,69,47,0.08)",
  border: "1px solid #b4452f", color: "#8f3322", fontSize: 14, lineHeight: 1.55,
  marginBottom: "1.25rem",
};
