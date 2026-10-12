import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid">
      <div
        className="row p-5 text-white"
        style={{
          backgroundColor: "#387ed1",
          minHeight: "400px",
        }}
      >
        {/* Left Section */}
        <div className="col-md-7 p-4">
          <h2 className="mb-4">Support Portal</h2>

          <h4 className="mb-4">
            Search for an answer or browse help topics to create a ticket
          </h4>

          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control p-3"
              placeholder="Eg. How do I activate F&O?"
              aria-label="Search help topics"
            />

            <button className="btn btn-dark px-4">Search</button>
          </div>

          <p className="mb-2">
            <strong>Quick Links</strong>
          </p>

          <div className="d-flex flex-wrap gap-3">
            <a href="/support" className="text-white">
              Track account opening
            </a>

            <a href="/support" className="text-white">
              Segment activation
            </a>

            <a href="/support" className="text-white">
              Intraday margins
            </a>

            <a href="/support" className="text-white">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-5 p-4">
          <h4 className="mb-4">
            <i className="fa fa-bullhorn me-2"></i>
            Featured
          </h4>

          <ul className="list-unstyled">
            <li className="mb-3">
              <a href="/support" className="text-white">
                Latest trading updates and market notices
              </a>
            </li>

            <li className="mb-3">
              <a href="/support" className="text-white">
                Intraday leverage and margin requirements
              </a>
            </li>

            <li className="mb-3">
              <a href="/support" className="text-white">
                How to raise and track a support ticket
              </a>
            </li>
          </ul>

          <a href="/support" className="btn btn-light mt-3">
            Raise a Ticket →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
