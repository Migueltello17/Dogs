import React from 'react'
import { Link } from 'react-router-dom' 
import './Landing.css';
const Landing = () => {
  return (
    <div className='landing'>
        <div className='containerLanding'> 
         <h1>Dogs API</h1>
         <h4>Thank you for visiting the Dogs page!</h4>
          <button>
             <Link to='/home'>
                Get into
              </Link>
          </button>
        </div>
    </div>
  )
}

export default Landing;