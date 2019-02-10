import React from "react";
import { create } from "react-test-renderer";
import { mount } from "enzyme";
import News from "../News";

describe("News", () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<News />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it("it should render", () => {
    let tree = create(<News />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("it should say News!", () => {
    const h1 = getMountedComponent()
      .find("h1")
      .first();

    expect(h1.text()).toContain("News!");
  });
});
