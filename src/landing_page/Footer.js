import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#fafafa",
        borderTop: "1px solid #eee",
        marginTop: "80px",
      }}
    >
      <div className="container py-5">
        {/* ================= MAIN FOOTER ================= */}
        <div className="row">
          {/* Logo & About */}
          <div className="col-lg-4 col-md-6 mb-5">
            <img
              src="/media/images/logotn.img.png"
              alt="TradeNest"
              style={{
                width: "160px",
                height: "auto",
                marginBottom: "20px",
              }}
            />

            <p
              className="text-muted"
              style={{
                maxWidth: "300px",
                lineHeight: "1.7",
              }}
            >
              TradeNest is a modern trading platform designed to make investing
              simple, accessible and easy to understand.
            </p>

            <p className="text-muted small mt-4">
              &copy; 2026 TradeNest. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 mb-5">
            <h6 className="mb-4">Company</h6>

            <a href="#" className="footer-link">
              About
            </a>

            <a href="#" className="footer-link">
              Products
            </a>

            <a href="#" className="footer-link">
              Pricing
            </a>

            <a href="#" className="footer-link">
              Careers
            </a>

            <a href="#" className="footer-link">
              TradeNest Tech
            </a>

            <a href="#" className="footer-link">
              Press & Media
            </a>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6 mb-5">
            <h6 className="mb-4">Support</h6>

            <a href="#" className="footer-link">
              Contact
            </a>

            <a href="#" className="footer-link">
              Support Portal
            </a>

            <a href="#" className="footer-link">
              TradeNest Blog
            </a>

            <a href="#" className="footer-link">
              List of Charges
            </a>

            <a href="#" className="footer-link">
              Downloads & Resources
            </a>

            <a href="#" className="footer-link">
              Help Center
            </a>
          </div>

          {/* Account */}
          <div className="col-lg-3 col-md-6 mb-5">
            <h6 className="mb-4">Account</h6>

            <a href="#" className="footer-link">
              Open an Account
            </a>

            <a href="#" className="footer-link">
              Login
            </a>

            <a href="#" className="footer-link">
              Fund Transfer
            </a>

            <a href="#" className="footer-link">
              60 Days Challenge
            </a>

            <a href="#" className="footer-link">
              Refer & Earn
            </a>
          </div>
        </div>

        {/* ================= SOCIAL LINKS ================= */}
        <div className="row">
          <div className="col-12">
            <div
              className="d-flex gap-4 py-4"
              style={{
                borderTop: "1px solid #eee",
                borderBottom: "1px solid #eee",
              }}
            >
              <a href="#" className="footer-social">
                LinkedIn
              </a>

              <a href="#" className="footer-social">
                GitHub
              </a>

              <a href="#" className="footer-social">
                Instagram
              </a>

              <a href="#" className="footer-social">
                X
              </a>
            </div>
          </div>
        </div>

        {/* ================= DISCLAIMER ================= */}
        <div className="row mt-4">
          <div className="col-12">
            <p className="text-muted small">
              <strong>Disclaimer:</strong> TradeNest is a student/development
              project created for educational and demonstration purposes. It is
              not a registered stock broker, investment advisor, financial
              institution, or depository participant.
            </p>

            <p className="text-muted small">
              The information, prices, charts and other data displayed on
              TradeNest are for demonstration purposes only and should not be
              considered financial, investment or trading advice.
            </p>

            <p className="text-muted small">
              Investments in securities markets are subject to market risks.
              Please conduct your own research and consult a qualified financial
              professional before making any investment decisions.
            </p>

            <p className="text-muted small">
              TradeNest does not provide stock tips, guaranteed returns or
              personalized investment recommendations.
            </p>

            <p className="text-muted small">
              Any logos, trademarks, company names or third-party references
              used in this project belong to their respective owners and are
              used only for educational or demonstration purposes.
            </p>

            <p className="text-muted small mb-0">
              © 2026 TradeNest — Built as a full-stack web development project.
            </p>
          </div>
        </div>
      </div>

      {/* ================= FOOTER CSS ================= */}
      <style>
        {`
          .footer-link {
            display: block;
            text-decoration: none;
            color: #666;
            margin-bottom: 14px;
            transition: color 0.2s ease;
          }

          .footer-link:hover {
            color: #387ed1;
          }

          .footer-social {
            text-decoration: none;
            color: #666;
            font-size: 14px;
            transition: color 0.2s ease;
          }

          .footer-social:hover {
            color: #387ed1;
          }

          footer h6 {
            color: #424242;
            font-weight: 600;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
