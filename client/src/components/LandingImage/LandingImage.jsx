import { useState, useEffect } from "react";
import styles from "./LandingImage.module.css";

function LandingImage() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/436535"
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.primaryImage);
      });
  });

  return (
    <img className={styles.img} src={imageUrl} alt="Painting Public Domain" />
  );
}

export default LandingImage;
