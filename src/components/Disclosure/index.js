import React, { useState } from "react";

const Disclosure = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const style = {
    cursor: "pointer",
    fontWeight: "600"
  };

  return (
    <div className="row mt-3">
      <div className="col">
        <p className="text-muted small">
          In order to sell life insurance, a financial professional must be a
          properly licensed and appointed life insurance producer.
          {"  "}
          <span className="" style={style} onClick={toggle}>
            [ {show ? "Less -" : "More +"} ]
          </span>
        </p>
        {show ? (
          <>
            <p className="text-muted small">
              Pacific Life refers to Pacific Life Insurance Company and its
              affiliates, including Pacific Life & Annuity Company. Insurance
              products are issued by Pacific Life Insurance Company in all
              states except New York and in New York by Pacific Life & Annuity
              Company. Product availability and features may vary by state. Each
              insurance company is solely responsible for the financial
              obligations accruing under the products it issues.
            </p>
            <p className="text-muted small">
              Life insurance sales rankings from LIMRA, 2017 Confidential Annual
              Sales Survey of Participating Companies. Sales rankings for
              Pacific Life Insurance Company are based on planned recurring
              premiums as measured against 83 participating companies.
            </p>
            <p className="text-muted small">
              Indexed Universal Life insurance does not directly participate in
              any stock or equity investments.
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Disclosure;
