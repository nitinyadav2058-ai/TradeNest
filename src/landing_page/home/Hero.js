import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container py-4 py-md-5">
      <div className="row justify-content-center text-center">
        {/* Hero Image */}
        <div className="col-12 col-lg-10 mb-4 mb-md-5">
          <img
            src="/media/images/homeHero.png"
            alt="TradeNest investment platform"
            className="img-fluid"
            loading="eager"
          />
        </div>

        {/* Hero Content */}
        <div className="col-12 col-lg-9">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
            INVEST SMARTER
          </span>

          <h1 className="display-4 fw-semibold text-dark mb-3">
            Invest in <span className="text-primary">Everything</span>
          </h1>

          <p className="fs-5 text-secondary lh-lg mx-auto mb-4">
            One platform to explore stocks, IPOs, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <Link
            to="/signup"
            className="btn btn-primary btn-lg px-4 px-md-5 py-3 fw-semibold shadow-sm"
          >
            Sign Up Now <span aria-hidden="true">→</span>
          </Link>

          <p className="small text-secondary mt-3 mb-0">
            Start exploring your investment journey with TradeNest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
