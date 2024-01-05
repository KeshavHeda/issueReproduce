import React from "react";
import { render } from "@testing-library/react";
import MenuLeftComp from "./MenuLeftComp.js";


describe("Test for MenuLeftComp", () => {

  it("Should match the snapshot of MenuLeftComp component", () => {

    const tree = render(
        <MenuLeftComp props={{menuText: "MenuLeftSide"}} />
    );

    expect(tree).toMatchSnapshot();
  });

});
