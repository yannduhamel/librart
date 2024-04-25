import PropTypes from "prop-types";
import styles from "./FilterButtons.module.css";

function FilterButtons({
  displayFilteredArtist,
  setDisplayFilteredArtist,
  displayFilteredCountry,
  setDisplayFilteredCountry,
  setDisplayFilteredYear,
  displayFilteredYear,
}) {
  return (
    <div className={styles.ContainerButtons}>
      <button
        className={styles.FilterButton}
        type="button"
        onClick={() => setDisplayFilteredCountry(!displayFilteredCountry)}
      >
        France
      </button>
      <button
        className={styles.FilterButton}
        type="button"
        onClick={() => setDisplayFilteredYear(!displayFilteredYear)}
      >
        1655
      </button>
      <button
        className={styles.FilterButton}
        type="button"
        onClick={() => setDisplayFilteredArtist(!displayFilteredArtist)}
      >
        Van Gogh
      </button>
    </div>
  );
}

FilterButtons.propTypes = {
  displayFilteredArtist: PropTypes.bool.isRequired,
  setDisplayFilteredArtist: PropTypes.func.isRequired,
  displayFilteredCountry: PropTypes.bool.isRequired,
  setDisplayFilteredCountry: PropTypes.func.isRequired,
  setDisplayFilteredYear: PropTypes.func.isRequired,
  displayFilteredYear: PropTypes.bool.isRequired,
};

export default FilterButtons;
