import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Catalog.module.css";

function Catalog({ filter }) {
  return (
    <div className={styles.catalogBox}>
      {filter.map((item) => (
        <div key={item.objectID} className={styles.catalogItem}>
          <img
            src={item.primaryImageSmall}
            alt="Filtered Painting"
            className={styles.catalogImage}
          />
          <div className={styles.linksContainer}>
            <NavLink
              to={`/detail/${item.objectID}`}
              className={styles.catalogLink}
            >
              Détails
            </NavLink>{" "}
            <NavLink
              className={styles.downloadLink}
              to={item.primaryImage}
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

Catalog.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Catalog;
