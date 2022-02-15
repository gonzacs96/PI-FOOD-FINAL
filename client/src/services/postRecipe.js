import axios from "axios";

export const postRecipe = async (recipe) => {
  const recipe_db_response = await axios.post(
    `http://localhost:3001/recipe`,
    recipe
  );
  return recipe_db_response.data;
};
