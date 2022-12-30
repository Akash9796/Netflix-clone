import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,
  Tv,
  TvOutlined,
  Movie,
  MovieOutlined,
  ListAlt,
  ListAltOutlined,
  Menu,
  Close,
} from "@material-ui/icons";

import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(window.location.pathname);
  const [show, setShow] = useState(true);
  const Auth = useSelector((state) => state.auth);

  if (typeof localStorage.getItem("user") !== "undefined") {
    var user = JSON.parse(window.localStorage.getItem("user"));
  }
  if (user) {
    var { photo } = user;
  }
  console.log(photo);
  return (
    <div className="header1">
      <Avatar
        className="logo"
        variant="square"
        style={{
          width: "100px",
          // right: "200px",
          margin: "5px 0",
        }}
        src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
      />
      {Auth ? (
        <div className={`header2${show}`}>
          <div className="left">
            <Link to="/" onClick={() => (setTab("/"), setShow(!show))}>
              {tab === "/" ? (
                <Home style={{ color: "white" }} />
              ) : (
                <HomeOutlined />
              )}
            </Link>
            <Link
              to="/movies"
              onClick={() => (setTab("/movies"), setShow(!show))}
            >
              {tab === "/movies" ? (
                <Movie style={{ color: "white" }} />
              ) : (
                <MovieOutlined />
              )}
            </Link>
            <Link
              to="/tvshows"
              onClick={() => (setTab("/tvshows"), setShow(!show))}
            >
              {tab === "/tvshows" ? (
                <Tv style={{ color: "white" }} />
              ) : (
                <TvOutlined />
              )}
            </Link>
          </div>
          <div className="right">
            <Link
              to="/search"
              onClick={() => (setTab("/search"), setShow(!show))}
            >
              {tab === "/search" ? (
                <Search style={{ color: "white" }} />
              ) : (
                <SearchOutlined />
              )}
            </Link>
            <Link to="/account" onClick={() => setTab("/account")}>
              <Avatar
                src={photo}
                style={{
                  fontSize: "1rem",
                }}
              />
            </Link>
          </div>
        </div>
      ) : (
        <p style={{ color: "white" }}>Login | Register</p>
      )}
      <div className="menuIcon" onClick={() => setShow(!show)}>
        {show ? <Menu /> : <Close />}
      </div>
    </div>
  );
}
