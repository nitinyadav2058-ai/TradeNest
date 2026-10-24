import React from "react";

const Awards = () => {
  return (
    <section className="container py-5 my-4">
      <div className="row align-items-center g-4 g-lg-5">
        {/* Illustration */}
        <div className="col-12 col-md-5 text-center">
          <div className="bg-light rounded-4 p-4 p-md-5">
            <img
              src="/media/images/largestBroker.svg"
              alt="TradeNest brokerage achievement"
              className="img-fluid"
              loading="lazy"
            />
            <h2 className="h5 text-dark fw-semibold mt-4 mb-2">
              Built Around Investors
            </h2>
            <p className="text-secondary mb-0">
              Technology designed to make investing more accessible.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="col-12 col-md-7">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
            OUR ACHIEVEMENTS
          </span>

          <h1 className="display-6 fw-semibold text-dark mb-3">
            A Growing Community of Investors
          </h1>

          <p className="text-secondary lh-lg mb-4">
            TradeNest aims to make trading and investing more accessible through
            technology and a user-friendly investment experience. Explore the
            financial products investors can learn about and access through the
            platform.
          </p>

          {/* Highlight */}
          <div className="bg-light border-start border-primary border-4 rounded-end p-3 p-md-4 mb-4">
            <h2 className="h4 fw-bold text-primary mb-2">
              Multiple Investment Options
            </h2>
            <p className="text-secondary mb-0 lh-lg">
              From stocks and IPOs to mutual funds and derivatives, discover
              different financial instruments in one place.
            </p>
          </div>

          {/* Investment Categories */}
          <div className="row g-3 mb-4">
            <div className="col-12 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-start gap-2 mb-3">
                  <span className="text-primary fw-bold">✓</span>
                  <span className="text-secondary">Futures and Options</span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3">
                  <span className="text-primary fw-bold">✓</span>
                  <span className="text-secondary">Commodity Derivatives</span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3">
                  <span className="text-primary fw-bold">✓</span>
                  <span className="text-secondary">Currency Derivatives</span>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-start gap-2 mb-3">
                  <span className="text-primary fw-bold">✓</span>
                  <span className="text-secondary">Stocks and IPOs</span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3">
                  <span className="text-primary fw-bold">✓</span>
                  <span className="text-secondary">Direct Mutual Funds</span>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3">
                  <span className="text-primary fw-bold">✓</span>
                  <span className="text-secondary">
                    Bonds and Government Securities
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="border-top pt-4 mt-2">
            <p className="small text-uppercase text-secondary fw-semibold mb-3">
              Featured In
            </p>
            <img
              src="/media/images/pressLogos.png"
              alt="Media publication logos"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
