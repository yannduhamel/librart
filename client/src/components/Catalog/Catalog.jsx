import PropTypes from "prop-types";

function Catalog({ filter }) {
  return (
    <div>
      {filter.map((item) => (
        <img
          key={item.id}
          src={item.primaryImageSmall}
          alt="Filtered Painting"
        />
      ))}
    </div>
  );
}

Catalog.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Catalog;
