import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import StoryPage from './pages/StoryPage';
import CraftsmanshipPage from './pages/CraftmanshipPage'
import AffiliatePage from './pages/AffliatePage';
import JournalPage from './pages/JournalPage';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    secondary: {
      main: '#C19A6B', // Gold/earthy tone
      light: '#D4B483',
      dark: '#8B6914',
    },
    background: {
      default: '#faf9f7',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
    h1: {
      fontSize: '4.5rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 32px',
          fontSize: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/craftsmanship" element={<CraftsmanshipPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/affiliate" element={<AffiliatePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
