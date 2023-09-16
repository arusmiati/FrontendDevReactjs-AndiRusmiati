import React from 'react';
import "./Navigation.css"

function Navigation({ handleFilterChange, handleClearAll }) {
  return (
    <div className="nav">
     <div className="nav-item">
      <p>Filter By: </p>
      <div className='nav-item_input'>
        <label>
          <input
            type="radio"
            name="OPEN NOW"
            value="true"
            onChange={() => handleFilterChange("openNow", true)}
          /> Open Now
        </label>
      </div>
      <div>
        <select className='prices' onChange={(e) => handleFilterChange("priceRange", e.target.value)}>
          <option value="">Price</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="2">$$$$</option>
          <option value="3">$$$$$</option>
        </select>
      </div>
      <div>
        <select className='category' onChange={(e) => handleFilterChange("category", e.target.value)}>
          <option value="">Categories</option>
          <option value="THAI">Thai</option>
          <option value="JAPANESE">Japanese</option>
        </select>
      </div>
      </div>
      <div className='clear'>
        <button onClick={handleClearAll}>CLEAR ALL</button>
      </div>
    </div>
  );
}

export default Navigation;
