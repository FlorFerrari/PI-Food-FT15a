import React from "react";
import styled from "styled-components";

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <StyledNav>
            <ul >
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li className="number" key={number}>
                            <button onClick={() => paginado(number)}>{number}</button>
                        </li>
                    ))}
            </ul>
        </StyledNav>
    )
}

//--------- STYLED COMPONENTS

const StyledNav = styled.div`
  position: absolute;
  margin-left: 81rem;
  bottom: 23rem;
  ul {
      list-style: none;
  }
  li{
      margin: 0.5rem
  }
  button {
            border: none;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            padding: 0.5rem;
            cursor: pointer;
            
            
        }
      button:hover {
        background-color: #e2f3db;}

`;
