import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

export const Moviedetails = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="detail-container">
      <div className="header-container">
        <img
          src={`https://image.tmdb.org/t/p/original${location.state.backdrop_path}`}
          alt={`${location.state.title} Poster`}
        />
        <h1 className="title">{location.state.title}</h1>
        <div className="body-container">
          <div className="desc">
            <h4>{location.state.overview}</h4>
          </div>
          <div className="details-card">
            {location.state.adult ? <h3>Rated : 18+</h3> : <h3>Rated : 5+</h3>}
            <h3>Rating : {location.state.vote_average}</h3>
            <h3>Vote Count : {location.state.vote_count}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
