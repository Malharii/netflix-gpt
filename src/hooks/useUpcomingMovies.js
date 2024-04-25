import { API_OPTIONS } from "../utils/constanat";
import { useDispatch } from "react-redux";
import { addUppcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // fetch  data from  tmdb api and upadate redux store
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);
    dispatch(addUppcomingMovies(json.results));
    console.log("malhar");
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
