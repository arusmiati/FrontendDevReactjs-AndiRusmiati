import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Rating.css'

function Rating({ rating }) {
  const maxRating = 5; 
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    const starClassName = i <= rating ? 'filled-star' : 'empty-star';
    stars.push(<FaStar key={i} className={starClassName} />);
  }

  return (
    <div className="rating">
      {stars}
    </div>
  );
}

export default Rating;
