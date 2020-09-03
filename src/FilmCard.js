import React, { forwardRef } from "react";
import "./FilmCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const base_url = "https://image.tmdb.org/t/p/original";

const FilmCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="filmCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      ></img>

      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="filmCard__about">
        {/* <p className="filmCard__about__item">{movie.media_type && `${movie.media_type}`}</p> */}
        <p className="filmCard__about__item">
          {movie.release_date || movie.first_air_date}
        </p>
        <p className="filmCard__about__item">
          <ThumbUpIcon />
        </p>
        <p className="filmCard__about__item">{movie.vote_count}</p>
      </p>
    </div>
  );
});

export default FilmCard;
