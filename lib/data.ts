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

export const MEMBERSHIP_RATES = [
  { category: "Adult Male",                        price: "£500", note: "or € rate" },
  { category: "Adult Female",                      price: "£300", note: "or € rate" },
  { category: "Husband and Wife",                  price: "£550", note: "or € rate" },
  { category: "5 Day Member",                      price: "£250", note: "or € rate" },
  { category: "Father and 1 child (U16)",          price: "£500", note: "or € rate" },
  { category: "Father and 2 children (U16)",       price: "£550", note: "or € rate" },
  { category: "Father and 3 children (U16)",       price: "£600", note: "or € rate" },
  { category: "Mother and 1 child (U16)",          price: "£350", note: "or € rate" },
  { category: "Mother and 2 children (U16)",       price: "£400", note: "or € rate" },
  { category: "Mother and 3 children (U16)",       price: "£450", note: "or € rate" },
  { category: "Family (Father, Mother, 3 x U16)", price: "£600", note: "or € rate" },
  { category: "Senior Citizen",                    price: "£300", note: "or € rate" },
  { category: "Age 21–23",                         price: "£300", note: "or € rate" },
  { category: "Age 16–20",                         price: "£200", note: "or € rate" },
  { category: "Under 16s",                         price: "£100", note: "or € rate" },
  { category: "Distance Member (40+ miles)",       price: "£300", note: "or € rate" },
];

export const GREEN_FEES = [
  { type: "Weekdays",                        price: "£15", note: "Mon–Fri" },
  { type: "Weekends & Bank Holidays",        price: "£20", note: "Sat, Sun & BH" },
  { type: "Students & Seniors",             price: "£10", note: "ID required" },
  { type: "Juveniles (U16)",                price: "£10", note: "All week" },
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
