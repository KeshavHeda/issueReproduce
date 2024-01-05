import React from "react";
import { render } from "@testing-library/react";
import MenuMainComp from "./MenuLeftComp.js";


describe("Test for MenuMainComp", () => {

  it("Should match the snapshot of MenuMainComp component", () => {

    const tree = render(
        <MenuMainComp props={{menuLeftText: "MenuLeftSide", screenTitle: "App Title", menuRightText: "MenuRightSide"}} />
    );

    expect(tree).toMatchSnapshot();
  });

});
