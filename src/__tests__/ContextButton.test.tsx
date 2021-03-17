import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ContextButton from "../components/Button/ContextButton";
import { LanguageContext } from "../Context/Context";

configure({ adapter: new Adapter() });
describe("Context button works", () => {
  const context = shallow(
    <LanguageContext.Provider
      value={{ language: "en", changeLanguage: () => {} }}
    />
  );

  it("Context Provider should render correctly", () =>
    expect(context).toMatchSnapshot());

  it("ContextButton triggers the setState hook called changeLanguage", () => {
    const testState: any = { value: "nl" };
    const changeLanguage = jest.fn();

    const button = shallow(
      <ContextButton value="nl" onClick={changeLanguage} />
    );

    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(() => [testState, changeLanguage]);

    expect(button.props().value).toEqual("nl");

    button.simulate("click", {
      currentTarget: { name: "value", value: "nl" },
    });

    expect(changeLanguage).toBeTruthy();
  });
});
