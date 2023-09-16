import React from "react";
import { FaDollarSign } from "react-icons/fa";
import './Price.css'

function Price({ price }) {
  const maxPrice = 5;
  const dollar = [];

  for (let i = 1; i <= maxPrice; i++) {
    const dollarClassName = i <= price ? "filled-dollar" : "empty-dollar";
    dollar.push(<FaDollarSign key={i} className={dollarClassName} />);
  }

  return <div className="price">{dollar}</div>;
}

export default Price;
