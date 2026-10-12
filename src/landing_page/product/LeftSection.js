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
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 p-4 text-center">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>

        {/* Right Side - Content */}
        <div className="col-md-6 p-4">
          <h1 className="mb-4">{productName}</h1>

          <p className="text-muted mb-4">{productDescription}</p>

          <div className="d-flex flex-wrap gap-4 mb-4">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo{" "}
              <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i>
            </a>

            <a href={learnMore} className="text-decoration-none">
              Learn More{" "}
              <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i>
            </a>
          </div>

          <div className="d-flex flex-wrap align-items-center gap-3">
            <a href={googlePlay}>
              <img
                src="/media/images/playStore.svg"
                alt="Get it on Google Play"
                className="img-fluid"
              />
            </a>

            <a href={appStore}>
              <img
                src="/media/images/appstoreBadge.svg"
                alt="Download on the App Store"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
