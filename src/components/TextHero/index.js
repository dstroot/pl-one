import React from "react";
import PropTypes from "prop-types";

const TextHero = ({ heading, text, link }) => {
  const textBig = {
    fontSize: `calc(26px + 1.5vw + 0.5vmin)`,
    lineHeight: "1.2",
    fontWeight: "300"
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col">
          <div className="text-center mx-auto">
            <p style={textBig}>{heading || ""}</p>
            <p className="lead">{text || ""}</p>
            <a href={link} target="_self" className="btn btn-primary">
              We can help!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

TextHero.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string
};

export default TextHero;
