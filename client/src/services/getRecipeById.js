import axios from "axios";
export const getRecipeById = async(id) => {
  let recipe_geted_by_id = await axios.get(
    `http://localhost:3001/recipes/${id}`
  );
  return recipe_geted_by_id.data;
};
