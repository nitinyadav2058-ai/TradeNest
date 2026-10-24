import React from "react";

const Education = () => {
  return (
    <section className="container py-5 my-4">
      <div className="row align-items-center g-4 g-lg-5">
        {/* Illustration */}
        <div className="col-12 col-md-5 text-center">
          <div className="bg-light rounded-4 p-4 p-md-5">
            <img
              src="/media/images/education.svg"
              className="img-fluid"
              alt="Online stock market education"
              loading="lazy"
            />

            <h2 className="h5 fw-semibold text-dark mt-4 mb-2">
              Learn at Your Own Pace
            </h2>

            <p className="text-secondary mb-0">
              Build your market knowledge, one concept at a time.
            </p>
          </div>
        </div>

        {/* Education Content */}
        <div className="col-12 col-md-7">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
            LEARN & GROW
          </span>

          <h1 className="display-6 fw-semibold text-dark mb-3">
            Free and Open Market Education
          </h1>

          <p className="text-secondary lh-lg mb-4">
            Explore educational resources designed to help you understand
            financial markets, investing fundamentals, and trading concepts at
            your own pace.
          </p>

          {/* Varsity */}
          <a
            href="https://zerodha.com/varsity/"
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center justify-content-between gap-3 text-decoration-none border rounded-3 p-3 p-md-4 mb-3"
          >
            <div>
              <h2 className="h5 fw-semibold text-dark mb-2">Varsity</h2>
              <p className="text-secondary lh-base mb-0">
                Learn stock market basics, investing, and advanced trading
                concepts through structured lessons.
              </p>
            </div>

            <span
              className="text-primary fs-4 flex-shrink-0"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          {/* TradingQ&A */}
          <a
            href="https://tradingqna.com/"
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center justify-content-between gap-3 text-decoration-none border rounded-3 p-3 p-md-4"
          >
            <div>
              <h2 className="h5 fw-semibold text-dark mb-2">TradingQ&A</h2>
              <p className="text-secondary lh-base mb-0">
                Explore market-related discussions and learn from questions
                shared by the trading community.
              </p>
            </div>

            <span
              className="text-primary fs-4 flex-shrink-0"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <p className="small text-secondary mt-3 mb-0">
            Educational resources are for learning purposes and are not
            personalized investment advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
