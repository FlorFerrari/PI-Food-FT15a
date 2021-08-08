import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../actions";
import { Link } from "react-router-dom"
import Card from "./Card";

export default function Home() {

    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes)

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes())
    }

    return (
        <div>
            <Link to="/recipes">Create Recipe</Link>
            <h1>DELICIOUS</h1>
            <button onClick={e => { handleClick(e) }}>
                get all recipes
            </button>
            <div>
                <div><select value="">Rating - Low to High</select></div>

                <div><select value="">Rating - High to Low</select></div>
                <div><select value="">A-Z</select></div>
                <div><select value="">Z-A</select></div>
            </div>
            <div>
                <select value="poner el mismo nombre que en la bse de datos">Gluten Free</select>
                <select value="">Ketogenic</select>
                <select value="">Vegetarian</select>
                <select value="">Lacto-Vegetarian</select>
                <select value="">Ovo-Vegetarian</select>
                <select value="">Vegan</select>
                <select value="">Pescetarian</select>
                <select value="">Paleo</select>
                <select value="">Primal</select>
                <select value="">Whole30</select>
                {allRecipes?.map((e) => {
                    return (
                        <Fragment>
                            <Link to={"/home" + e.id}>
                                <Card title={e.title} image={e.image} diets={e.diets}></Card>
                            </Link>
                        </Fragment>
                    );

                })}
            </div>
        </div>
    )
}