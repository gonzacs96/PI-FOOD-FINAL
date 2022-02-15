import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { ButtonReset } from "./../ButtonReset/ButtonReset";
import { SortBar } from "../SortBar/SortBar";
import { FilterBar } from "./../FilterBar/FilterBar";
import { useState } from "react";
import s from "./Header.module.css";

export const Header = ({ resetCurrentPage }) => {
  const [state, setState] = useState({
    search: "",
    sort: "",
    filter: [],
  });

  const handleStateSearch = (value) => {
    setState((prevState) => {
      return {
        ...prevState,
        search: value,
        sort: "",
        filter: [],
      };
    });
    resetCurrentPage();
  };
  const handleStateSort = (value) => {
    setState((prevState) => {
      return {
        ...prevState,
        sort: value,
      };
    });
    resetCurrentPage();
  };
  const handleStateFilter = (value) => {
    if (!state.filter.includes(value)) {
      setState((prevState) => {
        return {
          ...prevState,
          filter: [...prevState.filter, value],
        };
      });
    }
    resetCurrentPage();
  };

  const handleResetState = () => {
    setState({
      search: "",
      sort: "",
      filter: [],
    });
    resetCurrentPage();
  };

  return (
    <>
      <div className={s.conteiner}>
        <SearchBar changeDadState={handleStateSearch} />
        <SortBar changeDadState={handleStateSort} />
        <FilterBar changeDadState={handleStateFilter} />
        <ButtonReset changeDadState={handleResetState} />
      </div>
      <div className={s.conteinerFilters}>
        {state.filter.map((filter) => (
          <div key={filter} className={s.button1}>
            {filter}
          </div>
        ))}
        {state.sort !== "" ? (
          <div className={s.button1}>{state.sort}</div>
        ) : null}
        {state.search !== "" ? (
          <div className={s.button1}>{state.search}</div>
        ) : null}
      </div>
    </>
  );
};
