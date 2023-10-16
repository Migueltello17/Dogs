import React from 'react';
import '../NavBar/navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
}

export default SearchBar;
