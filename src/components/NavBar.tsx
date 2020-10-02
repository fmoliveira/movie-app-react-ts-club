import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import Logo from "./Logo";

import styles from "./NavBar.module.css";

const NavBar: FC = () => {
  const history = useHistory();

  const handleSearch = (search: string) => {
    history.push(`/search?q=${search}`);
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
        />
      </div>
    </div>
  );
};

export default NavBar;
