import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BibleMenu from './components/BibleMenu';
import BibleText, { SelectedVerse } from './components/BibleText';
import {SettingsModal} from './components/SettingsModal';
import './App.css';
import english from './data/english2.json';
import german from './data/german.json';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import './i18n.js'

export interface BibleText {
  text: string;
}

export interface Chapter {
  [verse: string]: BibleText;
}

export interface Book {
  id: number;
  title: string;
  title_short?: string;
  chapters: number;
  pages: {
    id: number;
    text: string[];
  }[];
}
// [
//   {
//     "id": 39,
//     "title": "Matthäus",
//     "title_short": "Mt.",
//     "chapters": 28,
//     "pages": [
//       {
//         "id": 1,
//         "text": [
//           "1 Das Buch der Abstammung Jesu Christi, des Sohnes Davids, des Sohnes Abrahams:",
//Bible is an array of books
// export interface Bible{ 
//   //bible is an array of books
//   [book: string]: Book
// }
export interface Translation {
  name: string;
  abbreviation: string;
  language: string;
  bible: Book[];
}

export interface Settings {
  language: string;
  fontSize: number;
}

const defaultSettings: Settings = {
  language: 'en',
  fontSize: 16,
};

const App = () => {
  console.log('App rendered');
  
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [selectedBook, setSelectedBook] = useState<number>(settings.language === 'en' ? 0 : 39);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  console.log('showMenu', showMenu);
  
    const englishJSON = english as Book[]
    console.log('englishJSON', englishJSON);
    
    const germanJSON = german as Book[]
    console.log('germanJSON', germanJSON);
    const translations: Translation[] = [
      {
        name: 'English',
        abbreviation: 'RCV',
        language: 'en',
        bible: englishJSON,
      },
      {
        name: 'German',
        abbreviation: 'RCV',
        language: 'de',
        bible: germanJSON,
      },
    ];

  // Change language
  const changeLanguage = (language: string) => {
    
    setSettings({ ...settings, language });
    if (language === 'de') {
      setSelectedBook(selectedBook + 39)
    }    
  };

  // Change font size
  const changeFontSize = (fontSize: number) => {
    setSettings({ ...settings, fontSize });
  };

  // Get selected verse from the currently selected book and chapter
  const getSelectedVerse = (): SelectedVerse => {
    return {
      book: selectedBook,
      chapter: selectedChapter,
      verse: selectedVerse,
    };
  };

  function showSettings() { 
    setShowSettingsModal(true);
  }
  function showBibleMenu() { 
    setShowMenu(!showMenu);
  }

  function handleBack() {
    if (selectedChapter !== null){ 
      setSelectedChapter(null);
      setSelectedVerse(null);
    } else if (selectedBook !== null) {
      setSelectedBook(0);
    }
  }

  function handleSelectedVerse(verse: number | null) {
    setSelectedVerse(verse);
    setShowMenu(false);
  }

  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(darkModeMediaQuery.matches);
  
  useEffect(() => {
    const handler = (event: MediaQueryListEvent) => {
      setDarkMode(event.matches);
    };
    darkModeMediaQuery.addEventListener('change', handler);
    return () => darkModeMediaQuery.removeEventListener('change', handler);
  }
  , [darkModeMediaQuery]);

  React.useEffect(() => {
    i18n.changeLanguage(settings.language);
  }, [i18n, settings.language]);

  return (
    <div className="app-container" style={{backgroundColor: darkMode ? '#333' : '#fff'}}>
      <div className="header" style={{backgroundColor: darkMode ? '#333' : '#fff', minHeight: showMenu ? '50rem' : 0}}>
        <div style={{display: 'flex', alignItems: 'space-between', alignSelf: 'flex-start'}}>
          <MenuOutlinedIcon onClick={showBibleMenu} sx={{alignSelf: 'flex-start'}}/>
        </div>
        {showMenu && (
          <BibleMenu
              translations={translations}
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
              selectedChapter={selectedChapter}
              setSelectedChapter={setSelectedChapter}
              selectedVerse={selectedVerse}
              setSelectedVerse={handleSelectedVerse}
              language={settings.language}
              setLanguage={changeLanguage}
              showMenu={showMenu}
              darkMode={darkMode}
            />
          )}
          {!showMenu && (
          <h3 style={{color: darkMode ? '#fff' : '#000', alignSelf: 'flex-start', padding: 0, margin: 0}}>{translations.find((translation) => translation.language === settings.language)?.bible[selectedBook]?.title}</h3>
          )}
        <button className="settings-button" onClick={showSettings} style={{backgroundColor: darkMode ? '#333' : '#fff'}}>
          <SettingsOutlinedIcon sx={{padding: 0}} style={{padding: 0, margin: 0, backgroundColor: darkMode ? '#333' : '#fff'}}/>
        </button>
      </div>
      {!showMenu && (
        <div className="main-container">
          <BibleText fontSize={settings.fontSize.toString()}   selectedVerse = {getSelectedVerse()} bibleData = {translations.find((translation) => translation.language === settings.language)?.bible ?? translations[0].bible} language={settings.language} />
        </div>
      )}
      {showSettingsModal && (
        <SettingsModal
          onClose={() => setShowSettingsModal(false)}
          onLanguageChange={changeLanguage}
          onFontSizeChange={changeFontSize}
          fontSize={settings.fontSize}
          isOpen={showSettingsModal}
          language={settings.language}
          translations={translations}
          setLanguage={changeLanguage}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default App;