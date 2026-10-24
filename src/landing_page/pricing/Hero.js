import React from "react";

const Hero = () => {
  const pricingPlans = [
    {
      image: "/media/images/0.svg",
      title: "Equity Delivery",
      price: "₹0",
      subtitle: "Brokerage on delivery",
      description:
        "Explore the concept of zero brokerage on equity delivery investments. Actual charges depend on the broker and applicable regulations.",
    },
    {
      image: "/media/images/20.svg",
      title: "Intraday & F&O",
      price: "₹20",
      subtitle: "Illustrative per-order fee",
      description:
        "Learn how flat-fee pricing can work for intraday and futures & options trades. The actual brokerage and other charges may vary.",
    },
    {
      image: "/media/images/02.svg",
      title: "Direct Mutual Funds",
      price: "₹0",
      subtitle: "Illustrative brokerage",
      description:
        "Explore direct mutual fund investing and understand the difference between brokerage, commissions, and other applicable charges.",
    },
  ];

  return (
    <section className="container py-5 mt-4">
      {/* Page heading */}
      <div className="text-center border-bottom pb-5 mb-4">
        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
          SIMPLE & TRANSPARENT
        </span>

        <h1 className="display-5 fw-semibold text-dark mb-3">
          TradeNest <span className="text-primary">Pricing</span>
        </h1>

        <p
          className="text-secondary fs-5 mx-auto mb-0"
          style={{ maxWidth: "650px" }}
        >
          Understand trading costs with a simple breakdown of brokerage concepts
          and common investment charges.
        </p>
      </div>

      {/* Pricing cards */}
      <div className="row g-4 py-4">
        {pricingPlans.map((plan, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={plan.title}>
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 p-md-4 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <div
                  className="bg-primary bg-opacity-10 rounded-4 d-flex align-items-center justify-content-center mb-4 p-3"
                  style={{ minHeight: "120px", width: "140px" }}
                >
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="img-fluid"
                    style={{ maxHeight: "90px" }}
                    loading="lazy"
                  />
                </div>

                <h2 className="h5 fw-semibold text-dark mb-3">{plan.title}</h2>

                <p className="display-6 fw-semibold text-primary mb-1">
                  {plan.price}
                </p>

                <p className="small text-secondary mb-3">{plan.subtitle}</p>

                <div className="border-top w-100 my-3"></div>

                <p className="text-secondary lh-lg mb-0">{plan.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="small text-muted text-center mt-3 mb-0">
        TradeNest is a demo project. Prices shown are illustrative, not
        confirmed brokerage rates. Taxes and statutory charges may apply to real
        trades.
      </p>
    </section>
  );
};

export default Hero;
