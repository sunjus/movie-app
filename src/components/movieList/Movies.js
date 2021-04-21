import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { IMAGE_BASE_URL } from "../views/Config";
import styled from "styled-components";

const Movie = ({ title, poster_path }) => (
  <MovieCard>
    <img src={IMAGE_BASE_URL + poster_path} alt="title" />
  </MovieCard>
);

const Movies = () => {
  const { movies, isLoading } = useContext(MovieContext);

  return (
    <MovieCardContainer>
      {movies.map((movieItem) => (
        <Movie key={movieItem.id} {...movieItem} />
      ))}
    </MovieCardContainer>
  );
};

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px #aaa;
  max-width: 240px;

  > img {
    width: 100%;
    max-width: 240px;
    height: 95%;
    object-fit: cover;
    marginL 10px 0;
  }
`;

const MovieCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
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
