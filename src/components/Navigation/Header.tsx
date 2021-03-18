import React, { useContext } from "react";
import { LanguageContext } from "../../Context/Context";
import ContextButton from "../Button/ContextButton";
import Logo from "../Images/Logo";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const language = useContext(LanguageContext);

  return (
    <header className="py-12 pb-8 xxxl:pt-32 minlg:w-screen">
      <nav className="w-7/12 m-auto xxl:w-3/6 xxxl:w-2/6 sm:w-4/5 minlg:px-2">
        <ul className="flex text-xs text-white">
          <li>
            <a href="/" rel="noopener noreferrer">
              <Logo whiteFilter={"stampix"} />
            </a>
          </li>
          <li
            className={`my-auto ml-auto ${
              language.language === "nl" ? null : "hover-brightness"
            }`}
          >
            <ContextButton value="nl">NL</ContextButton>
          </li>
          <li
            className={`px-4 my-auto ${
              language.language === "fr" ? null : "hover-brightness"
            }`}
          >
            <ContextButton value="fr">FR</ContextButton>
          </li>
          <li
            className={`my-auto ${
              language.language === "en" ? null : "hover-brightness"
            }`}
          >
            <ContextButton value="en">EN</ContextButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
