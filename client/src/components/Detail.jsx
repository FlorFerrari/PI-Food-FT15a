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

    return (
        <StyledContainer>
            <button><Link to="/home">go back</Link></button>

            <div>
                {
                    detail.length > 0 ?
                        <StyledDetail>
                            <h1>{detail[0].title}</h1>
                            <img src={detail[0].image ? detail[0].image : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4353c586-8637-4645-86bb-201136ab461d/dcywcin-2a161519-7290-4244-ade5-ce1771a84626.png/v1/fill/w_1600,h_1600,strp/just_a_happy_potato_by_leuldeaur_dcywcin-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzQzNTNjNTg2LTg2MzctNDY0NS04NmJiLTIwMTEzNmFiNDYxZFwvZGN5d2Npbi0yYTE2MTUxOS03MjkwLTQyNDQtYWRlNS1jZTE3NzFhODQ2MjYucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3-SOlTK3WVpkvkTOOdloRcmakeBO6AnygB6JC62N4JE"} alt="Food" />

                            <div dangerouslySetInnerHTML={{ __html: detail[0].summary }} />;


                            <h4>{detail[0].healthScore}</h4>
                            <h4>{detail[0].rating}</h4>

                            <div>{typeof (detail[0].diets[0]) === "string" ? detail[0].diets.map(e => <h5>{e}</h5>) : detail[0].diets.map(e => <h5>{e.name}</h5>)}</div>

                        </StyledDetail> : <p>Loading...</p>
                }


            </div>
        </StyledContainer>
    );



}

//----------STYLED COMPONENTS



const StyledContainer = styled.div`
           background-color: #f0f0f0;
           height: 90vh;
           padding: 4rem;
           display: flex;
           justify-content: center;
           button {
            border: none;
            height: 5vh;
            position: relative;
            left: -15rem;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            padding: 0.5rem;
            cursor: pointer;
           
            
            
        }
            `;


const StyledDetail = styled.div`
            height: 70vh;
            width: 90vh;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 12px;
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
                margin-top: 8px;
                margin-left: 15px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                justify-content: space-evenly;
                grid-row-gap: -20px;
                font-size: x-small;

            }
            
            
            `;

