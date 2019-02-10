import React from "react";
import renderer from "react-test-renderer";

// import component to test
import AboutUs from "../AboutUs";

describe("AboutUs", () => {
  it("it should render", () => {
    const component = renderer.create(<AboutUs />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
