import React, { useEffect } from "react";
import "./styles.scss";

import AboutUs from "../../components/AboutUs";
import Map from "../../components/Map";

const About = () => {
  // Some default styles
  const styles = {
    width: "100%",
    height: "500px"
  };

  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • About`;
    window.scrollTo(0, 0);
  });

  return (
    <div className="mt-5 pt-3">
      <AboutUs />
      <Map styles={styles} APIKey={API_KEY} scheme="dark" />
    </div>
  );
};

export default About;
