
const initialState = {
    recipes : [],
    allRecipes : [],
    diets: []
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case "GET_RECIPES":
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
            case "FILTER_BY_DIET":
                const allRecipes = state.allRecipes
                const statusFiltered = action.payload === "All" ? allRecipes : allRecipes.filter( e => e.diets.includes(action.payload))
                return{
                    ...state,
                    recipes: statusFiltered
                }
            case "GET_NAME_RECIPES":
                return {
                    ...state,
                    recipes: action.payload
                }
                case "POST_CHARACTER":
                    return {
                        ...state,
                    }
                case "GET_DIET_TYPES":
                    return {
                        ...state,
                        diets: action.payload
                    }
            default: 
            return state;
    }

}

export default rootReducer;