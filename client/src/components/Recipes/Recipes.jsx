import React from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import "./Recipes.css";

export const Recipes = ({ recipes }) => {
  return (
    <>
      <div>
        <div className="recipes">
          {recipes.map((recipe) => {
            return (
              <div key={recipe.id}>
                <RecipeCard
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                  diets={recipe.diets}
                  score={recipe.score}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
