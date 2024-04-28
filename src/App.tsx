import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";
import MovieCard from "./components/MovieCard/MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7db9db8a";

function App() {
  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app-container">
      <h1>MovieSearch</h1>
      <div className="search-bar">
        <input placeholder="Search for movies"></input>
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => {
            searchMovies;
          }}
        />
      </div>
      <MovieCard />
    </div>
  );
}

export default App;
