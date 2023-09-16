import React from 'react';
import { useParams } from 'react-router-dom'; 
import Data from './Data';
import Rating from './Rating';
import { Container } from 'reactstrap';
import Price from './Price';
import './DetailRestaurant.css';

function DetailRestaurant() {
  const { id } = useParams();

  const restaurant = Data.find(item => item.id === id);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <Container>
    <div>
      <h2>{restaurant.name}</h2>
      <p>Rating: <Rating rating={restaurant.rating} /></p>
      <img src={restaurant.image} width={700} alt="" />
      <p>{restaurant.name}</p>
      <div className="section">
        <p className='section-title'>Price Range: </p>
        <Price className='section-price' price={restaurant.price} />
        <p className='section-title'>Describe: </p>
        <p>{restaurant.describe}</p>
      </div>
    </div>
    </Container>
  );
}

export default DetailRestaurant;
