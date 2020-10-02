import React, { FC, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Logo from "./Logo";

import styles from "./NavBar.module.css";

const NavBar: FC = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const isSearching = useRouteMatch("/search");

  useEffect(() => {
    if (!isSearching) {
      setSearch("");
    }
  }, [isSearching]);

  const handleSearch = (q: string) => {
    setSearch(q);
    history.push(`/search?q=${q}`);
  };

  return (
    <div className={styles.container}>
      <Logo />
      <div>
        <label htmlFor="search-box">Search:</label>
        <input
          name="search-box"
          type="text"
          placeholder="Movie name"
          onChange={(event) => handleSearch(event.target.value)}
          value={search}
        />
      </div>
    </div>
  );
};

export default NavBar;
