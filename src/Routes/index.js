import React from "react";
import { Router } from "@reach/router";

// create a component that wraps a component and adds the path property
const Route = ({ component: Component, ...rest }) => <Component {...rest} />;

const Routes = ({ data }) => (
  <Router>
    {data.map((i, index) => (
      <Route key={index} path={i.path} component={i.component} />
    ))}
  </Router>
);

export default Routes;
