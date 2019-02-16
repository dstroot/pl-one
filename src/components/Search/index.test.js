import React from "react";
import renderer from "react-test-renderer";
import Search from "../Search";

// simulate window resize
const fireResize = width => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

describe("Search", () => {
  fireResize(400);
  it("it should render", () => {
    const component = renderer.create(<Search />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  fireResize(800);
  it("it should render", () => {
    const component = renderer.create(<Search />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
