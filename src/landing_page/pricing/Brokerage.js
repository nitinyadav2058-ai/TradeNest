import React from "react";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        {/* Brokerage Calculator */}
        <div className="col-md-6 col-12 p-4">
          <a
            href="https://zerodha.com/brokerage-calculator/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <h3 className="fs-5 text-primary">Brokerage Calculator</h3>
          </a>
          <p className="text-muted mt-3">
            Calculate brokerage, taxes and other charges before placing your
            trades.
          </p>
        </div>

        {/* List of Charges */}
        <div className="col-md-6 col-12 p-4">
          <a
            href="https://zerodha.com/charges/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <h3 className="fs-5 text-primary">List of Charges</h3>
          </a>
          <p className="text-muted mt-3">
            View brokerage fees, STT, GST, exchange charges and other applicable
            costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
