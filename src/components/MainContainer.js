import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, portfolio, buyStock, sellStock, handleSort, handleFilter }) {
  return (
    <div>
      <SearchBar handleSort={handleSort} handleFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} buyStock={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} sellStock={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
