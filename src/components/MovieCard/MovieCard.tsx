import { MovieData } from "../../models/movie-data.model";
import "./MovieCard.css";

const MovieCard = (props: any) => {
  const RANDOM_IMAGE_API_URL =
    "https://via.assets.so/img.jpg?w=400&h=250&tc=#f9d3b4&bg=#212426&t=No Image";
  const movie = props.movie as MovieData;
  return (
    <div className="movie-card">
      <div className="movie-year">
        <p>{movie.Year}</p>
      </div>

      <div className="movie-poster">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : RANDOM_IMAGE_API_URL}
          alt=""
        />
      </div>

      <div className="movie-details">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
