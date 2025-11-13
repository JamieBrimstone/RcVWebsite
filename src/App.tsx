import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BibleMenu from "./components/BibleMenu";
import BibleText, { type SelectedVerse } from "./components/BibleText";
import { SettingsModal } from "./components/SettingsModal";
import "./App.css";
import english from "./data/english2.json";
import german from "./data/german.json";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./i18n.js";
import { Search } from "./components/Search";

export interface BibleTextProps {
	text: string;
}

export interface Chapter {
	[verse: string]: BibleTextProps;
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

export interface Translation {
	name: string;
	abbreviation: string;
	language: string;
	bible: Book[];
}

export interface Settings {
	language: string;
	fontSize: number;
	compareMode?: boolean;
}

const defaultSettings: Settings = {
	language: "en",
	fontSize: 16,
	compareMode: false,
};
export const englishJSON = english as Book[];
export const germanJSON = german as Book[];

const App = () => {
	const { t, i18n } = useTranslation();
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [settings, setSettings] = useState<Settings>(() => {
		const savedSettings = localStorage.getItem("settings");
		if (savedSettings) {
			const parsed = JSON.parse(savedSettings);
			return { ...defaultSettings, ...parsed };
		}
		return defaultSettings;
	});
	const [selectedBook, setSelectedBook] = useState<number>(() => {
		const savedBook = localStorage.getItem("selectedBook");
		return savedBook ? parseInt(savedBook) : 39;
	});
	const [selectedChapter, setSelectedChapter] = useState<number | null>(() => {
		const savedChapter = localStorage.getItem("selectedChapter");
		return savedChapter ? parseInt(savedChapter) : 1;
	});
	const [selectedVerse, setSelectedVerse] = useState<number | null>(() => {
		const savedVerse = localStorage.getItem("selectedVerse");
		return savedVerse ? parseInt(savedVerse) : 1;
	});
	const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
	const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
	const [compareMode, setCompareMode] = useState<boolean>(
		settings.compareMode ?? false,
	);
	const translations: Translation[] = [
		{
			name: "English",
			abbreviation: "RCV",
			language: "en",
			bible: englishJSON,
		},
		{
			name: "German",
			abbreviation: "RCV",
			language: "de",
			bible: germanJSON,
		},
	];

	// Update localStorage when states change
	useEffect(() => {
		localStorage.setItem("settings", JSON.stringify(settings));
	}, [settings]);

	// Sync compareMode with settings
	useEffect(() => {
		setSettings((prevSettings) => ({ ...prevSettings, compareMode }));
	}, [compareMode]);

	useEffect(() => {
		localStorage.setItem("selectedBook", selectedBook.toString());
	}, [selectedBook]);

	useEffect(() => {
		localStorage.setItem("selectedChapter", selectedChapter?.toString() ?? "");
	}, [selectedChapter]);

	useEffect(() => {
		localStorage.setItem("selectedVerse", selectedVerse?.toString() ?? "");
	}, [selectedVerse]);

	// Change language
	const changeLanguage = (language: string) => {
		setSettings({ ...settings, language });
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
		setShowMenu(false);
		setShowSearchModal(false);
	}
	function showBibleMenu() {
		setShowMenu(!showMenu);
		setShowSettingsModal(false);
		setShowSearchModal(false);
	}

	function handleSelectedVerse(verse: number | null) {
		setSelectedVerse(verse);
		setShowMenu(false);
	}

	const handlePreviousChapter = () => {
		if (selectedChapter && selectedChapter > 1) {
			setSelectedChapter(selectedChapter - 1);
			setSelectedVerse(1);
		}
	};

	const handleNextChapter = () => {
		const currentBook = translations.find(
			(translation) => translation.language === settings.language,
		)?.bible[settings.language === "en" ? selectedBook : selectedBook - 39];

		if (
			selectedChapter &&
			currentBook &&
			selectedChapter < currentBook.pages.length
		) {
			setSelectedChapter(selectedChapter + 1);
			setSelectedVerse(1);
		}
	};

	const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	const [darkMode, setDarkMode] = useState(darkModeMediaQuery.matches);

	useEffect(() => {
		const handler = (event: MediaQueryListEvent) => {
			setDarkMode(event.matches);
		};
		darkModeMediaQuery.addEventListener("change", handler);
		return () => darkModeMediaQuery.removeEventListener("change", handler);
	}, [darkModeMediaQuery]);

	React.useEffect(() => {
		i18n.changeLanguage(settings.language);
	}, [i18n, settings.language]);

	function showSearch() {
		setShowSearchModal(!showSearchModal);
		setShowMenu(false);
	}

	return (
		<div
			className="app-container"
			style={{ backgroundColor: darkMode ? "#333" : "#fff", height: "100%" }}
		>
			<div
				className="header"
				style={{ backgroundColor: darkMode ? "#333" : "#fff" }}
			>
				<div
					style={{
						display: "flex",
						alignItems: "space-between",
						alignSelf: "flex-start",
					}}
				>
					<MenuOutlinedIcon
						onClick={showBibleMenu}
						sx={{ alignSelf: "flex-start", cursor: "pointer" }}
					/>
				</div>
				{!showMenu && !showSearchModal && (
					<h3
						style={{
							color: darkMode ? "#fff" : "#000",
							alignSelf: "flex-start",
							padding: 0,
							margin: 0,
						}}
					>
						{
							translations.find(
								(translation) => translation.language === settings.language,
							)?.bible[
								settings.language === "en" ? selectedBook : selectedBook - 39
							]?.title
						}
					</h3>
				)}
				{showSearchModal && (
					<h3
						style={{
							color: darkMode ? "#fff" : "#000",
							alignSelf: "flex-start",
							padding: 0,
							margin: 0,
						}}
					>
						{t("search")}
					</h3>
				)}
				<div
					style={{
						display: "flex",
						alignSelf: "flex-start",
						alignItems: "center",
					}}
				>
					<button
						type="button"
						className="search-button"
						style={{
							backgroundColor: darkMode ? "#333" : "#fff",
							marginRight: "1rem",
						}}
						onClick={showSearch}
					>
						<SearchOutlinedIcon
							sx={{ padding: 0, height: "1.5rem", width: "1.5rem" }}
							style={{
								padding: 0,
								margin: 0,
								backgroundColor: darkMode ? "#333" : "#fff",
								color: darkMode ? "#fff" : "#000",
							}}
						/>
					</button>
					<button
						type="button"
						className="settings-button"
						onClick={showSettings}
						style={{ backgroundColor: darkMode ? "#333" : "#fff" }}
					>
						<SettingsOutlinedIcon
							sx={{ padding: 0 }}
							style={{
								padding: 0,
								margin: 0,
								backgroundColor: darkMode ? "#333" : "#fff",
								color: darkMode ? "#fff" : "#000",
							}}
						/>
					</button>
				</div>
			</div>
			<div className="main-container" style={{ marginTop: "-1px" }}>
				{!showMenu && showSearchModal === false && (
					<BibleText
						selectedVerse={getSelectedVerse()}
						bibleData={
							translations.find(
								(translation) => translation.language === settings.language,
							)?.bible || []
						}
						language={settings.language}
						fontSize={settings.fontSize.toString()}
						onPreviousChapter={handlePreviousChapter}
						onNextChapter={handleNextChapter}
						compareMode={compareMode}
						englishBible={englishJSON}
						germanBible={germanJSON}
					/>
				)}

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
				{showSearchModal && !showMenu && (
					<Search
						onClose={() => setShowSearchModal(false)}
						isOpen={showSearchModal}
						darkMode={darkMode}
						//books is current translation
						books={
							translations.find(
								(translation) => translation.language === settings.language,
							)?.bible ?? translations[0].bible
						}
						onSelected={(_book, bookId, chapter, verse) => {
							setShowSearchModal(false);
							setSelectedBook(bookId);
							setSelectedChapter(chapter);
							setSelectedVerse(verse);
						}}
					/>
				)}
			</div>
			{showSettingsModal && !showSearchModal && (
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
					onChangeDarkMode={() => {
						setDarkMode(!darkMode);
					}}
					compareMode={compareMode}
					onCompareModeChange={setCompareMode}
				/>
			)}
		</div>
	);
};

export default App;
