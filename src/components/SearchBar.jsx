import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { GoSearch } from "react-icons/go";

export default function SearchBar({ onSearch }) {
  const [Search, setSearch] = useState("");
  const handleOnSearch = () => {
    onSearch(search);
    setSearch("");
  };

  return (
    <div className={styles.searchBar}>
      <input
        id="searchInput"
        className={styles.input}
        type="text"
        placeholder="Search your city..."
        autoComplete="off"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleOnSearch();
        }}
      />
      <button className={styles.button} onClick={handleOnSearch}>
        {" "}
        <GoSearch />{" "}
      </button>
    </div>
  );
}
