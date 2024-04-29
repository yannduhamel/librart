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
      fetch(`${import.meta.env.VITE_API_URL}/country/French`)
        .then((res) => res.json())
        .then((response) => setFilter(response));
      setSearchResults([]);
    }
  }, [displayFilteredCountry]);

  const [displayFilteredArtist, setDisplayFilteredArtist] = useState(false);

  useEffect(() => {
    if (displayFilteredArtist) {
      fetch(`${import.meta.env.VITE_API_URL}/artist/Vincent`)
        .then((res) => res.json())
        .then((response) => setFilter(response));
      setSearchResults([]);
    }
  }, [displayFilteredArtist]);

  const [displayFilteredYear, setDisplayFilteredYear] = useState(false);

  useEffect(() => {
    if (displayFilteredYear) {
      fetch(`${import.meta.env.VITE_API_URL}/year/1655`)
        .then((res) => res.json())
        .then((response) => setFilter(response));
      setSearchResults([]);
    }
  }, [displayFilteredYear]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    fetch(`${import.meta.env.VITE_API_URL}/search/${inputValue}`)
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
      <h1 className={styles.homePageTitle}>
        Votre galerie d’art en libre accès
      </h1>
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
