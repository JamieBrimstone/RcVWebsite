// vdata.js: basic data for verses.

////////////////////////////////////////////////////////////////////
var NumBks = 66;
var BkAbbr = [
  "Gen",
  "Exo",
  "Lev",
  "Num",
  "Deu",
  "Jos",
  "Jdg",
  "Rut",
  "1Sa",
  "2Sa",
  "1Ki",
  "2Ki",
  "1Ch",
  "2Ch",
  "Ezr",
  "Neh",
  "Est",
  "Job",
  "Psa",
  "Prv",
  "Ecc",
  "SoS",
  "Isa",
  "Jer",
  "Lam",
  "Ezk",
  "Dan",
  "Hos",
  "Joe",
  "Amo",
  "Oba",
  "Jon",
  "Mic",
  "Nah",
  "Hab",
  "Zep",
  "Hag",
  "Zec",
  "Mal",
  "Mat",
  "Mrk",
  "Luk",
  "Joh",
  "Act",
  "Rom",
  "1Co",
  "2Co",
  "Gal",
  "Eph",
  "Phi",
  "Col",
  "1Th",
  "2Th",
  "1Ti",
  "2Ti",
  "Tit",
  "Phm",
  "Heb",
  "Jam",
  "1Pe",
  "2Pe",
  "1Jo",
  "2Jo",
  "3Jo",
  "Jud",
  "Rev",
];
var BkRef = [
  "Gen.",
  "Exo.",
  "Lev.",
  "Num.",
  "Deut.",
  "Josh.",
  "Judg.",
  "Ruth",
  "1 Sam.",
  "2 Sam.",
  "1 Kings",
  "2 Kings",
  "1 Chron.",
  "2 Chron.",
  "Ezra",
  "Neh.",
  "Esth.",
  "Job",
  "Psa.",
  "Prov.",
  "Eccl.",
  "S. S.",
  "Isa.",
  "Jer.",
  "Lam.",
  "Ezek.",
  "Dan.",
  "Hosea",
  "Joel",
  "Amos",
  "Oba.",
  "Jonah",
  "Micah",
  "Nahum",
  "Hab.",
  "Zeph.",
  "Hag.",
  "Zech.",
  "Mal.",
  "Matt.",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Rom.",
  "1 Cor.",
  "2 Cor.",
  "Gal.",
  "Eph.",
  "Phil.",
  "Col.",
  "1 Thes.",
  "2 Thes.",
  "1 Tim.",
  "2 Tim.",
  "Titus",
  "Philem.",
  "Heb.",
  "James",
  "1 Pet.",
  "2 Pet.",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Rev.",
];
var BkName = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Songs",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
];

var BkAbbrNum = {
  Gen: 0,
  Exo: 1,
  Lev: 2,
  Num: 3,
  Deu: 4,
  Jos: 5,
  Jdg: 6,
  Rut: 7,
  "1Sa": 8,
  "2Sa": 9,
  "1Ki": 10,
  "2Ki": 11,
  "1Ch": 12,
  "2Ch": 13,
  Ezr: 14,
  Neh: 15,
  Est: 16,
  Job: 17,
  Psa: 18,
  Prv: 19,
  Ecc: 20,
  SoS: 21,
  Isa: 22,
  Jer: 23,
  Lam: 24,
  Ezk: 25,
  Dan: 26,
  Hos: 27,
  Joe: 28,
  Amo: 29,
  Oba: 30,
  Jon: 31,
  Mic: 32,
  Nah: 33,
  Hab: 34,
  Zep: 35,
  Hag: 36,
  Zec: 37,
  Mal: 38,
  Mat: 39,
  Mrk: 40,
  Luk: 41,
  Joh: 42,
  Act: 43,
  Rom: 44,
  "1Co": 45,
  "2Co": 46,
  Gal: 47,
  Eph: 48,
  Phi: 49,
  Col: 50,
  "1Th": 51,
  "2Th": 52,
  "1Ti": 53,
  "2Ti": 54,
  Tit: 55,
  Phm: 56,
  Heb: 57,
  Jam: 58,
  "1Pe": 59,
  "2Pe": 60,
  "1Jo": 61,
  "2Jo": 62,
  "3Jo": 63,
  Jud: 64,
  Rev: 65,
};
var BkNumChs = [
  50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150,
  31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4, 28, 16,
  24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1,
  22,
];
var BkChNV = [
  [
    31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38,
    18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30,
    23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26,
  ],
  [
    22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25,
    26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31,
    43, 38,
  ],
  [
    17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37,
    27, 24, 33, 44, 23, 55, 46, 34,
  ],
  [
    54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22,
    29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13,
  ],
  [
    46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21,
    20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12,
  ],
  [
    18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51,
    9, 45, 34, 16, 33,
  ],
  [
    36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30,
    48, 25,
  ],
  [22, 23, 18, 22],
  [
    28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24,
    42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13,
  ],
  [
    27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43,
    26, 22, 51, 39, 25,
  ],
  [
    53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21,
    43, 29, 53,
  ],
  [
    18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37,
    21, 26, 20, 37, 20, 30,
  ],
  [
    54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19,
    8, 30, 19, 32, 31, 31, 32, 34, 21, 30,
  ],
  [
    17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11,
    37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23,
  ],
  [11, 70, 13, 24, 17, 22, 28, 36, 15, 44],
  [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31],
  [22, 23, 15, 17, 14, 14, 10, 17, 32, 3],
  [
    22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29,
    29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41,
    30, 24, 34, 17,
  ],
  [
    6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13,
    31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17,
    13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12,
    8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13, 19,
    16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8,
    28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8,
    9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15,
    21, 10, 20, 14, 9, 6,
  ],
  [
    33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29,
    30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31,
  ],
  [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14],
  [17, 17, 11, 16, 16, 13, 13, 14],
  [
    31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6,
    17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8,
    31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14,
    21, 22, 11, 12, 19, 12, 25, 24,
  ],
  [
    19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15,
    18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28,
    18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34,
  ],
  [22, 22, 66, 22, 22],
  [
    28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14,
    49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23,
    29, 49, 26, 20, 27, 31, 25, 24, 23, 35,
  ],
  [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13],
  [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9],
  [20, 32, 21],
  [15, 16, 15, 13, 27, 14, 17, 14, 15],
  [21],
  [17, 10, 10, 11],
  [16, 13, 12, 13, 15, 16, 20],
  [15, 13, 19],
  [17, 20, 19],
  [18, 15, 20],
  [15, 23],
  [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21],
  [14, 17, 18, 6],
  [
    25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30,
    34, 46, 46, 39, 51, 46, 75, 66, 20,
  ],
  [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],
  [
    80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48,
    47, 38, 71, 56, 53,
  ],
  [
    51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42,
    31, 25,
  ],
  [
    26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41,
    38, 40, 30, 35, 27, 27, 32, 44, 31,
  ],
  [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27],
  [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24],
  [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14],
  [24, 21, 29, 31, 26, 18],
  [23, 22, 21, 32, 33, 24],
  [30, 30, 21, 23],
  [29, 23, 25, 18],
  [10, 20, 13, 18, 28],
  [12, 17, 18],
  [20, 15, 16, 16, 25, 21],
  [18, 26, 17, 22],
  [16, 15, 15],
  [25],
  [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25],
  [27, 26, 18, 17, 20],
  [25, 25, 22, 19, 14],
  [21, 22, 18],
  [10, 29, 24, 21, 21],
  [13],
  [14],
  [25],
  [
    20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 18, 18, 20, 8, 21, 18, 24, 21,
    15, 27, 21,
  ],
];

// Returns a nicer name than `1 Peter', i.e. `First Peter'.
function BkLongName(bk) {
  var c = BkName[bk].charAt(0);
  if (c == "1") return "First" + BkName[bk].substring(1);
  if (c == "2") return "Second" + BkName[bk].substring(1);
  if (c == "3") return "Third" + BkName[bk].substring(1);
  return BkName[bk];
}
// Get a simple vref with BkAbbr[], e.g. "Gen1:1"
function bkabbr_vref(bk, ch, vn) {
  return BkAbbr[bk] + (BkNumChs[bk] == 1 ? "" : ch + ":") + vn;
}
// Get a simple vref with BkRef[], e.g. "Gen. 1:1"
function bkref_vref(bk, ch, vn) {
  return BkRef[bk] + " " + (BkNumChs[bk] == 1 ? "" : ch + ":") + vn;
}
////////////////////////////////////////////////////////////////////

// listv.js: list verses

////////////////////////////////////////////////////////////////////
// Recognizing any partial/complete book names.
var BkRX = [],
  BkAbbrLcNum = [],
  BkRefLcNum = [],
  BkRefLcMaxLen = 0,
  digitx = /^\d/;

function init_recog_bkname() {
  try {
    BkRX[0] = /^(Ge?n?e?s?i?s?)($|[^a-zA-Z])/i;
    BkRX[1] = /^(Ex?o?d?u?s?)($|[^a-zA-Z])/i;
    BkRX[2] = /^(Le?v?i?t?i?c?u?s?)($|[^a-zA-Z])/i;
    BkRX[3] = /^(Nu?m?b?e?r?s?)($|[^a-zA-Z])/i;
    BkRX[4] = /^(De?u?t?e?r?o?n?o?m?y?)($|[^a-zA-Z])/i;
    BkRX[5] = /^(Jo?s?h?u?a?)($|[^a-zA-Z])/i;
    BkRX[6] = /^(Ju?d?g?e?s?)($|[^a-zA-Z])/i;
    BkRX[7] = /^(Ru?t?h?)($|[^a-zA-Z])/i;
    BkRX[8] = /^(((1)|(1st)|(First))[\s\xA0]*Sa?m?u?e?l?)($|[^a-zA-Z])/i;
    BkRX[9] = /^(((2)|(2nd)|(Second))[\s\xA0]*Sa?m?u?e?l?)($|[^a-zA-Z])/i;
    BkRX[10] = /^(((1)|(1st)|(First))[\s\xA0]*Ki?n?g?s?)($|[^a-zA-Z])/i;
    BkRX[11] = /^(((2)|(2nd)|(Second))[\s\xA0]*Ki?n?g?s?)($|[^a-zA-Z])/i;
    BkRX[12] =
      /^(((1)|(1st)|(First))[\s\xA0]*Ch?r?o?n?i?c?l?e?s?)($|[^a-zA-Z])/i;
    BkRX[13] =
      /^(((2)|(2nd)|(Second))[\s\xA0]*Ch?r?o?n?i?c?l?e?s?)($|[^a-zA-Z])/i;
    BkRX[14] = /^(Ez?r?a?)($|[^a-zA-Z])/i;
    BkRX[15] = /^(Ne?h?e?m?i?a?h?)($|[^a-zA-Z])/i;
    BkRX[16] = /^(Es?t?h?e?r?)($|[^a-zA-Z])/i;
    BkRX[17] = /^(Jo?b?)($|[^a-zA-Z])/i;
    BkRX[18] = /^(Ps?a?l?m?s?)($|[^a-zA-Z])/i;
    BkRX[19] = /^(Pr?o?v?e?r?b?s?)($|[^a-zA-Z])/i;
    BkRX[20] = /^(Ec?c?l?e?s?i?a?s?t?e?s?)($|[^a-zA-Z])/i;
    BkRX[21] =
      /^((S\.?S($|[^a-zA-Z]))|(Song([\s\xA0]*of[\s\xA0]*((Songs)|(Solomon)))($|[^a-zA-Z])))/i;
    BkRX[22] = /^(Is?a?i?a?h?)($|[^a-zA-Z])/i;
    BkRX[23] = /^(Je?r?e?m?i?a?h?)($|[^a-zA-Z])/i;
    BkRX[24] = /^(La?m?e?n?t?a?t?i?o?n?s?)($|[^a-zA-Z])/i;
    BkRX[25] = /^(Ez?e?k?i?e?l?)($|[^a-zA-Z])/i;
    BkRX[26] = /^(Da?n?i?e?l?)($|[^a-zA-Z])/i;
    BkRX[27] = /^(Ho?s?e?a?)($|[^a-zA-Z])/i;
    BkRX[28] = /^(Jo?e?l?)($|[^a-zA-Z])/i;
    BkRX[29] = /^(Am?o?s?)($|[^a-zA-Z])/i;
    BkRX[30] = /^(Ob?a?d?i?a?h?)($|[^a-zA-Z])/i;
    BkRX[31] = /^(Jo?n?a?h?)($|[^a-zA-Z])/i;
    BkRX[32] = /^(Mi?c?a?h?)($|[^a-zA-Z])/i;
    BkRX[33] = /^(Na?h?u?m?)($|[^a-zA-Z])/i;
    BkRX[34] = /^(Ha?b?a?k?k?u?k?)($|[^a-zA-Z])/i;
    BkRX[35] = /^(Ze?p?h?a?n?i?a?h?)($|[^a-zA-Z])/i;
    BkRX[36] = /^(Ha?g?g?a?i?)($|[^a-zA-Z])/i;
    BkRX[37] = /^(Ze?c?h?a?r?i?a?h?)($|[^a-zA-Z])/i;
    BkRX[38] = /^(Ma?l?a?c?h?i?)($|[^a-zA-Z])/i;
    BkRX[39] = /^(Ma?t?t?h?e?w?)($|[^a-zA-Z])/i;
    BkRX[40] = /^(Ma?r?k?)($|[^a-zA-Z])/i;
    BkRX[41] = /^(Lu?k?e?)($|[^a-zA-Z])/i;
    BkRX[42] = /^(Jo?h?n?)($|[^a-zA-Z])/i;
    BkRX[43] = /^(Ac?t?s?)($|[^a-zA-Z])/i;
    BkRX[44] = /^(Ro?m?a?n?s?)($|[^a-zA-Z])/i;
    BkRX[45] =
      /^(((1)|(1st)|(First))[\s\xA0]*Co?r?i?n?t?h?i?a?n?s?)($|[^a-zA-Z])/i;
    BkRX[46] =
      /^(((2)|(2nd)|(Second))[\s\xA0]*Co?r?i?n?t?h?i?a?n?s?)($|[^a-zA-Z])/i;
    BkRX[47] = /^(Ga?l?a?t?i?a?n?s?)($|[^a-zA-Z])/i;
    BkRX[48] = /^(Ep?h?e?s?i?a?n?s?)($|[^a-zA-Z])/i;
    BkRX[49] = /^(Ph?i?l?i?p?p?i?a?n?s?)($|[^a-zA-Z])/i;
    BkRX[50] = /^(Co?l?o?s?s?i?a?n?s?)($|[^a-zA-Z])/i;
    BkRX[51] =
      /^(((1)|(1st)|(First))[\s\xA0]*Th?e?s?s?a?l?o?n?i?a?n?s?)($|[^a-zA-Z])/i;
    BkRX[52] =
      /^(((2)|(2nd)|(Second))[\s\xA0]*Th?e?s?s?a?l?o?n?i?a?n?s?)($|[^a-zA-Z])/i;
    BkRX[53] = /^(((1)|(1st)|(First))[\s\xA0]*Ti?m?o?t?h?y?)($|[^a-zA-Z])/i;
    BkRX[54] = /^(((2)|(2nd)|(Second))[\s\xA0]*Ti?m?o?t?h?y?)($|[^a-zA-Z])/i;
    BkRX[55] = /^(Ti?t?u?s?)($|[^a-zA-Z])/i;
    BkRX[56] = /^(Ph?i?l?e?m?o?n?)($|[^a-zA-Z])/i;
    BkRX[57] = /^(He?b?r?e?w?s?)($|[^a-zA-Z])/i;
    BkRX[58] = /^(Ja?m?e?s?)($|[^a-zA-Z])/i;
    BkRX[59] = /^(((1)|(1st)|(First))[\s\xA0]*Pe?t?e?r?)($|[^a-zA-Z])/i;
    BkRX[60] = /^(((2)|(2nd)|(Second))[\s\xA0]*Pe?t?e?r?)($|[^a-zA-Z])/i;
    BkRX[61] = /^(((1)|(1st)|(First))[\s\xA0]*Jo?h?n?)($|[^a-zA-Z])/i;
    BkRX[62] = /^(((2)|(2nd)|(Second))[\s\xA0]*Jo?h?n?)($|[^a-zA-Z])/i;
    BkRX[63] = /^(((3)|(3rd)|(Third))[\s\xA0]*Jo?h?n?)($|[^a-zA-Z])/i;
    BkRX[64] = /^(Ju?d?e?)($|[^a-zA-Z])/i;
    BkRX[65] = /^(Re?v?e?l?a?t?i?o?n?)($|[^a-zA-Z])/i;

    // BkAbbrLcNum.
    var i;
    for (i = BkAbbr.length - 1; i >= 0; i--)
      BkAbbrLcNum[BkAbbr[i].toLowerCase()] = i;

    // BkRefLcNum.
    BkRefLcMaxLen = 0;
    for (i = BkRef.length - 1; i >= 0; i--) {
      var len = BkRef[i].length;
      if (len > BkRefLcMaxLen) BkRefLcMaxLen = len;
      try {
        if (!BkRefLcNum[len]) BkRefLcNum[len] = [];
      } catch (e) {
        BkRefLcNum[len] = [];
      }
      BkRefLcNum[len][BkRef[i].toLowerCase()] = i;

      if (!/\./.test(BkRef[i])) continue;
      var s = BkRef[i].replace(/\./g, "");
      len = s.length;
      try {
        if (!BkRefLcNum[len]) BkRefLcNum[len] = [];
      } catch (e) {
        BkRefLcNum[len] = [];
      }
      BkRefLcNum[len][s.toLowerCase()] = i;
    }
  } catch (e) {
    ex("init_recog_bkname", e);
  }
}

// Returns [bkindex, match_string].
function recog_bkname(s) {
  try {
    if (s.length < 2) return null;

    var a, i;

    // Init BkAbbrLcNum.
    if (BkRX.length == 0) init_recog_bkname();

    // Try matching by BkAbbr first.
    if ((a = /^\w\w\w($|[^a-zA-Z])/.test(s))) {
      a = s.substring(0, 3);
      i = BkAbbrLcNum[a.toLowerCase()];
      if (i != null) return [i, a];
    }

    // Try matching BkRef next.
    for (var len = BkRefLcMaxLen; len >= 4; len--) {
      if (s.length < len) continue;
      try {
        if (!BkRefLcNum[len]) continue;
      } catch (e) {
        continue;
      }
      if (s.length > len && /[a-zA-Z]/.test(s.charAt(len))) continue;
      a = s.substring(0, len);
      i = BkRefLcNum[len][a.toLowerCase()];
      if (i != null) return [i, a];
    }

    // Match by regex.
    for (i = BkRX.length - 1; i >= 0; i--)
      if ((a = BkRX[i].exec(s))) {
        if (digitx.test(a[1])) {
          if (a[1].length > 2) return [i, a[1]];
        } else {
          if (a[1].length > 1) return [i, a[1]];
        }
      }
  } catch (e) {
    ex("recog_bkname", e);
  }
  return null;
}
// Returns an array of text vrefs eg. "Gen1:1" for verse refs given.
export function parse_vrefs(s) {
  var a,
    i,
    rv = [],
    bk = 0,
    ch = 0,
    vn,
    is_chap = 1,
    has_bk = 0,
    has_range = 0;
  try {
    var t = s;
    while (t.length) {
      // Any human-readable book name.
      if ((a = recog_bkname(t))) {
        if (has_bk) rv.push(BkAbbr[bk]);
        else has_bk = 1;
        bk = a[0];
        is_chap = 1;
        t = t.substring(a[1].length);
        continue;
      }
      // Whole chapter:verse notations.
      a = /^((\d+)[\s\xA0]*:[\s\xA0]*(\d+)[a-z]?)/.exec(t);
      if (a) {
        ch = a[2];
        vn = a[3];
        is_chap = 0;
        has_bk = 0;
        rv.push(BkAbbr[bk] + ch + ":" + vn);
        t = t.substring(a[1].length);
        continue;
      }
      // Single number -- must be verse.
      a = /^((\d+)[a-z])/.exec(t);
      if (a) {
        vn = a[2];
        is_chap = 0;
        has_bk = 0;
        rv.push(BkAbbr[bk] + ch + ":" + vn);
        t = t.substring(a[1].length);
        continue;
      }
      // Single number -- could be chapter or verse.
      a = /^(\d+)/.exec(t);
      if (a) {
        if (is_chap) {
          ch = a[1];
          rv.push(BkAbbr[bk] + ch);
        } else {
          vn = a[1];
          rv.push(BkAbbr[bk] + ch + ":" + vn);
        }
        has_bk = 0;
        t = t.substring(a[1].length);
        continue;
      }
      // Range.
      if (/^[\-\�]/.test(t)) {
        has_range = 1;
        has_bk = 0;
        rv.push("-");
        t = t.substring(1);
        continue;
      }
      // Any junk string. Eat it.
      a = /^([a-zA-Z]+)/.exec(t);
      if (a) {
        t = t.substring(a[1].length);
        continue;
      }
      // Semi-colon.
      if (t.charAt(0) == ";") {
        if (has_bk) {
          rv.push(BkAbbr[bk]);
          has_bk = 0;
        }
      }
      // Any other stuff. Eat one character.
      t = t.substring(1);
    }
    if (has_bk) rv.push(BkAbbr[bk]);

    // Fix up all ranges.
    if (has_range) {
      // Remove duplicate ranges.
      for (i = 0; i < rv.length - 1; i++)
        if (rv[i] == "-" && rv[i + 1] == "-") {
          rv.splice(i, 1);
          i--;
        }

      // Remove leading and trailing ranges.
      while (rv.length && rv[0] == "-") rv.shift();
      while (rv.length && rv[rv.length - 1] == "-") rv.pop();

      // Merge ranges.
      for (i = 1; i < rv.length - 1; i++)
        if (rv[i] == "-") {
          rv[i - 1] += "-" + rv[i + 1];
          rv.splice(i, 2);
          i--;
        }
    }
  } catch (e) {
    ex("parse_vrefs", e);
  }
  return rv;
}
// Returns a proper vref string given an array.
function getvrefstring(a) {
  try {
    var bk = -1,
      ch = 0,
      vn = 0,
      i,
      j,
      s = "",
      t,
      b,
      c,
      bk1 = -2,
      ch1,
      vn1;
    for (i = 0; i < a.length; i++) {
      t = a[i];
      if ((j = t.indexOf("-")) != -1) {
        c = t.substring(j + 1);
        t = t.substring(0, j);
      }

      b = getvrefstring1(bk, ch, vn, t);
      if (s) s += b[4] + " ";
      bk = b[0];
      ch = b[1];
      vn = b[2];
      s += b[3];

      if (j != -1) {
        b = getvrefstring1(bk, ch, vn, c);
        bk = b[0];
        ch = b[1];
        vn = b[2];
        s += "-" + b[3];
      }
    }
    return s;
  } catch (e) {
    ex("getvrefstring", e);
  }
}
// Helper function for getvrefstring().
// Returns [new_bk, new_ch, new_vn, vref_string, appender]
function getvrefstring1(bk, ch, vn, s) {
  try {
    var b,
      bk1,
      ch1,
      vn1,
      sep = ";";
    if ((b = /^(\w\w\w)(\d+):(\d+)$/.exec(s))) {
      bk1 = BkAbbrNum[b[1]];
      ch1 = b[2];
      vn1 = b[3];
      if (bk != bk1) s = bkref_vref(bk1, ch1, vn1);
      else if (ch != ch1) s = (BkNumChs[bk1] == 1 ? "" : ch1 + ":") + vn1;
      else {
        sep = ",";
        s = vn1;
      }
      bk = bk1;
      ch = ch1;
      vn = vn1;
    } else if ((b = /^(\w\w\w)(\d+)$/.exec(s))) {
      bk1 = BkAbbrNum[b[1]];
      ch1 = b[2];
      if (bk != bk1) s = BkRef[bk1] + (BkNumChs[bk1] == 1 ? "" : " " + ch1);
      else {
        if (BkNumChs[bk1] == 1) sep = ",";
        s = (BkNumChs[bk1] == 1 ? BkRef[bk1] : "") + ch1;
      }
      bk = bk1;
      ch = ch1;
      vn = 0;
    } else if (/^\w\w\w$/.test(s)) {
      bk = BkAbbrNum[s];
      s = BkName[bk];
      ch = 0;
      vn = 0;
    } else {
      s += "[" + s + "?]";
    }

    return [bk, ch, vn, s, sep];
  } catch (e) {
    ex("getvrefstring1", e);
  }
}
var unknown_vref = "Unknown verse reference";
function bad_ch(bk, ch) {
  return (
    BkRef[bk] + " " + ch + "\xA0No such chapter (valid: 1-" + BkNumChs[bk] + ")"
  );
}
function bad_vn(bk, ch, vn) {
  if (ch < 1 || ch > BkNumChs[bk]) return bad_ch(bk, ch);
  return (
    BkRef[bk] +
    " " +
    (BkNumChs[bk] == 1 ? "" : ch + ":") +
    vn +
    "\xA0No such verse (valid: 1-" +
    BkChNV[bk][ch - 1] +
    ")"
  );
}
function bad_vr(s) {
  return s + "\xA0Unknown verse reference";
}
// Given a vref string, return an array of all vrefs as: [hashkey,errmsg]
function getbyvref(orig_s, limit) {
  var s = orig_s;
  if (limit < 0) limit = 0;
  try {
    // Do range.
    var bk1 = 0,
      ch1 = 1,
      vn1 = 1,
      bk2 = 0,
      ch2 = 1,
      vn2 = 1;
    var i = s.indexOf("-");
    if (i != -1) {
      // Range.
      var a,
        t = s.substring(i + 1);
      s = s.substring(0, i);

      // From vref.
      if ((a = /^(\w\w\w)(\d+):(\d+)$/.exec(s))) {
        bk1 = BkAbbrNum[a[1]];
        ch1 = int(a[2]);
        vn1 = int(a[3]);
        if (vref_not_ok(bk1, ch1, vn1)) return [bad_vn(bk1, ch1, vn1)];
      } else if ((a = /^(\w\w\w)(\d+)$/.exec(s))) {
        bk1 = BkAbbrNum[a[1]];
        if (BkNumChs[bk1] == 1) {
          ch1 = 1;
          vn1 = int(a[2]);
        } else {
          ch1 = int(a[2]);
          vn1 = 1;
        }
        if (vref_not_ok(bk1, ch1, vn1)) return [bad_ch(bk1, ch1)];
      } else if (/^\w\w\w$/.exec(s)) {
        bk1 = BkAbbrNum[s];
        ch1 = vn1 = 1;
      } else return [bad_vr(s)];

      // To vref.
      if ((a = /^(\w\w\w)(\d+):(\d+)$/.exec(t))) {
        bk2 = BkAbbrNum[a[1]];
        ch2 = int(a[2]);
        vn2 = int(a[3]);
        if (vref_not_ok(bk2, ch2, vn2)) return [bad_vn(bk2, ch2, vn2)];
      } else if ((a = /^(\w\w\w)(\d+)$/.exec(t))) {
        bk2 = BkAbbrNum[a[1]];
        if (BkNumChs[bk2] == 1) {
          ch2 = 1;
          vn2 = int(a[2]);
        } else {
          ch2 = int(a[2]);
          vn2 = BkChNV[bk2][ch2 - 1];
        }
        if (vref_not_ok(bk2, ch2, vn2)) return [bad_ch(bk2, ch2)];
      } else if (/^\w\w\w$/.exec(t)) {
        bk2 = BkAbbrNum[t];
        ch2 = BkNumChs[bk2];
        vn2 = BkChNV[bk2][ch2 - 1];
      } else return [bad_vr(t)];
    } else {
      // Single vref.
      if ((a = /^(\w\w\w)(\d+):(\d+)$/.exec(s))) {
        bk1 = bk2 = BkAbbrNum[a[1]];
        ch1 = ch2 = int(a[2]);
        vn1 = vn2 = int(a[3]);
        if (vref_not_ok(bk1, ch1, vn1)) return [bad_vn(bk1, ch1, vn1)];
      } else if ((a = /^(\w\w\w)(\d+)$/.exec(s))) {
        bk1 = bk2 = BkAbbrNum[a[1]];
        if (BkNumChs[bk1] == 1) {
          ch1 = ch2 = 1;
          vn1 = vn2 = int(a[2]);
        } else {
          ch1 = ch2 = int(a[2]);
          vn1 = 1;
          vn2 = BkChNV[bk1][ch1 - 1];
        }
        if (vref_not_ok(bk1, ch1, vn1)) return [bad_ch(bk1, ch1)];
      } else if (/^\w\w\w$/.exec(s)) {
        bk1 = bk2 = BkAbbrNum[s];
        ch1 = 1;
        vn1 = 1;
        ch2 = BkNumChs[bk2];
        vn2 = BkChNV[bk2][ch2 - 1];
      } else return [bad_vr(s)];
    }
    return getbyvref1(bk1, ch1, vn1, bk2, ch2, vn2, limit);
  } catch (e) {
    ex("getbyvref", e);
  }
  return [];
}
// Helper for getbyvref().
function getbyvref1(bk1, ch1, vn1, bk2, ch2, vn2, limit) {
  var rv = [];
  try {
    // Note that this is the 2nd time we check the vref.
    // In order to make this function callable by the user,
    // we'll just leave the extra checking here.
    if (vref_not_ok(bk1, ch1, vn1)) {
      rv.push(bad_vn(bk1, ch1, vn1));
      if (bk1 == bk2 && ch1 == ch2 && vn1 == vn2) return rv;
    }
    if (vref_not_ok(bk2, ch2, vn2)) rv.push(bad_vn(bk2, ch2, vn2));
    if (rv.length) return rv;

    for (; bk1 <= bk2; bk1++, ch1 = 1) {
      var ch3 = bk1 == bk2 ? ch2 : BkNumChs[bk1];
      for (; ch1 <= ch3; ch1++, vn1 = 1) {
        var vn3 = bk1 == bk2 && ch1 == ch2 ? vn2 : BkChNV[bk1][ch1 - 1];
        for (; vn1 <= vn3; vn1++) {
          rv.push(hkey_verse(bk1, ch1, vn1));
          if (limit && rv.length >= limit) return rv;
        }
      }
    }
  } catch (e) {
    ex("getvyvref1", e);
  }
  return rv;
}
function vref_not_ok(bk, ch, vn) {
  try {
    if (
      bk < 0 ||
      bk >= NumBks ||
      ch < 1 ||
      ch > BkNumChs[bk] ||
      vn < 1 ||
      vn > BkChNV[bk][ch - 1]
    )
      return 1;
  } catch (e) {
    ex("vref_not_ok", e);
    return 1;
  }
  return 0;
}
// Set status for listv.
function listv_setstat(s) {
  try {
    setstat(
      "<b>" +
        proper_vstr +
        "</b>&nbsp; (" +
        vref_list.length +
        " verse" +
        (vref_list.length == 1 ? "" : "s") +
        ") - " +
        timetaken(startmillis) +
        " sec." +
        (s ? " - " + s : "")
    );
  } catch (e) {
    ex("listv_setstat", e);
  }
}
// Top-level user-called function.
var TO_LIMIT = 10;
var vstr,
  parsed_vrefs,
  proper_vstr,
  curfromkeypress,
  curlimit,
  listv_busy = 0,
  vref_list,
  current_list_index,
  listv_timeout = null,
  listv_canceled;
// Delay on auto-onkeypress calls.
function listv(fromkeypress) {
  try {
    if (listv_timeout) {
      clearTimeout(listv_timeout);
      listv_timeout = null;
    }
    if (fromkeypress) {
      listv_timeout = setTimeout("listv0(" + fromkeypress + ")", 500);
    } else listv0();
  } catch (e) {
    ex("listv", e);
  }
}
// List all verses given.
function listv0(fromkeypress) {
  try {
    // Return if still busy.
    if (fromkeypress && listv_busy) return;
    listv_busy = 1;

    try {
      // Input from typing into bottom panel.
      if (fromkeypress == 2) main.document.f.vr.value = document.f.vr.value;

      var i = main.document.f.vr.value;
      i = main.document.getElementById("listing");
    } catch (e) {
      setTimeout("listv(" + (fromkeypress ? 1 : 0) + ")", 10);
      return;
    }

    // Init variables.
    listv_canceled = 0;
    startmillis = getmillis();
    vstr = "";
    curfromkeypress = fromkeypress ? 1 : 0;
    parsed_vrefs = [];
    proper_vstr = "";
    vref_list = [];

    // Display the cancel button.
    main.document.getElementById("cancelbutton").style.visibility = "visible";

    // Get and trim string.
    vstr = main.document.f.vr.value;
    if (!curfromkeypress) {
      vstr = vstr.replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s\s+/, " ");
      main.document.f.vr.value = vstr;
    }
    if (vstr.length == 0) return listv_restore();

    // Get proper verse references.
    if (listv_canceled) return canceled_listv();
    parsed_vrefs = parse_vrefs(vstr);
    proper_vstr = getvrefstring(parsed_vrefs);

    // Check current verses.
    if (main.document.getElementById("lastlisted").innerHTML == proper_vstr) {
      if (proper_vstr.length == 0) setstat("No verses to list");
      listv_busy = 0;
      return;
    }

    // Set status as proper vrefs.
    listv_setstat("Retrieving all verses");

    // Get all vrefs to list.
    vref_list = [];
    var i,
      s = "",
      b,
      j,
      cnt;
    for (i = 0, cnt = 1; i < parsed_vrefs.length; i++) {
      b = getbyvref(parsed_vrefs[i], 0);
      for (j = 0; j < b.length; j++, cnt++) {
        // Build all the DHTML tags for inserting these verses.
        if (curfromkeypress) {
          if (cnt <= TO_LIMIT) s += "<p id=p" + cnt + "></p>";
          else if (cnt == TO_LIMIT + 1) s += "<p id=pmore class=more></p>";
        } else s += "<p id=p" + cnt + "></p>";

        vref_list.push(b[j]);
        if (listv_canceled) return canceled_listv();
      }
    }

    // Short-circuit empty listings.
    if (vref_list.length == 0)
      setstat("No verses to list for `" + proper_vstr + "'");
    else listv_setstat("Loading all verses");

    // Put in all the DHTML filler tags.
    if (listv_canceled) return canceled_listv();
    main.document.getElementById("listing").innerHTML = s;

    // List all verses incrementally.
    current_list_index = 0;
    listv1();
  } catch (e) {
    ex("listv", e);
  }
}
// Wait for all the tags to load.
function listv1() {
  try {
    if (listv_canceled) return canceled_listv();
    var n = vref_list.length;
    if (curfromkeypress && vref_list.length > TO_LIMIT) n = "more";
    var o = main.document.getElementById("p" + n);
    return listv2();
  } catch (e) {}
  setTimeout("listv1()", 1);
}
// Load next verse in `vref_list'.
function listv2() {
  try {
    if (listv_canceled) return canceled_listv();
    var i = current_list_index;
    if (i >= vref_list.length) return listv4();
    if (curfromkeypress && i >= TO_LIMIT) {
      main.document.getElementById("pmore").innerHTML =
        "<a class=font href=javascript:document.f.submit()>" +
        "[Click here to see all the verses ...]</a>";
      return listv4();
    }
    // May be an error message instead of a hash key for a verse.
    if (vref_list[i].length == 4)
      load_js("idx-bd/" + keyhash(vref_list[i]) + ".js", "listv3()");
    else listv3();
  } catch (e) {
    ex("listv2", e);
  }
}
// Display next verse in `vref_list'.
function listv3() {
  try {
    if (listv_canceled) return canceled_listv();
    var key = vref_list[current_list_index++];
    var i = current_list_index;

    if (key.length == 4) {
      a = keyvref(key);
      main.document.getElementById("p" + i).innerHTML =
        "<s onclick=hi(" +
        i +
        ") onmouseover=hi1() onmouseout=ns()>" +
        getshownum(i) +
        ")</s> " +
        "<b><a href=" +
        a[1] +
        ">" +
        a[0] +
        "</a></b>" +
        "<a><b onclick=rm(" +
        i +
        ") onmouseover=rm1() onmouseout=ns()> &nbsp;</b></a>" +
        BD[key];
    } else {
      var j = key.indexOf("\xA0");
      if (j != -1) a = [key.substring(0, j), key.substring(j + 1)];
      else a = [key, "Unknown verse reference"];
      main.document.getElementById("p" + i).innerHTML =
        "<s onclick=hi(" +
        i +
        ") onmouseover=hi1() onmouseout=ns()>" +
        getshownum(i) +
        ")</s> " +
        "<q onclick=rm(" +
        i +
        ") onmouseover=rm1() onmouseout=ns()>" +
        a[0] +
        " &nbsp;</q>" +
        a[1];
    }

    setTimeout("listv2()", 1);
  } catch (e) {
    ex("listv3", e);
  }
}
// To call when listv is canceled.
function canceled_listv() {
  try {
    var s = main.document.getElementById("status").innerHTML;
    setstat((s ? s + " - " : "") + "Listing canceled");
    listv_restore();
  } catch (e) {
    ex("canceled_listv", e);
  }
}
// Finalize listing.
function listv4() {
  try {
    main.document.getElementById("lastlisted").innerHTML = proper_vstr;
    listv_setstat("done");
    listv_restore();
  } catch (e) {
    ex("listv4", e);
  }
}
// Restore the search form to original state.
function listv_restore() {
  try {
    main.document.getElementById("cancelbutton").style.visibility = "hidden";
    if (!curfromkeypress) main.document.f.vr.select();
    listv_busy = 0;
  } catch (e) {
    ex("listv_restore", e);
  }
}
////////////////////////////////////////////////////////////////////
resume_js();

// function parse_vrefs(s: any) {
//   let a,
//     i,
//     rv = [],
//     bk = 0,
//     ch = 0,
//     vn,
//     is_chap = 1,
//     has_bk = 0,
//     has_range = 0;
//   try {
//     let t = s;
//     while (t.length) {
//       // Any human-readable book name.
//       if ((a = recog_bkname(t))) {
//         if (has_bk) rv.push(BkAbbr[bk]);
//         else has_bk = 1;
//         bk = a[0];
//         is_chap = 1;
//         t = t.substring(a[1].length);
//         continue;
//       }
//       // Whole chapter:verse notations.
//       a = /^((\d+)[\s\xA0]*:[\s\xA0]*(\d+)[a-z]?)/.exec(t);
//       if (a) {
//         ch = a[2] as any;
//         vn = a[3];
//         is_chap = 0;
//         has_bk = 0;
//         rv.push(BkAbbr[bk] + ch + ":" + vn);
//         t = t.substring(a[1].length);
//         continue;
//       }
//       // Single number -- must be verse.
//       a = /^((\d+)[a-z])/.exec(t);
//       if (a) {
//         vn = a[2];
//         is_chap = 0;
//         has_bk = 0;
//         rv.push(BkAbbr[bk] + ch + ":" + vn);
//         t = t.substring(a[1].length);
//         continue;
//       }
//       // Single number -- could be chapter or verse.
//       a = /^(\d+)/.exec(t);
//       if (a) {
//         if (is_chap) {
//           ch = a[1] as any;
//           rv.push(BkAbbr[bk] + ch);
//         } else {
//           vn = a[1];
//           rv.push(BkAbbr[bk] + ch + ":" + vn);
//         }
//         has_bk = 0;
//         t = t.substring(a[1].length);
//         continue;
//       }
//       // Range.
//       if (/^[\-\�]/.test(t)) {
//         has_range = 1;
//         has_bk = 0;
//         rv.push("-");
//         t = t.substring(1);
//         continue;
//       }
//       // Any junk string. Eat it.
//       a = /^([a-zA-Z]+)/.exec(t);
//       if (a) {
//         t = t.substring(a[1].length);
//         continue;
//       }
//       // Semi-colon.
//       if (t.charAt(0) == ";") {
//         if (has_bk) {
//           rv.push(BkAbbr[bk]);
//           has_bk = 0;
//         }
//       }
//       // Any other stuff. Eat one character.
//       t = t.substring(1);
//     }
//     if (has_bk) rv.push(BkAbbr[bk]);

//     // Fix up all ranges.
//     if (has_range) {
//       // Remove duplicate ranges.
//       for (i = 0; i < rv.length - 1; i++)
//         if (rv[i] == "-" && rv[i + 1] == "-") {
//           rv.splice(i, 1);
//           i--;
//         }

//       // Remove leading and trailing ranges.
//       while (rv.length && rv[0] == "-") rv.shift();
//       while (rv.length && rv[rv.length - 1] == "-") rv.pop();

//       // Merge ranges.
//       for (i = 1; i < rv.length - 1; i++)
//         if (rv[i] == "-") {
//           rv[i - 1] += "-" + rv[i + 1];
//           rv.splice(i, 2);
//           i--;
//         }
//     }
//   } catch (e) {
//     console.log("parse_vrefs", e);
//   }
//   return rv;
// }
