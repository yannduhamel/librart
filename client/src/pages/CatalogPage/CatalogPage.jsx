import Catalog from "../../components/Catalog/Catalog";
import FilterButtons from "../../components/FilterButtons/FilterButtons";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  return (
    <div className={styles.CatalogPage}>
      <FilterButtons />
      <h1>Votre galerie d’oeuvres d’art en libre accès</h1>
      <SearchBar />
      <Catalog />
      <img src="https://picsum.com/300/" alt="phototest" />
    </div>
  );
}

export default CatalogPage;
