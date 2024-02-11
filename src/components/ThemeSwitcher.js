import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const LightTheme = () => {
  const { theme } = useTheme();
  return <div className={`light-theme ${theme === 'light' ? 'active' : ''}`}>Light Theme</div>;
};

const DarkTheme = () => {
  const { theme } = useTheme();
  return <div className={`dark-theme ${theme === 'dark' ? 'active' : ''}`}>Dark Theme</div>;
};

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
  );
};

export { ThemeProvider, useTheme, LightTheme, DarkTheme, ThemeSwitcher };