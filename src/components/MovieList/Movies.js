import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import { API_URL } from '../Views//Config'
import styled from 'styled-components';

const MovieCardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 -0.5rem;
    flex-wrap: wrap;

    > div {
        width: calc(33% - 1.065rem);
        margin: 0 0.65rem;
        margin-bottom: 1rem;
    }
`;

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
                 movies.map((movieItem) => <Movie key={movieItem.id} {...movieItem} />                
             )}           
        </MovieCardContainer>
    );    
}

export default Movies;
