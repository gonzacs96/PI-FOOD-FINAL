const { Diet } = require("../../db");

const getDietTypes = async (req, res, next) => {
  try {
    let diets_types = await Diet.findAll();
    res.json(diets_types);
  } catch (error) {
    next(error);
  }
};

module.exports = getDietTypes;
