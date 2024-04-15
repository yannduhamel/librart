import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Logo />
    </div>
  );
}

export default Navbar;
