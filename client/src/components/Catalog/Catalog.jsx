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
          <NavLink
            to={`/detail/${item.objectID}`}
            className={styles.catalogLink}
          >
            Plus de détails
          </NavLink>{" "}
        </div>
      ))}
    </div>
  );
}

Catalog.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Catalog;
