import { 
    GET_DOGS, 
    GET_DOG, 
    SEARCH_DOG, 
    GET_DETAILS, 
    DELETE_DETAILS, 
    GET_TEMPERAMENTS, 
    PAGINATE,
    SET_PAGE, 
    SET_TOTAL_PAGE, 
    FILTER, 
    FILTERORIGIN, 
    ORDER,
     ORDERBYWEIGHT} from '../Actions/actions-type';

    //Inicializar el initialState
const initialState = {
dogs: [],
temperaments:[],
dog:[],
dogsBackUP: [],
dogsBackUp2: [],
detail: [],
dogsFiltered:[],
currentPage: 1,
filter: false,
dogsSortedWeight: [],    
}

    //Definir el rootReducer
const rootReducer = (state = initialState, action) =>{
const ITEMS_PER_PAGE = 8;

switch(action.type){
   case GET_DOGS:
       return {
        ...state, 
        dogs:[...action.payload].splice(0, ITEMS_PER_PAGE), 
        dogsBackUP: action.payload,
        dogsBackUp2: action.payload
       };

   case GET_DOG:
       return{
        ...state, 
        dog: action.payload}

    case SEARCH_DOG:
        return{
        ...state,
        dogs: action.payload,
        // dogsFiltered: action.payload
        }

   case GET_DETAILS:
       return{
           ...state,
           detail: action.payload
       }

   case DELETE_DETAILS:
       return{
           ...state,
           detail: []
       }

   case GET_TEMPERAMENTS:{
       return{
           ...state,
           temperaments: action.payload
       }
   }
   case SET_TOTAL_PAGE: //Reducer para actualizar total de páginas
   return {
       ...state,
       totalNumberOfPages: Math.ceil(state.dogsFiltered.length / 8)
   };
    case SET_PAGE: //Reducer para actualizar página actual
   return {
       ...state,
       currentPage: action.payload
   };


   case PAGINATE: {
    const currentPage = action.payload; //Pagina que se desea navegar
    const itemsPerPage = 8; // Cantidad de elementos por página
    const firstIndex = (currentPage - 1) * itemsPerPage;
  
    // Si hay un filtro activo y el indice está fuera de los limites de la lista o es 0 = retorna el estado sin cambios
    if (state.filter) {
      if (firstIndex >= state.dogsFiltered.length || firstIndex < 0) return state;
  
      return {
        ...state,
        dogs: [...state.dogsFiltered].slice(firstIndex, firstIndex + itemsPerPage),
        currentPage,
      };
    }
    // Si no hay un filtro activo y el firstIndex está fuera  de los limites de lista de perros o es 0 = retorna el estado actual sin cambios.
    if (firstIndex >= state.dogsBackUP.length || firstIndex < 0) return state;
  
    return {
      ...state,
      dogs: [...state.dogsBackUP].slice(firstIndex, firstIndex + itemsPerPage),
      currentPage,
    };
  }
  // Si el firstIndex es valido, se crea una copia del estado, se muestra la lista de perros de la pagina actual

   case FILTER:
        console.log(state.dogsBackUP)
       let filterByTemperament = [];
        state.dogsBackUP?.forEach ((p) => {
            if(p.Temperaments?.find((t) => t.name === action.payload) || p.temperaments?.find((t) => t.name === action.payload)) {
                filterByTemperament.push(p);
                console.log(p.name)
            }
        })
        console.log(filterByTemperament)

       //[...state.dogsBackUP].filter((d) => d.temperaments.includes(action.payload)); 
       return{
           ...state,
           dogs: filterByTemperament.splice(0, ITEMS_PER_PAGE),
           dogsFiltered: filterByTemperament,
           filter: true, 
       }
   

   case ORDER:
       let orderByName = [];
       let filtered = state.filter ? state.dogsFiltered : state.dogsBackUP
       if(action.payload === "AZ"){
           orderByName = [...filtered].sort((prev, next) =>{
               if(prev.name > next.name) return 1;
               if(prev.name < next.name) return -1;
               return 0;
           })
       } else if (action.payload === "ZA"){
           orderByName = [...filtered].sort((prev, next) =>{
               if(prev.name > next.name) return -1;
               if(prev.name < next.name) return 1;
               return 0;
           })
       } 
    //    else return state;
       return{
           ...state,
           dogs: [...orderByName].splice(0, ITEMS_PER_PAGE),
           dogsBackUP: orderByName,
           dogsFiltered: orderByName,
           currentPage: 1
       }

       

    case FILTERORIGIN:
        let filterByOrigin = [];
        if(action.payload === 'DBB'){
            filterByOrigin = [...state.dogsBackUP].filter((d) => isNaN(d.id) );
        }else if(action.payload === 'API'){
            filterByOrigin = [...state.dogsBackUP].filter((d) => !isNaN(d.id) );
        }
                
                 
        return{
        ...state,
        dogs: filterByOrigin.splice(0, ITEMS_PER_PAGE),
        dogsFiltered: filterByOrigin,
        filter: true, 
        }
       
  case ORDERBYWEIGHT:
        const sortedWeight =
        action.payload === "minWeight"
            ? state.dogsBackUP.sort((a, b) => {
         if (parseInt(a.weight.split('-')[1]) > parseInt(b.weight.split('-')[1])) {
           console.log("estos son los pesos", a.weight.split('-')[1])
           return 1;
         }
         if (parseInt(b.weight.split('-')[1]) > parseInt(a.weight.split('-')[1])) {
           return -1;
         }
         return 0;
       })
        : state.dogsBackUP.sort((a, b) => {
         if (parseInt(a.weight.split('-')[1]) > parseInt(b.weight.split('-')[1])) {
           return -1;
         }
         if (parseInt(b.weight.split('-')[1]) > parseInt(a.weight.split('-')[1])) {
           return 1;
         }
         return 0;
       });
        return {
        ...state,
        dogs: [...sortedWeight].splice(0, ITEMS_PER_PAGE),
    };
   
   
    default: return state;
    }
};


export default rootReducer;
