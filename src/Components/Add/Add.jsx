import React, { useState } from "react";
import { ResultCard } from "../MovieCard/ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [movieResult, setMovieResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include-adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          //   console.log(data.results);
          setMovieResults(data.results);
        } else {
          setMovieResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a Movie"
              value={query}
              onChange={onChange}
            />
          </div>
          {movieResult.length > 0 && (
            <ul className="results">
              {movieResult.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie}></ResultCard>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
