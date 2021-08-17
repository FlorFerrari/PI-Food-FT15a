import axios from "axios";
// aca se conecta front con el back!!

export function getRecipes() {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/recipes");
        return dispatch({
            type: "GET_RECIPES",
            payload: json.data
        })
    }
}

export function filterRecipesByDiet(payload){
    return {
        type: "FILTER_BY_DIET",
        payload
    }
}

export function getNameRecipes(name) {
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/recipes?title=" + name);
        return dispatch({
            type: "GET_NAME_RECIPES",
            payload: json.data
        })
    } catch (error) {
        console.log(error)
    }
}}

export function getDietTypes() {
    return async function(dispatch){
        
        var info = await axios.get("http://localhost:3001/types", {

        });
        return dispatch({
            type: "GET_DIET_TYPES",
            payload: info.data
        })
    } 

}

export function postRecipe (payload){
    return async function (dispatch){
        
        const response = await axios.post("http://localhost:3001/recipe", payload)
        console.log(response)
        return response;
        
    }
}

export function orderByName(payload){
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}

export function getDetail (id) {
    return async function (dispatch){
        try{
            var json = await axios.get("http://localhost:3001/recipes/" + id);
            return dispatch ({
                type: "GET_DETAIL",
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}

export function emptyDetail(){
    return {
        type: "EMPTY_DETAIL"
        
    }
}