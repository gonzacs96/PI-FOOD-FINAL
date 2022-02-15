const { Sequelize } = require("sequelize");
const RecipeModel = require("./models/Recipe");
const DietModel = require("./models/Diet");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

//Llamo al modelo con sequelize para definirlo en mi db
RecipeModel(sequelize);
DietModel(sequelize);

//me traigo los modelos para exportarlos
const Recipe = sequelize.model("recipe");
const Diet = sequelize.model("diet");

Recipe.belongsToMany(Diet, { through: "recipes_diets" });
Diet.belongsToMany(Recipe, { through: "recipes_diets" });

module.exports = {
  Recipe,
  Diet,
  conn: sequelize,
};
