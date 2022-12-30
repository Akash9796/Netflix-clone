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
        <h1>Top Trending..</h1>
        <div className="cart">
          {movies ? (
            movies.map((data) => (
              <>
                <div className="cartItems" key={data.id}>
                  <Link to={`/detail/${data.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${data?.poster_path}`}
                      alt={data?.name}
                    />
                  </Link>
                  <h1>{data.title ? data.title : data.name}</h1>
                  <div className="rating">
                    <div className="circle">
                      {Math.ceil(data.vote_average* 10)}%
                    </div>
                  </div>
                </div>
              </>
            ))
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </>
  );
}
