import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setSearchedRecipes } from "../../redux/actions";
import './SearchBar.css'


export const SearchBar = ({ changeDadState }) => {
  const dispatch= useDispatch();
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    dispatch(setSearchedRecipes(search))
    changeDadState(search);
    setSearch("");
  };

  return (
    <div className="searchBar">
      <input className="input-searchBar" type="text" name="search" value={search} onChange={handleInput} placeholder="Buscar receta"/>
      <button onClick={handleSearch} className="button-searchBar">Buscar</button>
    </div>
  );
};
