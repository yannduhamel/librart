import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Logo />
      <Menu />
    </div>
  );
}

export default Navbar;
