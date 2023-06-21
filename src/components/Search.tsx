import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Book, Translation } from "../App";
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
    console.log("searchHistory", searchHistory);
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

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
      <input
        type="search"
        enterKeyHint="search"
        list={searchText === "" ? "searchHistory" : undefined}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
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
        }}
      />
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
                    `<span style="background-color: yellow">${match}</span>`
                ),
              }}
            ></p>
          </div>
        )
      )}
    </div>
    // <Dialog open={props.isOpen} onClose={props.onClose} sx={darkModeStyle}>
    //   <Box sx={[darkModeStyle, { p: "2rem" }]}>
    //     <h2 style={darkModeStyle}>{t("search")}</h2>
    //   </Box>
    // </Dialog>
  );
}
