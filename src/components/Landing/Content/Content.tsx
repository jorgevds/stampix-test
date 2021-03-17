import React from "react";
import { FormattedMessage } from "react-intl";
import { ChildrenProp } from "../../Layout/Layout";

interface ContentProps {
  children?: ChildrenProp;
  bg?: string;
  headerText?: any;
  bodyText?: string;
  bodyTag?: string;
}

const Content: React.FC<ContentProps> = ({
  children,
  bg,
  headerText,
  bodyText,
  bodyTag,
}) => {
  return (
    <section
      className={`relative hover-brightness row-start-1 row-end-4 hover-trigger flex flex-col justify-center w-full h-96 minlg:h-full text-lg text-petrol text-center sm:px-4 ${bg}`}
    >
      <h1 className="mb-1 text-sm">
        <FormattedMessage id={headerText} defaultMessage={headerText} />
      </h1>
      <article className="mx-auto mb-12">
        <h2 className="m-auto ">
          <FormattedMessage id={bodyText} defaultMessage={bodyText} />
        </h2>
        <h3 className="">
          <FormattedMessage id={bodyTag} defaultMessage={bodyTag} />
        </h3>
      </article>
      {children}
    </section>
  );
};

export default Content;
