import React from "react";
import { useSelector } from "react-redux";
import VideoTitel from "./VideoTitel";
import VideoBackGround from "./VideoBackGround";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies?.[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitel title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
}

export default MainContainer;
