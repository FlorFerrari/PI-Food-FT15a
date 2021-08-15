import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { getDetail } from "../actions";

export default function Detail(props) {
    console.log(props)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));

    }, [dispatch])

    const myRecipe = useSelector((state) => state.detail)

    return (
        <div>
            {
                //myRecipe.length > 0 ? 
                <div>
                    <h1>{myRecipe[0].name}</h1>
                </div>
            }
        </div>
    )
}