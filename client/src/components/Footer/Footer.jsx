import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <Link to="/cgu">Conditions Générales d'Utilisation</Link>
      <p> ©️2024 Les Lapins Agiles 🐇🐇🐇 </p>
    </div>
  );
}

export default Footer;
