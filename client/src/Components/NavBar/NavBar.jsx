import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navBar.css'; // Asegúrate de que el archivo CSS esté en la ubicación correcta


const NavBar = () => {
  const location = useLocation();

  return (
    <div className='navbar-cont'>
      <div className='navbar-img-cont'>
        <Link to={"/"}><img src="https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-veterinary-logo-design-dog-clipart-corgi-puppy-png-image_6565448.png" alt="" /></Link>
      </div>
      <div className='navbar-links-cont'>
        <Link to={"/home"} className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}> Home </Link>
        <Link to={"/create"} className={`nav-link ${location.pathname === '/create' ? 'active' : ''}`}> Create </Link>
        <Link to={"/about"} className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}> About Me </Link>
      </div>
    </div>
  )
}

export default NavBar;

