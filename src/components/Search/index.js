import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import image from "./media/financial_pro_2.jpg";
import Disclosure from "../Disclosure";

const textBig = {
  fontSize: `calc(24px + 1vw)`,
  marginBottom: "0",
  fontWeight: "300"
};

/**
Search is a component that is used to search for financial professionals near you.  
Note: This component uses the <Disclosure /> component.
 */
const Search = () => {
  // NOTE: do not use "@media" at start of media query
  const isTiny = useMediaQuery(`screen and (max-width: 200px)`);
  const isWide = useMediaQuery(`screen and (min-width: 768px)`);
  const isWider = useMediaQuery(`screen and (min-width: 900px)`);

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {isWide && (
          <div className="col-md-6">
            <div className="thumbnail">
              <img
                className="img-fluid"
                src={image}
                alt="financial professional"
              />
            </div>
          </div>
        )}
        <div className="col-md-6">
          {!isTiny && (
            <h1 style={textBig}>CONFIDENCE IN YOUR FUTURE STARTS HERE</h1>
          )}
          <h3 className="">Find a Financial Professional</h3>
          {isWider && (
            <p className="lead">
              You want to reach your goals. A financial professional can help
              you get there. Search for a qualified professional near you.
            </p>
          )}
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <input
                  aria-label="zip code"
                  type="text"
                  className="form-control mb-2"
                  id="zip"
                  placeholder="enter zip code"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Disclosure />
    </div>
  );
};

export default Search;
