
const initialState = {
    recipes : [],
    allRecipes : []
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
            default: 
            return state;
    }

}

export default rootReducer;