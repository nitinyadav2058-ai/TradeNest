import React from "react";
import { Link } from "react-router-dom";

const Universe = () => {
  const platforms = [
    {
      imageUrl: "/media/images/zerodhaFundhouse.png",
      name: "Fundhouse",
      description:
        "Explore index funds and learn about transparent, goal-oriented investing.",
    },
    {
      imageUrl: "/media/images/sensibullLogo.svg",
      name: "Sensibull",
      description:
        "Discover options-trading tools designed to help analyze strategies and market scenarios.",
    },
    {
      imageUrl: "/media/images/smallcaseLogo.png",
      name: "smallcase",
      description:
        "Explore themed baskets of stocks and exchange-traded funds.",
    },
    {
      imageUrl: "/media/images/streakLogo.png",
      name: "Streak",
      description:
        "Learn about creating and testing rule-based trading strategies.",
    },
    {
      imageUrl: "/media/images/dittoLogo.png",
      name: "Ditto",
      description:
        "Understand insurance options and explore guidance for choosing coverage.",
    },
  ];

  return (
    <section className="container py-5 my-4">
      {/* Section Heading */}
      <div className="text-center mb-5">
        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
          CONNECTED EXPERIENCES
        </span>

        <h2 className="display-6 fw-semibold text-dark mb-3">
          The TradeNest <span className="text-primary">Universe</span>
        </h2>

        <p
          className="text-secondary lh-lg mx-auto mb-4"
          style={{ maxWidth: "650px" }}
        >
          Discover tools and services across the investing ecosystem to explore
          markets, learn about financial products, and make informed decisions.
        </p>

        <Link
          to="/product"
          className="text-primary fw-semibold text-decoration-none"
        >
          Explore our products
          <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
        </Link>
      </div>

      {/* Platform Cards */}
      <div className="row g-4 justify-content-center">
        {platforms.map((platform) => (
          <div className="col-12 col-sm-6 col-lg-4" key={platform.name}>
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 p-md-4 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center w-100 mb-4"
                  style={{ height: "65px" }}
                >
                  <img
                    src={platform.imageUrl}
                    alt={`${platform.name} logo`}
                    className="img-fluid"
                    style={{
                      maxWidth: "155px",
                      maxHeight: "55px",
                      objectFit: "contain",
                    }}
                    loading="lazy"
                  />
                </div>

                <h3 className="h5 fw-semibold text-dark mb-3">
                  {platform.name}
                </h3>

                <p className="text-secondary small lh-lg mb-0">
                  {platform.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-muted small text-center mt-4 mb-0">
        These logos and names represent third-party services. Their inclusion
        does not imply an official partnership with TradeNest.
      </p>
    </section>
  );
};

export default Universe;
