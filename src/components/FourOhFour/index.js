import React from "react";
import PropTypes from "prop-types";

// Styles
import "./styles.scss";

// image
import image from "./media/giphy.webp";

const FourOhFour = () => {
  return (
    <div className="cover" style={{ backgroundImage: `url(${image})` }}>
      <div className="d-flex justify-content-center color-wash">
        <h1 className="mt-5 p-5 display-3 text-white">Oops... 404</h1>
      </div>
    </div>
  );
};

// https://codeburst.io/validating-props-easily-with-react-proptypes-96e80208207

FourOhFour.propTypes = {
  /** The image URL */
  image: PropTypes.string
};

FourOhFour.defaultProps = {
  image: "https://i.giphy.com/media/sMABNWsUWPC1y/giphy.gif"
};

export default FourOhFour;
