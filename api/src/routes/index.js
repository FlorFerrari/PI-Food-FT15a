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
            id: e.id,
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

//----------------->RUTAS<-------------------------------------------------------------------

//1) Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
//   Si no existe ninguna receta mostrar un mensaje adecuado 

router.get("/recipes", async (req, res) => {
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
//2) GET /recipes/{idReceta}: ------- Obtener el detalle de una receta en particular
//Debe traer solo los datos pedidos en la ruta de detalle de receta
//Incluir los tipos de dieta asociados
router.get("/recipes/:id", async (req, res) => {
    const {id} = req.params;
    const recipesTotal = await getAllRecipes();
    
    if(id){
        let recipeId = await recipesTotal.filter(e => e.id == id)
        recipeId.length?
        res.status(200).json(recipeId) :
        res.status(404).send("Recipe not found")
    }
})



//3) GET /types:  -------- Obtener todos los tipos de dieta posibles   
//En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
router.get("/types", async (req, res) => {
    const dietas = await Diet.findAll();
    res.status(200).send(dietas)
})


//4) POST /recipe: --------- Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
//Crea una receta en la base de datos
router.post("/recipe", async (req, res) => {
    let { title, summary, rating, healthScore, steps, image, createdInDb, diet} = req.body
    let recipeCreated = await Recipe.create ({title, summary, rating, healthScore, steps, image, createdInDb})
    let dietDataBase = await Diet.findAll({
        where: { name: diet}
    })
    recipeCreated.addDiet(dietDataBase)
    res.send("Recipe has been created succesfully")
})


module.exports = router;
