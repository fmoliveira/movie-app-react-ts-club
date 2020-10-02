import fetch from "isomorphic-fetch";

const API_URL = "https://api.themoviedb.org/3/movie/:movieId";
const IMAGE_PREFIX = "https://image.tmdb.org/t/p/w500/";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// types returned by the api
interface ApiResponse {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  release_date: string;
}
// type returned by our fetcher
export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster: string;
  backdrop: string;
  genres: string[];
  release_date: string;
}

const getMovies = async (movieId: string): Promise<MovieDetails> => {
  const detailsUrl = API_URL.replace(":movieId", movieId);
  const requestUrl = `${detailsUrl}?api_key=${API_KEY}`;

  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => data as ApiResponse)
    .then((data) => ({
      id: data.id,
      title: data.title,
      overview: data.overview,
      poster: IMAGE_PREFIX + data.poster_path,
      backdrop: IMAGE_PREFIX + data.backdrop_path,
      genres: data.genres.map((genre) => genre.name),
      release_date: data.release_date,
    }));
};

export default getMovies;
