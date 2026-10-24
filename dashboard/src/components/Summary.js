import React from "react";

const Summary = () => {
  return (
    <div className="container-fluid px-3 px-md-4">
      <div className="username mb-4">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section mb-4">
        <span>
          <p>Equity</p>
        </span>

        <div className="data d-flex flex-column flex-md-row gap-3">
          <div className="first flex-fill">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>

          <hr className="d-md-none" />

          <div className="second flex-fill">
            <p className="d-flex justify-content-between gap-3 flex-wrap">
              Margins used <span>0</span>
            </p>
            <p className="d-flex justify-content-between gap-3 flex-wrap">
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      <div className="section mb-4">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data d-flex flex-column flex-md-row gap-3">
          <div className="first flex-fill">
            <h3 className="profit">
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>

          <hr className="d-md-none" />

          <div className="second flex-fill">
            <p className="d-flex justify-content-between gap-3 flex-wrap">
              Current Value <span>31.43k</span>
            </p>
            <p className="d-flex justify-content-between gap-3 flex-wrap">
              Investment <span>29.88k</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </div>
  );
};

export default Summary;
