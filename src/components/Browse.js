import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

function Browse() {
  useNowPlayingMovies();
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
