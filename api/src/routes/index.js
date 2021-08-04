const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const { API_KEY } = process.env; // ESTA BIEN ESTO???

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`);
    const apiInfo = await apiUrl.data.map(e => {
        return {
            name: e.title,
            image: e.image,
            diets: e.diets.map(e => e),
            summary: e.summary,
            healthScore: e.healthScore,
            rating: e.spoonacularScore
        }
    });
    return apiInfo;
}

module.exports = router;
