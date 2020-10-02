import React from "react";
import { FC } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

import getMovieDetails from "../api/getMovieDetails";

interface RouteParams {
  movieId: string;
}

const HomePage: FC = () => {
  const { movieId } = useParams<RouteParams>();

  const { data, isLoading, isError } = useQuery(
    ["movieDetails", movieId],
    () => getMovieDetails(movieId),
    {}
  );

  if (isLoading) {
    return (
      <>
        <p>Loading movie details...</p>
      </>
    );
  }

  if (isError || !data) {
    return (
      <>
        <p>Failed to load movie details!</p>
        <Link to="/">Go back to home page</Link>
      </>
    );
  }

  return (
    <>
      <img src={data.backdrop} alt="" />
      <h2>{data.title}</h2>
      <p>
        <strong>Released:</strong> {data.release_date}
      </p>
      <p>
        <strong>Genres:</strong> {data.genres.join(", ")}
      </p>
      <p>{data.overview}</p>
    </>
  );
};

export default HomePage;
