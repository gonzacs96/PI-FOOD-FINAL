const { Recipe, Diet } = require("../../db");
const { API_URL, API_KEY } = process.env;
const axios = require("axios");

const getRecipes = async (req, res, next) => {
  const { name } = req.query;
  if (name) return next();
  try {
    let recipes_db = await Recipe.findAll({
      include: Diet,
    });
    recipes_db = recipes_db.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        diets: recipe.diets.map((diet) => diet.name),
        score: recipe.score,
      };
    });
    let recipes_api = await axios.get(`${API_URL}&apiKey=${API_KEY}`);
    recipes_api = recipes_api.data.results.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        diets: recipe.diets,
        score: recipe.spoonacularScore,
      };
    });
    res.json([...recipes_db, ...recipes_api]);
  } catch (error) {
    next(error);
  }
};

module.exports = getRecipes;
