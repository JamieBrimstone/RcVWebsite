import { Book } from "../App";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import { useTranslation } from "react-i18next";
import "./SettingsModal.css";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState,
  useEffect,
} from "react";

const BkAbbr = [
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
const BkRef = [
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
const BkName = [
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

const parseBooks = (bookNames: string[]): Book[] => {
  const bookList: Book[] = [];

  // Loop through each book name and create a Book object
  bookNames.forEach((bookName, index) => {
    const book: Book = {
      id: index + 1,
      title: bookName.trim(),
      chapters: 0,
      pages: [],
    };
    bookList.push(book);
  });

  return bookList;
};
let BkRX: any | any[] = [],
  BkAbbrLcNum: any[] = [],
  BkRefLcNum: { [x: string]: any }[] = [],
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
    let i;
    for (i = BkAbbr.length - 1; i >= 0; i--)
      BkAbbrLcNum[Number(BkAbbr[i].toLowerCase())] = i;

    // BkRefLcNum.
    BkRefLcMaxLen = 0;
    for (i = BkRef.length - 1; i >= 0; i--) {
      let len = BkRef[i].length;
      if (len > BkRefLcMaxLen) BkRefLcMaxLen = len;
      try {
        if (!BkRefLcNum[len]) BkRefLcNum[len] = [];
      } catch (e) {
        BkRefLcNum[len] = [];
      }
      BkRefLcNum[len][BkRef[i].toLowerCase()] = i;

      if (!/\./.test(BkRef[i])) continue;
      const s = BkRef[i].replace(/\./g, "");
      len = s.length;
      try {
        if (!BkRefLcNum[len]) BkRefLcNum[len] = [];
      } catch (e) {
        BkRefLcNum[len] = [];
      }
      BkRefLcNum[len][s.toLowerCase()] = i;
    }
  } catch (e) {
    console.log("init_recog_bkname", e);
  }
}
function recog_bkname(s: string) {
  try {
    if (s.length < 2) return null;

    let a, i;

    // Init BkAbbrLcNum.
    if (BkRX.length == 0) init_recog_bkname();

    // Try matching by BkAbbr first.
    if ((a = /^\w\w\w($|[^a-zA-Z])/.test(s))) {
      a = s.substring(0, 3);
      i = BkAbbrLcNum[Number(a.toLowerCase())];
      if (i != null) return [i, a];
    }

    // Try matching BkRef next.
    for (let len = BkRefLcMaxLen; len >= 4; len--) {
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
    console.log("recog_bkname", e);
  }
  return null;
}

function parseVerseRange(verse: string): string[] {
  const [startVerse, endVerse] = verse.split("-");
  console.log("startVerse, endVerse", startVerse, endVerse);

  const [bookName, chapter, verseNumber] = startVerse
    .replace(/\s+/g, "") // Remove whitespace
    .split(/\.|:|\d+\./); // Split by period, colon, or digit followed by period
  console.log("bookName, chapter, verseNumber", bookName, chapter, verseNumber);

  const verses = [];

  // Generate a range of verse numbers
  for (let i = parseInt(verseNumber); i <= parseInt(endVerse); i++) {
    verses.push(`${bookName}:${chapter}:${i}`);
  }

  return verses;
}

//Gen 1:1, Gen. 1:2, Matt. 4:4
export const searchVersesPicker = (
  verses: string[],
  books: Book[]
): {
  book: string;
  bookId: number;
  chapter: number;
  verse: number;
  text: string;
}[] => {
  const results: {
    book: string;
    bookId: number;
    chapter: number;
    verse: number;
    text: string;
  }[] = [];

  const parsedVerses = [] as string[];
  verses.forEach((verse) => {
    if (verse.includes("-")) {
      const splitVerses = parseVerseRange(verse);
      parsedVerses.push(...splitVerses);
    } else {
      parsedVerses.push(verse);
    }
  });
  console.log("parsedVerses", parsedVerses);

  // Loop through each verse reference
  parsedVerses.forEach((verse) => {
    // Parse the verse reference into its components
    const [bookName, chapter, verseNumber] = verse
      .replace(/\s+/g, "") // Remove whitespace
      .split(/\.|:|\d+\./); // Split by period, colon, or digit followed by period

    const recognizedBook = recog_bkname(bookName) as any[];
    console.log("recognizedBook", recognizedBook);

    const book = books.find(
      (book) =>
        book.title.toLowerCase() === bookName.toLowerCase() ||
        book.title.toLowerCase().startsWith(bookName.toLowerCase()) ||
        (book.title_short &&
          book.title_short.toLowerCase() === bookName.toLowerCase()) ||
        book.title.toLowerCase().startsWith(bookName.toLowerCase()) ||
        (book.title_short &&
          book.title_short.toLowerCase().startsWith(bookName.toLowerCase())) ||
        book.id === (recognizedBook !== null ? recognizedBook[0] : -1) ||
        BkAbbr[book.id].toLowerCase() === bookName.toLowerCase() ||
        BkRef[book.id].toLowerCase() === bookName.toLowerCase() ||
        BkName[book.id].toLowerCase() === bookName.toLowerCase() ||
        BkAbbr[book.id].toLowerCase().startsWith(bookName.toLowerCase()) ||
        BkRef[book.id].toLowerCase().startsWith(bookName.toLowerCase()) ||
        BkName[book.id].toLowerCase().startsWith(bookName.toLowerCase()) ||
        // parse the book name and compare
        BkAbbr[book.id].toLowerCase().startsWith(bookName.toLowerCase()) ||
        BkRef[book.id].toLowerCase().startsWith(bookName.toLowerCase()) ||
        BkName[book.id].toLowerCase().startsWith(bookName.toLowerCase())
      //Match as close as possible
    );
    // console.log("book", book);

    // If the book is found, add the verse to the results array
    if (book) {
      const chapterNumber = parseInt(chapter);
      const verseIndex = parseInt(verseNumber) - 1;
      const page = book.pages.find((page) => page.id === chapterNumber);
      if (page && page.text[verseIndex]) {
        results.push({
          book: book.title,
          bookId: book.id,
          chapter: chapterNumber,
          verse: verseIndex + 1,
          text: page.text[verseIndex],
        });
      }
    }
  });
  console.log("results", results);

  return results;
};

interface SettingsModalProps {
  books: Book[];
  isOpen: boolean;
  onClose: () => void;
  //   language: string;
  //   fontSize: number;
  //   onLanguageChange: (language: string) => void;
  //   onFontSizeChange: (fontSize: number) => void;
  //   setLanguage: (language: string) => void;
  darkMode: boolean;
  onSelected: (
    book: string,
    bookId: number,
    chapter: number,
    verse: number
  ) => void;
}

export function Search(props: SettingsModalProps) {
  const rowLayout = {
    display: "flex",
    padding: 0,
  };
  const darkModeStyle = {
    backgroundColor: props.darkMode ? "#333" : "#fff",
    color: props.darkMode ? "#fff" : "#000",
  };
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<
    {
      book: string;
      bookId: number;
      chapter: number;
      verse: number;
      text: string;
    }[]
  >([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [noResults, setNoResults] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pickerMode, setPickerMode] = useState(false);

  useEffect(() => {
    const history = localStorage.getItem("searchHistory");
    if (JSON.parse(history || "[]").length > 0) {
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    }
    window.scrollTo(0, 0);
  }, [props.isOpen]);

  useEffect(() => {
    // console.log("searchHistory", searchHistory);
    //only save the most recent 10 searches
    const history = searchHistory.slice(0, 10);
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [searchHistory]);

  const handleSearch = () => {
    const results: {
      book: string;
      bookId: number;
      chapter: number;
      verse: number;
      text: string;
    }[] = [];

    props.books.forEach((book) => {
      book.pages.forEach((page) => {
        page.text.forEach((text, index) => {
          if (text.includes(searchText)) {
            results.push({
              book: book.title,
              bookId: book.id,
              chapter: page.id,
              verse: index + 1,
              text,
            });
          }
        });
      });
    });
    //sort results by bookId
    results.sort((a, b) => {
      if (a.bookId < b.bookId) {
        return -1;
      }
      if (a.bookId > b.bookId) {
        return 1;
      }
      return 0;
    });

    if (results.length === 0) {
      setNoResults(true);
    } else {
      setSearchResults(results);
      if (!searchHistory.includes(searchText)) {
        setSearchHistory(
          (history) => [searchText, ...history.slice(0, 10)] as any
        );
      }
      setNoResults(false);
    }
  };

  function pickerModeSearch() {
    const searchTextArray = searchText.split(",");
    const results = searchVersesPicker(searchTextArray, props.books);
    results.sort((a, b) => {
      if (a.bookId < b.bookId) {
        return -1;
      }
      if (a.bookId > b.bookId) {
        return 1;
      }
      return 0;
    });
    if (results.length === 0) {
      setNoResults(true);
    } else {
      setSearchResults(results);
      if (!searchHistory.includes(searchText)) {
        setSearchHistory(
          (history) => [searchText, ...history.slice(0, 10)] as any
        );
      }
      setNoResults(false);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        paddingRight: 0,
        justifyContent: "center",
      }}
    >
      {pickerMode && (
        <div>
          <h3>{"Search Picker"}</h3>
          <p>{t("search_picker_enter")}</p>
          <p>
            {t("search_picker_short")} <br></br>
            {t("search_picker_example")}
          </p>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          width: "100%",
        }}
      >
        <input
          type="search"
          enterKeyHint="search"
          list={searchText === "" ? "searchHistory" : undefined}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (pickerMode) {
                pickerModeSearch();
                return;
              }
              handleSearch();
              //close keyboard on mobile
              (e.target as HTMLInputElement).blur();
            }
          }}
          // set focused when
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={searchText}
          //make not case sensitive
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            fontSize: "16px",
            position: "relative",
            marginBottom: "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "0.5rem",
            width: "100%",
          }}
        />
        <button
          className="search-button"
          onClick={() => setPickerMode(!pickerMode)}
          style={{
            backgroundColor: props.darkMode ? "#333" : "#fff",
            color: pickerMode ? "green" : "black",
            marginLeft: ".5rem",
            display: "flex",
          }}
        >
          <ManageSearchOutlinedIcon
            sx={{ padding: 0, height: "1.5rem", width: "1.5rem" }}
            style={{
              padding: 0,
              margin: 0,
              backgroundColor: props.darkMode ? "#333" : "#fff",
            }}
          />
        </button>
      </div>
      {focused && (
        <>
          {/* <div>{t("search_history")}</div> */}
          <datalist
            onClick={(e) => {
              console.log(
                "e.currentTarget.innerText",
                e.currentTarget.innerText
              );

              setSearchText(e.currentTarget.innerText || "");
            }}
            id="searchHistory"
          >
            {searchHistory.map((search, index) => (
              <option key={index} style={{ cursor: "pointer" }} value={search}>
                {search}
              </option>
            ))}
          </datalist>
        </>
      )}
      {noResults && <p>{t("no_results")}</p>}
      {searchResults.map(
        (result: {
          book:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
          bookId:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
          chapter:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
          verse:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
          text: string;
        }) => (
          <div
            key={`${result.book}-${result.chapter}-${result.verse}`}
            onClick={() =>
              props.onSelected(
                result.book as string,
                result.bookId as number,
                result.chapter as number,
                result.verse as number
              )
            }
            style={{ cursor: "pointer" }}
          >
            <h3 style={{ margin: 0 }}>
              {result.book} {result.chapter}:{result.verse}
            </h3>
            {/*             Highlight search term
             */}
            <p
              style={{ marginTop: 0 }}
              dangerouslySetInnerHTML={{
                __html: result?.text?.replace(
                  new RegExp(searchText, "gi"),
                  (match) =>
                    `<span style="background-color: ${
                      props.darkMode ? "orange" : "yellow"
                    }">${match}</span>`
                ),
              }}
            ></p>
          </div>
        )
      )}
    </div>
  );
}
