import { createContext } from "react";

export const LanguageContext = createContext<{
  language?: any;
  changeLanguage: any;
}>({
  language: "en",
  changeLanguage: () => {},
});
