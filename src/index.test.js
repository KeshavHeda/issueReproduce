import React from "react";
import { render } from "@testing-library/react";
import MenuMainComp from "./index.js";


describe("Test for Program", () => {

  it("Should match the snapshot of Menu component", () => {

    const tree = render(
        <MenuMainComp props={{menuLeftText: "MenuLeftSide", screenTitle: "App Title", menuRightText: "MenuRightSide"}} />
    );

    expect(tree).toMatchSnapshot();
  });

});
