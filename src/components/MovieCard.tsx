import React, { FC } from "react";

import styles from "./MovieCard.module.css";

interface Props {
  title: string;
  poster: string;
}

const imagesPrefix = "https://image.tmdb.org/t/p/w500/";

const MovieCard: FC<Props> = ({ title, poster }) => (
  <div className={styles.card}>
    <img
      className={styles.image}
      src={imagesPrefix + poster}
      alt={`Poster for movie ${title}`}
    />
    <p>{title}</p>
  </div>
);

export default MovieCard;
