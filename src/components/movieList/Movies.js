import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, IMAGE_BASE_URL } from "../views/Config";
import styled from "styled-components";

const Movie = ({ title, poster_path }) => (
  <MovieCard>
    <img src={IMAGE_BASE_URL + poster_path} alt="title" />
  </MovieCard>
);

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(API_URL);
      console.log(result);
      setMovies(result.data.results);
      setIsLoading(false);
    };
    fetchMovies();
  }, []);

  /*
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
*/
  return (
    <MovieCardContainer>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movieItem) => <Movie key={movieItem.id} {...movieItem} />)
      )}
    </MovieCardContainer>
  );
};

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

export default Movies;