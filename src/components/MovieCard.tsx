import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./MovieCard.module.css";

interface Props {
  id: number;
  title: string;
  poster: string;
}

const MovieCard: FC<Props> = ({ id, title, poster }) => (
  <div className={styles.card}>
    <Link to={`/movie/${id}`}>
      <img
        className={styles.image}
        src={poster}
        alt={`Poster for movie ${title}`}
      />
      <p>{title}</p>
    </Link>
  </div>
);

export default MovieCard;
