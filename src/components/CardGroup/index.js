import React from "react";

// styles
import "./styles.scss";

// import SVG files
import { ReactComponent as Flag } from "./media/flag.svg";
import { ReactComponent as Locked } from "./media/locked.svg";
import { ReactComponent as Handshake } from "./media/handshake.svg";

const CardGroup = () => {
  const textBig = {
    fontSize: `calc(26px + 1.5vw + 0.5vmin)`,
    lineHeight: "1.2",
    fontWeight: "300"
  };

  return (
    <div className="container-fluid bg-primary text-center text-white">
      <div className="row">
        <div className="col-10 offset-1">
          <p style={textBig} className="pt-5">
            What the Power of Pacific Means for You
          </p>
          <div className="card-group my-3">
            <div className="card bg-primary border-0">
              <div className="svg-container mx-auto">
                <Flag />
              </div>
              <div className="card-body">
                <h3 className="card-title">Freedom</h3>
                <p className="card-text">
                  Life insurance and retirement solutions to help you reach your
                  goals.
                </p>
              </div>
            </div>
            <div className="card bg-primary border-0">
              <div className="svg-container mx-auto">
                <Locked />
              </div>
              <div className="card-body">
                <h3 className="card-title">Security</h3>
                <p className="card-text">
                  A deep commitment to protecting generations of families.
                </p>
              </div>
            </div>
            <div className="card bg-primary border-0">
              <div className="svg-container d-block mx-auto align-bottom">
                <Handshake />
              </div>
              <div className="card-body">
                <h3 className="card-title">Trust</h3>
                <p className="card-text">
                  150 years of strength and stability by your side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
