import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";

const WatchList = () => {
  return (
    <div className="watchlist-container container-fluid px-2 px-md-3">
      <div className="search-container d-flex align-items-center gap-2 w-100">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search form-control"
        />
        <span className="counts flex-shrink-0">{watchlist.length}</span>
      </div>

      <ul className="list list-unstyled w-100 mt-3">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseExit = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li
      className="position-relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <div className="item d-flex flex-wrap align-items-center justify-content-between gap-2 py-2">
        <p className={`mb-0 ${stock.isDown ? "down" : "up"}`}>{stock.name}</p>

        <div className="item-info d-flex flex-wrap align-items-center gap-1">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uuid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uuid }) => {
  return (
    <span className="actions">
      <span className="d-flex flex-wrap align-items-center justify-content-end gap-1">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
