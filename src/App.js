import "./App.css";
import React from "react";
import { Header } from "./Components/Header/Header";
import { Watchlist } from "./Components/Watchlist/Watchlist";
import { Watched } from "./Components/Watched/Watched";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Add } from "./Components/Add/Add";
import { Moviedetails } from "./Components/MovieDetails/Moviedetails";
import "font-awesome/css/font-awesome.min.css";

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Watchlist />}></Route>

        <Route path="/watched" element={<Watched />}></Route>

        <Route path="/add" element={<Add />}></Route>

        <Route path="/details" element={<Moviedetails />}></Route>
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
