const { Recipe, Diet } = require("../../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getRecipeById = async (req, res, next) => {
  const { id } = req.params;
  let recipe;
  try {
    if (id.includes("-")) {
      recipe = await Recipe.findByPk(id, {
        include: [
          {
            model: Diet,
          },
        ],
      });
      recipe = {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        summary: recipe.summary,
        score: recipe.score,
        healthScore: recipe.healthScore,
        stepByStep: recipe.stepByStep,
        diets: recipe.diets.map((diet) => diet.name),
      };
      res.json(recipe);
    } else {
      recipe = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      recipe = {
        id: recipe.data.id,
        title: recipe.data.title,
        image: recipe.data.image,
        summary: recipe.data.summary,
        score: recipe.data.spoonacularScore,
        healthScore: recipe.data.healthScore,
        stepByStep:
          recipe.data.analyzedInstructions.length !== 0
            ? recipe.data.analyzedInstructions[0].steps.map((step) => step.step)
            : [],
        diets: recipe.data.diets,
      };
    }
    res.json(recipe);
  } catch (error) {
    next(error);
  }
};

module.exports = getRecipeById;
