import React from "react";
import { Link } from "react-router-dom";

const OpenAccount = () => {
  return (
    <section className="container py-5 my-4">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="display-5 fw-semibold mb-3">
            Start your investing journey with TradeNest
          </h1>

          <p className="text-secondary fs-5 mb-4">
            Explore a modern trading dashboard, learn about investing, and
            experience a demo platform designed for your learning journey.
          </p>

          <Link
            to="/signup"
            className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-semibold"
          >
            Get Started for Free
          </Link>

          <p className="small text-secondary mt-3 mb-0">
            Educational demo only — TradeNest does not offer real trading or
            investment services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpenAccount;
