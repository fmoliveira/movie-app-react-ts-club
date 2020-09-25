import * as React from "react";
import { FC } from "react";
import { useQuery } from "react-query";

import getMovies from "../api/getMovies";
import MovieList from "../components/MovieList";
import NavBar from "../components/NavBar";

const HomePage: FC = () => {
  const moviesQuery = useQuery("movies", getMovies, {});

  return (
    <>
      <NavBar />
      <MovieList moviesList={moviesQuery.data} />
    </>
  );
};

export default HomePage;
