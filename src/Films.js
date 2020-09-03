import React, { useState, useEffect } from "react";
import "./Films.css";
import FilmCard from "./FilmCard";
import axios from "axios";
import FlipMove from "react-flip-move";

function Films({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="films">
      <FlipMove>
        {movies.map((movie) => {
          return <FilmCard key={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
}

export default Films;
