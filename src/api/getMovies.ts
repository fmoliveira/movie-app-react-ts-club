import fetch from "isomorphic-fetch";

const API_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// types returned by the api
interface ApiResponse {
  results: MovieResponse[];
}

interface MovieResponse {
  id: number;
  title: string;
  poster_path: string;
}

// type returned by our fetcher
export interface Movie {
  id: number;
  title: string;
  poster: string;
  backdrop?: string;
}

const getMovies = async (): Promise<Movie[]> => {
  const requestUrl = `${API_URL}?api_key=${API_KEY}`;

  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => data as ApiResponse)
    .then((data) =>
      data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
      }))
    );
};

export default getMovies;
