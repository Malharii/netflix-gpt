import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

function Browse() {
  const showgptsearch = useSelector((store) => store.gpt.showGptserch);

  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRated();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showgptsearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}

      {/* mainconatiner
           -videobackground
           -videoTital
       secondaryContainer
         -movielis*n
         -cards *n   
         */}
    </div>
  );
}

export default Browse;
