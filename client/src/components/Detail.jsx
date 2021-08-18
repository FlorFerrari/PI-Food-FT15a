import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { getDetail } from "../actions/index";


import styled from "styled-components";

export default function Detail(props) {



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch])

    const detail = useSelector((state) => state.detail)
    console.log(detail)

    return (

        <>



            {
                detail.length > 0 ?
                    <StyledContainer>
                        <StyledDiv_1>
                            <Link to="/home">Home</Link>
                            {typeof (detail[0].diets[0]) === "string" ? detail[0].diets.map(e => <button>{e}</button>) : detail[0].diets.map(e => <button>{e.name}</button>)}
                        </StyledDiv_1>



                        <StyledDiv_2>
                            <div>
                                <h1>{detail[0].title}</h1>
                                <img src={detail[0].image ? detail[0].image : "https://cdn2.tmbi.com/TOH/Images/articles/shutterstock_301882538_750x420.jpg"} alt="Food" />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: detail[0].summary }} />
                            <h3>Steps:</h3>
                            <h4>{typeof (detail[0].steps[0]) === "string" ? detail[0].steps : (detail[0].steps.steps.map(e => e.number + ") " + e.step + " "))}</h4>

                        </StyledDiv_2>

                        <StyledDiv_3>
                            <div>
                                Health Score: {detail[0].healthScore}
                            </div>
                            <div>
                                Rating: {detail[0].rating}
                            </div>
                        </StyledDiv_3>


                    </StyledContainer> : <div>Loading...</div>

            }



        </>
    );



}

//----------STYLED COMPONENTS
const StyledContainer = styled.div`
    background-color: #ffffff;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
  
`;

const StyledDiv_1 = styled.div`
background-color: #eed9b9;
height: 50vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 4rem;
width: 5rem;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
text-align: center;
border-radius: 1rem;
margin-left: 7rem;
margin-top: 10rem;

a, a:focus, a:active {
    position: absolute;
    top: 5rem;
    left: 11rem;
    text-decoration: none;
    color: black;
    background-color: #7bdd88;
    padding: 1rem;
    border-radius: 10px;
    
}
a:hover {
    color: #3d6d0d;
    
}



button {
    border: none;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            padding: 0.5rem;
            background-color: #eaf3e1;
}
    
  
`;
const StyledDiv_2 = styled.div`
background-color: #eaf3e1;
display: flex;
flex-direction: column;
justify-content: center;
height: fit-content;

box-shadow: 0px 19px 50px rgba(0, 0, 0, 0.3);
text-align: center;
border-radius: 1rem;
cursor: pointer;
margin: 5rem 2rem 2rem 2rem;
padding: 0rem 2rem 2rem 2rem;
cursor: default;

    img {
    width: 100%;
    height: 22vh;
    object-fit: cover;
    margin-bottom: 1rem;
    }

    
`;

const StyledDiv_3 = styled.div`
background-color: #eed9b9;
height: 50vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 4rem;
width: 5rem;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
text-align: center;
border-radius: 1rem;
margin-right: 4rem;
margin-top: 10rem;
div {
    border: none;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            padding: 0.5rem;
            background-color: #eaf3e1;
}
    
  
`;










/*
const StyledContainer = styled.div`
           font-family: 'Montserrat', sans-serif;
            font-weight: 800;
            padding: 0rem 9rem;
        background: linear-gradient(90deg, rgba(131,157,125,0.8911939775910365) 8%, rgba(143,149,126,0.7287289915966386) 92%);
height: 98vh;
           display: flex;
           justify-content: center;
           button {
            border: none;
            height: 5vh;
            position: relative;
            left: -15rem;
            border-radius: 10px;
            box-shadow: 0px 3px 2px rgba(197, 25, 25, 0.2);
            padding: 0.5rem;
            cursor: default;



        }
            `;


const StyledDetail = styled.div`
            height: 90vh;
            width: 100vh;
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
            box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
            text-align: center;
            border-radius: 1rem;
            button{
                background-color: #ffd485;
                margin: 5px;

            }

            img {
            width: 100%;
            height: 30vh;
            object-fit: cover;
        }

            `;


const Loader = styled.div`

    font-family: 'Montserrat', sans-serif;
    font-size: xx-large;

`;


const Subdiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: bisque;
    justify-content: space-evenly;
    div {
        background-color: #ccb4b4;
        border-radius: 5%;
        height: 50px;
        width: 150px;
        padding: 5px;
        padding-top: 1px;
        padding-bottom: 40px;

        h5 {
            color: #3a2c2c;
            font-size: 13px;
        }



    }
`;


const Subdiv2 = styled.div`
background-color: blueviolet;
display: flex;

div{
    display: flex;


}



`;

 */