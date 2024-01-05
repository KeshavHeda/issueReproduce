import React from "react";
import { render } from "@testing-library/react";
import MenuRightComp from "./MenuRightComp.js";


describe("Test for MenuRightComp", () => {

  it("Should match the snapshot of MenuRightComp component", () => {

    const tree = render(
        <MenuRightComp props={{menuText: "MenuRightSide"}}  />
    );

    expect(tree).toMatchSnapshot();
  });

});
