import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const companyLinks = [
    { label: "About Us", to: "/about" },
    { label: "Products", to: "/product" },
    { label: "Pricing", to: "/pricing" },
    { label: "TradeNest Technology", to: "/technology" },
  ];

  const supportLinks = [
    { label: "Support Portal", to: "/support" },
    { label: "Help Center", to: "/support" },
    { label: "List of Charges", to: "/pricing" },
  ];

  const accountLinks = [
    { label: "Open an Account", to: "/signup" },
    { label: "Login", to: "/signup" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      icon: "fa-linkedin",
      url: "https://www.linkedin.com/",
    },
    {
      label: "GitHub",
      icon: "fa-github",
      url: "https://github.com/",
    },
    {
      label: "Instagram",
      icon: "fa-instagram",
      url: "https://www.instagram.com/",
    },
  ];

  const renderLinks = (links) =>
    links.map((link) => (
      <li key={link.label} className="mb-3">
        <Link to={link.to} className="text-secondary text-decoration-none">
          {link.label}
        </Link>
      </li>
    ));

  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-5">
        {/* Main Footer */}
        <div className="row g-4 pb-4">
          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-4">
            <Link to="/" className="d-inline-block mb-3">
              <img
                src="/media/images/logotn.img.png"
                alt="TradeNest"
                className="img-fluid"
                style={{ maxWidth: "155px", maxHeight: "60px" }}
              />
            </Link>

            <p
              className="text-secondary lh-lg mb-4"
              style={{ maxWidth: "320px" }}
            >
              A modern trading-platform demo designed to make financial
              technology easier to explore and understand.
            </p>

            <div className="d-flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="d-flex align-items-center justify-content-center bg-white border rounded-circle text-primary text-decoration-none"
                  style={{ width: "42px", height: "42px" }}
                >
                  <i
                    className={`fa ${social.icon} fs-5`}
                    aria-hidden="true"
                  ></i>
                </a>
              ))}
            </div>

            <p className="text-secondary small mt-4 mb-0">
              © {new Date().getFullYear()} TradeNest. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-6 col-md-6 col-lg-2">
            <h2 className="h6 fw-bold text-dark mb-4">Company</h2>
            <ul className="list-unstyled mb-0">{renderLinks(companyLinks)}</ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-6 col-lg-3">
            <h2 className="h6 fw-bold text-dark mb-4">Support</h2>
            <ul className="list-unstyled mb-0">{renderLinks(supportLinks)}</ul>
          </div>

          {/* Account */}
          <div className="col-6 col-md-6 col-lg-3">
            <h2 className="h6 fw-bold text-dark mb-4">Your Account</h2>
            <ul className="list-unstyled mb-0">{renderLinks(accountLinks)}</ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-top pt-4 mt-3">
          <h2 className="h6 fw-bold text-dark mb-3">Important Information</h2>

          <p className="text-secondary small lh-lg">
            <strong>Educational project:</strong> TradeNest is a student
            development project created for educational and demonstration
            purposes. It is not a registered stockbroker, investment adviser,
            financial institution, or depository participant.
          </p>

          <p className="text-secondary small lh-lg">
            Any prices, charts, market information, or other data displayed are
            illustrative unless explicitly identified otherwise. Nothing on this
            website constitutes financial, investment, or trading advice. No
            returns are guaranteed.
          </p>

          <p className="text-secondary small lh-lg">
            Investments in securities markets are subject to market risks.
            Conduct independent research and consult a qualified financial
            professional where appropriate before making investment decisions.
          </p>

          <p className="text-secondary small lh-lg mb-0">
            Third-party names, logos, and trademarks belong to their respective
            owners. Their appearance does not imply an official partnership with
            TradeNest.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-top mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
          <span className="text-secondary small">
            Built with React and Bootstrap.
          </span>

          <Link
            to="/"
            className="text-primary text-decoration-none small fw-semibold"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
