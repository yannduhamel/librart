import "./App.css";
import LandingImage from "./components/LandingImage/LandingImage";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="main">
      <Navbar />
      <FilterButtons />
      <h1>Votre galerie d’oeuvres d’art en libre accès</h1>
      <SearchBar />
      <LandingImage />
    </div>
  );
}

export default App;
