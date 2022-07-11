import React, { useContext } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovie, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  const watchlistDisabled = storedMovie ? true : false;

  const navigate = useNavigate();
  const openMovie = (data) => {
    console.log(data);
    navigate("/details", { state: data });
  };
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.slice(0, 4) : "-"}
          </h4>
        </div>
        <div className="card-buttons">
          <div className="controls">
            <button
              className="btn"
              disabled={watchlistDisabled}
              onClick={() => addMovie(movie)}>
              Add to Watchlist
            </button>
          </div>
          <div className="controls">
            <button className="btn" onClick={() => openMovie(movie)}>
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
