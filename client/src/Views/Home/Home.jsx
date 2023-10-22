import React, { useState } from 'react'
import Cards from '../../Components/Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { filterDogsAction, getDogs, getTemperaments, 
  orderDogsAction, paginateDogs, orderByWeightAction, searchDog } from '../../Redux/Actions/actions';

const Home = () => {
    const dispatch = useDispatch();

    const dogs = useSelector((state)=> state.dogs);
    const temperaments = useSelector((state) => state.temperaments);
    const [searchString, setSearchString] = useState(" ");


    useEffect(()=>{
        dispatch(getDogs());
        dispatch(getTemperaments());
        // eslint-disable-next-line
    },[]);

    
    function handleChange(e) {
      e.preventDefault();
      setSearchString(e.target.value);
    }

    // Filtro con el backend: 
    function handleSubmit(e) {
      e.preventDefault();
      dispatch(searchDog(searchString))
    }
    
    const paginate = (event) =>{
      dispatch(paginateDogs(event.target.name));
    }

    const filterDogs = (event) =>{
      dispatch(filterDogsAction(event.target.value));
    }
    
    const orderDogsAlf = (event) => {
      dispatch(orderDogsAction(event.target.value));
    }

    const orderByWeight = (event) => {
      dispatch(orderByWeightAction(event.target.value))
    }

  return (
    <div>
      <div className= 'container'>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
        <h4> Filter/Orders: </h4>
        <span> Order dogs alf: </span>
        <select onClick={orderDogsAlf}>
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
      </div>
      <div>
        <h4> Paginate: </h4>
        <button onClick={paginate} name='prev'>Prev</button><button onClick={paginate} name='next'>Next</button>
      </div>
      <h1> Dogs Home </h1>
      <Cards dogs={dogs} />
    </div>
  )
}

export default Home;


// Less: menor 
// More: mayor 