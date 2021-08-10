import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipe, getDietTypes, getRecipes } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function RecipeCreate() {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)

    const [input, setIpnut] = useState({
        title: "",
        summary: "",
        rating: "",
        healthScore: "",
        steps: "",
        image: "",
        diets: []

    })

    useEffect(() => {
        dispatch(getDietTypes());
    }, []);

    return (
        <div>
            <Link to="/home"><button>Home</button></Link>
            <h1>Create your own recipe</h1>
            <form action="">
                <div>
                    <label>Name: </label>
                    <input type="text"
                        value={input.title}
                        name="title"
                    />
                </div>
                <div>
                    <label>Summary: </label>
                    <input type="text"
                        value={input.summary}
                        name="summary"
                    />
                </div>
                <div>
                    <label>Rating: </label>
                    <input type="range"
                        value={input.rating}
                        name="rating"
                        min="1"
                        max="10"
                    />
                </div>
                <div>
                    <label>Health Score: </label>
                    <input type="range"
                        value={input.healthScore}
                        name="healtScore"
                        min="1"
                        max="10"
                    />
                </div>
                <div>
                    <label>Steps: </label>
                    <input type="text"
                        value={input.steps}
                        name="steps"
                    />
                </div>
                <div>
                    <label>Image: </label>
                    <input type="text"
                        value={input.image}
                        name="image"
                    />
                </div>
                <div>
                    <input type="checkbox" id="1" />
                    <label for="1">Gluten Free</label>
                    <input type="checkbox" id="2" />
                    <label for="2">Ketogenic</label>
                    <input type="checkbox" id="3" />
                    <label for="3">Vegetarian</label>
                    <input type="checkbox" id="4" />
                    <label for="4">Lacto ovo vegetarian</label>
                    <input type="checkbox" id="5" />
                    <label for="5">Vegan</label>
                    <input type="checkbox" id="6" />
                    <label for="6">Primal</label>
                    <input type="checkbox" id="7" />
                    <label for="7">Dairy free</label>
                    <input type="checkbox" id="8" />
                    <label for="8">Pescatarian</label>
                    <input type="checkbox" id="9" />
                    <label for="9">Paleolithic</label>
                    <input type="checkbox" id="10" />
                    <label for="10">Whole30</label>
                </div>

            </form>
        </div>
    )
}