import { filterByDiet } from "./../../auxFunctions/filterByDiet";
import { sortAlphabetically } from "./../../auxFunctions/sortAlphabetically";
import {
  sortByScoreLess_More,
  sortByScoreMore_Less,
} from "../../auxFunctions/sortByScore";
import {
  RESET_RECIPES,
  SET_DIET_TYPES,
  SET_FILTERED_RECIPES,
  SET_RECIPES,
  SET_SORTED_RECIPES,
  SET_SEARCHED_RECIPES,
  ADD_RECIPE,
  SET_RECIPE_BY_ID,
  SET_SORTED_SCORE,
} from "../actions/actions";

const initialState = {
  recipes: [],
  visibleRecipes: [],
  diets: [],
  recipeById: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        visibleRecipes: action.payload,
      };
    case SET_DIET_TYPES:
      return {
        ...state,
        diets: action.payload,
      };
    case SET_FILTERED_RECIPES:
      return {
        ...state,
        visibleRecipes: filterByDiet(state.visibleRecipes, action.payload),
      };
    case SET_SORTED_RECIPES:
      return {
        ...state,
        visibleRecipes: sortAlphabetically(
          state.visibleRecipes,
          action.payload
        ),
      };
    case SET_SORTED_SCORE:
      return {
        ...state,
        visibleRecipes:
          action.payload === "desc"
            ? sortByScoreMore_Less([...state.visibleRecipes])
            : sortByScoreLess_More([...state.visibleRecipes]),
      };
    case SET_SEARCHED_RECIPES:
      return {
        ...state,
        visibleRecipes: action.payload,
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    case RESET_RECIPES:
      return {
        ...state,
        visibleRecipes: state.recipes,
        searchState: { state: "non_search" },
      };
    case SET_RECIPE_BY_ID:
      return {
        ...state,
        recipeById: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
