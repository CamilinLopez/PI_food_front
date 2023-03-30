import axiosInstance from "../configAxios";
import querystring from "querystring"


export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPES_BY_SEARCH = "GET_RECIPES_BY_SEARCH";
export const GET_DIETS = "GET_DIETS";
export const FILTER_DIETS = "FILTER_DIETS";
export const ALL_ERRORS = "ALL_ERRORS";
export const DELETE_ERROR = "DELETE_ERROR";



export const getAllRecipes = (filter) => {
    const filterStr = querystring.stringify(filter);

    return async (dispatch) => {
        try {
            const data = (await axiosInstance.get(`/recipes/getDataFilter?${filterStr}`)).data;
            if (data.error) throw new Error(data.error);

            return dispatch({
                type: GET_ALL_RECIPES,
                payload: data
            });
        } catch (error) {
            return dispatch({
                type: ALL_ERRORS,
                payload: {from:"getAllRecipes", message:(error.response.data)}
            })
        }
    }
}

export const getRecipesBySearch = (name) => {
    return async (dispatch) => {
        try {
            const data = (await axiosInstance.get(`/recipes?name=${name}`)).data;

            if (data.error) throw new Error(data.error.message);

            return dispatch({
                type: GET_RECIPES_BY_SEARCH,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: ALL_ERRORS,
                payload: {from:"getRecipesBySearch", message: error.response.data}
            })
        }
    }
}

export const getDiets = () => {
    return async (dispatch) => {
        try {
            const data = (await axiosInstance.get("/diets/getAllDiets")).data;
            if (data.error) throw new Error(data.error);

            return dispatch({
                type: GET_DIETS,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const filterDiets = (name) => {
    return { type: FILTER_DIETS, payload: name }
}

export const deleteError = (id) => {
    return { type: DELETE_ERROR, payload:id  }
}


