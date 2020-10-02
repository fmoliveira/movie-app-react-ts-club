import React from "react";
import { FC } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import searchMovies from "../api/searchMovies";
import MovieList from "../components/MovieList";

const getSearchTerm = (query: string | string[] | null) => {
  if (!query) return "";
  if (Array.isArray(query)) return query.join(" ");

  return query;
};

const SearchPage: FC = () => {
  const { search } = useLocation();
  const query = queryString.parse(search);
  const searchTerm = getSearchTerm(query.q);

  const searchQuery = useQuery(
    ["movies", searchTerm],
    () => searchMovies(searchTerm),
    {}
  );

  return (
    <>
      <h2>Search for &quot;{searchTerm}&quot;</h2>
      <MovieList moviesList={searchQuery.data} />
    </>
  );
};

export default SearchPage;
