import styles from "./FilterButtons.module.css";

function FilterButtons() {
  return (
    <div className={styles.ContainerButtons}>
      <button className={styles.FilterButton} type="button">
        Japon
      </button>
      <button className={styles.FilterButton} type="button">
        Baroque
      </button>
      <button className={styles.FilterButton} type="button">
        Van Gogh
      </button>
    </div>
  );
}

export default FilterButtons;
