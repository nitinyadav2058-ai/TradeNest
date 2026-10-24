import React from "react";

const RaiseTicket = () => {
  const topics = [
    {
      title: "Account Opening",
      icon: "fa-plus-circle",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "NRI Account Opening",
        "Charges and Fees",
        "Getting Started",
      ],
    },
    {
      title: "Your TradeNest Account",
      icon: "fa-user",
      links: [
        "Login Credentials",
        "Account Modification and Segment Addition",
        "DP ID and Bank Details",
        "Your Profile",
        "Transfer and Conversion of Shares",
      ],
    },
    {
      title: "Trading and Products",
      icon: "fa-bar-chart",
      links: [
        "Margin, Leverage and Order Types",
        "Web and Mobile Platform",
        "Trading FAQs",
        "Corporate Actions",
        "Platform API",
        "Stock Reports",
        "GTT Orders",
      ],
    },
  ];

  return (
    <section className="container py-5 my-4">
      {/* Heading */}
      <div className="text-center mb-5">
        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
          TRADENEST SUPPORT
        </span>

        <h2 className="display-6 fw-semibold text-dark mb-3">
          How can we <span className="text-primary">help you?</span>
        </h2>

        <p
          className="text-secondary mx-auto lh-lg mb-0"
          style={{ maxWidth: "600px" }}
        >
          Select a topic below to find help with your account, platform, trading
          features, or other questions.
        </p>
      </div>

      {/* Topic Cards */}
      <div className="row g-4">
        {topics.map((topic) => (
          <div className="col-12 col-md-6 col-lg-4" key={topic.title}>
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 p-md-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3">
                    <i
                      className={`fa ${topic.icon} fs-4`}
                      aria-hidden="true"
                    ></i>
                  </div>

                  <h3 className="h5 fw-semibold text-dark mb-0">
                    {topic.title}
                  </h3>
                </div>

                <ul className="list-unstyled mb-0">
                  {topic.links.map((link) => (
                    <li key={link} className="border-top py-3">
                      <a
                        href={`/support?topic=${encodeURIComponent(link)}`}
                        className="d-flex justify-content-between align-items-center gap-2 text-secondary text-decoration-none"
                      >
                        <span>{link}</span>
                        <i
                          className="fa fa-angle-right text-primary"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Help Footer */}
      <div className="bg-light rounded-4 text-center p-4 p-md-5 mt-5">
        <h3 className="h4 fw-semibold text-dark mb-3">
          Still need assistance?
        </h3>

        <p className="text-secondary mb-4">
          Contact the TradeNest support team for further assistance.
        </p>

        <a
          href="mailto:support@tradenest.example"
          className="btn btn-primary rounded-pill px-4 py-3 fw-semibold"
        >
          <i className="fa fa-envelope me-2" aria-hidden="true"></i>
          Contact Support
        </a>
      </div>
    </section>
  );
};

export default RaiseTicket;
