import React from "react";
import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <section className="container py-5 my-4">
      <div className="row align-items-center g-4 g-lg-5">
        {/* Left Content */}
        <div className="col-12 col-lg-6">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
            WHY TRADENEST
          </span>

          <h1 className="display-6 fw-semibold text-dark mb-4">
            Trust with <span className="text-primary">Confidence</span>
          </h1>

          {/* Feature 1 */}
          <div className="d-flex align-items-start gap-3 mb-4">
            <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 flex-shrink-0">
              <i className="fa fa-users fs-5" aria-hidden="true"></i>
            </div>
            <div>
              <h2 className="h5 fw-semibold text-dark mb-2">
                Customer-first always
              </h2>
              <p className="text-secondary lh-lg mb-0">
                We focus on creating a clear, reliable, and user-friendly
                experience that helps investors explore financial markets with
                confidence.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="d-flex align-items-start gap-3 mb-4">
            <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 flex-shrink-0">
              <i className="fa fa-bell-slash fs-5" aria-hidden="true"></i>
            </div>
            <div>
              <h2 className="h5 fw-semibold text-dark mb-2">
                No spam or gimmicks
              </h2>
              <p className="text-secondary lh-lg mb-0">
                Enjoy a straightforward interface without unnecessary
                distractions, so you can explore the platform at your own pace.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="d-flex align-items-start gap-3 mb-4">
            <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 flex-shrink-0">
              <i className="fa fa-layer-group fs-5" aria-hidden="true"></i>
            </div>
            <div>
              <h2 className="h5 fw-semibold text-dark mb-2">
                The TradeNest universe
              </h2>
              <p className="text-secondary lh-lg mb-0">
                Discover a growing ecosystem of features and tools designed to
                make your investment journey easier to navigate.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="d-flex align-items-start gap-3">
            <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 flex-shrink-0">
              <i className="fa fa-chart-line fs-5" aria-hidden="true"></i>
            </div>
            <div>
              <h2 className="h5 fw-semibold text-dark mb-2">
                Make informed decisions
              </h2>
              <p className="text-secondary lh-lg mb-0">
                Explore useful tools and educational resources that can help you
                better understand your financial choices.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image and Links */}
        <div className="col-12 col-lg-6 text-center">
          <div className="bg-light rounded-4 p-3 p-md-4">
            <img
              src="/media/images/ecosystem.png"
              alt="TradeNest platform ecosystem"
              className="img-fluid mb-3"
              loading="lazy"
            />
          </div>

          <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
            <Link
              to="/product"
              className="btn btn-primary rounded-pill px-4 py-2"
            >
              Explore Products <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/signup"
              className="btn btn-outline-primary rounded-pill px-4 py-2"
            >
              Try TradeNest <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
