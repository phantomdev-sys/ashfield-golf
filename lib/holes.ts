// Ashfield Golf Club — official scorecard data
// Source: physical card (entry no. 69445), verified against card totals.
// Three tees: White (M, CR 67.1 / Slope 108), Green (M, CR 66.2 / Slope 107),
// Ladies (L, CR 68.9 / Slope 114).
// NOTE: White & Green share Par and Stroke Index; only yardage differs.
// Ladies has its own Par and Stroke Index (and its own yardages).

export interface TeeData {
  yards: number;
  par: number;
  si: number; // stroke index
}

export interface Hole {
  number: number;
  name: string;
  white: TeeData;
  green: TeeData;
  ladies: TeeData;
}

export const HOLES: Hole[] = [
  { number: 1,  name: "Fáilte",            white: { yards: 337, par: 4, si: 12 }, green: { yards: 327, par: 4, si: 12 }, ladies: { yards: 337, par: 4, si: 9 }  },
  { number: 2,  name: "The Green Knowe",   white: { yards: 334, par: 4, si: 8 },  green: { yards: 324, par: 4, si: 8 },  ladies: { yards: 334, par: 4, si: 3 }  },
  { number: 3,  name: "Chapel View",       white: { yards: 167, par: 3, si: 14 }, green: { yards: 157, par: 3, si: 14 }, ladies: { yards: 167, par: 3, si: 11 } },
  { number: 4,  name: "Bourtree Gap",      white: { yards: 389, par: 4, si: 4 },  green: { yards: 379, par: 4, si: 4 },  ladies: { yards: 389, par: 5, si: 13 } },
  { number: 5,  name: "The Wishing Well",  white: { yards: 343, par: 4, si: 2 },  green: { yards: 333, par: 4, si: 2 },  ladies: { yards: 283, par: 4, si: 7 }  },
  { number: 6,  name: "Nelson's March",    white: { yards: 194, par: 3, si: 6 },  green: { yards: 184, par: 3, si: 6 },  ladies: { yards: 194, par: 3, si: 1 }  },
  { number: 7,  name: "The Mullins",       white: { yards: 254, par: 4, si: 18 }, green: { yards: 244, par: 4, si: 18 }, ladies: { yards: 254, par: 4, si: 15 } },
  { number: 8,  name: "The Ramparts",      white: { yards: 155, par: 3, si: 16 }, green: { yards: 145, par: 3, si: 16 }, ladies: { yards: 155, par: 3, si: 17 } },
  { number: 9,  name: "The Drumlins",      white: { yards: 493, par: 5, si: 10 }, green: { yards: 483, par: 5, si: 10 }, ladies: { yards: 445, par: 5, si: 5 }  },
  { number: 10, name: "The Brae",          white: { yards: 344, par: 4, si: 5 },  green: { yards: 334, par: 4, si: 5 },  ladies: { yards: 314, par: 4, si: 6 }  },
  { number: 11, name: "Rowan Drive",       white: { yards: 360, par: 4, si: 7 },  green: { yards: 350, par: 4, si: 7 },  ladies: { yards: 310, par: 4, si: 8 }  },
  { number: 12, name: "Whinney Ridge",     white: { yards: 335, par: 4, si: 13 }, green: { yards: 325, par: 4, si: 13 }, ladies: { yards: 295, par: 4, si: 12 } },
  { number: 13, name: "Cranny",            white: { yards: 142, par: 3, si: 17 }, green: { yards: 132, par: 3, si: 17 }, ladies: { yards: 142, par: 3, si: 18 } },
  { number: 14, name: "The Three Piers",   white: { yards: 348, par: 4, si: 11 }, green: { yards: 324, par: 4, si: 11 }, ladies: { yards: 334, par: 4, si: 2 }  },
  { number: 15, name: "The Orchard",       white: { yards: 480, par: 5, si: 9 },  green: { yards: 470, par: 5, si: 9 },  ladies: { yards: 440, par: 5, si: 10 } },
  { number: 16, name: "The Quiet Corner",  white: { yards: 153, par: 3, si: 15 }, green: { yards: 143, par: 3, si: 15 }, ladies: { yards: 153, par: 3, si: 16 } },
  { number: 17, name: "Bruach na h-Abhna", white: { yards: 444, par: 4, si: 1 },  green: { yards: 434, par: 4, si: 1 },  ladies: { yards: 380, par: 5, si: 14 } },
  { number: 18, name: "Slán Abhaile",      white: { yards: 348, par: 4, si: 3 },  green: { yards: 338, par: 4, si: 3 },  ladies: { yards: 305, par: 4, si: 4 }  },
];

export const TEES = {
  white:  { label: "White",  course: "M", courseRating: 67.1, slope: 108, out: { yards: 2666, par: 34 }, in: { yards: 2954, par: 35 }, total: { yards: 5620, par: 69 } },
  green:  { label: "Green",  course: "M", courseRating: 66.2, slope: 107, out: { yards: 2576, par: 34 }, in: { yards: 2850, par: 35 }, total: { yards: 5426, par: 69 } },
  ladies: { label: "Ladies", course: "L", courseRating: 68.9, slope: 114, out: { yards: 2558, par: 35 }, in: { yards: 2673, par: 36 }, total: { yards: 5231, par: 71 } },
} as const;