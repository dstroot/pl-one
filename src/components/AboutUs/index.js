import React from "react";
import CountUp from "react-countup";

// Images
import business from "./media/business_people.jpg";
import responsibility from "./media/corp_resp.jpg";

// Styles
import "./styles.scss";

/**
The AboutUs component is a static component with no props or state.  It renders information about our company. 
 */
const AboutUs = () => {
  return (
    <>
      {/*

       Numeric Cards Section

      */}

      <div className="container">
        <div className="card-deck m-3 text-center">
          <div className="card mb-4">
            <div className="card-body">
              <h1 className="display-3 text-primary">
                <CountUp delay={1} duration={2} end={150} />
              </h1>
              <h3>Year History</h3>
              <p className="lead">A promise that we will be there.</p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h1 className="display-3 text-primary">
                <CountUp
                  delay={1}
                  duration={2}
                  prefix="$"
                  suffix="B"
                  end={158}
                />
              </h1>
              <h3>In Assets</h3>
              <p className="lead">Financial stability you can rely on.</p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h1 className="display-3 text-primary">
                <CountUp
                  delay={1}
                  duration={2}
                  prefix="$"
                  suffix="M"
                  decimals={1}
                  end={6.6}
                />
              </h1>
              <h3>In Donations</h3>
              <p className="lead">Positively impacting our community.</p>
            </div>
          </div>
        </div>
      </div>

      {/*
  
       Power Section
  
      */}

      <div className="bg-primary">
        <div className="container">
          <div className="row bg-primary text-white pt-5 pb-5">
            <div className="col">
              <h1 className="display-4 text-uppercase">
                Power of Pacific Life
              </h1>
              <p className="lead">
                When you purchase life insurance and retirement solutions,
                you're highly invested in your financial future. And so are we.
                When you purchase life and retirement insurance, you're buying a
                promise. A promise that today, tomorrow or ten years from now,
                we'll be there. For 150 years, we've fulfilled that promise. Our
                clients trust the Power of Pacific to protect what matters most
                to them - their families, their businesses, their futures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*
  
       Images Section
  
      */}

      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center order-2 order-md-1 mb-4 mt-4">
            <div className="">
              <h1 className="display-4">Our Financial Strength</h1>
              <p className="lead">
                Financial decisions are long-term. That’s why the carrier you
                choose to support you matters. Your insurer’s financial future
                is as important as your own. Our ratings and financial history
                demonstrate the strength and stability that is the Power of
                Pacific.
              </p>
              <a
                href="/home/about/insurance-ratings-and-financials.html"
                target="_self"
                className="btn btn-primary"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end order-1 order-md-2 mb-4 mt-4">
            <div className="thumbnail">
              <img className="img-fluid" src={business} alt="business people" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 mt-4">
            <div className="thumbnail">
              <img
                className="img-fluid"
                src={responsibility}
                alt="corporate responsibility"
              />
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-center mb-4 mt-4">
            <div className="">
              <h1 className="display-4">Our Corporate Responsibility</h1>
              <p className="lead">
                The Pacific Life Foundation allows us to collectively extend the
                power of our impact on the world around us. We’re proud of our
                giving power – including the 10,200 volunteer hours our
                employees donated this year to strengthen the communities where
                we work and live.
              </p>
              <a
                href="/home/about/insurance-ratings-and-financials.html"
                target="_self"
                className="btn btn-primary"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
