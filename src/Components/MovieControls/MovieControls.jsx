import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovie,
    addMovieToWatched,
    removeMovieFromWatched,
    moveToWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button onClick={() => addMovieToWatched(movie)} className="ctrl-btn">
            <i className="fa-fw fa fa-eye"></i>
          </button>
          <button onClick={() => removeMovie(movie.id)} className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button onClick={() => moveToWatched(movie)} className="ctrl-btn">
            <i className="fa-fw fa fa-eye-slash"></i>
          </button>
          <button
            onClick={() => removeMovieFromWatched(movie.id)}
            className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
