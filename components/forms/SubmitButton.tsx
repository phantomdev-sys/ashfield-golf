// Shared submit button: forest-green → gold on hover, disabled while sending.
export default function SubmitButton({ idleLabel, submitting }: { idleLabel: string; submitting: boolean }) {
  return (
    <>
      <button type="submit" className="agc-submit" disabled={submitting} aria-busy={submitting}>
        {submitting ? "Sending…" : idleLabel}
      </button>
      <style>{`
        .agc-submit{width:100%;padding:13px 20px;font-size:15px;font-weight:500;font-family:inherit;border:none;border-radius:2px;background:#1a3a2a;color:#f5f0e8;cursor:pointer;transition:background .2s,color .2s;}
        .agc-submit:hover:not(:disabled){background:#c9a84c;color:#1a3a2a;}
        .agc-submit:disabled{background:rgba(26,58,42,0.5);color:rgba(245,240,232,0.7);cursor:not-allowed;}
      `}</style>
    </>
  );
}
