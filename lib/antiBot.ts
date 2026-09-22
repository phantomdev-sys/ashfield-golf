// Shared bot heuristics for the public form endpoints (/api/contact,
// /api/membership). Imported by both the route handlers and the client forms
// so the field names can never drift apart.
//
// Neither check is cryptographic — they stop the commodity spam bots that were
// abusing the auto-reply, not a determined attacker who reads the bundle.

/** Hidden field name. Neutral-sounding so bots are tempted to fill it in. */
export const HONEYPOT_FIELD = "company_website";

/**
 * Field carrying how long the form was on screen, in milliseconds.
 *
 * The client computes this from two readings of its own clock, so a skewed or
 * badly-set device clock cancels out. Sending a raw render timestamp instead
 * would let a fast client clock produce a negative elapsed time and get a real
 * submission silently dropped.
 */
export const ELAPSED_FIELD = "elapsedMs";

/** A human cannot complete either form faster than this. */
export const MIN_SUBMIT_MS = 3000;

export type BotReason = "honeypot" | "invalid-elapsed" | "too-fast";

/**
 * Returns a reason string when the submission looks automated, else null.
 * Callers must treat a non-null result as "silently discard": respond 200 and
 * send no email, so the bot cannot tell it was filtered.
 */
export function detectBot(body: Record<string, unknown>): BotReason | null {
  if (String(body[HONEYPOT_FIELD] ?? "").trim() !== "") return "honeypot";

  // Missing, wrong type, blank, non-numeric or negative are all nonsense
  // values — a real form always sends a non-negative number.
  const raw = body[ELAPSED_FIELD];
  if (typeof raw !== "number" && typeof raw !== "string") return "invalid-elapsed";
  if (typeof raw === "string" && raw.trim() === "") return "invalid-elapsed";
  const elapsed = Number(raw);
  if (!Number.isFinite(elapsed) || elapsed < 0) return "invalid-elapsed";

  if (elapsed < MIN_SUBMIT_MS) return "too-fast";

  return null;
}

/** Logs a blocked submission. Deliberately carries no submitted content. */
export function logBlocked(route: string, reason: BotReason): void {
  console.warn("Bot submission blocked", { route, reason });
}
