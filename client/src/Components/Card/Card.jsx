import React from 'react'
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({id, name, weight, height, life_span, image, temperament}) => {
  return (
        <Link to={`/detail/${id}`}>
        <div className='cardContainer'>
            <img className='cardImg' src={image} alt={name}/>
            <div className='carContain'>
                <p>{name}</p>
                <h4>Peso: {weight}</h4>
                <h4>Altura: {height}</h4>
                <h4>Esperanza de vida: {life_span}</h4>
                <div className='temperament'>
                    {temperament.map((temp, i) => <p key={i}>{temp}</p>)}
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Card;