import styles from "./ContactPage.module.css";

function ContactPage() {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Suivez-nous</h1>

      <h2 className={styles.h2}>
        Restez connecté avec LibrArt, en nous suivant sur nos réseaux sociaux!
      </h2>

      <div className={styles.text}>
        Rejoignez notre communauté passionnée d'art, et partagez avec nous votre
        amour pour la culture. Suivez-nous sur Facebook, Instagram, Twitter pour
        ne manquer aucune actualité. Nous sommes également disponible par mail,
        pour répondre à toutes vos questions.
      </div>

      <div className={styles.réseaux}>
        <div>
          <p>https//www.facebook.com/LesLapinsAgiles</p>
          <img
            className={styles.facebook}
            src="../src/assets/images/Facebook.png"
            alt="logo facebook"
          />
        </div>

        <div>
          <p>https://www.instagram.com/LibrArt</p>
          <img
            className={styles.instagram}
            src="../src/assets/images/Instagram.png"
            alt="logo instagram"
          />
        </div>

        <div>
          <p>https://www.twitter.com/LibrArt</p>
          <img
            className={styles.twitter}
            src="../src/assets/images/Twitter.png"
            alt="logo twitter"
          />
        </div>

        <div>
          <p>contact@librart.com</p>
          <img
            className={styles.mail}
            src="../src/assets/images/Email.png"
            alt="logo mail"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
