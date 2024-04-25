import { useEffect, useState } from "react";
import FilterButtons from "../../components/FilterButtons/FilterButtons";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./HomePage.module.css";
import LandingImage from "../../components/LandingImage/LandingImage";
import Catalog from "../../components/Catalog/Catalog";
import SearchBarCatalog from "../../components/SearchBarCatalog/SearchBarCatalog";

function HomePage() {
  const [filter, setFilter] = useState(null);
  const [displayFilteredCountry, setDisplayFilteredCountry] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (displayFilteredCountry) {
      fetch("http://localhost:3310/country/French")
        .then((res) => res.json())
        .then((response) => setFilter(response));
      setSearchResults([]);
    }
  }, [displayFilteredCountry]);

  const [displayFilteredArtist, setDisplayFilteredArtist] = useState(false);

  useEffect(() => {
    if (displayFilteredArtist) {
      fetch("http://localhost:3310/artist/Vincent")
        .then((res) => res.json())
        .then((response) => setFilter(response));
      setSearchResults([]);
    }
  }, [displayFilteredArtist]);

  const [displayFilteredYear, setDisplayFilteredYear] = useState(false);

  useEffect(() => {
    if (displayFilteredYear) {
      fetch("http://localhost:3310/year/1655")
        .then((res) => res.json())
        .then((response) => setFilter(response));
      setSearchResults([]);
    }
  }, [displayFilteredYear]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    fetch(`http://localhost:3310/search/${inputValue}`)
      .then((res) => res.json())
      .then((response) => setSearchResults(response));
    setFilter("");
  };

  return (
    <div className={styles.homeMain}>
      <FilterButtons
        setDisplayFilteredCountry={setDisplayFilteredCountry}
        displayFilteredCountry={displayFilteredCountry}
        setDisplayFilteredArtist={setDisplayFilteredArtist}
        displayFilteredArtist={displayFilteredArtist}
        setDisplayFilteredYear={setDisplayFilteredYear}
        displayFilteredYear={displayFilteredYear}
      />
      <h1>Votre galerie d’oeuvres d’art en libre accès</h1>
      <SearchBar handleSubmit={handleSubmit} />
      <div className={styles.imgContainer}>
        {filter && <Catalog filter={filter} />}
        {searchResults && <SearchBarCatalog searchResults={searchResults} />}
        {!filter && searchResults.length === 0 && (
          <LandingImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
