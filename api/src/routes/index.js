const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");

/* const Recipe = require('../models/Recipe');
const Diet = require('../models/Diet');  */
const { Recipe, Diet, recipe_diet} = require("../db.js");

const { API_KEY } = process.env; // ESTA BIEN ESTO???

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`);
    const apiInfo = await apiUrl.data.results.map(e => {
        return {
         title: e.title, 
          image: e.image, 
           diets: e.diets.map(e => e),
            summary: e.summary,
            healthScore: e.healthScore,
            rating: e.spoonacularScore 
        } 
    });
    return apiInfo;
}

const getDbInfo = async () => {
    return await Recipe.findAll({
        include:{
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        }
    })
}

const getAllRecipes = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

router.get("/recipes", async (req, res) => {
   /*  const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`);
    res.status(200).send(apiUrl.data.results.map(e => {return {title: e.title, 
        image: e.image, 
         diets: e.diets.map(e => e),
          summary: e.summary,
          healthScore: e.healthScore,
          rating: e.spoonacularScore }})) */
   
    

     const { title } = req.query;
    let recipesTotal = await getAllRecipes();
    if(title){
        let recipeName = await recipesTotal.filter( e => e.title.toLowerCase().includes(title.toLowerCase()))
        recipeName.length ? 
        res.status(200).send(recipeName) :
        res.status(404).send("Recipe not found")
    } else{
        res.status(200).send(recipesTotal)
    } 
})

module.exports = router;
