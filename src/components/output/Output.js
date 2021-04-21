import React, { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import Movies from "../movieList/Movies";

const Output = () => {
  return (
    <div>
      <Movies />
    </div>
  );
};

export default Output;
