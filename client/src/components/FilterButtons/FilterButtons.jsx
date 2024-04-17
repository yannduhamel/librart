import styles from "./FilterButtons.module.css";

function FilterButtons() {
  return (
    <div className={styles.ContainerButtons}>
      <button className={styles.FilterButton} type="button">
        France
      </button>
      <button className={styles.FilterButton} type="button">
        1655
      </button>
      <button className={styles.FilterButton} type="button">
        Van Gogh
      </button>
    </div>
  );
}

export default FilterButtons;
