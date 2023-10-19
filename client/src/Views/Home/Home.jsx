import React from 'react'
import Cards from '../../Components/Cards/Cards';
import './Home.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { filterDogsAction, filterOriginAction, getDogs, getTemperaments, 
  orderDogsAction, paginateDogs, orderByWeightAction } from '../../Redux/Actions/actions';

const Home = () => {
    const dispatch = useDispatch();

    const dogs = useSelector((state)=> state.dogs);
    const temperaments = useSelector((state) => state.temperaments)

    useEffect(()=>{
        dispatch(getDogs());
        dispatch(getTemperaments());
        // eslint-disable-next-line
    },[]);
    
    const paginate = (event) =>{
      dispatch(paginateDogs(event.target.name));
    }

    const filterDogs = (event) =>{
      dispatch(filterDogsAction(event.target.value));
    }
    
    const orderDogsAlf = (event) => {
      dispatch(orderDogsAction(event.target.value));
    }

    const filterOrigin = (event) => {
      dispatch(filterOriginAction(event.target.value))
    }

    const orderByWeight = (event) => {
      dispatch(orderByWeightAction(event.target.value))
    }

  return (
    <div>
      <div>
        <h4> Filtro/Ordenamientos:</h4>
        <span> Orden alfabetico:</span>
        <select onClick={orderDogsAlf}  >
          <option value="-"> - </option>
          <option value="AZ"> A-Z </option>
          <option value="ZA"> Z-A </option>
        </select>

        <span> Orden por peso:</span>
        <select onChange={orderByWeight}  >
        <option value="-"> - </option>
          <option value="minWeight"> menor peso </option>
          <option value="maxWeight"> mayor peso </option>
        </select>
        
        <span> Filtrar por temperamentos:</span>
        <select  name='temperament' onChange={filterDogs} >
          <option value=''> Temperamentos </option>
          {temperaments.map(t => <option key={t} value={t}>{t}</option>
            )}
        </select>
        
        <span> Filtrar por origen:</span>
        <select onChange={filterOrigin}>
          <option value='DBB'> DBB </option>
          <option value='API'> API </option>
        </select>
      </div>
      <div>
        <h4>Paginado:</h4>
        <button onClick={paginate} name = 'prev'>Prev</button><button onClick={paginate} name='next'>Next</button>
      </div>
      <h1> Esto es el home </h1>

      <Cards dogs={dogs} />
    </div>
  )
}

export default Home;