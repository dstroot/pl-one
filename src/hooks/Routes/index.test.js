import React from "react";
import renderer from "react-test-renderer";

// import component to test
import Routes from "../Routes";

// Test setup
const Home = () => <div>Home</div>;
const About = () => <div>Home</div>;
const testData = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About }
];

describe("Routes", () => {
  it("it should render", () => {
    const component = renderer.create(<Routes data={testData} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
