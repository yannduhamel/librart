import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "../Catalog/Catalog.module.css";

function SearchBarCatalog({ searchResults }) {
  return (
    <div className={styles.catalogBox}>
      {searchResults.map((image) => (
        <div key={image.objectID} className={styles.catalogItem}>
          <img
            src={image.primaryImageSmall}
            alt="Search Result Painting"
            className={styles.catalogImage}
          />
          <div className={styles.linksContainer}>
            <NavLink
              to={`/detail/${image.objectID}`}
              className={styles.catalogLink}
            >
              Détails
            </NavLink>{" "}
            <NavLink
              className={styles.downloadLink}
              to={image.primaryImage}
              target="_blank"
            >
              Télécharger
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

SearchBarCatalog.propTypes = {
  searchResults: PropTypes.node.isRequired,
};

export default SearchBarCatalog;
