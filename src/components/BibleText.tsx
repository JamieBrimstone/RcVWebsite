import React from "react";
import { Book } from "../App";

export interface SelectedVerse {
  book: number;
  chapter: number | null;
  verse: number | null;
}
export interface BibleTextProps {
  selectedVerse: SelectedVerse;
  bibleData: Book[];
  language: string;
  fontSize: string;
}

//display the selected entire book of the bible and scroll to the selcted book or verse
const BibleText: React.FC<BibleTextProps> = ({
  selectedVerse,
  bibleData,
  language,
  fontSize,
}) => {
  console.log("selectedVerse", selectedVerse);
  console.log("bibleData", bibleData);

  const book = bibleData.find((book) => book.id === selectedVerse.book);
  console.log("book", book);

  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    console.log("ref", ref);

    if (ref.current) {
      if (selectedVerse.chapter && selectedVerse.verse) {
        const element = document.getElementById(
          `chapter-${selectedVerse.chapter}` +
            `-verse-${
              selectedVerse.verse !== 1
                ? selectedVerse.verse - 1
                : selectedVerse.verse
            }`
        );
        console.log("element", element);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [ref, selectedVerse]);
  //check selectedVerse after render
  return (
    <div>
      <div>
        <h2>{book?.title}</h2>
        <div ref={ref} style={{ fontSize: `${fontSize}px` }}>
          {book?.pages.map((page) => (
            <div key={page.id}>
              <h3 id={`chapter-${page.id}`}>{book.title + " " + page.id}</h3>
              {page.text.map((line, index) => (
                <p
                  key={"verse-" + index + 1}
                  id={`chapter-${page.id}` + `-verse-${index + 1}`}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BibleText;
