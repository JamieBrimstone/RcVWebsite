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
    const bookID = language === 'en' ? selectedVerse.book : selectedVerse.book > 26 ? selectedVerse.book - 78 : selectedVerse.book;
    const book = language === 'en' ? bibleData[bibleData.findIndex((book) => book.id === bookID)] : bibleData[bibleData.findIndex((book) => book.id === (bookID > 26 ? book.id - 39 : book.id))];
    
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (selectedVerse.verse) {
            const element = document.getElementById(`verse-${selectedVerse.verse - 1}`);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    }
    , [ref, selectedVerse]);
    return ( 
        <div>
            <div>
                <h2>{book?.title}</h2>
                <div ref={ref} style={{ fontSize: `${fontSize}px` }}>
                    {book?.pages.map((page) => (
                        <div key={page.id}>
                            <h3 id={`chapter-${page.id}`}>{book.title + ' ' + page.id}</h3>
                            {page.text.map((line, index) => (
                                <p key={'verse-' + index + 1} id={`verse-${index + 1}`}>{line}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default BibleText;
