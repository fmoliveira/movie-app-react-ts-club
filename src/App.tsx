import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import Layout from "./components/Layout";

const queryCache = new QueryCache();

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={HomePage} />
            <Route path="/movie/:movieId" component={DetailsPage} />
            <Route path="/search" component={SearchPage} />
          </Layout>
        </Switch>
      </Router>
    </ReactQueryCacheProvider>
  );
}

export default App;
