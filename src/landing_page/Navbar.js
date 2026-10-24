import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Products", path: "/product" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top py-3">
      <div className="container">
        {/* Logo */}
        <Link
          className="navbar-brand me-4"
          to="/"
          onClick={closeMenu}
          aria-label="TradeNest home"
        >
          <img
            src="/media/images/logotn.img.png"
            alt="TradeNest"
            className="img-fluid"
            style={{ width: "150px", maxHeight: "48px" }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler shadow-none"
          type="button"
          aria-controls="tradeNestNavbar"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <i
            className={`fa ${menuOpen ? "fa-times" : "fa-bars"} fs-4 text-dark`}
            aria-hidden="true"
          ></i>
        </button>

        {/* Navigation */}
        <div
          id="tradeNestNavbar"
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2 pt-3 pt-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 fw-medium ${
                      isActive ? "text-primary" : "text-secondary"
                    }`
                  }
                  end={link.path === "/"}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Signup */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link
                to="/signup"
                onClick={closeMenu}
                className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
