import axios from "axios";

export const getSearchRecipes = async (name) => {
  const recipes_searched = await axios.get(
    `http://localhost:3001/recipes?name=${name}`
  );
  return recipes_searched.data;
};
