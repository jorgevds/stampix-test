import React from "react";
import stampix from "../../images/stampix-app.svg";

interface ConsumerImageProps {}

const ConsumerImage: React.FC<ConsumerImageProps> = () => {
  return (
    <article className="absolute flex justify-center w-full mx-auto sm:left-0 hover-target lg:-bottom-3.5 md:bottom-0">
      <img src={stampix} className="mx-auto" alt="Stampix app" />
    </article>
  );
};

export default ConsumerImage;
