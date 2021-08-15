import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LandingPage() {
    return (
        <Contenedor >
            <div>
                {/*  <h1 className={s.title}>Delicious</h1>
        <h2 className={s.h2}>Just one click away <br></br>from thousands of <br></br>healthy recipes</h2> */}
                <Link to="/home"><button>Explore</button></Link>

            </div>
        </Contenedor>
    )
};


const Contenedor = styled.div`
    height: 100vh;
    background-color: linen;
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
            
            
        }
     
  
`;
