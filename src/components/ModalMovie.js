import React from "react";
import Modal from "react-modal";
import "../styles/Modal.css";

function ModalMovie({ modalIsOpen, setModalIsOpen, movie, url }) {
  return (
    <div className="modal-wrapper">
      <Modal
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0, 0.75)",
          },
        }}
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <img
          className="modal__img"
          src={`${url}${movie.backdrop_path || movie.poster_path}`}
          alt=""
        ></img>
        <p className="modal__description">{movie.overview}</p>
      </Modal>
    </div>
  );
}

export default ModalMovie;
