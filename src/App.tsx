import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";
import MovieCard from "./components/MovieCard/MovieCard";

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7db9db8a";

function App() {
  const searchMovies = async (title: string) => {
    const response = await fetch(`${MOVIE_API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const [movies, setMovies] = useState([]);
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
      {movies.length > 0 ? (
        <div className="movie-container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No movies found</h1>
        </div>
      )}
    </div>
  );
}

export default App;
