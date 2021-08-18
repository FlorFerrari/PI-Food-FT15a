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
                        <div>
                            <button><Link to="/home">go back</Link></button>
                            {typeof (detail[0].diets[0]) === "string" ? detail[0].diets.map(e => <button>{e}</button>) : detail[0].diets.map(e => <button>{e.name}</button>)}
                        </div>



                        <div>
                            <div>
                                <h1>{detail[0].title}</h1>
                                <img src={detail[0].image ? detail[0].image : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4353c586-8637-4645-86bb-201136ab461d/dcywcin-2a161519-7290-4244-ade5-ce1771a84626.png/v1/fill/w_1600,h_1600,strp/just_a_happy_potato_by_leuldeaur_dcywcin-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzQzNTNjNTg2LTg2MzctNDY0NS04NmJiLTIwMTEzNmFiNDYxZFwvZGN5d2Npbi0yYTE2MTUxOS03MjkwLTQyNDQtYWRlNS1jZTE3NzFhODQ2MjYucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3-SOlTK3WVpkvkTOOdloRcmakeBO6AnygB6JC62N4JE"} alt="Food" />
                            </div>
                            <h5>Steps:</h5>
                            <h4>{typeof (detail[0].steps[0]) === "string" ? detail[0].steps : (detail[0].steps.steps.map(e => e.number + ") " + e.step + " "))}</h4>
                            <div dangerouslySetInnerHTML={{ __html: detail[0].summary }} />
                        </div>

                        <div>
                            <div>
                                Health Score: {detail[0].healthScore}
                            </div>
                            <div>
                                Rating: {detail[0].rating}
                            </div>
                        </div>


                    </StyledContainer> : <div>Loading...</div>

            }



        </>
    );



}

//----------STYLED COMPONENTS
const StyledContainer = styled.div`
    background-color: chocolate;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
  
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