import { useLoaderData } from "react-router-dom";
import styles from "./DetailPage.module.css";

export default function DetailPage() {
  const detail = useLoaderData();
  const { title, artistDisplayName, objectDate, primaryImageSmall } = detail;
  return (
    <div className={styles.detailContainer}>
      <h2 className={styles.detailImageInfo}>
        Titre: {title} <br /> Artiste: {artistDisplayName} <br /> Date:{" "}
        {objectDate}
      </h2>
      <img
        src={primaryImageSmall}
        alt={`${title}`}
        className={styles.detailImage}
      />
    </div>
  );
}
