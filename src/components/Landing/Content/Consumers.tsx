import React from "react";
import Button from "../../Button/Button";
import Content from "./Content";

import ConsumerImage from "../../Images/ConsumerImage";

interface ConsumersProps {}

const Consumers: React.FC<ConsumersProps> = () => {
  return (
    <Content
      bg="bg-sunnyYellow"
      headerText="consumersHeaderText"
      bodyText="consumersBodyText"
      bodyTag="consumersBodyTag"
    >
      <Button text="consumersButtonText" href="https://stampix.com" />
      <ConsumerImage />
    </Content>
  );
};

export default Consumers;
