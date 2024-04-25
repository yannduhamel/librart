import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";

function SearchBar({ handleSubmit }) {
  return (
    <div className={styles.SearchBar}>
      <form onSubmit={handleSubmit} role="search">
        <input className={styles.Input} type="text" placeholder="Search by " />
        <button className={styles.SearchButton} type="submit">
          🔍︎
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
