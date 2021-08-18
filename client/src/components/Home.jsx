import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, filterRecipesByDiet, orderByName, emptyDetail } from "../actions";
import { Link } from "react-router-dom"
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import img from "../images/home.png"


export default function Home() {

    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail)

    const allRecipes = useSelector((state) => state.recipes)
    //const state_recipes = useSelector((state) => state.recipes)


    //paginado
    const [currentPage, setCurrentPage] = useState(1); //Comenzamos con pagina 1
    const [recipesPerPage] = useState(6); //6 por pagina

    //get currenT posts
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe) //6

    //Para filtrados
    const [orden, setOrden] = useState("")

    //Change page
    const paginado = (pageNumer) => {
        setCurrentPage(pageNumer)
    }

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])

    useEffect(() => {
        dispatch(emptyDetail())
    }, [dispatch])


    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes())
    }

    function handleFilterDiet(e) {
        dispatch(filterRecipesByDiet(e.target.value))
    }

    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrden(e.target.value)
    }
    return (
        <Container >
            <StyledNav >
                <ul>

                    <li><button><Link to="/">Go back</Link></button></li>
                    <li><button><Link to="/recipes">Create Recipe</Link></button></li>
                    <li><button onClick={e => { handleClick(e) }}> Get all recipes</button></li>

                </ul>

            </StyledNav>

            <StyledSearch >
                <select onChange={e => handleSort(e)}>

                    <option value="1">Rating - Low to High</option>
                    <option value="2">Rating - High to Low</option>
                    <option value="desc">A-Z</option>
                    <option value="asc">Z-A</option>

                </select>
                <SearchBar />
                <select onChange={e => handleFilterDiet(e)}>
                    <option value="All"> Diet type</option>
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
            </StyledSearch>

            <Recipes>

                {currentRecipes ? currentRecipes.map(e => (
                    <Link to={"/home/" + e.id}>
                        <Card title={e.title}
                            image={e.image ? e.image : "https://cdn2.tmbi.com/TOH/Images/articles/shutterstock_301882538_750x420.jpg"}
                            diets={typeof (e.diets[0]) === "string" ? e.diets : e.diets.map(e => e.name)} />
                    </Link>
                )) : <p>Loading...</p>
                }
            </Recipes>

            <Paginado
                recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}
                paginado={paginado} />

        </Container>
    )
}





//------> STYLED COMPONENTS <----------





const Container = styled.div`
padding: 0rem 9rem;
height: 100vh;
font-family: 'Montserrat', sans-serif;
font-weight: 800;
background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 95%;
  
`;


const Recipes = styled.div`
  min-height: 30vh;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 4rem;
  grid-row-gap: 1rem;
  font-family: 'Montserrat', sans-serif;
            font-weight: 800;

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
  }
  
`;

const StyledSearch = styled.div`
    font-family: serif;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    margin: 1rem;
    
    select {
        cursor: pointer;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        justify-content: space-around;
        width: 20rem;
        padding-left: 8rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        option{
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
            
        }

         
    }
 
  
`;


const StyledNav = styled.nav`
        font-family: 'Montserrat', sans-serif;
            font-weight: 800;
            background: #01aca95a;
            border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr;
        padding-left: 1rem;
        padding-right: 1rem;
        
        ul {
            display: flex;
            justify-content: space-between;
            
        }
        li{
            list-style: none;
            
            
        }
        button {
            border: none;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            padding: 0.5rem;
            cursor: pointer;
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
            text-decoration: none;
            
            
        }
        a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
      button:hover {
        background-color: #e2f3db;
        
}

        
  
`;