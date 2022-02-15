const { Router } = require("express");
const routerRecipes = require("./routerRecipes");
const routerDietTypes = require("./routerDietTypes");
const routerCreateRecipe=require("./routerCreateRecipe");

const router = Router();

router.use("/recipes", routerRecipes);
router.use("/recipe",routerCreateRecipe);
router.use("/types", routerDietTypes);

module.exports = router;
