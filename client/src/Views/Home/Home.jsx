import React, { useState } from 'react'
import Cards from '../../Components/Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import Paginado from '../../Components/Paginado/Paginado';
import './Home.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { 
  filterDogsAction, 
  getDogs, 
  getTemperaments,
  orderDogsAction, 
  paginateDogs, 
  filterOriginAction, 
  orderByWeightAction, 
  searchDog } from '../../Redux/Actions/actions';

const Home = () => {
    const dispatch = useDispatch();

    const dogs = useSelector((state)=> state.dogs);
    const temperaments = useSelector((state) => state.temperaments);
    const [searchString, setSearchString] = useState(" ");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = useState (8);

    
    useEffect(()=>{
        dispatch(getDogs(dogs));
        dispatch(getTemperaments(temperaments));
    }, []);

    
    function handleChange(e) {
      e.preventDefault();
      setSearchString(e.target.value);
    }

    // Filtro con el backend: 
    function handleSubmit(e) {
      e.preventDefault();
      dispatch(searchDog(searchString))
    }
    
    const paginate = (event) => {
      const action = event.target.name;
      let newPage = currentPage;
    
      if (action === 'prev' && currentPage > 1) {
        newPage = currentPage - 1;
      } else if (action === 'next' && currentPage < totalNumberOfPages) {
        newPage = currentPage + 1;
      }
    

      setCurrentPage(newPage);
      dispatch(paginateDogs(action));
    };
  
    const filterDogs = (event) =>{
      const selectedTemperament = event.target.value;
      dispatch(filterDogsAction(selectedTemperament));
    }
    
    const filterOrigin = (event) => {
      dispatch(filterOriginAction(event.target.value))
    }

    const orderDogsAlf = (event) => {
      const selectedOrder = event.target.value;
      dispatch(orderDogsAction(selectedOrder));
        }

    const orderByWeight = (event) => {
      dispatch(orderByWeightAction(event.target.value))
    }

    const totalNumberOfPages = Math.ceil(dogs.length / itemsPerPage);


  return (
    <div className='home-container'>
      <div className= 'container'>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>

        <h4> Filter/Orders: </h4>
        <span> Order dogs alf: </span>
        <select onChange={orderDogsAlf}>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>

        <span> Orden by weight: </span>
        <select onChange={orderByWeight}  >
        <option value="-"> - </option>
          <option value="minWeight"> less weight </option> 
          <option value="maxWeight"> more weight </option>
        </select>
        
        <span> Filter by temperaments: </span>
        <select onChange={filterDogs} name='temperaments'>
        <option value=''> Temperaments </option>
        
          {temperaments.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <span> Filter by origin:</span>
        <select onChange={filterOrigin}>
          <option value='API'>API</option>
          <option value='DBB'>DBB</option>
        </select>
      </div>
      <div>
      <Paginado />
        <button onClick={paginate} name='prev'>Prev</button>
        <button onClick={paginate} name='next'>Next</button>
      </div>
      <h1> Dogs Home </h1>
      <button onClick={() => window.location.reload()} >Cleaner</button>
      <Cards dogs={dogs} />
    </div>
  )
}

export default Home;


// Less: menor 
// More: mayor 