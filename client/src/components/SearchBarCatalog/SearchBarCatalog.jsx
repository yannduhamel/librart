import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function SearchBarCatalog({ searchResults }) {
  return (
    <div>
      {searchResults.map((image) => (
        <div key={image.objectID}>
          <img src={image.primaryImageSmall} alt="Search Result Painting" />
          <NavLink to={`/detail/${image.objectID}`}>
            Plus de détails
          </NavLink>{" "}
        </div>
      ))}
    </div>
  );
}

SearchBarCatalog.propTypes = {
  searchResults: PropTypes.node.isRequired,
};

export default SearchBarCatalog;
