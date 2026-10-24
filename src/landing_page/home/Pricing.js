import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="container py-5 my-4">
      <div className="row align-items-center g-4 g-lg-5">
        {/* Pricing Introduction */}
        <div className="col-12 col-lg-5">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
            SIMPLE & TRANSPARENT
          </span>

          <h1 className="display-6 fw-semibold text-dark mb-3">
            Unbeatable <span className="text-primary">Pricing</span>
          </h1>

          <p className="text-secondary lh-lg mb-4">
            We believe investing should be simple and transparent. Explore a
            straightforward pricing structure with clear charges and no
            unnecessary surprises.
          </p>

          <Link
            to="/pricing"
            className="btn btn-outline-primary rounded-pill px-4 py-2"
          >
            See Pricing <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Pricing Cards */}
        <div className="col-12 col-lg-7">
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3 p-md-4">
                <div
                  className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: "64px", height: "64px" }}
                >
                  <span className="fs-3 text-primary" aria-hidden="true">
                    ₹
                  </span>
                </div>

                <h2 className="display-5 fw-bold text-dark mb-2">₹0</h2>

                <h3 className="h6 fw-semibold text-dark mb-3">
                  Equity Delivery
                </h3>

                <p className="text-secondary small lh-lg mb-0">
                  Free equity delivery and direct mutual funds, where applicable
                  under the platform's pricing terms.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3 p-md-4">
                <div
                  className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: "64px", height: "64px" }}
                >
                  <span className="fs-3 text-primary" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <h2 className="display-5 fw-bold text-dark mb-2">₹20</h2>

                <h3 className="h6 fw-semibold text-dark mb-3">
                  Intraday & F&O
                </h3>

                <p className="text-secondary small lh-lg mb-0">
                  A sample brokerage rate for eligible intraday and futures and
                  options orders.
                </p>
              </div>
            </div>
          </div>

          <p className="small text-secondary text-center mt-3 mb-0">
            Illustrative pricing for the TradeNest project. Actual charges
            depend on your implemented pricing model and applicable fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
