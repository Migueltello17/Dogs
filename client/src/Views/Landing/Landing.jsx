import React from 'react'
import { Link } from 'react-router-dom' 
import './Landing.css';
const Landing = () => {
  return (
    <div className='landing'>
        <div className='container'> 
         <h1>Dogs API</h1>
          <button>
             <Link to='/home'>
                Ingresar
              </Link>
          </button>
        </div>
    </div>
  )
}

export default Landing;