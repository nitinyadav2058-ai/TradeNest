import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container py-5 mt-4">
      <div className="text-center border-bottom pb-5 mb-4">
        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-4">
          BUILT FOR MODERN INVESTORS
        </span>

        <h1 className="display-4 fw-semibold text-dark mb-3">
          Technology that makes{" "}
          <span className="text-primary">trading simpler</span>
        </h1>

        <h2 className="h5 fw-normal text-secondary mb-4">
          Sleek, modern, and intuitive trading experiences.
        </h2>

        <p
          className="text-secondary lh-lg mx-auto mb-4"
          style={{ maxWidth: "650px" }}
        >
          Explore the technology and tools designed to help you navigate
          financial markets and manage your investing journey.
        </p>

        <Link
          to="/product"
          className="btn btn-primary rounded-pill px-4 py-3 fw-semibold"
        >
          Explore our products
          <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
