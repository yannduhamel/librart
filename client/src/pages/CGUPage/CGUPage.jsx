import styles from "./CGUPage.module.css";

function CGUPage() {
  return (
    <div className={styles.main}>
      <h1 className={styles.cguTitle}>Conditions Générales d'Utilisation</h1>
      <h2 className={styles.cguSubTitle}>Article 1: Objet</h2>
      <p className={styles.cguParagraph}>
        Les présentes « conditions générales d'utilisation » ont pour objet
        l'encadrement juridique de l’utilisation du site Librart et de ses
        services. Ce contrat est conclu entre : Le gérant du site internet,
        ci-après désigné « l’Éditeur », Toute personne physique ou morale
        souhaitant accéder au site et à ses services, ci-après appelé «
        l’Utilisateur ». Les conditions générales d'utilisation doivent être
        acceptées par tout Utilisateur, et son accès au site vaut acceptation de
        ces conditions.
      </p>
      <h2 className={styles.cguSubTitle}>Article 2: Mentions légales</h2>
      <p className={styles.cguParagraph}>
        Le site LibrArt est édité par les Lapins Agiles, domiciliés à
        Remoteland.
      </p>
      <h2 className={styles.cguSubTitle}>Article 3:Accès aux services</h2>
      <p className={styles.cguParagraph}>
        L’Utilisateur du site LibrArt a accès aux services suivants :
        <ul>
          <li>la consultation d'oeuvres d'art,</li>
          <li>le téléchargement des images,</li>
          <li>la mise en favori des images.</li>
        </ul>
        Tout Utilisateur ayant accès a internet peut accéder gratuitement et
        depuis n’importe où au site. Les frais supportés par l’Utilisateur pour
        y accéder (connexion internet, matériel informatique, etc.) ne sont pas
        à la charge de l’Éditeur. Le site et ses différents services peuvent
        être interrompus ou suspendus par l’Éditeur, notamment à l’occasion
        d’une maintenance, sans obligation de préavis ou de justification.
      </p>
      <h2 className={styles.cguSubTitle}>
        Article 4: Responsabilité de l’Utilisateur
      </h2>
      <p className={styles.cguParagraph}>
        L’Utilisateur assume l’entière responsabilité de l’utilisation qu’il
        fait des informations et contenus présents sur le site LibrArt.
      </p>
      <h2 className={styles.cguSubTitle}>
        Article 5: Responsabilité de l’Éditeur
      </h2>
      <p className={styles.cguParagraph}>
        Tout dysfonctionnement du serveur ou du réseau ne peut engager la
        responsabilité de l’Éditeur. De même, la responsabilité du site ne peut
        être engagée en cas de force majeure ou du fait imprévisible et
        insurmontable d'un tiers. Le site LibrArt s'engage à mettre en œuvre
        tous les moyens nécessaires pour garantir la sécurité et la
        confidentialité des données. Toutefois, il n’apporte pas une garantie de
        sécurité totale. L’Éditeur se réserve la faculté d’une non-garantie de
        la fiabilité des sources, bien que les informations diffusées su le site
        soient réputées fiables.
      </p>
      <h2 className={styles.cguSubTitle}>
        Article 6: Évolution des conditions générales d’utilisation
      </h2>
      <p className={styles.cguParagraph}>
        Le site LibrArt se réserve le droit de modifier les clauses de ces
        conditions générales d’utilisation à tout moment et sans justification.
      </p>
    </div>
  );
}

export default CGUPage;
