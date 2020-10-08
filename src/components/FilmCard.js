import React, { forwardRef, useState } from "react";
import "../styles/FilmCard.css";
import TextTruncate from "react-text-truncate";
import ModalMovie from "./ModalMovie";

const FilmCard = forwardRef(({ movie }, ref) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div
      ref={ref}
      className="filmCard"
      onClick={() => setModalIsOpen(!modalIsOpen)}
    >
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      ></img>

      <h2 className="filmCard__description">
        {movie.title || movie.original_name}
      </h2>

      <ModalMovie
        movie={movie}
        url={base_url}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </div>
  );
});

export default FilmCard;
