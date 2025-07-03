"use client";
import React, { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as locales from "@mui/material/locale";

// Create the context
export const LocalesContext = createContext({
  locale: "faIR",
  setLocale: () => {},
});

// Create the provider component
export const LocalesProvider = ({ children }) => {
  const [locale, setLocale] = useState("faIR");

  // Create theme with locale
  const themeWithLocale = useMemo(
    () =>
      createTheme(
        {
          direction: locale === "faIR" ? "rtl" : "ltr",
        },
        locales[locale]
      ),
    [locale]
  );

  return (
    <LocalesContext.Provider value={{ locale, setLocale }}>
      <ThemeProvider theme={themeWithLocale}>{children}</ThemeProvider>
    </LocalesContext.Provider>
  );
};
// Usage in your app