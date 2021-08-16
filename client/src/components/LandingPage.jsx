import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../images/imagen1.jpg"

export default function LandingPage() {
    return (
        <Contenedor >
            <div>

                <Link to="/home"><button>Explore</button></Link>
            </div>
        </Contenedor>
    )
};


const Contenedor = styled.div`
    height: 98vh;
    background-image: url(${img});
    background-size: cover;
    display: flex;
    justify-content: center;
    div {
        align-self: center;
        
    }
    button {
            border: none;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            padding: 0.5rem;
            cursor: pointer;
            position: relative;
            left: -35rem;
            top: 7rem;
            width: 17rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
            
        }
        button:hover {
            background-color: #60b8189e;
        }
     
  
`;
