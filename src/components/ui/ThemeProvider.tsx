import React, { createContext, useContext, ReactNode } from 'react';

// Define a theme with Seevet's brand colors
export const theme = {
  colors: {
    primary: {
      main: '#0056b3', // Azul principal da Seevet
      light: '#3378c5',
      dark: '#003b7a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4caf50', // Verde para CTAs e elementos de destaque
      light: '#80e27e',
      dark: '#087f23',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#00bcd4', // Azul claro para elementos de destaque secundários
      light: '#62efff',
      dark: '#008ba3',
      contrastText: '#000000',
    },
    gray: {
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    text: {
      primary: '#212529',
      secondary: '#495057',
      disabled: '#6c757d',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
      dark: '#343a40',
    },
    error: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    success: '#28a745',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    round: '50%',
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    large: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
  },
  // Breakpoints for responsive design
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
};

// Create a context for the theme
export const ThemeContext = createContext(theme);

// Theme provider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use the theme
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
