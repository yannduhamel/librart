import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <NavLink className={styles.cguLink} to="/cgu">
        Conditions Générales d'Utilisation
      </NavLink>
      <p> ©️2024 Les Lapins Agiles 🐇🐇🐇 </p>
    </div>
  );
}

export default Footer;
