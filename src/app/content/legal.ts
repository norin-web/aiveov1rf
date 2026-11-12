// Privacy Policy and Terms of Use come from the owner and go here VERBATIM.
// Only markup may change: section headings become "## ", bullets become "- ".
// Until the owner sends them (promised 2026-11-12) `body` is null and the page
// shows a short notice with the contact email instead of an invented text.

export type LegalDoc = {
  title: string;
  current: string;
  body: string | null;
  glance?: [string, string][];
  other: { to: string; label: string };
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  current: "privacy",
  body: null,
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms: LegalDoc = {
  title: "Terms of Use",
  current: "terms",
  body: null,
  other: { to: "/privacy", label: "Privacy Policy" },
};
