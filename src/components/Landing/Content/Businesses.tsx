import React from "react";
import Button from "../../Button/Button";
import Content from "./Content";
import Image from "../../Images/BusinessImage";

interface BusinessesProps {}

const Businesses: React.FC<BusinessesProps> = () => {
  return (
    <Content
      bg="bg-white"
      headerText="businessesHeaderText"
      bodyText="businessesBodyText"
      bodyTag="businessesBodyTag"
    >
      <Button text="businessesButtonText" href="https://business.stampix.com" />
      <Image />
    </Content>
  );
};

export default Businesses;
