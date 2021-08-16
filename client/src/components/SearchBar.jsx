import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { getNameRecipes } from "../actions";

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)

    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameRecipes(name))

    }

    return (
        <div>
            <StyledInput type="text"
                placeholder="Search recipe"
                onChange={(e) => handleInputChange(e)}

            />
            <Sb type="submit" onClick={(e) => handleSubmit(e)} >Search</Sb>
        </div>
    )
}




const Sb = styled.button`
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
            border: none;
            border-radius: 10px;
            margin-left: 1rem;
            padding: 6px;
            width: 80px;
            cursor: pointer;

            
           
`;

const StyledInput = styled.input`
font-family: 'Montserrat', sans-serif;
font-weight: 800;
padding: 5px;
border: none;
border-radius: 10px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
justify-content: space-around;
width: 10rem;
padding-left: 8rem;
`;