import { combineReducers } from "redux";
import { GET_ALL_RECIPES, GET_RECIPES_BY_SEARCH, GET_DIETS, FILTER_DIETS, ALL_ERRORS, DELETE_ERROR } from "./actions";


const initialState = {
    recetas: [],
    diets: [],
    filterDiets: [],
    errors: []
}

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_ALL_RECIPES:
            state.errors = [];
            return {
                ...state,
                recetas: action.payload
            }
        case GET_RECIPES_BY_SEARCH:
            state.errors = [];
            return {
                ...state,
                recetas: action.payload
            }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        case FILTER_DIETS:
            const { diets } = state;
            const filter = diets.filter(item => item.includes(action.payload));

            return {
                ...state,
                filterDiets: filter
            }

        case ALL_ERRORS:
            return {
                ...state,
                errors: [state.errors, action.payload]
            }

        case DELETE_ERROR: 
        return {
            ...state,
            errors: state.errors.filter( item => item.id!==action.payload )
        }    

        default:
            return state;
    }
}

const appReducer = combineReducers({
    foodReducer
});

export default appReducer;