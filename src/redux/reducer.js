import { combineReducers } from "redux";
import { GET_ALL_RECIPES, GET_RECIPES_BY_SEARCH } from "./actions";


const initialState = {
    recetas: []
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

        default:
            return state;
    }
}

const appReducer = combineReducers({
    foodReducer
});

export default appReducer;