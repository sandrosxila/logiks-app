import Magnifier from "../../assets/icons/magnifier.svg?react";
import styles from "./search-bar.module.scss";

export const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.searchButton}>
        <Magnifier title="search" className={styles.searchLogo} />
      </button>
      <input
        type="text"
        placeholder="Search for the desired information"
        className={styles.searchInput}
      />
    </div>
  );
};
