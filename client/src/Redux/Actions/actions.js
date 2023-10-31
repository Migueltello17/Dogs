import axios from 'axios';
import { 
    GET_DOGS, 
    GET_DOG, 
    SEARCH_DOG,
    GET_DETAILS, 
    DELETE_DETAILS, 
    GET_TEMPERAMENTS, 
    SET_PAGE, 
    SET_TOTAL_PAGE,
    PAGINATE, 
    FILTER, 
    FILTERORIGIN,
    ORDER,  
    ORDERBYWEIGHT,} from "./actions-type.js";


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

export const searchDog = (name) => {
    return async function (dispatch) {
      try {
        const response = await axios(`http://localhost:3001/dogs/?name=${name}`);
       return dispatch({
          type: SEARCH_DOG, 
          payload: response.data, 
        });
      } catch (error) {
        alert("Raza no encontrada");
      }
    };
  };


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

// Acción para traer definir el total de páginas
export function setTotalPage() {
    return {
        type: SET_TOTAL_PAGE,
    };
}

// Acción para traer definir página actual
export const setPage = (pageNumber) => ({
    type: SET_PAGE,
    payload: pageNumber,
});

export const paginateDogs = (order) => {
    return async function (dispatch, getState) {
      try {
        const state = getState(); // Obtener el estado actual
        const currentPage = state.currentPage; // Obtener la página actual
  
        if (order === 'next') {
          // Si se hizo clic en "Next"
          const nextPage = currentPage + 1;
          dispatch({
            type: PAGINATE,
            payload: nextPage,
          });
        } else if (order === 'prev') {
          // Si se hizo clic en "Prev"
          const prevPage = currentPage - 1;
          dispatch({
            type: PAGINATE,
            payload: prevPage,
          });
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    };
  };
  

export const filterDogsAction = (temperament) =>{
    return async function(dispatch, getState){
        try {
            dispatch({
                type: FILTER,
                payload: temperament
            })
        } catch (error) {
            // alert(error.response.data.error)
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

