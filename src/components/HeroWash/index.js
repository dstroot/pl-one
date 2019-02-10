import React from "react";
import PropTypes from "prop-types";

/**
HeroWash is a component that applies a primary color wash over a background image. 
It is fully responsive and even the text uses fluid sizes.
 */
const HeroWash = ({ logo, bgimage, tagline, line1, line2 }) => {
  const divHero = {
    /* Image with a color wash */
    backgroundImage: `linear-gradient(to top, rgba(0, 142, 215, 0.9), rgba(0, 142, 215, 0.4)), url(${bgimage})`,

    /* Set height relative to width */
    height: "40vw",
    minHeight: "325px",

    /* Position and center the image to scale nicely on all screens */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative"
  };

  // place the text on the hero image - center text, viewport wide, at the bottom
  const heroText = {
    textAlign: "center",
    position: "absolute",
    bottom: "5vw",
    width: "100vw",
    color: "white"
  };

  const textBig = {
    fontSize: `calc(32px + 1.5vw + 0.5vmin)`,
    marginBottom: "0",
    fontWeight: "500"
  };

  const textSmall = {
    marginTop: "-0.5vw",
    marginBottom: "0",
    fontSize: `calc(8px + 1.5vw + 0.5vmin)`,
    fontWeight: "300"
  };

  return (
    <div style={divHero}>
      <div style={heroText}>
        <img className="d-block-inline" src={logo} alt="hero" />
        <p style={textBig}>{tagline}</p>
        <p style={textSmall}>{line1}</p>
        <p style={textSmall}>{line2}</p>
      </div>
    </div>
  );
};

// note the comments are used for storybook.
HeroWash.propTypes = {
  /** string representing a URL for the background image */
  bgimage: PropTypes.string.isRequired,
  /** Additional line 1 */
  line1: PropTypes.string,
  /** Additional line 2 */
  line2: PropTypes.string,
  /** string representing a URL for the logo */
  logo: PropTypes.string.isRequired,
  /** string for the tagline */
  tagline: PropTypes.string.isRequired
};

export default HeroWash;
