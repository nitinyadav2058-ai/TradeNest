import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [search, setSearch] = useState("");

  const quickLinks = [
    "Track account opening",
    "Segment activation",
    "Intraday margins",
    "Kite user manual",
  ];

  const featuredLinks = [
    "Latest trading updates and market notices",
    "Intraday leverage and margin requirements",
    "How to raise and track a support ticket",
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      // Pass the search query to your support page.
      window.location.href = `/support?search=${encodeURIComponent(
        search.trim(),
      )}`;
    }
  };

  return (
    <section className="container-fluid px-0">
      <div
        className="row g-0 text-white align-items-center px-3 px-md-5 py-5"
        style={{
          background: "linear-gradient(135deg, #387ed1, #245da8)",
          minHeight: "440px",
        }}
      >
        {/* Left Section */}
        <div className="col-12 col-lg-7 p-3 p-md-4">
          <span className="badge bg-white bg-opacity-25 text-white px-3 py-2 mb-4">
            TRADENEST HELP CENTER
          </span>

          <h1 className="display-5 fw-semibold mb-3">How can we help you?</h1>

          <p className="fs-5 lh-lg mb-4 text-white">
            Search for answers, explore help topics, or get assistance with your
            TradeNest experience.
          </p>

          <form
            className="input-group input-group-lg mb-4"
            onSubmit={handleSearch}
          >
            <input
              type="search"
              className="form-control border-0 shadow-none"
              placeholder="Try 'account opening' or 'margin requirements'"
              aria-label="Search help topics"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="btn btn-dark px-4" type="submit">
              <i className="fa fa-search me-2" aria-hidden="true"></i>
              Search
            </button>
          </form>

          <p className="fw-semibold mb-3">Popular help topics</p>

          <div className="d-flex flex-wrap gap-2">
            {quickLinks.map((item) => (
              <Link
                key={item}
                to={`/support?search=${encodeURIComponent(item)}`}
                className="text-white border border-white border-opacity-50 rounded-pill px-3 py-2 text-decoration-none small"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-5 p-3 p-md-4 mt-4 mt-lg-0">
          <div className="bg-white text-dark rounded-4 shadow p-4 p-md-5">
            <div className="d-flex align-items-center mb-4">
              <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 me-3">
                <i className="fa fa-bullhorn fs-4" aria-hidden="true"></i>
              </div>

              <div>
                <h2 className="h4 fw-semibold mb-1">Featured Updates</h2>
                <p className="text-secondary small mb-0">
                  Useful information and support
                </p>
              </div>
            </div>

            <ul className="list-unstyled mb-4">
              {featuredLinks.map((item, index) => (
                <li
                  key={item}
                  className={`d-flex align-items-start gap-3 ${
                    index !== featuredLinks.length - 1
                      ? "border-bottom pb-3 mb-3"
                      : ""
                  }`}
                >
                  <i
                    className="fa fa-arrow-right text-primary mt-1"
                    aria-hidden="true"
                  ></i>

                  <Link
                    to={`/support?search=${encodeURIComponent(item)}`}
                    className="text-dark text-decoration-none"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/support"
              className="btn btn-primary w-100 rounded-pill py-3 fw-semibold"
            >
              <i className="fa fa-ticket me-2" aria-hidden="true"></i>
              Raise a Support Ticket
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
