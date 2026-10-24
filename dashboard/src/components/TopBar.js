import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center justify-content-between gap-3 p-3">
      <div className="indices-container d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 gap-md-4">
        <div className="nifty d-flex flex-wrap align-items-center gap-2">
          <p className="index mb-0">NIFTY 50</p>
          <p className="index-points mb-0">{100.2}</p>
          <p className="percent mb-0"></p>
        </div>

        <div className="sensex d-flex flex-wrap align-items-center gap-2">
          <p className="index mb-0">SENSEX</p>
          <p className="index-points mb-0">{100.2}</p>
          <p className="percent mb-0"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
