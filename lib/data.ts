export const COURSE_INFO = {
  name: "Ashfield Golf Club",
  tagline: "The Home of Golf in South Armagh",
  established: 1990,
  yards: 5606,
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

export const HOLES = [
  { hole: 1,  name: "Fáilte",            gentsYards: 337, par: 4, si: 11, ladiesYards: 337, ladiesPar: 4, ladiesSI: 9  },
  { hole: 2,  name: "The Green Knowe",   gentsYards: 334, par: 4, si: 7,  ladiesYards: 334, ladiesPar: 4, ladiesSI: 3  },
  { hole: 3,  name: "Chapel View",       gentsYards: 167, par: 3, si: 15, ladiesYards: 167, ladiesPar: 3, ladiesSI: 11 },
  { hole: 4,  name: "Bourtree Gap",      gentsYards: 389, par: 4, si: 2,  ladiesYards: 389, ladiesPar: 5, ladiesSI: 13 },
  { hole: 5,  name: "The Wishing Well",  gentsYards: 343, par: 4, si: 3,  ladiesYards: 283, ladiesPar: 4, ladiesSI: 7  },
  { hole: 6,  name: "Nelson's March",    gentsYards: 194, par: 3, si: 5,  ladiesYards: 194, ladiesPar: 3, ladiesSI: 1  },
  { hole: 7,  name: "The Mullins",       gentsYards: 254, par: 4, si: 18, ladiesYards: 254, ladiesPar: 4, ladiesSI: 15 },
  { hole: 8,  name: "The Ramparts",      gentsYards: 155, par: 3, si: 16, ladiesYards: 155, ladiesPar: 3, ladiesSI: 17 },
  { hole: 9,  name: "The Drumlins",      gentsYards: 493, par: 5, si: 12, ladiesYards: 445, ladiesPar: 5, ladiesSI: 5  },
  { hole: 10, name: "The Brae",          gentsYards: 344, par: 4, si: 8,  ladiesYards: 314, ladiesPar: 4, ladiesSI: 6  },
  { hole: 11, name: "Rowan Drive",       gentsYards: 360, par: 4, si: 6,  ladiesYards: 310, ladiesPar: 4, ladiesSI: 8  },
  { hole: 12, name: "Whinney Bridge",    gentsYards: 335, par: 4, si: 13, ladiesYards: 295, ladiesPar: 4, ladiesSI: 12 },
  { hole: 13, name: "Cranny",            gentsYards: 142, par: 3, si: 17, ladiesYards: 142, ladiesPar: 3, ladiesSI: 18 },
  { hole: 14, name: "The Three Piers",   gentsYards: 334, par: 4, si: 10, ladiesYards: 334, ladiesPar: 4, ladiesSI: 2  },
  { hole: 15, name: "The Orchard",       gentsYards: 480, par: 5, si: 9,  ladiesYards: 440, ladiesPar: 5, ladiesSI: 10 },
  { hole: 16, name: "The Quiet Corner",  gentsYards: 153, par: 3, si: 14, ladiesYards: 153, ladiesPar: 3, ladiesSI: 16 },
  { hole: 17, name: "Bruach na h-Abhna", gentsYards: 444, par: 4, si: 1,  ladiesYards: 380, ladiesPar: 5, ladiesSI: 14 },
  { hole: 18, name: "Slán Abhaile",      gentsYards: 348, par: 4, si: 4,  ladiesYards: 305, ladiesPar: 4, ladiesSI: 4  },
];

export const OUT_HOLES = HOLES.slice(0, 9);
export const IN_HOLES  = HOLES.slice(9);

export const TOTALS = {
  gentsOut:   HOLES.slice(0,9).reduce((s,h) => s + h.gentsYards, 0),  // 2666
  parOut:     HOLES.slice(0,9).reduce((s,h) => s + h.par, 0),          // 34
  ladiesOut:  HOLES.slice(0,9).reduce((s,h) => s + h.ladiesYards, 0),  // 2558
  ladiesParOut: HOLES.slice(0,9).reduce((s,h) => s + h.ladiesPar, 0),  // 35
  gentsIn:    HOLES.slice(9).reduce((s,h) => s + h.gentsYards, 0),     // 2940
  parIn:      HOLES.slice(9).reduce((s,h) => s + h.par, 0),            // 35
  ladiesIn:   HOLES.slice(9).reduce((s,h) => s + h.ladiesYards, 0),    // 2673
  ladiesParIn: HOLES.slice(9).reduce((s,h) => s + h.ladiesPar, 0),     // 36
  gentsTotal: 5606,
  parTotal:   69,
  ladiesTotal: 5231,
  ladiesParTotal: 71,
};

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
  siteDescription: "Ashfield Golf Club — a 5,606 yard par 69 parkland golf course in South Armagh, Northern Ireland. GUI affiliated since 1992. Visitors welcome. Society packages available. 1 hour from Dublin and Belfast.",
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
