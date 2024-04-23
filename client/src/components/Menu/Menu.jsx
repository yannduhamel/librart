import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Accueil</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/contact">Suivez-nous</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/licence">Licence</Link>
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
