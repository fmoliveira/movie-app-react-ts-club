import React from "react";

import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div>
      <NavBar />
      <MovieList moviesList={[]} />
    </div>
  );
}

export default App;
