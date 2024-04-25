import React from "react";
import { IMG_CDN_URL } from "../utils/constanat";

function MovieCard({ posterPath }) {
  return (
    <div className="w-48 pr-3">
      <img alt="movie card " src={IMG_CDN_URL + posterPath} />
    </div>
  );
}

export default MovieCard;
