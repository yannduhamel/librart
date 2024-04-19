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
  displayFilteredArtist: PropTypes.string.isRequired,
  setDisplayFilteredArtist: PropTypes.string.isRequired,
  displayFilteredCountry: PropTypes.string.isRequired,
  setDisplayFilteredCountry: PropTypes.string.isRequired,
  setDisplayFilteredYear: PropTypes.number.isRequired,
  displayFilteredYear: PropTypes.number.isRequired,
};

export default FilterButtons;
