import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "#fff",
        minHeight: "70px",
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logotn.img.png"
            alt="tradeNest"
            style={{
              width: "160px",
              height: "auto",
            }}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/product">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/support">
                Support
              </Link>
            </li>

            {/* Menu Icon */}
            <li className="nav-item ms-lg-3">
              <button
                className="btn p-2"
                type="button"
                aria-label="Menu"
                style={{
                  border: "none",
                  background: "transparent",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "22px",
                    height: "2px",
                    backgroundColor: "#424242",
                    marginBottom: "5px",
                  }}
                ></span>

                <span
                  style={{
                    display: "block",
                    width: "22px",
                    height: "2px",
                    backgroundColor: "#424242",
                    marginBottom: "5px",
                  }}
                ></span>

                <span
                  style={{
                    display: "block",
                    width: "22px",
                    height: "2px",
                    backgroundColor: "#424242",
                  }}
                ></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
