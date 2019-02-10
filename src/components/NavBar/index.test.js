import React from "react";
import renderer from "react-test-renderer";

import NavBar from "../NavBar";

const navData = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" }
];

describe("NavBar", () => {
  it("it should render", () => {
    const component = renderer.create(<NavBar data={navData} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
