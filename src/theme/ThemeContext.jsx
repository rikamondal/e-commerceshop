import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
    localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;