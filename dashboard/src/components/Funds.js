import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 p-3">
        <p className="mb-0">Instant, zero-cost fund transfers with UPI</p>

        <div className="d-flex flex-wrap gap-2">
          <Link className="btn btn-green">Add funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      <div className="row g-3 mx-0">
        <div className="col-12 col-lg-6">
          <span>
            <p>Equity</p>
          </span>

          <div className="table table-responsive">
            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>

            <hr />

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Payin</p>
              <p>4064.00</p>
            </div>

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>SPAN</p>
              <p>0.00</p>
            </div>

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Exposure</p>
              <p>0.00</p>
            </div>

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Options premium</p>
              <p>0.00</p>
            </div>

            <hr />

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>

            <div className="data d-flex justify-content-between gap-3 flex-wrap">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="commodity p-3">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
