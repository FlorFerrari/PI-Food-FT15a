import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipe, getDietTypes, getRecipes } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function RecipeCreate() {
    const dispatch = useDispatch()
    const recipes = useSelector((state) => state.recipes)

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
        dispatch(getRecipes());
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
                    <input type="text"
                        value={input.rating}
                        name="rating"
                    />
                </div>
                <div>
                    <label>Health Score: </label>
                    <input type="text"
                        value={input.healthScore}
                        name="healtScore"
                    />
                </div>
            </form>
        </div>
    )
}