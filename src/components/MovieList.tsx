import React, { FC } from "react";
import MovieCard from "./MovieCard";

interface Movie {
  title: string;
  poster: string;
}

interface Props {
  moviesList: Movie[];
}

const MovieList: FC<Props> = ({ moviesList }) => {
  if (moviesList.length === 0) {
    return <p>No movies in the list</p>;
  }

  return (
    <div>
      {moviesList.map(({ title, poster }) => (
        <MovieCard title={title} poster={poster} />
      ))}
    </div>
  );
};

export default MovieList;
