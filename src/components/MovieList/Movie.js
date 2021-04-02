import React from 'react';
import { IMAGE_BASE_URL } from '../Views/Config'
import styled from 'styled-components';

const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 20rem;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px #aaa;

    > img {
        width: 100%;
        height: 95%;
        object-fit: cover;
    }
`;

const Movie = ({ title, poster_path }) => (
        <MovieCard className="movie">
            <img src={IMAGE_BASE_URL + poster_path } alt={title} />
        </MovieCard>
)
   
export default Movie;
