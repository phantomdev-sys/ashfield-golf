export const COURSE_INFO = {
  name: "Ashfield Golf Club",
  tagline: "The Home of Golf in South Armagh",
  established: 1990,
  yards: 5620,
  par: 69,
  holes: 18,
  address: "Cregganduff Road, Newry, Co. Down, BT35 0NA",
  phone: "028 30 868180",
  fax: "028 30 868611",
  email: "secretary@ashfieldgolfcourse.com",
  emailGeneral: "ashfieldgolfclub@gmail.com",
  facebook: "https://www.facebook.com/ashfieldgolfcourse",
  coordinates: { lat: 54.17, lng: -6.38 },
};

// Hole / tee data lives in lib/holes.ts (HOLES + TEES) — the verified
// three-tee source. Import scorecard/course data from there, not here.

// Confirmed 2026 membership rates.
export const MEMBERSHIP_RATES = [
  { category: "Men",             price: "£500" },
  { category: "Ladies",          price: "£400" },
  { category: "Seniors",         price: "£400" },
  { category: "Students",        price: "£250" },
  { category: "Juveniles (U13)", price: "£100" },
  { category: "Juveniles",       price: "£150" },
];

// Confirmed 2026 green fees. `featured` drives the gold card highlight on the
// homepage snapshot and the visitors page so the two stay in sync.
export const GREEN_FEES = [
  { type: "Weekends",        price: "£25", note: "Fri–Sun & Bank Holidays", featured: true },
  { type: "Monday–Thursday", price: "£20", note: "Mon–Thu",                 featured: false },
];

export interface Sponsor {
  name: string;
  descriptor: string;
  url: string;
  logo: string;
  theme: "light" | "dark";
  logoHeight: number; // per-sponsor rendered-height cap in px (logos differ in resolution)
}

// Club sponsors — source of truth for the /sponsors page.
export const SPONSORS: Sponsor[] = [
  { name: "ASEE Group",                        descriptor: "Mechanical & Electrical Engineering", url: "https://www.aseeltd.com/", logo: "/images/sponsors/asee.png",    theme: "light", logoHeight: 44 },
  { name: "Corlatt Construction Services Ltd.", descriptor: "Construction Services",               url: "https://corlatt.com/",    logo: "/images/sponsors/corlatt.png", theme: "dark",  logoHeight: 72 },
];

export const LOCAL_RULES = [
  "If a ball lies through the green, the point on the course nearest to where the ball lies shall be determined which is not nearer the hole, avoids interference and is not in a hazard or on the putting green. The player shall lift the ball and drop it within one club length of the point thus determined.",
  "If the ball strikes the power lines, the player must disregard the stroke, abandon the ball and play another ball as near to the spot from which the original ball was played.",
  "If a staked tree, pylon, or pylon base interferes with a player's stance or the area of their intended swing, the ball must be lifted without penalty and dropped. The ball may be cleaned when so lifted.",
];

// SEO keywords for Northern Ireland golf
export const SEO = {
  siteTitle: "Ashfield Golf Club | South Armagh, Northern Ireland",
  siteDescription: "Ashfield Golf Club — a 5,620 yard par 69 parkland golf course in South Armagh, Northern Ireland. GUI affiliated since 1992. Visitors welcome. Society packages available. 1 hour from Dublin and Belfast.",
  keywords: [
    "golf club South Armagh",
    "golf course Newry",
    "parkland golf Northern Ireland",
    "golf club Northern Ireland",
    "golf society packages Northern Ireland",
    "GUI affiliated golf Ireland",
    "golf membership Newry",
    "golf days County Down",
    "golf lessons South Armagh",
    "Ashfield Golf Club",
    "golf course County Down",
    "parkland golf course Ireland",
    "visitor golf Northern Ireland",
    "golf society Ireland",
    "18 hole golf course Newry",
  ],
};
