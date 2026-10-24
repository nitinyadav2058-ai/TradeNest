import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <section className="container py-5 my-4">
      <div className="row align-items-center g-4 g-lg-5">
        {/* Left Side - Product Image */}
        <div className="col-12 col-lg-6 text-center">
          <div className="bg-light rounded-4 p-3 p-md-4">
            <img
              src={imageUrl}
              alt={`${productName} platform preview`}
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="col-12 col-lg-6 px-3 px-md-4">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
            TRADE NEST PLATFORM
          </span>

          <h2 className="display-6 fw-semibold text-dark mb-4">
            {productName}
          </h2>

          <p className="text-secondary lh-lg mb-4">{productDescription}</p>

          {/* Action Links */}
          <div className="d-flex flex-wrap align-items-center gap-4 mb-4">
            {tryDemo && (
              <a
                href={tryDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary fw-semibold text-decoration-none"
              >
                Try Demo
                <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
              </a>
            )}

            {learnMore && (
              <a
                href={learnMore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary fw-semibold text-decoration-none"
              >
                Learn More
                <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
              </a>
            )}
          </div>

          {/* App Store Badges */}
          {(googlePlay || appStore) && (
            <>
              <p className="small text-secondary fw-semibold mb-3">
                GET THE APP
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3">
                {googlePlay && (
                  <a
                    href={googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get ${productName} on Google Play`}
                  >
                    <img
                      src="/media/images/playStore.svg"
                      alt="Get it on Google Play"
                      className="img-fluid"
                      style={{ maxWidth: "160px", maxHeight: "50px" }}
                      loading="lazy"
                    />
                  </a>
                )}

                {appStore && (
                  <a
                    href={appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Download ${productName} on the App Store`}
                  >
                    <img
                      src="/media/images/appstoreBadge.svg"
                      alt="Download on the App Store"
                      className="img-fluid"
                      style={{ maxWidth: "160px", maxHeight: "50px" }}
                      loading="lazy"
                    />
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
