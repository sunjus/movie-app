import React from 'react';
import Movie from './Movie';

function Movies() {
    const movies = ["1","2","3"];
    console.log(movies);

    return <div>
        {movies.map(movie=>(
            <Movie />
        ))}           
    </div>;
    
}

export default Movies;
