
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
                case "ORDER_BY_NAME":
                        if (action.payload === "desc") {
                            let sortedArr = state.recipes.sort(function(a,b){
                                if(a.title > b.title) {
                                    return 1
                                }
                                if (b.title > a.title) {
                                    return -1
                                }
                                return 0;
                            })
                            return {
                                ...state,
                                recipes: sortedArr
                            }} 
                            
                            if (action.payload === "asc") {
                            let sortedArr = state.recipes.sort(function(a,b){
                                if(a.title > b.title) {
                                    return -1
                                }
                                if (b.title > a.title) {
                                    return 1
                                }
                                return 0;
                            })
                    
                            return {
                            ...state,
                            recipes: sortedArr
                            }}
 
                            if (action.payload === "1") {
                                let sortedArr = state.recipes.sort(function(a,b){
                                    if(a.healthScore > b.healthScore) {
                                        return 1
                                    }
                                    if (b.healthScore > a.healthScore) {
                                        return -1
                                    }
                                    return 0;
                                })
                                return {
                                    ...state,
                                    recipes: sortedArr
                                }} 

                            else if (action.payload ==="2") {
                                    let sortedArr = state.recipes.sort(function(a,b){
                                        if(a.healthScore > b.healthScore) {
                                            return -1
                                        }
                                        if (b.healthScore > a.healthScore) {
                                            return 1
                                        }
                                        return 0;
                                    })
                                    return {
                                        ...state,
                                        recipes: sortedArr
                                    }} 
                        
                    
            default: 
            return state;
    }

}

export default rootReducer;