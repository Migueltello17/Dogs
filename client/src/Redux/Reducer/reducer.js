import { GET_DOGS, GET_DOG, SEARCH_DOG, GET_DETAILS, DELETE_DETAILS, GET_TEMPERAMENTS, PAGINATE, FILTER, ORDER,
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
currentPage: 0,
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

   case PAGINATE:{
       const next_page = state.currentPage + 1;
       const prev_page = state.currentPage - 1;
       const firstIndex = action.payload === 'next' ? next_page * ITEMS_PER_PAGE : prev_page * ITEMS_PER_PAGE;

       if(state.filter){
           if(action.payload === 'next' && firstIndex >= state.dogsFiltered.length) return state;
           else if(action.payload === 'prev' && prev_page < 0) return state;
           
           return {
               ...state,
               dogs:[...state.dogsFiltered].splice(firstIndex, ITEMS_PER_PAGE),
               currentPage: action.payload === 'next'? next_page : prev_page                                
           }
       }
       console.log("prev:---------------------------- ", prev_page)
       if(action.payload === 'next' && firstIndex >= state.dogsBackUP.length) return state;
       else if(action.payload === 'prev' && prev_page < 0) return state;

       return {
           ...state,
           dogs:[...state.dogsBackUP].splice(firstIndex, ITEMS_PER_PAGE),
           currentPage: action.payload === 'next'? next_page : prev_page                                
       }
   }

   case FILTER:
        console.log(state.dogsBackUP)
       const filterByTemperament = [];
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
       if(action.payload === "AZ"){
           orderByName = [...state.dogsBackUP].sort((prev, next) =>{
               if(prev.name > next.name) return 1;
               if(prev.name < next.name) return -1;
               return 0;
           })
       } else if (action.payload === "ZA"){
           orderByName = [...state.dogsBackUP].sort((prev, next) =>{
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
           currentPage:0
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
