import React from "react";

const Hero = () => {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="row justify-content-center text-center py-4 py-md-5">
        <div className="col-12 col-lg-10">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
            OUR STORY
          </span>

          <h1 className="display-6 fw-semibold text-dark lh-base mb-4">
            We pioneered the discount broking model in India.
            <span className="d-block text-secondary">
              Now, we're breaking ground with our technology.
            </span>
          </h1>

          <div
            className="bg-primary rounded-pill mx-auto"
            style={{ width: "60px", height: "4px" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="row g-4 g-lg-5 border-top pt-4 pt-md-5 mt-3">
        <div className="col-12 col-md-6">
          <div className="h-100 p-3 p-md-4">
            <p className="text-secondary lh-lg mb-4">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p className="text-secondary lh-lg mb-4">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <div className="bg-light border-start border-primary border-4 rounded-end p-4 mb-4">
              <h2 className="display-6 fw-bold text-primary mb-1">
                1.8+ crore
              </h2>
              <p className="text-secondary mb-0">
                Clients using our investment platforms
              </p>
            </div>

            <p className="text-secondary lh-lg mb-0">
              Our clients place billions of orders every year through our
              powerful ecosystem of investment platforms, contributing over 15%
              of all Indian retail trading volumes.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="h-100 p-3 p-md-4">
            <p className="text-secondary lh-lg mb-4">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>

            <p className="text-secondary lh-lg mb-4">
              <a
                href="https://rainmatter.com/"
                className="link-primary link-underline-opacity-0 link-underline-opacity-75-hover fw-semibold"
                target="_blank"
                rel="noreferrer"
              >
                Rainmatter ↗
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>

            <p className="text-secondary lh-lg mb-4">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog, see what the media is saying about
              us, or learn more about our business and product philosophies.
            </p>

            <div className="d-flex align-items-start gap-3 bg-light rounded-3 p-3 p-md-4">
              <span className="text-primary fs-3" aria-hidden="true">
                ✳
              </span>
              <p className="text-dark mb-0 lh-lg">
                Building technology to make investing more accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
