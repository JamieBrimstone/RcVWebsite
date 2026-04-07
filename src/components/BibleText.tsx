/** biome-ignore-all lint/a11y/useButtonType: <Todo> */
import React, { useEffect } from "react";
import type { Book } from "../App";
import { useTranslation } from "react-i18next";

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
	compareMode?: boolean;
	englishBible?: Book[];
	germanBible?: Book[];
	darkMode?: boolean;
}

const BibleText: React.FC<BibleTextProps> = ({
	selectedVerse,
	bibleData,
	// language,
	fontSize,
	onPreviousChapter,
	onNextChapter,
	compareMode = false,
	englishBible = [],
	germanBible = [],
	darkMode,
}) => {
	const book = bibleData.find((book) => book.id === selectedVerse.book);
	const ref = React.useRef<HTMLDivElement>(null);
	const compareScrollRef = React.useRef<HTMLDivElement>(null);
	const { t } = useTranslation();
	// Get books for comparison mode
	const englishBook = compareMode
		? englishBible.find((book) => book.id === selectedVerse.book)
		: null;
	const germanBook = compareMode
		? germanBible.find((book) => book.id === selectedVerse.book)
		: null;

	const currentPage = book?.pages.find(
		(page) => page.id === selectedVerse.chapter,
	);

	const englishPage =
		compareMode && englishBook
			? englishBook.pages.find((page) => page.id === selectedVerse.chapter)
			: null;
	const germanPage =
		compareMode && germanBook
			? germanBook.pages.find((page) => page.id === selectedVerse.chapter)
			: null;

	useEffect(() => {
		if (ref.current && selectedVerse.verse) {
			// In compare mode, scroll to English version by default
			const elementId = compareMode
				? `chapter-${selectedVerse.chapter}-verse-${selectedVerse.verse}-en`
				: `chapter-${selectedVerse.chapter}-verse-${selectedVerse.verse}`;

			const element = document.getElementById(elementId);

			if (element) {
				// Get the header height
				const header = document.querySelector(".header");
				const headerHeight = header?.getBoundingClientRect().height || 0;

				if (compareMode && compareScrollRef.current) {
					// For compare mode, scroll within the single container
					const container = compareScrollRef.current;
					const elementRect = element.getBoundingClientRect();
					const containerRect = container.getBoundingClientRect();
					const scrollTop =
						container.scrollTop +
						elementRect.top -
						containerRect.top -
						headerHeight;

					container.scrollTo({
						top: Math.max(0, scrollTop),
						behavior: "smooth",
					});
				} else {
					// For normal mode, use window scroll
					const elementRect = element.getBoundingClientRect();
					const absoluteElementTop = elementRect.top + window.scrollY;

					if (selectedVerse.verse === 1) {
						element.scrollIntoView({ behavior: "smooth", block: "center" });
					} else {
						window.scrollTo({
							top: absoluteElementTop - headerHeight,
							behavior: "smooth",
						});
					}
				}
			}
		}
	}, [selectedVerse, compareMode]);

	return (
		<div
			className="bible-text-container"
			style={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div
				ref={ref}
				style={{
					fontSize: `${fontSize}px`,
					flex: 1,
					paddingLeft: "1rem",
					paddingRight: "1rem",
				}}
			>
				{compareMode && englishPage && germanPage ? (
					<div
						ref={compareScrollRef}
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
							height: "calc(100vh - 120px)",
							overflowY: "auto",
							overflowX: "hidden",
							padding: "0 1rem 1rem 0",
						}}
					>
						{englishPage.text.map((line, index) => {
							const germanLine = germanPage.text[index] ?? "";
							return (
								<div
									key={`verse-${index + 1}-compare`}
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "stretch",
										gap: "1rem",
									}}
								>
									<p
										id={`chapter-${englishPage.id}-verse-${index + 1}-en`}
										style={{
											flex: 1,
											minWidth: 0,
											margin: 0,
										}}
									>
										{line}
									</p>
									<div
										style={{
											width: 2,
											flexShrink: 0,
											backgroundColor: darkMode
												? "rgba(255, 255, 255, 0.2)"
												: "rgba(0, 0, 0, 0.2)",
											alignSelf: "stretch",
										}}
										aria-hidden
									/>
									<p
										id={`chapter-${germanPage.id}-verse-${index + 1}-de`}
										style={{
											flex: 1,
											minWidth: 0,
											margin: 0,
											opacity: 0.9,
										}}
									>
										{germanLine}
									</p>
								</div>
							);
						})}
					</div>
				) : currentPage ? (
					<div>
						{currentPage.text.map((line, index) => (
							<p
								key={`verse-${index + 1}`}
								id={`chapter-${currentPage.id}-verse-${index + 1}`}
							>
								{line}
							</p>
						))}
					</div>
				) : null}
			</div>
			<div
				className="chapter-navigation"
				style={{
					position: "absolute",
					width: "100%",
					bottom: 0,
					display: "flex",
					justifyContent: "center",
					gap: "20px",
					paddingBottom: "1rem",
					paddingTop: "1rem",
					backgroundColor: darkMode ? "#333" : "#fff",
					zIndex: 20,
				}}
			>
				{selectedVerse.chapter && selectedVerse.chapter > 1 && (
					<button
						onClick={onPreviousChapter}
						style={{ padding: "8px 16px", cursor: "pointer" }}
					>
						{selectedVerse.chapter - 1}
					</button>
				)}
				<span style={{ padding: "8px 16px" }}>
					{t("chapter")} {selectedVerse.chapter}
				</span>
				{book &&
					selectedVerse.chapter &&
					selectedVerse.chapter < book.pages.length && (
						<button
							onClick={onNextChapter}
							style={{ padding: "8px 16px", cursor: "pointer" }}
						>
							{selectedVerse.chapter + 1}
						</button>
					)}
			</div>
		</div>
	);
};

export default BibleText;
