import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilteredRecipes } from "../../redux/actions";
import "./FilterBar.css";

export const FilterBar = ({ changeDadState }) => {
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(setFilteredRecipes(e.target.value));
    changeDadState(e.target.value);
    e.target.selectedIndex = 0;
  };

  return (
    <>
      <select
        name="filter_diets"
        defaultValue="default"
        onChange={handleFilter}
        className="filterBar-select"
      >
        <option value="default" disabled>
          Seleccione un tipo de dieta
        </option>
        {diets.map((diet, index) => {
          return (
            <option key={index} value={diet.name}>
              {diet.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
