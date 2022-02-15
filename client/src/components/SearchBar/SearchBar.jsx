import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setSearchedRecipes } from "../../redux/actions";
import s from './SearchBar.module.css'


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
    <div className={s.conteiner}>
      <label htmlFor="search" className={s.search}>Buscar receta: </label>
      <input type="text" name="search" value={search} onChange={handleInput} className={s.input}/>
      <button onClick={handleSearch} className={s.button2}>Buscar</button>
    </div>
  );
};
