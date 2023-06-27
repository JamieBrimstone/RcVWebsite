// src/utils/bible.ts

import { Book } from "../App";
import english from "../data/english2.json";
import german from "../data/german.json";

type BibleVersion = "en" | "de";

//json looks like this:
// [
// {
//     "id": 0,
//     "title": "Genesis",
//     "chapters": 50,
//     "pages": [
//       {
//         "id": 1,
//         "text": [
//           "1 In the beginning God created the heavens and the earth.",
// convert the json to type
type Bible = {
  id: number;
  title: string;
  title_short?: string;
  chapters: number;
  pages: {
    id: number;
    text: string[];
  }[];
}[];

const bibles: Record<BibleVersion, Bible> = {
  en: english as Bible,
  de: german as Bible,
};

export function getBibleText(
  version: BibleVersion,
  book: string,
  chapter: number
): string[] {
  const bible = bibles[version];
  const bookIndex = bible.findIndex((b) => b.title_short === book);
  if (bookIndex === -1) {
    throw new Error(`Book ${book} not found`);
  }
  const chapterIndex = chapter - 1;
  if (chapterIndex < 0 || chapterIndex >= bible[bookIndex].chapters) {
    throw new Error(`Chapter ${chapter} not found in book ${book}`);
  }
  return bible[bookIndex].pages[chapterIndex].text;
}

export const searchVerses = (
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

  // Loop through each verse reference
  verses.forEach((verse) => {
    // Parse the verse reference into its components
    const [bookName, chapter, verseNumber] = verse
      .replace(/\s+/g, "") // Remove whitespace
      .split(/\.|:/); // Split by period or colon

    // Find the book in the books array
    const book = books.find(
      (book) =>
        book.title.toLowerCase() === bookName.toLowerCase() ||
        (book.title_short &&
          book.title_short.toLowerCase() === bookName.toLowerCase())
    );

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

  return results;
};

const test_vrefs = ["Gen 1:1", "Gen. 1:2", "Matt. 4:4"] as string[];

const results = searchVerses(test_vrefs, english as Book[]);

console.log("results: ", results);
