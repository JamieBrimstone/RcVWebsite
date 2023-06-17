import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Translation } from '../App';
import { useTranslation } from 'react-i18next';
import './SettingsModal.css';

interface SettingsModalProps {
  translations: Translation[];
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
  return (
    <Dialog open={props.isOpen} onClose={props.onClose} sx={darkModeStyle}>
      <Box sx={[darkModeStyle, {p: '2rem'}]}>
      <h2 style={darkModeStyle}>{t('search')}</h2>
      </Box>
    </Dialog>
  );
}
