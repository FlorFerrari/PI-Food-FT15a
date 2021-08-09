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
            <button><Link to="/recipes">Create Recipe</Link></button>
            <button><Link to="/">Landing Page</Link></button>

            <h1>DELICIOUS</h1>
            <button onClick={e => { handleClick(e) }}>
                get all recipes
            </button>
            <div>
                <h5>Sort By</h5>
                <select>
                    <option value="">🍜</option>
                    <option value="">Rating - Low to High</option>
                    <option value="">Rating - High to Low</option>
                    <option value="">A-Z</option>
                    <option value="">Z-A</option>
                </select>
            </div>
            <div>
                <h5>Diet Type:</h5>
                <select name="" id="">
                    <option value="poner el mismo nombre que en la bse de datos">Gluten Free</option>
                    <option value="">Ketogenic</option>
                    <option value="">Vegetarian</option>
                    <option value="">Lacto-Vegetarian</option>
                    <option value="">Ovo-Vegetarian</option>
                    <option value="">Vegan</option>
                    <option value="">Pescetarian</option>
                </select>
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