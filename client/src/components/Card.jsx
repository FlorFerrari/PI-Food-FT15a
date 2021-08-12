import React from "react";
import styled from "styled-components";


export default function Card({ title, image, diets }) {

    return (
        <StyledRecipe >
            <h3>{title}</h3>
            <img src={image} alt="background" width="200px" height="250px" />

            <h5>{diets.map(e => (
                <h5>{e}</h5>
            ))}</h5>

        </StyledRecipe>
    )
}


const StyledRecipe = styled.div`
            min-height: 10vh;
            max-height: 50vh;
            height: 35vh;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 12px;
            box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
            text-align: center;
            border-radius: 1rem;
            cursor: pointer;
            overflow: hidden;
            img {
                width: 100%;
            height: 20vh;
            object-fit: cover;}
            
            `;

