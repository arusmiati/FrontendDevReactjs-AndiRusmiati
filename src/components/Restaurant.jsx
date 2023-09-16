import React, { useState } from "react";
import { Container } from "reactstrap";
import Data from "./Data";
import "./Restaurant.css";
import Rating from "./Rating";
import Price from "./Price";
import Status from "./Status";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Restaurant() {
  const [filters, setFilters] = useState({
    openNow: false,
    priceRange: "",
    category: "",
  });

  const [showAllItems, setShowAllItems] = useState(false);

  function handleFilterChange(filterType, value) {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  }

  function handleClearAll() {
    setFilters({
      openNow: false,
      priceRange: "",
      category: "",
    });
  }

  function toggleShowAllItems() {
    setShowAllItems((prevState) => !prevState);
  }


  function filterRestaurants() {
    let filteredRestaurants = Data;

    if (filters.openNow !== false) {
      filteredRestaurants = filteredRestaurants.filter(
        (item) => item.status === "OPEN NOW"
      );
    }

    if (filters.priceRange !== "") {
      filteredRestaurants = filteredRestaurants.filter(
        (item) => item.price === filters.priceRange
      );
    }

    if (filters.category !== "") {
      filteredRestaurants = filteredRestaurants.filter(
        (item) => item.categories === filters.category
      );
    }

    return filteredRestaurants;
  }

  const displayedData = showAllItems
    ? filterRestaurants()
    : filterRestaurants().slice(0, 8);

  return (
    <Container>
      <hr />
      <Navigation
        handleFilterChange={handleFilterChange}
        handleClearAll={handleClearAll}
      />
      <hr />
      <h1>All Restaurant</h1>
      <div className="grid">
        {displayedData.map((item) => (
          <div key={item.id} className="grid-item">
            <img src={item.image} alt="" width={250} height={150}/>
            <p>{item.name}</p>
            <Rating rating={item.rating} />
            <div className="item-rat">
              <div className="right-item">
                <p className="categories">{item.categories} </p>
                <span>&#8226;</span>
                <Price price={item.price} />
              </div>
              <div className="left-item">
                <Status status={item.status} />
                {item.status}
              </div>
            </div>
            <Link to={`/detail-restaurant/${item.id}`}>
                <button>LEARN MORE</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="more">
        <button onClick={toggleShowAllItems}>
          {showAllItems ? "SHOW LESS" : "LOAD MORE"}
        </button>
      </div>
    </Container>
  );
}

export default Restaurant;
