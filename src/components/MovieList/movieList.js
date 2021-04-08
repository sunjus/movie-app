import React, { useState, useEffect } from "react";
import { API_URL, IMAGE_BASE_URL } from "../Views/Config";
import styled from "styled-components";

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px #aaa;

  > img {
    width: 100%;
    height: 95%;
    object-fit: cover;
  }
`;

const MovieCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 1280px;

  > div {
    width: calc(33% - 1.065rem);
    margin: 0 auto;
    margin-bottom: 1rem;

    @media only screen and (max-width: 768px) {
      width: 45% !important;
    }
    @media only screen and (max-width: 500px) {
      width: 70% !important;
      margin: 20px auto !important;
    }
  }
`;

const Movie = ({ title, poster_path }) => (
  <MovieCard className="movie">
    <img src={IMAGE_BASE_URL + poster_path} alt={title} />
  </MovieCard>
);

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <MovieCardContainer>
      {movies.length > 0 &&
        movies.map((movieItem) => <Movie key={movieItem.id} {...movieItem} />)}
    </MovieCardContainer>
  );
}

export default Movies;
