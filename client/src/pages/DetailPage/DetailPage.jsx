import { useLoaderData, NavLink } from "react-router-dom";
import styles from "./DetailPage.module.css";

export default function DetailPage() {
  const detail = useLoaderData();
  const {
    title,
    artistDisplayName,
    objectDate,
    primaryImageSmall,
    primaryImage,
  } = detail;
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailTextContainer}>
        <h2 className={styles.detailImageInfo}>
          TITRE : {title} <br /> <br /> ARTISTE : {artistDisplayName} <br />
          <br /> DATE : {objectDate}
        </h2>

        <NavLink
          className={styles.downloadDetailLink}
          to={primaryImage}
          target="_blank"
        >
          Télécharger
        </NavLink>
      </div>
      <img
        src={primaryImageSmall}
        alt={`${title}`}
        className={styles.detailImage}
      />
    </div>
  );
}
