import { useEffect } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7db9db8a";

function App() {
  const searchMovies = async (title: string) => {
    // const response = await fetch(`${API_URL}&s=${title}`);
    // const data = await response.json();
    // console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);
console.log(reactLogo)
  return (
    <div className="app-container">
      <h1>MovieSearch</h1>
      <div className="search-bar">
        <input placeholder="Search for movies"></input>
        <img src="reactLogo" alt="search icon" />
      </div>
    </div>
  );
}

export default App;
