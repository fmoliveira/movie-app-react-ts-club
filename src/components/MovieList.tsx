import React, { FC } from "react";
import MovieCard from "./MovieCard";

import styles from "./MovieList.module.css";

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
    <div className={styles.list}>
      {moviesList.map(({ title, poster }) => (
        <MovieCard title={title} poster={poster} />
      ))}
    </div>
  );
};

export default MovieList;
