import React, { FC } from "react";

import { Movie } from "../api/getMovies";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

type MoviePreview = Pick<Movie, "id" | "title" | "poster">;

interface Props {
  moviesList?: MoviePreview[];
}

const MovieList: FC<Props> = ({ moviesList }) => {
  if (!moviesList || moviesList.length === 0) {
    return <p>No movies in the list</p>;
  }

  return (
    <div className={styles.list}>
      {moviesList.map(({ id, title, poster }) => (
        <MovieCard key={id} id={id} title={title} poster={poster} />
      ))}
    </div>
  );
};

export default MovieList;
