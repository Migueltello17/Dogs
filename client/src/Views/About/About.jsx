import React from 'react'
import './About.css';
import me from '../../Assets/me.png';
import fondo from '../../Assets/aboutFondo.png';

const About = () => {
  return (
    <div className='contenedor' style={{ backgroundImage: `url(${fondo})` }}>
      <div className='info'>
        <article className='text'>
          <h1>Tello Miguel</h1>
          <p>STATUS | FullStack Webdeveloper in Progress...</p>
          <p>RACE | Male</p>
          <p>SPECIE | Human</p>
          <p>ORIGIN | Cordoba, Argentina</p>
        </article>
      </div>
      <div className='foto'>
        <img src={me} alt="Yo" />
      </div>
    </div>
  );
};

export default About;
