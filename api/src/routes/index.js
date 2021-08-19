const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");

/* const Recipe = require('../models/Recipe');
const Diet = require('../models/Diet');  */
const { Recipe, Diet, recipe_diet} = require("../db.js");

const { API_KEY, API_KEY2, API_KEY3, API_KEY4, API_KEY5, API_KEY6, API_KEY7, API_KEY8, API_KEY9, API_KEY10 } = process.env; // ESTA BIEN ESTO???
const api = API_KEY8;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api}&addRecipeInformation=true&number=30`);
    const apiInfo = await apiUrl.data.results.map(e => {
        return {
            id: e.id,
         title: e.title, 
          image: e.image, 
           diets: e.diets.map(e => e),
            summary: e.summary,
            healthScore: e.healthScore,
            rating: e.spoonacularScore,
            steps: e.analyzedInstructions[0]
            
        } 
        
    });
    console.log("entre")
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
    console.log(getAllRecipes)
    if(title){
        let recipeName = await recipesTotal.filter( e => e.title.toLowerCase().includes(title.toLowerCase()))
        recipeName.length ? 
        res.status(200).send(recipeName) :
        res.status(404).send("Recipe not found")
    } else{
        res.status(200).send(recipesTotal)
    } 
})

//RUTA EXTRA PARA TRAER RECETAS CREADAS PR EL USUARIO
router.get("/myrecipes", async (req, res) => {
    let recipes = await getDbInfo();
    console.log(recipes)
    recipes.length ?
    res.status(200).send(recipes) :
    res.status(404).send("you didnt create a recipe yet!")
})
//2) GET /recipes/{idReceta}: ------- Obtener el detalle de una receta en particular
//Debe traer solo los datos pedidos en la ruta de detalle de receta
//Incluir los tipos de dieta asociados
router.get("/recipes/:id", async (req, res) => {
    const {id} = req.params;
    
    try {
    const recipesTotal = await getAllRecipes();
    
    if(id){
        let recipeId = await recipesTotal.filter(e => e.id == id)
        recipeId.length?
        res.status(200).json(recipeId) :
        res.status(404).send("Recipe not found")
    }

        
    } catch(error) {
        console.error(error)
        res.send("Recipe not found :(")
    }
    
})



//3) GET /types:  -------- Obtener todos los tipos de dieta posibles   
//En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
router.get("/types", async (req, res) => {
    try {
        const dietas = await Diet.findAll();
        const dietasMap = dietas.map( e => e.name)
    
    res.status(200).send(dietasMap)
    } catch(error) {
        console.error(error)
        res.status(404).send("Error")
    }
    
})


//4) POST /recipe: --------- Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
//Crea una receta en la base de datos
router.post("/recipe", async (req, res) => {
    let { title, summary, rating, healthScore, steps, image, diets, createdInDb} = req.body
    /* if(!healthScore){
        res.status(403).send("error")
        return
    } */


    try {
    let newRecipe = await Recipe.create({
      title,
      summary,
      rating,
      healthScore,
      steps,
      image,
      createdInDb
      
    });

    var d = diets.map((e) => parseInt(e));
    d.map(async (d) => await newRecipe.setDiets(d));

    res.send(newRecipe);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong")
  }




/* 
    let recipeCreated = await Recipe.create ({title, summary, rating, healthScore, steps, image, createdInDb})

    let dietDataBase = await Diet.findAll()
    let dietDataBaseMap = dietDataBase.map( e => e.name) //[ 'vegan', 'vegetarian', 'dairy free' etc.....]
    console.log(dietDataBaseMap)

    let filtrado = dietDataBaseMap.filter( e => e === diet)
    console.log(filtrado)

    let final = filtrado.join()
    console.log(final)

    recipeCreated.setDiets(final)  
    res.send("Recipe has been created succesfully") */
})


module.exports = router;
