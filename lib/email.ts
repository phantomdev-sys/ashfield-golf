// Branded HTML email helpers shared by the contact + membership API routes.
// All user-provided values MUST be passed through esc() before interpolation.

export function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// A label/value row for the club-facing notification emails.
export function fieldRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 16px 8px 0;font-size:12px;color:#6b7c68;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;vertical-align:top;">${esc(label)}</td>
    <td style="padding:8px 0;font-size:15px;color:#1a2218;vertical-align:top;">${esc(value) || "—"}</td>
  </tr>`;
}

// Wraps content in the club's forest-green / cream / gold shell.
export function emailShell({ heading, bodyHtml }: { heading: string; bodyHtml: string }): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:Arial,Helvetica,sans-serif;color:#1a2218;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="background:#1a3a2a;padding:24px 28px;border-radius:6px 6px 0 0;">
      <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#c9a84c;">Ashfield Golf Club</div>
      <div style="font-size:22px;color:#f5f0e8;margin-top:4px;font-family:Georgia,'Times New Roman',serif;">${esc(heading)}</div>
    </div>
    <div style="background:#ffffff;padding:24px 28px;border:1px solid #e6ddcf;border-top:none;">
      ${bodyHtml}
    </div>
    <div style="background:#0f2318;padding:16px 28px;border-radius:0 0 6px 6px;color:rgba(245,240,232,0.7);font-size:12px;line-height:1.7;">
      Ashfield Golf Club &middot; Cregganduff Road, Newry, Co. Down, BT35 0NA<br/>
      Tel: 028 30 868180 &middot; ashfieldgolfclub@gmail.com
    </div>
  </div>
</body>
</html>`;
}
