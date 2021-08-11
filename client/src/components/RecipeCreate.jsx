import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipe, getDietTypes, getRecipes } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function RecipeCreate() {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)

    const [input, setInput] = useState({
        title: "",
        summary: "",
        rating: "",
        healthScore: "",
        steps: "",
        image: "",
        diets: []

    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    function handleCheck(e) {
        if (!e.target.checked && input.diets.length > 0) {
            console.log("unchecked")
            var auxiliar = input.diets.pop()
            setInput({
                ...input,
                diets: [auxiliar]
            })
        }
        if (!input.diets.includes(e.target.value)) {
            setInput({
                ...input,
                diets: [...input, e.target.value]
            })
        }
        console.log("targetvalue:" + e.target.value)
        console.log(input)

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        dispatch(postRecipe(input))
        alert("Recipe Created")
        setInput({
            title: "",
            summary: "",
            rating: "",
            healthScore: "",
            steps: "",
            image: "",
            diets: []
        })
    }

    /*   useEffect(() => {
          dispatch(getDietTypes());
      }, []); */

    return (
        <div>
            <Link to="/home"><button>Home</button></Link>
            <h1>Create your own recipe</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name: </label>
                    <input type="text"
                        value={input.title}
                        name="title"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Summary: </label>
                    <input type="text"
                        value={input.summary}
                        name="summary"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Rating: </label>
                    <input type="range"
                        value={input.rating}
                        name="rating"
                        min="1"
                        max="10"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                {/* <div>
                    <label>Health Score: </label>
                    <input type="range"
                        value={input.healthScore}
                        name="healtScore"
                        min="1"
                        max="1000"
                        onChange={(e) => handleChange(e)}
                    />
                </div> */}
                <div>
                    <label>Steps: </label>
                    <input type="text"
                        value={input.steps}
                        name="steps"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Image: </label>
                    <input type="text"
                        value={input.image}
                        name="image"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label><input type="checkbox" name="diets" value="Gluten Free" id="1" onChange={(e) => handleCheck(e)} />Gluten Free</label>
                    <label><input type="checkbox" name="diets" value="Ketogenic" id="1" onChange={(e) => handleCheck(e)} />Ketogenic </label>
                    <label><input type="checkbox" name="diets" value="Vegetarian" id="1" onChange={(e) => handleCheck(e)} />Vegetarian</label>
                    <label><input type="checkbox" name="diets" value="Vegan" id="1" onChange={(e) => handleCheck(e)} />Vegan</label>


                    {/* 

                    <input type="checkbox" name="diets" value="Ketogenic" id="2" onChange={(e) => handleCheck(e)} />
                    <label for="2">Ketogenic</label>
                    <input type="checkbox" name="diets" value="Vegetarian" id="3" onChange={(e) => handleCheck(e)} />
                    <label for="3">Vegetarian</label>
                    <input type="checkbox" name="diets" value="Lacto ovo vegetarian" id="4" onChange={(e) => handleCheck(e)} />
                    <label for="4">Lacto ovo vegetarian</label>
                    <input type="checkbox" name="diets" value="Vegan" id="5" onChange={(e) => handleCheck(e)} />
                    <label for="5">Vegan</label>
                    <input type="checkbox" name="diets" value="Primal" id="6" onChange={(e) => handleCheck(e)} />
                    <label for="6">Primal</label>
                    <input type="checkbox" name="diets" value="Dairy free" id="7" onChange={(e) => handleCheck(e)} />
                    <label for="7">Dairy free</label>
                    <input type="checkbox" name="diets" value="Pescatarian" id="8" onChange={(e) => handleCheck(e)} />
                    <label for="8">Pescatarian</label>
                    <input type="checkbox" name="diets" value="Paleolithic" id="9" onChange={(e) => handleCheck(e)} />
                    <label for="9">Paleolithic</label>
                    <input type="checkbox" name="diets" value="Whole30" id="10" onChange={(e) => handleCheck(e)} />
                    <label for="10">Whole30</label> */}
                </div>
                <button type="submit"  >Create</button>
            </form>
        </div >
    )
}