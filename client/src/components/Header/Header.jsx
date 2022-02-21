import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { ButtonReset } from "./../ButtonReset/ButtonReset";
import { SortBar } from "../SortBar/SortBar";
import { FilterBar } from "./../FilterBar/FilterBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/bannerFood.png";


export const Header = ({ resetCurrentPage, setFilterState }) => {
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
    setFilterState({
      ...state,
      search: value,
      sort: "",
      filter: [],
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
    setFilterState({
      ...state,
      sort: value,
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
    setFilterState({
      ...state,
      filter: [...state.filter, value],
    });
    resetCurrentPage();
  };

  const handleResetState = () => {
    setState({
      search: "",
      sort: "",
      filter: [],
    });
    setFilterState({
      search: "",
      sort: "",
      filter: [],
    });
    resetCurrentPage();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-ligth">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/home"}>
                <img
                  src={logo}
                  className="header-logo"
                  alt="GS"
                />
              </Link>
            </li>
            <li className="nav-item">
              <SearchBar changeDadState={handleStateSearch} />
            </li>
            <li className="nav-item">
              <SortBar changeDadState={handleStateSort} />
            </li>
            <li className="nav-item">
              <FilterBar changeDadState={handleStateFilter} />
            </li>
            <li className="nav-item">
              <ButtonReset changeDadState={handleResetState} />
            </li>
            <li className="nav-item">
              <Link to={"/createRecipe"}>
                <button className="buttonCreateRecipe-header">
                  Create Recipe
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/*  <div className="header">
        <img src={logo} alt="logo" className="header-logo" />
        <div className="header-navbar">
          <SearchBar changeDadState={handleStateSearch} />
          <SortBar changeDadState={handleStateSort} />
          <FilterBar changeDadState={handleStateFilter} />
          <ButtonReset changeDadState={handleResetState} />
          <Link to={"/createRecipe"}>
            <button className="buttonCreateRecipe-header">Create Recipe</button>
          </Link>
        </div>
        <div className="header-current-filters">
          {state.filter.map((filter) => (
            <div key={filter}>{filter}</div>
          ))}
          {state.sort !== "" ? <div>{state.sort}</div> : null}
          {state.search !== "" ? <div>{state.search}</div> : null}
        </div>
      </div> */}
    </>
  );
};
