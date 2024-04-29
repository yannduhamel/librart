import { useState } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink
            to="/"
            className={styles.navbarLink}
            onClick={handleShowLinks}
          >
            Accueil
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            to="/contact"
            className={styles.navbarLink}
            onClick={handleShowLinks}
          >
            Suivez-nous
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            to="/licence"
            className={styles.navbarLink}
            onClick={handleShowLinks}
          >
            Licence
          </NavLink>
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
