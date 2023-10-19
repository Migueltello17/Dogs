import axios from 'axios';
import { 
    GET_DOGS, 
    GET_DOG, 
    GET_DETAILS, 
    DELETE_DETAILS, 
    GET_TEMPERAMENTS, 
    PAGINATE, 
    FILTER, 
    ORDER, 
    FILTERORIGIN, 
    ORDERBYWEIGHT } from "./actions-type.js";


export const getDogs = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/dogs/")
            dispatch({
                type: GET_DOGS, 
                payload: response.data});
        } catch (error) {
        }
    }
};

export const getDog = (id) => {
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/dogs/${id}`);
            dispatch({
                type: GET_DOG, 
                payload: response.data});
        } catch (error) {
        }
    }
}

export const getDetails = (id) => {
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/dogs/${id}`);
            dispatch({
                type: GET_DETAILS, 
                payload: response.data});
        } catch (error) {
        }
    }
}

export const deleteDetails = (id) => {
    return async function(dispatch){
        dispatch({type: DELETE_DETAILS});
    }
}

export const getTemperaments = ()=> {
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/temperaments/");
            dispatch({
                type: GET_TEMPERAMENTS, 
                payload: response.data})
        } catch (error) {
        }
    }
}

export const postDog = (state) => {
    return async function(dispatch){
        try {
            await axios.post("http://localhost:3001/dogs/", state);
            alert('Nueva raza creada exitosamente');
        } catch (error) {
            console.log(error)
            alert(error.response.data.error);
        }
    }
}

export const paginateDogs = (order) =>{
    return async function(dispatch){
        try {
            dispatch({
                type: PAGINATE,
                payload: order
            })
        } catch (error) {
            alert(error.response.data.error);
        }
    }
}

export const filterDogsAction = (temperament) =>{
    return async function(dispatch){
        console.log(temperament)
        try {
            dispatch({
                type: FILTER,
                payload: temperament
            })
        } catch (error) {
        }
    }
}

export const orderDogsAction = (order) =>{
    return async function(dispatch){
        try {
            dispatch({
                type: ORDER,
                payload: order
            })
        } catch (error) {  
            alert(error.response.data.error);
        }
    }
}

export const filterOriginAction = (origin) => {
    return async function(dispatch){
        try {
            dispatch({
                type: FILTERORIGIN,
                payload: origin
            })
        } catch (error) {
            alert(error.response.data.error);
        }
    }
}

export const orderByWeightAction = (order) =>{
    return async function(dispatch){
        try {
            dispatch({
                type: ORDERBYWEIGHT,
                payload: order
            })
        } catch (error) {
            alert(error.response.data.error);
        }
    };
};