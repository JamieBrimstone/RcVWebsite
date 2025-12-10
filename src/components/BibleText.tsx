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
}) => {
	const book = bibleData.find((book) => book.id === selectedVerse.book);
	const ref = React.useRef<HTMLDivElement>(null);
	const englishScrollRef = React.useRef<HTMLDivElement>(null);
	const germanScrollRef = React.useRef<HTMLDivElement>(null);
	const isScrollingRef = React.useRef<boolean>(false);
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

	// Synchronized scrolling effect for compare mode
	useEffect(() => {
		if (!compareMode || !englishScrollRef.current || !germanScrollRef.current) {
			return;
		}

		const englishContainer = englishScrollRef.current;
		const germanContainer = germanScrollRef.current;

		const handleEnglishScroll = () => {
			if (isScrollingRef.current) return;
			isScrollingRef.current = true;

			const englishMaxScroll =
				englishContainer.scrollHeight - englishContainer.clientHeight;
			const germanMaxScroll =
				germanContainer.scrollHeight - germanContainer.clientHeight;

			if (englishMaxScroll > 0 && germanMaxScroll > 0) {
				const englishScrollRatio =
					englishContainer.scrollTop / englishMaxScroll;
				germanContainer.scrollTop = englishScrollRatio * germanMaxScroll;
			}

			requestAnimationFrame(() => {
				isScrollingRef.current = false;
			});
		};

		const handleGermanScroll = () => {
			if (isScrollingRef.current) return;
			isScrollingRef.current = true;

			const englishMaxScroll =
				englishContainer.scrollHeight - englishContainer.clientHeight;
			const germanMaxScroll =
				germanContainer.scrollHeight - germanContainer.clientHeight;

			if (englishMaxScroll > 0 && germanMaxScroll > 0) {
				const germanScrollRatio = germanContainer.scrollTop / germanMaxScroll;
				englishContainer.scrollTop = germanScrollRatio * englishMaxScroll;
			}

			requestAnimationFrame(() => {
				isScrollingRef.current = false;
			});
		};

		englishContainer.addEventListener("scroll", handleEnglishScroll);
		germanContainer.addEventListener("scroll", handleGermanScroll);

		return () => {
			englishContainer.removeEventListener("scroll", handleEnglishScroll);
			germanContainer.removeEventListener("scroll", handleGermanScroll);
		};
	}, [compareMode]);

	useEffect(() => {
		if (ref.current && selectedVerse.verse) {
			const element = document.getElementById(
				compareMode
					? `chapter-${selectedVerse.chapter}-verse-${selectedVerse.verse}-en`
					: `chapter-${selectedVerse.chapter}-verse-${selectedVerse.verse}`,
			);

			if (element) {
				// Get the header height
				const header = document.querySelector(".header");
				const headerHeight = header?.getBoundingClientRect().height || 0;

				if (compareMode && englishScrollRef.current) {
					// For compare mode, scroll within the English container
					const container = englishScrollRef.current;
					const elementRect = element.getBoundingClientRect();
					const containerRect = container.getBoundingClientRect();
					const scrollTop =
						container.scrollTop +
						elementRect.top -
						containerRect.top -
						headerHeight;

					container.scrollTo({
						top: scrollTop,
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
			<div ref={ref} style={{ fontSize: `${fontSize}px`, flex: 1 }}>
				{compareMode && englishPage && germanPage ? (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
							height: "calc(100vh - 120px)",
						}}
					>
						{/* English Translation */}
						<div
							ref={englishScrollRef}
							style={{
								width: "100%",
								height: "50%",
								overflowY: "auto",
								borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
							}}
						>
							<div style={{ padding: "0 1rem 1rem 1rem" }}>
								{englishPage.text.map((line, index) => (
									<p
										key={`verse-${index + 1}-en`}
										id={`chapter-${englishPage.id}-verse-${index + 1}-en`}
									>
										{line}
									</p>
								))}
							</div>
						</div>
						{/* German Translation */}
						<div
							ref={germanScrollRef}
							style={{
								width: "100%",
								height: "50%",
								overflowY: "auto",
							}}
						>
							<div style={{ padding: "0 1rem 1rem 1rem" }}>
								{germanPage.text.map((line, index) => (
									<p
										key={`verse-${index + 1}-de`}
										id={`chapter-${germanPage.id}-verse-${index + 1}-de`}
									>
										{line}
									</p>
								))}
							</div>
						</div>
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
					position: "sticky",
					bottom: 0,
					display: "flex",
					justifyContent: "center",
					gap: "20px",
					paddingBottom: "1rem",
					paddingTop: "1rem",
					backgroundColor: "white",
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
