import React, { useState } from "react";
import { LanguageContext } from "./Context/Context";
import LandingPage from "./components/Landing/LandingPage";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  const [language, changeLanguage] = useState("en");
  const value = { language, changeLanguage };

  return (
    <LanguageContext.Provider value={value}>
      <Layout>
        <LandingPage />
      </Layout>
    </LanguageContext.Provider>
  );
};

export default App;
