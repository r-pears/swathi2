import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreRecipe from "../../components/ExploreRecipe/ExploreRecipe";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    // better to use fragment instead of div
    <>
      <Header />
      <ExploreRecipe category={category} setCategory={setCategory} />
      <AppDownload />
    </>
  );
};

export default Home;
