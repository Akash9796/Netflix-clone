import { Info, PlayArrow, VideoCall } from "@material-ui/icons";
import React from "react";
import { useParams } from "react-router-dom";
import "./About.css";
export default function About({ movies }) {
  const params = useParams();
  const data = movies.filter((m) => m.id == params.id)[0];
  console.log(data);

  const photo = window.innerWidth > 700 ? "backdrop_path" : "poster_path";

  return (
    data && (
      <div>
        <div className="front" {...photo}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${data?.backdrop_path}`}
            alt="Strangers Things"
          />
        </div>
        <div className="page">
          <div className="container">
            <div className="logo">
              <img
                src={`https://image.tmdb.org/t/p/w300/${data?.poster_path}`}
                alt=""
              />
            </div>
            <div className="buttons">
              <button>
                <PlayArrow /> <p>Play</p>
              </button>
              <button>
                <Info /> <p>Info</p>
              </button>
              <button>
                <VideoCall /> <p>Trailer</p>
              </button>
            </div>
          </div>
          <div className="details">
            <h1>Title:{data.title ? data.title : data.name}</h1>
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
    )
  );
}
