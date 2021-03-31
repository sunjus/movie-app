import React from 'react';
import { IMAGE_BASE_URL } from '../Views/Config'

const Movie = ({ title, poster_path }) => (
        <div className="movie">
            <img src={IMAGE_BASE_URL + poster_path} alt={title} />
        </div>
)
   
export default Movie;
