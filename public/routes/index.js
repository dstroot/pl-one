import React from "react";
import { Router } from "@reach/router";
import FourOhFour from "../components/FourOhFour";

// create a component that wraps a component and adds the path property
const Route = ({ component: Component, ...rest }) => <Component {...rest} />;

// Routes component that provides the Router and Routes
const Routes = ({ data }) => (
  <Router>
    {data.map((item, index) => (
      <Route key={index} path={item.path} component={item.component} />
    ))}
    <FourOhFour default />
  </Router>
);

export default Routes;

/**
 * Below is how this is used
 */

//  // components
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Routes from "./Routes";

// // pages
// import Home from "./pages/Home";
// import About from "./pages/About";

// const navData = [
//   { path: "/", name: "Home", component: Home },
//   { path: "/about", name: "About", component: About }
// ];

// const App = () => (
//   <>
//     <NavBar data={navData} />
//     <Routes data={navData} />
//     <Footer />
//   </>
// );
