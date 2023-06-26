// src/utils/bible.ts

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
