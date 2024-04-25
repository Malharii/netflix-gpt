import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-40 pl-6 relative z-40 ">
        {/* <MovieList title="Now Playing" movies={movies.nowPlayingMovies} /> */}
        <MovieList title="Trending " movies={movies.nowPlayingMovies} />
        <MovieList title="Toprated" movies={movies.topRatedMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />

        <MovieList title="UpComing Movies" movies={movies.upcomingMovies} />
      </div>

      {/* 
                      movies list -populer
                      moviesCard-now playing
                      movieList -trending
                      MovieList -Horrer 
    */}
    </div>
  );
}

export default SecondryContainer;
