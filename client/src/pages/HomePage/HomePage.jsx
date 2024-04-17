import FilterButtons from "../../components/FilterButtons/FilterButtons";
import SearchBar from "../../components/SearchBar/SearchBar";
import LandingImage from "../../components/LandingImage/LandingImage";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.main}>
      <FilterButtons />
      <h1>Votre galerie d’oeuvres d’art en libre accès</h1>
      <SearchBar />
      <LandingImage />
    </div>
  );
}

export default HomePage;
