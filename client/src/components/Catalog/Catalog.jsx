function Catalog({filter}){
 
  return (
    filter.map((item) => (
        <img
          key={item.id}
          src={item.primaryImageSmall}
          alt="Filtered Painting"
        />
    )))
}

export default Catalog;
