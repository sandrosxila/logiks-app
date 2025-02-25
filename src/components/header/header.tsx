import avatar from "../../assets/photos/avatar.png";
import styles from "./header.module.scss";
import { SearchBar } from "./search-bar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.searchBarSection}>
        <SearchBar />
      </div>
      <div className={styles.userSection}>
        <div className={styles.userInfo}>
          <span className={styles.userFullName}>Alex Kognitiv</span>
          <span className={styles.userEmail}>Alexkognitiv@gmail.com</span>
        </div>
        <div className={styles.userAvatar}>
          <img
            src={avatar}
            alt="user photo"
            className={styles.userAvatarImage}
          />
        </div>
      </div>
    </header>
  );
};
