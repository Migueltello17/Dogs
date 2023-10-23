import React from 'react'
import './card.css';
import { Link } from 'react-router-dom';

const Card = ({name, weight, height, life_span, image, Temperaments, temperaments, id}) => {
  return (
    <div className='cardContainer'>
      <Link to={`/details/${id}`}>
        <div className='card'>
    <div className='card-title-cont'>
        <h4>{name}</h4>
    </div>
    <div className='card-info-cont'>
        <h5>Weight: {weight}</h5>
        <h5>Height: {height}</h5>
        <h5 className = 'card-temperaments'>
          Temperaments: {Temperaments && Temperaments.map(temperament => temperament.name).join(', ') || temperaments && temperaments.map(temperament => temperament.name).join(', ')} </h5>
        <h5>Life span: {life_span}</h5>
        <div className='card-img-cont'>
          <img src={image} alt="imagen dog" />
        </div>
    </div>
    </div>
      </Link>
  </div>
  );
};

export default Card;