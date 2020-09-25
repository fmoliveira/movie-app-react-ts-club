import * as React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import HomePage from "./pages/HomePage";

const queryCache = new QueryCache();

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <HomePage />
    </ReactQueryCacheProvider>
  );
}

export default App;
