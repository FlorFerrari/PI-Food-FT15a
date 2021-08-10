import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, filterRecipesByDiet } from "../actions";
import { Link } from "react-router-dom"
import Card from "./Card";
import Paginado from "./Paginado";

export default function Home() {

    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes)
    //paginado
    /*   const [currentPage, setCurrentPage] = useState(1);
      const [recipesPerPage, setRecipesPerPage] = useState(3);
      const indexOfLastRecipe = currentPage * recipesPerPage
      const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
      const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
  
      //ayuda al renderizado
      const paginado = (pageNumer) => {
          setCurrentPage(pageNumer)
      } */

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes())
    }

    function handleFilterDiet(e) {
        dispatch(filterRecipesByDiet(e.target.value))
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
                <select onChange={e => handleFilterDiet(e)}>
                    <option value="All">All</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="">Vegetarian</option>
                    <option value="lacto ovo vegetarian">Lacto-Vegetarian</option>
                    <option value="lacto ovo vegetarian">Ovo-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="pescetarian">Pescetarian</option>
                    <option value="paleo">Paleo</option>
                    <option value="Primal">Primal</option>
                    <option value="whole30">Whole30</option>

                </select>
                {/* <Paginado
                    recipesPerPage={recipesPerPage}
                    allRecipes={allRecipes.length}
                    paginado={paginado}
                /> */}
                {allRecipes?.map((e) => { //cuadno haga el paginadpo poner currentRecipes
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