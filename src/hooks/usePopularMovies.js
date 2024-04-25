import { API_OPTIONS } from "../utils/constanat";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPopularMovies = () => {
  // fetch  data from  tmdb api and upadate redux store
  const dispatch = useDispatch();
  const getNowPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getNowPopularMovie();
  }, []);
};

export default useNowPopularMovies;
