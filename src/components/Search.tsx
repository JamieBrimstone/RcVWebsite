import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Book, Translation } from '../App';
import { useTranslation } from 'react-i18next';
import './SettingsModal.css';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState, useEffect } from 'react';

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
}

export function Search(props: SettingsModalProps) {
  const rowLayout = {
    display: 'flex',
    padding: 0,
  };
  const darkModeStyle = {
    backgroundColor: props.darkMode ? '#333' : '#fff',
    color: props.darkMode ? '#fff' : '#000',
  };
  const {t} = useTranslation()
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<{ book: string; chapter: number; verse: number; text: string }[]>([]);

  const handleSearch = () => {
    const results: { book: string; chapter: number; verse: number; text: string }[] = [];

    props.books.forEach((book) => {
      book.pages.forEach((page) => {
        page.text.forEach((text, index) => {
          if (text.includes(searchText)) {
            results.push({
              book: book.title,
              chapter: index + 1,
              verse: page.id,
              text,
            });
          }
        });
      });
    });

    setSearchResults(results);
  };

//   //useEffect calling handle search when searchText changes
//   useEffect(() => {
//     handleSearch();
//   }, [searchText]);


  return (
    // <div style={{height: '100%'}}>
    //   <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    //   <button onClick={handleSearch}>Search</button>
    //   {searchResults.map((result: { book: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; chapter: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; verse: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
    //     <div key={`${result.book}-${result.chapter}-${result.verse}`}>
    //       <h3>{result.book} {result.chapter}:{result.verse}</h3>
    //       <p>{result.text}</p>
    //     </div>
    //   ))}
    // </div>
    <Dialog open={props.isOpen} onClose={props.onClose} sx={darkModeStyle}>
    <Box sx={[darkModeStyle, {p: '2rem'}]}>
    <h2 style={darkModeStyle}>{t('search')}</h2>
    </Box>
  </Dialog>
  );
};

