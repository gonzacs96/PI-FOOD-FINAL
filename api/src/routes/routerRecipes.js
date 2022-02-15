const { Router } = require("express");
const getRecipe = require("./controllers/getRecipes");
const getRecipeById = require("./controllers/getRecipeById");
const getRecipesByName = require("./controllers/getRecipesByName");

const router = Router();

router.get("/", getRecipe, getRecipesByName);
router.get("/:id", getRecipeById);

module.exports = router;
