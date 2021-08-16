import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipe, getDietTypes, getRecipes } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

function validate(input) {
    let errors = {};
    if (!input.title) {
        errors.name = "Title required"
    }
    return errors;
}



export default function RecipeCreate() {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)
    const [errors, setErrors] = useState({
        title: "Name is required",
    })

    const [input, setInput] = useState({
        title: "",
        summary: "",
        rating: "1",
        healthScore: "1",
        steps: "",
        image: "",
        diets: []

    })
    console.log(input)

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

    function handleCheck(e) {
        const diet = e.target.value;

        if (e.target.checked && !input.diets.includes(diet)) {

            var set = ({
                ...input,
                diets: [...input.diets, diet]
            })
            setInput(set)
        } else {

            if (!e.target.checked) {
                console.log("entro")
                var set = ({
                    ...input,
                    diets: [...input.diets].filter(d => d !== diet)
                })
                setInput(set)
            }

        }


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
        <Container>

            <Link to="/home"><button>Home</button></Link>
            <h1>Create your own recipe</h1>

            <StyleForm onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name: </label>
                    <StyledInput type="text"
                        value={input.title}
                        name="title"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                {errors.name && (
                    <p>{errors.name}</p>
                )}

                <div>
                    <label>Summary: </label>
                    <StyledInput type="text"
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
                <div>
                    <label>Health Score: </label>
                    <input type="range"
                        value={input.healthScore}
                        name="healthScore"
                        min="1"
                        max="100"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Steps: </label>
                    <StyledInput type="text"
                        value={input.steps}
                        name="steps"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div>
                    <label><input type="checkbox" name="diets" value="1" id="1" onChange={(e) => handleCheck(e)} />Gluten Free</label>
                    <label><input type="checkbox" name="diets" value="2" id="2" onChange={(e) => handleCheck(e)} />Ketogenic </label>
                    <label><input type="checkbox" name="diets" value="3" id="3" onChange={(e) => handleCheck(e)} />Vegetarian</label>
                    <label><input type="checkbox" name="diets" value="4" id="4" onChange={(e) => handleCheck(e)} />Lacto ovo vegetarian</label>
                    <label><input type="checkbox" name="diets" value="5" id="5" onChange={(e) => handleCheck(e)} />Dairy free</label>
                    <label><input type="checkbox" name="diets" value="6" id="6" onChange={(e) => handleCheck(e)} />Vegan</label>
                    <label><input type="checkbox" name="diets" value="7" id="7" onChange={(e) => handleCheck(e)} />Pescatarian</label>
                    <label><input type="checkbox" name="diets" value="8" id="8" onChange={(e) => handleCheck(e)} />Paleolithic</label>
                    <label><input type="checkbox" name="diets" value="9" id="9" onChange={(e) => handleCheck(e)} />Primal</label>
                    <label><input type="checkbox" name="diets" value="10" id="10" onChange={(e) => handleCheck(e)} />Whole30</label>
                </div>
                <button type="submit"  >Create</button>
            </StyleForm>
        </Container >
    )
}






//------> STYLED COMPONENTS <----------

const StyleForm = styled.form`
            background-color: #bea5a5;
            min-height: 10vh;
            max-height: 50vh;
            height: 40vh;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 12px;
            box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
            text-align: center;
            border-radius: 1rem;
            width: 100vh;
            margin-left: 20%;
            padding-top: 3rem;
            div {
                margin: 1rem;
            }
            
            
            
`;

const StyledInput = styled.input`
cursor: pointer;
border: none;
border-radius: 10px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
justify-content: space-around;
width: 10rem;
padding-left: 8rem;
`;


const Container = styled.div`
padding: 0rem 9rem;
background-color: #888888;
height: 90vh;
h1{
    margin-left: 38%
}

`;
