import styles from "./Logo.module.css";

function Logo() {
  const redirectionToHome = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <button className={styles.Logo} type="button" onClick={redirectionToHome}>
        <img
          className={styles.Image}
          src="src/assets/images/LibrArt.png"
          alt="logo du site"
        />
      </button>
    </div>
  );
}

export default Logo;
