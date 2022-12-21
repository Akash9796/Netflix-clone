import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Display.css";
export default function Display({ genres, movies, setGenreID }) {
  return (
    <>
      <div className="main">
        <div className="genres">
          {genres &&
            genres.map((data) => (
              <button onClick={() => setGenreID(data.id)} key={data.id}>
                {data.name}
              </button>
            ))}
        </div>
        <h1>More Like This</h1>
        <div className="cart">
          {movies ? (
            movies.map((data) => (
              <div className="cartItems" key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <img
                    
                    src={`https://image.tmdb.org/t/p/w300/${data?.backdrop_path}`}
                    alt={data?.name}
                  />
                </Link>
                <h1>{data?.title}</h1>
              </div>
            ))
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </>
  );
}

