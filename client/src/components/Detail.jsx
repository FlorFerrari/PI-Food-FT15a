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
        <div>
            {
                detail.length > 0 ?
                    <div>
                        <h1>hola {detail[0].title}</h1>
                    </div> : <p>Loading...</p>
            }
            <Link to="/home">go back</Link>


        </div>
    );



}