import React from "react";

// styles
import "./scss/main.scss";

// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Routes from "./routes";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

const navData = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About }
];

const App = () => (
  <>
    <NavBar data={navData} />
    <Routes data={navData} />
    <Footer />
  </>
);

export default App;
