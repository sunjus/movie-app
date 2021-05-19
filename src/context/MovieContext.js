import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [top, setTop] = useState([]);
  const [search, setSearch] = useState("");
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [activeLink, setActiveLink] = useState("Popular");

  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const TOP_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

  const getTop = async () => {
    const res = await axios(TOP_URL);
    console.log(res);
    console.log(res.data.results);

    setTop(res.data.results);
  };

  const getMovies = async () => {
    const result = await axios(API_URL);
    console.log(result);
    if (search.trim() === "") {
      console.log(result.data.results);
      setMovies(result.data.results);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    }
    const searchRes = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1`
    );
    const searchData = await searchRes.json();
    console.log(searchData.results);
    setMovies(searchData.results);
  };

  useEffect(() => {
    getTop();
  }, []);

  useEffect(() => {
    getMovies();
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        isLoading,
        setIsLoading,
        movies,
        setMovies,
        top,
        setTop,
        search,
        setSearch,
        handleSearch,
        hiddenMenu,
        setHiddenMenu,
        activeLink,
        setActiveLink,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
