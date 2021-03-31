import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import { API_URL } from '../Views//Config'

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
        <div>
            {movies.length > 0 &&
                 movies.map((movie) => <Movie key={movie.id} {...movie}/>
             )}           
        </div>
    );
    
}

export default Movies;
