import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <p className="text-muted mt-3">
          Free equity Investments and flat ₹20 tarday and F&O trades
        </p>
      </div>

      <div className="row p-5 ">
        <div className="col-4 text-center">
          <img src="media/images/0.svg" alt="pricing"></img>
          <h2>Free equity delivery</h2>
          <p className="mt-3 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-4 text-center ">
          <img src="media/images/20.svg" alt="pricing"></img>
          <h2>Intraday and F&O trades</h2>
          <p className="mt-3 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4 text-center">
          <img src="media/images/02.svg" alt="pricing"></img>
          <h2>Free direct MF</h2>
          <p className="mt-3 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
