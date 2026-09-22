import { COURSE_INFO } from "@/lib/data";

// Shown when a submission reaches us but the email could not be sent
// (500 / 502 / network). Validation errors keep their own field-level wording.
const linkStyle = { color: "inherit", textDecoration: "underline" };

export default function SendFailureMessage() {
  return (
    <>
      We couldn&apos;t send your message. Please call the club on{" "}
      <a href={`tel:${COURSE_INFO.phone.replace(/\s/g, "")}`} style={linkStyle}>
        {COURSE_INFO.phone}
      </a>{" "}
      or email{" "}
      <a href={`mailto:${COURSE_INFO.emailGeneral}`} style={linkStyle}>
        {COURSE_INFO.emailGeneral}
      </a>
      .
    </>
  );
}
