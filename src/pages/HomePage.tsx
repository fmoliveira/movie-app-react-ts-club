import React from "react";
import { FC } from "react";
import { useQuery } from "react-query";

import getMovies from "../api/getMovies";
import MovieList from "../components/MovieList";

const HomePage: FC = () => {
  const moviesQuery = useQuery("movies", getMovies, {});

  return (
    <>
      <h2>Home</h2>
      <MovieList moviesList={moviesQuery.data} />
    </>
  );
};

export default HomePage;
