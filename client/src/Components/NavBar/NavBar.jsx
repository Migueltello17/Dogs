import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <div className='navbar-cont'>
    <div className='navbar-img-cont'>
         <Link to={"/"}><img src="https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-veterinary-logo-design-dog-clipart-corgi-puppy-png-image_6565448.png" alt="" /></Link>
         </div>
        <div className='navbar-links-cont'>
          <Link to={"/home"}> Home </Link>
          <Link to={"/create"}> Create </Link>
          <Link to={"/about"}> About me </Link>
          </div>
        </div>
  )
}

export default NavBar;
