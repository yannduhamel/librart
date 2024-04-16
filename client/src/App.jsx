import "./App.css";
import LandingImage from "./components/LandingImage/LandingImage";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <Navbar />
      <FilterButtons />
      <h1>Votre galerie d’oeuvres d’art en libre accès</h1>
      <SearchBar />
      <LandingImage />
      <Footer />
    </div>
  );
}

export default App;
