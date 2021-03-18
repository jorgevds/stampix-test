import React, { useContext, useState, useCallback } from "react";
import { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { LanguageContext } from "../../Context/Context";
import Consumers from "./Content/Consumers";
import Businesses from "./Content/Businesses";
import { Loading } from "./Loading";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  const { language } = useContext(LanguageContext);
  const [compiledMessages, setMessages] = useState({});

  function loadLocaleData(locale: string) {
    switch (locale) {
      case "fr":
        return import("../../languages/compiled/fr.json");
      case "nl":
        return import("../../languages/compiled/nl.json");
      default:
        return import("../../languages/compiled/en.json");
    }
  }

  const bootstrapApplication = useCallback(async (locale: string) => {
    const messages = await loadLocaleData(locale);
    setMessages(messages);
  }, []);

  useEffect(() => {
    bootstrapApplication(language);
  }, [language, bootstrapApplication]);

  return (
    <IntlProvider
      messages={compiledMessages}
      locale={language}
      defaultLocale="en"
    >
      {Object.keys(compiledMessages).length > 1 ? (
        <section className="w-7/12 m-auto overflow-hidden bg-white rounded-lg shadow-md xxxl:mt-20 xxxl:h-2/5 h-4/6 minlg:grid minlg:grid-rows-3 auto-cols-fr xxxl:w-2/6 xxl:w-3/6 sm:w-4/5 minlg:grid-cols-2 xl:h-3/5 md:h-full">
          <Consumers />
          <Businesses />
        </section>
      ) : (
        <Loading />
      )}
    </IntlProvider>
  );
};
export default LandingPage;
