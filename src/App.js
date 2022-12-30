import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Movies from "./Components/Movies/Movies";
import Series from "./Components/Series/Series";
import Search from "./Components/Search/Search";
import Pagination from "./Components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, getAllMovies } from "./Redux/Slice/movieSlice";
import { genre } from "./Redux/Slice/genreSlice";
import { page } from "./Redux/Slice/pageSlice";
import Login from "./Components/Login/Login";
import Account from "./Components/Account/Account";

function App() {
  const movies = useSelector(getAllMovies);
  const search = useSelector((state) => state.search);
  const pageNo = useSelector((state) => state.page);
  const Auth = useSelector((state) => state.auth);
  const genreSelected = useSelector((state) => state.genre);
  const dispatch = useDispatch();
  console.log(Auth);
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/${genreSelected}?api_key=219abf0a69c0d25a16cca43a3fa1c110&query=${search}&page=${pageNo}`
        )
        .then((resp) => {
          dispatch(addMovies(resp.data.results));
        });
    };
    fetch();
  }, [dispatch, search, genreSelected, genre, pageNo]);
  console.log(movies);
  return (
    <Router basename="Netflix-clone">
      <div className="App">
        <Header />
        {Auth ? (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Pagination />
                  <Home movies={movies} />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                <>
                  <Pagination />
                  <Movies movies={movies} />
                </>
              }
            />
            <Route
              path="/tvshows"
              element={
                <>
                  <Pagination />
                  <Series movies={movies} />
                </>
              }
            />
            <Route path="/detail/:id" element={<About movies={movies} />} />
            <Route path="/search" element={<Search movies={movies} />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
