import React from "react";
import "../styles/Header.css";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SearchIcon from "@material-ui/icons/Search";
import requests from "../requests/requests";

function Header({ setSelectedOption }) {
  const inputHandler = (event) => {
    setSelectedOption(requests.search + event.target.value);
  };
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>

        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="header__input"
            placeholder="Enter Movie Name"
            type="text"
            onChange={inputHandler}
          />
        </form>
      </div>
      <img className="header__logo" src="./images/hulu.svg" alt="Hulu"></img>
    </div>
  );
}

export default Header;
