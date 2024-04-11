import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.SearchBar}>
      <form role="search" method="get" action="">
        <input className={styles.Input} type="text" placeholder="Search by " />
        <button className={styles.SearchButton} type="submit">
          🔍︎
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
