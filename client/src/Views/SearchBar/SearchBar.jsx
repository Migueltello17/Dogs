import React, {useState} from 'react'

const SearchBar = ({ handleChange, handleSubmit }) => {
  const [searchText, setSearchText] = useState("");
  
  // Función para manejar el cambio en el campo de búsqueda
  const handleInputChange = (e) => {
    setSearchText(e.target.value); // Actualizar el estado con el texto de búsqueda
    handleChange(e); // Llamar a la función handleChange pasada como prop
  }
  
  return (
    <div className='navbar-search-cont'>
    <form>
          <input 
          placeholder='Search name here' 
          type='search' 
          value={searchText}
          onChange= {handleInputChange}
          />
          <button type='submit' onClick={handleSubmit} disabled={searchText.trim() === ""}> 
          Search 
          </button>
          <button type='submit' onClick={handleSubmit}>
            All dogs
          </button>
          </form>
    </div>
  )
}

export default SearchBar;