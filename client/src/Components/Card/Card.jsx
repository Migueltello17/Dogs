import React from 'react'
// import { Link } from 'react-router-dom';
import './card.css';

const Card = ({name, weight, height, life_span, image, temperament}) => {
  return (
    <div className='.cardContainer'>
        <div className='card'>
    <div className='card-title-cont'>
        <h4>{name}</h4>
    </div>
    <div className='card-info-cont'>
        <h5>Weight {weight}</h5>
        <h5>Height: {height}</h5>
        <h5>Temperament: {temperament}</h5>
        <h5>Life span: {life_span}</h5>
        <div className='card-img-cont'>
          <img src={image} alt="imagen dog" />
        </div>
    </div>
    </div>
</div>
  )
}

export default Card;