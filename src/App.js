import React from "react";
import Header from "./components/header/Header";
import Search from "./components/header/Search";
import Movies from "./components/movieList/Movies";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <Movies />
    </div>
  );
};

export default App;
