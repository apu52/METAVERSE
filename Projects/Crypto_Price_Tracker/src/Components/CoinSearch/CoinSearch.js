import React, { useState, createContext } from "react";
import CoinTable from "../CoinTable/CoinTable";
import "./CoinSearch.css";


const coinPassed = createContext();

function CoinSearch() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="coinSearchCointainer">
        <div className="coinSearch">
          <h1 className="coinText">Search for a Coin</h1>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="coinInput"
              onChange={handleChange}
            />
          </form>
        </div>
        <coinPassed.Provider value = {search}> 
          <CoinTable/> 
        </coinPassed.Provider> 
      </div>
    </>
  );
}

export default CoinSearch;
export { coinPassed };