import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./LandingImage.module.css";

function LandingImage({ imageUrl, setImageUrl}) {

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

LandingImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  setImageUrl: PropTypes.func.isRequired,
};

export default LandingImage;
