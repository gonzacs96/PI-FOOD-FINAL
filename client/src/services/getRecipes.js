import axios from "axios";

export const getRecipes = async () => {
  const recipes = await axios.get(`http://localhost:3001/recipes`);
  return recipes.data;
};
