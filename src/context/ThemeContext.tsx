import React, { useState, useEffect, useContext } from "react";

import type { Children } from "common/types";

const defaultValue = "light";
const modeContext = React.createContext(defaultValue);

export const useMode = () => {
  return useContext(modeContext);
};

const ThemeContext: React.FC<Children> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const modeMe = (e: MediaQueryListEvent) => {
      setMode(e.matches ? "dark" : "light");
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", modeMe);
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeListener(modeMe);
  }, []);

  return <modeContext.Provider value={mode}>{children}</modeContext.Provider>;
};

export default ThemeContext;
