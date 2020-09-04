import React, { FC } from "react";

interface Props {
  title: string;
  poster: string;
}

const MovieCard: FC<Props> = ({ title, poster }) => (
  <div>
    <img src={poster} alt={`Poster for movie ${title}`} />
    <p>{title}</p>
  </div>
);

export default MovieCard;
