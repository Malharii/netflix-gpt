import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

function Browse() {
  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRated();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />
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
