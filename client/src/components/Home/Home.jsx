import React, { useState } from "react";
import { Recipes } from "../Recipes/Recipes";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Header/Header";
import { Pagination } from "./../Pagination/Pagination";
import { Link } from "react-router-dom";
import s from "./Home.module.css";
import { useEffect } from "react";
import { resetRecipes } from "../../redux/actions";

export const Home = () => {
  const recipes = useSelector((state) => state.recipes);
  const visibleRecipes = useSelector((state) => state.visibleRecipes);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const recipesPerPage = 9;
  const totalRecipes = visibleRecipes.length;
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = visibleRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  useEffect(() => {
    return dispatch(resetRecipes());
  }, [dispatch]);

  const handleChangePage = (e) => {
    let value = parseInt(e.target.value);
    setCurrentPage(value);
  };
  const handleBack = () => {
    if (currentPage === 1) return;
    setCurrentPage((prevState) => prevState - 1);
  };
  const handleNext = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prevState) => prevState + 1);
  };

  const handleResetCurrentPage = () => {
    setCurrentPage(1);
  };

  return (
    <>
      <div className={s.banner}>
        <h1 className={s.title}>FOOD API</h1>
        <Link to={"/createRecipe"}>
          <button className={s.button1}>Create Recipe</button>
        </Link>
       <Header resetCurrentPage={handleResetCurrentPage} />
      </div>
      <Pagination
        currentPage={currentPage}
        recipesPerPage={recipesPerPage}
        totalRecipes={visibleRecipes.length}
        totalPages={totalPages}
        changePage={handleChangePage}
        handleBack={handleBack}
        handleNext={handleNext}
      />
      <div>{recipes.length === 0 ? <h2>Loading...</h2> : null}</div>

      {visibleRecipes.length !== 0 ? (
        <Recipes recipes={currentRecipes} />
      ) : null}
      <div>
        {visibleRecipes.length === 0 && recipes.length !== 0 ? (
          <h2>No se encontraron recetas</h2>
        ) : null}
      </div>
    </>
  );
};
