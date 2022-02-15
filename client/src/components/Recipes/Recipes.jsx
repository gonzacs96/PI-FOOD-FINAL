import React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import s from './Recipes.module.css'

export const Recipes = ({ recipes }) => {
  return (
    <>
      <div className={s.conteinerList}>
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <RecipeCard
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                diets={recipe.diets}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
