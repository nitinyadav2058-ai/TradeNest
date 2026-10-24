import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders container-fluid px-3 px-md-4">
      <div className="no-orders text-center py-5 px-3 px-md-4">
        <p className="fs-6 fs-md-5">You haven't placed any orders today</p>

        <Link to={"/"} className="btn mt-2 px-4 py-2">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
