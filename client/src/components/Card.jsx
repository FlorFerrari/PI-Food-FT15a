import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getDetail } from "../actions";


export default function Card({ title, image, diets, createdInDb }) {

    /* const dispatch = useDispatch();
    const loadDetailHandler = () => {
        console.log("entro al detail handler")
        dispatch(getDetail(id))
    } */

    return (

        <StyledRecipe /* onClick={loadDetailHandler} */>
            <h3>{title}</h3>
            <img src={image} alt="background" width="200px" height="250px" />

            <StyledContainer>{diets.map(e => (
                <h5>{e}</h5>
            ))}</StyledContainer>

        </StyledRecipe>
    )
}






//------> STYLED COMPONENTS <----------




const StyledContainer = styled.div`
  
  border-radius: 10px;
  
  display: flex;
  
  justify-content: center;
  
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  position: relative;
  top: -9px;
  h5{
      padding: 1px;
  }
  
`;

const StyledRecipe = styled.div`
            min-height: 10vh;
            max-height: 50vh;
            height: 40vh;
            
            box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
            text-align: center;
            border-radius: 1rem;
            cursor: pointer;
            overflow: hidden;
            img {
                width: 100%;
            height: 22vh;
            object-fit: cover;}
            h5 {
               /*  margin-top: 8px;
                margin-left: 15px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                justify-content: space-evenly;
                grid-row-gap: -20px; */
                font-size: 15px

            }
            
            `;

