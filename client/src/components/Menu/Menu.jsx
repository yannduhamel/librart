import { useState } from "react";
import styles from "./Menu.module.css";

function Menu() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div
      className={` ${styles.menu} ${showLinks ? styles.active : styles.inactive}`}
    >
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <p className={styles.navbarLink}>Mes favoris</p>
        </li>
        <li className={styles.navbarItem}>
          <p className={styles.navbarLink}>Rencontrons-nous</p>
        </li>
        <li className={styles.navbarItem}>
          <p className={styles.navbarLink}>Licence</p>
        </li>
      </ul>
      <button
        className={styles.burgerMenu}
        aria-label="burger"
        type="button"
        onClick={handleShowLinks}
      >
        <span className={styles.burgerLine} />
      </button>
    </div>
  );
}
export default Menu;
