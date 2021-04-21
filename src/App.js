import React from "react";
import { MovieState } from "./context/MovieContext";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <MovieState>
      <Hero />
    </MovieState>
  );
};

export default App;
