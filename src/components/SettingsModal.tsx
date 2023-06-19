import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Translation } from "../App";
import { useTranslation } from "react-i18next";
import "./SettingsModal.css";

interface SettingsModalProps {
  translations: Translation[];
  isOpen: boolean;
  onClose: () => void;
  language: string;
  fontSize: number;
  onLanguageChange: (language: string) => void;
  onFontSizeChange: (fontSize: number) => void;
  setLanguage: (language: string) => void;
  darkMode: boolean;
}

export function SettingsModal(props: SettingsModalProps) {
  const rowLayout = {
    display: "flex",
    padding: 0,
  };
  const darkModeStyle = {
    backgroundColor: props.darkMode ? "#333" : "#fff",
    color: props.darkMode ? "#fff" : "#000",
  };
  const { t } = useTranslation();
  return (
    <Dialog open={props.isOpen} onClose={props.onClose} sx={darkModeStyle}>
      <Box sx={[darkModeStyle, { p: "2rem" }]}>
        <h2 style={darkModeStyle}>{t("settings")}</h2>
        <div
          style={{ ...darkModeStyle, display: "flex", flexDirection: "column" }}
        >
          <label style={{ ...darkModeStyle, paddingBottom: ".5rem" }}>
            {t("select_language")}
          </label>
          <select
            className="custom-select"
            style={{ fontSize: "16px", position: "relative" }}
            value={props.language}
            onChange={(e) => {
              props.setLanguage(e.target.value);
              props.onClose();
            }}
          >
            {props.translations.map((translation) => (
              <option key={translation.language} value={translation.language}>
                {translation.name} - {translation.abbreviation}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            ...darkModeStyle,
            display: "flex",
            flexDirection: "column",
            paddingTop: "1rem",
          }}
        >
          <label style={{ ...darkModeStyle, paddingBottom: ".5rem" }}>
            {t("select_font_size")}
          </label>
          <select
            className="custom-select"
            style={{ fontSize: "16px", position: "relative" }}
            value={props.fontSize}
            onChange={(e) => {
              props.onFontSizeChange(Number(e.target.value));
              props.onClose();
            }}
          >
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="22">22</option>
            <option value="24">24</option>
            <option value="26">26</option>
          </select>
        </div>
        {/* Create cancel and save button  */}
        <div style={{ ...darkModeStyle, display: "flex", paddingTop: "3rem" }}>
          <button style={{ ...darkModeStyle }} onClick={props.onClose}>
            {t("cancel")}
          </button>
          <button style={{ ...darkModeStyle }} onClick={props.onClose}>
            {t("save")}
          </button>
        </div>
      </Box>
    </Dialog>
  );
}
