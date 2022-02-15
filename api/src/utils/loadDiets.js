const { Diet } = require("../db");

const loadDiets = () => {
  let diets = [
    "dairy free",
    "gluten free",
    "lacto ovo vegetarian",
    "vegan",
    "pescatarian",
    "paleolithic",
    "primal",
    "whole 30",
  ];
  try {
    const diet_types = diets.map(async (dieta) => {
      return await Diet.findOrCreate({
        where: { name: dieta },
        defaults: {
          name: dieta,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadDiets;
