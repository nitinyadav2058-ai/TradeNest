import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setselectedMenu] = useState(0);
  const [isProfileDropDown, setisProfileDropDown] = useState(false);

  const handleMenuClick = (index) => {
    setselectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setisProfileDropDown(!isProfileDropDown);
  };

  const marginClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 p-3">
      <img
        src="logo.png"
        alt="Logo"
        className="img-fluid flex-shrink-0"
        style={{ width: "50px" }}
      />

      <div className="menus w-100">
        <ul className="list-unstyled d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-end align-items-center gap-2 gap-md-3 mb-3">
          <li>
            <Link
              className="text-decoration-none"
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : marginClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              className="text-decoration-none"
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : marginClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              className="text-decoration-none"
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : marginClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              className="text-decoration-none"
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : marginClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              className="text-decoration-none"
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : marginClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              className="text-decoration-none"
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : marginClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div
          className="profile d-flex align-items-center justify-content-center justify-content-md-end gap-2"
          onClick={handleProfileClick}
        >
          <div className="avatar flex-shrink-0">ZU</div>
          <p className="username mb-0">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
