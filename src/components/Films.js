import React, { useState, useEffect } from "react";
import "../styles/Films.css";
import FilmCard from "./FilmCard";
import axios from "axios";
import FlipMove from "react-flip-move";
import Pagination from "./Pagination";

function Films({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption + "&page=" + page);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [page, selectedOption]);

  return (
    <div className="films">
      <FlipMove>
        {movies.map((movie) => {
          return <FilmCard key={movie.id} movie={movie} />;
        })}
      </FlipMove>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Films;
