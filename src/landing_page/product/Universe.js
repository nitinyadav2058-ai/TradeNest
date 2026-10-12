import React from "react";

const Universe = () => {
  const platforms = [
    {
      imageUrl: "/media/images/zerodhaFundhouse.png",
      description:
        "Our asset management venture, creating simple and transparent index funds to help you save for your goals.",
    },
    {
      imageUrl: "/media/images/sensibullLogo.svg",
      description:
        "Options trading made simple with powerful tools and strategies.",
    },
    {
      imageUrl: "/media/images/smallcaseLogo.png",
      description:
        "Invest in ready-made baskets of stocks built around different themes.",
    },
    {
      imageUrl: "/media/images/streakLogo.png",
      description: "Create, backtest, and deploy trading strategies with ease.",
    },
    {
      imageUrl: "/media/images/dittoLogo.png",
      description:
        "Get guidance to understand insurance and choose suitable coverage.",
    },
  ];

  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center justify-content-center">
        <div className="col-12 mb-5">
          <h2>The TradeNest Universe</h2>
          <p className="text-muted mt-3">
            Extend your trading and investment experience even further with our
            partner platforms.
          </p>
          <a href="#" className="text-decoration-none">
            Explore our products <i className="fa fa-arrow-right ms-1"></i>
          </a>
        </div>

        {platforms.map((platform, index) => (
          <div className="col-6 col-md-4 col-lg-3 p-4" key={index}>
            <img
              src={platform.imageUrl}
              alt="TradeNest partner platform"
              className="img-fluid mb-3"
              style={{
                maxWidth: "150px",
                height: "50px",
                objectFit: "contain",
              }}
            />

            <p className="text-muted small">{platform.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universe;
