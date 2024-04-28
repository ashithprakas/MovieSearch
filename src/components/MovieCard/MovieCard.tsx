import "./MovieCard.css";

const MovieCard = () => {
  const tempval = {
    Title: "Spiderman in Cannes",
    Year: "2016",
    imdbID: "tt5978586",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
  };
  return (
    <div className="movie-card">
      <div className="movie-year">
        <p>{tempval.Year}</p>
      </div>

      <div className="movie-poster">
        <img src={tempval.Poster !== "N/A" ? tempval.Poster : ""} alt="" />
      </div>

      <div className="movie-details">
        <span>{tempval.Type}</span>
        <h3>{tempval.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
