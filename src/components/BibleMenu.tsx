import React from 'react';
import { Book, Translation } from '../App';
import './BibleMenu.css';
import { useTranslation } from 'react-i18next';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

interface BibleMenuProps {
  translations: Translation[];
  selectedBook: number;
  setSelectedBook: (book: number) => void;
  selectedChapter: number | null;
  setSelectedChapter: (chapter: number | null) => void;
  selectedVerse: number | null;
  setSelectedVerse: (verse: number | null) => void;
  language: string;
  setLanguage: (language: string) => void;
  showMenu: boolean;
  darkMode: boolean;
}

const BibleMenu: React.FC<BibleMenuProps> = ({
  translations,
  selectedBook,
  setSelectedBook,
  selectedChapter,
  setSelectedChapter,
  selectedVerse,
  setSelectedVerse,
  language,
  showMenu,
  darkMode,
}) => {
  const {t} = useTranslation();
  const [book, setBook] = React.useState<number>(selectedBook);
  const [chapter, setChapter] = React.useState<number | null>(null);
  const [verse, setVerse] = React.useState<number | null>(null);
  
  function handleBookSelect(book: Book) {
    console.log('book', book);
    
    setBook(book.id);
    setChapter(null);
    setVerse(null);
    // setSelectedBook(book.id);
    // setSelectedChapter(null);
    // setSelectedVerse(null);
  }

  function handleChapterSelect(chapter: number) {
    setChapter(chapter);
    setVerse(null);
    // setSelectedChapter(chapter);
    // setSelectedVerse(null);
  }

  function handleVerseSelect(verse: number) {
    setSelectedBook(book);
    setSelectedChapter(chapter);
    setSelectedVerse(verse);
  }
  const darkModeStyle = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#333',
  };

  function handleBack() {
    if (chapter !== null){ 
      setChapter(null);
      setVerse(null);
    } else if (book !== null) {
      setBook(-1);
    }
  }
  console.log('translations', translations);
  
  console.log('language', language);
  console.log('book', book);
  
  return (
    <div className="bible-menu" style={{...darkModeStyle, overflowY: 'scroll', width: '100%'}}>
    {book >= 0 ? (
      <div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
          <ArrowBackIosNewOutlinedIcon onClick={handleBack} sx={{alignSelf: 'center', marginRight: '1rem'}}/>
          <h2>{translations?.find((translation) => translation?.language === language)?.bible[language === 'en' ? book : book - 39]?.title}</h2>
        </div>
        {chapter ? (
          <div>
            <h2>{t('chapter')} {chapter}</h2>
              <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {translations?.find((translation) => translation?.language === language)?.bible[language === 'en' ? book : book - 39]?.pages[chapter - 1]?.text.map((verse, i) => (
                  <button key={i} onClick={() => handleVerseSelect(i + 1)} style={{...darkModeStyle, fontSize: '1.5rem', height: '3rem', width: '3rem'}}>
                    {i + 1}
                  </button>
                ))}
              </div>
          </div>
        ) : (
          <div style={{marginLeft: '2rem'}}>
            {Array.from({ length: translations?.find((translation) => translation?.language === language)?.bible[language === 'en' ? book : book - 39]?.chapters ?? 0 }, (_, i) => i + 1).map((chapter) => (
              <button key={chapter} onClick={() => handleChapterSelect(chapter)} style={{...darkModeStyle, fontSize: '1.5rem', height: '3rem', width: '3rem'}}>
                {chapter}
              </button>
            ))}
          </div>
        )}
      </div>
    ) : (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        {language === 'de' && (
          <>
            {translations?.find((translation) => translation?.language === language)?.bible.map((book) => (
              <div key={book.id} style={{display: 'flex', flexDirection: 'column'}}>
              <button key={book.id} onClick={() => handleBookSelect(book)} style={{...darkModeStyle}}>
                {book.title}
              </button>
              </div>
            ))}
          </>
        )}
        {language === 'en' && (
          <>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                {translations?.find((translation) => translation?.language === language)?.bible.map((book) => (
                  <>
                    {book.id < 39 && (
                      <button key={book.id} onClick={() => handleBookSelect(book)} style={{...darkModeStyle}}>
                      {book.title}
                      </button>
                    )}
                  </>
                ))}
              </div>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                {translations?.find((translation) => translation?.language === language)?.bible.map((book) => (
                  <>
                    {book.id > 38 && (
                      <button key={book.id} onClick={() => handleBookSelect(book)} style={{...darkModeStyle}}>
                      {book.title}
                      </button>
                    )}
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    )}
  </div>
  );
};

export default BibleMenu;
