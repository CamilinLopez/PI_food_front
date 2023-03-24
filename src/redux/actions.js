import axiosInstance from "../configAxios";
import querystring from "querystring"

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPES_BY_SEARCH = "GET_RECIPES_BY_SEARCH";


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
            console.log(error.message);
        }
    }
}

export const getRecipesBySearch = (name) => {
    return async (dispatch) => {
        try {
            const data = (await axiosInstance.get(`/recipes?name=${name}`)).data;

            if (data.error) throw new Error(data.error);

            return dispatch({
                type: GET_RECIPES_BY_SEARCH,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}



