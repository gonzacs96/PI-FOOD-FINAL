const { Recipe, Diet } = require("../../db");

const createRecipe = async (req, res, next) => {
  let { title, summary, score, healthScore, stepByStep, diets } = req.body;
  title=title.toLowerCase();
  try {
    let recipe = await Recipe.create({
      title,
      summary,
      score,
      healthScore,
      stepByStep,
    });
    diets.length !== 0 ? await recipe.addDiets(diets) : null;
    let diets_recipe = await recipe.getDiets();
    recipe_final = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      diets: diets_recipe.map((diet) => diet.name),
    };
    res.json(recipe_final);
  } catch (error) {
    next(error);
  }
};

module.exports = createRecipe;
