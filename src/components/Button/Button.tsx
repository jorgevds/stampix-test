import React from "react";
import { FormattedMessage } from "react-intl";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <a href={href} rel="noopener noreferrer" className="z-10 w-3/5 mx-auto">
      <button
        className="w-full py-4 mx-auto font-sans text-xs font-bold text-center uppercase transition duration-300 ease-in-out rounded-lg hover:shadow-xl text-petrol bg-turquiose"
        id="buttonText"
      >
        <FormattedMessage id={text} defaultMessage={text} />
      </button>
    </a>
  );
};

export default Button;
