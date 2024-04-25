import PropTypes from "prop-types";

function SearchBarCatalog({ searchResults }) {
  return (
    <div>
      {searchResults.map((image) => (
        <img
          key={image.id}
          src={image.primaryImageSmall}
          alt="Search Result Painting"
        />
      ))}
    </div>
  );
}

SearchBarCatalog.propTypes = {
  searchResults: PropTypes.node.isRequired,
};

export default SearchBarCatalog;
