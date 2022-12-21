import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { genre } from "../../Redux/Slice/genreSlice";
import { search } from "../../Redux/Slice/searchSlice";
import Display from "../Display/Display";

export default function Search({ movies }) {
  const [value, setValue] = useState();
  const [debouncedValue, setDebouncedValue] = useState("");
  const dispatch = useDispatch();
  dispatch(genre("search/movie"));

  useEffect(() => {
    setTimeout(() => {
      dispatch(search(debouncedValue));
      console.log(debouncedValue);
    }, 1000);
  }, [dispatch, debouncedValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <>
      <div
        style={{
          // width: "100vw",
          height: value ? "10vh" : "93vh",
          background: "#1a1919",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <input
            style={{
              margin: "20px 0",
              fontSize: "1.5rem",
              color: "black",
              width: "40%",
            }}
            placeholder="Search..."
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      {debouncedValue && <Display movies={movies} />}
    </>
  );
}
