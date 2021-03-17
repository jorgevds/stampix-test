import React, { useContext } from "react";
import { LanguageContext } from "../../Context/Context";

interface ContextButtonProps {
  children?: React.ReactNode;
  value: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ContextButton: React.FC<ContextButtonProps> = ({ children, value }) => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const onButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    changeLanguage(e.currentTarget.value);
  };

  return (
    <button onClick={onButtonClick} value={value} id={language}>
      {children}
    </button>
  );
};

export default ContextButton;
