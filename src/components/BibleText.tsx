import React, { useEffect } from "react";
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
  onPreviousChapter: () => void;
  onNextChapter: () => void;
}

const BibleText: React.FC<BibleTextProps> = ({
  selectedVerse,
  bibleData,
  // language,
  fontSize,
  onPreviousChapter,
  onNextChapter,
}) => {
  const book = bibleData.find((book) => book.id === selectedVerse.book);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && selectedVerse.verse) {
      const element = document.getElementById(
        `chapter-${selectedVerse.chapter}-verse-${selectedVerse.verse}`
      );
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [ref, selectedVerse]);

  const currentPage = book?.pages.find(page => page.id === selectedVerse.chapter);

  return (
    <div className="bible-text-container">
      <div>
        {/* <h2>{book?.title}</h2> */}
        <div ref={ref} style={{ fontSize: `${fontSize}px` }}>
          {currentPage && (
            <div>
              <h3 id={`chapter-${currentPage.id}`}>
                {book?.title} {currentPage.id}
              </h3>
              {currentPage.text.map((line, index) => (
                <p
                  key={`verse-${index + 1}`}
                  id={`chapter-${currentPage.id}-verse-${index + 1}`}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="chapter-navigation" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {selectedVerse.chapter && selectedVerse.chapter > 1 && (
            <button 
              onClick={onPreviousChapter}
              style={{ padding: '8px 16px', cursor: 'pointer' }}
            >
              {selectedVerse.chapter - 1}
            </button>
          )}
          <span style={{ padding: '8px 16px' }}>Chapter {selectedVerse.chapter}</span>
          {book && selectedVerse.chapter && selectedVerse.chapter < book.pages.length && (
            <button 
              onClick={onNextChapter}
              style={{ padding: '8px 16px', cursor: 'pointer' }}
            >
              {selectedVerse.chapter + 1}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BibleText;
