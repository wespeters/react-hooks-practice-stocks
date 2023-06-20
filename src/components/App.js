import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState("");  // "" means no sorting
  const [filterType, setFilterType] = useState("");  // "" means no filtering

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then(setStocks);
  }, []);

  function buyStock(stock) {
    setPortfolio([...portfolio, stock]);
  }

  function sellStock(stock) {
    setPortfolio((portfolio) => portfolio.filter((p) => p.id !== stock.id));
  }

  function handleSort(sortType) {
    setSortType(sortType);
  }

  function handleFilter(filterType) {
    setFilterType(filterType);
  }

  let sortedStocks = [...stocks];
  
  switch (sortType) {
    case "Alphabetically":
      sortedStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
      break;
    case "Price":
      sortedStocks.sort((a, b) => a.price - b.price);
      break;
    default:
      break;
  }
  
  let filteredStocks = filterType ? sortedStocks.filter(stock => stock.type === filterType) : sortedStocks;

  return (
    <div>
      <Header />
      <MainContainer stocks={filteredStocks} portfolio={portfolio} buyStock={buyStock} sellStock={sellStock} handleSort={handleSort} handleFilter={handleFilter} />

    </div>
  );
}

export default App;
