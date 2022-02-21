import {
  SET_DIET_TYPES,
  SET_RECIPES,
  SET_FILTERED_RECIPES,
  SET_SORTED_RECIPES,
  RESET_RECIPES,
  SET_SEARCHED_RECIPES,
  SET_RECIPE_BY_ID,
  ADD_RECIPE,
  SET_SORTED_SCORE,
} from "./actions";
import { getRecipes } from "../../services/getRecipes";
import { getDietTypes } from "../../services/getDietTypes";
import { getSearchRecipes } from "./../../services/getSearchRecipes";
import { postRecipe } from "../../services/postRecipe";
import { getRecipeById } from "../../services/getRecipeById";

export const setRecipes = () => {
  return async (dispatch) => {
    const recipes = await getRecipes();
    return dispatch({
      type: SET_RECIPES,
      payload: recipes,
    });
  };
};

export const setDietTypes = () => {
  return async (dispatch) => {
    const diet_types = await getDietTypes();
    return dispatch({
      type: SET_DIET_TYPES,
      payload: diet_types,
    });
  };
};

export const setFilteredRecipes = (dietName) => {
  return {
    type: SET_FILTERED_RECIPES,
    payload: dietName,
  };
};

export const setSortedRecipes = (order) => {
  return {
    type: SET_SORTED_RECIPES,
    payload: order,
  };
};

export const resetRecipes = () => {
  return {
    type: RESET_RECIPES,
  };
};

export const setSearchedRecipes = (name) => {
  return async (dispatch) => {
    const recipes_searched = await getSearchRecipes(name);
    return dispatch({
      type: SET_SEARCHED_RECIPES,
      payload: recipes_searched,
    });
  };
};

export const createNewRecipe = (receta) => {
  return async (dispatch) => {
    const recipe_posted = await postRecipe(receta);
    dispatch({
      type: ADD_RECIPE,
      payload: recipe_posted,
    });
  };
};

export const setRecipeById = (id) => {
  return async (dispatch) => {
    const recipe_by_id = await getRecipeById(id);
    dispatch({
      type: SET_RECIPE_BY_ID,
      payload: recipe_by_id,
    });
  };
};

export const setSortedScore = (value) => {
  return {
    type: SET_SORTED_SCORE,
    payload: value,
  };
};
