import { useLoaderData } from "react-router-dom";
import styles from "./DetailPage.module.css";

export default function DetailPage() {
  const detail = useLoaderData();
  const { title, artistDisplayName, objectDate, primaryImageSmall } = detail;
  return (
    <>
      <div className={styles.imageInfo}>
        {title} {artistDisplayName} {objectDate}
      </div>
      <img
        src={primaryImageSmall}
        alt={`${title}`}
        className={styles.detailImage}
      />
    </>
  );
}
