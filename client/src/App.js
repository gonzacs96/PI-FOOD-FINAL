import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Home } from "./components/Home/Home";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDietTypes, setRecipes } from "./redux/actions/index";
import { CreateRecipe } from "./components/CreateRecipe/CreateRecipe";
import { RecipeDetail } from "./components/RecipeDetail/RecipeDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRecipes());
    dispatch(setDietTypes());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createRecipe" element={<CreateRecipe/>}/>
          <Route path="/:id" element={<RecipeDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
