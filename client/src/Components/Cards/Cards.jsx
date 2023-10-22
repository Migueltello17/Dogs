import React from 'react';
import Card from '../Card/Card';
import './cards.css';

const Cards = ({dogs}) => {
      return (
    <div className='cardsContainer'>
      {
        dogs?.map(({id, name, weight, height, life_span, image, Temperaments}) => {
            return <Card
                key={id}
                id={id}
                name={name}
                image={image}
                weight={weight}
                height={height}
                life_span={life_span}
                Temperaments={Temperaments}
                />
            })
      }
    </div>
  )
}

export default Cards;
