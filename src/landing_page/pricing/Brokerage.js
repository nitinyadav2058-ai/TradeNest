import React from "react";

const Brokerage = () => {
  return (
    <section className="container py-5 my-4 border-top">
      <div className="text-center mb-5">
        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
          PRICING & CHARGES
        </span>

        <h2 className="display-6 fw-semibold text-dark mb-3">
          Understand your <span className="text-primary">trading costs</span>
        </h2>

        <p
          className="text-secondary mx-auto lh-lg"
          style={{ maxWidth: "600px" }}
        >
          Explore brokerage calculations and common trading charges to make
          informed decisions before placing an order.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Brokerage Calculator */}
        <div className="col-12 col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-3 p-md-4">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-4">
                <i className="fa fa-calculator fs-3" aria-hidden="true"></i>
              </div>

              <h3 className="h5 fw-semibold text-dark mb-3">
                Brokerage Calculator
              </h3>

              <p className="text-secondary lh-lg mb-4">
                Estimate brokerage, taxes, and other applicable charges for your
                trades using an external calculator.
              </p>

              <a
                href="https://zerodha.com/brokerage-calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-none fw-semibold mt-auto"
              >
                Open Calculator
                <i
                  className="fa fa-arrow-up-right-from-square ms-2"
                  aria-hidden="true"
                ></i>
              </a>

              <small className="text-muted mt-3">
                Opens the Zerodha website.
              </small>
            </div>
          </div>
        </div>

        {/* List of Charges */}
        <div className="col-12 col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-3 p-md-4">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-4">
                <i className="fa fa-receipt fs-3" aria-hidden="true"></i>
              </div>

              <h3 className="h5 fw-semibold text-dark mb-3">List of Charges</h3>

              <p className="text-secondary lh-lg mb-4">
                Learn about brokerage fees, STT, GST, exchange transaction
                charges, and other costs that may apply to trading.
              </p>

              <a
                href="https://zerodha.com/charges/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-none fw-semibold mt-auto"
              >
                View Charges
                <i
                  className="fa fa-arrow-up-right-from-square ms-2"
                  aria-hidden="true"
                ></i>
              </a>

              <small className="text-muted mt-3">
                Opens the Zerodha website.
              </small>
            </div>
          </div>
        </div>
      </div>

      <p className="text-muted small text-center mt-4 mb-0">
        TradeNest is a demo project. These links refer to Zerodha's resources,
        and the charges shown there may not represent TradeNest pricing.
      </p>
    </section>
  );
};

export default Brokerage;
