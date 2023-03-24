import { combineReducers } from "redux";
import { GET_ALL_RECIPES, GET_RECIPES_BY_SEARCH, GET_DIETS, FILTER_DIETS } from "./actions";


const initialState = {
    recetas: [],
    diets: [],
    filterDiets:[]
}

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recetas: action.payload
            }
        case GET_RECIPES_BY_SEARCH:
            return{
                ...state,
                recetas: action.payload
            }
        case GET_DIETS:
            return{
                ...state,
                diets: action.payload
            }
        case FILTER_DIETS:
            const {diets} = state;
            const filter = diets.filter(item => item.includes(action.payload));

            return{
                ...state,
                filterDiets: filter
            }          

        default:
            return state;
    }
}

const appReducer = combineReducers({
    foodReducer
});

export default appReducer;