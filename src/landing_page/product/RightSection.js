import React from "react";

const RightSection = ({
  productName,
  productDescription,
  imageUrl,
  learnMore,
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Left Side - Content */}
        <div className="col-md-6 p-4">
          <h1 className="mb-4">{productName}</h1>

          <p className="text-muted mb-4">{productDescription}</p>

          <a href={learnMore} className="text-decoration-none">
            Learn More{" "}
            <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 p-4 text-center">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
