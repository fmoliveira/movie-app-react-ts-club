import React, { FC } from "react";
import Logo from "./Logo";

import styles from "./NavBar.module.css";

interface Props {
  onSearch?: (search: string) => void;
}

const NavBar: FC<Props> = ({ onSearch }) => (
  <div className={styles.container}>
    <Logo />
    <div>
      <label htmlFor="search-box">Search:</label>
      <input
        name="search-box"
        type="text"
        placeholder="Movie name"
        onChange={(event) => onSearch?.(event.target.value)}
      />
    </div>
  </div>
);

export default NavBar;
