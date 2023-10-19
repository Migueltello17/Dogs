import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Create.css';
import { useEffect } from 'react'
import { getTemperaments, postDog } from '../../Redux/Actions/actions';
import validate from './validate';

  //Recibe el dispatch de actions
const Create = () => {
  const dispatch = useDispatch();
  
  const temperaments = useSelector((state)=>state.temperaments)
  
  useEffect (()=> {
    dispatch(getTemperaments());
  }, [dispatch]);

  
  const [state, setState] = useState({
    name: "",
    image:"",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span_min: "",
    life_span_max:"",
    temperament: [],
  });
  
  const [errors, setErrors] = useState({
    name: "",
    image:"",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span_min: "",
    life_span_max:"",
    temperament: "",
  });
  
  const handleChange = (event) => {
    if(event.target.name === 'temperament'){
      if(state.temperament.includes(event.target.value)) return;
      setState({
        ...state,
        [event.target.name]: [...state[event.target.name], event.target.value],
      });
    }else{
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }


    setErrors(
      validate({
        ...state,
        [event.target.name]: event.target.value,
      })
    )
  }
  console.log("esto es el input:", state)
  console.log("esto es errors: ", errors)

  const disabledFunction = () => {
    let disabled;
    for(let error in errors){
      if(errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDog(state));
    setState({
      name: "",
      image: "",
      height_min: "",
      height_max: "",
      weight_min: "",
      weight_max: "",
      life_span_min: "",
      life_span_max: "",
      temperament: [],
    });
  }

  const handleDelete = (temperamentName) => {
    const updatedTemperaments = state.temperament.filter((temp) => temp !== temperamentName);
    setState({
      ...state,
      temperament: updatedTemperaments,
    });

  }

  return (
    <div className='container'>
      <h1>¡Crea a tu perro!</h1>
      <h4> Debes completar todos los campos </h4>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        {errors.name ? <label>{errors.name}</label> : null} 
        
        <div className='formGroup'>
          <label htmlFor="image">image:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={state.image}
            onChange={handleChange}
          />
        </div>
        {errors.image ? <label>{errors.image}</label> : null}
       
          
        <div className='formGroup'>
          <label htmlFor="weight">Peso (en kg):</label>
          <div className='minMaxFields'>
            <input
              type="text"
              id="weight_min"
              name="weight_min"
              value={state.weight_min}
              onChange={handleChange}
              step="1"
              placeholder="Min"
              min = '1'
            />
            <input
              type="text"
              id="weight_max"
              name="weight_max"
              value={state.weight_max}
              onChange={handleChange}
              step="1"
              placeholder="Max"
              min= {state.weight_min}
            />
          </div>
        </div>
        {errors.weight_min ? <label>{errors.weight_min}</label> : null}
        {errors.weight_max ? <label>{errors.weight_max}</label> : null}
        
        <div className='formGroup'>
          <label htmlFor="height">Altura (en cm):</label>
          <div className='minMaxFields'>
            <input
              type="text"
              id="height_min"
              name="height_min"
              value={state.height_min}
              onChange={handleChange}
              step="1"
              placeholder="Min"
              min = '1'
            />
            <input
              type="text"
              id="height_max"
              name="height_max"
              value={state.height_max}
              onChange={handleChange}
              step="1"
              placeholder="Max"
              min = {state.height_min}
            />
          </div>
        </div>
        {errors.height_min ? <label>{errors.height_min}</label> : null}
        {errors.height_max ? <label>{errors.height_max}</label> : null}


        <div className='formGroup'>
          <label htmlFor="life_span">Espectativa de vida (en años):</label>
          <div className='minMaxFields'>
            <input
              type="number"
              id="life_span_min"
              name="life_span_min"
              value={state.life_span_min}
              onChange={handleChange}
              step="1"
              placeholder="Min"
              min = '1'
            />
            <input
              type="number"
              id="life_span_max"
              name="life_span_max"
              value={state.life_span_max}
              onChange={handleChange}
              step="1"
              placeholder="Max"
              min = {state.life_span_min}
            />
          </div>
        </div>
        {errors.life_span_min ? <label>{errors.life_span_min}</label> : null}
        {errors.life_span_max ? <label>{errors.life_span_max}</label> : null}

        <div className='formGroup'>
          <label htmlFor="temperament">Temperamento:</label>
          <select
            id="temperament"
            name="temperament"
            // value={state.temperament} 
            
            onChange={handleChange}
          >
            <option value="">Selecciona un temperamento</option>
            {temperaments.map((temp, index) => (
              <option key={index} value={temp}>
                {temp}
              </option>
            ))}
          </select>
        </div>
        <div>
        {state.temperament.map((t, index) => (
          <span key={index}>
            <button type='button' name='temperament' id={t} onClick={() => handleDelete(t)}>
              {t}
            </button>
          </span>
        ))}
        </div>
        <input disabled={disabledFunction()} type="submit" />
      </form>
    </div>
  );
};

export default Create;
