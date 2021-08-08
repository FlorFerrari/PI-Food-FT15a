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