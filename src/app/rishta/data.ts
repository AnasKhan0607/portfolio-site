/**
 * All content for the /rishta page lives here.
 *
 * Any field set to `null` is skipped entirely at render time — no empty
 * headings, no dangling labels. Fill one in and it appears.
 *
 * STILL TO FILL IN (search for TODO):
 *   - gallery    (portrait currently proxies your X avatar)
 *   - status     (citizen / PR)
 *   - ethnicity
 *   - siblings   (ages + what they do)
 *   - company    (named, or leave as "a legal tech company")
 *   - contentCreation, contactHours, health
 */

export type Fact = { label: string; value: string };

export const profile = {
  name: "Anas Khan",
  tagline: "Software engineer in the GTA. Karachi-born, Canadian-raised.",

  // Cropped square from the original so the circle frames the face — letting
  // CSS centre-crop the full-height photo would have clipped the hair.
  photo: "/rishta/portrait.jpg" as string | null,

  // TODO: 2–4 more photos. e.g. ["/rishta/1.jpg", "/rishta/2.jpg"]
  gallery: [] as string[],

  about: [
    "I'm an outgoing guy — I like to joke around and have fun — but I'm genuinely driven when it comes to my work. I love my career, and the long-term goal is to build my own company in tech.",
    "I try a lot of things on that front, including making tech content on the side. Outside of work I'm usually at the gym or playing sports, and I love to travel — going to a new city and actually getting a feel for the culture is my favourite way to spend time off.",
  ],
};

/** Hero strip — the four things people scan first. */
export const quickFacts: Fact[] = [
  { label: "Age", value: "25" },
  { label: "Height", value: "5'6\"" },
  { label: "Based in", value: "GTA, Ontario" },
  { label: "Work", value: "Software Engineer" },
];

export const personal: (Fact | null)[] = [
  { label: "Date of birth", value: "25 years old" },
  { label: "Height", value: "5'6\"" },
  { label: "Born", value: "Karachi, Pakistan" },
  { label: "Raised", value: "Canada" },
  { label: "Currently living", value: "Greater Toronto Area, Ontario" },
  { label: "Languages", value: "Urdu, English" },
  null, // TODO: { label: "Status", value: "Canadian citizen" }
  null, // TODO: { label: "Background", value: "Urdu-speaking" }
];

export const deen = {
  sect: "Sunni",
  practice:
    "I pray my five daily salah and read Qur'an when I can. I try my best to keep strengthening my connection to the deen, and I know I have room to grow.",
  looking:
    "I would love a wife I can work on my deen with and grow alongside.",
  family: "From a religious family, alhamdulillah.",
};

export const family: (Fact | null)[] = [
  { label: "Father", value: "Mechanic" },
  { label: "Mother", value: "Homemaker" },
  {
    label: "Siblings",
    value:
      "Four — I'm the middle of five. An older brother and older sister, both married, and a younger brother and younger sister.",
  },
  null, // TODO: sibling ages + occupations — families read this part closely
];

export const education: (Fact | null)[] = [
  { label: "Degree", value: "B.Sc. Computer Science" },
  { label: "University", value: "University of Toronto" },
  { label: "Role", value: "Software Engineer" },
  { label: "Industry", value: "Legal tech" }, // TODO: name the company if you want
  null, // TODO: { label: "Also", value: "Create tech content on the side" }
];

/**
 * The reveal branches on the answer: "yes" gets the number, "no" gets sent on
 * its way. `reveal` and `note` are both optional — omit them and the option
 * shows only its quip.
 */
export const income = {
  question: "Do you like the rest of the profile?",
  options: [
    {
      text: "Yes",
      quip: "Good answer.",
      // 100k CAD, converted into rupiah for no reason at all. At ~12,820 IDR
      // to the dollar (29 Jul 2026) that is ~1.282 billion. A snapshot, not a
      // live rate — the joke is the digit count, so drift does not matter.
      reveal: "Rp 1,282,000,000",
      note: "Indonesian rupiah. Nobody specified a currency.",
    },
    {
      text: "No",
      quip: "Then the number was never going to change your mind.",
    },
  ] as { text: string; quip: string; reveal?: string; note?: string }[],
};

export const lookingFor: Fact[] = [
  { label: "Age", value: "21–25" },
  { label: "Education", value: "Any level" },
  { label: "Location", value: "Greater Toronto Area — willing to relocate" },
  { label: "Hijab", value: "Preference for a sister who wears hijab" },
  {
    label: "Work",
    value:
      "Completely fine with her working, with family as the priority — ideally remote rather than long hours outside.",
  },
  { label: "Studying", value: "More than welcome to continue her studies" },
  { label: "Living", value: "Our own home, not a joint family household" },
  { label: "Timeline", value: "Open to marriage within the next couple of years" },
];

// TODO: want an explicit line here? e.g. "We'd prefer a simple sunnah nikah —
// no dowry expected, nothing extravagant." Set to null to hide the section.
export const weddingNote: string | null =
  "We'd prefer a simple nikah — nothing extravagant, in keeping with the sunnah.";

export const contact = {
  handledBy: "My mother, Lubna Khalid, handles all inquiries.",
  name: "Lubna Khalid",
  phoneDisplay: "(647) 720-5135",
  phoneE164: "16477205135",
  whatsappMessage: "Assalamu alaikum, I'm reaching out about Anas's rishta.",
  hours: null as string | null, // TODO: best times to call
};
