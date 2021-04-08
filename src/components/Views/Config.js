export const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

export const SEARCH_URL = `https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_API_KEY}&page=1`;

export const Top_rated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

export const Popular = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

export const Latest = `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
