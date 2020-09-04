import React, { FC } from "react";

interface Props {
  title: string;
  poster: string;
}

const imagesPrefix = "https://image.tmdb.org/t/p/w500/";

const MovieCard: FC<Props> = ({ title, poster }) => (
  <div>
    <img src={imagesPrefix + poster} alt={`Poster for movie ${title}`} />
    <p>{title}</p>
  </div>
);

export default MovieCard;
