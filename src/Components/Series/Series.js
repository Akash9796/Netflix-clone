import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genre } from "../../Redux/Slice/genreSlice";
import { getAllMovies } from "../../Redux/Slice/movieSlice";
import Display from "../Display/Display";
export default function Series({movies}) {
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);
  const [genreID, setGenreID] = useState(18);
  
  useEffect(() => {
    // dispatch(genre("tv/popular"));
    const fetchGenre = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/genre/tv/list?api_key=219abf0a69c0d25a16cca43a3fa1c110`
        )
        .then((resp) => {
          setGenres(resp.data.genres);
        });
    };
    fetchGenre();
  }, []);

  const seriesFiltered = movies?.filter(
    (i) => i?.genre_ids.includes(genreID) && i?.media_type === "tv"
  );
  return (
    <div>
      <Display
        genres={genres}
        movies={seriesFiltered}
        setGenreID={setGenreID}
      />
    </div>
  );
}
