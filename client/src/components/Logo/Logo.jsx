import styles from "./Logo.module.css";
import logo from "../../assets/images/LibrArt.png";

function Logo() {
  const redirectionToHome = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <button className={styles.Logo} type="button" onClick={redirectionToHome}>
        <img className={styles.logoImage} src={logo} alt="logo du site" />
      </button>
    </div>
  );
}

export default Logo;
