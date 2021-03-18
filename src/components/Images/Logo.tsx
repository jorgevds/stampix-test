import React from "react";
import stampix from "../../images/stampix-free-prints.png";

interface LogoProps {
  whiteFilter?: string;
  margin?: string;
}

const Logo: React.FC<LogoProps> = ({ margin, whiteFilter }) => {
  return (
    <img
      src={stampix}
      className={`w-3/5 ${margin} ${whiteFilter}`}
      alt="Stampix logo"
    />
  );
};

export default Logo;
