import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Catalog({ filter }) {
  return (
    <div>
      {filter.map((item) => (
        <div key={item.objectID}>
          <img src={item.primaryImageSmall} alt="Filtered Painting" />
          <NavLink to={`/detail/${item.objectID}`}>
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
