import React from "react";

const RightSection = ({
  productName,
  productDescription,
  imageUrl,
  learnMore,
}) => {
  return (
    <section className="container py-5 my-4">
      <div className="row align-items-center g-4 g-lg-5">
        {/* Left Side - Product Details */}
        <div className="col-12 col-lg-6 px-3 px-md-4">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
            EXPLORE TRADENEST
          </span>

          <h2 className="display-6 fw-semibold text-dark mb-4">
            {productName}
          </h2>

          <p className="text-secondary lh-lg mb-4">{productDescription}</p>

          {learnMore && (
            <a
              href={learnMore}
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center text-primary fw-semibold text-decoration-none"
            >
              Learn More
              <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          )}
        </div>

        {/* Right Side - Product Image */}
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
      </div>
    </section>
  );
};

export default RightSection;
