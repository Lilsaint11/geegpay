import React, { createContext, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };