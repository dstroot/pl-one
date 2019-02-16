import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import Disclosure from "../Disclosure";

describe("Disclosure", () => {
  it("it should render", () => {
    const component = renderer.create(<Disclosure />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<Disclosure />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it("it should expand when 'More' is clicked", () => {
    // now click to expand the view
    const button = getMountedComponent()
      .find("span")
      .first();
    button.simulate("click");

    // check for new paragraphs
    const p = getMountedComponent()
      .find("p")
      .at(3);

    expect(p.text()).toContain(
      "Indexed Universal Life insurance does not directly participate in any stock or equity investments."
    );
  });
});
