import React, { useState } from "react";
import { Recipes } from "../Recipes/Recipes";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Header/Header";
import { Pagination } from "./../Pagination/Pagination";
import "./Home.css";
import { useEffect } from "react";
import { resetRecipes } from "../../redux/actions";

export const Home = () => {
  const recipes = useSelector((state) => state.recipes);
  const visibleRecipes = useSelector((state) => state.visibleRecipes);
  const dispatch = useDispatch();

  const [filterState, setFilterState] = useState({
    search: "",
    sort: "",
    filter: [],
  });
  const [currentPage, setCurrentPage] = useState(1);

  const recipesPerPage = 6;
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

  const handleSetFilterState = (obj) => {
    setFilterState({
      search: obj.search,
      sort: obj.sort,
      filter: obj.filter,
    });
  };

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
      <Header
        resetCurrentPage={handleResetCurrentPage}
        setFilterState={handleSetFilterState}
      />
      <div className="home-body">
        <div className="header-current-filters">
          {filterState.filter.map((filter) => (
            <div key={filter} className="header-filters-item">
              {filter}
            </div>
          ))}
          {filterState.sort !== "" ? (
            <div className="header-filters-item">{filterState.sort}</div>
          ) : null}
          {filterState.search !== "" ? (
            <div className="header-filters-item">{filterState.search}</div>
          ) : null}
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
      </div>
    </>
  );
};
